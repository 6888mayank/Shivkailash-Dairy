import { CowBreed } from '@/types';

export const cowBreeds: CowBreed[] = [
  {
    nameEn: 'Sahiwal Cow (साहीवाल)',
    nameHi: 'साहीवाल देसी गाय',
    count: 14,
    originEn: 'Native Indigenous Breed of Northern India',
    originHi: 'उत्तर भारत की ऐतिहासिक एवं प्रतिष्ठित देसी नस्ल',
    descriptionEn:
      'Sahiwal is celebrated worldwide as one of the best indigenous zebu cattle breeds. Known for its calm temperament, distinctive reddish-brown or pale red coat, prominent dewlap, and voluminous milk with exceptionally high fat content and sweet taste naturally infused with A2 beta-casein proteins.',
    descriptionHi:
      'साहीवाल को दुनिया की सर्वश्रेष्ठ स्वदेशी गाय नस्लों में गिना जाता है। शांत स्वभाव, सुंदर लाल-भूरा रंग, विकसित गलकंबल और प्राकृतिक रूप से मीठा, गाढ़ा तथा सुपाच्य A2 प्रोटीन युक्त दूध इसकी सबसे बड़ी पहचान है।',
    featuresEn: [
      'High butterfat content (4.5% - 5.5%) with natural golden hue',
      'Extremely resilient to local weather conditions and diseases',
      'Feeds on green barseem, mustard fodder, jowar & organic crushed grains',
      'Gentle nature, loves being caressed, responds to affection'
    ],
    featuresHi: [
      '4.5% - 5.5% प्राकृतिक फैट युक्त गाढ़ा और स्वादिष्ट दूध',
      'उत्तर प्रदेश की जलवायु के अनुकूल एवं असाधारण रोग-प्रतिरोधक क्षमता',
      'हरे बरसीम, चरी, जौ, चने की चूनी और जैविक आहार पर पोषित',
      'अत्यंत शांत व ममतामयी स्वभाव'
    ],
    image: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=1200&q=80',
    taglineEn: 'Known for the sweetest and thickest natural A2 milk in India.',
    taglineHi: 'भारत में सबसे स्वादिष्ट, प्राकृतिक मीठे और गाढ़े दूध के लिए प्रसिद्ध।'
  },
  {
    nameEn: 'Gir Cow (गीर)',
    nameHi: 'गीर देसी गाय',
    count: 11,
    originEn: 'Kathiawar & Saurashtra Region',
    originHi: 'काठियावाड़ एवं सौराष्ट्र की वैदिक गौरवशाली नस्ल',
    descriptionEn:
      'The Gir cow is world-renowned for its majestic dome-shaped convex forehead (like an inverted spoon), drooping ears, and backward-sweeping horns. Its hump contains a special vein known as the Surya Ketu Nadi that absorbs solar rays, imparting a natural golden tint to its milk and ghee.',
    descriptionHi:
      'गीर गाय अपने राजसी उत्तल मस्तक (माथा), लंबे लटकते हुए कान और घुमावदार सींगों के लिए प्रसिद्ध है। इसके कूबड़ (Hump) में "सूर्य केतु नाड़ी" होती है जो सूर्य की किरणों से ऊर्जा ग्रहण करती है, जिससे इसके दूध और घी में प्राकृतिक सुनहरापन व औषधीय गुण आते हैं।',
    featuresEn: [
      'Surya Ketu Nadi absorbs solar energy, creating golden carotene-rich milk',
      'Large curved horns and distinctive convex forehead for thermal regulation',
      'Produces light, aromatic milk exceptionally suited for Vedic Bilona Ghee',
      'Free-grazing in open paddocks with natural sunshine daily'
    ],
    featuresHi: [
      'सूर्य केतु नाड़ी युक्त कूबड़ जो दूध व घी को सुनहरा पोषण प्रदान करता है',
      'विशिष्ट उत्तल मस्तक और लंबे कान जो प्राकृतिक रूप से शरीर को शीतल रखते हैं',
      'पाचन में बेहद हल्का, वैदिक बिलौना घी बनाने के लिए सर्वोत्तम',
      'खुले बाड़े में स्वच्छ हवा, धूप और शुद्ध जल के बीच प्राकृतिक जीवन'
    ],
    image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1200&q=80',
    taglineEn: 'The Vedic mother cow whose golden ghee is revered in Ayurveda.',
    taglineHi: 'वैदिक कामधेनु जिसकी सुनहरी पौष्टिकता आयुर्वेद में अमृत समान मानी गई है।'
  }
];

export const farmQualityPillars = [
  {
    id: 'calves-first',
    titleEn: 'Ahimsak & Calves Fed First',
    titleHi: 'अहिंसक दोहन - बछड़े का पहला अधिकार',
    descEn: 'We strictly follow Vedic Gaushala ethics. The newborn calf drinks its full share from two teats before any milk is collected for distribution.',
    descHi: 'हम वैदिक गोशाला नियमों का पालन करते हैं। बछड़े/बछिया को दो थनों से तृप्त होने तक पिलाने के बाद ही शेष दूध लिया जाता है।',
    icon: 'HeartHandshake'
  },
  {
    id: 'organic-diet',
    titleEn: 'Green Fodder & Herbal Diet',
    titleHi: 'जैविक हरा चारा व आयुर्वेदिक पोषण',
    descEn: 'Our cows graze on pesticide-free Napier grass, barseem, organic bran, mustard cake, along with Shatavari and Ashwagandha supplements.',
    descHi: 'कीटनाशक-मुक्त नैपियर घास, बरसीम, चोकर, सरसों की खल और मौसमी जड़ी-बूटियों (शतावरी, अश्वगंधा) से युक्त प्राकृतिक आहार।',
    icon: 'Wheat'
  },
  {
    id: 'zero-chemicals',
    titleEn: 'Zero Hormones & Zero Adulteration',
    titleHi: 'शून्य हॉर्मोन, शून्य मिलावट',
    descEn: 'No Oxytocin or synthetic yield boosters. No added water, skimmed milk powder, starch, or chemical preservatives whatsoever.',
    descHi: 'ऑक्सीटोसिन या किसी भी कृत्रिम इंजेक्शन का पूर्ण निषेध। पानी, मिल्क पाउडर, स्टार्च या रसायनों की कोई मिलावट नहीं।',
    icon: 'ShieldCheck'
  },
  {
    id: 'chilled-hygiene',
    titleEn: 'Hygienic Milking & Quick Cold-Chain',
    titleHi: 'स्वच्छ दोहन व त्वरित शीतलन',
    descEn: 'Stainless steel milk buckets, washed udders with warm herbal water, and immediate chilling to 4°C preserving raw enzymes & probiotics.',
    descHi: 'स्टेनलेस स्टील बर्तनों में स्वच्छ दोहन, हर्बल जल से थनों की सफाई और 4°C पर तुरंत चिलिंग जिससे प्राकृतिक एंजाइम सुरक्षित रहते हैं।',
    icon: 'Snowflake'
  }
];

