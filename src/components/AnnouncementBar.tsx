'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AnnouncementBar() {
  const { language } = useLanguage();
  const { settings } = usePrice();

  return (
    <div className="bg-forest-deep text-warm-cream py-2 px-4 border-b border-forest-light/20 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider shrink-0">
            <Sparkles className="w-3 h-3 text-gold animate-spin" style={{ animationDuration: '6s' }} />
            {language === 'hi' ? 'देवरिया एवं गोरखपुर' : 'Deoria & Gorakhpur'}
          </span>
          <p className="truncate text-warm-sand/90 font-medium">
            {language === 'hi' ? settings.announcementTextHi : settings.announcementTextEn}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-warm-sand shrink-0">
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>Bariyarpur, Deoria (U.P.)</span>
          </div>
          <a
            href={`tel:${settings.phoneDisplay}`}
            className="flex items-center gap-1.5 text-gold hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="font-semibold">{settings.phoneDisplay}</span>
          </a>
          <Link
            href="/admin"
            className="text-warm-sand/60 hover:text-gold transition-colors text-[11px] underline underline-offset-2"
            title="Edit product prices"
          >
            {language === 'hi' ? 'मूल्य अपडेट' : 'Admin'}
          </Link>
        </div>
      </div>
    </div>
  );
}

