export interface FarmConfig {
  farmNameEn: string;
  farmNameHi: string;
  taglineEn: string;
  taglineHi: string;
  subtitleEn: string;
  subtitleHi: string;
  ownerNameEn: string;
  ownerNameHi: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string; // e.g. 919450528143 (for wa.me links)
  altPhone: string;
  email: string;
  addressEn: string;
  addressHi: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
  deliveryAreas: {
    deoria: {
      nameEn: string;
      nameHi: string;
      timingsEn: string;
      timingsHi: string;
      localitiesEn: string[];
      localitiesHi: string[];
    };
    gorakhpur: {
      nameEn: string;
      nameHi: string;
      timingsEn: string;
      timingsHi: string;
      localitiesEn: string[];
      localitiesHi: string[];
    };
  };
  cowCount: number;
}

export const farmConfig: FarmConfig = {
  farmNameEn: 'Kailash Kamdhenu Dairy Farm',
  farmNameHi: 'कैलाश कामधेनु डेयरी फार्म',
  taglineEn: 'Shuddh Doodh, Saccha Vishwas.',
  taglineHi: 'शुद्ध दूध, सच्चा विश्वास।',
  subtitleEn: 'Pure A2 Milk & Traditional Desi Ghee, Directly From Our Farm to Your Home.',
  subtitleHi: 'हमारे फार्म से सीधे आपके घर तक - शुद्ध A2 देसी गाय का दूध और पारंपरिक बिलौना घी।',
  ownerNameEn: 'Shiv Kailash',
  ownerNameHi: 'शिव कैलाश',
  phoneDisplay: '+91 88876 45957',
  phoneRaw: '+918887645957',
  whatsappNumber: '918887645957',
  altPhone: '+91 88876 45957',
  email: 'kailashkamdhenudairy@gmail.com',
  addressEn: 'Village Bariyarpur, Tola Rampur, Post - Bhahara, Deoria, Uttar Pradesh - 274001',
  addressHi: 'ग्राम बरियारपुर, टोला रामपुर, पोस्ट - भाहरा, देवरिया, उत्तर प्रदेश - 274001',
  googleMapsUrl: 'https://maps.google.com/?q=Bariyarpur,Rampur,Deoria,Uttar+Pradesh,274001',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14300.279822692298!2d83.74238545!3d26.4975218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993c3c78351fd67%3A0xe54e6fe843a96898!2sBariyarpur%2C%20Deoria%2C%20Uttar%20Pradesh%20274001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  deliveryAreas: {
    deoria: {
      nameEn: 'Deoria District & City',
      nameHi: 'देवरिया शहर एवं आसपास के क्षेत्र',
      timingsEn: 'Morning: 5:30 AM – 8:30 AM | Evening: 5:00 PM – 7:30 PM',
      timingsHi: 'सुबह: 5:30 - 8:30 बजे | शाम: 5:00 - 7:30 बजे',
      localitiesEn: [
        'Raghav Nagar',
        'Civil Lines',
        'Bhatwaliya',
        'Ramgulam Tola',
        'Saket Nagar',
        'Subhash Chowk',
        'Deoria Khas',
        'Malviya Road',
        'Station Road',
        'Barhaj Road Area'
      ],
      localitiesHi: [
        'राघव नगर',
        'सिविल लाइन्स',
        'भटवलिया',
        'रामगुलाम टोला',
        'साकेत नगर',
        'सुभाष चौक',
        'देवरिया खास',
        'मालवीय रोड',
        'स्टेशन रोड',
        'बरहज रोड'
      ]
    },
    gorakhpur: {
      nameEn: 'Gorakhpur City',
      nameHi: 'गोरखपुर शहर',
      timingsEn: 'Morning Express: 6:00 AM – 9:30 AM | Same Day Ghee Dispatch',
      timingsHi: 'सुबह एक्सप्रेस: 6:00 - 9:30 बजे | उसी दिन घी डिलीवरी',
      localitiesEn: [
        'Golghar',
        'Medical College Road',
        'Taramandal',
        'Betiahata',
        'Rapti Nagar',
        'Mohaddipur',
        'Rustampur',
        'Shahpur',
        'Civil Lines Gorakhpur',
        'Padri Bazar'
      ],
      localitiesHi: [
        'गोलघर',
        'मेडिकल कॉलेज रोड',
        'तारामंडल',
        'बेतियाहाता',
        'राप्ती नगर',
        'मोहद्दीपुर',
        'रुस्तमपुर',
        'शाहपुर',
        'सिविल लाइन्स गोरखपुर',
        'पादरी बाजार'
      ]
    }
  },
  cowCount: 25
};

