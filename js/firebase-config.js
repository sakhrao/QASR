// QASR — Firebase Configuration
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyA6jdUSM2-ZAw8HoU5H8GtrMqlyhbmgtXU",
  authDomain: "qasr-shop-91359.firebaseapp.com",
  projectId: "qasr-shop-91359",
  storageBucket: "qasr-shop-91359.firebasestorage.app",
  messagingSenderId: "655967154496",
  appId: "1:655967154496:web:56b4fc5f86848bc8a00aa5",
  measurementId: "G-8QL6V3NX05"
};

let db = null;
let firebaseInitialized = false;

// Initialize Firebase (compat mode via CDN scripts)
function initFirebase() {
  if (typeof firebase !== 'undefined' && !firebaseInitialized) {
    try {
      if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();
      firebaseInitialized = true;
      console.log('%c Firebase initialized successfully', 'color: #D4AF37; font-size: 12px;');
      return true;
    } catch (err) {
      console.warn('Firebase init failed:', err);
      return false;
    }
  }
  return firebaseInitialized;
}

// Save order to Firestore
async function saveOrder(orderData) {
  if (!firebaseInitialized) {
    const inited = initFirebase();
    if (!inited) {
      console.warn('Firebase not available — order saved to localStorage only');
      saveOrderLocal(orderData);
      return { success: true, local: true };
    }
  }

  try {
    const docRef = await db.collection('orders').add({
      ...orderData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log('Order saved with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (err) {
    console.error('Firestore save error:', err);
    saveOrderLocal(orderData);
    return { success: true, local: true };
  }
}

// Fallback: save order to localStorage
function saveOrderLocal(orderData) {
  const orders = JSON.parse(localStorage.getItem('qasr_orders') || '[]');
  orders.push({
    ...orderData,
    id: 'ORD-' + Date.now(),
    createdAt: new Date().toISOString()
  });
  localStorage.setItem('qasr_orders', JSON.stringify(orders));
}
