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

const STATES_BY_COUNTRY = {
  India: [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ],
  Afghanistan: [
    'Badakhshan',
    'Badghis',
    'Baghlan',
    'Balkh',
    'Bamyan',
    'Daykundi',
    'Farah',
    'Faryab',
    'Ghazni',
    'Ghor',
    'Helmand',
    'Herat',
    'Jowzjan',
    'Kabul',
    'Kandahar',
    'Kapisa',
    'Khost',
    'Kunar',
    'Kunduz',
    'Laghman',
    'Logar',
    'Nangarhar',
    'Nimruz',
    'Nuristan',
    'Paktia',
    'Paktika',
    'Panjshir',
    'Parwan',
    'Samangan',
    'Sar-e Pol',
    'Takhar',
    'Uruzgan',
    'Wardak',
    'Zabul'
],
Bangladesh: [
    'Barishal',
    'Chattogram',
    'Dhaka',
    'Khulna',
    'Mymensingh',
    'Rajshahi',
    'Rangpur',
    'Sylhet'
],
China: [
    'Anhui',
    'Beijing',
    'Chongqing',
    'Fujian',
    'Gansu',
    'Guangdong',
    'Guangxi',
    'Guizhou',
    'Hainan',
    'Hebei',
    'Heilongjiang',
    'Henan',
    'Hubei',
    'Hunan',
    'Inner Mongolia',
    'Jiangsu',
    'Jiangxi',
    'Jilin',
    'Liaoning',
    'Ningxia',
    'Qinghai',
    'Shaanxi',
    'Shandong',
    'Shanghai',
    'Shanxi',
    'Sichuan',
    'Tianjin',
    'Tibet',
    'Xinjiang',
    'Yunnan',
    'Zhejiang'
],
SriLanka: [
    'Central',
    'Eastern',
    'North Central',
    'Northern',
    'North Western',
    'Sabaragamuwa',
    'Southern',
    'Uva',
    'Western'
],Nepal: [
    'Bagmati',
    'Gandaki',
    'Karnali',
    'Lumbini',
    'Madhesh',
    'Koshi',
    'Sudurpashchim'
],
Bhutan: [
    'Bumthang',
    'Chukha',
    'Dagana',
    'Gasa',
    'Haa',
    'Lhuntse',
    'Mongar',
    'Paro',
    'Pema Gatshel',
    'Punakha',
    'Samdrup Jongkhar',
    'Samtse',
    'Sarpang',
    'Thimphu',
    'Trashigang',
    'Trashi Yangtse',
    'Trongsa',
    'Tsirang',
    'Wangdue Phodrang',
    'Zhemgang'
],
Pakistan: [
    'Islamabad Capital Territory',
    'Punjab',
    'Sindh',
    'Khyber Pakhtunkhwa',
    'Balochistan',
    'Gilgit-Baltistan',
    'Azad Jammu and Kashmir'
  ]
};

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    id: parseInt(params.get('id')),
    qty: parseInt(params.get('qty')) || 1
  };
}

function updateStateOptions(country) {
  const stateSelect = document.getElementById('state');
  if (!stateSelect) return;

  const states = STATES_BY_COUNTRY[country] || [];
  let html = '<option value="" disabled selected>Select State / Province</option>';

  if (states.length > 0) {
    states.forEach(state => {
      html += `<option value="${state}">${state}</option>`;
    });
  } else {
    html += '<option value="Other">Other / Not listed</option>';
  }

  stateSelect.innerHTML = html;
  stateSelect.disabled = false;
}

