'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Globe,
  Milk,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const { settings, createWhatsAppLink } = usePrice();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/products', label: t.nav.products },
    { href: '/about', label: t.nav.about },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/contact', label: t.nav.contact },
  ];

  const defaultWaLink = createWhatsAppLink('Fresh A2 Milk / Desi Ghee', 'General Order & Enquiry');

  return (
    <header className="sticky top-0 z-40 bg-warm/95 backdrop-blur-md border-b border-warm-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Farm Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-gold shadow-md shrink-0 group-hover:scale-105 transition-transform bg-[#f4ebe1]">
              <Image
                src="/images/logo.jpg"
                alt="Shiv Kailash Ram Krishna - Kailash Kamdhenu Dairy Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-base sm:text-lg text-forest tracking-tight leading-tight">
                  {language === 'hi' ? 'कैलाश कामधेनु' : 'Kailash Kamdhenu'}
                </span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-gold/25 text-earth-dark border border-gold/40">
                  SKRK
                </span>
              </div>
              <span className="text-xs sm:text-xs font-semibold text-gold-dark tracking-wide">
                {language === 'hi' ? 'शुद्धता का विश्वास • शुद्ध दूध' : 'Shuddhata Ka Vishwas'}
              </span>
              <span className="text-[10px] text-earth-muted font-medium hidden sm:inline-block">
                Bariyarpur, Deoria • 25 Desi Cows
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors px-2 py-1 rounded-md ${
                    isActive
                      ? 'text-forest font-bold border-b-2 border-forest'
                      : 'text-earth-body hover:text-forest hover:bg-forest-soft/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-forest/30 bg-warm-cream hover:bg-forest-soft text-forest text-xs font-bold transition-all shadow-sm"
              title="Switch Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-forest" />
              <span>{language === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>

            {/* Call Owner Button */}
            <a
              href={`tel:${settings.phoneDisplay}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-forest/10 hover:bg-forest/20 text-forest text-xs font-bold transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.nav.callNow}</span>
            </a>

            {/* Direct WhatsApp Order CTA */}
            <a
              href={defaultWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.nav.whatsappOrder}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Language Toggle & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-forest/30 bg-warm-cream text-forest text-xs font-bold"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'hi' ? 'EN' : 'हिं'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-forest hover:bg-forest-soft focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-warm-border bg-warm px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-forest text-white font-bold'
                      : 'text-earth-body hover:bg-forest-soft hover:text-forest'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-warm-border">
            <a
              href={`tel:${settings.phoneDisplay}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-forest text-white text-xs font-bold shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.callNow}</span>
            </a>
            <a
              href={defaultWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366] text-white text-xs font-bold shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

