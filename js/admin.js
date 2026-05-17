// QASR — Admin Panel
// ============================================================

let authUser = null;

firebase.auth().onAuthStateChanged(user => {
  if (!user) { window.location.href = 'admin-login.html'; return; }
  authUser = user;
  loadDashboard();
  syncCategoriesFromFirestore();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  firebase.auth().signOut();
  window.location.href = 'admin-login.html';
});

// Tab navigation
const tabs = ['dashboard', 'products', 'orders', 'discounts', 'subscribers', 'categories', 'inbox', 'testimonials', 'lookbook'];
document.querySelectorAll('.admin-nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.admin-nav-item').forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    tabs.forEach(t => document.getElementById('tab-' + t).classList.remove('active'));
    const tab = item.dataset.tab;
    document.getElementById('tab-' + tab).classList.add('active');
    if (tab === 'products') loadProducts();
    if (tab === 'orders') loadOrders();
    if (tab === 'discounts') loadDiscountCodes();
    if (tab === 'subscribers') loadSubscribers();
    if (tab === 'categories') loadCategories();
    if (tab === 'inbox') loadInbox();
    if (tab === 'testimonials') loadAdminTestimonials();
    if (tab === 'lookbook') loadAdminLookbook();
  });
});

// Switch tab from inline onclick (e.g. dashboard recent orders)
function switchTab(name) {
  const item = document.querySelector(`.admin-nav-item[data-tab="${name}"]`);
  if (item) item.click();
}

// ============================================================
// THEME & LANGUAGE
// ============================================================

// Restore theme preference
const savedAdminTheme = localStorage.getItem('qasr_theme') || 'dark';
if (savedAdminTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  updateAdminThemeIcon(true, 'adminThemeIcon');
} else {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// Restore language preference
const savedAdminLang = localStorage.getItem('qasr_lang') || 'en';
currentLang = savedAdminLang;
document.documentElement.setAttribute('lang', savedAdminLang);
document.documentElement.setAttribute('dir', savedAdminLang === 'ar' ? 'rtl' : 'ltr');
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.classList.toggle('active', btn.dataset.lang === savedAdminLang);
});

// Theme toggle
const adminThemeToggle = document.getElementById('adminThemeToggle');
if (adminThemeToggle) {
  adminThemeToggle.addEventListener('click', function() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('qasr_theme', 'dark');
      updateAdminThemeIcon(false, 'adminThemeIcon');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('qasr_theme', 'light');
      updateAdminThemeIcon(true, 'adminThemeIcon');
    }
  });
}

// Language switching
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const lang = this.dataset.lang;
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('qasr_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    applyAdminTranslations();
    // Re-render the active tab's dynamic content so getText() calls re-evaluate
    const activeTab = document.querySelector('.admin-nav-item.active');
    if (activeTab) {
      const tab = activeTab.dataset.tab;
      if (tab === 'products') loadProducts();
      else if (tab === 'orders') loadOrders();
      else if (tab === 'discounts') loadDiscountCodes();
      else if (tab === 'subscribers') loadSubscribers();
      else if (tab === 'categories') loadCategories();
      else if (tab === 'inbox') loadInbox();
      else if (tab === 'testimonials') loadAdminTestimonials();
      else if (tab === 'lookbook') loadAdminLookbook();
      else if (tab === 'dashboard') loadDashboard();
    }
  });
});

