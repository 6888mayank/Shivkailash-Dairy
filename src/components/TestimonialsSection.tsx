'use client';

import React from 'react';
import { testimonials } from '@/data/reviews';
import { useLanguage } from '@/context/LanguageContext';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-warm-cream/50 border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            {t.testimonials.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest">
            {t.testimonials.title}
          </h2>
          <p className="text-earth-muted text-sm sm:text-base mt-3 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-border shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating & Location Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-forest-soft text-forest border border-forest/20">
                    {language === 'hi' ? rev.locationHi : rev.location}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-earth-body leading-relaxed italic mb-6">
                  &ldquo;{language === 'hi' ? rev.commentHi : rev.commentEn}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-warm-border flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-forest">
                    {language === 'hi' ? rev.nameHi : rev.name}
                  </h4>
                  <p className="text-[11px] text-earth-muted mt-0.5">
                    {rev.product} • {rev.date}
                  </p>
                </div>
                {rev.verifiedBuyer && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-forest bg-forest-soft/60 px-2 py-1 rounded-md">
                    <CheckCircle className="w-3 h-3 text-forest" />
                    {t.testimonials.verifiedBadge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
