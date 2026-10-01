const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Header shrink on scroll */
const header = document.getElementById('header');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* Mobile nav */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle && nav) {
  const close = () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
}

/* Reveal on scroll */
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* Hero video */
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  if (reduceMotion) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
  } else {
    const show = () => heroVideo.classList.add('is-ready');
    heroVideo.addEventListener('playing', show, { once: true });
    heroVideo.addEventListener('canplay', show, { once: true });
    const play = heroVideo.play();
    if (play && typeof play.catch === 'function') play.catch(() => {});
  }
}

/* Lightbox */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

if (lightbox && lightboxImg) {
  const open = (src, alt) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-lightbox]').forEach((btn) => {
    btn.addEventListener('click', () => open(btn.dataset.full, btn.getAttribute('aria-label')));
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxClose) close();
  });
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
}

/* Hero dust particles (lightweight canvas) */
const dust = document.getElementById('heroDust');
if (dust && !reduceMotion) {
  const ctx = dust.getContext('2d');
  let w = 0;
  let h = 0;
  let particles = [];
  let raf = 0;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = dust.clientWidth;
    h = dust.clientHeight;
    dust.width = Math.floor(w * dpr);
    dust.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(70, Math.max(24, w / 26)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -(Math.random() * 0.35 + 0.08),
      a: Math.random() * 0.5 + 0.15,
      t: Math.random() * Math.PI * 2,
    }));
  };

  const frame = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.t += 0.01;
      p.x += p.vx + Math.sin(p.t) * 0.15;
      p.y += p.vy;
      if (p.y < -6) {
        p.y = h + 6;
        p.x = Math.random() * w;
      }
      if (p.x < -6) p.x = w + 6;
      if (p.x > w + 6) p.x = -6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 236, 214, ${p.a})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  };

  resize();
  frame();
  window.addEventListener('resize', resize);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else {
      frame();
    }
  });
}
