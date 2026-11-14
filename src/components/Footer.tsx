'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { farmConfig } from '@/data/config';
import {
  Milk,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  ExternalLink,
} from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();
  const { settings, createWhatsAppLink } = usePrice();

  const waLink = createWhatsAppLink('Milk & Ghee Inquiry', 'Delivery in Deoria / Gorakhpur');

  return (
    <footer className="bg-forest-deep text-warm-cream pt-16 pb-24 lg:pb-12 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold shadow-lg bg-[#f4ebe1] shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Shiv Kailash Ram Krishna - Kailash Kamdhenu Dairy Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif font-bold text-xl text-white">
                    {language === 'hi' ? farmConfig.farmNameHi : farmConfig.farmNameEn}
                  </h3>
                  <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-gold/20 text-gold border border-gold/40">
                    SKRK
                  </span>
                </div>
                <p className="text-xs font-semibold text-gold">
                  {language === 'hi' ? 'शुद्धता का विश्वास • सच्चा विश्वास।' : 'Shuddhata Ka Vishwas'}
                </p>
              </div>
            </div>

            <p className="text-warm-sand text-xs leading-relaxed">
              {t.footer.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gold font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>
                {language === 'hi'
                  ? '25 देसी गायें (साहीवाल व गीर) • 100% शुद्धता'
                  : '25 Indigenous Cows • 100% Raw A2 Purity'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-gold uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-warm-sand">
              <li>
                <Link href="/" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span>›</span> {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span>›</span> {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span>›</span> {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span>›</span> {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span>›</span> {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-gold uppercase tracking-wider">
              {t.footer.serviceAreas}
            </h4>
            <div className="space-y-3 text-xs text-warm-sand">
              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                <p className="font-bold text-white mb-1">
                  {language === 'hi' ? 'देवरिया जिला एवं शहर' : 'Deoria District & City'}
                </p>
                <p className="text-[11px] text-warm-sand/80">
                  {language === 'hi' ? 'सुबह 5:30 - 8:30 | शाम 5:00 - 7:30' : 'Morning 5:30 - 8:30 AM | Evening 5:00 - 7:30 PM'}
                </p>
                <p className="text-[10px] text-gold mt-1">Raghav Nagar, Civil Lines, Bhatwaliya & more</p>
              </div>

              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                <p className="font-bold text-white mb-1">
                  {language === 'hi' ? 'गोरखपुर शहर एक्सप्रेस' : 'Gorakhpur Express'}
                </p>
                <p className="text-[11px] text-warm-sand/80">
                  {language === 'hi' ? 'सुबह 6:00 - 9:30 बजे ताजा डिलीवरी' : 'Morning 6:00 - 9:30 AM Fresh Delivery'}
                </p>
                <p className="text-[10px] text-gold mt-1">Golghar, Medical Road, Taramandal & more</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-gold uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs text-warm-sand">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  {language === 'hi' ? farmConfig.addressHi : farmConfig.addressEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <a
                    href={`tel:${settings.phoneDisplay}`}
                    className="font-bold text-white hover:text-gold transition-colors text-sm"
                  >
                    {settings.phoneDisplay}
                  </a>
                  <p className="text-[10px] text-warm-sand/70">
                    {language === 'hi' ? 'शिव कैलाश (फार्म संचालक)' : 'Shiv Kailash (Farm Owner)'}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{language === 'hi' ? 'WhatsApp पर संदेश भेजें' : 'Chat on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Disclaimer & Copyright */}
        <div className="pt-8 text-center text-xs text-warm-sand/70 space-y-3">
          <p className="max-w-3xl mx-auto text-[11px] leading-relaxed bg-white/5 py-2 px-4 rounded-lg border border-white/5">
            ℹ️ {t.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[11px]">
            <p>
              © {new Date().getFullYear()} {farmConfig.farmNameEn}. {t.footer.copyright}
            </p>
            <p className="flex items-center gap-1 text-gold">
              <span>Made with devotion for Indian Gomata</span>
              <Heart className="w-3.5 h-3.5 fill-gold text-gold inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

