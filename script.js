const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const year = document.getElementById('year');
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

year.textContent = new Date().getFullYear();

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    formMessage.textContent = 'Please complete all required fields correctly.';
    formMessage.style.color = '#b42318';
    return;
  }

  formMessage.textContent = 'Thanks! Your message has been received.';
  formMessage.style.color = '#0a6f57';
  form.reset();
});
