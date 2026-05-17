// QASR — Main JavaScript
// All functionality: navbar, cart, modal, animations, scroll effects, language, theme

'use strict';

// Prevent scroll restoration on page reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// ============================================================
// DOM ELEMENTS
// ============================================================
const preloader = document.getElementById('preloader');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartTotalBtn = document.getElementById('cartTotalBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchSubmit = document.getElementById('searchSubmit');
const productGrid = document.getElementById('productGrid');
const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalMainImg = document.getElementById('modalMainImg');
const modalThumbnails = document.getElementById('modalThumbnails');
const modalCategory = document.getElementById('modalCategory');
const modalProductName = document.getElementById('modalProductName');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const colorOptions = document.getElementById('colorOptions');
const selectedColorName = document.getElementById('selectedColorName');
const sizeOptions = document.getElementById('sizeOptions');
const selectedSize = document.getElementById('selectedSize');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const qtyValue = document.getElementById('qtyValue');
const addToCartBtn = document.getElementById('addToCartBtn');
const buyNowBtn = document.getElementById('buyNowBtn');
const backToTop = document.getElementById('backToTop');
const featuredCarousel = document.getElementById('featuredCarousel');
const featuredPrev = document.getElementById('featuredPrev');
const featuredNext = document.getElementById('featuredNext');
const heroSlides = document.querySelectorAll('.hero-slide');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const langBtns = document.querySelectorAll('.lang-btn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// ============================================================
// STATE
// ============================================================
let cart = [];
let currentProduct = null;
let currentColorIndex = 0;
let currentSize = 'M';
let currentQty = 1;
let appliedDiscount = null;
let currentSlide = 0;
let scrollRevealed = new Set();

// ============================================================
// PRELOADER
// ============================================================
window.addEventListener('load', () => {
  // Restore theme preference
  const savedTheme = localStorage.getItem('qasr_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Restore language preference
  const savedLang = localStorage.getItem('qasr_lang') || 'en';
  currentLang = savedLang;
  document.documentElement.setAttribute('lang', savedLang);
  document.documentElement.setAttribute('dir', savedLang === 'ar' ? 'rtl' : 'ltr');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === savedLang);
  });

  setTimeout(() => {
    preloader.classList.add('preloader-hidden');
    setTimeout(() => {
      preloader.style.display = 'none';
      applyTranslations();
      initMobileCarousels();
    }, 800);
  }, 1500);
});

// ============================================================
// NAVBAR
// ============================================================
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
  // Back to top
  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

// Hamburger menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// Close mobile menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 200;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================================
// LANGUAGE SYSTEM
// ============================================================
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('qasr_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    // Update navbar class for styling
    document.body.classList.toggle('rtl', lang === 'ar');
    applyTranslations();
  });
});

// ============================================================
// THEME TOGGLE
// ============================================================
themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('qasr_theme', 'dark');
    updateThemeIcon(false);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('qasr_theme', 'light');
    updateThemeIcon(true);
  }
});

function updateThemeIcon(isLight) {
  if (isLight) {
    themeIcon.innerHTML = `
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    `;
  } else {
    themeIcon.innerHTML = `
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    `;
  }
}

