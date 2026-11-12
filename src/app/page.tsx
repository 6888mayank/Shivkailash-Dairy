'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { farmConfig } from '@/data/config';
import TrustIndicators from '@/components/TrustIndicators';
import ProductCard from '@/components/ProductCard';
import CowBreeds from '@/components/CowBreeds';
import QualityProcess from '@/components/QualityProcess';
import DeliveryZones from '@/components/DeliveryZones';
import TestimonialsSection from '@/components/TestimonialsSection';
import {
  MessageCircle,
  Phone,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Milk,
  CheckCircle,
} from 'lucide-react';

export default function HomePage() {
  const { language, t } = useLanguage();
  const { settings, products, createWhatsAppLink } = usePrice();

  const heroWaLink = createWhatsAppLink('Pure A2 Milk & Desi Ghee', 'Doorstep Delivery Inquiry');

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-forest-deep text-white overflow-hidden">
        {/* Background Hero Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=2000&q=85"
            alt="Gir and Sahiwal Cow at Kailash Kamdhenu Dairy Farm"
            fill
            priority
            className="object-cover object-center brightness-75 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs sm:text-sm font-bold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white leading-tight">
              {t.hero.heading}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-serif font-medium text-gold leading-snug">
              {t.hero.subtitle}
            </p>

            {/* Narrative Description */}
            <p className="text-sm sm:text-base text-warm-sand max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* WhatsApp Order & Call Now CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* WhatsApp Order Button */}
              <a
                href={heroWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 py-4 px-7 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-elevated hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t.hero.orderWhatsapp}</span>
              </a>

              {/* Call Now Button */}
              <a
                href={`tel:${settings.phoneDisplay}`}
                className="inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/30 backdrop-blur-sm transition-all"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>{t.hero.callOwner}</span>
              </a>

              {/* View Products */}
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 py-4 px-5 rounded-2xl text-gold hover:text-white text-sm font-semibold transition-colors"
              >
                <span>{t.hero.viewProducts}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 4 Trust Highlights Below Hero */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/20">
              {t.hero.trustBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10"
                >
                  <p className="text-xs sm:text-sm font-serif font-bold text-gold">
                    {badge.label}
                  </p>
                  <p className="text-[11px] text-warm-sand/80 mt-0.5">
                    {badge.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS SECTION */}
      <TrustIndicators />

      {/* FEATURED PRODUCTS & PRICING SECTION */}
      <section className="py-16 sm:py-24 bg-warm" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
              <Milk className="w-3.5 h-3.5 text-forest" />
              {t.products.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest">
              {t.products.title}
            </h2>
            <p className="text-earth-muted text-sm sm:text-base mt-3 leading-relaxed">
              {t.products.subtitle}
            </p>
          </div>

          {/* Product Cards Grid (Milk & Ghee) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Quick Informational Notice */}
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-earth-muted max-w-xl mx-auto bg-warm-cream p-4 rounded-2xl border border-warm-border">
              ✨ {t.products.customQuantityNotice}
            </p>
          </div>
        </div>
      </section>

      {/* OUR COWS SECTION (Sahiwal and Gir) */}
      <CowBreeds />

      {/* HOW WE MAINTAIN QUALITY & VEDIC BILONA PROCESS */}
      <QualityProcess />

      {/* DELIVERY AREA SECTION (Deoria & Gorakhpur) */}
      <DeliveryZones />

      {/* CUSTOMER TESTIMONIALS (Genuine Reviews) */}
      <TestimonialsSection />

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="py-16 bg-forest text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase tracking-wider">
            {language === 'hi' ? 'सीधा संपर्क • शुद्ध भरोसा' : 'Direct Contact • 100% Pure Trust'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
            {language === 'hi'
              ? 'आज ही अपने परिवार के लिए शुद्ध A2 दूध व बिलौना घी मंगाएं'
              : 'Begin Your Family’s Journey to Sacred A2 Purity Today'}
          </h2>
          <p className="text-sm sm:text-base text-warm-sand max-w-2xl mx-auto">
            {language === 'hi'
              ? 'देवरिया और गोरखपुर में प्रतिदिन सुबह ताजा डिलीवरी। सीधे फार्म संचालक शिव कैलाश जी से बात करें।'
              : 'Fresh daily morning doorstep delivery across Deoria & Gorakhpur. Connect directly with farm owner Shiv Kailash.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={heroWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-elevated transition-transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{language === 'hi' ? 'WhatsApp पर तुरंत संपर्क करें' : 'Order on WhatsApp Now'}</span>
            </a>
            <a
              href={`tel:${settings.phoneDisplay}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-2xl bg-white text-forest font-bold text-base shadow-elevated hover:bg-warm-cream transition-transform hover:scale-105"
            >
              <Phone className="w-5 h-5 text-forest" />
              <span>{settings.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
