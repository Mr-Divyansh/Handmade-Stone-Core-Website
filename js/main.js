const PRODUCTS = [
  {
    id: 1,
    name: 'Handcrafted Miniature Zen Garden Diorama',
    nameEm: 'Zen Garden <em>Diorama</em>',
    category: 'Zen Stack',
    price: 1200,
    originalPrice: 1789,
    rating: 4.8,
    reviews: 127,
    description: 'Bring peace and natural beauty into your space with this beautifully handcrafted miniature Zen garden. Designed with carefully selected natural stones, detailed bonsai-style trees, and a tiny wooden shrine, this piece captures the essence of a tranquil landscape in a compact form. The realistic textures, moss detailing, and layered stone steps add depth and authenticity, giving it a premium artistic feel. Every piece is handmade — no two are exactly the same.',
    images: [
      'img/product/Handcrafted Miniature Zen Garden Diorama/Zen-Garden-Diorama1.jpeg',
      'img/product/Handcrafted Miniature Zen Garden Diorama/Zen-Garden-Diorama2.jpeg',
      'img/product/Handcrafted Miniature Zen Garden Diorama/Zen-Garden-Diorama3.jpeg',
      'img/product/Handcrafted Miniature Zen Garden Diorama/Zen-Garden-Diorama4.jpeg'
    ],
    fallback: 'img/Image1.png',
    features: [
      'Handcrafted with attention to detail',
      'Natural river stones and textured elements',
      'Miniature bonsai-style trees — realistic finish',
      'Decorative wooden shrine centerpiece',
      'Matte natural texture — premium look',
      'Ideal for modern interiors and gifting'
    ],
    details: {
      'Material': 'Natural stones, resin, artificial bonsai',
      'Size': 'Approx. 15–25 cm',
      'Finish': 'Matte natural texture',
      'Color Theme': 'Earth tones — green, gray, beige',
      'Weight': 'Lightweight',
      'Customizable': 'Yes, on request'
    },
    inStock: true
  },
  {
    id: 2,
    name: 'Harmony Bridge Zen Garden',
    nameEm: 'Harmony Bridge <em>Zen Garden</em>',
    category: 'Bridge Series',
    price: 899,
    originalPrice: 1145,
    rating: 4.6,
    reviews: 89,
    description: 'Experience a blend of color, calm, and creativity with this handcrafted miniature Zen garden. The highlight is a beautifully crafted colorful wooden bridge, symbolizing connection and harmony within nature. Paired with layered stone steps, a monk figurine, dense bonsai canopy, and lush moss textures — the scene creates a serene environment that feels both artistic and meaningful.',
    images: [
      'img/product/Harmony Bridge Zen Garden/Harmony Bridge Zen Garden1.png',
      'img/product/Harmony Bridge Zen Garden/Harmony Bridge Zen Garden2.png',
      'img/product/Harmony Bridge Zen Garden/Harmony Bridge Zen Garden3.png',
      'img/product/Harmony Bridge Zen Garden/Harmony Bridge Zen Garden4.png '
    ],
    fallback: 'img/Image2.png',
    features: [
      'Built with precision and care',
      'Peaceful monk figurine — calm and mindfulness',
      'Colorful wooden bridge — unique artistic highlight',
      'Dense bonsai trees — natural and realistic',
      'Layered stone details — adds depth and structure',
      'Perfect for modern décor and gifting'
    ],
    details: {
      'Material': 'Natural stones, resin, bonsai, wood',
      'Size': 'Approx. 18–30 cm',
      'Finish': 'Matte natural texture',
      'Color Theme': 'Earth tones with vibrant bridge accents',
      'Weight': 'Lightweight yet stable',
      'Customizable': 'Yes, color theme on request'
    },
    inStock: true
  },
  {
    id: 3,
    name: 'Serene Monk Bonsai Garden',
    nameEm: 'Serene Monk <em>Bonsai Garden</em>',
    category: 'Monk Series',
    price: 700,
    originalPrice: 1230,
    rating: 4.9,
    reviews: 203,
    description: 'A serene handcrafted monk bonsai garden with a meditating monk figurine surrounded by natural stones and bonsai branches. Featuring layered natural stone formations, realistic moss detailing, and carefully shaped miniature bonsai trees — the scene creates a tranquil landscape full of depth and character. The monk figurine sits peacefully at the center, adding a spiritual and mindful energy to any space.',
    images: [
      'img/product/Serene Monk Bonsai Garden/Harmony Bridge Zen Garden1.png',
      'img/product/Serene Monk Bonsai Garden/Harmony Bridge Zen Garden2.png',
      'img/product/Serene Monk Bonsai Garden/Harmony Bridge Zen Garden3.png',
    ],
    fallback: 'img/Image3.png',
    features: [
      'Meditating monk figurine at center',
      'Realistic moss and stone formations',
      'Carefully shaped miniature bonsai trees',
      'Spiritual and mindful energy',
      'Perfect for meditation corners',
      'Each unit individually handmade'
    ],
    details: {
      'Material': 'Natural stones, resin, bonsai, monk figurine',
      'Size': 'Approx. 15–25 cm',
      'Finish': 'Matte natural texture',
      'Color Theme': 'Earth tones — dark stone, green moss',
      'Weight': 'Lightweight',
      'Customizable': 'Yes, on request'
    },
    inStock: true
  },
  {
    id: 4,
    name: 'Stone Lantern Bonsai Retreat',
    nameEm: 'Stone Lantern <em>Bonsai Retreat</em>',
    category: 'Bonsai Collection',
    price: 499,
    originalPrice: 999,
    rating: 4.7,
    reviews: 156,
    description: 'A peaceful stone lantern retreat with miniature bonsai, natural slate stones, and a glowing lantern centerpiece. Two bonsai-style trees flank a detailed miniature red lantern shrine, surrounded by stacked natural river stones and soft moss textures. The tall standing stones create a dramatic backdrop while the layered base adds dimension and depth to the composition.',
    images: [
      'img/product/Stone Lantern Bonsai Retreat/Serene Monk Bonsai Garden1.png',
      'img/product/Stone Lantern Bonsai Retreat/Serene Monk Bonsai Garden2.png',
      'img/product/Stone Lantern Bonsai Retreat/Serene Monk Bonsai Garden3.png',
      'img/product/Stone Lantern Bonsai Retreat/Serene Monk Bonsai Garden4.png'
    ],
    fallback: 'img/Image4.png',
    features: [
      'Twin bonsai trees flanking a red lantern shrine',
      'Stacked natural river stones',
      'Tall standing stones — dramatic backdrop',
      'Soft moss textures throughout',
      'Layered base for depth and dimension',
      'Built with natural materials throughout'
    ],
    details: {
      'Material': 'River stones, slate, artificial moss, bonsai branches',
      'Size': 'Approx. 18–28 cm',
      'Finish': 'Matte natural texture',
      'Color Theme': 'Dark stone, red lantern accents, green moss',
      'Weight': 'Lightweight',
      'Customizable': 'Yes, on request'
    },
    inStock: true
  },
  {
    id: 5,
    name: 'Whispering Bonsai Sanctuary',
    nameEm: 'Whispering Bonsai <em>Sanctuary</em>',
    category: 'Bonsai Collection',
    price: 899,
    originalPrice: 1398,
    rating: 4.8,
    reviews: 98,
    description: 'Step into a quiet world of nature and imagination with this handcrafted miniature Zen garden. A unique highlight is the elevated wooden perch holding a symbolic apple, adding a touch of storytelling and visual charm. The natural moss textures and carefully arranged stones create depth and realism, while the delicate tree branches form a peaceful canopy over the scene.',
    images: [
      'img/product/Whispering Bonsai Sanctuary/Whispering Bonsai Sanctuary1.png',
      'img/product/Whispering Bonsai Sanctuary/Whispering Bonsai Sanctuary2.png',
      'img/product/Whispering Bonsai Sanctuary/Whispering Bonsai Sanctuary3.png',
      'img/product/Whispering Bonsai Sanctuary/Whispering Bonsai Sanctuary4.png'
    ],
    fallback: 'img/Image2.png',
    features: [
      'Intricate bonsai-style trees',
      'Unique apple perch — storytelling element',
      'Layered natural stone base',
      'Natural moss textures — depth and realism',
      'Handcrafted wooden platform',
      'Truly one-of-a-kind design'
    ],
    details: {
      'Material': 'Natural stones, resin, bonsai, wood',
      'Size': 'Approx. 15–25 cm',
      'Finish': 'Matte natural look',
      'Color Theme': 'Dark stone tones, green moss, earthy accents',
      'Weight': 'Lightweight and durable',
      'Customizable': 'Yes, on request'
    },
    inStock: true
  },
{
  "id": 6,
  "name": "Shizendo Monk Garden",
  "nameEm": "Shizendo Monk <em>Garden</em>",
  "category": "Premium Zen Collection",
  "price": 2499,
  "originalPrice": 3599,
  "rating": 4.9,
  "reviews": 88,
  "description": "Inspired by the tranquility of traditional Japanese 'Shizendo' (Way of Nature) philosophy, this piece is a meticulously crafted world-in-miniature. Featuring layered, ancient-look natural river stones, lush preserved moss, two artisanal bonsai-style trees, and a symbolic red Torii-gate style shrine. At its heart sits our 'Serene Sage' monk figure, sculpted in a deep meditative blue, embodying peace, wisdom, and inner harmony. Every element, from the miniature stone steps to the smooth, standing rocks, is placed with intention, creating a profound sense of natural balance and ancient calm.",
  "images": [
    "img/Product/Shizendo Monk Garden/Shizendo Monk Garden1.png",
    "img/Product/Shizendo Monk Garden/Shizendo Monk Garden2.png",
    "img/Product/Shizendo Monk Garden/Shizendo Monk Garden3.png",
    "img/Product/Shizendo Monk Garden/Shizendo Monk Garden4.png",
    "img/Product/Shizendo Monk Garden/Shizendo Monk Garden5.png"
  ],
  "fallback": "img/PremiumImage7.png",
  "features": [
    "Deeply meditative monk figure in cobalt blue — wisdom and harmony",
    "Two premium, dense-foliage bonsai structures",
    "Torii-gate style shrine with traditional red finish",
    "Multi-layered river stone formation",
    "Aged, preserved moss textures for timeless look",
    "Unique artisan construction — no two pieces are identical"
  ],
  "details": {
    "Material": "Select river stones, slate bedrock base, preserved moss, wood shrine, sculpted polymer monk",
    "Size": "Approx. 12–14 inches wide (slightly larger feel)",
    "Finish": "Textured, weathered natural finish",
    "Color Theme": "Deep earth tones, traditional red, rich cobalt blue, natural greens",
    "Weight": "Solid, premium feel (approx. 2.5 lbs)",
    "Customizable": "No, this is a fixed artisan piece"
  },
  "inStock": true
},
    {
  id: 7,
  name: 'Whispering Monk Zen Garden',
  nameEm: 'Whispering Monk <em>Zen Garden</em>',
  category: 'Monk Seri  es',
  price: 1799,
  originalPrice: 500,
  rating: 4.8,
  reviews: 67,
  description: 'A one-of-a-kind handmade decor piece inspired by traditional Japanese Zen landscapes. Carefully arranged using layered natural stones, moss details, two handcrafted bonsai-style trees, and a small red shrine. At the center sits a smiling monk figurine dressed in blue, symbolizing calm, joy, and inner balance. A small stone staircase leads toward the shrine, while smooth standing rocks and detailed greenery complete the natural look.',
  images: [
    'img/Product/Whispering Monk Zen Garden/Whispering Monk Zen Garden1.png',
    'img/Product/Whispering Monk Zen Garden/Whispering Monk Zen Garden2.png',
    'img/Product/Whispering Monk Zen Garden/Whispering Monk Zen Garden3.png',
    'img/Product/Whispering Monk Zen Garden/Whispering Monk Zen Garden4.png',
    'img/Product/Whispering Monk Zen Garden/Whispering Monk Zen Garden5.png'
  ],
  fallback: 'img/Image4.png',
  features: [
    'Smiling monk figurine in blue — joy and balance',
    'Two handcrafted bonsai-style trees',
    'Small red shrine centerpiece',
    'Layered stone staircase detail',
    'Natural river stones and moss',
    'Every piece slightly different — truly handmade'
  ],
  details: {
    'Material': 'River stones, slate base, artificial moss, wood shrine',
    'Size': 'Approx. 10–12 inches wide',
    'Finish': 'Matte natural texture',
    'Color Theme': 'Earth tones, red shrine, green bonsai',
    'Weight': 'Lightweight',
    'Customizable': 'Yes, on request'
  },
  inStock: true
  },
  {
  id: 8,
  name: 'hand rock pieace',
  nameEm: 'Whispering Monk <em>Zen Garden</em>',
  category: 'Monk Series',
  price: 300,
  originalPrice: 2299,
  rating: 4.5,
  reviews: 67,
  description: 'A one-of-a-kind handmade decor piece inspired by traditional Japanese Zen landscapes. Carefully arranged using layered natural stones, moss details, two handcrafted bonsai-style trees, and a small red shrine. At the center sits a smiling monk figurine dressed in blue, symbolizing calm, joy, and inner balance. A small stone staircase leads toward the shrine, while smooth standing rocks and detailed greenery complete the natural look.',
  images: [
    'img/Product/hand rock pieace/Hand made stone1.png',
    'img/Product/hand rock pieace/Hand made stone2.png',
    'img/product/hand rock pieace/Hand made stone3.png'
  ],
  fallback: 'img/Image4.png',
  features: [
    'Smiling monk figurine in blue — joy and balance',
    'Two handcrafted bonsai-style trees',
    'Small red shrine centerpiece',
    'Layered stone staircase detail',
    'Natural river stones and moss',
    'Every piece slightly different — truly handmade'
  ],
  details: {
    'Material': 'River stones, slate base, artificial moss, wood shrine',
    'Size': 'Approx. 10–12 inches wide',
    'Finish': 'Matte natural texture',
    'Color Theme': 'Earth tones, red shrine, green bonsai',
    'Weight': 'Lightweight',
    'Customizable': 'Yes, on request'
  },
  inStock: true
  }
];

function renderProducts(products) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
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

  // Re-initialize intersection observer for new fade-in elements
  const newFadeEls = document.querySelectorAll('#productsGrid .fade-in');
  newFadeEls.forEach(el => io.observe(el));
}

// Initialize Intersection Observer
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

// Fetch products or use fallback
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(253, 250, 245, 0.95)';
      nav.style.backdropFilter = 'blur(12px)';
      nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.06)';
    } else {
      nav.style.background = 'transparent';
      nav.style.backdropFilter = 'none';
      nav.style.boxShadow = 'none';
    }
  }
});

// Custom cursor
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

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
  if (hamburger) hamburger.classList.add('open');
  if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
  if (mobileNav) {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
  }
  document.body.classList.add('nav-open');
}

function closeMenu() {
  if (hamburger) hamburger.classList.remove('open');
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
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

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});