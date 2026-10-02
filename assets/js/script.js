/* ===========================================================
   KASHI CARPETS — Interactive JavaScript
   Owner: Mr. Mahender Kumar Jaiswal | Bhadohi, U.P.
   Phone: +91 7068983826
   =========================================================== */

// ---------- Owner / Business Config (single source of truth) ----------
const BUSINESS = {
  owner: 'Mr. Mahender Kumar Jaiswal',
  location: 'Bhadohi, Uttar Pradesh, India',
  phone: '+91 7068983826',
  phoneRaw: '917068983826',
  email: 'manishjaibhadohi@gmail.com',
  address: 'Adharpur Pipris, Bhadohi, Sant Ravidas Nagar, Uttar Pradesh 221401',
  instagram: 'https://www.instagram.com/kashi_carpets_bhadohi'
};

const translations = {
  en: {
    languageLabel: 'Language',
    topbarMessage: '✨ Handcrafted wool rugs from Bhadohi — for homes & offices that deserve elegance.',
    aboutTopbar: '✨ Crafted in Bhadohi. Styled for timeless spaces.',
    productsTopbar: '✨ Browse handcrafted rugs — custom orders always welcome.',
    contactTopbar: '✨ We reply to every enquiry personally — usually within a few hours.',
    brandSub: 'Crafted in Bhadohi',
    navHome: 'Home',
    navAbout: 'About',
    navProducts: 'Products',
    navContact: 'Contact',
    getQuote: 'Get Quote',
    viewProducts: 'View Products',
    customOrdersLink: '📩 Ask for custom orders',
    customQuoteBtn: 'Get Custom Quote',
    whatsappBtn: '💬 WhatsApp',
    heroBadge: 'Premium Wool Rugs · Home & Office',
    heroTitle: 'Weaving warmth into every <span class="accent">home</span> from the looms of Bhadohi.',
    heroText: 'For generations, the town of Bhadohi has been the heart of India\'s carpet craft. Kashi Carpets carries that legacy forward — hand-knotted wool rugs designed for modern living rooms, luxurious offices, and timeless interiors.',
    exploreCollection: 'Explore Collection →',
    ourStoryBtn: 'Our Story',
    ourStory: 'Our Story',
    productsEyebrow: 'Our Products',
    productsTitle: 'Authentic Tibetan Carpets, hand-knotted with heart.',
    productsIntro: 'Explore Kashi Carpets\' curated collection of genuine Tibetan carpets — woven in the timeless Himalayan tradition using 100% pure wool. Perfect for living rooms, bedrooms, offices, and gifting. Reach out for custom sizes and designs.',
    featuredCatalogue: 'Featured Catalogue',
    filterHint: 'Filter the collection by usage or accent style.',
    filterAll: 'All',
    filterHome: 'Home',
    filterOffice: 'Office',
    filterSignature: 'Signature',
    filterLuxury: 'Luxury',
    product1Name: 'Tibetan Heritage Carpet',
    product1Desc: 'A beautifully crafted Tibetan-style carpet featuring traditional auspicious motifs and three central longevity symbols. Designed with rich Himalayan-inspired patterns and warm earthy tones.',
    product1Spec1: '✨ Hand-Knotted Pure Wool',
    product1Spec2: '✨ Longevity & Auspicious Motifs',
    product1Spec3: '✨ Handcrafted in Bhadohi',
    product1Badge: 'Tibetan',
    product1BadgeAlt: 'Signature',
    product2Name: 'Tibetan Medallion Carpet',
    product2Desc: 'A classic Tibetan carpet adorned with traditional medallion patterns and geometric borders. Woven with dense pure wool pile for a rich, luxurious feel underfoot.',
    product2Spec1: '✨ Dense Pure Wool Pile',
    product2Spec2: '✨ Vibrant Tibetan Colour Palette',
    product2Spec3: '✨ Resilient High-Traffic Weave',
    product2Badge: 'Tibetan',
    product2BadgeAlt: 'Office',
    product3Name: 'Royal Tibetan Signature Carpet',
    product3Desc: 'A prestigious Tibetan carpet showcasing Himalayan weaving heritage — intricate dragon and phoenix motifs on heirloom-grade wool, rich in texture and cultural significance.',
    product3Spec1: '✨ Heirloom-Grade Tibetan Wool',
    product3Spec2: '✨ Dragon & Phoenix Motifs',
    product3Spec3: '✨ Hand-Tailored Fringe Borders',
    product3Badge: 'Luxury',
    product3BadgeAlt: 'Signature',
    product4Name: 'Tibetan Everyday Carpet',
    product4Desc: 'Affordable and artful — an authentic Tibetan carpet woven with durable pure wool for daily use. Brings Himalayan craftsmanship into any space without compromise.',
    product4Spec1: '✨ Durable Pure Wool Pile',
    product4Spec2: '✨ Easy Care & Long-Lasting',
    product4Spec3: '✨ Ideal for High-Traffic Areas',
    product4Badge: 'Tibetan',
    product4BadgeAlt: 'Office',
    product5Name: 'Tibetan Artisan Collection',
    product5Desc: 'Hand-knotted from premium wool, this showcase carpet blends intricate traditional motifs with high durability—tailored for upscale residences and luxury hospitality settings.',
    product5Spec1: '✨ Hand-Knotted by Master Weavers',
    product5Spec2: '✨ Premium Mountain Wool',
    product5Spec3: '✨ Custom Sizes & Dimensions Available',
    product5Badge: 'Luxury',
    product5BadgeAlt: 'Signature',
  },
  hi: {
    languageLabel: 'भाषा',
    topbarMessage: '✨ भदोही की हस्तनिर्मित ऊन कालीनें — जो आपके घर और कार्यालय को सुंदरता देती हैं।',
    aboutTopbar: '✨ भदोही में निर्मित। सदियों तक चलने वाली सुंदरता के लिए।',
    productsTopbar: '✨ हस्तनिर्मित कालीन देखें — कस्टम ऑर्डर हमेशा उपलब्ध है।',
    contactTopbar: '✨ हम हर प्रश्न का जवाब व्यक्तिगत रूप से देते हैं — आमतौर पर कुछ घंटों में।',
    brandSub: 'भदोही में निर्मित',
    navHome: 'होम',
    navAbout: 'हमारे बारे में',
    navProducts: 'उत्पाद',
    navContact: 'संपर्क',
    getQuote: 'कोटेशन लें',
    viewProducts: 'उत्पाद देखें',
    customOrdersLink: '📩 कस्टम ऑर्डर पूछें',
    customQuoteBtn: 'कस्टम कोटेशन लें',
    whatsappBtn: '💬 व्हाट्सऐप',
    heroBadge: 'प्रीमियम ऊन कालीन · घर और कार्यालय',
    heroTitle: 'भदोही के बुनकरों की मेहनत से हर <span class="accent">घर</span> में गर्माहट बुनते हैं।',
    heroText: 'दशकों से भदोही भारत की कालीन कला का केंद्र रहा है। काशी कारपेट्स इस विरासत को आगे बढ़ाता है — आधुनिक जीवनशैली के लिए हाथ से बुने हुए ऊन कालीन, शानदार ऑफिस और शाश्वत इंटीरियर के लिए डिज़ाइन किए गए।',
    exploreCollection: 'कलेक्शन देखें →',
    ourStoryBtn: 'हमारी कहानी',
    ourStory: 'हमारी कहानी',
    productsEyebrow: 'हमारे उत्पाद',
    productsTitle: 'सत्यिक तिब्बती कालीनें, मन से हाथ से बुनी हुई।',
    productsIntro: 'काशी कारपेट्स की असली तिब्बती कालीनों की क्यूरेटेड कलेक्शन देखें — शाश्वत हिमालयी परंपरा में 100% शुद्ध ऊन से बुनी गई। लिविंग रूम, बेडरूम, ऑफिस और उपहार के लिए बिल्कुल सही। कस्टम साइज़ और डिज़ाइन के लिए हमसे संपर्क करें।',
    featuredCatalogue: 'फीचर्ड कैटलॉग',
    filterHint: 'उपयोग या स्टाइल के अनुसार कलेक्शन फ़िल्टर करें।',
    filterAll: 'सभी',
    filterHome: 'घर',
    filterOffice: 'कार्यालय',
    filterSignature: 'सिग्नेचर',
    filterLuxury: 'लक्ज़री',
    product1Name: 'तिब्बती हेरिटेज कार्पेट',
    product1Desc: 'एक सुंदर तिब्बती स्टाइल की कालीन जिसमें परंपरागत शुभ प्रतीक और तीन केंद्रीय दीर्घायु चिन्ह शामिल हैं। समृद्ध हिमालयी प्रेरित पैटर्न और गर्म मिट्टी जैसे रंगों के साथ डिज़ाइन की गई है।',
    product1Spec1: '✨ हाथ से बुना गया शुद्ध ऊन',
    product1Spec2: '✨ दीर्घायु और शुभ प्रतीक',
    product1Spec3: '✨ भदोही में हस्तनिर्मित',
    product1Badge: 'तिब्बती',
    product1BadgeAlt: 'सिग्नेचर',
    product2Name: 'तिब्बती मेडलेशन कार्पेट',
    product2Desc: 'एक क्लासिक तिब्बती कालीन जिसमें परंपरागत मेडलेशन पैटर्न और ज्यामितीय बॉर्डर हैं। घने शुद्ध ऊन के साथ बुनी गई, जिससे नीचे चलने पर समृद्ध और लक्ज़री एहसास होता है।',
    product2Spec1: '✨ घना शुद्ध ऊन',
    product2Spec2: '✨ जीवंत तिब्बती रंग पैलेट',
    product2Spec3: '✨ टिकाऊ उच्च-यातायात बुना हुआ',
    product2Badge: 'तिब्बती',
    product2BadgeAlt: 'कार्यालय',
    product3Name: 'रॉयल तिब्बती सिग्नेचर कार्पेट',
    product3Desc: 'एक प्रतिष्ठित तिब्बती कालीन जो हिमालयन बुनाई विरासत को दर्शाती है — विरासत-ग्रेड ऊन पर जटिल ड्रैगन और फीनिक्स पैटर्न, बनावट और सांस्कृतिक महत्व से भरपूर।',
    product3Spec1: '✨ विरासत-ग्रेड तिब्बती ऊन',
    product3Spec2: '✨ ड्रैगन और फीनिक्स पैटर्न',
    product3Spec3: '✨ हाथ से सिलवटदार फर बॉर्डर',
    product3Badge: 'लक्ज़री',
    product3BadgeAlt: 'सिग्नेचर',
    product4Name: 'तिब्बती इव्रीडे कार्पेट',
    product4Desc: 'सस्ती और सुंदर — एक असली तिब्बती कालीन जो दैनिक उपयोग के लिए टिकाऊ शुद्ध ऊन से बुनी गई है। हिमालयी कारीगरी को किसी भी स्थान में बिना समझौते के लाती है।',
    product4Spec1: '✨ टिकाऊ शुद्ध ऊन',
    product4Spec2: '✨ आसान रखरखाव और लंबी आयु',
    product4Spec3: '✨ हाई-ट्रैफिक क्षेत्रों के लिए आदर्श',
    product4Badge: 'तिब्बती',
    product4BadgeAlt: 'कार्यालय',
    product5Name: 'तिब्बती आर्टिसन कलेक्शन',
    product5Desc: 'प्रीमियम ऊन से हाथ से बुनी गई यह शोकेस कालीन जटिल परंपरागत आकृतियों को उच्च मजबूती के साथ जोड़ती है—उच्च श्रेणी के निवास और लक्ज़री आतिथ्य स्थल के लिए तैयार की गई।',
    product5Spec1: '✨ मास्टर वैवर द्वारा हाथ से बुना गया',
    product5Spec2: '✨ प्रीमियम माउंटेन ऊन',
    product5Spec3: '✨ कस्टम साइज़ और डाइमेंशन उपलब्ध',
    product5Badge: 'लक्ज़री',
    product5BadgeAlt: 'सिग्नेचर',
  }
};

