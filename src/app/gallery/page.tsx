'use client';

import React, { useState } from 'react';
import { galleryItems } from '@/data/gallery';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { Sparkles, X, Maximize2, Camera, MessageCircle } from 'lucide-react';
import { GalleryItem } from '@/types';
import SmartImage from '@/components/SmartImage';

export default function GalleryPage() {
  const { language, t } = useLanguage();
  const { createWhatsAppLink } = usePrice();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', labelEn: `All Photos (${galleryItems.length})`, labelHi: `सभी तस्वीरें (${galleryItems.length})` },
    { id: 'cows', labelEn: 'Sahiwal & Gir Cows', labelHi: 'साहीवाल व गीर गायें' },
    { id: 'ghee', labelEn: 'Bilona Ghee Making', labelHi: 'पारंपरिक बिलौना घी' },
    { id: 'milk', labelEn: 'Fresh A2 Milk', labelHi: 'ताजा शुद्ध A2 दूध' },
    { id: 'farm', labelEn: 'Farm Environment', labelHi: 'फार्म एवं हरा चारा' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="py-12 sm:py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-gold" />
            {language === 'hi' ? 'समस्त प्रामाणिक फोटो कार्ड्स' : 'Farm Photo Cards & Official Seal'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-forest">
            {language === 'hi' ? 'कैलाश कामधेनु फार्म गैलरी' : 'Kailash Kamdhenu Photo Gallery'}
          </h1>
          <p className="text-earth-muted text-sm sm:text-base mt-3 leading-relaxed">
            {language === 'hi'
              ? 'बरियारपुर फार्म में हमारी 25 साहीवाल व गीर गायों, पारंपरिक बिलौना घी निर्माण, शुद्ध दूध संकलन और हरे चारे के समस्त फोटो कार्ड।'
              : 'Glimpses of our 25 indigenous cows, traditional Vedic Bilona curd-churning, and the serene Gaushala environment in Bariyarpur, Deoria.'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-forest text-white shadow-md'
                    : 'bg-white text-earth-body border border-warm-border hover:border-forest/40 hover:text-forest'
                }`}
              >
                {language === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const title = language === 'hi' ? item.titleHi : item.titleEn;
            const caption = language === 'hi' ? item.captionHi : item.captionEn;
            const waInquiry = createWhatsAppLink(title, 'Gallery Photo Inquiry');

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-all border border-warm-border bg-forest-soft flex flex-col justify-between"
              >
                <div className="absolute inset-0">
                  <SmartImage
                    src={item.image}
                    alt={title}
                    category={item.category}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                </div>

                {/* Top Badges */}
                <div className="relative z-10 p-3.5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                    {item.category.toUpperCase()}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-80 group-hover:opacity-100 hover:bg-forest transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Details overlay */}
                <div className="relative z-10 p-4 text-white space-y-1">
                  <h3 className="font-serif font-bold text-base text-white leading-snug">
                    {title}
                  </h3>
                  <p className="text-[11px] text-warm-sand/90 line-clamp-2">
                    {caption}
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-gold font-bold">
                      {language === 'hi' ? 'बड़ा देखें ›' : 'Enlarge ›'}
                    </span>
                    <a
                      href={waInquiry}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#25D366] text-white text-[10px] font-bold"
                    >
                      <MessageCircle className="w-2.5 h-2.5 fill-white" />
                      <span>{language === 'hi' ? 'पूछें' : 'Ask'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
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
                <SmartImage
                  src={selectedPhoto.image}
                  alt={language === 'hi' ? selectedPhoto.titleHi : selectedPhoto.titleEn}
                  category={selectedPhoto.category}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Details bar */}
              <div className="p-6 bg-forest-dark border-t border-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">
                    {selectedPhoto.category.toUpperCase()} • Kailash Kamdhenu Dairy Farm
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
      </div>
    </div>
  );
}

