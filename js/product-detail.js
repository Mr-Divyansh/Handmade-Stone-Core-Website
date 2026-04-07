const WHATSAPP_NUMBER = '919805145415';

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

// Helper functions
function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'));
}

function getStarsHtml(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) stars += '★';
    else if (i === fullStars && hasHalfStar) stars += '½';
    else stars += '☆';
  }
  return stars;
}

// Global variables
let currentQty = 1;
let currentProduct = null;

// Functions that need to be global for onclick handlers
window.changeQty = function(delta) {
  const newQty = currentQty + delta;
  if (newQty >= 1 && newQty <= 10) {
    currentQty = newQty;
    const qtyInput = document.getElementById('qtyInput');
    if (qtyInput) qtyInput.value = currentQty;
  }
};

window.buyNow = function(productId) {
  const qty = currentQty;
  window.location.href = `checkout.html?id=${productId}&qty=${qty}`;
};

window.switchImage = function(index) {
  if (!currentProduct) return;
  const mainImg = document.getElementById('mainImg');
  if (mainImg && currentProduct.images[index]) {
    mainImg.src = currentProduct.images[index];
    // Handle image error
    mainImg.onerror = function() {
      this.src = currentProduct.fallback || 'img/placeholder.jpg';
    };
    // Update active thumb
    document.querySelectorAll('.thumb').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }
};

function renderNotFound() {
  const container = document.getElementById('pageContent');
  if (container) {
    container.innerHTML = `
      <div class="not-found" style="text-align: center; padding: 80px 20px;">
        <div style="font-size: 48px; margin-bottom: 20px;">🔍</div>
        <div style="font-size: 28px; font-family: 'Cormorant Garamond', serif; margin-bottom: 12px;">Product Not Found</div>
        <div style="color: #666; margin-bottom: 32px;">The product you're looking for doesn't exist or may have been removed.</div>
        <a href="index.html#products" style="display: inline-block; padding: 12px 28px; background: #2c4a3b; color: white; text-decoration: none; border-radius: 40px;">Browse Collection →</a>
      </div>
    `;
  }
}

