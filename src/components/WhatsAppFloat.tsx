'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppFloat() {
  const { language } = useLanguage();
  const { settings, createWhatsAppLink } = usePrice();

  const waLink = createWhatsAppLink('Fresh A2 Milk / Desi Ghee', 'Quick Order from Mobile');

  return (
    <>
      {/* Floating Action Buttons for Tablet / Desktop (bottom right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3">
        {/* Call Now Button */}
        <a
          href={`tel:${settings.phoneDisplay}`}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-forest text-white shadow-elevated hover:bg-forest-light hover:scale-105 transition-all text-xs font-bold border-2 border-warm"
          title="Direct Call to Shiv Kailash"
        >
          <Phone className="w-4 h-4" />
          <span>{language === 'hi' ? 'कॉल करें' : 'Call Owner'}</span>
        </a>

        {/* WhatsApp Order Floating Button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 transition-all animate-whatsapp-pulse border-2 border-white"
          title="Order on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[10px] font-bold text-white/90 leading-tight uppercase tracking-wider">
              {language === 'hi' ? 'सीधा संपर्क' : 'Instant Order'}
            </span>
            <span className="text-xs font-extrabold leading-tight">
              {language === 'hi' ? 'व्हाट्सएप पर ऑर्डर करें' : 'WhatsApp Order'}
            </span>
          </div>
        </a>
      </div>

      {/* Mobile-First Sticky Bottom Action Bar (Fixed on mobile screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-warm-cream/95 backdrop-blur-md border-t border-warm-border p-2.5 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${settings.phoneDisplay}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-forest text-white text-xs font-bold shadow active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span>{language === 'hi' ? 'कॉल करें' : 'Call Shiv Kailash'}</span>
        </a>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>{language === 'hi' ? 'WhatsApp ऑर्डर' : 'WhatsApp Order'}</span>
        </a>
      </div>
    </>
  );
}