function getStoredLanguage() {
  const saved = localStorage.getItem('kashiLanguage');
  return saved && translations[saved] ? saved : 'en';
}

function applyTranslations() {
  const lang = getStoredLanguage();
  const dict = translations[lang] || translations.en;
  const langSelect = document.getElementById('language-switcher');

  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(node => {
    const key = node.dataset.i18nHtml;
    if (dict[key]) {
      node.innerHTML = dict[key];
    }
  });

  if (langSelect) {
    langSelect.value = lang;
  }
}

function setupLanguageSwitcher() {
  const langSelect = document.getElementById('language-switcher');
  if (!langSelect) return;

  langSelect.addEventListener('change', (event) => {
    const lang = event.target.value;
    localStorage.setItem('kashiLanguage', lang);
    applyTranslations();
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    renderFeatured();
    renderProducts(activeFilter);
  });

  const initial = getStoredLanguage();
  langSelect.value = initial;
  applyTranslations();
}

applyTranslations();
setupLanguageSwitcher();

// ---------- Product Catalogue ----------
const products = [
  {
    id: 1,
    name: 'Imperial Dragon & Phoenix Rug',
    price: '₹8,500',
    oldPrice: '',
    off: 'For 2 Pieces',
    size: '2 Pieces',
    type: 'Hand-Knotted Rug',
    fabric: 'Premium Wool',
    idealFor: 'Traditional',
    code: 'KC-DRG01',
    category: 'luxury',
    accent: 'signature',
    badge: 'Bestseller',
    image: 'assets/images/3.jpeg',
    description: 'A vibrant Tibetan-style rug featuring a powerful dragon and graceful phoenix surrounded by traditional clouds and colorful auspicious motifs. The rich black background and multicolor design create a bold traditional Himalayan look.',
    translations: {
      en: {
        name: 'Imperial Dragon & Phoenix Rug',
        description: 'A vibrant Tibetan-style rug featuring a powerful dragon and graceful phoenix surrounded by traditional clouds and colorful auspicious motifs. The rich black background and multicolor design create a bold traditional Himalayan look.',
        badge: 'Bestseller',
        type: 'Hand-Knotted Rug',
        fabric: 'Premium Wool',
        idealFor: 'Traditional',
        priceLabel: 'Price',
        codeLabel: 'Code',
        enquire: 'Enquire on WhatsApp',
        call: 'Call'
      },
      hi: {
        name: 'इम्पीरियल ड्रैगन एंड फीनिक्स रग',
        description: 'एक जीवंत तिब्बती-स्टाइल रग जिसमें शक्तिशाली ड्रैगन और सुंदर फीनिक्स पारंपरिक बादलों और रंगीन शुभ प्रतीकों से घिरे हुए हैं। समृद्ध काला बैकग्राउंड और बहुरंगी डिजाइन इसे बोल्ड टाइबैटन हिमालयी लुक देता है।',
        badge: 'बेस्टसेलर',
        type: 'हैंड-नॉटेड रग',
        fabric: 'प्रीमियम ऊन',
        idealFor: 'पारंपरिक',
        priceLabel: 'कीमत',
        codeLabel: 'कोड',
        enquire: 'व्हाट्सऐप पर पूछें',
        call: 'कॉल करें'
      }
    }
  },
  {
    id: 2,
    name: 'Tibetan Three Medallion Heritage Rug',
    price: '₹8,500',
    oldPrice: '',
    off: 'For 2 Pieces',
    size: '2 Pieces',
    type: 'Hand-Knotted Rug',
    fabric: 'Premium Wool',
    idealFor: 'Traditional Design',
    code: 'KC-MED02',
    category: 'home',
    accent: 'signature',
    badge: 'Classic',
    image: 'assets/images/5.jpeg',
    description: 'A traditional Tibetan-style carpet featuring three beautifully detailed central medallions with geometric and auspicious motifs. The warm brown base and multicolor border give this rug a classic handcrafted appearance.',
    translations: {
      en: {
        name: 'Tibetan Three Medallion Heritage Rug',
        description: 'A traditional Tibetan-style carpet featuring three beautifully detailed central medallions with geometric and auspicious motifs. The warm brown base and multicolor border give this rug a classic handcrafted appearance.',
        badge: 'Classic',
        type: 'Hand-Knotted Rug',
        fabric: 'Premium Wool',
        idealFor: 'Traditional Design',
        priceLabel: 'Price',
        codeLabel: 'Code',
        enquire: 'Enquire on WhatsApp',
        call: 'Call'
      },
      hi: {
        name: 'तिब्बती थ्री मेडलेशन हेरिटेज रग',
        description: 'एक पारंपरिक तिब्बती-स्टाइल कार्पेट जिसमें तीन सुंदर और विस्तृत केंद्रीय मेडलेशन ज्यामितीय और शुभ प्रतीकों के साथ दिखाए गए हैं। गर्म भूरा आधार और बहुरंगी बॉर्डर इस रग को क्लासिक हैंडक्राफ्टेड रूप देते हैं।',
        badge: 'क्लासिक',
        type: 'हैंड-नॉटेड रग',
        fabric: 'प्रीमियम ऊन',
        idealFor: 'पारंपरिक डिज़ाइन',
        priceLabel: 'कीमत',
        codeLabel: 'कोड',
        enquire: 'व्हाट्सऐप पर पूछें',
        call: 'कॉल करें'
      }
    }
  },
  {
    id: 3,
    name: 'Himalayan Geometric Heritage Rug',
    price: '₹8,500',
    oldPrice: '',
    off: 'For 2 Pieces',
    size: '2 Pieces',
    type: 'Hand-Knotted Rug',
    fabric: 'Premium Wool',
    idealFor: 'Luxury Living',
    code: 'KC-GEO03',
    category: 'signature',
    accent: 'luxury',
    badge: 'Signature',
    image: 'assets/images/1.jpeg',
    description: 'A striking black and blue Tibetan-style rug featuring three colorful geometric medallions surrounded by traditional Greek-key borders and vibrant symbolic patterns. Its bold colors make it suitable for contemporary and traditional interiors.',
    translations: {
      en: {
        name: 'Himalayan Geometric Heritage Rug',
        description: 'A striking black and blue Tibetan-style rug featuring three colorful geometric medallions surrounded by traditional Greek-key borders and vibrant symbolic patterns. Its bold colors make it suitable for contemporary and traditional interiors.',
        badge: 'Signature',
        type: 'Hand-Knotted Rug',
        fabric: 'Premium Wool',
        idealFor: 'Luxury Living',
        priceLabel: 'Price',
        codeLabel: 'Code',
        enquire: 'Enquire on WhatsApp',
        call: 'Call'
      },
      hi: {
        name: 'हिमालयन ज्यामितीय हेरिटेज रग',
        description: 'एक आकर्षक ब्लैक एंड ब्लू तिब्बती-स्टाइल रग जिसमें तीन रंगीन ज्यामितीय मेडलेशन ट्रडिशनल ग्रीक-की बॉर्डर और जीवंत प्रतीकात्मक पैटर्न से घिरे हैं। इसका बोल्ड रंग कॉन्टेम्पोररी और पारंपरिक इंटीरियर्स के लिए उपयुक्त है।',
        badge: 'सिग्नेचर',
        type: 'हैंड-नॉटेड रग',
        fabric: 'प्रीमियम ऊन',
        idealFor: 'लक्ज़री लिविंग',
        priceLabel: 'कीमत',
        codeLabel: 'कोड',
        enquire: 'व्हाट्सऐप पर पूछें',
        call: 'कॉल करें'
      }
    }
  },
  {
    id: 4,
    name: 'Golden Lotus Heritage Rug',
    price: '₹8,500',
    oldPrice: '',
    off: 'For 2 Pieces',
    size: '2 Pieces',
    type: 'Hand-Knotted Rug',
    fabric: 'Premium Wool',
    idealFor: 'Traditional',
    code: 'KC-LOT04',
    category: 'home',
    accent: 'signature',
    badge: 'Traditional',
    image: 'assets/images/2.jpeg',
    description: 'A warm golden-brown Tibetan-style rug decorated with lotus flowers, traditional vessels, floral motifs and auspicious symbols. The detailed border and earthy colors give it an elegant traditional character.',
    translations: {
      en: {
        name: 'Golden Lotus Heritage Rug',
        description: 'A warm golden-brown Tibetan-style rug decorated with lotus flowers, traditional vessels, floral motifs and auspicious symbols. The detailed border and earthy colors give it an elegant traditional character.',
        badge: 'Traditional',
        type: 'Hand-Knotted Rug',
        fabric: 'Premium Wool',
        idealFor: 'Traditional',
        priceLabel: 'Price',
        codeLabel: 'Code',
        enquire: 'Enquire on WhatsApp',
        call: 'Call'
      },
      hi: {
        name: 'गोल्डन लॉटस हेरिटेज रग',
        description: 'एक गर्म गोल्डन-ब्राउन तिब्बती-स्टाइल रग जिसमें कमल के फूल, पारंपरिक बर्तन, फूलों के पैटर्न और शुभ प्रतीक सजे हैं। विस्तृत बॉर्डर और मिट्टी जैसे रंग इसे सुंदर पारंपरिक चरित्र देते हैं।',
        badge: 'पारंपरिक',
        type: 'हैंड-नॉटेड रग',
        fabric: 'प्रीमियम ऊन',
        idealFor: 'पारंपरिक',
        priceLabel: 'कीमत',
        codeLabel: 'कोड',
        enquire: 'व्हाट्सऐप पर पूछें',
        call: 'कॉल करें'
      }
    }
  },
  {
    id: 5,
    name: 'Crimson Lotus Heritage Rug',
    price: '₹8,500',
    oldPrice: '',
    off: 'For 2 Pieces',
    size: '2 Pieces',
    type: 'Hand-Knotted Rug',
    fabric: 'Premium Wool',
    idealFor: 'Luxury Living',
    code: 'KC-LOT05',
    category: 'luxury',
    accent: 'signature',
    badge: 'Bestseller',
    image: 'assets/images/4.jpeg',
    description: 'A rich crimson Tibetan-style carpet featuring lotus-inspired floral motifs, decorative vessels, traditional symbols and an intricate geometric border. The deep red background creates a warm and luxurious traditional look.',
    translations: {
      en: {
        name: 'Crimson Lotus Heritage Rug',
        description: 'A rich crimson Tibetan-style carpet featuring lotus-inspired floral motifs, decorative vessels, traditional symbols and an intricate geometric border. The deep red background creates a warm and luxurious traditional look.',
        badge: 'Bestseller',
        type: 'Hand-Knotted Rug',
        fabric: 'Premium Wool',
        idealFor: 'Luxury Living',
        priceLabel: 'Price',
        codeLabel: 'Code',
        enquire: 'Enquire on WhatsApp',
        call: 'Call'
      },
      hi: {
        name: 'क्रिमसन लॉटस हेरिटेज रग',
        description: 'एक समृद्ध क्रिमसन तिब्बती-स्टाइल कार्पेट जिसमें कमल-प्रेरित फूल पैटर्न, सजावटी बर्तन, पारंपरिक प्रतीक और जटिल ज्यामितीय बॉर्डर हैं। गहरा लाल बैकग्राउंड एक गर्म और लक्ज़री पारंपरिक लुक देता है।',
        badge: 'बेस्टसेलर',
        type: 'हैंड-नॉटेड रग',
        fabric: 'प्रीमियम ऊन',
        idealFor: 'लक्ज़री लिविंग',
        priceLabel: 'कीमत',
        codeLabel: 'कोड',
        enquire: 'व्हाट्सऐप पर पूछें',
        call: 'कॉल करें'
      }
    }
  }
];

