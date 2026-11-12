'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { farmQualityPillars } from '@/data/cows';
import {
  HeartHandshake,
  Wheat,
  ShieldCheck,
  Snowflake,
  Flame,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

const iconMap = {
  HeartHandshake,
  Wheat,
  ShieldCheck,
  Snowflake,
};

export default function QualityProcess() {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-warm-cream/50 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            {t.qualitySection.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest">
            {t.qualitySection.title}
          </h2>
          <p className="text-earth-muted text-sm sm:text-base mt-3 leading-relaxed">
            {t.qualitySection.subtitle}
          </p>
        </div>

        {/* 4 Core Quality Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {farmQualityPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <div
                key={pillar.id}
                className="bg-white p-6 rounded-2xl border border-warm-border shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-forest text-gold flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-earth-dark mb-2">
                    {language === 'hi' ? pillar.titleHi : pillar.titleEn}
                  </h3>
                  <p className="text-xs text-earth-muted leading-relaxed">
                    {language === 'hi' ? pillar.descHi : pillar.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5-Step Vedic Bilona Timeline */}
        <div className="bg-forest-deep text-warm-cream rounded-3xl p-8 sm:p-12 shadow-elevated border-2 border-gold/40 relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">
              {language === 'hi' ? 'वैदिक अमृत निर्माण विधि' : 'Ancient Ayurvedic Science'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {t.aboutPage.bilonaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-warm-sand mt-2 leading-relaxed">
              {language === 'hi'
                ? 'बाजार के साधारण घी को मलाई (Cream) से सीधे गर्म करके बनाया जाता है, जबकि हमारा घी दही से मक्खन बनाकर धीमी लकड़ी की आंच पर वैदिक विधि से तैयार होता है।'
                : 'Commercial ghee is made directly from factory milk cream. In contrast, our Desi Ghee follows the authentic Ayurvedic curd-churning method for genuine therapeutic qualities.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {t.aboutPage.bilonaSteps.map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-forest-dark/80 backdrop-blur-sm p-5 rounded-2xl border border-gold/20 flex flex-col justify-between hover:border-gold transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif font-extrabold text-2xl text-gold">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-fresh" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-warm-sand/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