// ============================================================
// APPLY TRANSLATIONS — COMPREHENSIVE
// ============================================================
function applyTranslations() {
  // 1. All data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = getText(key);
    if (text !== key) el.textContent = text;
  });

  // 2. Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const text = getText(key);
    if (text !== key) el.placeholder = text;
  });

  // 3. Filter buttons — removed, category labels stay untranslated

  // 4. Nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const map = {
      '#hero': 'nav.home', '#collection': 'nav.collection', '#about': 'nav.about',
      '#lookbook': 'nav.lookbook', '#featured': 'nav.featured',
      '#testimonials': 'nav.testimonials', '#contact': 'nav.contact'
    };
    const key = map[href];
    if (key) { const t = getText(key); if (t !== key) link.textContent = t; }
  });

  // 5. Hero section
  const shopBtn = document.querySelector('.hero-cta .btn-gold');
  const discoverBtn = document.querySelector('.hero-cta .btn-outline');
  const badge = document.querySelector('.hero-badge');
  const subtitle = document.querySelector('.hero-subtitle');
  const title2 = document.querySelector('.hero-title-line-2');
  const scrollTxt = document.querySelector('.hero-scroll-indicator span');
  if (shopBtn) shopBtn.textContent = getText('hero.shopBtn');
  if (discoverBtn) discoverBtn.textContent = getText('hero.discoverBtn');
  if (badge) badge.textContent = getText('hero.badge');
  if (subtitle) subtitle.textContent = getText('hero.subtitle');
  if (title2) title2.textContent = getText('hero.title2');
  if (scrollTxt) scrollTxt.textContent = getText('hero.scroll');

  // 6. Collection section
  const collSub = document.querySelector('#collection .section-subtitle');
  const collTitle = document.querySelector('#collection .section-title');
  const collDesc = document.querySelector('#collection .section-desc');
  if (collSub) collSub.textContent = getText('collection.subtitle');
  if (collTitle) collTitle.textContent = getText('collection.title');
  if (collDesc) collDesc.textContent = getText('collection.desc');

  // 7. Product cards (dynamic content)
  document.querySelectorAll('.product-card').forEach(card => {
    const id = parseInt(card.dataset.id);
    const product = products.find(p => p.id === id);
    if (!product) return;
    const nameEl = card.querySelector('.product-card-name');
    const priceEl = card.querySelector('.product-card-price');
    const catEl = card.querySelector('.product-card-category');
    const btnEl = card.querySelector('.product-card-add');
    if (nameEl) nameEl.textContent = product.name;
    if (priceEl) priceEl.innerHTML = product.sale
      ? `<span class="original-price">${formatPrice(product.price)}</span> ${formatPrice(product.price * (1 - product.discountPercent / 100))}`
      : formatPrice(product.price);
    if (catEl) catEl.textContent = product.category;
    if (btnEl) btnEl.textContent = getText('productCard.addToBag');
  });

  // 7b. Featured carousel prices
  document.querySelectorAll('.featured-item-overlay h3[data-product-id]').forEach(h3 => {
    const id = parseInt(h3.dataset.productId);
    const product = products.find(p => p.id === id);
    if (product) {
      const priceEl = h3.nextElementSibling;
      if (priceEl && priceEl.tagName === 'P') priceEl.textContent = product.sale ? formatPrice(product.price * (1 - product.discountPercent / 100)) : formatPrice(product.price);
      if (h3.textContent === 'products.name' + id) h3.textContent = product.name;
    }
  });

  // 8. Product modal
  const modalColorLabel = document.querySelector('.modal-colors h4');
  const modalSizeLabel = document.querySelector('.modal-sizes h4');
  const modalQtyLabel = document.querySelector('.modal-quantity h4');
  const addBtn = document.getElementById('addToCartBtn');
  const buyBtn = document.getElementById('buyNowBtn');
  if (modalColorLabel && modalColorLabel.querySelector('#selectedColorName')) {
    const span = modalColorLabel.querySelector('#selectedColorName');
    modalColorLabel.innerHTML = `${getText('modal.color')}: `;
    modalColorLabel.appendChild(span);
  }
  if (modalSizeLabel && modalSizeLabel.querySelector('#selectedSize')) {
    const span = modalSizeLabel.querySelector('#selectedSize');
    modalSizeLabel.innerHTML = `${getText('modal.size')}: `;
    modalSizeLabel.appendChild(span);
  }
  if (modalQtyLabel) modalQtyLabel.textContent = getText('modal.quantity');
  if (addBtn) addBtn.textContent = getText('modal.addToBag');
  if (buyBtn) buyBtn.textContent = getText('modal.buyNow');
  // Modal extra items
  document.querySelectorAll('.extra-item span').forEach((span, i) => {
    if (i === 0) span.textContent = getText('modal.freeShipping');
    if (i === 1) span.textContent = getText('modal.secureCheckout');
  });

  // 9. About section
  const aboutSub = document.querySelector('#about .section-subtitle');
  const aboutTitle = document.querySelector('#about .section-title');
  const aboutP1 = document.querySelector('#about .about-text:nth-child(4)');
  const aboutP2 = document.querySelector('#about .about-text:nth-child(5)');
  const aboutP3 = document.querySelector('#about .about-text:nth-child(6)');
  const aboutSig = document.querySelector('.about-signature-line');
  const aboutSince = document.querySelector('.about-floating-number');
  if (aboutSub) aboutSub.textContent = getText('about.subtitle');
  if (aboutTitle) aboutTitle.textContent = getText('about.title');
  if (aboutP1) aboutP1.innerHTML = `<span class="about-drop-cap">Q</span>${getText('about.p1')}`;
  if (aboutP2) aboutP2.textContent = getText('about.p2');
  if (aboutP3) aboutP3.textContent = getText('about.p3');
  if (aboutSig) aboutSig.textContent = getText('about.signature');
  if (aboutSince) aboutSince.textContent = getText('about.since');

  // 10. Lookbook
  renderLookbook();

  // 11. Featured section
  const featSub = document.querySelector('#featured .section-subtitle');
  const featTitle = document.querySelector('#featured .section-title');
  const featDesc = document.querySelector('#featured .section-desc');
  if (featSub) featSub.textContent = getText('featured.subtitle');
  if (featTitle) featTitle.textContent = getText('featured.title');
  if (featDesc) featDesc.textContent = getText('featured.desc');

  // 12. Testimonials
  renderTestimonials();

  // 13. Stats
  document.querySelectorAll('.stat-label').forEach((label, i) => {
    const keys = ['stats.customers', 'stats.products', 'stats.countries', 'stats.rating'];
    if (keys[i]) label.textContent = getText(keys[i]);
  });

  // 14. Newsletter
  const newsTitle = document.querySelector('.newsletter .section-title');
  const newsText = document.querySelector('.newsletter-text');
  const newsInput = document.querySelector('.newsletter-input');
  const newsBtn = document.querySelector('.newsletter-btn');
  const newsDisc = document.querySelector('.newsletter-disclaimer');
  if (newsTitle) newsTitle.textContent = getText('newsletter.title');
  if (newsText) newsText.textContent = getText('newsletter.text');
  if (newsInput) newsInput.placeholder = getText('newsletter.placeholder');
  if (newsBtn) newsBtn.textContent = getText('newsletter.btn');
  if (newsDisc) newsDisc.textContent = getText('newsletter.disclaimer');

  // 15. Cart sidebar
  const cartHeader = document.querySelector('.cart-header h3');
  const cartEmptyP = document.querySelector('.cart-empty p');
  const cartEmptySpan = document.querySelector('.cart-empty span');
  const cartTotalLabel = document.querySelector('.cart-total span:first-child');
  const searchInput_ = document.getElementById('searchInput');
  if (cartHeader) cartHeader.textContent = getText('cart.title');
  if (cartEmptyP) cartEmptyP.textContent = getText('cart.empty');
  if (cartEmptySpan) cartEmptySpan.textContent = getText('cart.emptyHint');
  if (cartTotalLabel) cartTotalLabel.textContent = getText('cart.total');
  if (searchInput_) searchInput_.placeholder = getText('search.placeholder');

  // 16. Contact section
  const contSub = document.querySelector('#contact .section-subtitle');
  const contTitle = document.querySelector('#contact .section-title');
  const contDesc = document.querySelector('#contact .section-desc');
  if (contSub) contSub.textContent = getText('contact.subtitle');
  if (contTitle) contTitle.textContent = getText('contact.title');
  if (contDesc) contDesc.textContent = getText('contact.desc');

  // Contact cards
  const cc = getText('contactCards');
  const contactCards = document.querySelectorAll('.contact-card-modern');
  if (contactCards.length >= 3 && cc && typeof cc === 'object') {
    // FaceBook card
    const faCard = contactCards[0];
    if (faCard) {
      const h4 = faCard.querySelector('h4');
      const p = faCard.querySelector('p');
      const btn = faCard.querySelector('.contact-card-btn');
      if (h4) h4.textContent = cc.facebookTitle || 'Facebook';
      if (p) p.textContent = cc.facebookDesc || '';
      if (btn) btn.textContent = cc.facebookBtn || 'Follow Us';
    }
    // Instagram card
    const igCard = contactCards[1];
    if (igCard) {
      const h4 = igCard.querySelector('h4');
      const p = igCard.querySelector('p');
      const btn = igCard.querySelector('.contact-card-btn');
      if (h4) h4.textContent = cc.instagramTitle || 'Instagram';
      if (p) p.textContent = cc.instagramDesc || '';
      if (btn) btn.textContent = cc.instagramBtn || 'Follow Us';
    }
    // TikTok card
    const ttCard = contactCards[2];
    if (ttCard) {
      const h4 = ttCard.querySelector('h4');
      const p = ttCard.querySelector('p');
      const btn = ttCard.querySelector('.contact-card-btn');
      if (h4) h4.textContent = cc.tiktokTitle || 'TikTok';
      if (p) p.textContent = cc.tiktokDesc || '';
      if (btn) btn.textContent = cc.tiktokBtn || 'Follow Us';
    }
  }

  // Contact info items
  const locLabel = document.querySelector('.contact-info-item:nth-child(1) h4');
  const locVal = document.querySelector('.contact-info-item:nth-child(1) p');
  const emailLabel = document.querySelector('.contact-info-item:nth-child(2) h4');
  const phoneLabel = document.querySelector('.contact-info-item:nth-child(3) h4');
  if (locLabel) locLabel.textContent = getText('contact.location');
  if (locVal) locVal.textContent = getText('contact.locationVal');
  if (emailLabel) emailLabel.textContent = getText('contact.email');
  if (phoneLabel) phoneLabel.textContent = getText('contact.phone');

  // 17. Store section
  const storeSub = document.querySelector('#store .section-subtitle');
  const storeTitle = document.querySelector('#store .section-title');
  const storeDesc = document.querySelector('#store .section-desc');
  const storeName = document.querySelector('.store-name');
  const storeAddr = document.querySelector('.store-info-item:nth-child(2) p');
  if (storeSub) storeSub.textContent = getText('store.subtitle');
  if (storeTitle) storeTitle.textContent = getText('store.title');
  if (storeDesc) storeDesc.textContent = getText('store.desc');
  if (storeName) storeName.textContent = getText('store.name');
  if (storeAddr) storeAddr.textContent = getText('store.address');

  // 18. Footer
  const footerDesc = document.querySelector('.footer-desc');
  const footerCopyright = document.querySelector('.footer-bottom p');
  if (footerDesc) footerDesc.textContent = getText('footer.desc');
  if (footerCopyright) footerCopyright.textContent = getText('footer.copyright');
  // Footer link groups
  const footerGroups = document.querySelectorAll('.footer-links-group');
  const footerGroupKeys = [
    { h4: 'footer.quickLinks', links: ['nav.collection', 'nav.about', 'nav.lookbook', 'nav.contact'] },
    { h4: 'footer.support', links: ['footer.shipping', 'footer.returns', 'footer.sizeGuide', 'footer.faq'] },
    { h4: 'footer.connect', links: ['', '', '', ''] }
  ];
  footerGroups.forEach((group, gi) => {
    if (footerGroupKeys[gi]) {
      const h4 = group.querySelector('h4');
      const links = group.querySelectorAll('a');
      if (h4) h4.textContent = getText(footerGroupKeys[gi].h4);
      links.forEach((link, li) => {
        const key = footerGroupKeys[gi].links[li];
        if (key && link) link.textContent = getText(key);
      });
    }
  });

  // 19. Checkout page (if on checkout.html)
  const confirmBtn = document.getElementById('checkoutConfirm');
  if (confirmBtn) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = getText(key);
      if (text !== key) el.textContent = text;
    });
  }

  // 20. Newsletter disclaimer + checkbox label
  const cartCheckoutBtn = document.querySelector('.cart-checkout');
  if (cartCheckoutBtn) {
    const span = cartCheckoutBtn.querySelector('span:last-child');
    // Keep the button showing "Checkout — X DA"
  }

  // 21. WhatsApp availability notes
  const waAvail = document.querySelectorAll('[data-i18n-whatsapp]');
  waAvail.forEach(el => {
    const key = el.dataset.i18nWhatsapp;
    const text = getText(key);
    if (text !== key) el.textContent = text;
  });

  // 22. Cart item names
  const cartItemsContainer = document.getElementById('cartItems');
  if (cartItemsContainer) {
    cartItemsContainer.querySelectorAll('.cart-item').forEach((el, idx) => {
      const item = cart[idx];
      if (item) {
        const nameEl = el.querySelector('.cart-item-info h4');
        if (nameEl) nameEl.textContent = item.name;
      }
    });
  }

  // 23. Featured carousel item names
  const featuredCarousel = document.getElementById('featuredCarousel');
  if (featuredCarousel) {
    featuredCarousel.querySelectorAll('.featured-item').forEach(item => {
      const h3 = item.querySelector('.featured-item-overlay h3');
      if (h3 && h3.dataset.productId) {
        const product = products.find(p => p.id === parseInt(h3.dataset.productId));
        if (product) h3.textContent = product.name;
      }
    });
  }

  // 24. Product name + description in modal (when open)
  if (currentProduct) {
    const nameEl = document.getElementById('modalProductName');
    if (nameEl) nameEl.textContent = currentProduct.name;
    const descEl = document.getElementById('modalDescription');
    if (descEl && descText !== descKey) descEl.textContent = descText;
  }

  // 25. Support modal (if open)
  const supportModal = document.getElementById('supportModal');
  if (supportModal && supportModal.classList.contains('active')) {
    const titleEl = document.getElementById('supportModalTitle');
    const bodyEl = document.getElementById('supportModalBody');
    const supportKey = titleEl ? titleEl.dataset.supportKey : null;
    if (supportKey) {
      const newTitle = getText('support.' + supportKey);
      const newContent = getText('support.' + supportKey + 'Content');
      if (titleEl && newTitle !== 'support.' + supportKey) {
        titleEl.textContent = newTitle;
        bodyEl.textContent = newContent;
      }
    }
  }
}

