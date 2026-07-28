(() => {
  const revealElements = document.querySelectorAll('.reveal');
  const counters = document.querySelectorAll('.counter');
  const bars = document.querySelectorAll('.bar');

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target;
        const delay = Number(target.dataset.delay || 0);
        if (delay) target.style.animationDelay = `${delay}ms`;

        target.classList.add('is-visible');
        observer.unobserve(target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  const formatNumber = (value, decimals = 0) => {
    return Number(value).toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };

  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const decimals = Number(element.dataset.decimals || 0);
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    const duration = 1800;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = target * eased;

      element.textContent = `${prefix}${formatNumber(currentValue, decimals)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = `${prefix}${formatNumber(target, decimals)}${suffix}`;
      }
    };

    requestAnimationFrame(step);
  };

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.5
    }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  const barsObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const bar = entry.target;
        const width = Number(bar.dataset.width || 0);
        bar.style.width = `${width}%`;

        observer.unobserve(bar);
      });
    },
    {
      threshold: 0.45
    }
  );

  bars.forEach((bar) => barsObserver.observe(bar));
})();
