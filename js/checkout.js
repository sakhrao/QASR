// ============================================================
// LANGUAGE (shared from translations.js)
// ============================================================
// Uses global `currentLang`, `getText`, `formatPrice`, `translations` from translations.js

// ============================================================
// THEME TOGGLE (checkout page)
// ============================================================
(function initCheckoutTheme() {
  const savedTheme = localStorage.getItem('qasr_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const toggle = document.getElementById('themeToggleCheckout');
  const icon = document.getElementById('themeIconCheckout');
  if (!toggle) return;

  function updateIcon(isLight) {
    if (!icon) return;
    if (isLight) {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
    } else {
      icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    }
  }

  updateIcon(savedTheme === 'light');

  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('qasr_theme', 'dark');
      updateIcon(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('qasr_theme', 'light');
      updateIcon(true);
    }
  });
})();

// ============================================================
// LANGUAGE SWITCHER (checkout page)
// ============================================================
(function initCheckoutLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem('qasr_lang', lang);
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      applyCheckoutTranslations();
      renderCheckoutItems();
      updateTotals();
    });
  });
})();

// Set initial lang/dir from global currentLang
const savedLang = localStorage.getItem('qasr_lang') || 'en';
currentLang = savedLang;
document.documentElement.setAttribute('lang', currentLang);
document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

// QASR — Checkout Page JavaScript
// Handles: cart display, wilaya/municipality dropdowns, delivery pricing, form submission

'use strict';

// ============================================================
// DELIVERY PRICING SYSTEM (Configurable)
// ============================================================
// Base delivery fees by wilaya ID
// Modify these values to update pricing
const deliveryPricing = {
  // Default pricing tiers (in DZD)
  defaultHome: 700,
  defaultOffice: 400,

  // Per-wilaya overrides (key: wilaya ID)
  overrides: {
    1:  { home: 1120, office: 700 },   // Adrar (south)
    11: { home: 1400, office: 840 },   // Tamanrasset
    30: { home: 980, office: 560 },    // Ouargla
    37: { home: 1680, office: 1120 },  // Tindouf
    47: { home: 980, office: 560 },    // Ghardaia
    16: { home: 420, office: 280 },    // Algiers (local)
    31: { home: 490, office: 350 },    // Oran
    23: { home: 490, office: 350 },    // Annaba
    25: { home: 490, office: 350 },    // Constantine
    9:  { home: 420, office: 280 },    // Blida
    12: { home: 560, office: 420 },    // Tebessa
    19: { home: 560, office: 420 },    // Setif
    35: { home: 420, office: 280 },    // Boumerdes
    42: { home: 420, office: 280 }     // Tipaza
  }
};

function getDeliveryFee(wilayaId, deliveryType) {
  // Check for wilaya-specific override
  const override = deliveryPricing.overrides[wilayaId];
  if (override) {
    return deliveryType === 'home' ? override.home : override.office;
  }
  // Use default pricing
  return deliveryType === 'home' ? deliveryPricing.defaultHome : deliveryPricing.defaultOffice;
}

// ============================================================
// DOM
// ============================================================
const checkoutItems = document.getElementById('checkoutItems');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutDelivery = document.getElementById('checkoutDelivery');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutForm = document.getElementById('checkoutForm');
const wilayaSelect = document.getElementById('cf_wilaya');
const munSelect = document.getElementById('cf_municipality');
const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
const confirmBtn = document.getElementById('checkoutConfirm');
const successModal = document.getElementById('checkoutSuccess');

let cartData = [];
let selectedWilayaId = null;
let appliedDiscount = null;

// ============================================================
// LOAD CART DATA
// ============================================================
function loadCart() {
  try {
    const stored = localStorage.getItem('qasr_checkout_cart');
    if (stored) {
      const parsed = JSON.parse(stored);
      // Handle new format { items, discount } and legacy format (array)
      if (Array.isArray(parsed)) {
        cartData = parsed;
        appliedDiscount = null;
      } else {
        cartData = parsed.items || [];
        appliedDiscount = parsed.discount || null;
      }
    }
  } catch (e) {
    cartData = [];
  }

  if (!cartData.length) {
    // Try loading from URL params (fallback)
    const params = new URLSearchParams(window.location.search);
    const data = params.get('cart');
    if (data) {
      try {
        cartData = JSON.parse(decodeURIComponent(data));
      } catch (e) { cartData = []; }
    }
  }
}