// Place Order Function
window.placeOrder = function(productId, qty, total) {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  const email     = document.getElementById('email').value.trim();
  const phone     = document.getElementById('phone').value.trim();
  const address   = document.getElementById('address').value.trim();
  const city      = document.getElementById('city').value.trim();
  const pincode   = document.getElementById('pincode').value.trim();
  let state       = document.getElementById('state').value;
  let country     = document.getElementById('country').value;
  const payment   = document.querySelector('input[name="payment"]:checked')?.value;
  const notes     = document.getElementById('notes').value.trim() || '';

  // Handle "Other" country input
  if (country === 'Other') {
    country = document.getElementById('otherCountryName').value.trim();
    if (!country) {
      alert('Please enter your country name.');
      return;
    }
  }

  // Handle "Other" state input
  if (state === 'Other') {
    state = document.getElementById('otherStateName').value.trim();
    if (!state) {
      alert('Please enter your state/province name.');
      return;
    }
  }

  if (!firstName || !lastName || !email || !phone || !address || !city || !pincode || !state || !country || !payment) {
    alert('Please fill in all required fields.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    return;
  }

  if (phone.length < 10) {
    alert('Please enter a valid phone number (minimum 10 digits).');
    return;
  }

  if (pincode.length !== 6 || isNaN(pincode)) {
    alert('Please enter a valid 6-digit pincode.');
    return;
  }

  const orderDetails = {
    productId,
    quantity: qty,
    total,
    customer: { firstName, lastName, email, phone },
    address: { address, city, pincode, state, country },
    payment,
    notes,
    orderDate: new Date().toISOString()
  };

  console.log('✅ Order Placed Successfully:', orderDetails);

  // Hide form and show success message
  const formElement = document.getElementById('checkoutForm');
  const successElement = document.getElementById('successMessage');

  if (formElement) formElement.style.display = 'none';
  if (successElement) {
    successElement.style.display = 'block';
    successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Save order in localStorage
  localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
};

function renderCheckout() {
  const { id, qty } = getQueryParams();
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById('checkoutContent');

  if (!product || !container) {
    container.innerHTML = `
      <div style="text-align: center; padding: 120px 40px;">
        <div style="font-size: 48px; margin-bottom: 20px;">🔍</div>
        <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 28px;">Product not found</h2>
        <p style="color: var(--clay); margin-bottom: 32px;">The product you're looking for doesn't exist.</p>
        <a href="index.html" style="background: var(--red); color: white; padding: 14px 32px; text-decoration: none; border-radius: 40px;">← Back to Shop</a>
      </div>
    `;
    return;
  }

  const subtotal = product.price * qty;
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const imgSrc = product.images && product.images[0] 
                 ? product.images[0] 
                 : (product.fallback || 'img/placeholder.jpg');

  container.innerHTML = `
    <div class="checkout-wrap">
      <!-- Order Summary -->
      <div class="order-summary">
        <div class="summary-title">Order Summary</div>
        
        <div class="product-preview">
          <img class="preview-img" src="${imgSrc}" alt="${product.name}" 
               onerror="this.src='${product.fallback || 'img/placeholder.jpg'}'">
          <div class="preview-details">
            <h4>${product.name}</h4>
            <div class="preview-price">₹ ${product.price.toLocaleString('en-IN')}</div>
            <div class="preview-qty">Quantity: ${qty}</div>
          </div>
        </div>
        
        <div class="price-breakdown">
          <div class="price-row">
            <span>Subtotal</span>
            <span>₹ ${subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div class="price-row">
            <span>Shipping</span>
            <span>${shipping === 0 ? 'FREE' : '₹ ' + shipping}</span>
          </div>
          <div class="price-row total">
            <span>Total</span>
            <span>₹ ${total.toLocaleString('en-IN')}</span>
          </div>
        </div>
        
        <div style="font-size: 12px; color: var(--clay); text-align: center; line-height: 1.6; margin-top: 20px;">
          ✅ Free delivery on orders above ₹999<br>
          🔄 7-day easy returns
        </div>
      </div>
      
      <!-- Checkout Form -->
      <div class="checkout-form" id="checkoutForm">
        <div class="form-title">Shipping Details</div>
        
        <div class="form-row">
          <div class="form-group">
            <label>First Name *</label>
            <input type="text" id="firstName" placeholder="Rahul">
          </div>
          <div class="form-group">
            <label>Last Name *</label>
            <input type="text" id="lastName" placeholder="Sharma">
          </div>
        </div>
        
        <div class="form-group">
          <label>Email *</label>
          <input type="email" id="email" placeholder="rahul@example.com">
        </div>
        
        <div class="form-group">
          <label>Phone *</label>
          <input type="tel" id="phone" placeholder="+91 98765 43210">
        </div>
        
        <div class="form-group">
          <label>Address *</label>
          <input type="text" id="address" placeholder="House No., Street, Area">
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label>City *</label>
            <input type="text" id="city" placeholder="Panipat">
          </div>
          <div class="form-group">
            <label>Pincode *</label>
            <input type="text" id="pincode" placeholder="132103" maxlength="6">
          </div>
        </div>
        
        <!-- Country + State (Country first, state options loaded dynamically) -->
        <div class="form-row">
          <div class="form-group">
            <label>Country *</label>
            <select id="country" required>
              <option value="" disabled selected>Select Country</option>
              <option value="India">India</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="China">China</option>
              <option value="Pakistan">Pakistan</option>
              <option value="SriLanka">Sri Lanka</option>
              <option value="Nepal">Nepal</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Other">Other (Type below)</option>
            </select>
          </div>

          <div class="form-group">
            <label>State / Province *</label>
            <select id="state" required disabled>
              <option value="" disabled selected>Select State / Province</option>
            </select>
          </div>
        </div>

        <div class="form-group" id="otherCountryGroup" style="display: none; margin-top: -10px;">
          <label>Enter Your Country *</label>
          <input type="text" id="otherCountryName" placeholder="Enter your country name">
        </div>

        <div class="form-group" id="otherStateGroup" style="display: none; margin-top: -10px;">
          <label>Enter Your State/Province *</label>
          <input type="text" id="otherStateName" placeholder="Enter your state name">
        </div>
        
        <div class="payment-methods">
          <div class="payment-title">Payment Method</div>
          
          <label class="payment-option">
            <input type="radio" name="payment" value="cod" checked>
            <span>💵 Cash on Delivery (COD)</span>
          </label>
          
          <label class="payment-option">
            <input type="radio" name="payment" value="online">
            <span>💳 Credit/Debit Card / UPI (Online)</span>
          </label>
        </div>
        
        <div class="form-group">
          <label>Additional Notes (Optional)</label>
          <textarea id="notes" rows="3" placeholder="Any special instructions..."></textarea>
        </div>
        
        <button class="btn-place-order" onclick="placeOrder(${product.id}, ${qty}, ${total})">
          Place Order → ₹${total.toLocaleString('en-IN')}
        </button>
      </div>
      
      <!-- Success Message -->
      <div class="success-message" id="successMessage" style="display: none;">
        <div class="success-icon">🎉</div>
        <div class="success-title">Order Placed Successfully!</div>
        <div class="success-sub">Thank you for shopping with StoneCore.<br>We will contact you within 24 hours.</div>
        <a href="index.html" class="btn-continue">Continue Shopping →</a>
      </div>
    </div>
  `;

  const countryField = document.getElementById('country');
  if (countryField) {
    countryField.addEventListener('change', () => updateStateOptions(countryField.value));
  }

  const stateField = document.getElementById('state');
  if (stateField) {
    stateField.addEventListener('change', () => handleStateChange());
  }
}

function updateStateOptions(country) {
  const stateSelect = document.getElementById('state');
  const otherStateGroup = document.getElementById('otherStateGroup');
  const otherCountryGroup = document.getElementById('otherCountryGroup');
  
  if (!stateSelect) return;

  // Show/Hide Other Country Input
  if (otherCountryGroup) {
    otherCountryGroup.style.display = (country === 'Other') ? 'block' : 'none';
  }

  const states = STATES_BY_COUNTRY[country] || [];
  let html = '<option value="" disabled selected>Select State / Province</option>';

  if (states.length > 0) {
    states.forEach(state => {
      html += `<option value="${state}">${state}</option>`;
    });
    html += '<option value="Other">Other / Not listed</option>';
  } else {
    // If country is "Other" or has no predefined states
    html += '<option value="Other" selected>Other / Not listed</option>';
  }

  stateSelect.innerHTML = html;
  stateSelect.disabled = false;

  // Trigger state change logic to handle the "Other" state input visibility
  handleStateChange();
}

function handleStateChange() {
  const stateSelect = document.getElementById('state');
  const otherStateGroup = document.getElementById('otherStateGroup');
  if (stateSelect && otherStateGroup) {
    otherStateGroup.style.display = (stateSelect.value === 'Other') ? 'block' : 'none';
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderCheckout);
