// QASR — Products Loader from Firestore
// Overrides products.js data if Firestore has products
// ============================================================

(async function loadProductsFromFirestore() {
  if (typeof firebase === 'undefined') return;
  if (typeof initFirebase === 'function') initFirebase();
  if (!db) return;

  try {
    const snap = await db.collection('products').orderBy('createdAt', 'asc').get();
    if (snap.empty) return; // keep products.js data

    const firestoreProducts = [];
    let id = 1;
    snap.forEach(doc => {
      const p = doc.data();
      firestoreProducts.push({
        id: id++,
        name: p.name || 'Untitled',
        category: p.category || 'hoodie',
        price: p.price || 0,
        description: p.description || '',
        priceEn: p.priceEn || p.description || '',
        priceAr: p.priceAr || p.description || '',
        sizes: p.sizes || ['M'],
        colors: p.colors || [{ name: 'Default', hex: '#000', thumb: '', images: [] }],
        sale: p.sale || false,
        discountPercent: p.discountPercent || 0,
        featured: p.featured || false
      });
    });

    if (firestoreProducts.length > 0) {
      // Merge Firestore products with existing products.js data
      const maxExistingId = window.products.reduce((max, p) => Math.max(max, p.id || 0), 0);
      firestoreProducts.forEach((p, i) => { p.id = maxExistingId + i + 1; });
      window.products = [...window.products, ...firestoreProducts];
      console.log(`%c Merged ${firestoreProducts.length} products from Firestore`, 'color: #D4AF37;');
      // Re-render to show Firestore products alongside products.js ones
      if (typeof renderProducts === 'function') {
        const activeFilter = document.querySelector('.filter-btn.active');
        const filter = activeFilter ? activeFilter.dataset.filter : 'all';
        renderProducts(filter === 'all' ? window.products : window.products.filter(p => p.category === filter));
      }
      if (typeof renderFeaturedCarousel === 'function') renderFeaturedCarousel();
    }
  } catch (err) {
    console.warn('Firestore product load failed — using products.js:', err.message);
  }
})();