(function () {
  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id], div[id="inicio"]');
  const navLinks = document.querySelectorAll('.navbar-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  /* ── Mobile menu toggle ── */
  const toggle = document.getElementById('menu-toggle');
  const links  = document.querySelector('.navbar-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.contains('mobile-open');
      links.classList.toggle('mobile-open', !isOpen);
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('mobile-open'));
    });
  }

  /* ── Scroll-triggered fade-in-up ── */
  const animEls = document.querySelectorAll('[data-animate]');

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        animObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  animEls.forEach(el => animObserver.observe(el));

  /* ── Form submit via EmailJS ── */
  const EMAILJS_SERVICE_ID  = 'service_8ajr3ez';
  const EMAILJS_TEMPLATE_ID = 'template_h9wz0f9';

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;

      btn.innerHTML = 'Enviando…';
      btn.disabled = true;

      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
        .then(() => {
          btn.innerHTML = 'Mensagem enviada! ✓';
          btn.style.background = 'linear-gradient(180deg, #d1fae5, #a7f3d0)';
          form.reset();
          setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
            btn.disabled = false;
          }, 4000);
        })
        .catch((err) => {
          console.error('EmailJS error:', err);
          btn.innerHTML = 'Erro ao enviar. Tente novamente.';
          btn.style.background = 'linear-gradient(180deg, #fee2e2, #fecaca)';
          setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
            btn.disabled = false;
          }, 4000);
        });
    });
  }
})();
