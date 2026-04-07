const PRODUCTS = [
  {
    id: 1,
    name: 'Handcrafted Miniature Zen Garden Diorama',
    category: 'Zen Stack',
    price: 1899,
    images: ['Product/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones/Handcrafted Miniature Zen Garden Diorama with Bonsai & Natural Stones 1.png'],
    fallback: 'img/Image1.png'
  },
  {
    id: 2,
    name: 'Harmony Bridge Zen Garden',
    category: 'Bridge Series',
    price: 2299,
    images: ['Product/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama/Harmony Bridge Zen Garden – Handcrafted Miniature Bonsai Diorama 1.png'],
    fallback: 'img/Image2.png'
  },
  {
    id: 3,
    name: 'Serene Monk Bonsai Garden',
    category: 'Monk Series',
    price: 2499,
    images: ['Product/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama/Serene Monk Bonsai Garden – Handcrafted Miniature Zen Diorama 1.png'],
    fallback: 'img/Image3.png'
  },
  {
    id: 4,
    name: 'Stone Lantern Bonsai Retreat',
    category: 'Bonsai Collection',
    price: 1999,
    images: ['Product/Stone Lantern Bonsai Retreat/Stone Lantern Bonsai Retreat 1.png'],
    fallback: 'img/Image4.png'
  },
  {
    id: 5,
    name: 'Whispering Bonsai Sanctuary',
    category: 'Bonsai Collection',
    price: 2199,
    images: ['Product/Whispering Bonsai Sanctuary – Miniature Zen Garden with Apple Perch/Whispering Bonsai Sanctuary – Miniature Zen Garden with Apple Perch 1.png'],
    fallback: 'img/Image2.png'
  },
  {
    id: 6,
    name: 'Whispering Monk Zen Garden',
    category: 'Monk Series',
    price: 1799,
    images: ['Product/Whispering Monk Zen Garden/Whispering Monk Zen Garden1.png'],
    fallback: 'img/Image4.png'
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
