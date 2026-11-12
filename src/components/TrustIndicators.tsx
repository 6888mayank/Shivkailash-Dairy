'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Droplet, Sparkles, HeartHandshake, Award, Sun } from 'lucide-react';

export default function TrustIndicators() {
  const { language, t } = useLanguage();

  const trustItems = [
    {
      icon: Award,
      titleEn: '25 Desi Cows',
      titleHi: '25 शुद्ध देसी गायें',
      descEn: 'Indigenous Sahiwal & Gir breeds with high A2 beta-casein proteins.',
      descHi: 'साहीवाल एवं गीर नस्ल की गायें, शुद्ध व सुपाच्य A2 प्रोटीन युक्त।',
      badge: '100% Desi Breed',
    },
    {
      icon: Droplet,
      titleEn: 'No Added Water',
      titleHi: 'शून्य मिलावटी पानी',
      descEn: 'We deliver milk exactly as given by Gomata. Absolutely no dilution.',
      descHi: 'गौमाता से प्राप्त प्राकृतिक गाढ़ा दूध, बिना एक बूंद पानी मिलाए।',
      badge: 'Zero Dilution',
    },
    {
      icon: ShieldCheck,
      titleEn: 'No Milk Powder',
      titleHi: 'शून्य मिल्क पाउडर व रसायन',
      descEn: 'Zero synthetic milk powders, zero starch, zero chemical preservatives.',
      descHi: 'कोई सिंथेटिक पाउडर, यूरिया या प्रिजर्वेटिव्स नहीं। शुद्ध कच्चा दूध।',
      badge: 'Chemical Free',
    },
    {
      icon: HeartHandshake,
      titleEn: 'Calves Fed First',
      titleHi: 'अहिंसक वैदिक दोहन',
      descEn: 'Ethical Gaushala practice: baby calves drink their full fill first.',
      descHi: 'बछड़े-बछिया का पहला अधिकार। तृप्त होने के बाद ही आदर से दोहन।',
      badge: 'Ethical Dairy',
    },
    {
      icon: Sparkles,
      titleEn: 'Vedic Bilona Ghee',
      titleHi: 'पारंपरिक बिलौना घी',
      descEn: 'Curd-cultured, hand-churned with wooden bilona on slow wood fire.',
      descHi: 'दही मथकर मक्खन से धीमी आंच पर पकाया गया सुनहरी दानेदार घी।',
      badge: 'Hand-Churned',
    },
    {
      icon: Sun,
      titleEn: 'Farm Fresh Daily',
      titleHi: 'फार्म से सीधा ताज़ा',
      descEn: 'Direct morning delivery in Deoria & Gorakhpur within hours of milking.',
      descHi: 'दोहन के कुछ ही घंटों में बरियारपुर फार्म से आपके घर तक डिलीवरी।',
      badge: 'Same Day Dispatch',
    },
  ];

  return (
    <section className="py-12 bg-warm-cream/70 border-y border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-2">
            {t.trustBar.title}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-forest">
            {language === 'hi' ? 'शुद्धता के 6 अटूट स्तम्भ' : 'The 6 Pillars of Sacred Purity'}
          </h2>
          <p className="text-earth-muted text-xs sm:text-sm mt-2">
            {t.trustBar.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-warm-border shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-forest-soft text-forest flex items-center justify-center group-hover:bg-forest group-hover:text-gold transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-gold/15 text-earth-dark border border-gold/30">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-earth-dark mb-2">
                    {language === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                  <p className="text-xs text-earth-muted leading-relaxed">
                    {language === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
