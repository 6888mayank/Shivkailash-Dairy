'use client';

import React from 'react';
import Image from 'next/image';
import { cowBreeds } from '@/data/cows';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Award, Sun, Heart, CheckCircle2 } from 'lucide-react';

export default function CowBreeds() {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            {t.cowsSection.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest">
            {t.cowsSection.title}
          </h2>
          <p className="text-earth-muted text-sm sm:text-base mt-3 leading-relaxed">
            {t.cowsSection.subtitle}
          </p>
        </div>

        {/* 2 Breeds Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cowBreeds.map((breed, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-warm-border shadow-elevated overflow-hidden flex flex-col justify-between group hover:border-gold/60 transition-all duration-300"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-forest-soft">
                  <Image
                    src={breed.image}
                    alt={breed.nameEn}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/20 to-transparent" />

                  {/* Top Breed Count Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold text-forest-deep font-extrabold text-xs shadow-md">
                      <Award className="w-4 h-4" />
                      {breed.count} {language === 'hi' ? 'गायें हमारे फार्म में' : 'Cows at Farm'}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-semibold text-gold tracking-wide uppercase block">
                      {language === 'hi' ? breed.originHi : breed.originEn}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                      {language === 'hi' ? breed.nameHi : breed.nameEn}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Tagline / Praise */}
                  <div className="p-3.5 rounded-xl bg-warm-cream border-l-4 border-gold text-xs sm:text-sm font-semibold text-forest">
                    {language === 'hi' ? breed.taglineHi : breed.taglineEn}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-earth-body leading-relaxed">
                    {language === 'hi' ? breed.descriptionHi : breed.descriptionEn}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-forest uppercase tracking-wider">
                      {language === 'hi' ? 'विशेष लक्षण व दूध की गुणवत्ता:' : 'Key Characteristics & Milk Quality:'}
                    </h4>
                    <ul className="space-y-2">
                      {(language === 'hi' ? breed.featuresHi : breed.featuresEn).map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-earth-muted">
                          <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 bg-forest-soft/40 border-t border-warm-border flex items-center justify-between text-xs text-forest font-semibold">
                <span className="flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-gold-dark" />
                  {language === 'hi' ? 'प्राकृतिक खुला बाड़ा व धूप' : 'Open Sun Grazing'}
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-forest" />
                  {language === 'hi' ? 'अहिंसक ममतामयी देखभाल' : 'Loved & Respected'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
