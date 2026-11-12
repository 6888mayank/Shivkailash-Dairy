'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { MessageCircle, Check, Sparkles, Shield, Heart, Clock } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();
  const { createWhatsAppLink } = usePrice();

  // default to first variant
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const activeVariant = product.variants[selectedVariantIndex] || product.variants[0];

  const productName = language === 'hi' ? product.nameHi : product.nameEn;
  const activeSizeName = language === 'hi' ? activeVariant.sizeHi : activeVariant.size;

  // WhatsApp link with pre-filled product name and quantity
  const whatsappUrl = createWhatsAppLink(productName, `${activeSizeName} (₹${activeVariant.price})`);

  return (
    <div className="bg-white rounded-3xl border border-warm-border shadow-elevated overflow-hidden flex flex-col justify-between hover:border-gold/60 transition-all duration-300 group">
      <div>
        {/* Product Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-forest-soft">
          <Image
            src={product.image}
            alt={productName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badges on Image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {(language === 'hi' ? product.badgesHi : product.badgesEn).slice(0, 2).map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-forest/90 text-white shadow-md backdrop-blur-sm border border-white/20"
              >
                <Sparkles className="w-3 h-3 text-gold" />
                {badge}
              </span>
            ))}
          </div>

          {/* Product Title overlay on image bottom */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-semibold text-gold uppercase tracking-wider block">
              {language === 'hi' ? product.subtitleHi : product.subtitleEn}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight drop-shadow-sm">
              {productName}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Description */}
          <p className="text-xs sm:text-sm text-earth-body leading-relaxed">
            {language === 'hi' ? product.descriptionHi : product.descriptionEn}
          </p>

          {/* Quantity Selector Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-forest uppercase tracking-wider block">
              {t.products.selectQuantity}
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {product.variants.map((variant, idx) => {
                const isSelected = idx === selectedVariantIndex;
                const sizeLabel = language === 'hi' ? variant.sizeHi : variant.size;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`py-2.5 px-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-forest bg-forest-soft text-forest shadow-sm ring-2 ring-forest/30'
                        : 'border-warm-border bg-warm-cream/50 text-earth-body hover:border-forest/40'
                    }`}
                  >
                    <span className="text-xs font-bold">{sizeLabel}</span>
                    <span className="text-[11px] font-extrabold text-forest mt-0.5">
                      {language === 'hi' ? `₹${variant.price}* से शुरू` : `From ₹${variant.price}*`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Highlight Box with Variable Notice */}
          <div className="bg-warm-card border border-gold/40 rounded-2xl p-4 shadow-soft space-y-2.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold text-forest uppercase tracking-wider block">
                  {t.products.indicativePrice}
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-xs font-bold text-earth-muted">
                    {language === 'hi' ? 'लगभग' : 'Approx'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-forest font-serif">
                    ₹{activeVariant.price}*
                  </span>
                  <span className="text-xs font-medium text-earth-muted">
                    / {activeSizeName}
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-forest/10 text-forest border border-forest/20 shrink-0">
                {activeVariant.unit}
              </span>
            </div>

            {/* Variable Price & WhatsApp Divert Banner */}
            <div className="p-2.5 rounded-xl bg-gold/15 border border-gold/30 text-[11px] text-earth-dark flex items-start gap-2">
              <span className="text-gold-dark text-sm leading-none mt-0.5">💬</span>
              <p className="leading-snug">
                <strong>{language === 'hi' ? 'सटीक रेट के लिए:' : 'For Exact Price:'}</strong>{' '}
                {language === 'hi'
                  ? 'मौसम व दैनिक बैच अनुसार मूल्य में अंतर संभव है। आज का सटीक रेट जानने हेतु सीधे WhatsApp पर पूछें।'
                  : 'Prices vary slightly based on season & daily fresh batch. Tap WhatsApp below for today’s exact quote.'}
              </p>
            </div>
          </div>

          {/* Key Benefits List */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-earth-dark uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-forest" />
              {t.products.benefitsTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-earth-muted">
              {(language === 'hi' ? product.benefitsHi : product.benefitsEn).map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Storage / Shelf Life info */}
          <div className="pt-2 border-t border-warm-border text-[11px] text-earth-muted/80 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>
              <strong className="text-earth-dark">{t.products.shelfLife}</strong>{' '}
              {language === 'hi' ? product.shelfLifeHi : product.shelfLifeEn}
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer: WhatsApp Order button */}
      <div className="p-6 pt-0 bg-white">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md hover:shadow-elevated transition-all group-hover:scale-[1.01]"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span>
            {language === 'hi'
              ? `${activeSizeName} का सटीक रेट व ऑर्डर WhatsApp पर जानें`
              : `Get Today's Exact Rate for ${activeSizeName} on WhatsApp`}
          </span>
        </a>
        <p className="text-center text-[10px] text-earth-muted mt-2">
          {language === 'hi'
            ? '💬 क्लिक करते ही सटीक रेट और डिलीवरी पुष्टि के लिए WhatsApp खुल जाएगा।'
            : '💬 Opens WhatsApp with your selected product & size for today’s accurate rate.'}
        </p>
      </div>
    </div>
  );
}