const featuredProducts = products.slice(0, 3);

// ---------- Helpers ----------
function tag(text) { return `<span class="tag">${text}</span>`; }

function whatsappLink(productName) {
  const msg = productName
    ? `Hello Mr. Mahender ji, I would like to enquire about: ${productName}. Please share more details.`
    : `Hello Mr. Mahender ji, I would like to know more about Kashi Carpets products.`;
  return `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(msg)}`;
}

// ---------- Product Card Template ----------
function productCard(product) {
  const lang = getStoredLanguage();
  const local = product.translations?.[lang] || product.translations?.en || {};
  const name = local.name || product.name;
  const description = local.description || product.description;
  const badge = local.badge || product.badge;
  const type = local.type || product.type;
  const fabric = local.fabric || product.fabric;
  const idealFor = local.idealFor || product.idealFor;
  const codeLabel = local.codeLabel || 'Code';
  const enquireLabel = local.enquire || 'Enquire on WhatsApp';
  const callLabel = local.call || 'Call';

  return `
    <article class="product-card reveal">
      <div class="product-image">
        <img src="${product.image}" alt="${name} handcrafted by Kashi Carpets" loading="lazy">
        ${badge ? `<span class="product-badge">${badge}</span>` : ''}
      </div>
      <div class="product-content">
        <div class="tag-row">
          ${tag(type)}
          ${tag(fabric)}
          ${tag(idealFor)}
        </div>
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="price-row">
          <span class="price-current">${product.price}</span>
          <span class="price-old">${product.oldPrice}</span>
          <span class="price-off">${product.off}</span>
        </div>
        <div class="tag-row">
          ${tag(`Size: ${product.size}`)}
          ${tag(`${codeLabel}: ${product.code}`)}
        </div>
        <div class="product-actions">
          <a class="btn btn-primary" href="${whatsappLink(name)}" target="_blank" rel="noopener">${enquireLabel}</a>
          <a class="btn btn-outline" href="tel:${BUSINESS.phoneRaw}">${callLabel}</a>
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const target = document.querySelector('[data-featured-products]');
  if (!target) return;
  target.innerHTML = featuredProducts.map(productCard).join('');
  observeReveal();
}

function renderProducts(filter = 'all') {
  const target = document.querySelector('[data-products-grid]');
  const empty  = document.querySelector('[data-products-empty]');
  if (!target) return;
  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.category === filter || p.accent === filter);
  target.innerHTML = filtered.map(productCard).join('');
  if (empty) empty.style.display = filtered.length ? 'none' : 'block';
  observeReveal();
}

function setupFilters() {
  const filters = document.querySelectorAll('.filter-btn, [data-filter]');
  if (!filters.length) return;
  filters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.dataset.filter || btn.getAttribute('data-filter');
      renderProducts(filterValue);
    });
  });
  renderProducts('all');
}

// ---------- Mobile menu ----------
function setupMobileMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu   = document.querySelector('[data-menu]');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    menu.classList.toggle('nav-active'); // Backwards compatibility for both CSS definitions
    const isOpen = menu.classList.contains('open') || menu.classList.contains('nav-active');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.textContent = isOpen ? '✕' : '☰';
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menu.classList.remove('nav-active');
      toggle.textContent = '☰';
    });
  });
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const href = link.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) {
      link.classList.add('active');
    }
  });
}

// ---------- Contact Form ----------
function setupContactForm() {
  const form    = document.querySelector('[data-contact-form]');
  const message = document.querySelector('[data-form-message]');
  if (!form || !message) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const name  = String(fd.get('name')  || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const req   = String(fd.get('requirement') || '').trim();
    const cat   = String(fd.get('category') || '').trim();

    if (!name || !email || !phone || !req) {
      message.className = 'form-message error';
      message.textContent = '⚠️ Please fill all required fields before submitting the enquiry.';
      return;
    }
    if (!/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(email)) {
      message.className = 'form-message error';
      message.textContent = '⚠️ Please enter a valid email address.';
      return;
    }
    if (!/^[+\d\s\-()]{7,}$/.test(phone)) {
      message.className = 'form-message error';
      message.textContent = '⚠️ Please enter a valid phone number.';
      return;
    }

    // Save locally
    const store = JSON.parse(localStorage.getItem('kashiCarpetsEnquiries') || '[]');
    store.push({ ...Object.fromEntries(fd.entries()), submittedAt: new Date().toISOString() });
    localStorage.setItem('kashiCarpetsEnquiries', JSON.stringify(store));

    // Build WhatsApp message for direct forwarding
    const waMsg = 
`*New Enquiry — Kashi Carpets*
Name: ${name}
Email: ${email}
Phone: ${phone}
Category: ${cat}
Requirement: ${req}`;
    const waURL = `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(waMsg)}`;

    message.className = 'form-message success';
    message.innerHTML = `✅ Thank you <strong>${name}</strong>! Your enquiry has been recorded. 
      <a href="${waURL}" target="_blank" rel="noopener" style="color:#22853f;font-weight:700;text-decoration:underline;">
      Click here to send it to Mr. Mahender ji on WhatsApp →</a>`;
    form.reset();
  });
}

// ---------- Reveal on scroll ----------
function observeReveal() {
  const items = document.querySelectorAll('.reveal:not(.visible), .product-card');
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach(i => i.classList.add('visible', 'reveal-visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        en.target.classList.add('reveal-visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.14 });
  items.forEach(i => io.observe(i));
}

// ---------- Header scroll effect ----------
function setupHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---------- Back to top ----------
function setupBackToTop() {
  const btn = document.querySelector('[data-back-to-top]');
  if (!btn) return;
  const onScroll = () => btn.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ---------- Counter animation for hero stats ----------
function animateCounters() {
  const nodes = document.querySelectorAll('[data-count]');
  if (!nodes.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const end = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || '';
      const dur = 1400;
      const startT = performance.now();
      const tick = now => {
        const p = Math.min((now - startT) / dur, 1);
        const val = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  nodes.forEach(n => io.observe(n));
}

// ---------- Preloader ----------
function hidePreloader() {
  const p = document.querySelector('.preloader');
  if (!p) return;
  // Fallback timeout or natural load event
  setTimeout(() => {
    p.classList.add('hidden');
    p.style.opacity = "0";
    p.style.visibility = "hidden";
  }, 400);
}

// ---------- Year in footer ----------
function updateYear() {
  document.querySelectorAll('[data-year]').forEach(n => n.textContent = new Date().getFullYear());
}

// ---------- Inject owner/business data anywhere the page requests it ----------
function injectBusinessData() {
  document.querySelectorAll('[data-owner]').forEach(n => n.textContent = BUSINESS.owner);
  document.querySelectorAll('[data-location]').forEach(n => n.textContent = BUSINESS.location);
  document.querySelectorAll('[data-phone]').forEach(n => n.textContent = BUSINESS.phone);
  document.querySelectorAll('[data-email]').forEach(n => n.textContent = BUSINESS.email);
  document.querySelectorAll('[data-tel-link]').forEach(n => n.setAttribute('href', `tel:${BUSINESS.phoneRaw}`));
  document.querySelectorAll('[data-mail-link]').forEach(n => n.setAttribute('href', `mailto:${BUSINESS.email}`));
  document.querySelectorAll('[data-wa-link]').forEach(n => n.setAttribute('href', whatsappLink()));
  document.querySelectorAll('[data-insta-link]').forEach(n => n.setAttribute('href', BUSINESS.instagram));
}

// ---------- Image Slider for product cards ----------
const _sliderIndex = {};
function slideImg(sliderId, dir) {
  const wrapper = document.getElementById(sliderId);
  if (!wrapper) return;
  const track  = wrapper.querySelector('.slider-track');
  const imgs   = track.querySelectorAll('img');
  const total  = imgs.length;
  if (!_sliderIndex[sliderId]) _sliderIndex[sliderId] = 0;
  _sliderIndex[sliderId] = (_sliderIndex[sliderId] + dir + total) % total;
  track.style.transform = `translateX(-${_sliderIndex[sliderId] * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
  hidePreloader();
  injectBusinessData();
  renderFeatured();
  setupFilters();
  setupMobileMenu();
  setActiveNav();
  setupContactForm();
  setupHeaderScroll();
  setupBackToTop();
  setupLanguageSwitcher();
  observeReveal();
  animateCounters();
  updateYear();
  console.log('%c✨ Kashi Carpets — Handcrafted in Bhadohi ✨', 'color:#c48b4a;font-size:14px;font-weight:bold;');
  console.log(`Owner: ${BUSINESS.owner} | ${BUSINESS.phone}`);
});