function updateAdminThemeIcon(isLight, iconId) {
  const icon = document.getElementById(iconId);
  if (!icon) return;
  if (isLight) {
    icon.innerHTML = `
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    `;
  } else {
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    `;
  }
}

function applyAdminTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = getText(key);
    if (text && text !== key) {
      el.textContent = text;
    }
  });
  // Re-translate placeholder attributes for inputs
  document.querySelectorAll('input[placeholder]').forEach(el => {
    // Only translate if the placeholder matches a known pattern
    // The placeholders are left as-is since they are inline hints
  });
}

// Apply translations immediately after auth restore
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(applyAdminTranslations, 100);
});
// Also apply after a short delay for dynamically loaded content
setTimeout(applyAdminTranslations, 300);

// ============================================================
// DASHBOARD
// ============================================================
async function loadDashboard() {
  try {
    const db = firebase.firestore();
    const [productsSnap, ordersSnap, subsSnap, discountsSnap, testimonialsSnap, lookbookSnap, recentSnap] = await Promise.all([
      db.collection('products').get(),
      db.collection('orders').get(),
      db.collection('subscribers').get(),
      db.collection('discounts').get(),
      db.collection('testimonials').get(),
      db.collection('lookbook').get(),
      db.collection('orders').orderBy('createdAt', 'desc').limit(5).get()
    ]);
    const hardcodedCount = (typeof products !== 'undefined') ? products.length : 0;
    document.getElementById('statProducts').textContent = productsSnap.size + hardcodedCount;
    document.getElementById('statOrders').textContent = ordersSnap.size;
    document.getElementById('statSubscribers').textContent = subsSnap.size;
    document.getElementById('statDiscounts').textContent = discountsSnap.size;
    document.getElementById('statCategories').textContent = getAllCategories().length;
    document.getElementById('statTestimonials').textContent = testimonialsSnap.size;
    document.getElementById('statLookbook').textContent = lookbookSnap.size;

    const container = document.getElementById('recentOrders');
    if (recentSnap.empty) {
      container.innerHTML = `<div class="dash-recent-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
    <br>${getText('admin.empty.noOrdersYet')}
      </div>`;
      return;
    }
    let html = `<div class="dash-recent-header">
      <span>${getText('admin.dashRecent.order')}</span><span>${getText('admin.dashRecent.customer')}</span><span>${getText('admin.dashRecent.date')}</span><span>${getText('admin.dashRecent.status')}</span><span>${getText('admin.dashRecent.total')}</span>
    </div>`;
    recentSnap.forEach(doc => {
      const o = doc.data();
      const id = doc.id;
      const ts = o.createdAt ? o.createdAt.toDate() : new Date();
      const dateStr = ts.toLocaleDateString(currentLang === 'ar' ? 'ar-DZ' : 'en-US', { month: 'short', day: 'numeric' });
      const status = o.status || 'pending';
      const name = o.customer?.fullName || getText('admin.misc.unknown');
      const total = (o.pricing?.total || 0).toLocaleString(currentLang === 'ar' ? 'ar-DZ' : 'en-US');
      html += `<div class="dash-recent-row" onclick="switchTab('orders');showOrderDetail('${id}')">
        <span class="dro-date">#${id.slice(0, 6)}</span>
        <span class="dro-name">${name}</span>
        <span class="dro-date">${dateStr}</span>
        <span><span class="dro-status ${status}">${getText('admin.status.' + status)}</span></span>
        <span class="dro-total">${total} ${getText('admin.currency')}</span>
      </div>`;
    });
    container.innerHTML = html;
  } catch (err) {
    console.error('Dashboard load error:', err);
    document.getElementById('recentOrders').innerHTML = '<div class="dash-loading">' + getText('admin.empty.failedRecent') + '</div>';
  }
  applyAdminTranslations();
}

// ============================================================
// PRODUCTS
// ============================================================
let editingProductId = null;
let dbRef = null;

function getDb() {
  if (!dbRef) dbRef = firebase.firestore();
  return dbRef;
}

function uploadImage(file) {
  return new Promise((resolve, reject) => {
    const maxW = 800, maxH = 800;
    const img = new Image();
    img.onload = () => {
      let w = img.width, h = img.height;
      if (w > maxW) { h *= maxW / w; w = maxW; }
      if (h > maxH) { w *= maxH / h; h = maxH; }
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      resolve(c.toDataURL('image/jpeg', 0.7));
    };
    img.onerror = () => reject(new Error('Invalid image'));
    const reader = new FileReader();
    reader.onload = e => { img.src = e.target.result; };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

function createColorRow(cname, chex, cimg) {
  const row = document.createElement('div');
  row.className = 'color-row';
  row.innerHTML = `
    <input type="text" class="color-name" value="${cname}" placeholder="Name (e.g. Black)">
    <input type="text" class="color-hex" value="${chex}" placeholder="Hex (e.g. #000)">
    <input type="file" class="color-file" accept="image/*" style="display:none">
    <div style="display:flex;gap:6px;align-items:center">
      <button type="button" class="color-upload-btn" style="padding:6px 12px;background:var(--gold);color:#000;border:none;border-radius:4px;cursor:pointer;font-size:0.75rem;white-space:nowrap">Choose Image</button>
      <input type="text" class="color-img" value="${cimg}" placeholder="Image URL" style="flex:1;min-width:120px" readonly>
    </div>
    <button type="button" class="remove-color" onclick="this.closest('.color-row').remove()">&times;</button>`;

  const uploadBtn = row.querySelector('.color-upload-btn');
  const fileInput = row.querySelector('.color-file');
  const imgInput = row.querySelector('.color-img');

  uploadBtn.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];
    if (!file) return;
    uploadBtn.disabled = true;
    uploadBtn.textContent = 'Reading...';
    try {
      const url = await uploadImage(file);
      imgInput.value = url;
      uploadBtn.textContent = 'Ready ✓';
      uploadBtn.style.background = '#4CAF50';
    } catch (err) {
      uploadBtn.textContent = 'Failed';
      uploadBtn.style.background = '#f44336';
      setTimeout(() => { uploadBtn.textContent = 'Choose Image'; uploadBtn.style.background = 'var(--gold)'; uploadBtn.disabled = false; }, 2000);
    }
    fileInput.value = '';
  });

  return row;
}

let firestoreProducts = [];
let hardcodedProductsData = [];

async function loadProducts() {
  try {
    buildCategoryUI();
    firestoreProducts = [];
    hardcodedProductsData = [];
    const db = getDb();
    const snap = await db.collection('products').orderBy('createdAt', 'desc').get();
    snap.forEach(docSnap => {
      firestoreProducts.push({ id: docSnap.id, data: docSnap.data() });
    });
    if (typeof products !== 'undefined') {
      products.forEach((p, idx) => {
        hardcodedProductsData.push({ id: 'local_' + p.id, data: p, index: idx });
      });
    }
    filterProducts();
  } catch (err) {
    document.getElementById('productsTableBody').innerHTML = `<tr><td colspan="7" class="admin-empty">${getText('admin.empty.errorProducts')}</td></tr>`;
  }
  applyAdminTranslations();
}

function filterProducts() {
  const search = document.getElementById('productSearch').value.toLowerCase().trim();
  const category = document.getElementById('productCategoryFilter').value;
  const saleOnly = document.getElementById('productSaleFilter').checked;

  let filtered = [];

  // Firestore products
  firestoreProducts.forEach(({ id, data: p }) => {
    if (category && p.category !== category) return;
    if (saleOnly && !p.sale) return;
    if (search && !p.name.toLowerCase().includes(search)) return;
    filtered.push({ id, p, hardcoded: false });
  });

  // Hardcoded products
  hardcodedProductsData.forEach(({ id, data: p }) => {
    if (category && p.category !== category) return;
    if (saleOnly && !p.sale) return;
    if (search && !p.name.toLowerCase().includes(search)) return;
    filtered.push({ id, p, hardcoded: true });
  });

  renderProducts(filtered);
}

function renderProducts(list) {
  const tbody = document.getElementById('productsTableBody');
  const cur = getText('admin.currency');
  if (list.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="admin-empty">' + getText('admin.empty.noProducts') + '</td></tr>';
    return;
  }
  tbody.innerHTML = list.map(({ id, p, hardcoded }) => {
    const images = p.colors && p.colors[0] && p.colors[0].images ? p.colors[0].images : (p.images || []);
    const colorsHtml = p.colors ? p.colors.map(c => `<span style="background:${c.hex}"></span>`).join('') : '';
    const priceStr = p.sale
      ? `<span style="text-decoration:line-through;opacity:0.5">${p.price} ${cur}</span> ${Math.round(p.price * (1 - p.discountPercent / 100))} ${cur}`
      : `${p.price} ${cur}`;
    const nameHtml = hardcoded
      ? `<strong>${p.name} <span style="font-size:0.65rem;opacity:0.4;font-weight:400">${getText('admin.misc.hardcoded')}</span></strong>`
      : `<strong>${p.name}</strong>`;
    const saleHtml = p.sale
      ? `<span class="status-badge" style="background:rgba(212,175,55,0.15);color:var(--gold)">-${p.discountPercent}%</span>`
      : '-';
    return `<tr>
      <td><div class="small-img" style="background:url('${images[0] || ''}') center/cover no-repeat"></div></td>
      <td>${nameHtml}</td>
      <td>${p.category || '-'}</td>
      <td>${priceStr}</td>
      <td><div class="color-swatches">${colorsHtml}</div></td>
      <td>${saleHtml}</td>
      <td>
        <div class="actions">
          <button onclick="editProduct('${id}')">${getText('admin.actions.edit')}</button>
          <button class="danger" onclick="deleteProduct('${id}')">${getText('admin.actions.delete')}</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

document.getElementById('addProductBtn').addEventListener('click', async () => {
  buildCategoryUI();
  editingProductId = null;
  document.getElementById('productFormTitle').textContent = getText('admin.form.addProductTitle');
  document.getElementById('productForm').reset();
  const firstCat = document.querySelector('.cat-card');
  setCategory(firstCat ? firstCat.dataset.cat : 'hoodie');
  document.getElementById('pfDiscount').disabled = true;
  document.getElementById('discountField').classList.remove('enabled');
  const container = document.getElementById('colorsContainer');
  container.innerHTML = '';
  container.appendChild(createColorRow('Black', '#000', ''));
  document.getElementById('productFormWrap').classList.add('open');
});

document.getElementById('cancelProductForm').addEventListener('click', () => {
  document.getElementById('productFormWrap').classList.remove('open');
});

document.getElementById('saveProductBtn').addEventListener('click', async () => {
  const name = document.getElementById('pfName').value.trim();
  const category = document.getElementById('pfCategory').value;
  const price = parseInt(document.getElementById('pfPrice').value);
  const description = document.getElementById('pfDesc').value.trim();
  if (!name || !price) { alert(getText('admin.form.namePriceRequired')); return; }
  // collect checked sizes
  const sizeChk = document.querySelectorAll('#sizeCheckboxes input[type="checkbox"]:checked');
  let sizes = [];
  sizeChk.forEach(cb => {
    if (cb.value === '__custom__') {
      const customVal = document.getElementById('sizeCustomInput').value.trim();
      if (customVal) sizes.push(customVal);
    } else {
      sizes.push(cb.value);
    }
  });
  if (sizes.length === 0) sizes = ['M'];
  const colorRows = document.querySelectorAll('#colorsContainer .color-row');
  const colors = [];
  colorRows.forEach(row => {
    const cName = row.querySelector('.color-name').value.trim();
    const cHex = row.querySelector('.color-hex').value.trim();
    const cImg = row.querySelector('.color-img').value.trim();
    if (cName && cHex) {
      colors.push({ name: cName, hex: cHex, thumb: cImg || '', images: cImg ? [cImg] : [] });
    }
  });

  const sale = document.getElementById('pfSale').checked;
  const discountPercent = parseInt(document.getElementById('pfDiscount').value) || 0;
  const featured = document.getElementById('pfFeatured').checked;

  const productData = {
    name, category, price, description, sizes, sale, discountPercent, featured,
    colors, images: colors.length ? colors[0].images : [],
    priceEn: description, priceAr: description,
    updatedAt: new Date().toISOString()
  };

  try {
    const db = getDb();
    if (editingProductId) {
      await db.collection('products').doc(editingProductId).update(productData);
    } else {
      productData.createdAt = new Date().toISOString();
      await db.collection('products').add(productData);
    }
    document.getElementById('productFormWrap').classList.remove('open');
    loadProducts();
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
});

document.getElementById('addColorRow').addEventListener('click', () => {
  const container = document.getElementById('colorsContainer');
  container.appendChild(createColorRow('', '#000', ''));
});

document.getElementById('sizeCustomCheck').addEventListener('change', function() {
  const inp = document.getElementById('sizeCustomInput');
  inp.disabled = !this.checked;
  if (!this.checked) inp.value = '';
});
document.getElementById('sizeCustomInput').addEventListener('input', function() {
  if (this.value.trim()) document.getElementById('sizeCustomCheck').checked = true;
});
// Sale toggle enables/disables discount field
document.getElementById('pfSale').addEventListener('change', function() {
  const field = document.getElementById('discountField');
  const inp = document.getElementById('pfDiscount');
  if (this.checked) {
    field.classList.add('enabled');
    inp.disabled = false;
  } else {
    field.classList.remove('enabled');
    inp.disabled = true;
    inp.value = 0;
  }
});

// Category picker - use event delegation on the container
document.getElementById('categoryPicker').addEventListener('click', function(e) {
  const card = e.target.closest('.cat-card');
  if (!card) return;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  document.getElementById('pfCategory').value = card.dataset.cat;
});

function setCategory(cat) {
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
  const match = document.querySelector(`.cat-card[data-cat="${cat}"]`);
  if (match) {
    match.classList.add('active');
  }
  document.getElementById('pfCategory').value = cat;
}

window.editProduct = async function(id) {
  buildCategoryUI();
  if (id.startsWith('local_')) {
    const localId = parseInt(id.replace('local_', ''));
    const p = window.products.find(pr => pr.id === localId);
    if (!p) return;
    editingProductId = null;
    document.getElementById('productFormTitle').textContent = getText('admin.form.editHardcodedTitle');
    document.getElementById('pfName').value = p.name || '';
    setCategory(p.category || 'hoodie');
    document.getElementById('pfPrice').value = p.price || '';
    document.getElementById('pfDesc').value = p.description || '';
    // set size checkboxes
    const sizeChkBoxes = document.querySelectorAll('#sizeCheckboxes input[type="checkbox"]');
    sizeChkBoxes.forEach(cb => cb.checked = false);
    document.getElementById('sizeCustomInput').value = '';
    document.getElementById('sizeCustomInput').disabled = true;
    document.getElementById('sizeCustomCheck').checked = false;
    (p.sizes || ['M']).forEach(s => {
      const match = document.querySelector(`#sizeCheckboxes input[type="checkbox"][value="${s}"]`);
      if (match) { match.checked = true; } else {
        document.getElementById('sizeCustomCheck').checked = true;
        document.getElementById('sizeCustomInput').value = s;
        document.getElementById('sizeCustomInput').disabled = false;
      }
    });
    document.getElementById('pfSale').checked = p.sale || false;
    document.getElementById('pfDiscount').value = p.discountPercent || 0;
    document.getElementById('pfDiscount').disabled = !p.sale;
    if (p.sale) document.getElementById('discountField').classList.add('enabled');
    else document.getElementById('discountField').classList.remove('enabled');
    document.getElementById('pfFeatured').checked = p.featured || false;
    const container = document.getElementById('colorsContainer');
    container.innerHTML = '';
    (p.colors || [{ name: 'Black', hex: '#000', thumb: '', images: [] }]).forEach(c => {
      container.appendChild(createColorRow(c.name || '', c.hex || '#000', (c.images && c.images[0]) || ''));
    });
    document.getElementById('productFormWrap').classList.add('open');
    return;
  }
  try {
    const db = getDb();
    const docSnap = await db.collection('products').doc(id).get();
    if (!docSnap.exists) return;
    const p = docSnap.data();
    editingProductId = id;
    document.getElementById('productFormTitle').textContent = getText('admin.form.editProductTitle');
    document.getElementById('pfName').value = p.name || '';
    setCategory(p.category || 'hoodie');
    document.getElementById('pfPrice').value = p.price || '';
    document.getElementById('pfDesc').value = p.description || '';
    // set size checkboxes
    const sizeChkBoxes2 = document.querySelectorAll('#sizeCheckboxes input[type="checkbox"]');
    sizeChkBoxes2.forEach(cb => cb.checked = false);
    document.getElementById('sizeCustomInput').value = '';
    document.getElementById('sizeCustomInput').disabled = true;
    document.getElementById('sizeCustomCheck').checked = false;
    (p.sizes || ['M']).forEach(s => {
      const match = document.querySelector(`#sizeCheckboxes input[type="checkbox"][value="${s}"]`);
      if (match) { match.checked = true; } else {
        document.getElementById('sizeCustomCheck').checked = true;
        document.getElementById('sizeCustomInput').value = s;
        document.getElementById('sizeCustomInput').disabled = false;
      }
    });
    document.getElementById('pfSale').checked = p.sale || false;
    document.getElementById('pfDiscount').value = p.discountPercent || 0;
    document.getElementById('pfDiscount').disabled = !p.sale;
    if (p.sale) document.getElementById('discountField').classList.add('enabled');
    else document.getElementById('discountField').classList.remove('enabled');
    document.getElementById('pfFeatured').checked = p.featured || false;

    const container = document.getElementById('colorsContainer');
    container.innerHTML = '';
    (p.colors || [{ name: 'Black', hex: '#000', thumb: '', images: [] }]).forEach(c => {
      const imgUrl = c.images && c.images[0] ? c.images[0] : '';
      container.appendChild(createColorRow(c.name || '', c.hex || '#000', imgUrl));
    });
    document.getElementById('productFormWrap').classList.add('open');
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
};

window.deleteProduct = async function(id) {
  if (id.startsWith('local_')) {
    if (!confirm(getText('admin.confirm.deleteProductJs'))) return;
    loadProducts();
    return;
  }
  if (!confirm(getText('admin.confirm.deleteProductFs'))) return;
  try {
    const db = getDb();
    await db.collection('products').doc(id).delete();
    loadProducts();
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
};

// ============================================================
// ORDERS
// ============================================================
let allOrders = [];
let ordersFilter = 'all';
let firestoreProductMap = {};

// Build lookup map of Firestore products for order image fallback
async function buildFirestoreProductMap() {
  try {
    const db = getDb();
    const snap = await db.collection('products').get();
    firestoreProductMap = {};
    snap.forEach(doc => {
      const p = doc.data();
      if (p.name && p.colors && p.colors[0] && p.colors[0].images && p.colors[0].images[0]) {
        firestoreProductMap[p.name] = p.colors[0].images[0];
      }
    });
  } catch (e) {}
}

function getItemImage(item) {
  if (item.image) return item.image;
  if (typeof products !== 'undefined' && item.name) {
    const match = products.find(p => p.name === item.name);
    if (match && match.colors && match.colors[0] && match.colors[0].images && match.colors[0].images[0]) {
      return match.colors[0].images[0];
    }
  }
  if (item.name && firestoreProductMap[item.name]) {
    return firestoreProductMap[item.name];
  }
  return '';
}

function renderOrderCards(orders) {
  const container = document.getElementById('ordersContainer');
  const cur = getText('admin.currency');
  if (!orders.length) {
    container.innerHTML = `<div class="admin-empty" style="grid-column:1/-1;padding:40px;text-align:center;color:var(--text-muted)">${getText('admin.empty.noOrders')}</div>`;
    return;
  }
  container.innerHTML = orders.map(docSnap => {
    const o = docSnap.data();
    const id = docSnap.id;
    const customer = o.customer || {};
    const address = customer.address || {};
    const pricing = o.pricing || {};
    const items = o.items || [];
    const status = o.status || 'pending';
    const locale = currentLang === 'ar' ? 'ar-DZ' : 'en-US';
    const date = o.createdAt ? (o.createdAt.toDate ? o.createdAt.toDate().toLocaleDateString(locale) : new Date(o.createdAt).toLocaleDateString(locale)) : '-';
    const time = o.createdAt ? (o.createdAt.toDate ? o.createdAt.toDate().toLocaleTimeString(locale, {hour:'2-digit',minute:'2-digit'}) : '') : '';
    const initial = (customer.fullName || '?').charAt(0).toUpperCase();
    const deliveryLabel = customer.deliveryType === 'home' ? getText('admin.orderDetail.home') : getText('admin.orderDetail.office');
    const wilaya = address.wilaya ? address.wilaya.name || '' : '';

    let thumbsHtml = items.slice(0, 3).map(item => {
      const img = getItemImage(item);
      return `<div class="order-card-thumb" style="background-color:${item.colorHex || '#000'};background-image:url('${img}')"></div>`;
    }).join('');
    if (items.length > 3) {
      thumbsHtml += `<div class="order-card-thumb more">+${items.length - 3}</div>`;
    }

    return `
      <div class="order-card" data-status="${status}">
        <div class="order-card-avatar ${status}">${initial}</div>
        <div class="order-card-main">
          <h3>${customer.fullName || getText('admin.misc.unknown')} <span class="order-status-label ${status}">${getText('admin.status.' + status)}</span></h3>
          <div class="order-card-meta">
            <span>📅 ${date} ${time}</span>
            <span class="order-phone">📞 ${customer.phone || '-'}</span>
            <span>${deliveryLabel}${wilaya ? ' · ' + wilaya : ''}</span>
          </div>
          ${thumbsHtml ? `<div class="order-card-thumbs">${thumbsHtml}</div>` : ''}
        </div>
        <div class="order-card-right">
          <div class="order-card-total">${pricing.total ? pricing.total.toLocaleString(locale) + ' ' + cur : '-'}</div>
          <div><span class="status-badge ${status}">${getText('admin.status.' + status)}</span></div>
          <div class="order-card-actions">
            <button onclick="showOrderDetail('${id}')">${getText('admin.actions.view')}</button>
            <button onclick="cycleOrderStatus('${id}')">${getText('admin.actions.status')}</button>
            <button onclick="printLabel('${id}')">${getText('admin.actions.label')}</button>
            <button class="danger" onclick="deleteOrder('${id}')">${getText('admin.actions.delete')}</button>
          </div>
        </div>
      </div>`;
  }).join('');
  applyAdminTranslations();
}

async function loadOrders() {
  const container = document.getElementById('ordersContainer');
  container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">' + getText('admin.empty.loadingOrders') + '</div>';
  try {
    const db = getDb();
    await buildFirestoreProductMap();
    const snap = await db.collection('orders').orderBy('createdAt', 'desc').get();
    allOrders = [];
    snap.forEach(doc => allOrders.push(doc));
    applyOrdersFilter();
  } catch (err) {
    container.innerHTML = '<div class="admin-empty" style="padding:40px;text-align:center;color:var(--text-muted)">Error loading orders</div>';
  }
  applyAdminTranslations();
}

function applyOrdersFilter() {
  const filtered = ordersFilter === 'all'
    ? allOrders
    : allOrders.filter(doc => doc.data().status === ordersFilter);
  renderOrderCards(filtered);
  document.querySelectorAll('.order-filter').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === ordersFilter);
  });
}

// Wire filter buttons
document.querySelectorAll('.order-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    ordersFilter = btn.dataset.status;
    applyOrdersFilter();
  });
});

