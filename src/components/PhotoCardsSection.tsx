'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { galleryItems } from '@/data/gallery';
import { GalleryItem } from '@/types';
import {
  Camera,
  Maximize2,
  X,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Award,
} from 'lucide-react';

export default function PhotoCardsSection() {
  const { language } = useLanguage();
  const { createWhatsAppLink } = usePrice();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'cows' | 'ghee' | 'milk'>('all');

  const filteredItems =
    filter === 'all'
      ? galleryItems.slice(0, 6)
      : galleryItems.filter((item) => item.category === filter).slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-warm border-t border-warm-border" id="photo-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-gold" />
            {language === 'hi' ? 'प्रामाणिक फोटो कार्ड्स' : 'Authentic Farm Photo Cards'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest">
            {language === 'hi'
              ? 'हमारे फार्म की वास्तविक झलकियां'
              : 'Real Moments from Kailash Kamdhenu Farm'}
          </h2>
          <p className="text-earth-muted text-sm sm:text-base mt-3 leading-relaxed">
            {language === 'hi'
              ? '25 साहीवाल व गीर गायें, वैदिक बिलौना मंथन और बरियारपुर (देवरिया) फार्म के प्राकृतिक वातावरण के वास्तविक फोटो कार्ड।'
              : 'Genuine photographs of our 25 indigenous cows, traditional wooden Bilona churning, and our clean Gaushala at Bariyarpur, Deoria.'}
          </p>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-forest text-white shadow-sm'
                  : 'bg-warm-cream text-earth-body border border-warm-border hover:border-forest/40'
              }`}
            >
              {language === 'hi' ? 'सभी फोटो कार्ड' : 'All Photo Cards'}
            </button>
            <button
              onClick={() => setFilter('cows')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'cows'
                  ? 'bg-forest text-white shadow-sm'
                  : 'bg-warm-cream text-earth-body border border-warm-border hover:border-forest/40'
              }`}
            >
              {language === 'hi' ? '🐄 साहीवाल व गीर गायें' : '🐄 Sahiwal & Gir Cows'}
            </button>
            <button
              onClick={() => setFilter('ghee')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'ghee'
                  ? 'bg-forest text-white shadow-sm'
                  : 'bg-warm-cream text-earth-body border border-warm-border hover:border-forest/40'
              }`}
            >
              {language === 'hi' ? '🍯 बिलौना घी निर्माण' : '🍯 Bilona Ghee Making'}
            </button>
            <button
              onClick={() => setFilter('milk')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'milk'
                  ? 'bg-forest text-white shadow-sm'
                  : 'bg-warm-cream text-earth-body border border-warm-border hover:border-forest/40'
              }`}
            >
              {language === 'hi' ? '🥛 ताजा शुद्ध A2 दूध' : '🥛 Fresh A2 Milk'}
            </button>
          </div>
        </div>

        {/* Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const title = language === 'hi' ? item.titleHi : item.titleEn;
            const caption = language === 'hi' ? item.captionHi : item.captionEn;
            const waInquiry = createWhatsAppLink(title, 'Photo Card Inquiry');

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-warm-border shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:border-gold/60"
              >
                <div>
                  {/* Photo Container */}
                  <div
                    className="relative h-64 sm:h-72 w-full overflow-hidden bg-forest-soft cursor-pointer"
                    onClick={() => setSelectedPhoto(item)}
                  >
                    <Image
                      src={item.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest/90 text-white text-[11px] font-bold shadow-md backdrop-blur-sm border border-white/20">
                        <Sparkles className="w-3 h-3 text-gold" />
                        {item.category === 'cows'
                          ? language === 'hi'
                            ? 'देसी गोवंश'
                            : 'Indigenous Cow'
                          : item.category === 'ghee'
                          ? language === 'hi'
                            ? 'वैदिक बिलौना'
                            : 'Vedic Bilona'
                          : item.category === 'milk'
                          ? language === 'hi'
                            ? 'ताजा A2 दूध'
                            : 'Raw A2 Milk'
                          : language === 'hi'
                          ? 'फार्म परिसर'
                          : 'Farm Facility'}
                      </span>
                    </div>

                    {/* Zoom Icon Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPhoto(item);
                      }}
                      className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-80 hover:opacity-100 hover:bg-forest transition-all"
                      title={language === 'hi' ? 'बड़ी फोटो देखें' : 'View Fullscreen'}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-2">
                    <h3 className="font-serif font-bold text-lg text-earth-dark group-hover:text-forest transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-earth-muted leading-relaxed line-clamp-2">
                      {caption}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0 flex items-center justify-between border-t border-warm-border/60 mt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(item)}
                    className="text-xs font-bold text-forest hover:text-gold-dark transition-colors flex items-center gap-1"
                  >
                    <span>{language === 'hi' ? 'बड़ी फोटो देखें' : 'Enlarge'}</span>
                    <span>›</span>
                  </button>

                  <a
                    href={waInquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white text-xs font-bold transition-all"
                    title="Ask on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>{language === 'hi' ? 'WhatsApp पूछें' : 'Inquire'}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Gallery Link Button */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-2xl bg-forest hover:bg-forest-light text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-elevated transition-all"
          >
            <span>{language === 'hi' ? 'पूरी फार्म फोटो गैलरी देखें' : 'View Full Photo Gallery'}</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-forest-deep text-white rounded-3xl overflow-hidden shadow-2xl border border-gold/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo */}
            <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black">
              <Image
                src={selectedPhoto.image}
                alt={language === 'hi' ? selectedPhoto.titleHi : selectedPhoto.titleEn}
                fill
                className="object-contain"
              />
            </div>

            {/* Details bar */}
            <div className="p-6 bg-forest-dark border-t border-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-wider">
                  Kailash Kamdhenu Dairy Farm • Bariyarpur, Deoria
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                  {language === 'hi' ? selectedPhoto.titleHi : selectedPhoto.titleEn}
                </h3>
                <p className="text-xs text-warm-sand mt-1">
                  {language === 'hi' ? selectedPhoto.captionHi : selectedPhoto.captionEn}
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <a
                  href={createWhatsAppLink(
                    language === 'hi' ? selectedPhoto.titleHi : selectedPhoto.titleEn,
                    'Photo Inquiry'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow hover:bg-[#20ba59] transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>{language === 'hi' ? 'WhatsApp पर पूछें' : 'Ask on WhatsApp'}</span>
                </a>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-xl bg-forest-light text-white text-xs font-bold hover:bg-forest transition-colors"
                >
                  {language === 'hi' ? 'बंद करें' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