// ============================================================
// RENDER ORDER SUMMARY
// ============================================================
function renderCheckoutItems() {
  if (!cartData.length) {
    checkoutItems.innerHTML = `
      <div class="checkout-empty">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <h3>Your cart is empty</h3>
        <p data-i18n="checkout.emptyCart">Your cart is empty. Add items before checkout.</p>
        <a href="index.html" class="btn btn-outline" data-i18n="checkout.continueShopping">Continue Shopping</a>
      </div>
    `;
    confirmBtn.style.display = 'none';
    updateTotals();
    return;
  }

  let html = '';
  cartData.forEach(item => {
    const itemImg = item.selectedColor && item.selectedColor.images && item.selectedColor.images[0] ? item.selectedColor.images[0] : null;
    const imgStyle = itemImg ? `background:url('${itemImg}') center/cover no-repeat` : `background:${item.selectedColor ? item.selectedColor.hex : '#000'}`;
    html += `
      <div class="checkout-item">
        <div class="checkout-item-img" style="${imgStyle};border:1px solid rgba(255,255,255,0.05);"></div>
        <div class="checkout-item-info">
          <h4>${item.name}</h4>
          <p>${item.selectedColor ? item.selectedColor.name : 'N/A'} / ${item.size || 'M'}</p>
          <span class="item-price">${formatPrice(item.price)} x ${item.qty}</span>
        </div>
      </div>
    `;
  });
  checkoutItems.innerHTML = html;
  updateTotals();
}

// ============================================================
// UPDATE TOTALS
// ============================================================
function updateTotals() {
  const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = appliedDiscount ? Math.round(subtotal * appliedDiscount.percent / 100) : 0;
  const deliveryType = document.querySelector('input[name="delivery"]:checked')?.value || 'home';
  const fee = selectedWilayaId ? getDeliveryFee(selectedWilayaId, deliveryType) : 0;
  const total = subtotal + fee - discount;

  checkoutSubtotal.textContent = formatPrice(subtotal);
  checkoutDelivery.textContent = formatPrice(fee);
  const discountRow = document.getElementById('checkoutDiscountRow');
  const discountEl = document.getElementById('checkoutDiscount');
  if (discount > 0) {
    discountRow.style.display = 'flex';
    discountEl.textContent = `-${formatPrice(discount)}`;
  } else {
    discountRow.style.display = 'none';
  }
  checkoutTotal.textContent = formatPrice(total);
}

// ============================================================
// WILAYA / MUNICIPALITY DROPDOWNS
// ============================================================
function populateWilayas() {
  wilayaSelect.innerHTML = '<option value="" disabled selected>' + getText('checkout.wilaya') + '</option>';
  wilayaData.forEach(w => {
    const opt = document.createElement('option');
    opt.value = w.id;
    opt.textContent = `${w.id} - ${w.name} / ${w.nameAr}`;
    wilayaSelect.appendChild(opt);
  });
}

function populateMunicipalities(wilayaId) {
  munSelect.innerHTML = '<option value="" disabled selected>' + getText('checkout.municipality') + '</option>';
  const wilaya = wilayaData.find(w => w.id === wilayaId);
  if (wilaya) {
    wilaya.municipalities.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = m;
      munSelect.appendChild(opt);
    });
  }
  munSelect.disabled = false;
}

wilayaSelect.addEventListener('change', () => {
  const val = parseInt(wilayaSelect.value);
  if (val) {
    selectedWilayaId = val;
    populateMunicipalities(val);
    updateTotals();
  }
});

deliveryRadios.forEach(radio => {
  radio.addEventListener('change', updateTotals);
});

