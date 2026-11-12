'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { farmConfig } from '@/data/config';
import CowBreeds from '@/components/CowBreeds';
import QualityProcess from '@/components/QualityProcess';
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
                <Image
                  src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=1000&q=80"
                  alt="Sahiwal cow at Kailash Kamdhenu Dairy Farm"
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