function renderProduct(p) {
  currentProduct = p;
  document.title = `StoneCore — ${p.name}`;
  
  const discountPercent = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
  
  const imagesHtml = p.images.map((src, i) => `
    <button class="thumb ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="switchImage(${i})">
      <img src="${src}" alt="${p.name} view ${i+1}" onerror="this.parentElement.style.display='none'">
    </button>
  `).join('');
  
  const featuresHtml = p.features.map(f => `<li>${f}</li>`).join('');
  
  const detailsHtml = Object.entries(p.details).map(([k, v]) => `
    <div class="detail-item">
      <div class="detail-label">${k}</div>
      <div class="detail-val">${v}</div>
    </div>
  `).join('');
  
  const relatedProducts = PRODUCTS.filter(prod => prod.id !== p.id).slice(0, 3);
  const relatedHtml = relatedProducts.map(prod => `
    <a href="product-detail.html?id=${prod.id}" class="related-card">
      <img src="${prod.images[0]}" alt="${prod.name}" onerror="this.src='${prod.fallback || 'img/placeholder.jpg'}'">
      <h4>${prod.name}</h4>
      <div class="related-price">₹ ${prod.price.toLocaleString('en-IN')}</div>
    </a>
  `).join('');
  
  const waMsg = encodeURIComponent('Hi StoneCore! I\'m interested in ordering:\n\n*' + p.name + '*\nPrice: ₹' + p.price.toLocaleString('en-IN') + '\n\nPlease share availability and delivery details.');
  const waLink = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + waMsg;
  
  const container = document.getElementById('pageContent');
  if (container) {
    container.innerHTML = `
      <div class="detail-wrap">
        <div class="detail-gallery">
          <img class="main-img" id="mainImg" src="${p.images[0]}" alt="${p.name}" onerror="this.src='${p.fallback || 'img/placeholder.jpg'}'">
          <div class="thumb-row">${imagesHtml}</div>
        </div>
        
        <div class="detail-info">
          <div class="breadcrumb">
            <a href="index.html">Home</a>
            <span>/</span>
            <a href="index.html#products">Collection</a>
            <span>/</span>
            <span>${p.category}</span>
          </div>
          
          <div class="product-category">${p.category}</div>
          <h1 class="product-title">${p.nameEm || p.name}</h1>
          
          <div class="rating">
            <div class="stars">${getStarsHtml(p.rating)}</div>
            <div class="review-count">${p.rating} · ${p.reviews} reviews</div>
          </div>
          
          <div class="price-row">
            <div class="price-main">₹ ${p.price.toLocaleString('en-IN')}</div>
            <div class="price-original">₹ ${p.originalPrice.toLocaleString('en-IN')}</div>
            <div class="discount">${discountPercent}% off</div>
          </div>
          <div class="price-note">Inclusive of all taxes</div>
          
          <p class="desc-text">${p.description}</p>
          
          <div class="features-title">Key Features</div>
          <ul class="features-list">${featuresHtml}</ul>
          
          <div class="details-grid">${detailsHtml}</div>
          
          <div class="buy-section">
            <div class="stock-status ${p.inStock ? 'in-stock' : 'out-stock'}">${p.inStock ? '✓ In Stock' : '✗ Out of Stock'}</div>
            
            <div class="quantity-selector">
              <span class="quantity-label">Quantity</span>
              <div class="quantity-controls">
                <button class="qty-btn" onclick="changeQty(-1)">−</button>
                <input type="text" class="qty-input" id="qtyInput" value="1" readonly>
                <button class="qty-btn" onclick="changeQty(1)">+</button>
              </div>
            </div>
            
            <button class="btn-buy" onclick="buyNow(${p.id})">Buy Now →</button>
            
            <a href="${waLink}" class="btn-wa" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #25D366; color: white; text-decoration: none; padding: 14px 24px; border-radius: 40px; font-weight: 500; margin-top: 12px; transition: all 0.2s;">
              <span>💬</span> Order via WhatsApp
            </a>
            
            <div class="delivery-info">
              📦 Free delivery on orders above ₹999<br>
              🔄 7-day easy returns
            </div>
          </div>
        </div>
      </div>
      
      <div class="related-section">
        <div class="related-title">You May Also Like</div>
        <div class="related-grid">${relatedHtml}</div>
      </div>
      
      <footer style="margin-top: 80px; padding: 48px 32px 32px; border-top: 1px solid #e8e0d5; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 32px;">
        <div>
          <div style="font-family: 'Cinzel', serif; font-size: 24px; margin-bottom: 16px;">Stone<span style="font-weight: 300;">Core</span></div>
          <p style="color: #5a6e5a; max-width: 260px;">Bringing Zen into every corner of your world — one handcrafted stone at a time.</p>
        </div>
        <div><h4 style="margin-bottom: 16px;">Collection</h4><ul style="list-style: none;"><li><a href="collection.html" style="color: #5a6e5a; text-decoration: none;">Zen Stacks</a></li><li><a href="collection.html" style="color: #5a6e5a; text-decoration: none;">Monk Series</a></li><li><a href="collection.html" style="color: #5a6e5a; text-decoration: none;">Bonsai Collection</a></li></ul></div>
        <div><h4 style="margin-bottom: 16px;">Support</h4><ul style="list-style: none;"><li><a href="contact.html" style="color: #5a6e5a; text-decoration: none;">WhatsApp Us</a></li><li><a href="index.html#faq" style="color: #5a6e5a; text-decoration: none;">FAQ</a></li><li><a href="contact.html" style="color: #5a6e5a; text-decoration: none;">Returns</a></li></ul></div>
        <div><h4 style="margin-bottom: 16px;">Company</h4><ul style="list-style: none;"><li><a href="about.html" style="color: #5a6e5a; text-decoration: none;">Our Story</a></li><li><a href="process.html" style="color: #5a6e5a; text-decoration: none;">Craftsmanship</a></li></ul></div>
      </footer>
      <div style="text-align: center; padding: 24px; border-top: 1px solid #e8e0d5; font-size: 13px; color: #8a9a8a;">© 2025 StoneCore. Handcrafted with ♥ in India</div>
    `;
  }
  
  currentQty = 1;
}

// Initialize page
function init() {
  const id = getProductId();
  const product = PRODUCTS.find(p => p.id === id);
  if (product) {
    renderProduct(product);
  } else {
    renderNotFound();
  }
  
  // Cursor effect (refined)
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(cursor);
  document.body.appendChild(ring);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });
  
  // Nav scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }
  });
}

