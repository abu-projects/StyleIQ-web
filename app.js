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

  const swapTimers = new WeakMap();
  function swapScreen(image, name, alt) {
    if (image.dataset.current === name) return;
    clearTimeout(swapTimers.get(image));
    image.dataset.current = name;
    if (reducedMotion.matches) { image.src = 'assets/screens/' + name + '.webp'; image.alt = alt; image.classList.remove('switching'); return; }
    image.classList.add('switching');
    swapTimers.set(image, setTimeout(() => { image.src = 'assets/screens/' + name + '.webp'; image.alt = alt; image.classList.remove('switching'); }, 180));
  }
  const screen = document.querySelector('#feature-screen');
  const chapters = [...document.querySelectorAll('.feature-chapter')];
  if ('IntersectionObserver' in window) {
    const chapterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (!entry.isIntersecting || window.innerWidth < 768) return; const chapter = entry.target; swapScreen(screen, chapter.dataset.screen, chapter.dataset.alt); document.querySelector('#feature-count').textContent = String(chapters.indexOf(chapter) + 1).padStart(2, '0'); document.querySelector('#feature-label').textContent = chapter.dataset.caption; });
    }, { rootMargin: '-35% 0px -35% 0px', threshold: 0 });
    chapters.forEach(chapter => chapterObserver.observe(chapter));
  }
  const choices = [...document.querySelectorAll('.tour-choice')];
  choices.forEach(choice => choice.addEventListener('click', () => { choices.forEach(button => { const active = button === choice; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); }); swapScreen(document.querySelector('#tour-screen'), choice.dataset.screen, choice.dataset.alt); }));

  // Native scrolling drives the device pose; no pinned timeline or scroll hijacking.
  const devices = [...document.querySelectorAll('.phone')].map(element => ({
    element,
    scene: element.closest('.hero-visual, .step-image, .feature-stage, .feature-chapter, .tour-visual, .download-visual'),
    direction: element.closest('.step') ? [...document.querySelectorAll('.step')].indexOf(element.closest('.step')) - 1 : 1
  }));
  let motionFrame = 0;
  const clamp = value => Math.max(-1, Math.min(1, value));
  function paintDevices() {
    motionFrame = 0;
    if (reducedMotion.matches) return;
    const viewport = window.innerHeight;
    const chapterBounds = chapters.map(chapter => chapter.getBoundingClientRect());
    devices.forEach(({ element, scene, direction }) => {
      const bounds = scene.getBoundingClientRect();
      const visible = bounds.bottom > -100 && bounds.top < viewport + 100 && element.getClientRects().length > 0;
      element.classList.toggle('motion-active', visible);
      if (!visible) return;
      let progress = clamp((viewport / 2 - (bounds.top + bounds.height / 2)) / ((viewport + bounds.height) / 2));
      if (element.classList.contains('feature-phone')) {
        const first = chapterBounds[0];
        // A continuous arc between chapters settles front-facing at each chapter centre.
        progress = Math.sin((viewport / 2 - first.top - first.height / 2) / first.height * Math.PI);
      }
      const intensity = window.innerWidth < 768 ? .65 : 1;
      element.style.setProperty('--device-x', `${(-progress * 12 * intensity).toFixed(2)}deg`);
      element.style.setProperty('--device-y', `${(progress * 28 * (direction || .5) * intensity).toFixed(2)}deg`);
      element.style.setProperty('--device-lift', `${(-progress * 40 * intensity).toFixed(2)}px`);
    });
  }
  function requestMotion() {
    if (!reducedMotion.matches && !motionFrame) motionFrame = requestAnimationFrame(paintDevices);
  }
  window.addEventListener('scroll', requestMotion, { passive: true });
  window.addEventListener('resize', requestMotion, { passive: true });
  window.addEventListener('load', requestMotion, { once: true });
  reducedMotion.addEventListener('change', () => {
    cancelAnimationFrame(motionFrame);
    motionFrame = 0;
    devices.forEach(({ element }) => {
      element.classList.remove('motion-active');
      ['--device-x', '--device-y', '--device-lift'].forEach(property => element.style.removeProperty(property));
    });
    requestMotion();
  });
  requestMotion();
})();
