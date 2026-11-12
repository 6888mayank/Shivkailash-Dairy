'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import ProductCard from '@/components/ProductCard';
import {
  Milk,
  CheckCircle,
  HelpCircle,
  ShieldAlert,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';

export default function ProductsPage() {
  const { language, t } = useLanguage();
  const { products, settings, createWhatsAppLink } = usePrice();

  const customOrderWa = createWhatsAppLink('Custom Milk Requirement', 'Daily Morning Subscription Inquiry');

  return (
    <div className="py-12 sm:py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            {t.products.tag}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-forest">
            {t.products.title}
          </h1>
          <p className="text-earth-muted text-sm sm:text-base mt-4 leading-relaxed">
            {t.products.subtitle}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-warm-cream border border-gold/30 text-xs text-forest font-semibold">
            <span>🛵</span>
            <span>{t.products.instantDeliveryNotice}</span>
          </div>
        </div>

        {/* Variable Pricing & WhatsApp Divert Notice Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-gold/15 border-2 border-gold/40 text-earth-dark flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📢</span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-forest">
                {language === 'hi'
                  ? 'महत्वपूर्ण सूचना: फार्म की दरें मौसम व चारे अनुसार बदल सकती हैं'
                  : 'Important Note: Farm rates vary with seasonal green fodder & batch size'}
              </p>
              <p className="text-[11px] sm:text-xs text-earth-muted mt-0.5">
                {language === 'hi'
                  ? 'नीचे दिए गए मूल्य सांकेतिक (शुरुआती) हैं। आज का एकदम सटीक रेट और देवरिया/गोरखपुर में डिलीवरी स्लॉट जानने के लिए सीधे WhatsApp पर संदेश भेजें।'
                  : 'Prices shown below are indicative starting rates. For today’s accurate quote and daily delivery confirmation, please tap to chat on WhatsApp.'}
              </p>
            </div>
          </div>
          <a
            href={createWhatsAppLink('Price Inquiry', 'Checking Today’s Live Farm Rate')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{language === 'hi' ? 'आज का सटीक रेट पूछें' : "Ask Today's Rate"}</span>
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Why A2 vs A1 Comparison Table */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-warm-border shadow-elevated mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest">
              {language === 'hi'
                ? 'A2 देसी गाय का दूध बनाम साधारण A1 पैकेट दूध'
                : 'Why Indigenous A2 Milk vs Commercial A1 Milk?'}
            </h2>
            <p className="text-xs sm:text-sm text-earth-muted mt-2">
              {language === 'hi'
                ? 'वैज्ञानिक शोध से प्रमाणित कि भारतीय देसी गायों का दूध सुपाच्य और अमृत समान क्यों है'
                : 'Scientifically proven differences between Indian Zebu cow milk and hybrid cattle milk'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead>
                <tr className="border-b-2 border-forest/20 text-earth-dark">
                  <th className="py-3 px-4 font-bold">
                    {language === 'hi' ? 'विशेषता' : 'Feature'}
                  </th>
                  <th className="py-3 px-4 font-bold text-forest bg-forest-soft/50 rounded-t-xl">
                    {language === 'hi' ? 'कैलाश कामधेनु A2 दूध' : 'Kailash Kamdhenu A2 Milk'}
                  </th>
                  <th className="py-3 px-4 font-bold text-earth-muted">
                    {language === 'hi' ? 'साधारण A1 / पैकेट दूध' : 'Regular Packaged A1 Milk'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-earth-dark">
                    {language === 'hi' ? 'गाय की नस्ल' : 'Cow Breed'}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-forest bg-forest-soft/30">
                    {language === 'hi' ? 'शुद्ध साहीवाल एवं गीर (भारतीय देसी)' : 'Pure Sahiwal & Gir (Indigenous Indian)'}
                  </td>
                  <td className="py-3.5 px-4 text-earth-muted">
                    {language === 'hi' ? 'जर्सी / होल्स्टीन फ्रिसियन (संकर)' : 'Jersey / HF (Hybrid breeds)'}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-earth-dark">
                    {language === 'hi' ? 'बीटा-कैसीन प्रोटीन' : 'Beta-Casein Protein'}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-forest bg-forest-soft/30">
                    {language === 'hi' ? 'शुद्ध A2 (आंतों के अनुकूल, सुपाच्य)' : 'Pure A2 (Gentle on stomach, easy digest)'}
                  </td>
                  <td className="py-3.5 px-4 text-earth-muted">
                    {language === 'hi' ? 'A1 प्रोटीन (BCM-7 सूजन पैदा कर सकता है)' : 'A1 Protein (Releases inflammatory BCM-7)'}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-earth-dark">
                    {language === 'hi' ? 'पानी व पाउडर मिलावट' : 'Added Water & Powder'}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-forest bg-forest-soft/30">
                    {language === 'hi' ? 'शून्य (0% मिलावट, बिना पानी)' : 'Zero (100% Raw, untouched, no water)'}
                  </td>
                  <td className="py-3.5 px-4 text-earth-muted">
                    {language === 'hi' ? 'पुनर्गठित पाउडर एवं रासायनिक स्टेबलाइजर' : 'Often reconstituted powder & stabilizers'}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-earth-dark">
                    {language === 'hi' ? 'हार्मोन व इंजेक्शन' : 'Hormones / Injections'}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-forest bg-forest-soft/30">
                    {language === 'hi' ? 'पूर्णतः वर्जित (ऑक्सीटोसिन-मुक्त)' : 'Strictly Zero Oxytocin or Synthetics'}
                  </td>
                  <td className="py-3.5 px-4 text-earth-muted">
                    {language === 'hi' ? 'व्यावसायिक डेयरी में सामान्य उपयोग' : 'Commonly used for forced yield'}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-earth-dark">
                    {language === 'hi' ? 'डिलीवरी गति' : 'Milking to Doorstep'}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-forest bg-forest-soft/30 rounded-b-xl">
                    {language === 'hi' ? 'सुबह दोहन के 3-4 घंटे के भीतर' : 'Within 3-4 hours of morning milking'}
                  </td>
                  <td className="py-3.5 px-4 text-earth-muted">
                    {language === 'hi' ? 'कई दिनों पुराना प्रोसेस्ड एवं पाश्चुरीकृत' : 'Stored for 3-5 days in supply chain'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Subscription Callout */}
        <div className="bg-forest-deep text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-elevated border border-gold/30">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gold mb-3">
            {language === 'hi'
              ? 'दैनिक सुबह दूध डिलीवरी शुरू करवाएं'
              : 'Start Your Daily Morning Fresh Milk Delivery'}
          </h3>
          <p className="text-xs sm:text-sm text-warm-sand max-w-xl mx-auto mb-6">
            {language === 'hi'
              ? 'देवरिया और गोरखपुर में रहने वाले परिवार सीधे WhatsApp पर अपना पता और दैनिक आवश्यकता भेजकर अगले ही दिन से सेवा शुरू करवा सकते हैं।'
              : 'Residents of Deoria & Gorakhpur can simply share their address and required quantity on WhatsApp to start morning milk delivery.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={customOrderWa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{language === 'hi' ? 'WhatsApp पर सब्सक्रिप्शन शुरू करें' : 'Start Delivery on WhatsApp'}</span>
            </a>
            <a
              href={`tel:${settings.phoneDisplay}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>{settings.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

