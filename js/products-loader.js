// products-loader.js
// Is file ko apne index.html ke end mein add karo
// <script src="products-loader.js"></script>

document.addEventListener('DOMContentLoaded', function () {
  loadProducts();
});

function loadProducts() {
  fetch('api/products.php')
    .then(r => r.json())
    .then(data => {
      if (!data.success) return;
      renderProducts(data.products);
    })
    .catch(err => console.error('Products load failed:', err));
}

function renderProducts(products) {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;

  // Emoji visuals for each category
  const visuals = {
    'Zen Stack':         `<div class="pv-stones"><div class="pv-stone" style="width:80px;height:50px;"></div><div class="pv-stone" style="width:60px;height:38px;"></div><div class="pv-stone" style="width:42px;height:28px;"></div></div>`,
    'Shrine Garden':     `<div class="pv-shrine-wrap"><div class="pv-roof"></div><div class="pv-body"><div class="pv-door"></div></div><div class="pv-base"></div></div>`,
    'Monk Series':       `<div class="pv-monk">🧘</div>`,
    'Bonsai Collection': `<div class="pv-bonsai"><div class="pv-canopy"></div><div class="pv-trunk"></div></div>`,
    'Bridge Series':     `<div class="pv-bridge"><div class="pv-arch"></div><div class="pv-platform"></div></div>`,
    'Premium Set':       `<div class="pv-monk">🪨</div>`,
  };

  grid.innerHTML = products.map(p => `
    <div class="product-card fade-in">
      <div class="product-card-inner">
        <div class="product-visual">
          ${p.image
            ? `<img src="${p.image}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" onerror="this.style.display='none'">`
            : visuals[p.category] || `<div class="pv-monk">🪨</div>`
          }
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
            <span>₹ ${parseFloat(p.price).toLocaleString('en-IN')}</span>
            <button class="product-add">+</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Re-trigger fade-in observer for new elements
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
}