// ============================================================
// SEARCH OVERLAY
// ============================================================
searchToggle.addEventListener('click', () => {
  searchOverlay.classList.add('active');
  setTimeout(() => searchInput.focus(), 300);
});

const mobileSearchToggle = document.getElementById('mobileSearchToggle');
if (mobileSearchToggle) {
  mobileSearchToggle.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 400);
  });
}

searchClose.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
});

searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) searchOverlay.classList.remove('active');
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') searchOverlay.classList.remove('active');
  if (e.key === 'Enter') performSearch(searchInput.value);
});

searchSubmit.addEventListener('click', () => performSearch(searchInput.value));

function performSearch(query) {
  query = query.toLowerCase().trim();
  if (!query) return;
  const results = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );
  searchOverlay.classList.remove('active');
  renderProducts(results);
  applyTranslations();
  filterBtns.forEach(btn => btn.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');
  document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// SHOPPING CART
// ============================================================
cartToggle.addEventListener('click', () => {
  cartSidebar.classList.toggle('active');
  cartOverlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function addToCart(product, colorIndex, size, qty) {
  const existing = cart.find(item =>
    item.id === product.id &&
    item.colorIndex === colorIndex &&
    item.size === size
  );
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      ...product,
      colorIndex,
      size,
      qty,
      selectedColor: product.colors[colorIndex]
    });
  }
  updateCartUI();
  cartCount.classList.remove('cart-bounce');
  void cartCount.offsetWidth;
  cartCount.classList.add('cart-bounce');
  showCartNotification(product.name);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = appliedDiscount ? Math.round(subtotal * appliedDiscount.percent / 100) : 0;
  const totalPrice = subtotal - discount;

  cartCount.textContent = totalItems;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <p>Your bag is empty</p>
        <span>Add some luxury pieces to your collection</span>
      </div>
    `;
    document.getElementById('discountMsg').textContent = '';
    appliedDiscount = null;
  } else {
    let html = '';
    cart.forEach((item, index) => {
      html += `
        <div class="cart-item">
          <div class="cart-item-img" style="background:url('${item.selectedColor.images[0]}') center/cover no-repeat"></div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>${item.selectedColor.name} / ${item.size}</p>
            <span>${formatPrice(item.price)} x ${item.qty}</span>
          </div>
          <button class="cart-item-remove" data-index="${index}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      `;
    });
    cartItems.innerHTML = html;
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.index)));
    });
  }

  const total = Math.round(totalPrice);
  document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
  const discountRow = document.getElementById('discountRow');
  const discountAmt = document.getElementById('cartDiscountAmount');
  if (discount > 0) {
    discountRow.style.display = 'flex';
    discountAmt.textContent = `-${formatPrice(discount)}`;
  } else {
    discountRow.style.display = 'none';
  }
  cartTotal.textContent = formatPrice(total);
  cartTotalBtn.textContent = total;
}

