import { Product } from '@/types';

export const initialProducts: Product[] = [
  {
    id: 'a2-milk',
    nameEn: 'Pure A2 Desi Cow Milk',
    nameHi: 'शुद्ध A2 देसी गाय का दूध',
    subtitleEn: 'Fresh, Raw & Untouched from Sahiwal & Gir Cows',
    subtitleHi: 'साहीवाल और गिर गायों से प्राप्त ताजा, प्राकृतिक व कच्चा दूध',
    descriptionEn:
      'Directly milked twice a day and chilled immediately to retain all natural nutrients. Packed with A2 beta-casein proteins, easy on digestion, naturally sweet, with no added water, preservatives, or hormones. Delivered in clean food-grade glass/stainless steel containers.',
    descriptionHi:
      'दिन में दो बार ताज़ा निकाला गया दूध जिसे तुरंत ठंडा कर पोषक तत्वों को सुरक्षित रखा जाता है। A2 बीटा-कैसीन प्रोटीन से भरपूर, पाचन में आसान, प्राकृतिक मिठास युक्त, जिसमें कोई मिलावटी पानी, पाउडर या हार्मोन नहीं हैं। स्वच्छ खाद्य-ग्रेड कंटेनरों में सुरक्षित डिलीवरी।',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80',
    badgesEn: ['100% A2 Protein', 'Zero Adulteration', 'Raw & Unprocessed', 'Morning Delivery'],
    badgesHi: ['100% A2 प्रोटीन', 'शून्य मिलावट', 'प्राकृतिक कच्चा दूध', 'सुबह की डिलीवरी'],
    benefitsEn: [
      'Rich in A2 Beta-Casein protein for effortless digestion',
      'Naturally high in calcium, Vitamin B12, and Vitamin D',
      'Strengthens immunity and promotes bone density in children & elders',
      'Delivered within 3-4 hours of morning milking'
    ],
    benefitsHi: [
      'सुपाच्य A2 बीटा-कैसीन प्रोटीन से भरपूर, पेट के लिए हल्का',
      'कैल्शियम, विटामिन B12 और विटामिन D का समृद्ध प्राकृतिक स्रोत',
      'बच्चों और बुजुर्गों में रोग प्रतिरोधक क्षमता और हड्डियों को मजबूत बनाए',
      'सुबह दुहने के 3-4 घंटे के भीतर सीधे आपके द्वार तक'
    ],
    variants: [
      {
        id: 'milk-500ml',
        size: '500ml',
        sizeHi: '500 मिलीलीटर',
        price: 45,
        unit: 'Pouch / Glass Bottle'
      },
      {
        id: 'milk-1000ml',
        size: '1 Litre',
        sizeHi: '1 लीटर',
        price: 85,
        unit: 'Pouch / Glass Bottle'
      }
    ],
    shelfLifeEn: 'Best consumed within 24-48 hours when refrigerated (4°C)',
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
      'Made following the authentic 5-step ancient Vedic Bilona method. Fresh A2 milk is boiled in earthen pots, cultured into thick curd overnight, churned using a traditional wooden bilona (two-way churner) at dawn to extract makkhan, and then slow-simmered on low firewood flame. Granular, rich golden aroma, and medicinal Ayurvedic qualities.',
    descriptionHi:
      'प्राचीन 5-चरणीय वैदिक बिलौना पद्धति से निर्मित। ताज़ा A2 दूध को मिट्टी की हांडी में गर्म कर रात भर दही जमाया जाता है, भोर में पारंपरिक लकड़ी की मथानी (बिलौना) से मथकर मक्खन निकाला जाता है, और फिर धीमी उपलों/लकड़ी की आंच पर पकाया जाता है। सुनहरी खुशबूदार दानेदार शुद्ध देसी घी।',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=80',
    badgesEn: ['Vedic Bilona Method', 'Curd-Cultured Ghee', 'Golden Granular (Danedar)', 'Ayurvedic Grade'],
    badgesHi: ['वैदिक बिलौना विधि', 'दही से निर्मित मक्खन', 'सुनहरा दानेदार', 'आयुर्वेदिक गुणवत्ता'],
    benefitsEn: [
      'Increases Agni (digestive fire) and accelerates nutrient absorption',
      'Packed with Butyric Acid, Omega-3, and fat-soluble Vitamins A, D, E & K',
      'Promotes glowing skin, mental clarity, memory and joint lubrication',
      'High smoke point (250°C) making it ideal and healthy for traditional cooking'
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
        price: 950,
        unit: 'Glass Jar'
      },
      {
        id: 'ghee-1000g',
        size: '1 kg',
        sizeHi: '1 किलोग्राम',
        price: 1850,
        unit: 'Glass Jar'
      }
    ],
    shelfLifeEn: '12 Months at room temperature in airtight glass jar',
    shelfLifeHi: 'कमरे के तापमान पर वायुरोधी कांच के जार में 12 महीने',
    storageEn: 'Store in a cool, dry place away from direct sunlight. Do not use wet spoon.',
    storageHi: 'सीधी धूप से दूर ठंडी व सूखी जगह पर रखें। गीले चम्मच का प्रयोग न करें।'
  }
];
