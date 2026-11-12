'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryItems } from '@/data/gallery';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, X, Maximize2, Camera } from 'lucide-react';
import { GalleryItem } from '@/types';

export default function GalleryPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Photos', labelHi: 'सभी तस्वीरें' },
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
            {language === 'hi' ? 'प्रामाणिक फार्म फोटोग्राफी' : 'Authentic Farm Photographs'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-forest">
            {language === 'hi' ? 'कैलाश कामधेनु फार्म गैलरी' : 'Kailash Kamdhenu Photo Gallery'}
          </h1>
          <p className="text-earth-muted text-sm sm:text-base mt-3 leading-relaxed">
            {language === 'hi'
              ? 'बरियारपुर फार्म में हमारी 25 साहीवाल व गीर गायों, पारंपरिक बिलौना घी निर्माण और दैनिक दूध संकलन की वास्तविक तस्वीरें।'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const title = language === 'hi' ? item.titleHi : item.titleEn;
            const caption = language === 'hi' ? item.captionHi : item.captionEn;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-all border border-warm-border bg-forest-soft"
              >
                <Image
                  src={item.image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover zoom icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold px-2 py-0.5 rounded bg-black/30 backdrop-blur-sm inline-block mb-1.5">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs text-warm-sand/90 mt-1 line-clamp-2">
                    {caption}
                  </p>
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
                    {selectedPhoto.category.toUpperCase()} • Kailash Kamdhenu Dairy Farm
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-0.5">
                    {language === 'hi' ? selectedPhoto.titleHi : selectedPhoto.titleEn}
                  </h3>
                  <p className="text-xs text-warm-sand mt-1">
                    {language === 'hi' ? selectedPhoto.captionHi : selectedPhoto.captionEn}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 rounded-xl bg-forest-light text-white text-xs font-bold hover:bg-forest transition-colors self-end sm:self-auto"
                >
                  {language === 'hi' ? 'बंद करें' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