// Checkout button — navigate to checkout page
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    const cartData = { items: cart, discount: appliedDiscount };
    localStorage.setItem('qasr_checkout_cart', JSON.stringify(cartData));
    window.location.href = 'checkout.html';
  });
}

// Discount code logic
let validCodes = { 'QASR20': 20, 'ROYAL10': 10, 'VIP15': 15 };
// Load discount codes from Firestore
(async function loadDiscountCodes() {
  if (typeof db !== 'undefined' && db) {
    try {
      const snap = await db.collection('discounts').get();
      if (!snap.empty) {
        const codes = {};
        snap.forEach(doc => {
          const d = doc.data();
          if (d.active !== false) codes[d.code] = d.percent;
        });
        if (Object.keys(codes).length > 0) validCodes = codes;
      }
    } catch (e) { /* fallback to hardcoded */ }
  }
})();
const discountApply = document.getElementById('discountApply');
const discountInput = document.getElementById('discountInput');
const discountMsg = document.getElementById('discountMsg');

if (discountApply) {
  discountApply.addEventListener('click', () => {
    const code = discountInput.value.trim().toUpperCase();
    if (appliedDiscount) {
      appliedDiscount = null;
      discountInput.value = '';
      discountMsg.textContent = '';
      discountMsg.className = 'cart-discount-msg';
      discountApply.textContent = 'Apply';
      updateCartUI();
      return;
    }
    if (!code) {
      discountMsg.textContent = 'Enter a code';
      discountMsg.className = 'cart-discount-msg error';
      return;
    }
    if (validCodes[code]) {
      appliedDiscount = { code, percent: validCodes[code] };
      discountMsg.textContent = `${validCodes[code]}% off applied!`;
      discountMsg.className = 'cart-discount-msg success';
      discountApply.textContent = 'Remove';
      updateCartUI();
    } else {
      discountMsg.textContent = 'Invalid code';
      discountMsg.className = 'cart-discount-msg error';
    }
  });
}

