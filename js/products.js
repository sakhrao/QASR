var products = [
  {
    id: 1,
    name: "Imperial Hoodie",
    category: "hoodie",
    price: 8500,
    description: "Crafted from heavyweight 400GSM French terry cotton, the Imperial Hoodie features an oversized fit with gold-plated drawstring tips and the signature QASR golden lion embroidery on the chest. A statement of power and luxury.",
    priceEn: "Crafted from heavyweight 400GSM French terry cotton, the Imperial Hoodie features an oversized fit with gold-plated drawstring tips and the signature QASR golden lion embroidery on the chest. A statement of power and luxury.",
    priceAr: "مصنوع من قطن تيري فرنسي ثقيل 400GSM، يتميز هودي الإمبراطور بقصة واسعة مع أطراف سلك مطلية بالذهب وتطريز الأسد الذهبي QASR على الصدر. بيان قوة وفخامة.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#00001",
        thumb: "images/products/hoodies/imperial-hoodie-black.jpg",
        images: [
          "images/products/hoodies/imperial-hoodie-black.jpg"
        ]
      },
      {
        name: "White",
        hex: "#fff",
        thumb: "images/products/hoodies/imperial-hoodie-white.jpg",
        images: [
          "images/products/hoodies/imperial-hoodie-white.jpg"
        ]
      },
      {
        name: "Pink",
        hex: "#FFC0CB",
        thumb: "images/products/hoodies/imperial-hoodie-pink.jpg",
        images: [
          "images/products/hoodies/imperial-hoodie-pink.jpg"
        ]
      }
    ],
    sale: true,
    discountPercent: 20,
    featured: true
  },
  {
    id: 2,
    name: "Gold Crown T-shirt",
    category: "tshirt",
    price: 3500,
    description: "Premium 240GSM heavyweight cotton t-shirt with a relaxed fit. Features an oversized golden lion print across the back with a subtle QASR crown logo on the chest. The ultimate luxury essential.",
    priceEn: "Premium 240GSM heavyweight cotton t-shirt with a relaxed fit. Features an oversized golden lion print across the back with a subtle QASR crown logo on the chest. The ultimate luxury essential.",
    priceAr: "تيشيرت قطني ثقيل 240GSM بقصة مريحة. يتميز بطبعة أسد ذهبي كبيرة على الظهر مع شعار تاج QASR على الصدر. الأساسيات الفاخرة النهائية.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Pure Black",
        hex: "#000000",
        thumb: "images/products/tshirts/crown-tshirt-black.jpg",
        images: [
          "images/products/tshirts/crown-tshirt-black.jpg"
        ]
      },
      {
        name: "White",
        hex: "#fff",
        thumb: "images/products/tshirts/crown-tshirt-white.jpg",
        images: [
          "images/products/tshirts/crown-tshirt-white.jpg"
        ]
      },
      {
        name: "Green",
        hex: "#006039",
        thumb: "images/products/tshirts/crown-tshirt-green.jpg",
        images: [
          "images/products/tshirts/crown-tshirt-green.jpg"
        ]
      }
    ],
    featured: true
  },
  {
    id: 3,
    name: "Lion's Mane Jacket",
    category: "jacket",
    price: 12000,
    description: "A luxury varsity jacket constructed from premium wool-satin blend with genuine leather sleeves. Features intricate gold embroidery, satin lining with the QASR monogram pattern, and custom gold-plated snap buttons.",
    priceEn: "A luxury varsity jacket constructed from premium wool-satin blend with genuine leather sleeves. Features intricate gold embroidery, satin lining with the QASR monogram pattern, and custom gold-plated snap buttons.",
    priceAr: "جاكيت فاخر مصنوع من مزيج صوف-ساتان فاخر مع أكمام جلدية أصلية. يتميز بتطريز ذهبي معقد وبطانة ساتان بنمط QASR وأزرار مطلية بالذهب.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "Onyx Black",
        hex: "#050505",
        thumb: "images/products/jackets/lions-jacket-black.jpg",
        images: [
          "images/products/jackets/lions-jacket-black.jpg"
        ]
      },
      {
        name: "Deep Red",
        hex: "#690606",
        thumb: "images/products/jackets/lions-jacket-red.jpg",
        images: [
          "images/products/jackets/lions-jacket-red.jpg"
        ]
      }
    ],
    featured: true
  },
  {
    id: 4,
    name: "Regent Cargo Pants",
    category: "pants",
    price: 6000,
    description: "Premium cargo pants crafted from heavyweight cotton twill with a modern tapered fit. Gold-tipped drawstrings, embossed QASR snap buttons, and subtle golden lion embroidery at the back pocket.",
    priceEn: "Premium cargo pants crafted from heavyweight cotton twill with a modern tapered fit. Gold-tipped drawstrings, embossed QASR snap buttons, and subtle golden lion embroidery at the back pocket.",
    priceAr: "بنطلون كارغو فاخر مصنوع من قطن تويل ثقيل بقصة مدببة حديثة. أربطة سحب برؤوس ذهبية، أزرار QASR منقوشة، وتطريز أسد ذهبي على الجيب الخلفي.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Phantom Black",
        hex: "#0d0d0d",
        thumb: "images/products/pants/cargo-pant-black.jpg",
        images: [
          "images/products/pants/cargo-pant-black.jpg"
        ]
      },
      {
        name: "Dark Grey",
        hex: "#4A4A4A",
        thumb: "images/products/pants/cargo-pant-grey.jpg",
        images: [
          "images/products/pants/cargo-pant-grey.jpg"
        ]
      },
      
    ],
    sale: true,
    discountPercent: 15,
    featured: true
  },
  {
    id: 5,
    name: "Crown Cap",
    category: "accessory",
    price: 5000,
    description: "A meticulously crafted 14K gold-plated stainless steel chain featuring the QASR crown pendant. Each piece is hand-finished and arrives in a premium velvet box with authentication card.",
    priceEn: "A meticulously crafted 14K gold-plated stainless steel chain featuring the QASR crown pendant. Each piece is hand-finished and arrives in a premium velvet box with authentication card.",
    priceAr: "سلسلة من الفولاذ المقاوم للصدأ مطلية بالذهب عيار 14 قيراط مع قلادة تاج QASR. كل قطعة مصقولة يدوياً وتصل في صندوق مخملي فاخر مع بطاقة توثيق.",
    sizes: ["One Size"],
    colors: [
      {
        name: "Dark Blue",
        hex: "#152238",
        thumb: "images/products/pantss/crown-cap-black.jpg",
        images: [
          "images/products/caps/crown-cap-black.jpg"
        ]
      },
      {
        name: "Red",
        hex: "#690606",
        thumb: "images/products/caps/crown-cap-red.jpg",
        images: [
          "images/products/caps/crown-cap-red.jpg"
        ]
      },
      {
        name: "Green",
        hex: "#006039",
        thumb: "images/products/caps/crown-cap-green.jpg",
        images: [
          "images/products/caps/crown-cap-green.jpg"
        ]
      }
    ],
    featured: true
  },
  
  /** 
  {
    id: 6,
    name: "Sovereign Hoodie",
    category: "hoodie",
    price: 39000,
    description: "An elevated take on streetwear luxury. The Sovereign Hoodie features a cropped fit, heavy weight 450GSM loopwheel cotton, with an embroidered gold crest on the sleeve and a custom woven label at the hem.",
    priceEn: "An elevated take on streetwear luxury. The Sovereign Hoodie features a cropped fit, heavy weight 450GSM loopwheel cotton, with an embroidered gold crest on the sleeve and a custom woven label at the hem.",
    priceAr: "نسخة راقية من أزياء الشارع الفاخرة. يتميز هودي السيادي بقصة قصيرة، قطن حلقي 450GSM ثقيل، مع تطريز شعار ذهبي على الكم وعلامة منسوجة مخصصة عند الحاشية.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "Obsidian",
        hex: "#080808",
        thumb: "",
        images: [
          "https://placehold.co/600x750/080808/D4AF37?text=QASR+Sovereign+Black&font=montserrat"
        ]
      },
      {
        name: "Ivory",
        hex: "#e8e0d0",
        thumb: "",
        images: [
          "https://placehold.co/600x750/e8e0d0/000000?text=QASR+Sovereign+Ivory&font=montserrat"
        ]
      }
    ],
    featured: false
  },
  {
    id: 7,
    name: "Monarch Tee",
    category: "tshirt",
    price: 14000,
    description: "The Monarch Tee is your everyday luxury staple. Made from 260GSM Pima cotton with a structured fit, featuring a gold foil QASR crown print and ribbed collar with gold signature stripe.",
    priceEn: "The Monarch Tee is your everyday luxury staple. Made from 260GSM Pima cotton with a structured fit, featuring a gold foil QASR crown print and ribbed collar with gold signature stripe.",
    priceAr: "تيشيرت Monarch هو قطعتك الأساسية الفاخرة اليومية. مصنوع من قطن بيما 260GSM بقسة منظمة، مع طبعة تاج QASB بالذهب وطوق مضلع بشريط ذهبي مميز.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        thumb: "",
        images: [
          "https://placehold.co/600x750/000000/D4AF37?text=QASR+Monarch+Black&font=montserrat"
        ]
      },
      {
        name: "White",
        hex: "#ffffff",
        thumb: "",
        images: [
          "https://placehold.co/600x750/ffffff/D4AF37?text=QASR+Monarch+White&font=montserrat"
        ]
      }
    ],
    featured: false
  },
  {
    id: 8,
    name: "Royal Crest Ring",
    category: "accessory",
    price: 28000,
    description: "A bold signet ring crafted from surgical-grade stainless steel with 18K gold plating. Features the QASR lion crest in high relief. Adjustable sizing with premium presentation box.",
    priceEn: "A bold signet ring crafted from surgical-grade stainless steel with 18K gold plating. Features the QASR lion crest in high relief. Adjustable sizing with premium presentation box.",
    priceAr: "خاتم سيجنت جريء مصنوع من الفولاذ المقاوم للصدأ مع طلاء ذهب عيار 18 قيراط. يتميز بشعار أسد QASR بنقش بارز. مقاس قابل للتعديل مع صندوق تقديم فاخر.",
    sizes: ["S", "M", "L"],
    colors: [
      {
        name: "Gold",
        hex: "#D4AF37",
        thumb: "",
        images: [
          "https://placehold.co/600x750/D4AF37/000000?text=QASR+Ring+Gold&font=montserrat"
        ]
      },
      {
        name: "Black Onyx",
        hex: "#0d0d0d",
        thumb: "",
        images: [
          "https://placehold.co/600x750/0d0d0d/D4AF37?text=QASR+Ring+Onyx&font=montserrat"
        ]
      }
    ],
    featured: false
  },
  {
    id: 9,
    name: "Empire Bomber Jacket",
    category: "jacket",
    price: 98000,
    description: "A showstopping satin bomber with gold metallic finish. Features embroidered QASR crest on back, ribbed cuffs with gold stripe, and custom lion head zip pullers. Limited edition piece.",
    priceEn: "A showstopping satin bomber with gold metallic finish. Features embroidered QASR crest on back, ribbed cuffs with gold stripe, and custom lion head zip pullers. Limited edition piece.",
    priceAr: "بومبر ساتان مبهر بلمسة ذهبية معدنية. يتميز بتطريز شعار QASR على الظهر، أكمام مضلعة بشريط ذهبي، وسحابات رأس أسد مخصصة. قطعة إصدار محدود.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "Gold",
        hex: "#D4AF37",
        thumb: "",
        images: [
          "https://placehold.co/600x750/D4AF37/000000?text=QASR+Bomber+Gold&font=montserrat"
        ]
      },
      {
        name: "Black",
        hex: "#050505",
        thumb: "",
        images: [
          "https://placehold.co/600x750/050505/D4AF37?text=QASR+Bomber+Black&font=montserrat"
        ]
      }
    ],
    featured: true
  },
  {
    id: 10,
    name: "Throne Joggers",
    category: "pants",
    price: 25000,
    description: "Premium french terry joggers with a tailored fit. Features gold tipped flat drawstrings, woven QASR label at back waist, zippered pockets with gold pullers, and ribbed cuffs with gold stripe detail.",
    priceEn: "Premium french terry joggers with a tailored fit. Features gold tipped flat drawstrings, woven QASR label at back waist, zippered pockets with gold pullers, and ribbed cuffs with gold stripe detail.",
    priceAr: "بنطلون جوجر فاخر من تيري فرنسي بقصة مناسبة. يتميز بأربطة سحب مسطحة برؤوس ذهبية، علامة QASR منسوجة عند الخصر، جيوب بسحاب مع سحابات ذهبية.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Black",
        hex: "#0a0a0a",
        thumb: "",
        images: [
          "https://placehold.co/600x750/0a0a0a/D4AF37?text=QASR+Joggers+Black&font=montserrat"
        ]
      },
      {
        name: "Grey",
        hex: "#1a1a1a",
        thumb: "",
        images: [
          "https://placehold.co/600x750/1a1a1a/D4AF37?text=QASR+Joggers+Grey&font=montserrat"
        ]
      }
    ],
    featured: false
  },
  {
    id: 11,
    name: "Crown Snapback",
    category: "accessory",
    price: 11000,
    description: "Premium structured snapback cap with gold metallic QASR crown embroidery. Features satin inner lining, gold eyelets, and adjustable brass buckle closure at back.",
    priceEn: "Premium structured snapback cap with gold metallic QASR crown embroidery. Features satin inner lining, gold eyelets, and adjustable brass buckle closure at back.",
    priceAr: "قبعة سنابباك هيكلية فاخرة مع تطريز تاج QASR الذهبي المعدني. تتميز ببطانة ساتان داخلية، وثقوب ذهبية، وإبزيم نحاسي قابل للتعديل في الخلف.",
    sizes: ["One Size"],
    colors: [
      {
        name: "Black",
        hex: "#000000",
        thumb: "",
        images: [
          "https://placehold.co/600x750/000000/D4AF37?text=QASR+Cap+Black&font=montserrat"
        ]
      },
      {
        name: "White",
        hex: "#ffffff",
        thumb: "",
        images: [
          "https://placehold.co/600x750/ffffff/D4AF37?text=QASR+Cap+White&font=montserrat"
        ]
      }
    ],
    featured: false
  },
  {
    id: 12,
    name: "Limited Edition Lion Hoodie",
    category: "hoodie",
    price: 46000,
    description: "Our most exclusive piece. The Limited Edition Lion Hoodie features a full back embroidery of the QASR golden lion, diamond-cut gold drawstring tips, and a numbered authentication patch. Only 100 pieces made.",
    priceEn: "Our most exclusive piece. The Limited Edition Lion Hoodie features a full back embroidery of the QASR golden lion, diamond-cut gold drawstring tips, and a numbered authentication patch. Only 100 pieces made.",
    priceAr: "قطعتنا الأكثر حصرية. يتميز هودي الأسد محدود الإصدار بتطريز كامل لأسد QASR الذهبي على الظهر، أطراف سلك ماسية الشكل، ورقعة توثيق مرقمة. 100 قطعة فقط.",
    sizes: ["M", "L", "XL"],
    colors: [
      {
        name: "Phantom Black",
        hex: "#050505",
        thumb: "",
        images: [
          "https://placehold.co/600x750/050505/D4AF37?text=QASR+Limited+Black&font=montserrat"
        ]
      },
      {
        name: "Royal Purple",
        hex: "#1a0520",
        thumb: "",
        images: [
          "https://placehold.co/600x750/1a0520/D4AF37?text=QASR+Limited+Purple&font=montserrat"
        ]
      }
    ],
    featured: true
  } */
  
  {
    id: 13,
    name: "Rolled Hat",
    category: "accessory",
    price: 89000,
    description: "A meticulously crafted 14K gold-plated stainless steel chain featuring the QASR crown pendant. Each piece is hand-finished and arrives in a premium velvet box with authentication card.",
    priceEn: "A meticulously crafted 14K gold-plated stainless steel chain featuring the QASR crown pendant. Each piece is hand-finished and arrives in a premium velvet box with authentication card.",
    priceAr: "سلسلة من الفولاذ المقاوم للصدأ مطلية بالذهب عيار 14 قيراط مع قلادة تاج QASR. كل قطعة مصقولة يدوياً وتصل في صندوق مخملي فاخر مع بطاقة توثيق.",
    sizes: ["One Size"],
    colors: [
      {
        name: "Black",
        hex: "#00000",
        thumb: "images/products/hats/rolled-hat-black.jpg",
        images: [
          "images/products/hats/rolled-hat-black.jpg"
        ]
      },
      {
        name: "Dark Grey",
        hex: "#4A4A4A",
        thumb: "images/products/hats/rolled-hat-grey.jpg",
        images: [
          "images/products/hats/rolled-hat-grey.jpg"
        ]
      }
    ],
    featured: true
  },
];