function showOrderDetail(id) {
  const db = getDb();
  const cur = getText('admin.currency');
  const locale = currentLang === 'ar' ? 'ar-DZ' : 'en-US';
  db.collection('orders').doc(id).get().then(docSnap => {
    if (!docSnap.exists) return;
    const o = docSnap.data();
    const customer = o.customer || {};
    const address = customer.address || {};
    const pricing = o.pricing || {};
    const items = o.items || [];
    const status = o.status || 'pending';
    const date = o.createdAt ? (o.createdAt.toDate ? o.createdAt.toDate().toLocaleString(locale) : new Date(o.createdAt).toLocaleString(locale)) : '-';
    const wilaya = address.wilaya ? `${address.wilaya.name} (${address.wilaya.id})` : '-';
    const deliveryLabel = customer.deliveryType === 'home' ? getText('admin.orderDetail.home') : getText('admin.orderDetail.office');

    let itemsHtml = items.map(item => {
      const img = getItemImage(item);
      return `
      <div class="order-item-row">
        <div class="order-item-color" style="background-color:${item.colorHex || '#000'};background-image:url('${img}')"></div>
        <div class="order-item-info">
          <strong>${item.name}</strong>
          <span>${item.color || ''} / ${item.size || ''}</span>
        </div>
        <div class="order-item-price">${item.price.toLocaleString(locale)} ${cur} × ${item.qty}</div>
      </div>
    `}).join('');

    document.getElementById('orderDetailTitle').textContent = `Order — ${customer.fullName || getText('admin.misc.unknown')}`;
    document.getElementById('orderDetailBody').innerHTML = `
      <div class="order-detail-section">
        <h4>${getText('admin.orderDetail.status')}</h4>
        <p><span class="status-badge ${status}" style="font-size:0.9rem">${getText('admin.status.' + status)}</span></p>
      </div>
      <div class="order-detail-section">
        <h4>${getText('admin.orderDetail.customer')}</h4>
        <p><strong>${customer.fullName || '-'}</strong></p>
        <p>📞 ${customer.phone || '-'}</p>
        ${customer.notes ? `<p>📝 ${customer.notes}</p>` : ''}
      </div>
      <div class="order-detail-section">
        <h4>${getText('admin.orderDetail.delivery')}</h4>
        <p>${deliveryLabel}</p>
        <p>📍 ${address.fullAddress || '-'}, ${address.municipality || '-'}, ${wilaya}</p>
      </div>
      <div class="order-detail-section">
        <h4>${getText('admin.orderDetail.items')} (${items.length})</h4>
        <div class="order-items-list">${itemsHtml}</div>
      </div>
      <div class="order-detail-section">
        <h4>${getText('admin.orderDetail.pricing')}</h4>
        <table class="order-pricing-table">
          <tr><td>${getText('admin.orderDetail.subtotal')}</td><td>${(pricing.subtotal || 0).toLocaleString(locale)} ${cur}</td></tr>
          ${pricing.discount ? `<tr><td>${getText('admin.orderDetail.discount')}${pricing.discountCode ? ' (' + pricing.discountCode + ')' : ''}</td><td style="color:#4CAF50">-${(pricing.discount || 0).toLocaleString(locale)} ${cur}</td></tr>` : ''}
          <tr><td>${getText('admin.orderDetail.deliveryFee')}</td><td>${(pricing.deliveryFee || 0).toLocaleString(locale)} ${cur}</td></tr>
          <tr class="total-row"><td>${getText('admin.orderDetail.total')}</td><td><strong>${(pricing.total || 0).toLocaleString(locale)} ${cur}</strong></td></tr>
        </table>
      </div>
      <div class="order-detail-section">
        <h4>${getText('admin.orderDetail.payment')}</h4>
        <p>${o.paymentMethod || getText('admin.misc.cashOnDelivery')}</p>
        <p class="label">${getText('admin.orderDetail.placed')} ${date}</p>
      </div>
      <div style="display:flex;gap:10px;margin-top:16px;padding-top:16px;border-top:1px solid var(--border)">
        <button class="btn-save" onclick="cycleOrderStatus('${id}')">${getText('admin.actions.cycleStatus')}</button>
        <button class="btn-save" onclick="printLabel('${id}')" style="background:transparent;border:1px solid var(--gold);color:var(--gold)">${getText('admin.actions.label')}</button>
        <button class="btn-cancel danger" onclick="deleteOrder('${id}')">${getText('admin.actions.deleteOrder')}</button>
      </div>
    `;
    document.getElementById('orderDetailModal').classList.add('active');
  });
}