// Cart notification
function showCartNotification(name) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${name} — ${getText('cart.added')}</span>
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.classList.add('show'), 10);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 400);
  }, 2500);
}

// ============================================================
// PRODUCT GRID
// ============================================================
function renderProducts(items) {
  productGrid.innerHTML = '';
  items.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.dataset.id = product.id;
    card.innerHTML = `
      <div class="product-card-image" style="background:url('${product.colors[0].images[0]}') center/cover no-repeat">
        ${product.sale ? `<div class="product-card-badge">-${product.discountPercent}%</div>` : ''}
        <div class="product-card-bg" style="background:linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.4));"></div>
        <div class="product-card-overlay">
          <span class="product-card-category">${product.category}</span>
        </div>
        <div class="product-card-actions">
          <button class="product-card-btn quick-view" aria-label="Quick View">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
      <div class="product-card-info">
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-price">${product.sale ? `<span class="original-price">${formatPrice(product.price)}</span> ${formatPrice(product.price * (1 - product.discountPercent / 100))}` : formatPrice(product.price)}</p>
        <button class="btn btn-gold product-card-add" data-i18n="productCard.addToBag">Add to Bag</button>
      </div>
    `;
    card.querySelector('.product-card-image').addEventListener('click', () => openModal(product.id));
    card.querySelector('.quick-view').addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(product.id);
    });
    card.querySelector('.product-card-add').addEventListener('click', (e) => {
      e.stopPropagation();
      currentProduct = product;
      currentColorIndex = 0;
      currentSize = product.sizes.includes('One Size') ? 'One Size' : product.sizes[1] || product.sizes[0];
      currentQty = 1;
      addToCart(product, 0, currentSize, 1);
    });
    productGrid.appendChild(card);
  });
  // Re-observe reveal elements
  observeReveal();
  // Re-init carousels after re-render
  initMobileCarousels();
}

renderProducts(products);

// ============================================================
// PRODUCT FILTERING
// ============================================================
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    if (filter === 'all') {
      renderProducts(products);
    } else {
      const filtered = products.filter(p => p.category === filter);
      renderProducts(filtered);
    }
    applyTranslations();
  });
});

// Load extra categories from Firestore (added via admin panel)
(async function addExtraCategoryFilters() {
  try {
    let extraCats = [];
    // Try Firestore first so visitors see admin-added categories
    if (typeof db !== 'undefined' && db) {
      try {
        const snap = await db.collection('categories').get();
        snap.forEach(doc => {
          const d = doc.data();
          extraCats.push({ id: doc.id, label: d.label || doc.id });
        });
      } catch {}
    }
    // Fall back to localStorage if Firestore unavailable
    if (extraCats.length === 0) {
      const data = localStorage.getItem('qasr_extra_categories');
      if (data) extraCats = JSON.parse(data);
    }
    if (!Array.isArray(extraCats) || extraCats.length === 0) return;
    const filterTabs = document.querySelector('.filter-tabs');
    if (!filterTabs) return;
    const existing = new Set();
    filterTabs.querySelectorAll('.filter-btn').forEach(btn => existing.add(btn.dataset.filter));
    extraCats.forEach(cat => {
      if (existing.has(cat.id)) return;
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.dataset.filter = cat.id;
      btn.textContent = cat.label;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        if (filter === 'all') {
          renderProducts(window.products);
        } else {
          renderProducts(window.products.filter(p => p.category === filter));
        }
        applyTranslations();
      });
      filterTabs.appendChild(btn);
      existing.add(cat.id);
    });
  } catch (e) {}
})();

// ============================================================
// PRODUCT MODAL
// ============================================================
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  currentProduct = product;
  currentColorIndex = 0;
  currentSize = product.sizes.includes('One Size') ? 'One Size' : product.sizes[1] || product.sizes[0];
  currentQty = 1;

  updateModalContent();
  modal.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  modal.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

modalClose.addEventListener('click', closeModal);
modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

