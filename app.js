(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  const closeMenu = () => { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); };
  menuButton.addEventListener('click', () => { const open = menu.hidden; menu.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { closeMenu(); menuButton.focus(); } });
  window.matchMedia('(min-width: 768px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  if ('IntersectionObserver' in window) {
    document.body.classList.add('motion-ready');
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); reveal.unobserve(entry.target); } }), { threshold: .12 });
    document.querySelectorAll('.reveal, .about').forEach(element => reveal.observe(element));
  }

  const video = document.querySelector('#welcome-film');
  const videoButton = document.querySelector('.video-control');
  let manuallyPaused = false;
  const setVideoLabel = () => { videoButton.innerHTML = video.paused ? 'Play film <span aria-hidden="true">▷</span>' : 'Pause film <span aria-hidden="true">Ⅱ</span>'; videoButton.setAttribute('aria-label', video.paused ? 'Play fashion film' : 'Pause fashion film'); };
  video.addEventListener('play', setVideoLabel);
  video.addEventListener('pause', setVideoLabel);
  videoButton.addEventListener('click', async () => { if (video.paused) { manuallyPaused = false; try { await video.play(); } catch { setVideoLabel(); } } else { manuallyPaused = true; video.pause(); } });
  if (!reducedMotion.matches) video.play().catch(setVideoLabel);
  reducedMotion.addEventListener('change', event => { if (event.matches) video.pause(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { if (!entries[0].isIntersecting) video.pause(); else if (!reducedMotion.matches && !manuallyPaused) video.play().catch(setVideoLabel); }, { threshold: .1 }).observe(video);
  }

  // Keep the old layer visible until its replacement has decoded. The request
  // token prevents a slower image from winning after fast or reverse scrolling.
  const swaps = new WeakMap();
  async function swapScreen(image, name, alt) {
    if (image.dataset.current === name) return;
    const token = {};
    swaps.set(image, token);
    const next = new Image();
    next.src = 'assets/screens/' + name + '.webp';
    try { await next.decode(); } catch { return; }
    if (swaps.get(image) !== token) return;
    const frame = image.parentElement;
    frame.classList.add('screen-stack');
    const overlay = document.createElement('img');
    overlay.className = 'screen-overlay'; overlay.alt = '';
    overlay.setAttribute('aria-hidden', 'true'); frame.append(overlay);
    overlay.src = next.src;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (swaps.get(image) === token) overlay.classList.add('visible');
    }));
    image.dataset.current = name;
    image.alt = alt;
    // The background remains opaque through the entire crossfade.
    clearTimeout(image._swapCommit);
    image._swapCommit = setTimeout(() => {
      if (swaps.get(image) !== token) return;
      image.src = next.src;
      frame.querySelectorAll('.screen-overlay').forEach(layer => layer.remove());
    }, reducedMotion.matches ? 0 : 460);
  }
  window.StyleIQ = { swapScreen };
  const choices = [...document.querySelectorAll('.tour-choice')];
  choices.forEach(choice => choice.addEventListener('click', () => { choices.forEach(button => { const active = button === choice; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); }); swapScreen(document.querySelector('#tour-screen'), choice.dataset.screen, choice.dataset.alt); }));

})();
