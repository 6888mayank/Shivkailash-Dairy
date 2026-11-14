'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { farmConfig } from '@/data/config';
import EnquiryForm from '@/components/EnquiryForm';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Truck,
  ExternalLink,
  ShieldCheck,
  Building,
} from 'lucide-react';

export default function ContactPage() {
  const { language, t } = useLanguage();
  const { settings, createWhatsAppLink } = usePrice();

  const waDirectLink = createWhatsAppLink('General Inquiry', 'Contact Page Quick Chat');

  return (
    <div className="py-12 sm:py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest-soft text-forest text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-forest" />
            {t.contactPage.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-forest">
            {t.contactPage.heading}
          </h1>
          <p className="text-earth-muted text-sm sm:text-base mt-4 leading-relaxed">
            {t.contactPage.subtitle}
          </p>
        </div>

        {/* 2 Columns: Contact Details & Interactive Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Direct Contact Info & Farm Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Owner Direct Call Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-border shadow-elevated">
              <div className="flex items-center gap-4 mb-5 pb-4 border-b border-warm-border">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold shadow-md shrink-0 bg-[#f4ebe1]">
                  <Image
                    src="/images/logo.jpg"
                    alt="Shiv Kailash Ram Krishna - SKRK Farm Emblem"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-gold-dark uppercase tracking-wider block">
                      {language === 'hi' ? 'सीधा संपर्क सूत्र' : 'Direct Farm Contact'}
                    </span>
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-gold/20 text-earth-dark border border-gold/40">
                      SKRK
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-forest">
                    {language === 'hi' ? farmConfig.ownerNameHi : farmConfig.ownerNameEn}
                  </h3>
                  <span className="text-xs text-earth-muted">
                    {language === 'hi' ? 'कैलाश कामधेनु डेयरी फार्म, बरियारपुर' : 'Kailash Kamdhenu Dairy Farm'}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Primary Phone */}
                <a
                  href={`tel:${settings.phoneDisplay}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-forest-soft hover:bg-forest hover:text-white text-forest transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest text-gold flex items-center justify-center shrink-0 group-hover:bg-forest-deep">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-earth-muted group-hover:text-warm-sand block uppercase font-bold">
                      {language === 'hi' ? 'कॉल करें (प्राथमिक)' : 'Primary Calling Number'}
                    </span>
                    <span className="text-base font-extrabold">{settings.phoneDisplay}</span>
                  </div>
                </a>

                {/* WhatsApp Chat */}
                <a
                  href={waDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-[10px] text-earth-muted group-hover:text-white/80 block uppercase font-bold">
                      {language === 'hi' ? 'WhatsApp चैट (तुरंत जवाब)' : 'WhatsApp Order & Chat'}
                    </span>
                    <span className="text-base font-extrabold">{settings.phoneDisplay}</span>
                  </div>
                </a>

                {/* Alternate Number */}
                <div className="p-3 bg-warm-cream rounded-xl text-xs text-earth-muted flex items-center justify-between">
                  <span>{language === 'hi' ? 'वैकल्पिक नंबर:' : 'Alternate Number:'}</span>
                  <a href={`tel:${farmConfig.altPhone}`} className="font-bold text-forest hover:underline">
                    {farmConfig.altPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Farm Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-border shadow-elevated">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-forest" />
                <h3 className="font-serif font-bold text-lg text-earth-dark">
                  {t.contactPage.farmLocationTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-earth-body leading-relaxed mb-4">
                {language === 'hi' ? farmConfig.addressHi : farmConfig.addressEn}
              </p>

              <div className="p-3.5 rounded-xl bg-forest-soft text-forest text-xs space-y-1 mb-5">
                <p className="font-bold">
                  {language === 'hi' ? 'गौशाला दर्शन समय:' : 'Gaushala Visiting Hours:'}
                </p>
                <p>
                  {language === 'hi' ? 'सुबह 6:00 - 11:00 | शाम 4:00 - 7:00 (प्रतिदिन)' : 'Morning 6:00 - 11:00 AM | Evening 4:00 - 7:00 PM (Daily)'}
                </p>
              </div>

              <a
                href={farmConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest text-white text-xs font-bold shadow hover:bg-forest-light transition-colors"
              >
                <span>{t.contactPage.directionsText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Delivery Locations Summary */}
            <div className="bg-forest-deep text-white rounded-3xl p-6 sm:p-8 border border-gold/30 shadow-elevated">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="w-5 h-5 text-gold" />
                <h3 className="font-serif font-bold text-lg text-white">
                  {t.contactPage.deliveryLocationsTitle}
                </h3>
              </div>
              <p className="text-xs text-warm-sand mb-4 leading-relaxed">
                {language === 'hi'
                  ? 'देवरिया और गोरखपुर शहर में प्रतिदिन सुबह ताज़ा दूध एवं घी की होम डिलीवरी की जाती है।'
                  : 'Daily doorstep delivery of fresh raw A2 milk and Vedic Bilona Ghee across Deoria and Gorakhpur.'}
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white/10 flex items-center justify-between">
                  <span className="font-bold text-gold">Deoria</span>
                  <span className="text-warm-sand text-[11px]">5:30 AM – 8:30 AM</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/10 flex items-center justify-between">
                  <span className="font-bold text-gold">Gorakhpur</span>
                  <span className="text-warm-sand text-[11px]">6:00 AM – 9:30 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-filled WhatsApp Order / Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-warm-border shadow-elevated overflow-hidden">
          <div className="flex items-center justify-between mb-4 px-2">
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-forest">
                {language === 'hi' ? 'फार्म का सटीक गूगल मैप्स स्थान' : 'Farm Exact Google Maps Location'}
              </h3>
              <p className="text-xs text-earth-muted">
                Village Bariyarpur, Tola Rampur, Post - Bhahara, Deoria, U.P. (274001)
              </p>
            </div>
            <a
              href={farmConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-forest hover:text-gold flex items-center gap-1"
            >
              <span>{language === 'hi' ? 'बड़े नक्शे में खोलें' : 'Open in Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-warm-border bg-warm-cream">
            <iframe
              src={farmConfig.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kailash Kamdhenu Dairy Farm Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