function updateModalContent() {
  if (!currentProduct) return;
  const p = currentProduct;
  const color = p.colors[currentColorIndex];

  modalCategory.textContent = p.category;
  modalProductName.textContent = p.name;
  modalPrice.innerHTML = p.sale
    ? `<span class="original-price">${formatPrice(p.price)}</span> ${formatPrice(p.price * (1 - p.discountPercent / 100))}`
    : formatPrice(p.price);
  modalDescription.textContent = p.description;

  // Main image
  modalMainImg.src = color.images[0];

  // Thumbnails
  modalThumbnails.innerHTML = '';
  p.colors.forEach((c, i) => {
    const thumb = document.createElement('div');
    thumb.className = `modal-thumb ${i === currentColorIndex ? 'active' : ''}`;
    thumb.style.background = c.hex;
    if (c.hex === '#ffffff' || c.hex === '#f5f0e8' || c.hex === '#e8e0d0' || c.hex === '#C0C0C0') {
      thumb.style.border = '1px solid #333';
    }
    thumb.addEventListener('click', () => {
      currentColorIndex = i;
      updateModalContent();
    });
    modalThumbnails.appendChild(thumb);
  });

  // Colors
  colorOptions.innerHTML = '';
  p.colors.forEach((c, i) => {
    const option = document.createElement('div');
    option.className = `color-option ${i === currentColorIndex ? 'active' : ''}`;
    const swatch = document.createElement('span');
    swatch.className = 'color-swatch';
    swatch.style.background = c.hex;
    if (c.hex === '#ffffff' || c.hex === '#f5f0e8' || c.hex === '#e8e0d0' || c.hex === '#C0C0C0') {
      swatch.style.border = '1px solid #444';
    }
    option.appendChild(swatch);
    option.addEventListener('click', () => {
      currentColorIndex = i;
      updateModalContent();
    });
    colorOptions.appendChild(option);
  });
  selectedColorName.textContent = p.colors[currentColorIndex].name;

  // Sizes
  sizeOptions.innerHTML = '';
  p.sizes.forEach(s => {
    const btn = document.createElement('button');
    btn.className = `size-btn ${s === currentSize ? 'active' : ''}`;
    btn.textContent = s;
    btn.addEventListener('click', () => {
      currentSize = s;
      selectedSize.textContent = s;
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    sizeOptions.appendChild(btn);
  });
  selectedSize.textContent = currentSize;

  // Qty
  qtyValue.textContent = currentQty;
}

qtyMinus.addEventListener('click', () => {
  if (currentQty > 1) {
    currentQty--;
    qtyValue.textContent = currentQty;
  }
});

qtyPlus.addEventListener('click', () => {
  if (currentQty < 10) {
    currentQty++;
    qtyValue.textContent = currentQty;
  }
});

addToCartBtn.addEventListener('click', () => {
  if (currentProduct) {
    addToCart(currentProduct, currentColorIndex, currentSize, currentQty);
    closeModal();
  }
});

buyNowBtn.addEventListener('click', () => {
  if (currentProduct) {
    addToCart(currentProduct, currentColorIndex, currentSize, currentQty);
    closeModal();
    // Navigate to checkout
    localStorage.setItem('qasr_checkout_cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
  }
});

// ============================================================
// FEATURED PRODUCTS CAROUSEL
// ============================================================
function renderFeaturedCarousel() {
  const featured = products.filter(p => p.featured);
  featuredCarousel.innerHTML = '';
  featured.forEach(product => {
    const item = document.createElement('div');
    item.className = 'featured-item';
    item.innerHTML = `
      <div class="featured-item-image" style="background:url('${product.colors[0].images[0]}') center/cover no-repeat">
        <div class="featured-item-overlay">
          <h3 data-product-id="${product.id}">${product.name}</h3>
          <p>${product.sale ? formatPrice(product.price * (1 - product.discountPercent / 100)) : formatPrice(product.price)}</p>
        </div>
      </div>
    `;
    item.addEventListener('click', () => openModal(product.id));
    featuredCarousel.appendChild(item);
  });
}

renderFeaturedCarousel();

let scrollPos = 0;
const scrollAmount = 320;

featuredPrev.addEventListener('click', () => {
  scrollPos = Math.max(0, scrollPos - scrollAmount);
  featuredCarousel.scrollTo({ left: scrollPos, behavior: 'smooth' });
});

featuredNext.addEventListener('click', () => {
  scrollPos = Math.min(featuredCarousel.scrollWidth - featuredCarousel.clientWidth, scrollPos + scrollAmount);
  featuredCarousel.scrollTo({ left: scrollPos, behavior: 'smooth' });
});

// ============================================================
// MOBILE CAROUSELS (Collection, Lookbook, Testimonials, Contact)
// ============================================================
function initMobileCarousels() {
  const isMobile = window.innerWidth <= 768;
  const containers = document.querySelectorAll('.mobile-carousel');

  containers.forEach(container => {
    // Remove existing dots container
    const existingDots = container.parentElement.querySelector('.carousel-dots');
    if (existingDots) existingDots.remove();

    if (!isMobile) return;

    const items = container.children;
    if (items.length < 2) return;

    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';

    for (let i = 0; i < items.length; i++) {
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.addEventListener('click', () => {
        container.scrollTo({ left: items[i].offsetLeft - container.offsetLeft, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    }

    container.parentElement.appendChild(dotsContainer);

    // Update active dot on scroll
    let ticking = false;
    container.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const dots = dotsContainer.querySelectorAll('.dot');
          const scrollLeft = container.scrollLeft;
          const containerWidth = container.offsetWidth;
          let activeIndex = 0;
          for (let i = 0; i < items.length; i++) {
            const itemLeft = items[i].offsetLeft - container.offsetLeft;
            if (scrollLeft >= itemLeft - containerWidth * 0.25) {
              activeIndex = i;
            }
          }
          dots.forEach((d, idx) => d.classList.toggle('active', idx === activeIndex));
          ticking = false;
        });
        ticking = true;
      }
    });
  });
}

// Re-init on resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initMobileCarousels, 200);
});

// ============================================================
// TESTIMONIALS
// ============================================================
async function renderTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  const testSub = document.querySelector('#testimonials .section-subtitle');
  const testTitle = document.querySelector('#testimonials .section-title');
  if (testSub) testSub.textContent = getText('testimonials.subtitle');
  if (testTitle) testTitle.textContent = getText('testimonials.title');

  const formTitle = document.querySelector('.testimonial-form h3');
  const formName = document.getElementById('testimonialName');
  const formText = document.getElementById('testimonialText');
  const formBtn = document.getElementById('testimonialSubmitBtn');
  if (formTitle) formTitle.textContent = getText('testimonials.formTitle');
  if (formName) formName.placeholder = getText('testimonials.namePlaceholder');
  if (formText) formText.placeholder = getText('testimonials.textPlaceholder');
  if (formBtn) formBtn.textContent = getText('testimonials.submitBtn');

  // Collect hardcoded testimonials from translations
  const hardcoded = getText('testimonials.items');
  let allCards = [];
  if (Array.isArray(hardcoded)) {
    allCards = hardcoded.map((item, i) => ({
      id: 'h' + i,
      author: item.author,
      text: item.text,
      role: item.role || '',
      hardcoded: true,
      createdAt: null
    }));
  }

  // Fetch from Firestore
  try {
    const db = firebase.firestore();
    const snap = await db.collection('testimonials').orderBy('createdAt', 'desc').get();
    snap.forEach(doc => {
      const d = doc.data();
      allCards.push({
        id: doc.id,
        author: d.name || 'Unknown',
        text: d.text || '',
        role: '',
        hardcoded: false,
        createdAt: d.createdAt
      });
    });
  } catch (e) {}

  if (allCards.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">' + getText('admin.empty.noTestimonials') + '</div>';
    return;
  }

  function getInitial(name) {
    return name ? name.charAt(0).toUpperCase() : '?';
  }

  container.innerHTML = allCards.map(c => `
    <div class="testimonial-card glass-card">
      <div class="testimonial-stars">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
      <p class="testimonial-text">${c.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${getInitial(c.author)}</div>
        <div>
          <h4>${c.author}</h4>
          <span>${c.role}</span>
        </div>
      </div>
    </div>
  `).join('');

  initTestimonialSlider();
  observeReveal();
}

