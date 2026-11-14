import { Product } from '@/types';

export const initialProducts: Product[] = [
  {
    id: 'toned-milk',
    nameEn: 'Pure A2 Toned Milk',
    nameHi: 'शुद्ध A2 टोन्ड दूध (हल्का व सुपाच्य)',
    subtitleEn: 'Light, Balanced & Easily Digestible A2 Cow Milk',
    subtitleHi: 'साहीवाल व गीर गायों का हल्का, पाचक व पोषक दूध',
    descriptionEn:
      'Pure morning milk from our indigenous Sahiwal & Gir cows, balanced for lower fat while retaining all essential A2 beta-casein proteins, calcium, and minerals. Exceptionally light on digestion, naturally sweet, zero adulteration, and delivered chilled to your doorstep.',
    descriptionHi:
      'हमारी 25 साहीवाल व गीर गायों से प्राप्त ताजा दूध, जो प्राकृतिक रूप से कम वसायुक्त और सुपाच्य है। सभी आवश्यक A2 प्रोटीन, कैल्शियम और खनिज तत्वों से भरपूर। चाय-कॉफ़ी, दैनिक उपयोग और वरिष्ठजनों के स्वास्थ्य के लिए सर्वोत्तम। शून्य मिलावट, ताजा सुबह की डिलीवरी।',
    image: '/images/milk-bottle.jpg',
    badgesEn: ['100% A2 Protein', 'Light & Digestible', 'Approx ₹65/L', 'Daily Delivery'],
    badgesHi: ['100% A2 प्रोटीन', 'हल्का व सुपाच्य', 'लगभग ₹65/लीटर', 'दैनिक होम डिलीवरी'],
    benefitsEn: [
      'Low fat and easy to digest, ideal for daily fitness and elderly health',
      'Rich in natural A2 Beta-Casein protein, calcium, and Vitamin B12',
      'Naturally sweet taste with zero added water or preservatives',
      'Delivered fresh within hours of morning milking across Deoria & Gorakhpur'
    ],
    benefitsHi: [
      'कम वसा व सुपाच्य — पेट के लिए अत्यंत हल्का, फिटनेस व बुजुर्गों के लिए उत्तम',
      'प्राकृतिक A2 बीटा-कैसीन प्रोटीन, कैल्शियम और विटामिन B12 का भरपूर स्रोत',
      'प्राकृतिक मिठास, बिना किसी पानी या प्रिजर्वेटिव की मिलावट के',
      'सुबह दुहने के कुछ ही घंटों में देवरिया व गोरखपुर में आपके द्वार पर उपलब्ध'
    ],
    variants: [
      {
        id: 'toned-500ml',
        size: '500ml',
        sizeHi: '500 मिलीलीटर',
        price: 35,
        unit: 'Pouch / Glass Bottle'
      },
      {
        id: 'toned-1000ml',
        size: '1 Litre',
        sizeHi: '1 लीटर',
        price: 65,
        unit: 'Pouch / Glass Bottle'
      }
    ],
    shelfLifeEn: 'Best consumed within 24-48 hours when refrigerated (below 4°C)',
    shelfLifeHi: 'फ्रिज में रखने पर 24-48 घंटे तक उपयोग के लिए सर्वोत्तम',
    storageEn: 'Keep refrigerated below 4°C. Boil before consumption.',
    storageHi: '4°C से कम तापमान पर फ्रिज में रखें। उपयोग से पूर्व उबालें।'
  },
  {
    id: 'full-cream-milk',
    nameEn: 'Pure A2 Full Cream Milk',
    nameHi: 'शुद्ध A2 फुल क्रीम दूध (गाढ़ा व मलाईदार)',
    subtitleEn: 'Rich Raw Whole Milk with Thick Golden Cream Layer',
    subtitleHi: 'प्राकृतिक गाढ़ी मलाई युक्त सम्पूर्ण कच्चा A2 देसी दूध',
    descriptionEn:
      'Wholesome, unadulterated, thick full cream A2 raw milk directly from our 25 indigenous Sahiwal and Gir cows. Loaded with full natural cream (malai), dense nutrients, and rich desi flavour. Ideal for growing children, athletes, home-made curd (dahi), paneer, and traditional sweets.',
    descriptionHi:
      'साहीवाल और गीर गायों से प्राप्त गाढ़ा, मलाईदार और सम्पूर्ण कच्चा A2 दूध। प्राकृतिक वसा और मोटी सुनहरी मलाई की परत के साथ। बच्चों के पोषण, बलवर्धक आहार, घर पर गाढ़ा दही जमाने, पनीर और पारंपरिक मिठाइयों के लिए अत्यंत गुणकारी।',
    image: '/images/pure-milk.jpg',
    badgesEn: ['Whole Raw Milk', 'Thick Golden Malai', 'Approx ₹75/L', 'Zero Milk Powder'],
    badgesHi: ['सम्पूर्ण कच्चा दूध', 'गाढ़ी प्राकृतिक मलाई', 'लगभग ₹75/लीटर', 'शून्य मिल्क पाउडर'],
    benefitsEn: [
      'Dense in essential fats, fat-soluble Vitamins A, D & natural Omega-3',
      'Promotes bone strength, muscle vitality, and stamina in kids & elders',
      'Yields thick, luscious cream layer (malai) upon boiling and cooling',
      '100% natural, ethical milking, zero synthetic hormones or water added'
    ],
    benefitsHi: [
      'प्राकृतिक वसा, विटामिन A, D और ओमेगा-3 से भरपूर शक्तिवर्धक दूध',
      'बच्चों और बड़ों की हड्डियों, मांसपेशियों और शारीरिक ऊर्जा को बढ़ाए',
      'उबालने पर जमती है मोटी प्राकृतिक मलाई — गाढ़ा व स्वादिष्ट दही',
      '100% प्राकृतिक, बछड़े को पर्याप्त दूध पिलाने के बाद अहिंसक विधि से दुहा गया'
    ],
    variants: [
      {
        id: 'fullcream-500ml',
        size: '500ml',
        sizeHi: '500 मिलीलीटर',
        price: 40,
        unit: 'Pouch / Glass Bottle'
      },
      {
        id: 'fullcream-1000ml',
        size: '1 Litre',
        sizeHi: '1 लीटर',
        price: 75,
        unit: 'Pouch / Glass Bottle'
      }
    ],
    shelfLifeEn: 'Best consumed within 24-48 hours when refrigerated (below 4°C)',
    shelfLifeHi: 'फ्रिज में रखने पर 24-48 घंटे तक उपयोग के लिए सर्वोत्तम',
    storageEn: 'Keep refrigerated below 4°C. Boil before consumption.',
    storageHi: '4°C से कम तापमान पर फ्रिज में रखें। उपयोग से पूर्व उबालें।'
  },
  {
    id: 'desi-ghee',
    nameEn: 'Traditional Desi Ghee (Vedic Bilona Method)',
    nameHi: 'पारंपरिक शुद्ध देसी घी (वैदिक बिलौना विधि)',
    subtitleEn: 'Hand-Churned Curd Ghee on Slow Wood Fire',
    subtitleHi: 'मिट्टी/पीतल की हांडी में दही मथकर धीमी आंच पर पकाया गया दानेदार घी',
    descriptionEn:
      'Made following the authentic 5-step ancient Vedic Bilona method. Fresh A2 milk from Sahiwal & Gir cows is boiled in earthen pots, cultured into thick curd overnight, churned using a traditional wooden bilona (two-way churner) at dawn to extract makkhan, and then slow-simmered on low firewood flame. Granular, rich golden aroma, and medicinal Ayurvedic qualities.',
    descriptionHi:
      'प्राचीन 5-चरणीय वैदिक बिलौना पद्धति से निर्मित। ताज़ा A2 दूध को मिट्टी की हांडी में गर्म कर रात भर दही जमाया जाता है, भोर में पारंपरिक लकड़ी की मथानी (बिलौना) से मथकर मक्खन निकाला जाता है, और फिर धीमी उपलों/लकड़ी की आंच पर पकाया जाता है। सुनहरी खुशबूदार दानेदार शुद्ध देसी घी।',
    image: '/images/desi-ghee.jpg',
    badgesEn: ['Vedic Bilona Method', 'Curd-Cultured Ghee', 'Approx ₹1,500/kg', 'Ayurvedic Grade'],
    badgesHi: ['वैदिक बिलौना विधि', 'दही से निर्मित मक्खन', 'लगभग ₹1,500/किग्रा', 'आयुर्वेदिक गुणवत्ता'],
    benefitsEn: [
      'Increases Agni (digestive fire) and accelerates nutrient absorption',
      'Packed with Butyric Acid, Omega-3, and fat-soluble Vitamins A, D, E & K',
      'Promotes glowing skin, mental clarity, memory and joint lubrication',
      'High smoke point (250°C) making it ideal and healthy for traditional cooking & puja'
    ],
    benefitsHi: [
      'जठराग्नि को प्रदीप्त कर पाचन शक्ति और पोषण अवशोषण को बढ़ाता है',
      'ब्यूटिरिक एसिड, ओमेगा-3 और विटामिन A, D, E व K का भरपूर भंडार',
      'त्वचा में चमक, स्मृति शक्ति और जोड़ों में लचीलापन बनाए रखने में सहायक',
      'उच्च स्मोक पॉइंट (250°C), भोजन पकाने और पूजा-हवन दोनों के लिए सर्वोत्तम'
    ],
    variants: [
      {
        id: 'ghee-500g',
        size: '500g',
        sizeHi: '500 ग्राम',
        price: 800,
        unit: 'Glass Jar'
      },
      {
        id: 'ghee-1000g',
        size: '1 kg',
        sizeHi: '1 किलोग्राम',
        price: 1500,
        unit: 'Glass Jar'
      }
    ],
    shelfLifeEn: '12 Months at room temperature in airtight glass jar',
    shelfLifeHi: 'कमरे के तापमान पर वायुरोधी कांच के जार में 12 महीने',
    storageEn: 'Store in a cool, dry place away from direct sunlight. Do not use wet spoon.',
    storageHi: 'सीधी धूप से दूर ठंडी व सूखी जगह पर रखें। गीले चम्मच का प्रयोग न करें।'
  }
];
