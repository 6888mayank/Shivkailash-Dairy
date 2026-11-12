'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { farmConfig } from '@/data/config';
import {
  MapPin,
  Clock,
  Truck,
  CheckCircle,
  Phone,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

export default function DeliveryZones() {
  const { language, t } = useLanguage();
  const { settings, createWhatsAppLink } = usePrice();

  const deoriaWa = createWhatsAppLink('Milk & Ghee Delivery', 'Deoria City Delivery Route');
  const gorakhpurWa = createWhatsAppLink('Milk & Ghee Delivery', 'Gorakhpur Express Route');

  return (
    <section className="py-16 sm:py-24 bg-warm border-t border-warm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-4 h-4 text-forest" />
            {t.delivery.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-forest">
            {t.delivery.title}
          </h2>
          <p className="text-earth-muted text-sm sm:text-base mt-3 leading-relaxed">
            {t.delivery.subtitle}
          </p>
        </div>

        {/* 2 Hub Cards: Deoria and Gorakhpur */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Deoria Hub */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-forest/20 shadow-elevated flex flex-col justify-between hover:border-forest/60 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-forest-soft text-forest uppercase tracking-wider">
                  {language === 'hi' ? 'दैनिक सुबह व शाम रूट' : 'Daily Morning & Evening Route'}
                </span>
                <span className="text-xs font-bold text-forest flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-dark" />
                  Deoria (HQ)
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-forest mb-2">
                {language === 'hi' ? farmConfig.deliveryAreas.deoria.nameHi : farmConfig.deliveryAreas.deoria.nameEn}
              </h3>

              <div className="flex items-center gap-2 text-xs font-semibold text-earth-dark bg-warm-cream p-3 rounded-xl mb-5">
                <Clock className="w-4 h-4 text-gold-dark shrink-0" />
                <span>
                  <strong>{t.delivery.timings}</strong>{' '}
                  {language === 'hi'
                    ? farmConfig.deliveryAreas.deoria.timingsHi
                    : farmConfig.deliveryAreas.deoria.timingsEn}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-earth-muted uppercase tracking-wider">
                  {t.delivery.areasCovered}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(language === 'hi'
                    ? farmConfig.deliveryAreas.deoria.localitiesHi
                    : farmConfig.deliveryAreas.deoria.localitiesEn
                  ).map((locality, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-warm-card border border-warm-border text-earth-body"
                    >
                      ✓ {locality}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-warm-border flex flex-col sm:flex-row gap-3">
              <a
                href={deoriaWa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{language === 'hi' ? 'देवरिया डिलीवरी ऑर्डर करें' : 'Order Deoria Delivery'}</span>
              </a>
              <a
                href={`tel:${settings.phoneDisplay}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest/10 hover:bg-forest/20 text-forest text-xs font-bold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'hi' ? 'कॉल करें' : 'Call'}</span>
              </a>
            </div>
          </div>

          {/* Gorakhpur Hub */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-gold/30 shadow-elevated flex flex-col justify-between hover:border-gold/70 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/20 text-earth-dark uppercase tracking-wider">
                  {language === 'hi' ? 'एक्सप्रेस प्रातःकाल रूट' : 'Express Morning Route'}
                </span>
                <span className="text-xs font-bold text-earth-dark flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-forest" />
                  Gorakhpur City
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-forest mb-2">
                {language === 'hi' ? farmConfig.deliveryAreas.gorakhpur.nameHi : farmConfig.deliveryAreas.gorakhpur.nameEn}
              </h3>

              <div className="flex items-center gap-2 text-xs font-semibold text-earth-dark bg-warm-cream p-3 rounded-xl mb-5">
                <Clock className="w-4 h-4 text-gold-dark shrink-0" />
                <span>
                  <strong>{t.delivery.timings}</strong>{' '}
                  {language === 'hi'
                    ? farmConfig.deliveryAreas.gorakhpur.timingsHi
                    : farmConfig.deliveryAreas.gorakhpur.timingsEn}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-earth-muted uppercase tracking-wider">
                  {t.delivery.areasCovered}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(language === 'hi'
                    ? farmConfig.deliveryAreas.gorakhpur.localitiesHi
                    : farmConfig.deliveryAreas.gorakhpur.localitiesEn
                  ).map((locality, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-warm-card border border-warm-border text-earth-body"
                    >
                      ✓ {locality}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-warm-border flex flex-col sm:flex-row gap-3">
              <a
                href={gorakhpurWa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{language === 'hi' ? 'गोरखपुर डिलीवरी ऑर्डर करें' : 'Order Gorakhpur Delivery'}</span>
              </a>
              <a
                href={`tel:${settings.phoneDisplay}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest/10 hover:bg-forest/20 text-forest text-xs font-bold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'hi' ? 'कॉल करें' : 'Call'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Notice & Google Maps Button */}
        <div className="p-4 rounded-2xl bg-forest-soft text-forest border border-forest/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className="text-base">📍</span>
            <span>
              {language === 'hi'
                ? 'हमारा फार्म ग्राम बरियारपुर, टोला रामपुर (पोस्ट - भाहरा), देवरिया (उ.प्र. 274001) में स्थित है। आप फार्म पर आकर भी शुद्ध दूध व घी ले सकते हैं।'
                : 'Our farm is located at Village Bariyarpur, Tola Rampur, Post - Bhahara, Deoria (U.P. 274001). You are welcome to visit our Gaushala anytime.'}
            </span>
          </div>
          <a
            href={farmConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest text-white text-xs font-bold shadow hover:bg-forest-light shrink-0 transition-colors"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