function initTestimonialSlider() {
  const container = document.getElementById('testimonialsContainer');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  if (!container || !prevBtn || !nextBtn) return;

  // Reset scroll position on re-render
  container.scrollLeft = 0;

  function isAtStart() { return container.scrollLeft <= 10; }
  function isAtEnd() {
    return container.scrollLeft + container.offsetWidth >= container.scrollWidth - 10;
  }

  function scrollBy(dir) {
    const card = container.querySelector('.testimonial-card');
    if (!card) return;
    const step = card.offsetWidth + (parseInt(getComputedStyle(container).gap) || 24);
    container.scrollBy({ left: dir * step, behavior: 'smooth' });
  }

  function updateArrows() {
    prevBtn.disabled = isAtStart();
    nextBtn.disabled = isAtEnd();
  }

  // Remove old listeners by cloning
  const newPrev = prevBtn.cloneNode(true);
  const newNext = nextBtn.cloneNode(true);
  prevBtn.parentNode.replaceChild(newPrev, prevBtn);
  nextBtn.parentNode.replaceChild(newNext, nextBtn);

  newPrev.addEventListener('click', () => { scrollBy(-1); });
  newNext.addEventListener('click', () => { scrollBy(1); });

  container.addEventListener('scroll', updateArrows);
  updateArrows();
}

// ============================================================
// LOOKBOOK
// ============================================================
const LOOKBOOK_DEFAULTS = [
  { title: 'Street Royalty', sub: 'Collection 2026', img: 'images/lookbook/lookbook-1.jpg' },
  { title: 'Gold Standard', sub: 'Limited Edition', img: 'images/lookbook/lookbook-2.jpg' },
  { title: 'Urban Crown', sub: 'Signature Line', img: 'images/lookbook/lookbook-3.jpg' },
  { title: 'Midnight Reign', sub: 'Exclusive Drop', img: 'images/lookbook/lookbook-4.jpg' },
  { title: 'Royal Blood', sub: 'Core Collection', img: 'images/lookbook/lookbook-5.jpg' },
  { title: 'Follow the Kingdom', sub: '@QASR', img: 'images/lookbook/lookbook-6.jpg' }
];

async function renderLookbook() {
  const container = document.getElementById('lookbookContainer');
  if (!container) return;

  const lookSub = document.querySelector('#lookbook .section-subtitle');
  const lookTitle = document.querySelector('#lookbook .section-title');
  const lookDesc = document.querySelector('#lookbook .section-desc');
  if (lookSub) lookSub.textContent = getText('lookbook.subtitle');
  if (lookTitle) lookTitle.textContent = getText('lookbook.title');
  if (lookDesc) lookDesc.textContent = getText('lookbook.desc');

  let items = [];
  try {
    const db = firebase.firestore();
    const snap = await db.collection('lookbook').orderBy('position').get();
    snap.forEach(doc => {
      const d = doc.data();
      items.push({ id: doc.id, ...d });
    });
  } catch (e) {}

  // If no Firestore items, use defaults with translated titles
  if (items.length === 0) {
    const texts = getText('lookbook.items');
    items = LOOKBOOK_DEFAULTS.map((def, i) => ({
      position: i + 1,
      imageUrl: def.img,
      title: texts && texts[i] ? texts[i].title : def.title,
      subtitle: texts && texts[i] ? texts[i].sub : def.sub
    }));
  }

  if (items.length === 0) {
    container.innerHTML = '';
    return;
  }

  function makeOverlay(item) {
    if (item.position === 6) {
      return `
        <span>${item.title}</span>
        <div style="display:flex;align-items:center;gap:16px;margin-top:8px;justify-content:center">
          <span style="flex:1;height:1px;background:var(--gold);max-width:80px;opacity:0.4"></span>
          <small style="letter-spacing:4px;margin:0">${item.subtitle}</small>
          <span style="flex:1;height:1px;background:var(--gold);max-width:80px;opacity:0.4"></span>
        </div>`;
    }
    return `<span>${item.title}</span><small>${item.subtitle}</small>`;
  }

  container.innerHTML = items.map(item => `
    <div class="lookbook-item reveal lookbook-item-${item.position}">
      <div class="lookbook-inner" style="background:url('${item.imageUrl}') center/cover no-repeat">
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0.2)"></div>
        <div class="lookbook-overlay">
          ${makeOverlay(item)}
        </div>
      </div>
    </div>
  `).join('');

  observeReveal();
}

