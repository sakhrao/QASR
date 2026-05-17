// QASR — Bilingual Translation System
// English (en) + Arabic (ar) with RTL support

// Currency configuration
const CURRENCY_SYMBOL = 'DA';
function formatPrice(amount) {
  if (currentLang === 'ar') {
    return Number(amount).toLocaleString('ar-DZ') + ' د.ج';
  }
  return Number(amount).toLocaleString() + ' ' + CURRENCY_SYMBOL;
}

const translations = {
  en: {
    nav: {
      home: "Home",
      collection: "Collection",
      about: "About",
      lookbook: "Lookbook",
      featured: "Featured",
      testimonials: "Testimonials",
      contact: "Contact"
    },
    hero: {
      badge: "EST. 2026",
      title1: "QASR",
      title2: "— Wear Power",
      subtitle: "Where royalty meets the streets. A luxury fashion house for those who command respect.",
      shopBtn: "Shop Collection",
      discoverBtn: "Discover More",
      scroll: "Scroll"
    },
    search: {
      placeholder: "Search collections..."
    },
    cart: {
      title: "Shopping Bag",
      empty: "Your bag is empty",
      emptyHint: "Add some luxury pieces to your collection",
      total: "Total",
      checkout: "Checkout",
      added: "added to your bag"
    },
    collection: {
      subtitle: "Premium Selection",
      title: "The Collection",
      desc: "Curated pieces designed for the modern monarch. Each garment embodies power, confidence, and prestige.",
      all: "All",
      hoodie: "Hoodies",
      tshirt: "T-Shirts",
      jacket: "Jackets",
      pants: "Pants",
      accessory: "Accessories"
    },
    modal: {
      color: "Color",
      size: "Size",
      quantity: "Quantity",
      addToBag: "Add to Bag",
      buyNow: "Buy Now",
      freeShipping: "Free shipping on orders over $200",
      secureCheckout: "Secure checkout"
    },
    about: {
      subtitle: "The Brand",
      title: "Royalty Redefined",
      p1: "QASR is not merely a clothing brand — it is a statement of power, a testament to confidence, and a celebration of the royal spirit that resides within every individual who dares to lead.",
      p2: "Born from the intersection of luxury and street culture, we craft garments that transcend fashion. Each piece is designed for those who rule their own destiny — the kings, the queens, the architects of their own legacy.",
      p3: "Our golden lion represents courage, strength, and nobility. It is the emblem of those who wear their power with grace and carry their ambition with pride. Welcome to the kingdom. Welcome to QASR.",
      signature: "— The House of QASR",
      since: "Since 2026"
    },
    lookbook: {
      subtitle: "Visual Narrative",
      title: "The Lookbook",
      desc: "Explore our fashion editorial — where luxury meets attitude.",
      items: [
        { title: "Street Royalty", sub: "Collection 2026" },
        { title: "Gold Standard", sub: "Limited Edition" },
        { title: "Urban Crown", sub: "Signature Line" },
        { title: "Midnight Reign", sub: "Exclusive Drop" },
        { title: "Royal Blood", sub: "Core Collection" },
        { title: "Golden Era", sub: "Premium Line" }
      ]
    },
    featured: {
      subtitle: "Best Sellers",
      title: "Featured Products",
      desc: "The most coveted pieces from our collection."
    },
    testimonials: {
      subtitle: "What They Say",
      title: "Testimonials",
      items: [
        { text: "\"QASR isn't just clothing — it's armor for the modern warrior. The quality is unmatched and the gold details are pure elegance.\"", author: "Messaoudi Taha", role: "" },
        { text: "\"The moment I put on my QASR hoodie, I felt different. It's the confidence, the weight of the fabric, the golden lion. Absolutely premium.\"", author: "Boukbal Ahmed", role: "" },
        { text: "\"Finally, a brand that understands true luxury streetwear. The fit, the finish, the aesthetic — everything about QASR screams excellence.\"", author: "Drari Salem", role: "" }
      ],
      formTitle: "Share Your Experience",
      namePlaceholder: "Your Name",
      textPlaceholder: "Write your testimonial...",
      submitBtn: "Submit",
      successMsg: "Thank you! Your testimonial has been submitted.",
      errorMsg: "Failed to submit testimonial. Please try again."
    },
    stats: {
      customers: "Happy Customers",
      products: "Products Created",
      countries: "Countries",
      rating: "Average Rating"
    },
    newsletter: {
      title: "Join the Kingdom",
      text: "Subscribe for exclusive drops, early access, and royal treatment.",
      placeholder: "Enter your email",
      btn: "Subscribe",
      disclaimer: "Join the House of QASR. No spam, only royalty."
    },
    contact: {
      subtitle: "Get In Touch",
      title: "Contact Us",
      desc: "Reach out to the House of QASR. We'd love to hear from you.",
      whatsapp: "Chat on WhatsApp",
      whatsappBtn: "WhatsApp",
      call: "Call Us",
      location: "Location",
      locationVal: "ALGIERS, ALG — The Royal QASR",
      email: "Email",
      emailVal: "qasr@gmail.com",
      phone: "Phone",
      phoneVal: "+971 50 8456 258"
    },
    store: {
      subtitle: "Visit Us",
      title: "Our Store",
      desc: "Experience the world of QASR in person at our flagship store.",
      name: "QASR Flagship Store",
      hoursLabel: "Hours",
      address: "The Gardin Mall, Ground Floor — Fashion Avenue, Algiers, ALG",
      hours: "Sat–Thu: 10:00 AM – 10:00 PM | Fri: 2:00 PM – 10:00 PM",
      openMap: "Open in Google Maps"
    },
    footer: {
      desc: "Wear Power. Rule Your World. The House of QASR — where royalty meets the streets.",
      quickLinks: "Quick Links",
      support: "Support",
      connect: "Connect",
      shipping: "Shipping Info",
      returns: "Returns & Exchanges",
      sizeGuide: "Size Guide",
      faq: "FAQ",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      contactSupport: "Contact Support",
      copyright: "© 2026 QASR. All rights reserved. Wear Power."
    },
    checkout: {
      title: "Checkout",
      step1: "1. Review Order",
      step2: "2. Shipping",
      step3: "3. Confirm",
      orderSummary: "Order Summary",
      customerInfo: "Customer Information",
      fullName: "Full Name",
      phone: "Phone Number",
      wilaya: "Wilaya (State)",
      municipality: "Municipality",
      address: "Address (Optional)",
      deliveryType: "Delivery Type",
      homeDelivery: "Home Delivery",
      deliveryOffice: "Delivery Office",
      notes: "Additional Notes (Optional)",
      productTotal: "Product Total",
      deliveryFee: "Delivery Fee",
      total: "Total",
      confirm: "Confirm Order",
      trust1: "Cash on Delivery",
      trust2: "Fast Delivery within 24–72 Hours",
      trust3: "Quality Guaranteed",
      trust4: "Direct WhatsApp Support",
      success: "Order Confirmed!",
      successMsg: "Thank you for your order. You will receive a confirmation shortly.",
      backHome: "Back to Home",
      emptyCart: "Your cart is empty. Add items before checkout.",
      continueShopping: "Continue Shopping",
      loading: "Processing..."
    },
    productCard: {
      addToBag: "Add to Bag"
    },
    support: {
      faq: "FAQ",
      faqContent: '<div class="support-section"><div class="support-faq-item"><h4 class="support-faq-q">What materials are used in QASR products?</h4><p class="support-faq-a">Our products are crafted from premium materials sourced globally. Hoodies and tees use heavyweight 240-400GSM French terry cotton. Varsity jackets feature wool-satin blends with genuine leather sleeves. All materials are selected for durability, comfort, and luxury appeal.</p></div><div class="support-faq-item"><h4 class="support-faq-q">How do I care for my QASR items?</h4><p class="support-faq-a">To preserve the quality of your QASR pieces: machine wash cold with like colors, turn garments inside out before washing, do not bleach, tumble dry on low, and iron on reverse side. Avoid dry cleaning for cotton items. For leather-accented pieces, spot clean only.</p></div><div class="support-faq-item"><h4 class="support-faq-q">How long does delivery take?</h4><p class="support-faq-a">Delivery times vary by location. Major cities (Algiers, Oran, Constantine): 24-48 hours. Other wilayas: 48-72 hours. Remote areas may take 3-5 business days. Express delivery is available at checkout for an additional fee.</p></div><div class="support-faq-item"><h4 class="support-faq-q">Can I change or cancel my order?</h4><p class="support-faq-a">Orders can be modified or cancelled within 2 hours of placement. After that, the order enters processing and cannot be changed. Contact our support team immediately via WhatsApp for assistance.</p></div><div class="support-faq-item"><h4 class="support-faq-q">Do you ship internationally?</h4><p class="support-faq-a">Currently, QASR ships exclusively within Algeria. We are working on expanding to international markets soon. Follow us on social media for updates on global shipping availability.</p></div><div class="support-faq-item"><h4 class="support-faq-q">What payment methods are accepted?</h4><p class="support-faq-a">We accept cash on delivery (COD) across all wilayas. Bank transfer and EDAHABIA card payments are coming soon. All transactions are processed securely.</p></div></div>',
      shipping: "Shipping Policy",
      shippingContent: '<div class="support-section"><h4 class="support-subheading">Delivery Overview</h4><p class="support-text">QASR offers reliable and tracked shipping across all 58 wilayas of Algeria. We partner with trusted courier services to ensure your order arrives safely and on time.</p><h4 class="support-subheading">Delivery Timeframes</h4><ul class="support-list"><li><strong>Zone 1 — Major Cities</strong> (Algiers, Oran, Constantine, Annaba, Blida): 24-48 hours</li><li><strong>Zone 2 — Mid-Region Wilayas</strong>: 48-72 hours</li><li><strong>Zone 3 — Southern & Remote Wilayas</strong>: 3-5 business days</li></ul><h4 class="support-subheading">Shipping Costs</h4><ul class="support-list"><li><strong>Home Delivery:</strong> 700 DA — Standard rate across all wilayas</li><li><strong>Office Delivery:</strong> 400 DA — Reduced rate for workplace delivery</li><li><strong>Express Delivery:</strong> Available at checkout — additional fees apply</li></ul><h4 class="support-subheading">Tracking Your Order</h4><p class="support-text">Once your order is dispatched, you will receive a confirmation message via WhatsApp or SMS with a tracking link. You can also track your order by contacting our support team.</p><h4 class="support-subheading">Delivery Notes</h4><ul class="support-list"><li>Orders are delivered Sunday through Thursday, 9 AM — 6 PM</li><li>A signature is required upon delivery</li><li>If you are unavailable, the courier will attempt redelivery the next business day</li><li>Free shipping on orders over 15,000 DA</li></ul></div>',
      returns: "Returns & Exchanges",
      returnsContent: '<div class="support-section"><h4 class="support-subheading">Return Policy</h4><p class="support-text">We want you to love your QASR pieces. If you are not completely satisfied, we accept returns within 14 days of delivery for a full refund or exchange.</p><h4 class="support-subheading">Conditions</h4><ul class="support-list"><li>Items must be unworn, unwashed, and in original condition</li><li>All tags and packaging must be intact</li><li>Footwear and accessories must be returned in their original boxes</li><li>Sale items are eligible for exchange only, not refund</li></ul><h4 class="support-subheading">Return Process</h4><ol class="support-list"><li>Contact our support team via WhatsApp within 14 days of receiving your order</li><li>Provide your order number and the items you wish to return</li><li>Our team will arrange a pickup from your address</li><li>Items are inspected upon return — refunds are processed within 5-7 business days</li></ol><h4 class="support-subheading">Exchanges</h4><p class="support-text">Exchanges for a different size or color are free of charge. If you wish to exchange for a different item, the price difference will be applied. Contact us to initiate an exchange.</p><h4 class="support-subheading">Non-Returnable Items</h4><ul class="support-list"><li>Items marked as final sale</li><li>Personalized or custom pieces</li><li>Underwear and face masks</li></ul></div>',
      privacy: "Privacy Policy",
      privacyContent: '<div class="support-section"><h4 class="support-subheading">Information We Collect</h4><p class="support-text">We collect personal information you provide when placing an order: your full name, phone number, delivery address, and email address (if provided). We also collect order history and preferences to improve your shopping experience.</p><h4 class="support-subheading">How We Use Your Information</h4><ul class="support-list"><li>Processing and fulfilling your orders</li><li>Communicating order updates and delivery confirmations</li><li>Improving our products and services</li><li>Sending promotional offers (only with your explicit consent)</li></ul><h4 class="support-subheading">Data Protection</h4><p class="support-text">Your personal data is stored securely and never shared with third parties for marketing purposes. We may share necessary information with our delivery partners solely for order fulfillment. All payment transactions are processed through secure channels.</p><h4 class="support-subheading">Your Rights</h4><ul class="support-list"><li>Request access to your personal data</li><li>Request correction or deletion of your data</li><li>Withdraw consent for promotional communications at any time</li></ul><h4 class="support-subheading">Contact Us</h4><p class="support-text">For privacy-related inquiries, contact us via WhatsApp or email. We respond to all privacy requests within 48 hours.</p></div>',
      terms: "Terms & Conditions",
      termsContent: '<div class="support-section"><h4 class="support-subheading">General</h4><p class="support-text">By accessing and using the QASR website and purchasing our products, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.</p><h4 class="support-subheading">Products & Pricing</h4><ul class="support-list"><li>All prices are listed in Algerian Dinar (DZD) and include applicable taxes</li><li>Product images are for illustration purposes; actual colors may vary slightly</li><li>We reserve the right to modify prices without prior notice</li><li>In the event of a pricing error, we will contact you before processing the order</li></ul><h4 class="support-subheading">Orders</h4><ul class="support-list"><li>Order placement constitutes an offer to purchase</li><li>We reserve the right to accept or decline any order</li><li>Orders are subject to product availability</li><li>We may contact you to verify order details before processing</li></ul><h4 class="support-subheading">Intellectual Property</h4><p class="support-text">All content on this website — including logos, designs, text, images, and the QASR brand — is the exclusive property of QASR. Unauthorized use, reproduction, or distribution is strictly prohibited.</p><h4 class="support-subheading">Limitation of Liability</h4><p class="support-text">QASR shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our total liability is limited to the purchase price of the product in question.</p></div>',
      sizeGuide: "Size Guide",
      sizeGuideContent: '<div class="support-section"><p class="support-text">Find your perfect fit with our comprehensive size guide. Measurements are in centimeters. For the most accurate fit, measure a similar garment you already own and compare with our chart.</p><div class="size-chart-wrapper"><table class="size-chart"><thead><tr><th>Size</th><th>Chest (cm)</th><th>Waist (cm)</th><th>Length (cm)</th><th>Sleeve (cm)</th></tr></thead><tbody><tr><td data-label="Size">XS</td><td data-label="Chest">86-91</td><td data-label="Waist">71-76</td><td data-label="Length">66-68</td><td data-label="Sleeve">81-84</td></tr><tr><td data-label="Size">S</td><td data-label="Chest">91-97</td><td data-label="Waist">76-81</td><td data-label="Length">68-71</td><td data-label="Sleeve">84-86</td></tr><tr><td data-label="Size">M</td><td data-label="Chest">97-102</td><td data-label="Waist">81-86</td><td data-label="Length">71-74</td><td data-label="Sleeve">86-89</td></tr><tr><td data-label="Size">L</td><td data-label="Chest">102-107</td><td data-label="Waist">86-91</td><td data-label="Length">74-76</td><td data-label="Sleeve">89-91</td></tr><tr><td data-label="Size">XL</td><td data-label="Chest">107-112</td><td data-label="Waist">91-97</td><td data-label="Length">76-79</td><td data-label="Sleeve">91-94</td></tr><tr><td data-label="Size">XXL</td><td data-label="Chest">112-117</td><td data-label="Waist">97-102</td><td data-label="Length">79-81</td><td data-label="Sleeve">94-97</td></tr></tbody></table></div><p class="support-note"><strong>Fit Tip:</strong> Our garments have a relaxed/oversized fit. If you prefer a slimmer fit, we recommend sizing down. For an oversized look, size up.</p><h4 class="support-subheading">How to Measure</h4><ul class="support-list"><li><strong>Chest:</strong> Measure around the fullest part of your chest, under the arms</li><li><strong>Waist:</strong> Measure around your natural waistline</li><li><strong>Length:</strong> Measure from the highest point of the shoulder to the bottom hem</li><li><strong>Sleeve:</strong> Measure from the center back of the neck to the end of the shoulder and down to the wrist</li></ul></div>',
      contactSupport: "Contact Support",
      contactSupportContent: '<div class="support-section"><h4 class="support-subheading">We Are Here to Help</h4><p class="support-text">Our dedicated support team is ready to assist you with any questions, concerns, or inquiries. We strive to respond to all messages within minutes during business hours.</p><div class="contact-support-cards"><div class="contact-support-card"><div class="contact-support-card-icon">💬</div><h4 class="contact-support-card-title">WhatsApp</h4><p class="contact-support-card-text">Fastest response time. Chat with us directly.</p><p class="contact-support-card-detail">+213 XXX XX XX XX</p></div><div class="contact-support-card"><div class="contact-support-card-icon">✉️</div><h4 class="contact-support-card-title">Email</h4><p class="contact-support-card-text">For detailed inquiries and documentation.</p><p class="contact-support-card-detail">support@qasr.dz</p></div><div class="contact-support-card"><div class="contact-support-card-icon">📞</div><h4 class="contact-support-card-title">Phone</h4><p class="contact-support-card-text">Speak directly with our team.</p><p class="contact-support-card-detail">Sun–Thu, 9 AM – 6 PM</p></div></div><h4 class="support-subheading">Business Hours</h4><ul class="support-list"><li>Sunday – Thursday: 9:00 AM – 6:00 PM</li><li>Friday – Saturday: Closed</li><li>Holiday schedules may vary — follow us on Instagram for updates</li></ul></div>'
    },
    contactCards: {
      whatsappBtn: "Chat on WhatsApp",
      whatsappAvailable: "Available Sun–Sat, 9AM–9PM",
      whatsappQuick: "We typically respond within minutes",
      facebookTitle: "Facebook",
      facebookDesc: "Chat with us directly",
      instagramTitle: "Instagram",
      instagramDesc: "Chat with us directly",
      instagramBtn: "Follow Us",
      tiktokTitle: "TikTok",
      tiktokDesc: "Chat with us directly",
      tiktokBtn: "Follow Us",
      
    },
    products: {
      name1: "Imperial Hoodie",
      name2: "Gold Crown Tee",
      name3: "Sovereign Varsity",
      name4: "Regal Cargos",
      name5: "Crown Pendant",
      name6: "Sovereign Hoodie",
      name7: "Monarch Tee",
      name8: "Lion Signet Ring",
      name9: "Gold Bomber",
      name10: "Regal Joggers",
      name11: "Crown Cap",
      name12: "Limited Lion Hoodie",
      desc1: "Crafted from heavyweight 400GSM French terry cotton, the Imperial Hoodie features an oversized fit with gold-plated drawstring tips and the signature QASR golden lion embroidery on the chest. A statement of power and luxury.",
      desc2: "Premium 240GSM heavyweight cotton t-shirt with a relaxed fit. Features an oversized golden lion print across the back with a subtle QASR crown logo on the chest. The ultimate luxury essential.",
      desc3: "A luxury varsity jacket constructed from premium wool-satin blend with genuine leather sleeves. Features intricate gold embroidery, satin lining with the QASR monogram pattern, and custom gold-plated snap buttons.",
      desc4: "Premium cargo pants crafted from heavyweight cotton twill with a modern tapered fit. Gold-tipped drawstrings, embossed QASR snap buttons, and subtle golden lion embroidery at the back pocket.",
      desc5: "A meticulously crafted 14K gold-plated stainless steel chain featuring the QASR crown pendant. Each piece is hand-finished and arrives in a premium velvet box with authentication card.",
      desc6: "An elevated take on streetwear luxury. The Sovereign Hoodie features a cropped fit, heavy weight 450GSM loopwheel cotton, with an embroidered gold crest on the sleeve and a custom woven label at the hem.",
      desc7: "The Monarch Tee is your everyday luxury staple. Made from 260GSM Pima cotton with a structured fit, featuring a gold foil QASR crown print and ribbed collar with gold signature stripe.",
      desc8: "A bold signet ring crafted from surgical-grade stainless steel with 18K gold plating. Features the QASR lion crest in high relief. Adjustable sizing with premium presentation box.",
      desc9: "A showstopping satin bomber with gold metallic finish. Features embroidered QASR crest on back, ribbed cuffs with gold stripe, and custom lion head zip pullers. Limited edition piece.",
      desc10: "Premium french terry joggers with a tailored fit. Features gold tipped flat drawstrings, woven QASR label at back waist, zippered pockets with gold pullers, and ribbed cuffs with gold stripe detail.",
      desc11: "Premium structured snapback cap with gold metallic QASR crown embroidery. Features satin inner lining, gold eyelets, and adjustable brass buckle closure at back.",
      desc12: "Our most exclusive piece. The Limited Edition Lion Hoodie features a full back embroidery of the QASR golden lion, diamond-cut gold drawstring tips, and a numbered authentication patch. Only 100 pieces made."
    },
    admin: {
      header: "Admin Panel",
      viewStore: "View Store",
      signOut: "Sign Out",
      cancel: "Cancel",
      allCategories: "All Categories",
      login: {
        title: "Admin Login",
        subtitle: "Sign in to manage your store",
        signIn: "Sign In",
        signingIn: "Signing in...",
        returnTo: "Return to",
        store: "store"
      },
      sidebar: {
        dashboard: "Dashboard",
        products: "Products",
        orders: "Orders",
        discounts: "Discounts",
        subscribers: "Subscribers",
        categories: "Categories",
        inbox: "Inbox",
        testimonials: "Testimonials",
        lookbook: "Lookbook"
      },
      dashboard: {
        welcome: "Welcome back,",
        subtitle: "Here's what's happening with your store today.",
        quickActions: "Quick Actions",
        recentOrders: "Recent Orders",
        manageProducts: "Manage Products",
        manageProductsDesc: "Add, edit, or remove items from your catalog",
        viewOrders: "View Orders",
        viewOrdersDesc: "Track, process, and fulfill customer orders",
        discountCodes: "Discount Codes",
        discountCodesDesc: "Create and manage promotional offers",
        manageCategories: "Manage Categories",
        manageCategoriesDesc: "Add or remove product categories",
        manageTestimonials: "Testimonials",
        manageTestimonialsDesc: "Review and manage customer testimonials",
        manageLookbook: "Lookbook",
        manageLookbookDesc: "Manage lookbook images and captions"
      },
      stats: {
        products: "Products",
        productsSub: "Total catalog items",
        orders: "Orders",
        ordersSub: "Total received",
        subscribers: "Subscribers",
        subscribersSub: "Newsletter audience",
        discounts: "Discount Codes",
        discountsSub: "Active promotions",
        categories: "Categories",
        categoriesSub: "Product categories",
        testimonials: "Testimonials",
        testimonialsSub: "Customer reviews",
        lookbook: "Lookbook Items",
        lookbookSub: "Gallery images"
      },
      products: {
        title: "Products",
        add: "+ Add Product",
        formAdd: "Add Product",
        nameLabel: "Product Name",
        categoryLabel: "Category",
        priceLabel: "Price (DA)",
        sizesLabel: "Available Sizes",
        descLabel: "Description",
        colorsLabel: "Colors / Variants",
        save: "Save Product",
        saleOnly: "Sale only",
        thImage: "Image",
        thName: "Name",
        thCategory: "Category",
        thPrice: "Price",
        thColors: "Colors",
        thSale: "Sale",
        thActions: "Actions"
      },
      orders: {
        title: "Orders",
        all: "All",
        pending: "Pending",
        processing: "Processing",
        completed: "Completed",
        cancelled: "Cancelled"
      },
      discounts: {
        title: "Discount Codes",
        add: "+ Add Code",
        formAdd: "Add Discount Code",
        codeLabel: "Code",
        percentLabel: "Discount %",
        save: "Save Code",
        thCode: "Code",
        thDiscount: "Discount",
        thStatus: "Status",
        thActions: "Actions"
      },
      subscribers: {
        title: "Subscribers",
        deleteAll: "Delete All",
        thEmail: "Email",
        thDate: "Date",
        thLang: "Language",
        thActions: "Actions"
      },
      categories: {
        title: "Categories",
        add: "+ Add Category",
        formAdd: "Add New Category",
        idLabel: "Category ID",
        labelLabel: "Display Label",
        save: "Save Category",
        thId: "ID",
        thLabel: "Label",
        thCount: "Products Count",
        thActions: "Actions"
      },
      inbox: {
        title: "Inbox",
        deleteAll: "Delete All",
        thName: "Name",
        thEmail: "Email",
        thMessage: "Message",
        thDate: "Date",
        thActions: "Actions"
      },
      testimonials: {
        title: "Testimonials",
        deleteAll: "Delete All",
        thAuthor: "Author",
        thText: "Text",
        thDate: "Date",
        thActions: "Actions"
      },
      lookbook: {
        title: "Lookbook",
        save: "Save Item",
        thImage: "Image",
        thTitle: "Title",
        thSubtitle: "Subtitle",
        thActions: "Actions"
      },
      currency: "DA",
      actions: {
        edit: "Edit",
        delete: "Delete",
        view: "View",
        status: "Status",
        label: "Label",
        cycleStatus: "Cycle Status",
        deleteOrder: "Delete Order",
        save: "Save",
        cancel: "Cancel"
      },
      status: {
        pending: "Pending",
        processing: "Processing",
        completed: "Completed",
        cancelled: "Cancelled"
      },
      orderDetail: {
        status: "Status",
        customer: "Customer",
        delivery: "Delivery",
        items: "Items",
        pricing: "Pricing",
        payment: "Payment",
        subtotal: "Subtotal",
        discount: "Discount",
        deliveryFee: "Delivery",
        total: "Total",
        placed: "Placed:",
        home: "Home Delivery",
        office: "Office Pickup"
      },
      dashRecent: {
        order: "Order",
        customer: "Customer",
        date: "Date",
        status: "Status",
        total: "Total"
      },
      empty: {
        noOrders: "No orders found.",
        noProducts: "No products match your filters.",
        noDiscounts: "No discount codes yet.",
        noSubscribers: "No subscribers yet.",
        noMessages: "No messages yet.",
        noTestimonials: "No testimonials yet.",
        noLookbook: "No lookbook items yet.",
        noCategories: "No categories found.",
        loadingOrders: "Loading orders...",
        noOrdersYet: "No orders yet.",
        failedRecent: "Failed to load recent orders.",
        errorProducts: "Error loading products",
        errorOrders: "Error loading orders",
        errorDiscounts: "Error loading discounts",
        errorSubscribers: "Error loading subscribers",
        errorMessages: "Error loading messages",
        errorTestimonials: "Error loading testimonials",
        errorLookbook: "Error loading lookbook items",
        errorCategories: "Error loading categories"
      },
      confirm: {
        deleteProductJs: "This product is hardcoded in products.js. Remove it from the admin view?",
        deleteProductFs: "Delete this product from Firestore?",
        deleteOrder: "Delete this order permanently?",
        deleteDiscount: "Delete this discount code?",
        deleteSubscriber: "Delete this subscriber?",
        deleteAllSubscribers: "Delete ALL subscribers? This cannot be undone.",
        deleteMessage: "Delete this message?",
        deleteAllMessages: "Delete ALL inbox messages? This cannot be undone.",
        deleteTestimonial: "Delete this testimonial?",
        deleteAllTestimonials: "Delete ALL testimonials? This cannot be undone.",
        deleteLookbook: "Delete this lookbook item?",
        deleteCategory: 'Delete category "{id}"?'
      },
      form: {
        namePriceRequired: "Name and price are required",
        codePercentRequired: "Code and percentage are required",
        idLabelRequired: "Both ID and Label are required",
        categoryExists: "A category with this ID already exists",
        editProductTitle: "Edit Product",
        editHardcodedTitle: "Edit Hardcoded Product — will save to Firestore",
        addProductTitle: "Add Product",
        addDiscountTitle: "Add Discount Code",
        editDiscountTitle: "Edit Discount Code",
        addCategoryTitle: "Add New Category"
      },
      misc: {
        unknown: "Unknown",
        hardcoded: "(hardcoded)",
        active: "Active",
        inactive: "Inactive",
        products: "products",
        product: "product",
        cashOnDelivery: "Cash on Delivery",
        saving: "Saving...",
        error: "Error:",
        errorAllSubscribers: "Error deleting all subscribers:",
        errorAllMessages: "Error deleting all messages:",
        errorAllTestimonials: "Error deleting all testimonials:",
        errorSavingLookbook: "Error saving lookbook item:",
        errorDeletingLookbook: "Error deleting lookbook item:"
      }
    }
  },
  ar: {
    contactCards: {
      whatsappBtn: "تحدث عبر واتساب",
      whatsappAvailable: "متاح السبت–الخميس، 9ص–9م",
      whatsappQuick: "نرد عادةً في غضون دقائق",
      facebookTitle: "فيسبوك",
      facebookDesc: "تواصل معنا مباشرة",
      facebookBtn: "تابعنا",
      instagramTitle: "انستغرام",
      instagramDesc: "تواصل معنا مباشرة",
      instagramBtn: "تابعنا",
      tiktokTitle: "تيك توك",
      tiktokDesc: "تواصل معنا مباشرة",
      tiktokBtn: "تابعنا",
      
    },
    nav: {
      home: "الرئيسية",
      collection: "المجموعة",
      about: "عن قصر",
      lookbook: "كتاب الأناقة",
      featured: "المميزة",
      testimonials: "آراء العملاء",
      contact: "اتصل بنا"
    },
    hero: {
      badge: "تأسست 2026",
      title1: "قصر",
      title2: "— ارتدِ القوة",
      subtitle: "حيث تلتقي الملوكية بالشوارع. دار أزياء فاخرة لمن يأمرون بالاحترام.",
      shopBtn: "تسوق المجموعة",
      discoverBtn: "اكتشف المزيد",
      scroll: "تمرير"
    },
    search: {
      placeholder: "ابحث في المجموعات..."
    },
    cart: {
      title: "حقيبة التسوق",
      empty: "حقيبتك فارغة",
      emptyHint: "أضف بعض القطع الفاخرة إلى مجموعتك",
      total: "المجموع",
      checkout: "إتمام الشراء",
      added: "أضيف إلى حقيبتك"
    },
    collection: {
      subtitle: "اختيار ممتاز",
      title: "المجموعة",
      desc: "قطع مختارة مصممة للملك العصري. كل قطعة تجسد القوة والثقة والهيبة.",
      all: "الكل",
      hoodie: "هودي",
      tshirt: "تيشيرت",
      jacket: "جاكيت",
      pants: "بناطيل",
      accessory: "إكسسوارات"
    },
    modal: {
      color: "اللون",
      size: "المقاس",
      quantity: "الكمية",
      addToBag: "أضف إلى الحقيبة",
      buyNow: "اشتري الآن",
      freeShipping: "شحن مجاني للطلبات فوق 200 دولار",
      secureCheckout: "دفع آمن"
    },
    about: {
      subtitle: "العلامة التجارية",
      title: "الملكية بإعادة تعريف",
      p1: "قصر ليست مجرد علامة تجارية للملابس — إنها بيان قوة، دليل ثقة، واحتفال بالروح الملكية التي تسكن كل فرد يجرؤ على القيادة.",
      p2: "وُلدت من تقاطع الفخامة وثقافة الشارع، نحن نصمم قطعاً تتجاوز الموضة. كل قطعة مصممة لمن يحكمون مصيرهم — الملوك، الملكات، مهندسي إرثهم الخاص.",
      p3: "أسدنا الذهبي يمثل الشجاعة والقوة والنبل. إنه شعار أولئك الذين يرتدون قوتهم برشاقة ويحملون طموحهم بفخر. مرحباً بك في المملكة. مرحباً بك في قصر.",
      signature: "— دار قصر",
      since: "منذ 2026"
    },
    lookbook: {
      subtitle: "سرد بصري",
      title: "كتاب الأناقة",
      desc: "استكشف افتتاحية الموضة لدينا — حيث تلتقي الفخامة بالأناقة.",
      items: [
        { title: "ملوك الشارع", sub: "مجموعة 2026" },
        { title: "المعيار الذهبي", sub: "إصدار محدود" },
        { title: "التاج الحضري", sub: "خط التوقيع" },
        { title: "حكم منتصف الليل", sub: "إصدار حصري" },
        { title: "الدم الملكي", sub: "المجموعة الأساسية" },
        { title: "العصر الذهبي", sub: "خط ممتاز" }
      ]
    },
    featured: {
      subtitle: "الأكثر مبيعاً",
      title: "المنتجات المميزة",
      desc: "القطع الأكثر طلباً من مجموعتنا."
    },
    testimonials: {
      subtitle: "ماذا يقولون",
      title: "آراء العملاء",
      items: [
        { text: "\"قصر ليست مجرد ملابس — إنها درع للمحارب العصري. الجودة لا تضاهى والتفاصيل الذهبية أنيقة نقية.\"", author: "مسعودي طه", role: "" },
        { text: "\"عندما ارتديت هودي قصر شعرت بشيء مختلف. إنها الثقة، وزن القماش، الأسد الذهبي. فاخرة تماماً.\"", author: "بوقبال أحمد", role: "" },
        { text: "\"أخيراً، علامة تجارية تفهم معنى أزياء الشارع الفاخرة حقاً. المقاس، التشطيب، الجمالية — كل شيء في قصر يصرخ بالتميز.\"", author: "دراري سالم", role: "" }
      ],
      formTitle: "شارك تجربتك",
      namePlaceholder: "اسمك",
      textPlaceholder: "اكتب رأيك...",
      submitBtn: "إرسال",
      successMsg: "شكراً لك! تم إرسال رأيك بنجاح.",
      errorMsg: "فشل إرسال رأيك. حاول مرة أخرى."
    },
    stats: {
      customers: "عملاء سعداء",
      products: "منتجات مبتكرة",
      countries: "دول",
      rating: "متوسط التقييم"
    },
    newsletter: {
      title: "انضم إلى المملكة",
      text: "اشترك للحصول على إصدارات حصرية ووصول مبكر ومعاملة ملكية.",
      placeholder: "أدخل بريدك الإلكتروني",
      btn: "اشترك",
      disclaimer: "انضم إلى دار قصر. لا بريد مزعج، فقط ملكية."
    },
    contact: {
      subtitle: "تواصل معنا",
      title: "اتصل بنا",
      desc: "تواصل مع دار قصر. يسعدنا سماع رأيك.",
      whatsapp: "تحدث عبر واتساب",
      whatsappBtn: "واتساب",
      call: "اتصل بنا",
      location: "الموقع",
      locationVal: "الجزائر، الجزائر — قصر الملكي",
      email: "البريد الإلكتروني",
      emailVal: "qasr@gmail.com",
      phone: "الهاتف",
      phoneVal: "+971 50 8456 258"
    },
    store: {
      subtitle: "زرنا",
      title: "متجرنا",
      desc: "عش عالم قصر شخصياً في متجرنا الرئيسي.",
      name: "متجر قصر الرئيسي",
      hoursLabel: "ساعات العمل",
      address: "مول جاردن، الطابق الأرضي — شارع الموضة، الجزائر",
      hours: "السبت–الخميس: 10:00 ص – 10:00 م | الجمعة: 2:00 م – 10:00 م",
      openMap: "فتح في خرائط Google"
    },
    footer: {
      desc: "ارتدِ القوة. احكم عالمك. دار قصر — حيث تلتقي الملوكية بالشوارع.",
      quickLinks: "روابط سريعة",
      support: "الدعم",
      connect: "تواصل",
      shipping: "معلومات الشحن",
      returns: "الإرجاع والاستبدال",
      sizeGuide: "دليل المقاسات",
      faq: "الأسئلة الشائعة",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      contactSupport: "اتصل بالدعم",
      copyright: "© 2026 قصر. جميع الحقوق محفوظة. ارتدِ القوة."
    },
    checkout: {
      title: "إتمام الطلب",
      step1: "1. مراجعة الطلب",
      step2: "2. الشحن",
      step3: "3. التأكيد",
      orderSummary: "ملخص الطلب",
      customerInfo: "معلومات العميل",
      fullName: "الاسم الكامل",
      phone: "رقم الهاتف",
      wilaya: "الولاية",
      municipality: "البلدية",
      address: "العنوان (اختياري)",
      deliveryType: "نوع التوصيل",
      homeDelivery: "توصيل للمنزل",
      deliveryOffice: "توصيل للمكتب",
      notes: "ملاحظات إضافية (اختيارية)",
      productTotal: "إجمالي المنتجات",
      deliveryFee: "رسوم التوصيل",
      total: "المجموع",
      confirm: "تأكيد الطلب",
      trust1: "الدفع عند الاستلام",
      trust2: "توصيل سريع في 24–72 ساعة",
      trust3: "جودة مضمونة",
      trust4: "دعم مباشر عبر واتساب",
      success: "تم تأكيد الطلب!",
      successMsg: "شكراً لطلبك. ستتصل بك خدمة العملاء قريباً لتأكيد الطلب.",
      backHome: "العودة للرئيسية",
      emptyCart: "سلة التسوق فارغة. أضف منتجات قبل الدفع.",
      continueShopping: "مواصلة التسوق",
      loading: "جاري المعالجة..."
    },
    productCard: {
      addToBag: "أضف إلى الحقيبة"
    },
    support: {
      faq: "الأسئلة الشائعة",
      faqContent: '<div class="support-section"><div class="support-faq-item"><h4 class="support-faq-q">ما المواد المستخدمة في منتجات قصر؟</h4><p class="support-faq-a">منتجاتنا مصنوعة من مواد فاخرة من مصادر عالمية. الهودي والتيشيرت يستخدمان قطن تيري فرنسي ثقيل 240-400GSM. الجواكت الرياضية تجمع بين مزيج الصوف والساتان مع أكمام جلدية أصلية. جميع المواد مختارة للمتانة والراحة والمظهر الفاخر.</p></div><div class="support-faq-item"><h4 class="support-faq-q">كيف أعتني بمنتجات قصر؟</h4><p class="support-faq-a">للحفاظ على جودة قطع قصر: اغسل في الغسالة بماء بارد مع ألوان مماثلة، اقلب الملابس من الداخل للخارج قبل الغسيل، لا تستخدم المبيض، جفف على نار هادئة، واكوِ على الجانب العكسي. تجنب التنظيف الجاف للأقطان. للقطع الجلدية، نظف موضعياً فقط.</p></div><div class="support-faq-item"><h4 class="support-faq-q">كم تستغرق مدة التوصيل؟</h4><p class="support-faq-a">تختلف مدة التوصيل حسب الموقع. المدن الكبرى (الجزائر، وهران، قسنطينة): 24-48 ساعة. الولايات الأخرى: 48-72 ساعة. المناطق النائية قد تستغرق 3-5 أيام عمل. التوصيل السريع متاح عند الدفع برسوم إضافية.</p></div><div class="support-faq-item"><h4 class="support-faq-q">هل يمكنني تغيير أو إلغاء طلبي؟</h4><p class="support-faq-a">يمكن تعديل أو إلغاء الطلبات في غضون ساعتين من تقديم الطلب. بعد ذلك، يدخل الطلب في مرحلة المعالجة ولا يمكن تغييره. اتصل بفريق الدعم لدينا فوراً عبر واتساب للمساعدة.</p></div><div class="support-faq-item"><h4 class="support-faq-q">هل تشحنون دولياً؟</h4><p class="support-faq-a">حالياً، قصر يشحن داخل الجزائر فقط. نحن نعمل على التوسع للأسواق الدولية قريباً. تابعنا على وسائل التواصل الاجتماعي لمعرفة آخر المستجدات حول الشحن العالمي.</p></div><div class="support-faq-item"><h4 class="support-faq-q">ما طرق الدفع المقبولة؟</h4><p class="support-faq-a">نقبل الدفع عند الاستلام في جميع الولايات. التحويل البنكي متاح للطلبات الخاصة. الدفع عبر البطاقات البنكية قيد التفعيل قريباً.</p></div></div>',
      shipping: "سياسة الشحن",
      shippingContent: '<div class="support-section"><h4 class="support-subheading">نظرة عامة على التوصيل</h4><p class="support-text">قصر تقدم شحناً موثوقاً ومتتبعاً عبر جميع الولايات الـ 58 في الجزائر. نتعاون مع خدمات توصيل موثوقة لضمان وصول طلبك بأمان وفي الوقت المحدد.</p><h4 class="support-subheading">المدة الزمنية للتوصيل</h4><ul class="support-list"><li><strong>المنطقة 1 — المدن الكبرى</strong> (الجزائر، وهران، قسنطينة، عنابة، البليدة): 24-48 ساعة</li><li><strong>المنطقة 2 — الولايات الوسطى</strong>: 48-72 ساعة</li><li><strong>المنطقة 3 — الولايات الجنوبية والنائية</strong>: 3-5 أيام عمل</li></ul><h4 class="support-subheading">رسوم الشحن</h4><ul class="support-list"><li><strong>التوصيل للمنزل:</strong> 700 د.ج — سعر موحد لجميع الولايات</li><li><strong>التوصيل للمكتب:</strong> 400 د.ج — سعر مخفض للتوصيل لمكان العمل</li><li><strong>التوصيل السريع:</strong> متاح عند الدفع — رسوم إضافية</li></ul><h4 class="support-subheading">تتبع طلبك</h4><p class="support-text">بمجرد شحن طلبك، ستتلقى رسالة تأكيد عبر واتساب أو SMS مع رابط التتبع. يمكنك أيضاً تتبع طلبك بالاتصال بفريق الدعم.</p><h4 class="support-subheading">ملاحظات التوصيل</h4><ul class="support-list"><li>يتم التوصيل من الأحد إلى الخميس، 9 صباحاً — 6 مساءً</li><li>مطلوب توقيع عند الاستلام</li><li>إذا لم تكن متاحاً، سيقوم مندوب التوصيل بإعادة المحاولة في يوم العمل التالي</li><li>شحن مجاني للطلبات فوق 15,000 د.ج</li></ul></div>',
      returns: "الإرجاع والاستبدال",
      returnsContent: '<div class="support-section"><h4 class="support-subheading">سياسة الإرجاع</h4><p class="support-text">نريدك أن تحب قطع قصر. إذا لم تكن راضياً تماماً، نقبل الإرجاع في غضون 14 يوماً من التوصيل لاسترداد كامل المبلغ أو الاستبدال.</p><h4 class="support-subheading">الشروط</h4><ul class="support-list"><li>يجب أن تكون القطع غير مرتدة، غير مغسولة، وفي حالتها الأصلية</li><li>جميع العلامات والتغليف يجب أن تكون سليمة</li><li>الأحذية والإكسسوارات يجب إرجاعها في صناديقها الأصلية</li><li>قطع التخفيضات مؤهلة للاستبدال فقط، وليس الاسترداد</li></ul><h4 class="support-subheading">عملية الإرجاع</h4><ol class="support-list"><li>اتصل بفريق الدعم عبر واتساب في غضون 14 يوماً من استلام طلبك</li><li>قدم رقم طلبك والقطع التي ترغب في إرجاعها</li><li>سينسق فريقنا استلاماً من عنوانك</li><li>يتم فحص القطع عند الإرجاع — تتم معالجة المبالغ المستردة في غضون 5-7 أيام عمل</li></ol><h4 class="support-subheading">الاستبدال</h4><p class="support-text">الاستبدال لمقاس أو لون مختلف مجاني. إذا كنت ترغب في الاستبدال بقطعة مختلفة، سيتم تطبيق فرق السعر. اتصل بنا لبدء الاستبدال.</p><h4 class="support-subheading">القطع غير القابلة للإرجاع</h4><ul class="support-list"><li>القطع المميزة كبيع نهائي</li><li>القطع المخصصة أو الشخصية</li><li>الملابس الداخلية وأقنعة الوجه</li></ul></div>',
      privacy: "سياسة الخصوصية",
      privacyContent: '<div class="support-section"><h4 class="support-subheading">المعلومات التي نجمعها</h4><p class="support-text">نجمع المعلومات الشخصية التي تقدمها عند تقديم الطلب: اسمك الكامل، رقم هاتفك، عنوان التوصيل، وبريدك الإلكتروني (إن وجد). نجمع أيضاً سجل الطلبات والتفضيلات لتحسين تجربة التسوق الخاصة بك.</p><h4 class="support-subheading">كيف نستخدم معلوماتك</h4><ul class="support-list"><li>معالجة وتنفيذ طلباتك</li><li>التواصل بشأن تحديثات الطلب وتأكيدات التوصيل</li><li>تحسين منتجاتنا وخدماتنا</li><li>إرسال عروض ترويجية (فقط بموافقتك الصريحة)</li></ul><h4 class="support-subheading">حماية البيانات</h4><p class="support-text">بياناتك الشخصية مخزنة بشكل آمن ولا تتم مشاركتها مع أطراف ثالثة لأغراض تسويقية. قد نشارك المعلومات الضرورية مع شركاء التوصيل لدينا فقط لتنفيذ الطلب. جميع معاملات الدفع تتم عبر قنوات آمنة.</p><h4 class="support-subheading">حقوقك</h4><ul class="support-list"><li>طلب الوصول إلى بياناتك الشخصية</li><li>طلب تصحيح أو حذف بياناتك</li><li>سحب الموافقة على الاتصالات الترويجية في أي وقت</li></ul><h4 class="support-subheading">اتصل بنا</h4><p class="support-text">لاستفسارات الخصوصية، اتصل بنا عبر واتساب أو البريد الإلكتروني. نرد على جميع طلبات الخصوصية في غضون 48 ساعة.</p></div>',
      terms: "الشروط والأحكام",
      termsContent: '<div class="support-section"><h4 class="support-subheading">عام</h4><p class="support-text">باستخدام موقع قصر الإلكتروني وشراء منتجاتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا.</p><h4 class="support-subheading">المنتجات والأسعار</h4><ul class="support-list"><li>جميع الأسعار مدرجة بالدينار الجزائري وتشمل الضرائب المطبقة</li><li>صور المنتجات لأغراض التوضيح؛ قد تختلف الألوان الفعلية قليلاً</li><li>نحتفظ بالحق في تعديل الأسعار دون إشعار مسبق</li><li>في حالة خطأ في التسعير، سنتصل بك قبل معالجة الطلب</li></ul><h4 class="support-subheading">الطلبات</h4><ul class="support-list"><li>تقديم الطلب يشكل عرضاً للشراء</li><li>نحتفظ بالحق في قبول أو رفض أي طلب</li><li>الطلبات تخضع لتوفر المنتج</li><li>قد نتصل بك للتحقق من تفاصيل الطلب قبل المعالجة</li></ul><h4 class="support-subheading">الملكية الفكرية</h4><p class="support-text">جميع المحتويات على هذا الموقع — بما في ذلك الشعارات والتصاميم والنصوص والصور وعلامة قصر — هي ملكية حصرية لقصر. الاستخدام غير المصرح به أو النسخ أو التوزيع محظور تماماً.</p><h4 class="support-subheading">تحديد المسؤولية</h4><p class="support-text">قصر غير مسؤولة عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام منتجاتنا أو خدماتنا. إجمالي مسؤوليتنا يقتصر على سعر شراء المنتج المعني.</p></div>',
      sizeGuide: "دليل المقاسات",
      sizeGuideContent: '<div class="support-section"><p class="support-text">اعثر على مقاسك المثالي مع دليل المقاسات الشامل لدينا. القياسات بالسنتيمتر. للحصول على أنسب مقاس، قم بقياس قطعة مشابهة تمتلكها بالفعل وقارنها بمخططنا.</p><div class="size-chart-wrapper"><table class="size-chart"><thead><tr><th>المقاس</th><th>الصدر (سم)</th><th>الخصر (سم)</th><th>الطول (سم)</th><th>الكم (سم)</th></tr></thead><tbody><tr><td data-label="Size">XS</td><td data-label="Chest">86-91</td><td data-label="Waist">71-76</td><td data-label="Length">66-68</td><td data-label="Sleeve">81-84</td></tr><tr><td data-label="Size">S</td><td data-label="Chest">91-97</td><td data-label="Waist">76-81</td><td data-label="Length">68-71</td><td data-label="Sleeve">84-86</td></tr><tr><td data-label="Size">M</td><td data-label="Chest">97-102</td><td data-label="Waist">81-86</td><td data-label="Length">71-74</td><td data-label="Sleeve">86-89</td></tr><tr><td data-label="Size">L</td><td data-label="Chest">102-107</td><td data-label="Waist">86-91</td><td data-label="Length">74-76</td><td data-label="Sleeve">89-91</td></tr><tr><td data-label="Size">XL</td><td data-label="Chest">107-112</td><td data-label="Waist">91-97</td><td data-label="Length">76-79</td><td data-label="Sleeve">91-94</td></tr><tr><td data-label="Size">XXL</td><td data-label="Chest">112-117</td><td data-label="Waist">97-102</td><td data-label="Length">79-81</td><td data-label="Sleeve">94-97</td></tr></tbody></table></div><p class="support-note"><strong>نصيحة:</strong> قطعنا ذات قياس واسع/مريح. إذا كنت تفضل قياساً أنحف، نوصي باختيار مقاس أصغر. للحصول على مظهر واسع، اختر مقاساً أكبر.</p><h4 class="support-subheading">كيفية القياس</h4><ul class="support-list"><li><strong>الصدر:</strong> قس حول الجزء الأكبر من صدرك، تحت الإبطين</li><li><strong>الخصر:</strong> قس حول خط خصرك الطبيعي</li><li><strong>الطول:</strong> قس من أعلى نقطة في الكتف إلى الحافة السفلية</li><li><strong>الكم:</strong> قس من نقطة الكتف إلى طرف الكم</li></ul></div>',
      contactSupport: "اتصل بالدعم",
      contactSupportContent: '<div class="support-section"><h4 class="support-subheading">نحن هنا للمساعدة</h4><p class="support-text">فريق الدعم المخصص لدينا جاهز لمساعدتك في أي أسئلة أو استفسارات. نسعى للرد على جميع الرسائل في غضون دقائق خلال ساعات العمل.</p><div class="contact-support-cards"><div class="contact-support-card"><div class="contact-support-card-icon">💬</div><h4 class="contact-support-card-title">واتساب</h4><p class="contact-support-card-text">أسرع وقت استجابة. تحدث معنا مباشرة.</p><p class="contact-support-card-detail">+213 XXX XX XX XX</p></div><div class="contact-support-card"><div class="contact-support-card-icon">✉️</div><h4 class="contact-support-card-title">البريد الإلكتروني</h4><p class="contact-support-card-text">للاستفسارات التفصيلية والوثائق.</p><p class="contact-support-card-detail">support@qasr.dz</p></div><div class="contact-support-card"><div class="contact-support-card-icon">📞</div><h4 class="contact-support-card-title">الهاتف</h4><p class="contact-support-card-text">تحدث مباشرة مع فريقنا.</p><p class="contact-support-card-detail">الأحد–الخميس، 9 ص – 6 م</p></div></div><h4 class="support-subheading">ساعات العمل</h4><ul class="support-list"><li>الأحد – الخميس: 9:00 ص – 6:00 م</li><li>الجمعة – السبت: مغلق</li><li>قد تختلف جداول العطلات — تابعنا على إنستغرام لمعرفة آخر المستجدات</li></ul></div>'
    },
    products: {
      name1: "هودي الإمبراطور",
      name2: "تيشيرت التاج الذهبي",
      name3: "جاكيت الفارس",
      name4: "بنطلون كارغو الملكي",
      name5: "قلادة التاج",
      name6: "هودي السيادي",
      name7: "تيشيرت العاهل",
      name8: "خاتم الأسد",
      name9: "بومبر الذهبي",
      name10: "جوجر الملكي",
      name11: "كاب التاج",
      name12: "هودي الأسد المحدود",
      desc1: "مصنوع من قطن تيري فرنسي ثقيل 400GSM، يتميز هودي الإمبراطور بقصة واسعة مع أطراف سلك مطلية بالذهب وتطريز الأسد الذهبي QASR على الصدر. بيان قوة وفخامة.",
      desc2: "تيشيرت قطني ثقيل 240GSM بقصة مريحة. يتميز بطبعة أسد ذهبي كبيرة على الظهر مع شعار تاج QASR على الصدر. الأساسيات الفاخرة النهائية.",
      desc3: "جاكيت فاخر مصنوع من مزيج صوف-ساتان فاخر مع أكمام جلدية أصلية. يتميز بتطريز ذهبي معقد وبطانة ساتان بنمط QASR وأزرار مطلية بالذهب.",
      desc4: "بنطلون كارغو فاخر مصنوع من قطن تويل ثقيل بقصة مدببة حديثة. أربطة سحب برؤوس ذهبية، أزرار QASR منقوشة، وتطريز أسد ذهبي على الجيب الخلفي.",
      desc5: "سلسلة من الفولاذ المقاوم للصدأ مطلية بالذهب عيار 14 قيراط مع قلادة تاج QASR. كل قطعة مصقولة يدوياً وتصل في صندوق مخملي فاخر مع بطاقة توثيق.",
      desc6: "نسخة راقية من أزياء الشارع الفاخرة. يتميز هودي السيادي بقصة قصيرة، قطن حلقي 450GSM ثقيل، مع تطريز شعار ذهبي على الكم وعلامة منسوجة مخصصة عند الحاشية.",
      desc7: "تيشيرت Monarch هو قطعتك الأساسية الفاخرة اليومية. مصنوع من قطن بيما 260GSM بقسة منظمة، مع طبعة تاج QASR بالذهب وطوق مضلع بشريط ذهبي مميز.",
      desc8: "خاتم سيجنت جريء مصنوع من الفولاذ المقاوم للصدأ مع طلاء ذهب عيار 18 قيراط. يتميز بشعار أسد QASR بنقش بارز. مقاس قابل للتعديل مع صندوق تقديم فاخر.",
      desc9: "بومبر ساتان مبهر بلمسة ذهبية معدنية. يتميز بتطريز شعار QASR على الظهر، أكمام مضلعة بشريط ذهبي، وسحابات رأس أسد مخصصة. قطعة إصدار محدود.",
      desc10: "بنطلون جوجر فاخر من تيري فرنسي بقصة مناسبة. يتميز بأربطة سحب مسطحة برؤوس ذهبية، علامة QASR منسوجة عند الخصر، جيوب بسحاب مع سحابات ذهبية.",
      desc11: "قبعة سنابباك هيكلية فاخرة مع تطريز تاج QASR الذهبي المعدني. تتميز ببطانة ساتان داخلية، وثقوب ذهبية، وإبزيم نحاسي قابل للتعديل في الخلف.",
      desc12: "قطعتنا الأكثر حصرية. يتميز هودي الأسد محدود الإصدار بتطريز كامل لأسد QASR الذهبي على الظهر، أطراف سلك ماسية الشكل، ورقعة توثيق مرقمة. 100 قطعة فقط."
    },
    admin: {
      header: "لوحة التحكم",
      viewStore: "عرض المتجر",
      signOut: "تسجيل الخروج",
      cancel: "إلغاء",
      allCategories: "جميع الفئات",
      login: {
        title: "تسجيل الدخول للمشرفين",
        subtitle: "سجل الدخول لإدارة متجرك",
        signIn: "تسجيل الدخول",
        signingIn: "جاري تسجيل الدخول...",
        returnTo: "العودة إلى",
        store: "المتجر"
      },
      sidebar: {
        dashboard: "لوحة المعلومات",
        products: "المنتجات",
        orders: "الطلبات",
        discounts: "خصومات",
        subscribers: "المشتركين",
        categories: "الفئات",
        inbox: "الوارد",
        testimonials: "آراء العملاء",
        lookbook: "كتاب الأناقة"
      },
      dashboard: {
        welcome: "مرحباً بعودتك،",
        subtitle: "هذا ما يحدث في متجرك اليوم.",
        quickActions: "إجراءات سريعة",
        recentOrders: "أحدث الطلبات",
        manageProducts: "إدارة المنتجات",
        manageProductsDesc: "إضافة أو تعديل أو إزالة عناصر من كتالوجك",
        viewOrders: "عرض الطلبات",
        viewOrdersDesc: "تتبع ومعالجة وتنفيذ طلبات العملاء",
        discountCodes: "أكواد الخصم",
        discountCodesDesc: "إنشاء وإدارة العروض الترويجية",
        manageCategories: "إدارة الفئات",
        manageCategoriesDesc: "إضافة أو إزالة فئات المنتجات",
        manageTestimonials: "آراء العملاء",
        manageTestimonialsDesc: "مراجعة وإدارة آراء العملاء",
        manageLookbook: "كتاب الأناقة",
        manageLookbookDesc: "إدارة صور وتسميات كتاب الأناقة"
      },
      stats: {
        products: "المنتجات",
        productsSub: "إجمالي عناصر الكتالوج",
        orders: "الطلبات",
        ordersSub: "إجمالي المستلم",
        subscribers: "المشتركين",
        subscribersSub: "جمهور النشرة البريدية",
        discounts: "أكواد الخصم",
        discountsSub: "العروض النشطة",
        categories: "الفئات",
        categoriesSub: "فئات المنتجات",
        testimonials: "آراء العملاء",
        testimonialsSub: "تقييمات العملاء",
        lookbook: "صور كتاب الأناقة",
        lookbookSub: "صور المعرض"
      },
      products: {
        title: "المنتجات",
        add: "+ إضافة منتج",
        formAdd: "إضافة منتج",
        nameLabel: "اسم المنتج",
        categoryLabel: "الفئة",
        priceLabel: "السعر (د.ج)",
        sizesLabel: "المقاسات المتاحة",
        descLabel: "الوصف",
        colorsLabel: "الألوان / المتغيرات",
        save: "حفظ المنتج",
        saleOnly: "التخفيضات فقط",
        thImage: "الصورة",
        thName: "الاسم",
        thCategory: "الفئة",
        thPrice: "السعر",
        thColors: "الألوان",
        thSale: "تخفيض",
        thActions: "إجراءات"
      },
      orders: {
        title: "الطلبات",
        all: "الكل",
        pending: "قيد الانتظار",
        processing: "قيد المعالجة",
        completed: "مكتمل",
        cancelled: "ملغي"
      },
      discounts: {
        title: "أكواد الخصم",
        add: "+ إضافة كود",
        formAdd: "إضافة كود خصم",
        codeLabel: "الكود",
        percentLabel: "نسبة الخصم %",
        save: "حفظ الكود",
        thCode: "الكود",
        thDiscount: "الخصم",
        thStatus: "الحالة",
        thActions: "إجراءات"
      },
      subscribers: {
        title: "المشتركين",
        deleteAll: "حذف الكل",
        thEmail: "البريد الإلكتروني",
        thDate: "التاريخ",
        thLang: "اللغة",
        thActions: "إجراءات"
      },
      categories: {
        title: "الفئات",
        add: "+ إضافة فئة",
        formAdd: "إضافة فئة جديدة",
        idLabel: "معرف الفئة",
        labelLabel: "التسمية",
        save: "حفظ الفئة",
        thId: "المعرف",
        thLabel: "التسمية",
        thCount: "عدد المنتجات",
        thActions: "إجراءات"
      },
      inbox: {
        title: "الوارد",
        deleteAll: "حذف الكل",
        thName: "الاسم",
        thEmail: "البريد الإلكتروني",
        thMessage: "الرسالة",
        thDate: "التاريخ",
        thActions: "إجراءات"
      },
      testimonials: {
        title: "آراء العملاء",
        deleteAll: "حذف الكل",
        thAuthor: "الكاتب",
        thText: "النص",
        thDate: "التاريخ",
        thActions: "إجراءات"
      },
      lookbook: {
        title: "كتاب الأناقة",
        save: "حفظ العنصر",
        thImage: "الصورة",
        thTitle: "العنوان",
        thSubtitle: "العنوان الفرعي",
        thActions: "إجراءات"
      },
      currency: "د.ج",
      actions: {
        edit: "تعديل",
        delete: "حذف",
        view: "عرض",
        status: "الحالة",
        label: "ملصق",
        cycleStatus: "تغيير الحالة",
        deleteOrder: "حذف الطلب",
        save: "حفظ",
        cancel: "إلغاء"
      },
      status: {
        pending: "قيد الانتظار",
        processing: "قيد المعالجة",
        completed: "مكتمل",
        cancelled: "ملغي"
      },
      orderDetail: {
        status: "الحالة",
        customer: "العميل",
        delivery: "التوصيل",
        items: "العناصر",
        pricing: "التسعير",
        payment: "الدفع",
        subtotal: "المجموع الفرعي",
        discount: "الخصم",
        deliveryFee: "التوصيل",
        total: "المجموع",
        placed: "تاريخ الطلب:",
        home: "توصيل منزلي",
        office: "استلام من المكتب"
      },
      dashRecent: {
        order: "الطلب",
        customer: "العميل",
        date: "التاريخ",
        status: "الحالة",
        total: "المجموع"
      },
      empty: {
        noOrders: "لم يتم العثور على طلبات.",
        noProducts: "لا توجد منتجات تطابق معايير البحث.",
        noDiscounts: "لا توجد أكواد خصم بعد.",
        noSubscribers: "لا يوجد مشتركين بعد.",
        noMessages: "لا توجد رسائل بعد.",
        noTestimonials: "لا توجد آراء بعد.",
        noLookbook: "لا توجد عناصر في كتاب الأناقة بعد.",
        noCategories: "لم يتم العثور على فئات.",
        loadingOrders: "جاري تحميل الطلبات...",
        noOrdersYet: "لا توجد طلبات بعد.",
        failedRecent: "فشل تحميل الطلبات الحديثة.",
        errorProducts: "خطأ في تحميل المنتجات",
        errorOrders: "خطأ في تحميل الطلبات",
        errorDiscounts: "خطأ في تحميل الخصومات",
        errorSubscribers: "خطأ في تحميل المشتركين",
        errorMessages: "خطأ في تحميل الرسائل",
        errorTestimonials: "خطأ في تحميل الآراء",
        errorLookbook: "خطأ في تحميل صور كتاب الأناقة",
        errorCategories: "خطأ في تحميل الفئات"
      },
      confirm: {
        deleteProductJs: "هذا المنتج مضمن في products.js. هل تريد إزالته من عرض المشرف؟",
        deleteProductFs: "هل تريد حذف هذا المنتج من Firestore؟",
        deleteOrder: "هل تريد حذف هذا الطلب نهائياً؟",
        deleteDiscount: "هل تريد حذف كود الخصم هذا؟",
        deleteSubscriber: "هل تريد حذف هذا المشترك؟",
        deleteAllSubscribers: "هل تريد حذف جميع المشتركين؟ لا يمكن التراجع عن هذا الإجراء.",
        deleteMessage: "هل تريد حذف هذه الرسالة؟",
        deleteAllMessages: "هل تريد حذف جميع رسائل الوارد؟ لا يمكن التراجع عن هذا الإجراء.",
        deleteTestimonial: "هل تريد حذف هذا الرأي؟",
        deleteAllTestimonials: "هل تريد حذف جميع الآراء؟ لا يمكن التراجع عن هذا الإجراء.",
        deleteLookbook: "هل تريد حذف هذا العنصر من كتاب الأناقة؟",
        deleteCategory: 'هل تريد حذف الفئة "{id}"؟'
      },
      form: {
        namePriceRequired: "الاسم والسعر مطلوبان",
        codePercentRequired: "الكود والنسبة المئوية مطلوبان",
        idLabelRequired: "المعرف والتسمية مطلوبان",
        categoryExists: "فئة بهذا المعرف موجودة بالفعل",
        editProductTitle: "تعديل المنتج",
        editHardcodedTitle: "تعديل منتج مضمن — سيتم الحفظ في Firestore",
        addProductTitle: "إضافة منتج",
        addDiscountTitle: "إضافة كود خصم",
        editDiscountTitle: "تعديل كود الخصم",
        addCategoryTitle: "إضافة فئة جديدة"
      },
      misc: {
        unknown: "غير معروف",
        hardcoded: "(مضمن)",
        active: "نشط",
        inactive: "غير نشط",
        products: "منتجات",
        product: "منتج",
        cashOnDelivery: "الدفع عند الاستلام",
        saving: "جاري الحفظ...",
        error: "خطأ:",
        errorAllSubscribers: "خطأ في حذف جميع المشتركين:",
        errorAllMessages: "خطأ في حذف جميع الرسائل:",
        errorAllTestimonials: "خطأ في حذف جميع الآراء:",
        errorSavingLookbook: "خطأ في حفظ عنصر كتاب الأناقة:",
        errorDeletingLookbook: "خطأ في حذف عنصر كتاب الأناقة:"
      }
    }
  }
};


let currentLang = 'en';

function getText(key) {
  const keys = key.split('.');
  let val = translations[currentLang];
  for (const k of keys) {
    if (val && val[k] !== undefined) val = val[k];
    else return key;
  }
  return val;
}
