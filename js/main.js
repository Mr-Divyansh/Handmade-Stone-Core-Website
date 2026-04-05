const PRODUCTS = [
  {
    id: 1,
    name: 'Handcrafted Miniature Zen Garden Diorama',
    category: 'Zen Stack',
    price: 1899,
    description: 'A beautifully handcrafted miniature Zen garden diorama featuring natural stones, moss, and bonsai — perfect for desk or shelf decor.',
    image: 'Product/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones 1.png',
    fallback: 'img/Image1.png'
  },
  {
    id: 2,
    name: 'Harmony Bridge Zen Garden',
    category: 'Bridge Series',
    price: 2299,
    description: 'A handcrafted stone bridge garden with natural river stones, miniature shrine, and lush green moss. Brings harmony to any space.',
    image: 'Product/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama 1.png',
    fallback: 'img/Image2.png'
  },
  {
    id: 3,
    name: 'Serene Monk Bonsai Garden',
    category: 'Monk Series',
    price: 2499,
    description: 'A serene handcrafted monk bonsai garden with a meditating monk figurine surrounded by natural stones and bonsai branches.',
    image: 'Product/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama 1.png',
    fallback: 'img/Image3.png'
  },
  {
    id: 4,
    name: 'Stone Lantern Bonsai Retreat',
    category: 'Bonsai Collection',
    price: 1999,
    description: 'A peaceful stone lantern retreat with miniature bonsai, natural slate stones, and a glowing lantern centerpiece.',
    image: 'Product/Stone Lantern Bonsai Retreat/Stone Lantern Bonsai Retreat 1.png',
    fallback: 'img/Image4.png'
  },
  {
    id: 5,
    name: 'Whispering Bonsai Sanctuary',
    category: 'Bonsai Collection',
    price: 2199,
    description: 'A miniature bonsai sanctuary with whispering bamboo-style trees, stacked stones, and delicate moss arrangements.',
    image: 'Product/Whispering Bonsai Sanctuary – Miniature Zen Garden with Apple Perch/Whispering Bonsai Sanctuary – Miniature Zen Garden with Apple Perch 1.png',
    fallback: 'img/Image2.png'
  },
  {
    id: 6,
    name: 'Whispering Monk Zen Garden',
    category: 'Monk Series',
    price: 1799,
    description: 'A handcrafted Zen garden featuring a whispering monk figurine, natural river stones, and miniature bonsai in perfect balance.',
    image: 'Product/Whispering Monk Zen Garden/Whispering Monk Zen Garden1.png',
    fallback: 'img/Image4.png'
  }
];

function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  if (!products || products.length === 0) {
    grid.innerHTML = '<p style="color:#888;text-align:center;">No products found.</p>';
    return;
  }

  grid.innerHTML = products.map(p => `
    <div class="product-card fade-in" onclick="window.location='product-detail.html?id=${p.id}'" style="cursor:pointer;">
      <div class="product-card-inner">
        <div class="product-visual">
          <img
            src="${p.image}"
            alt="${p.name}"
            style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
            onerror="this.src='${p.fallback || ''}'"
          >
          <div class="product-moss">
            <div class="moss-blob" style="width:20px;height:13px;"></div>
            <div class="moss-blob" style="width:28px;height:18px;"></div>
            <div class="moss-blob" style="width:15px;height:10px;"></div>
          </div>
        </div>
        <div class="product-info">
          <div class="product-cat">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-price">
            <span>₹ ${p.price.toLocaleString('en-IN')}</span>
            <button class="product-add" onclick="event.stopPropagation();window.location='product-detail.html?id=${p.id}'">→</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('#productsGrid .fade-in').forEach(el => io.observe(el));
}

fetch('Php/Products.php')
  .then(res => {
    if (!res.ok) throw new Error('PHP not available');
    return res.json();
  })
  .then(data => {
    const products = data.products || data;
    renderProducts(Array.isArray(products) ? products : PRODUCTS);
  })
  .catch(() => {
    renderProducts(PRODUCTS);
  });

const fadeEls = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
fadeEls.forEach(el => io.observe(el));

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(253, 250, 245, 0.95)';
    nav.style.backdropFilter = 'blur(12px)';
    nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.06)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.boxShadow = 'none';
  }
});

const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
if (cursor && cursorRing) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top = e.clientY + 'px';
    }, 80);
  });
}

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileNav.classList.add('open');
  mobileNav.setAttribute('aria-hidden', 'false');
  document.body.classList.add('nav-open');
}

function closeMenu() {
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('nav-open');
}

hamburger.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeMenu() : openMenu();
});

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});