// Testimonial form submission
(function() {
  const form = document.getElementById('testimonialForm');
  const msgEl = document.getElementById('testimonialFormMsg');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('testimonialName').value.trim();
    const text = document.getElementById('testimonialText').value.trim();
    if (!name || !text) return;
    const btn = document.getElementById('testimonialSubmitBtn');
    btn.disabled = true;
    btn.textContent = getText('admin.misc.saving') || 'Saving...';
    try {
      const db = firebase.firestore();
      await db.collection('testimonials').add({
        name,
        text,
        createdAt: new Date().toISOString()
      });
      msgEl.textContent = getText('testimonials.successMsg');
      msgEl.className = 'testimonial-form-msg success';
      form.reset();
      renderTestimonials();
    } catch (err) {
      console.error('Testimonial submit error:', err);
      msgEl.textContent = getText('testimonials.errorMsg');
      msgEl.className = 'testimonial-form-msg error';
    }
    btn.disabled = false;
    btn.textContent = getText('testimonials.submitBtn');
    setTimeout(() => { msgEl.textContent = ''; msgEl.className = 'testimonial-form-msg'; }, 4000);
  });
})();

// ============================================================
// HERO SLIDESHOW
// ============================================================
function nextSlide() {
  heroSlides.forEach(s => s.classList.remove('active'));
  currentSlide = (currentSlide + 1) % heroSlides.length;
  heroSlides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 6000);

// ============================================================
// HERO PARTICLES
// ============================================================
function createParticles() {
  const container = document.getElementById('heroParticles');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-delay: ${Math.random() * 5}s;
      animation-duration: ${Math.random() * 4 + 3}s;
    `;
    container.appendChild(particle);
  }
}
createParticles();

// ============================================================
// SCROLL REVEAL ANIMATIONS
// ============================================================
function observeReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (!scrollRevealed.has(el)) {
          scrollRevealed.add(el);
          if (el.classList.contains('reveal-left')) {
            el.style.animation = 'slideInLeft 0.8s ease forwards';
          } else if (el.classList.contains('reveal-right')) {
            el.style.animation = 'slideInRight 0.8s ease forwards';
          } else {
            el.style.animation = 'fadeInUp 0.8s ease forwards';
          }
        }
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}
observeReveal();

// ============================================================
// STATS COUNTER ANIMATION
// ============================================================
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));

function animateCounter(el, target) {
  let current = 0;
  const increment = Math.max(1, Math.floor(target / 60));
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 25);
}

// ============================================================
// BACK TO TOP
// ============================================================
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// CONTACT FORM
// ============================================================
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cfName')?.value || '';
    const email = document.getElementById('cfEmail')?.value || '';
    const message = document.getElementById('cfMessage')?.value || '';
    const btn = contactForm.querySelector('.contact-submit');

    // Save to Firestore so admin sees it
    if (typeof db !== 'undefined' && db) {
      try {
        db.collection('inbox').add({ name, email, message, createdAt: new Date().toISOString() });
      } catch {}
    }

    btn.textContent = 'Sent ✓';
    btn.disabled = true;
    const msgEl = document.createElement('div');
    msgEl.style.cssText = 'text-align:center;margin-top:12px;font-size:0.8rem;color:var(--gold)';
    msgEl.textContent = 'Thank you! We will get back to you soon.';
    contactForm.appendChild(msgEl);
    setTimeout(() => {
      contactForm.reset();
      msgEl.remove();
      btn.textContent = 'Send Message';
      btn.disabled = false;
    }, 3000);
  });
}

// ============================================================
// NEWSLETTER
// ============================================================
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = newsletterForm.querySelector('.newsletter-btn');
  const input = newsletterForm.querySelector('.newsletter-input');
  const email = input.value.trim();
  if (!email) return;

  // Store the email
  const subscribers = JSON.parse(localStorage.getItem('qasr_subscribers') || '[]');
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    localStorage.setItem('qasr_subscribers', JSON.stringify(subscribers));
  }

  // Try Firebase if available
  if (typeof initFirebase === 'function') {
    initFirebase();
    if (typeof db !== 'undefined' && db) {
      try {
        db.collection('subscribers').add({
          email,
          subscribedAt: new Date().toISOString(),
          lang: currentLang || 'en'
        });
      } catch (err) {
        // Firestore saved already handled by localStorage fallback
      }
    }
  }

  btn.textContent = 'Subscribed ✓';
  setTimeout(() => {
    input.value = '';
    btn.textContent = 'Subscribe';
  }, 3000);
});

// ============================================================
// SUPPORT MODAL (Footer FAQ, Shipping, etc.)
// ============================================================
(function initSupportModal() {
  const supportModal = document.getElementById('supportModal');
  const supportClose = document.getElementById('supportModalClose');
  const supportTitle = document.getElementById('supportModalTitle');
  const supportBody = document.getElementById('supportModalBody');

  if (!supportModal) return;

  function openSupportModal(key) {
    const title = getText('support.' + key);
    const content = getText('support.' + key + 'Content');
    if (title && content && title !== 'support.' + key) {
      supportTitle.textContent = title;
      supportTitle.dataset.supportKey = key;
      supportBody.innerHTML = content;
      supportModal.classList.add('active');
      document.body.classList.add('no-scroll');
    }
  }

  function closeSupportModal() {
    supportModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  supportClose.addEventListener('click', closeSupportModal);
  supportModal.querySelector('.modal-backdrop').addEventListener('click', closeSupportModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && supportModal.classList.contains('active')) closeSupportModal();
  });

  // Wire up footer support links
  document.querySelectorAll('[data-support]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openSupportModal(link.dataset.support);
    });
  });
})();

// ============================================================
// PARALLAX EFFECT ON HERO
// ============================================================
window.addEventListener('scroll', () => {
  const heroContent = document.querySelector('.hero-content');
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
  }
});

// ============================================================
// CONSOLE BRANDING
// ============================================================
console.log('%c QASR ', 'background:#D4AF37;color:#000;font-size:24px;font-weight:bold;padding:10px 20px;font-family:Cinzel,serif;');
console.log('%c Wear Power. Rule Your World. ', 'color:#D4AF37;font-size:14px;font-family:Montserrat,sans-serif;');