// Add styles for missing elements
const style = document.createElement('style');
style.textContent = `
  nav {
    position: sticky;
    top: 0;
    background: #fbfaf7;
    padding: 20px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
  }
  nav.scrolled {
    padding: 12px 32px;
    border-bottom-color: #e8e0d5;
    background: rgba(251, 250, 247, 0.95);
    backdrop-filter: blur(8px);
  }
  .logo {
    font-family: 'Cinzel', serif;
    font-size: 24px;
    text-decoration: none;
    color: #2c4a3b;
    letter-spacing: 1px;
  }
  .logo span {
    font-weight: 300;
  }
  .nav-back {
    text-decoration: none;
    color: #5a6e5a;
    font-weight: 400;
    transition: color 0.2s;
  }
  .nav-back:hover {
    color: #2c4a3b;
  }
  .detail-wrap {
    max-width: 1280px;
    margin: 40px auto;
    padding: 0 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
  }
  .detail-gallery {
    position: sticky;
    top: 100px;
  }
  .main-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 24px;
    background: #f0ede8;
    margin-bottom: 20px;
  }
  .thumb-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .thumb {
    width: 80px;
    height: 80px;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 12px;
    overflow: hidden;
    opacity: 0.6;
    transition: all 0.2s;
    padding: 0;
  }
  .thumb.active {
    opacity: 1;
    box-shadow: 0 0 0 2px #2c4a3b;
  }
  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .detail-info {
    padding-right: 16px;
  }
  .breadcrumb {
    font-size: 13px;
    color: #8a9a8a;
    margin-bottom: 16px;
  }
  .breadcrumb a {
    color: #8a9a8a;
    text-decoration: none;
  }
  .product-category {
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #9b7b5c;
    margin-bottom: 12px;
  }
  .product-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 40px;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 16px;
    color: #1e2a2b;
  }
  .product-title em {
    font-style: italic;
    font-weight: 300;
  }
  .rating {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .stars {
    color: #c7a84b;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .review-count {
    font-size: 14px;
    color: #5a6e5a;
  }
  .price-row {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 6px;
    flex-wrap: wrap;
  }
  .price-main {
    font-size: 32px;
    font-weight: 600;
    color: #2c4a3b;
  }
  .price-original {
    font-size: 18px;
    color: #a0afa0;
    text-decoration: line-through;
  }
  .discount {
    background: #e8ddd0;
    padding: 4px 10px;
    border-radius: 40px;
    font-size: 13px;
    font-weight: 500;
    color: #8b6b4f;
  }
  .price-note {
    font-size: 12px;
    color: #8a9a8a;
    margin-bottom: 24px;
  }
  .desc-text {
    color: #3a4a3a;
    line-height: 1.6;
    margin-bottom: 28px;
  }
  .features-title {
    font-weight: 600;
    margin-bottom: 12px;
    font-size: 18px;
  }
  .features-list {
    list-style: none;
    margin-bottom: 28px;
  }
  .features-list li {
    padding-left: 20px;
    position: relative;
    margin-bottom: 8px;
    color: #3a4a3a;
  }
  .features-list li::before {
    content: "✧";
    position: absolute;
    left: 0;
    color: #9b7b5c;
  }
  .details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    background: #f5f2ed;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 28px;
  }
  .detail-item {
    display: flex;
    flex-direction: column;
  }
  .detail-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #8a9a8a;
  }
  .detail-val {
    font-size: 14px;
    font-weight: 500;
    color: #2c4a3b;
  }
  .buy-section {
    margin-top: 8px;
  }
  .stock-status {
    display: inline-block;
    padding: 6px 14px;
    border-radius: 40px;
    font-size: 13px;
    margin-bottom: 20px;
  }
  .stock-status.in-stock {
    background: #e0f0e0;
    color: #2c6e3c;
  }
  .quantity-selector {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;
  }
  .quantity-label {
    font-weight: 500;
  }
  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .qty-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #ddd6cc;
    background: white;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .qty-btn:hover {
    background: #f0ede8;
  }
  .qty-input {
    width: 50px;
    text-align: center;
    border: none;
    font-size: 18px;
    font-weight: 500;
    background: transparent;
  }
  .btn-buy {
    width: 100%;
    background: #2c4a3b;
    color: white;
    border: none;
    padding: 16px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 40px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-buy:hover {
    background: #1e3629;
  }
  .delivery-info {
    font-size: 13px;
    color: #5a6e5a;
    margin-top: 20px;
    text-align: center;
  }
  .related-section {
    max-width: 1280px;
    margin: 80px auto 0;
    padding: 0 32px;
  }
  .related-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px;
    margin-bottom: 32px;
    text-align: center;
  }
  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 28px;
  }
  .related-card {
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s;
    display: block;
  }
  .related-card:hover {
    transform: translateY(-4px);
  }
  .related-card img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 12px;
    background: #f0ede8;
  }
  .related-card h4 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 6px;
  }
  .related-price {
    color: #2c4a3b;
    font-weight: 600;
  }
  @media (max-width: 900px) {
    .detail-wrap {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .detail-gallery {
      position: static;
    }
    .product-title {
      font-size: 32px;
    }
  }
`;
document.head.appendChild(style);

// Run init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}