// ============================================================
// FORM SUBMISSION
// ============================================================
checkoutForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fullName = document.getElementById('cf_fullName').value.trim();
  const phone = document.getElementById('cf_phone').value.trim();
  const wilayaId = parseInt(wilayaSelect.value);
  const wilayaName = wilayaSelect.options[wilayaSelect.selectedIndex]?.textContent || '';
  const municipality = document.getElementById('cf_municipality').value;
  const address = document.getElementById('cf_address').value.trim();
  const deliveryType = document.querySelector('input[name="delivery"]:checked')?.value || 'home';
  const notes = document.getElementById('cf_notes').value.trim();

  if (!fullName || !phone || !wilayaId || !municipality) {
    alert('Please fill in all required fields.');
    return;
  }

  // Disable button and show loading
  confirmBtn.disabled = true;
  confirmBtn.innerHTML = '<span class="checkout-loading"><span class="spinner"></span> ' + getText('checkout.loading') + '</span>';

  // Calculate totals
  const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = appliedDiscount ? Math.round(subtotal * appliedDiscount.percent / 100) : 0;
  const deliveryFee = getDeliveryFee(wilayaId, deliveryType);
  const total = subtotal + deliveryFee - discount;

  // Build order data
  const orderData = {
    customer: {
      fullName,
      phone,
      address: {
        wilaya: { id: wilayaId, name: wilayaName },
        municipality,
        fullAddress: address || 'N/A'
      },
      deliveryType,
      notes
    },
    items: cartData.map(item => ({
      name: item.name,
      price: item.price,
      qty: item.qty,
      size: item.size,
      color: item.selectedColor ? item.selectedColor.name : 'N/A',
      colorHex: item.selectedColor ? item.selectedColor.hex : '#000',
      image: item.selectedColor && item.selectedColor.images && item.selectedColor.images[0] ? item.selectedColor.images[0] : ''
    })),
    pricing: {
      subtotal,
      discount,
      discountCode: appliedDiscount ? appliedDiscount.code : null,
      deliveryFee,
      total
    },
    status: 'pending',
    paymentMethod: 'Cash on Delivery'
  };

  // Save order
  const result = await saveOrder(orderData);

  // Reset button
  confirmBtn.disabled = false;
  confirmBtn.innerHTML = '<span>' + getText('checkout.confirm') + '</span>';

  if (result.success) {
    // Clear cart from localStorage
    localStorage.removeItem('qasr_checkout_cart');
    localStorage.removeItem('qasr_cart');

    // Show success
    successModal.classList.add('active');

    // Auto-redirect after 5 seconds
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 5000);
  }
});

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderCheckoutItems();
  populateWilayas();
  updateTotals();

  // Apply language from localStorage (already set above)
  applyCheckoutTranslations();
});

// ============================================================
// LANGUAGE SUPPORT
// ============================================================

function applyCheckoutTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = getText(key);
    if (text !== key) el.textContent = text;
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const text = getText(key);
    if (text !== key) el.placeholder = text;
  });
  // Update select default options
  document.querySelectorAll('select option[disabled][selected]').forEach(opt => {
    if (opt.value === '') {
      const parentKey = opt.closest('select')?.id;
      if (parentKey === 'cf_wilaya') opt.textContent = getText('checkout.wilaya');
      if (parentKey === 'cf_municipality') opt.textContent = getText('checkout.municipality');
    }
  });
  // Update confirm button
  const confirmBtn = document.getElementById('checkoutConfirm');
  if (confirmBtn) confirmBtn.innerHTML = `<span>${getText('checkout.confirm')}</span>`;
  // Update section titles
  const sectionTitles = document.querySelectorAll('.checkout-section-title');
  if (sectionTitles[0]) sectionTitles[0].textContent = getText('checkout.orderSummary');
  if (sectionTitles[1]) sectionTitles[1].textContent = getText('checkout.customerInfo');
  // Update step labels
  const steps = document.querySelectorAll('.checkout-steps .step');
  if (steps[0]) steps[0].textContent = getText('checkout.step1');
  if (steps[1]) steps[1].textContent = getText('checkout.step2');
  if (steps[2]) steps[2].textContent = getText('checkout.step3');
  // Update success modal
  const successTitle = document.querySelector('.checkout-success-modal h2');
  const successMsg = document.querySelector('.checkout-success-modal p');
  const backBtn = document.querySelector('.checkout-success-modal .btn');
  if (successTitle) successTitle.textContent = getText('checkout.success');
  if (successMsg) successMsg.textContent = getText('checkout.successMsg');
  if (backBtn) backBtn.textContent = getText('checkout.backHome');
}


