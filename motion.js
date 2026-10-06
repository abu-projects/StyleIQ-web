/* Native scroll scenes: all geometry is read together before style updates. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const small = matchMedia('(max-width: 767px)');
  const clamp = value => Math.max(0, Math.min(1, value));
  const hero = document.querySelector('.hero');
  const assemblies = [...document.querySelectorAll('[data-assemble]')].map(element => ({element, pieces:[...element.querySelectorAll('.assembly-piece')]}));
  const featureChapters = [...document.querySelectorAll('.feature-chapter')];
  const twinChapters = [...document.querySelectorAll('.twin-chapter')];
  const studioChapters = [...document.querySelectorAll('.studio-step')];
  const twinLayers = [...document.querySelectorAll('.twin-layer')];
  const studioPieces = [...document.querySelectorAll('.studio-canvas .assembly-piece')];
  const studioLabels = ['Start from your closet','Choose a piece','Muse suggests a combination','A different top. Still you.','The complete look','Save · Wear · Plan'];
  const studioDetails = ['Your pieces, ready to explore.','A favourite blazer sets the direction.','Compatible pieces, brought together.','An ivory tank changes the mood.','Finish with shoes and a favourite bag.','Keep the look ready for another day.'];
  let twinIndex = -1, studioIndex = -1, featureIndex = -1;
  let twinRequest = 0, studioRequest = 0, studioTimer = 0, scheduled = false;
  const holds = {twin:null, studio:null};
  function selectedButtons(selector, index) {
    document.querySelectorAll(selector).forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  }
  async function twinTransform(index) {
    if (twinIndex === index) return;
    const request = ++twinRequest;
    try { await twinLayers[index].decode(); } catch { return; }
    if (request !== twinRequest) return;
    twinIndex = index;
    twinLayers.forEach((layer,i) => layer.classList.toggle('active', i === index));
    document.querySelector('#twin-label').textContent = ['Daytime','Relaxing','Evening'][index];
    document.querySelector('#twin-number').textContent = `0${index + 1} / 03`;
    document.querySelector('.twin-images').setAttribute('aria-label', `Style Twin: ${['Daytime','Relaxing','Evening'][index]} style preview`);
    selectedButtons('[data-twin-select]',index);
  }
  function museMagic(index) {
    if (studioIndex === index) return;
    studioIndex = index;
    const opacities = index === 0 ? [.45,.45,.45,.45,.45] : index === 1 ? [1,0,0,0,0] : index < 4 ? [1,index === 3 ? 0 : 1,1,0,0] : [1,0,1,1,1];
    const request = ++studioRequest;
    clearTimeout(studioTimer);
    const cue = document.querySelector('.studio-cue');
    cue.classList.remove('pulse');
    const magic = !reduced.matches && (index === 2 || index === 3);
    if (magic) requestAnimationFrame(() => { if (request === studioRequest) cue.classList.add('pulse'); });
    if (index === 3) studioPieces[1].style.setProperty('--studio-opacity',0);
    function settle() {
      if (request !== studioRequest) return;
      studioPieces.forEach((piece,i) => piece.style.setProperty('--studio-opacity',opacities[i]));
      document.querySelector('.studio-replacement').style.opacity = index >= 3 ? '1' : '0';
      document.querySelector('#studio-label').textContent = studioLabels[index];
      document.querySelector('#studio-detail').textContent = studioDetails[index];
      const canvas = document.querySelector('.studio-canvas');
      canvas.setAttribute('role','img'); canvas.setAttribute('aria-label', `${studioLabels[index]}. ${studioDetails[index]}`);
    }
    if (magic) studioTimer = setTimeout(settle,180); else settle();
    selectedButtons('[data-studio-select]',index);
  }
  document.querySelectorAll('[data-twin-select]').forEach(button => button.addEventListener('click', () => { holds.twin = scrollY; twinTransform(Number(button.dataset.twinSelect)); }));
  document.querySelectorAll('[data-studio-select]').forEach(button => button.addEventListener('click', () => { holds.studio = scrollY; museMagic(Number(button.dataset.studioSelect)); }));
  document.querySelectorAll('.save-look').forEach(button => button.addEventListener('click', () => {
    const saved = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed',String(saved)); button.textContent = saved ? '♥' : '♡';
  }));
  const nearest = (rects, height) => {
    let index = 0, distance = Infinity;
    rects.forEach((rect,i) => { const current = Math.abs(rect.top + rect.height / 2 - height * .53); if (current < distance) { distance = current; index = i; } });
    return index;
  };
  function frame() {
    scheduled = false;
    const height = innerHeight, position = scrollY;
    // Read phase. Never measure an element after a mutation in this frame.
    const heroRect = hero.getBoundingClientRect();
    const assemblyRects = assemblies.map(scene => scene.element.getBoundingClientRect());
    const features = featureChapters.map(element => element.getBoundingClientRect());
    const twins = twinChapters.map(element => element.getBoundingClientRect());
    const studios = studioChapters.map(element => element.getBoundingClientRect());
    // Write phase. A single scheduled frame per native scroll event batch.
    hero.style.setProperty('--hero-progress',reduced.matches ? 0 : clamp(-heroRect.top / heroRect.height));
    assemblies.forEach((scene,i) => {
      const rect = assemblyRects[i];
      if (rect.bottom < -100 || rect.top > height + 100) return;
      const progress = reduced.matches ? 1 : clamp((height * .9 - rect.top) / (height * .65));
      scene.element.style.setProperty('--assembly-progress',progress);
      scene.element.style.setProperty('--result-progress',clamp((progress - .7) / .3));
      scene.pieces.forEach((piece,j) => piece.style.setProperty('--piece-progress',clamp((progress - j * .085) / .66)));
    });
    if (!small.matches && !reduced.matches) {
      if (features[0].top < height && features.at(-1).bottom > 0) {
        const index = nearest(features,height);
        if (featureIndex !== index) {
          featureIndex = index;
          const chapter = featureChapters[index];
          window.StyleIQ.swapScreen(document.querySelector('#feature-screen'),chapter.dataset.screen,chapter.dataset.alt);
          document.querySelector('#feature-count').textContent = `0${index + 1}`;
          document.querySelector('#feature-label').textContent = chapter.dataset.caption;
        }
      }
      if (holds.twin !== null && Math.abs(position - holds.twin) > 100) holds.twin = null;
      if (holds.studio !== null && Math.abs(position - holds.studio) > 100) holds.studio = null;
      if (holds.twin === null && twins[0].top < height && twins.at(-1).bottom > 0) twinTransform(nearest(twins,height));
      if (holds.studio === null && studios[0].top < height && studios.at(-1).bottom > 0) museMagic(nearest(studios,height));
    }
  }
  const schedule = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(frame); } };
  addEventListener('scroll',schedule,{passive:true}); addEventListener('resize',schedule,{passive:true});
  reduced.addEventListener('change',schedule); small.addEventListener('change',schedule);
  museMagic(0); twinTransform(0); schedule();
  // Supporting entrances are one-shot; numbers use their own data animation.
  const metrics = document.querySelector('.intelligence');
  const numbers = [...metrics.querySelectorAll('[data-count]')];
  let countFrame = 0;
  function finishMetrics() { cancelAnimationFrame(countFrame); numbers.forEach(number => number.textContent = number.dataset.count); metrics.style.setProperty('--metric-progress',.88); }
  function countMetrics() {
    if (reduced.matches) { finishMetrics(); return; }
    const start = performance.now();
    function count(now) {
      const progress = clamp((now - start) / 1000), eased = 1 - (1 - progress) ** 3;
      numbers.forEach(number => number.textContent = Math.round(Number(number.dataset.count) * eased));
      metrics.style.setProperty('--metric-progress',eased * .88);
      if (progress < 1 && !reduced.matches) countFrame = requestAnimationFrame(count); else finishMetrics();
    }
    countFrame = requestAnimationFrame(count);
  }
  reduced.addEventListener('change',event => { if (event.matches) finishMetrics(); });
  if ('IntersectionObserver' in window) {
    const entrances = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view'); entrances.unobserve(entry.target);
      if (entry.target === metrics) countMetrics();
    }),{threshold:.12});
    document.querySelectorAll('.muse,.discover,.download,.planner-demo,.intelligence').forEach(element => entrances.observe(element));
  } else {
    document.querySelectorAll('.muse,.discover,.download,.planner-demo').forEach(element => element.classList.add('in-view')); finishMetrics();
  }
})();
