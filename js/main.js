(function () {

  /* ══════════════════════════════════════
     NAV — active link on scroll
  ══════════════════════════════════════ */
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

  /* ══════════════════════════════════════
     MOBILE MENU
  ══════════════════════════════════════ */
  const toggle = document.getElementById('menu-toggle');
  const links  = document.querySelector('.navbar-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('mobile-open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('mobile-open'));
    });
  }

  /* ══════════════════════════════════════
     SCROLL ANIMATIONS
  ══════════════════════════════════════ */
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        animObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

  /* ══════════════════════════════════════
     PHONE MASK — (XX) XXXXX-XXXX
  ══════════════════════════════════════ */
  const phoneInput = document.getElementById('telefone');

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (v.length === 0) { e.target.value = ''; return; }

      if (v.length <= 2)  v = `(${v}`;
      else if (v.length <= 6)  v = `(${v.slice(0,2)}) ${v.slice(2)}`;
      else if (v.length <= 10) v = `(${v.slice(0,2)}) ${v.slice(2,6)}-${v.slice(6)}`;
      else                     v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;

      e.target.value = v;
    });

    phoneInput.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        const val = e.target.value;
        if (/[\s\-\(]$/.test(val)) {
          e.preventDefault();
          e.target.value = val.slice(0, -1);
        }
      }
    });
  }

  /* ══════════════════════════════════════
     FORM VALIDATION & SUBMIT
  ══════════════════════════════════════ */
  const EMAILJS_SERVICE_ID  = 'service_8ajr3ez';
  const EMAILJS_TEMPLATE_ID = 'template_8qlf0vs';

  const RULES = {
    from_name:    { required: true, minLen: 3,  label: 'Nome',        msg: 'Informe seu nome completo (mínimo 3 caracteres).' },
    from_email:   { required: true, email: true, label: 'E-mail',     msg: 'Informe um e-mail válido.' },
    phone:        { required: false, phone: true, label: 'Telefone',  msg: 'Informe um telefone válido, ex: (61) 99999-9999.' },
    especialidade:{ required: true,  label: 'Especialidade',          msg: 'Selecione uma especialidade.' },
    message:      { required: true, minLen: 10, label: 'Mensagem',    msg: 'Escreva uma mensagem (mínimo 10 caracteres).' },
  };

  function validate(input) {
    const rule = RULES[input.name];
    if (!rule) return true;

    const val = input.value.trim();

    if (rule.required && val === '')          return setError(input, rule.msg);
    if (rule.minLen  && val.length < rule.minLen && val !== '') return setError(input, rule.msg);
    if (rule.email   && val !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return setError(input, rule.msg);
    if (rule.phone   && val !== '' && val.replace(/\D/g,'').length < 10)        return setError(input, rule.msg);

    return clearError(input);
  }

  function setError(input, msg) {
    input.classList.add('input-error');
    input.classList.remove('input-ok');
    let err = input.parentElement.querySelector('.field-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'field-error';
      input.parentElement.appendChild(err);
    }
    err.textContent = msg;
    return false;
  }

  function clearError(input) {
    input.classList.remove('input-error');
    input.classList.add('input-ok');
    const err = input.parentElement.querySelector('.field-error');
    if (err) err.remove();
    return true;
  }

  const form = document.querySelector('form');
  if (!form) return;

  /* Validate on blur */
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('blur', () => validate(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('input-error')) validate(input);
    });
  });

  /* Submit */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = [...form.querySelectorAll('.form-input')];
    const allValid = inputs.map(validate).every(Boolean);
    if (!allValid) {
      const firstErr = form.querySelector('.input-error');
      if (firstErr) firstErr.focus();
      return;
    }

    const captchaError = form.querySelector('.captcha-error');
    const captchaToken = (typeof hcaptcha !== 'undefined') ? hcaptcha.getResponse() : '';
    if (!captchaToken) {
      captchaError.style.display = 'block';
      captchaError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    captchaError.style.display = 'none';

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = 'Enviando…';
    btn.disabled = true;

    const params = {
      from_name:            form.querySelector('[name="from_name"]').value.trim(),
      from_email:           form.querySelector('[name="from_email"]').value.trim(),
      phone:                form.querySelector('[name="phone"]').value.trim(),
      especialidade:        form.querySelector('[name="especialidade"]').value,
      message:              form.querySelector('[name="message"]').value.trim(),
      'h-captcha-response': captchaToken,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
      .then(() => {
        btn.innerHTML = 'Mensagem enviada! ✓';
        btn.style.background = 'linear-gradient(180deg, #d1fae5, #a7f3d0)';
        form.reset();
        hcaptcha.reset();
        inputs.forEach(i => { i.classList.remove('input-ok', 'input-error'); });
        form.querySelectorAll('.field-error').forEach(el => el.remove());
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        hcaptcha.reset();
        const detail = err?.text || err?.message || JSON.stringify(err);
        btn.innerHTML = `Erro: ${detail}`;
        btn.style.background = 'linear-gradient(180deg, #fee2e2, #fecaca)';
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.disabled = false;
        }, 6000);
      });
  });

})();
