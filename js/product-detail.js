const PRODUCTS = [
  {
    id: 1,
    name: 'Handcrafted Miniature Zen Garden Diorama',
    nameEm: 'Zen Garden <em>Diorama</em>',
    category: 'Zen Stack',
    price: 1899,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 127,
    description: 'Bring peace and natural beauty into your space with this beautifully handcrafted miniature Zen garden. Designed with carefully selected natural stones, detailed bonsai-style trees, and a tiny wooden shrine, this piece captures the essence of a tranquil landscape in a compact form.',
    images: [
      'Product/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones 1.png',
      'Product/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones 2.png',
      'Product/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones 3.png',
      'Product/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones 4.png'
    ],
    features: [
      'Handcrafted with attention to detail',
      'Natural river stones and textured elements',
      'Miniature bonsai-style trees — realistic finish',
      'Decorative wooden shrine centerpiece',
      'Matte natural texture — premium look'
    ],
    details: {
      'Material': 'Natural stones, resin, artificial bonsai',
      'Size': 'Approx. 15–25 cm',
      'Finish': 'Matte natural texture',
      'Color Theme': 'Earth tones — green, gray, beige',
      'Weight': 'Lightweight'
    },
    inStock: true
  },
  {
    id: 2,
    name: 'Harmony Bridge Zen Garden',
    nameEm: 'Harmony Bridge <em>Zen Garden</em>',
    category: 'Bridge Series',
    price: 2299,
    originalPrice: 2999,
    rating: 4.6,
    reviews: 89,
    description: 'Experience a blend of color, calm, and creativity with this handcrafted miniature Zen garden. The highlight is a beautifully crafted colorful wooden bridge, symbolizing connection and harmony within nature.',
    images: [
      'Product/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama 1.png',
      'Product/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama.txt'
    ],
    features: [
      'Built with precision and care',
      'Peaceful monk figurine — calm and mindfulness',
      'Colorful wooden bridge — unique artistic highlight',
      'Dense bonsai trees — natural and realistic'
    ],
    details: {
      'Material': 'Natural stones, resin, bonsai, wood',
      'Size': 'Approx. 18–30 cm',
      'Finish': 'Matte natural texture',
      'Color Theme': 'Earth tones with vibrant bridge accents',
      'Weight': 'Lightweight yet stable'
    },
    inStock: true
  },
  {
    id: 3,
    name: 'Serene Monk Bonsai Garden',
    nameEm: 'Serene Monk <em>Bonsai Garden</em>',
    category: 'Monk Series',
    price: 2499,
    originalPrice: 3199,
    rating: 4.9,
    reviews: 203,
    description: 'A serene handcrafted monk bonsai garden with a meditating monk figurine surrounded by natural stones and bonsai branches.',
    images: [
      'Product/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama 1.png',
      'Product/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama 2.png',
      'Product/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama 3.png',
      'Product/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama 4.png'
    ],
    features: [
      'Meditating monk figurine at center',
      'Realistic moss and stone formations',
      'Carefully shaped miniature bonsai trees',
      'Spiritual and mindful energy'
    ],
    details: {
      'Material': 'Natural stones, resin, bonsai, monk figurine',
      'Size': 'Approx. 15–25 cm',
      'Finish': 'Matte natural texture',
      'Color Theme': 'Earth tones — dark stone, green moss',
      'Weight': 'Lightweight'
    },
    inStock: true
  }
];

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'));
}

function getStarsHtml(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '★★★★★';
  stars = stars.split('').map((s, i) => i < fullStars ? '★' : (i === fullStars && hasHalfStar ? '½' : '☆')).join('');
  return stars;
}

function renderNotFound() {
  document.getElementById('pageContent').innerHTML = `
    <div class="not-found">
      <div class="not-found-title">Product Not Found</div>
      <div class="not-found-sub">The product you're looking for doesn't exist or may have been removed.</div>
      <a href="index.html#products" class="btn-back">Browse Collection</a>
    </div>
  `;
}

function renderProduct(p) {
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
      <img src="${prod.images[0]}" alt="${prod.name}" onerror="this.src='placeholder.jpg'">
      <h4>${prod.name}</h4>
      <div class="related-price">₹ ${prod.price.toLocaleString('en-IN')}</div>
    </a>
  `).join('');
  
  document.getElementById('pageContent').innerHTML = `
    <div class="detail-wrap">
      <div class="detail-gallery">
        <img class="main-img" id="mainImg" src="${p.images[0]}" alt="${p.name}">
        <div class="thumb-row">${imagesHtml}</div>
      </div>
      
      <div class="detail-info">
        <div class="breadcrumb">
          <a href="index.html">Home</a>
          <span>/</span>
          <a href="index.html#products">Collection</a>
          <span>/</span>
          ${p.category}
        </div>
        
        <div class="product-category">${p.category}</div>
        <h1 class="product-title">${p.nameEm}</h1>
        
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
          <div class="stock-status">${p.inStock ? 'In Stock' : 'Out of Stock'}</div>
          
          <div class="quantity-selector">
            <span class="quantity-label">Quantity</span>
            <div class="quantity-controls">
              <button class="qty-btn" onclick="changeQty(-1)">-</button>
              <input type="text" class="qty-input" id="qtyInput" value="1" readonly>
              <button class="qty-btn" onclick="changeQty(1)">+</button>
            </div>
          </div>
          
          <button class="btn-buy" onclick="buyNow(${p.id})">Buy Now →</button>
          
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
  `;
  
  window._currentProduct = p;
}

let currentQty = 1;

function changeQty(delta) {
  const newQty = currentQty + delta;
  if (newQty >= 1 && newQty <= 10) {
    currentQty = newQty;
    document.getElementById('qtyInput').value = currentQty;
  }
}

function switchImage(index) {
  const p = window._currentProduct;
  if (!p) return;
  document.getElementById('mainImg').src = p.images[index];
  document.querySelectorAll('.thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function buyNow(productId) {
  const qty = currentQty;
  alert(`Order placed!\nProduct ID: ${productId}\nQuantity: ${qty}\nTotal: ₹ ${(window._currentProduct.price * qty).toLocaleString('en-IN')}\n\nWe will contact you shortly.`);
}

const id = getProductId();
const product = PRODUCTS.find(p => p.id === id);
product ? renderProduct(product) : renderNotFound();