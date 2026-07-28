(() => {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('#menuToggle');
  const nav = document.querySelector('#navMenu');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const buttons = document.querySelectorAll('.btn');
  const heroMedia = document.querySelector('.hero-media');

  const handleHeaderOnScroll = () => {
    if (!header) return;
    const hasScrolled = window.scrollY > 24;
    header.classList.toggle('scrolled', hasScrolled);
  };

  const closeMenu = () => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  };

  const setupMenu = () => {
    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  };

  const setupRipple = () => {
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);

        ripple.className = 'ripple';
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

        button.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
      });
    });
  };

  const setupParallax = () => {
    if (!heroMedia) return;
    heroMedia.classList.add('parallax-item');

    window.addEventListener('scroll', () => {
      const offset = Math.min(window.scrollY * 0.08, 36);
      heroMedia.style.transform = `translateY(${offset}px)`;
    }, { passive: true });
  };

  window.addEventListener('scroll', handleHeaderOnScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) closeMenu();
  });

  handleHeaderOnScroll();
  setupMenu();
  setupRipple();
  setupParallax();
})();
