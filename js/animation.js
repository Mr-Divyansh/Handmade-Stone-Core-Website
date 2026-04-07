/* ---- Navbar scroll ---- */
const navbar = document.getElementById('mainNav');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ---- Newsletter Subscription ---- */
function subscribeNewsletter() {
  const emailInput = document.querySelector('.newsletter-form input');
  if (emailInput) {
    const email = emailInput.value;
    if (email && email.includes('@')) {
      alert('Thank you for subscribing! You will receive 10% off on your first order.');
      emailInput.value = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }
}

/* ---- Attach Newsletter Button ---- */
document.addEventListener('DOMContentLoaded', () => {
  const newsletterBtn = document.querySelector('.newsletter-form button');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', subscribeNewsletter);
  }
  
  const newsletterInput = document.querySelector('.newsletter-form input');
  if (newsletterInput) {
    newsletterInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        subscribeNewsletter();
      }
    });
  }
});

/* ---- Mobile Menu ---- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
  if (hamburger) hamburger.classList.add('open');
  if (mobileNav) {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
  }
  document.body.classList.add('nav-open');
}

function closeMenu() {
  if (hamburger) hamburger.classList.remove('open');
  if (mobileNav) {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('nav-open');
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });
}

if (mobileLinks) {
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});