window.cycleOrderStatus = async function(id) {
  const statuses = ['pending', 'processing', 'completed', 'cancelled'];
  try {
    const db = getDb();
    const docSnap = await db.collection('orders').doc(id).get();
    if (!docSnap.exists) return;
    const current = docSnap.data().status || 'pending';
    const nextIdx = (statuses.indexOf(current) + 1) % statuses.length;
    await db.collection('orders').doc(id).update({ status: statuses[nextIdx] });
    loadOrders();
    if (document.getElementById('orderDetailModal').classList.contains('active')) {
      showOrderDetail(id);
    }
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
}

window.deleteOrder = async function(id) {
  if (!confirm(getText('admin.confirm.deleteOrder'))) return;
  try {
    const db = getDb();
    await db.collection('orders').doc(id).delete();
    loadOrders();
    document.getElementById('orderDetailModal').classList.remove('active');
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
};

window.printLabel = async function(id) {
  try {
    const db = getDb();
    const docSnap = await db.collection('orders').doc(id).get();
    if (!docSnap.exists) return;
    const o = docSnap.data();
    const customer = o.customer || {};
    const address = customer.address || {};
    const pricing = o.pricing || {};
    const items = o.items || [];
    const wilaya = address.wilaya ? `${address.wilaya.name} (${address.wilaya.id})` : '-';

    // Auto-advance status from pending to processing
    const currentStatus = o.status || 'pending';
    if (currentStatus === 'pending') {
      await db.collection('orders').doc(id).update({ status: 'processing' });
    }

    let itemsStr = items.map(item => `${item.name} x${item.qty}`).join(', ');
    const curLabel = getText('admin.currency');
    const locale = currentLang === 'ar' ? 'ar-DZ' : 'en-US';

    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Label #${id}</title>
        <style>
          @page { margin: 0; size: 210mm 297mm; }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #1a1a1a; background: #fff; width: 210mm; height: 297mm; display: flex; align-items: center; justify-content: center; }
          .label {
            width: 190mm; height: 100mm; border: 2px solid #222;
            display: flex; flex-direction: column; overflow: hidden;
            background: #fff;
          }
          .label-top {
            background: #1a1a1a; color: #fff;
            padding: 6mm 12mm; display: flex; justify-content: space-between; align-items: center;
          }
          .brand { font-size: 20px; font-weight: 800; letter-spacing: 5px; text-transform: uppercase; }
          .brand-sub { font-size: 8px; letter-spacing: 2px; color: #D4AF37; text-transform: uppercase; margin-top: 1px; }
          .order-id { text-align: right; }
          .order-id .num { font-size: 14px; font-weight: 700; letter-spacing: 1px; color: #D4AF37; }
          .order-id .lbl { font-size: 7px; letter-spacing: 2px; color: #888; text-transform: uppercase; display: block; }
          .label-body { flex: 1; display: flex; padding: 0; }
          .label-body .col { flex: 1; padding: 7mm 10mm; display: flex; flex-direction: column; justify-content: center; }
          .label-body .col-right {
            width: 55mm; flex: none; background: #f8f6f0;
            padding: 7mm 10mm; display: flex; flex-direction: column; justify-content: center; align-items: flex-end;
          }
          .section-label { font-size: 7px; text-transform: uppercase; letter-spacing: 2px; color: #D4AF37; font-weight: 700; margin-bottom: 2mm; }
          .customer-name { font-size: 20px; font-weight: 800; margin: 1mm 0; letter-spacing: -0.3px; line-height: 1.2; }
          .customer-phone { font-size: 18px; font-weight: 700; margin: 1mm 0; letter-spacing: 0.5px; }
          .delivery-addr { font-size: 11px; margin: 2mm 0 1mm; line-height: 1.5; color: #444; }
          .items-summary { font-size: 10px; color: #888; margin-top: 1mm; }
          .total-block { text-align: right; }
          .total-block .lbl { font-size: 7px; text-transform: uppercase; letter-spacing: 2px; color: #D4AF37; font-weight: 700; display: block; margin-bottom: 1mm; }
          .total-block .val { font-size: 24px; font-weight: 900; letter-spacing: 0.5px; color: #1a1a1a; line-height: 1; }
          .total-block .val .currency { font-size: 14px; font-weight: 600; color: #888; margin-left: 2px; }
          .label-footer {
            border-top: 1px solid #e0ddd5; padding: 3mm 12mm;
            display: flex; justify-content: space-between; align-items: center;
            font-size: 8px; color: #999; text-transform: uppercase; letter-spacing: 1px;
          }
            @media print { body { width: auto; height: auto; } }
        </style>
      </head>
      <body>
        <div class="label">
          <div class="label-top">
            <div>
              <div class="brand">QASR</div>
              <div class="brand-sub">Luxury Streetwear</div>
            </div>
            <div class="order-id">
              <span class="lbl">Order</span>
              <span class="num">#${id}</span>
            </div>
          </div>
          <div class="label-body">
            <div class="col">
              <div class="section-label">Deliver To</div>
              <div class="customer-name">${customer.fullName || '-'}</div>
              <div class="customer-phone">${customer.phone || '-'}</div>
              <div class="delivery-addr">
                ${address.fullAddress || '-'}<br>
                ${address.municipality || '-'}, ${wilaya}
              </div>
              <div class="items-summary">${itemsStr || '-'}</div>
            </div>
            <div class="col-right">
              <div class="total-block">
                <span class="lbl">Total</span>
                <div class="val">${(pricing.total || 0).toLocaleString(locale)}<span class="currency"> ${curLabel}</span></div>
              </div>
            </div>
          </div>
          <div class="label-footer">
            <span>${customer.deliveryType === 'home' ? 'Home Delivery' : 'Office Pickup'}</span>
            <span>QASR — Premium Streetwear</span>
          </div>
        </div>
        <script>window.onload = function() { window.print(); window.close(); };</script>
      </body>
      </html>
    `);
    win.document.close();
    loadOrders();

    if (document.getElementById('orderDetailModal').classList.contains('active')) {
      showOrderDetail(id);
    }
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
};

// ============================================================
// DISCOUNT CODES
// ============================================================
let editingDiscountId = null;

async function loadDiscountCodes() {
  const tbody = document.getElementById('discountsTableBody');
  tbody.innerHTML = '';
  try {
    const db = getDb();
    const snap = await db.collection('discounts').orderBy('createdAt', 'desc').get();
    if (snap.empty) {
      tbody.innerHTML = '<tr><td colspan="4" class="admin-empty">' + getText('admin.empty.noDiscounts') + '</td></tr>';
      return;
    }
    snap.forEach(docSnap => {
      const d = docSnap.data();
      tbody.innerHTML += `
        <tr>
          <td><strong style="color:var(--gold)">${d.code || '-'}</strong></td>
          <td>${d.percent}%</td>
          <td>${d.active !== false ? '<span style="color:#4CAF50">' + getText('admin.misc.active') + '</span>' : '<span style="color:#f44336">' + getText('admin.misc.inactive') + '</span>'}</td>
          <td>
            <div class="actions">
              <button onclick="editDiscount('${docSnap.id}')">${getText('admin.actions.edit')}</button>
              <button class="danger" onclick="deleteDiscount('${docSnap.id}')">${getText('admin.actions.delete')}</button>
            </div>
          </td>
      </tr>`;
    });

    // Also rebuild the product form picker + filter dropdown
    buildCategoryUI();
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4" class="admin-empty">Error loading discounts</td></tr>`;
  }
  applyAdminTranslations();
}

document.getElementById('addDiscountBtn').addEventListener('click', () => {
  editingDiscountId = null;
  document.getElementById('discountFormTitle').textContent = getText('admin.form.addDiscountTitle');
  document.getElementById('discountForm').reset();
  document.getElementById('discountFormWrap').classList.add('open');
});

document.getElementById('cancelDiscountForm').addEventListener('click', () => {
  document.getElementById('discountFormWrap').classList.remove('open');
});

document.getElementById('saveDiscountBtn').addEventListener('click', async () => {
  const code = document.getElementById('dfCode').value.trim().toUpperCase();
  const percent = parseInt(document.getElementById('dfPercent').value);
  if (!code || !percent) { alert(getText('admin.form.codePercentRequired')); return; }

  const data = { code, percent, active: true, updatedAt: new Date().toISOString() };
  try {
    const db = getDb();
    if (editingDiscountId) {
      await db.collection('discounts').doc(editingDiscountId).update(data);
    } else {
      data.createdAt = new Date().toISOString();
      await db.collection('discounts').add(data);
    }
    document.getElementById('discountFormWrap').classList.remove('open');
    loadDiscountCodes();
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
});

window.editDiscount = async function(id) {
  try {
    const db = getDb();
    const docSnap = await db.collection('discounts').doc(id).get();
    if (!docSnap.exists) return;
    const d = docSnap.data();
    editingDiscountId = id;
    document.getElementById('discountFormTitle').textContent = getText('admin.form.editDiscountTitle');
    document.getElementById('dfCode').value = d.code || '';
    document.getElementById('dfPercent').value = d.percent || '';
    document.getElementById('discountFormWrap').classList.add('open');
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
};

window.deleteDiscount = async function(id) {
  if (!confirm(getText('admin.confirm.deleteDiscount'))) return;
  try {
    const db = getDb();
    await db.collection('discounts').doc(id).delete();
    loadDiscountCodes();
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
};

// ============================================================
// SUBSCRIBERS
// ============================================================
async function loadSubscribers() {
  const tbody = document.getElementById('subscribersTableBody');
  tbody.innerHTML = '';
  try {
    const db = getDb();
    const snap = await db.collection('subscribers').orderBy('subscribedAt', 'desc').get();
    if (snap.empty) {
      tbody.innerHTML = '<tr><td colspan="4" class="admin-empty">No subscribers yet.</td></tr>';
      return;
    }
    snap.forEach(docSnap => {
      const s = docSnap.data();
      const date = s.subscribedAt ? new Date(s.subscribedAt).toLocaleDateString(currentLang === 'ar' ? 'ar-DZ' : 'en-US') : '-';
      tbody.innerHTML += `<tr>
        <td>${s.email || '-'}</td>
        <td>${date}</td>
        <td>${s.lang || 'en'}</td>
        <td><div class="actions"><button class="danger" onclick="deleteSubscriber('${docSnap.id}')">${getText('admin.actions.delete')}</button></div></td>
      </tr>`;
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4" class="admin-empty">${getText('admin.empty.errorSubscribers')}</td></tr>`;
  }
  applyAdminTranslations();
}

window.deleteSubscriber = async function(id) {
  if (!confirm(getText('admin.confirm.deleteSubscriber'))) return;
  try {
    const db = getDb();
    await db.collection('subscribers').doc(id).delete();
    loadSubscribers();
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
};

document.getElementById('deleteAllSubscribersBtn').addEventListener('click', async () => {
  if (!confirm(getText('admin.confirm.deleteAllSubscribers'))) return;
  try {
    const db = getDb();
    const snap = await db.collection('subscribers').get();
    const batch = db.batch();
    snap.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    loadSubscribers();
  } catch (err) {
    alert(getText('admin.misc.errorAllSubscribers') + ' ' + err.message);
  }
});

// ============================================================
// INBOX
// ============================================================
async function loadInbox() {
  const tbody = document.getElementById('inboxTableBody');
  tbody.innerHTML = '';
  try {
    const db = getDb();
    const snap = await db.collection('inbox').orderBy('createdAt', 'desc').get();
    if (snap.empty) {
      tbody.innerHTML = '<tr><td colspan="5" class="admin-empty">' + getText('admin.empty.noMessages') + '</td></tr>';
      return;
    }
    snap.forEach(docSnap => {
      const m = docSnap.data();
      const date = m.createdAt ? new Date(m.createdAt).toLocaleString(currentLang === 'ar' ? 'ar-DZ' : 'en-US') : '-';
      const msg = m.message || '';
      const truncated = msg.length > 80 ? msg.slice(0, 80) + '...' : msg;
      tbody.innerHTML += `<tr>
        <td><strong>${m.name || '-'}</strong></td>
        <td><a href="mailto:${m.email || ''}" style="color:var(--gold)">${m.email || '-'}</a></td>
        <td style="max-width:300px;white-space:normal;color:var(--text-muted);font-size:0.78rem">${truncated}</td>
        <td style="font-size:0.75rem;color:var(--text-muted)">${date}</td>
        <td><div class="actions"><button class="danger" onclick="deleteInboxMessage('${docSnap.id}')">${getText('admin.actions.delete')}</button></div></td>
      </tr>`;
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="5" class="admin-empty">${getText('admin.empty.errorMessages')}</td></tr>`;
  }
  applyAdminTranslations();
}

window.deleteInboxMessage = async function(id) {
  if (!confirm(getText('admin.confirm.deleteMessage'))) return;
  try {
    const db = getDb();
    await db.collection('inbox').doc(id).delete();
    loadInbox();
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
};

document.getElementById('deleteAllInboxBtn').addEventListener('click', async () => {
  if (!confirm(getText('admin.confirm.deleteAllMessages'))) return;
  try {
    const db = getDb();
    const snap = await db.collection('inbox').get();
    const batch = db.batch();
    snap.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    loadInbox();
  } catch (err) {
    alert(getText('admin.misc.errorAllMessages') + ' ' + err.message);
  }
});

// ============================================================
// ADMIN TESTIMONIALS
// ============================================================
async function loadAdminTestimonials() {
  const tbody = document.getElementById('testimonialsTableBody');
  tbody.innerHTML = '';
  try {
    const db = getDb();
    const snap = await db.collection('testimonials').orderBy('createdAt', 'desc').get();
    if (snap.empty) {
      tbody.innerHTML = '<tr><td colspan="4" class="admin-empty">' + getText('admin.empty.noTestimonials') + '</td></tr>';
      return;
    }
    const locale = currentLang === 'ar' ? 'ar-DZ' : 'en-US';
    snap.forEach(docSnap => {
      const t = docSnap.data();
      const date = t.createdAt ? new Date(t.createdAt).toLocaleDateString(locale) : '-';
      const text = t.text || '';
      const truncated = text.length > 100 ? text.slice(0, 100) + '...' : text;
      tbody.innerHTML += `<tr>
        <td><strong>${t.name || '-'}</strong></td>
        <td style="max-width:300px;white-space:normal;color:var(--text-muted);font-size:0.78rem">${truncated}</td>
        <td style="font-size:0.75rem;color:var(--text-muted)">${date}</td>
        <td><div class="actions"><button class="danger" onclick="deleteAdminTestimonial('${docSnap.id}')">${getText('admin.actions.delete')}</button></div></td>
      </tr>`;
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4" class="admin-empty">${getText('admin.empty.errorTestimonials')}</td></tr>`;
  }
  applyAdminTranslations();
}

window.deleteAdminTestimonial = async function(id) {
  if (!confirm(getText('admin.confirm.deleteTestimonial'))) return;
  try {
    const db = getDb();
    await db.collection('testimonials').doc(id).delete();
    loadAdminTestimonials();
    // Also refresh dashboard if visible
    const activeTab = document.querySelector('.admin-nav-item.active');
    if (activeTab && activeTab.dataset.tab === 'dashboard') loadDashboard();
  } catch (err) {
    alert(getText('admin.misc.error') + ' ' + err.message);
  }
};

document.getElementById('deleteAllTestimonialsBtn').addEventListener('click', async () => {
  if (!confirm(getText('admin.confirm.deleteAllTestimonials'))) return;
  try {
    const db = getDb();
    const snap = await db.collection('testimonials').get();
    const batch = db.batch();
    snap.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    loadAdminTestimonials();
    const activeTab = document.querySelector('.admin-nav-item.active');
    if (activeTab && activeTab.dataset.tab === 'dashboard') loadDashboard();
  } catch (err) {
    alert(getText('admin.misc.errorAllTestimonials') + ' ' + err.message);
  }
});

// ============================================================
// LOOKBOOK
// ============================================================
const LOOKBOOK_POSITIONS = 6;
let editingLookbookId = null;

async function loadAdminLookbook() {
  const tbody = document.getElementById('lookbookTableBody');
  tbody.innerHTML = '';
  try {
    const db = getDb();
    const snap = await db.collection('lookbook').orderBy('position').get();
    if (snap.empty) {
      tbody.innerHTML = '<tr><td colspan="4" class="admin-empty">' + getText('admin.empty.noLookbook') + '</td></tr>';
      return;
    }
    snap.forEach(docSnap => {
      const d = docSnap.data();
      tbody.innerHTML += `<tr>
        <td><div style="width:60px;height:60px;border-radius:4px;overflow:hidden;background:var(--bg-card)"><img src="${d.imageUrl || ''}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'" /></div></td>
        <td><strong>${d.title || ''}</strong></td>
        <td style="color:var(--text-muted);font-size:0.78rem">${d.subtitle || ''}</td>
        <td><div class="actions"><button onclick="editAdminLookbook('${docSnap.id}')" style="background:var(--gold);color:#000;border:none;padding:4px 10px;border-radius:4px;cursor:pointer;font-size:0.7rem;margin-right:4px">${getText('admin.actions.edit')}</button><button class="danger" onclick="deleteAdminLookbook('${docSnap.id}')">${getText('admin.actions.delete')}</button></div></td>
      </tr>`;
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4" class="admin-empty">${getText('admin.empty.errorLookbook')}</td></tr>`;
  }
  applyAdminTranslations();
}

// File upload handler for lookbook image
document.getElementById('lookbookImageFile').addEventListener('change', async function() {
  const file = this.files[0];
  if (!file) return;
  try {
    const url = await uploadImage(file);
    document.getElementById('lookbookImageUrl').value = url;
    const preview = document.getElementById('lookbookImagePreview');
    preview.style.display = 'block';
    preview.querySelector('img').src = url;
  } catch (err) {
    alert('Error uploading image: ' + err.message);
  }
});

// Populate the image preview when a URL is typed manually
document.getElementById('lookbookImageUrl').addEventListener('input', function() {
  const val = this.value.trim();
  const preview = document.getElementById('lookbookImagePreview');
  if (val) {
    preview.style.display = 'block';
    preview.querySelector('img').src = val;
  } else {
    preview.style.display = 'none';
  }
});

function resetLookbookForm() {
  editingLookbookId = null;
  document.getElementById('lookbookImageFile').value = '';
  document.getElementById('lookbookImageUrl').value = '';
  document.getElementById('lookbookTitle').value = '';
  document.getElementById('lookbookSubtitle').value = '';
  document.getElementById('lookbookImagePreview').style.display = 'none';
  document.getElementById('saveLookbookBtn').textContent = getText('admin.lookbook.save');
}

window.editAdminLookbook = function(id) {
  const db = getDb();
  db.collection('lookbook').doc(id).get().then(doc => {
    if (!doc.exists) return;
    const d = doc.data();
    editingLookbookId = id;
    document.getElementById('lookbookImageUrl').value = d.imageUrl || '';
    document.getElementById('lookbookTitle').value = d.title || '';
    document.getElementById('lookbookSubtitle').value = d.subtitle || '';
    const preview = document.getElementById('lookbookImagePreview');
    if (d.imageUrl) {
      preview.style.display = 'block';
      preview.querySelector('img').src = d.imageUrl;
    } else {
      preview.style.display = 'none';
    }
    document.getElementById('saveLookbookBtn').textContent = getText('admin.actions.save');
  });
};

document.getElementById('saveLookbookBtn').addEventListener('click', async function() {
  let imgUrl = document.getElementById('lookbookImageUrl').value.trim();
  const title = document.getElementById('lookbookTitle').value.trim();
  const subtitle = document.getElementById('lookbookSubtitle').value.trim();
  if (!imgUrl) { alert('Please upload an image or paste a URL'); return; }
  try {
    const db = getDb();
    if (editingLookbookId) {
      // Update existing
      const data = { imageUrl: imgUrl, title, subtitle };
      // Only update position if it wasn't set (shouldn't happen, but safe)
      await db.collection('lookbook').doc(editingLookbookId).update(data);
    } else {
      // Add new
      const snap = await db.collection('lookbook').orderBy('position').get();
      const nextPos = snap.empty ? 1 : Math.min(snap.size + 1, LOOKBOOK_POSITIONS);
      if (nextPos > LOOKBOOK_POSITIONS) { alert('Maximum ' + LOOKBOOK_POSITIONS + ' lookbook items allowed.'); return; }
      await db.collection('lookbook').add({
        imageUrl: imgUrl,
        title,
        subtitle,
        position: nextPos,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
    resetLookbookForm();
    loadAdminLookbook();
    const activeTab = document.querySelector('.admin-nav-item.active');
    if (activeTab && activeTab.dataset.tab === 'dashboard') loadDashboard();
  } catch (err) {
    alert(getText('admin.misc.errorSavingLookbook') + ' ' + err.message);
  }
});

window.deleteAdminLookbook = async function(id) {
  if (!confirm(getText('admin.confirm.deleteLookbook'))) return;
  try {
    const db = getDb();
    await db.collection('lookbook').doc(id).delete();
    // Re-order remaining items
    const snap = await db.collection('lookbook').orderBy('position').get();
    let pos = 1;
    const batch = db.batch();
    snap.forEach(doc => {
      batch.update(doc.ref, { position: pos++ });
    });
    if (pos > 1) await batch.commit();
    if (editingLookbookId === id) resetLookbookForm();
    loadAdminLookbook();
    const activeTab = document.querySelector('.admin-nav-item.active');
    if (activeTab && activeTab.dataset.tab === 'dashboard') loadDashboard();
  } catch (err) {
    alert(getText('admin.misc.errorDeletingLookbook') + ' ' + err.message);
  }
};

// ============================================================
// CATEGORIES
// ============================================================
let categoriesCache = [];
let firestoreCategoriesCache = [];

async function syncCategoriesFromFirestore() {
  try {
    const db = getDb();
    const snap = await db.collection('categories').get();
    firestoreCategoriesCache = [];
    snap.forEach(doc => {
      const d = doc.data();
      firestoreCategoriesCache.push({ id: doc.id, label: d.label || doc.id });
    });
  } catch {
    firestoreCategoriesCache = [];
  }
}

function loadCategoriesFromProducts() {
  const hidden = getHiddenCategories();
  const cats = [];
  if (typeof products !== 'undefined' && Array.isArray(products)) {
    const seen = new Set();
    products.forEach(p => {
      if (p.category && !seen.has(p.category)) {
        seen.add(p.category);
        if (!hidden.has(p.category)) {
          cats.push({ id: p.category, label: p.category.charAt(0).toUpperCase() + p.category.slice(1) });
        }
      }
    });
  }
  // Fallback defaults (exclude hidden)
  if (cats.length === 0) {
    const defaults = [
      { id: 'hoodie', label: 'Hoodie' },
      { id: 'tshirt', label: 'T-Shirt' },
      { id: 'jacket', label: 'Jacket' },
      { id: 'pants', label: 'Pants' },
      { id: 'accessory', label: 'Accessory' }
    ];
    return defaults.filter(c => !hidden.has(c.id));
  }
  return cats;
}

function getExtraCategories() {
  try {
    const data = localStorage.getItem('qasr_extra_categories');
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

function saveExtraCategories(cats) {
  localStorage.setItem('qasr_extra_categories', JSON.stringify(cats));
}

function getHiddenCategories() {
  try {
    const data = localStorage.getItem('qasr_hidden_categories');
    return data ? new Set(JSON.parse(data)) : new Set();
  } catch { return new Set(); }
}

function saveHiddenCategories(set) {
  localStorage.setItem('qasr_hidden_categories', JSON.stringify([...set]));
}

function getAllCategories() {
  const base = loadCategoriesFromProducts();
  firestoreCategoriesCache.forEach(c => { if (!base.find(b => b.id === c.id)) base.push(c); });
  const extra = getExtraCategories();
  extra.forEach(c => { if (!base.find(b => b.id === c.id)) base.push(c); });
  categoriesCache = base;
  return base;
}

async function loadCategories() {
  const tbody = document.getElementById('categoriesTableBody');
  tbody.innerHTML = '';
  try {
    await syncCategoriesFromFirestore();
    const cats = getAllCategories();

    // Also try to fetch products from Firestore for count
    let productCounts = {};
    try {
      const db = getDb();
      const productsSnap = await db.collection('products').get();
      productsSnap.forEach(doc => {
        const cat = doc.data().category;
        if (cat) productCounts[cat] = (productCounts[cat] || 0) + 1;
      });
    } catch {}

    if (cats.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" class="admin-empty">' + getText('admin.empty.noCategories') + '</td></tr>';
      return;
    }
    cats.forEach(cat => {
      const count = productCounts[cat.id] || 0;
      tbody.innerHTML += `<tr>
        <td><code style="color:var(--gold)">${cat.id}</code></td>
        <td>${cat.label}</td>
        <td>${count} ${count !== 1 ? getText('admin.misc.products') : getText('admin.misc.product')}</td>
        <td>
          <div class="actions">
            <button class="danger" onclick="deleteCategory('${cat.id}')">${getText('admin.actions.delete')}</button>
          </div>
        </td>
      </tr>`;
    });

    // Also rebuild the product form picker + filter dropdown
    buildCategoryUI();
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="4" class="admin-empty">${getText('admin.empty.errorCategories')}</td></tr>`;
  }
  applyAdminTranslations();
}

document.getElementById('addCategoryBtn').addEventListener('click', () => {
  document.getElementById('categoryForm').reset();
  document.getElementById('categoryFormWrap').classList.add('open');
});

document.getElementById('cancelCategoryForm').addEventListener('click', () => {
  document.getElementById('categoryFormWrap').classList.remove('open');
});

document.getElementById('saveCategoryBtn').addEventListener('click', async () => {
  const id = document.getElementById('cfId').value.trim().toLowerCase();
  const label = document.getElementById('cfLabel').value.trim();
  if (!id || !label) { alert(getText('admin.form.idLabelRequired')); return; }
  const all = getAllCategories();
  if (all.find(c => c.id === id)) { alert(getText('admin.form.categoryExists')); return; }

  // Save to Firestore so all visitors see it
  try {
    const db = getDb();
    await db.collection('categories').doc(id).set({ id, label });
  } catch {}

  // Also save to localStorage as fallback
  const extra = getExtraCategories();
  extra.push({ id, label });
  saveExtraCategories(extra);
  categoriesCache = [];

  document.getElementById('categoryFormWrap').classList.remove('open');
  loadCategories();
});

window.deleteCategory = async function(id) {
  if (!confirm(getText('admin.confirm.deleteCategory').replace('{id}', id))) return;

  const fromProducts = typeof products !== 'undefined' && Array.isArray(products) && products.some(p => p.category === id);

  if (fromProducts) {
    // Hide products.js category so it won't reappear
    const hidden = getHiddenCategories();
    hidden.add(id);
    saveHiddenCategories(hidden);
    // Also delete from Firestore if it exists there
    try { const db = getDb(); await db.collection('categories').doc(id).delete(); } catch {}
    categoriesCache = [];
    loadCategories();
    return;
  }

  // Delete from Firestore so visitors see it removed
  try { const db = getDb(); await db.collection('categories').doc(id).delete(); } catch {}

  // Also remove from localStorage
  const extra = getExtraCategories();
  const filtered = extra.filter(c => c.id !== id);
  if (filtered.length === extra.length) { /* not in localStorage, ok */ }
  saveExtraCategories(filtered);
  categoriesCache = [];

  loadCategories();
};

// Build category picker and filter dropdown from local data
function buildCategoryUI() {
  const cats = getAllCategories();
  if (cats.length === 0) return;

  // Build picker
  const picker = document.getElementById('categoryPicker');
  if (picker) {
    picker.innerHTML = '';
    cats.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'cat-card';
      card.dataset.cat = cat.id;
      card.innerHTML = `<span>${cat.label}</span>`;
      picker.appendChild(card);
    });
    const first = picker.querySelector('.cat-card');
    if (first) first.classList.add('active');
    const pfCat = document.getElementById('pfCategory');
    if (pfCat) pfCat.value = first ? first.dataset.cat : '';
  }

  // Build filter dropdown
  const filter = document.getElementById('productCategoryFilter');
  if (filter) {
    filter.innerHTML = '<option value="">All Categories</option>';
    cats.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.label;
      filter.appendChild(opt);
    });
  }
}
