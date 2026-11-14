'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { farmConfig } from '@/data/config';
import CowBreeds from '@/components/CowBreeds';
import QualityProcess from '@/components/QualityProcess';
import SmartImage from '@/components/SmartImage';
import {
  Heart,
  ShieldCheck,
  Award,
  Sparkles,
  MapPin,
  Flame,
  CheckCircle2,
  Phone,
  MessageCircle,
} from 'lucide-react';

export default function AboutPage() {
  const { language, t } = useLanguage();
  const { settings, createWhatsAppLink } = usePrice();

  const waVisitLink = createWhatsAppLink('Farm Visit & Inquiry', 'Visiting Bariyarpur Dairy Farm');

  return (
    <div className="py-12 sm:py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            {t.aboutPage.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-forest">
            {t.aboutPage.heading}
          </h1>
          <p className="text-earth-muted text-sm sm:text-base mt-4 leading-relaxed">
            {language === 'hi'
              ? 'शिव कैलाश जी द्वारा बरियारपुर (देवरिया) में स्थापित, जहां गोमाता की सेवा और शुद्धता ही हमारा एकमात्र धर्म है।'
              : 'Founded by Shiv Kailash in Bariyarpur, Deoria, with a sacred devotion to indigenous Gomata and unadulterated milk.'}
          </p>
        </div>

        {/* Founder & Story Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-warm-border shadow-elevated mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-wider bg-forest-soft px-3 py-1 rounded-full">
                <Heart className="w-3.5 h-3.5 text-forest" />
                <span>{t.aboutPage.storyTitle}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest">
                {language === 'hi'
                  ? 'देसी गोवंश की रक्षा और समाज को शुद्ध अमृत का उपहार'
                  : 'Preserving Native Indian Breeds & Delivering Sacred Purity'}
              </h2>

              <p className="text-xs sm:text-sm text-earth-body leading-relaxed">
                {t.aboutPage.storyP1}
              </p>

              <p className="text-xs sm:text-sm text-earth-body leading-relaxed">
                {t.aboutPage.storyP2}
              </p>

              {/* Founder quote box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-warm-cream border-l-4 border-gold">
                <p className="text-xs sm:text-sm italic font-serif text-forest">
                  {language === 'hi'
                    ? '“हमारा मानना है कि दूध केवल एक व्यापारिक वस्तु नहीं, बल्कि जीवनदायिनी शक्ति है। जब गोमाता प्रसन्न और संतुष्ट होती हैं, तभी उनका दूध अमृत बनता है।”'
                    : '“To us, milk is not a mere commodity — it is prana (life force). Only when Gomata is joyful, respected, and nourished does her milk become genuine amrit.”'}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-earth-dark">
                    — {language === 'hi' ? farmConfig.ownerNameHi : farmConfig.ownerNameEn}
                  </span>
                  <span className="text-earth-muted">
                    {language === 'hi' ? 'संस्थापक, कैलाश कामधेनु' : 'Founder, Kailash Kamdhenu'}
                  </span>
                </div>
              </div>
            </div>

            {/* Farm Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-elevated border-4 border-warm-cream">
                <SmartImage
                  src="/images/sahiwal-cow.jpg"
                  alt="Sahiwal cow at Kailash Kamdhenu Dairy Farm"
                  category="cows"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider block">
                    {language === 'hi' ? 'बरियारपुर, देवरिया (उ.प्र.)' : 'Bariyarpur, Deoria (U.P.)'}
                  </span>
                  <p className="font-serif font-bold text-base text-white">
                    {language === 'hi' ? '25 साहीवाल एवं गीर गायों का प्राकृतिक आवास' : 'Natural Gaushala for 25 Indigenous Cows'}
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 bg-forest text-white p-4 rounded-2xl shadow-elevated border border-gold/40 flex items-center gap-3">
                <Award className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <p className="font-serif font-extrabold text-xl text-gold">25 Desi Cows</p>
                  <p className="text-[10px] text-warm-sand">100% Sahiwal & Gir Indigenous</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Brand Seal & Sacred Heritage Section */}
        <div className="bg-forest-deep text-white rounded-3xl p-6 sm:p-10 border-2 border-gold/40 shadow-elevated mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gold shadow-2xl bg-[#f4ebe1]">
                <Image
                  src="/images/logo.jpg"
                  alt="Shiv Kailash Ram Krishna - SKRK Farm Seal"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="mt-3 text-xs font-bold text-gold uppercase tracking-wider">
                SHIV KAILASH RAM KRISHNA
              </span>
              <span className="text-[11px] text-warm-sand italic">
                “शुद्धता का विश्वास • Shuddhata Ka Vishwas”
              </span>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider border border-gold/40">
                {language === 'hi' ? 'आधिकारिक फार्म प्रतीक एवं दर्शन' : 'Official Brand Seal & Heritage'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {language === 'hi'
                  ? 'SKRK: भगवान शिव, प्रभु श्रीराम और श्रीकृष्ण के आशीर्वाद का संगम'
                  : 'SKRK: Rooted in Divine Reverence, Integrity & Purity'}
              </h3>
              <p className="text-xs sm:text-sm text-warm-sand leading-relaxed">
                {language === 'hi'
                  ? 'हमारे फार्म का नाम "शिव कैलाश राम कृष्ण (SKRK)" भारतीय सनातन मूल्यों और गोसेवा की पावन परंपरा का प्रतीक है। लोगो में भगवान शिव का त्रिशूल व कैलाश पर्वत पवित्रता का, कामधेनु गोमाता मातृत्व व अमृत दूध का, प्रभु श्रीराम का धनुष सत्य व मर्यादा का, और श्रीकृष्ण का मोर पंख गोपालन व प्रेम का परिचायक है।'
                  : 'The emblem represents our founding philosophy. Featuring Lord Shiva’s Trishul & Mount Kailash for auspicious purity, divine Kamdhenu Gomata for sacred A2 milk, Lord Ram’s bow for righteousness & unwavering trust, and Lord Krishna’s peacock feather for love and dedicated Gau-seva.'}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-xs font-bold text-gold">🔱 त्रिशूल & कैलाश</p>
                  <p className="text-[10px] text-warm-sand">अखंड पवित्रता</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-xs font-bold text-gold">🐄 कामधेनु गोमाता</p>
                  <p className="text-[10px] text-warm-sand">अमृतमयी A2 दूध</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-xs font-bold text-gold">🏹 श्रीराम धनुष</p>
                  <p className="text-[10px] text-warm-sand">सच्चा विश्वास</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-xs font-bold text-gold">🦚 कृष्ण मोरपंख</p>
                  <p className="text-[10px] text-warm-sand">स्नेहपूर्ण गोसेवा</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 25 Indigenous Cows Detail */}
        <CowBreeds />

        {/* Quality Commitment & Traditional Bilona Ghee Process */}
        <QualityProcess />

        {/* Farm Visit Invitation CTA */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-warm-border text-center max-w-4xl mx-auto shadow-soft">
          <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-2">
            {language === 'hi' ? 'पारदर्शिता ही हमारा प्रमाण है' : 'Transparency is Our Hallmark'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-earth-dark mb-3">
            {language === 'hi'
              ? 'आप हमारे बरियारपुर फार्म पर कभी भी पधार सकते हैं'
              : 'You Are Always Welcome to Visit Our Gaushala'}
          </h3>
          <p className="text-xs sm:text-sm text-earth-muted max-w-xl mx-auto mb-6">
            {language === 'hi'
              ? 'देखें कि हमारी 25 गायें कैसे रहती हैं, उन्हें क्या खिलाया जाता है और दूध कैसे निकाला जाता है। सच्चा विश्वास देखने से और मजबूत होता है।'
              : 'Witness our loving Gaushala environment, how our 25 Sahiwal & Gir cows are nurtured, and how fresh morning milking takes place.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waVisitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{language === 'hi' ? 'फार्म विजिट के लिए WhatsApp करें' : 'Schedule Farm Visit on WhatsApp'}</span>
            </a>
            <a
              href={farmConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-forest/10 hover:bg-forest/20 text-forest font-bold text-xs sm:text-sm transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>{language === 'hi' ? 'Google Maps पर लोकेशन देखें' : 'View Farm on Google Maps'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

