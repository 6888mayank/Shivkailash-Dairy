'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice, PriceSettings } from '@/context/PriceContext';
import {
  Settings,
  Save,
  RotateCcw,
  CheckCircle2,
  Milk,
  Phone,
  MessageCircle,
  Eye,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

export default function AdminPage() {
  const { language, t } = useLanguage();
  const { settings, updateSettings, resetSettings } = usePrice();

  const [formValues, setFormValues] = useState<PriceSettings>(settings);
  const [savedAlert, setSavedAlert] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      milk500: Number(formValues.milk500),
      milk1000: Number(formValues.milk1000),
      ghee500: Number(formValues.ghee500),
      ghee1000: Number(formValues.ghee1000),
      phoneDisplay: formValues.phoneDisplay,
      whatsappNumber: formValues.whatsappNumber,
      announcementTextEn: formValues.announcementTextEn,
      announcementTextHi: formValues.announcementTextHi,
    });
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 4000);
  };

  const handleReset = () => {
    if (
      confirm(
        language === 'hi'
          ? 'क्या आप सभी मूल्य और विवरण पूर्ववत (डिफ़ॉल्ट) करना चाहते हैं?'
          : 'Are you sure you want to reset all prices and settings to original defaults?'
      )
    ) {
      resetSettings();
      // reload defaults into form
      window.location.reload();
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'hi' ? 'मुख्य पृष्ठ पर वापस जाएं' : 'Back to Home'}</span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-forest-deep text-white rounded-3xl p-6 sm:p-10 mb-8 border border-gold/30 shadow-elevated">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gold text-forest-deep flex items-center justify-center font-bold">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {t.admin.title}
              </h1>
              <p className="text-xs sm:text-sm text-warm-sand">
                {t.admin.subtitle}
              </p>
            </div>
          </div>
        </div>

        {savedAlert && (
          <div className="mb-6 p-4 rounded-2xl bg-forest text-white flex items-center gap-3 shadow-lg animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
            <p className="text-xs sm:text-sm font-semibold">
              {t.admin.savedSuccess}
            </p>
          </div>
        )}

        {/* Edit Form */}
        <form onSubmit={handleSave} className="space-y-8">
          {/* Section 1: Product Prices */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-border shadow-elevated space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-warm-border">
              <Milk className="w-5 h-5 text-forest" />
              <h2 className="text-lg font-serif font-bold text-forest">
                {language === 'hi' ? 'उत्पाद मूल्य निर्धारण (₹)' : 'Product Pricing Settings (₹)'}
              </h2>
            </div>

            <div className="p-3 bg-gold/15 rounded-xl border border-gold/30 text-xs text-earth-dark">
              💡 {language === 'hi'
                ? 'नोट: वेबसाइट पर कीमतें सांकेतिक/प्रारंभिक दरों ("₹... से शुरू*") के रूप में दिखती हैं। सटीक मूल्य और ऑर्डर के लिए ग्राहक को WhatsApp पर डायवर्ट किया जाता है।'
                : 'Note: Prices appear on the website as indicative starting rates ("From ₹...*"). For the exact price quote and order, customers are diverted to WhatsApp.'}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Milk 500ml */}
              <div>
                <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-2">
                  🥛 {t.admin.milkPrice500}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm font-bold text-earth-muted">₹</span>
                  <input
                    type="number"
                    min="1"
                    value={formValues.milk500}
                    onChange={(e) =>
                      setFormValues({ ...formValues, milk500: Number(e.target.value) })
                    }
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-warm-border text-sm font-bold text-forest focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
              </div>

              {/* Milk 1000ml */}
              <div>
                <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-2">
                  🥛 {t.admin.milkPrice1000}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm font-bold text-earth-muted">₹</span>
                  <input
                    type="number"
                    min="1"
                    value={formValues.milk1000}
                    onChange={(e) =>
                      setFormValues({ ...formValues, milk1000: Number(e.target.value) })
                    }
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-warm-border text-sm font-bold text-forest focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
              </div>

              {/* Ghee 500g */}
              <div>
                <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-2">
                  🍯 {t.admin.gheePrice500}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm font-bold text-earth-muted">₹</span>
                  <input
                    type="number"
                    min="1"
                    value={formValues.ghee500}
                    onChange={(e) =>
                      setFormValues({ ...formValues, ghee500: Number(e.target.value) })
                    }
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-warm-border text-sm font-bold text-forest focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
              </div>

              {/* Ghee 1000g */}
              <div>
                <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-2">
                  🍯 {t.admin.gheePrice1000}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm font-bold text-earth-muted">₹</span>
                  <input
                    type="number"
                    min="1"
                    value={formValues.ghee1000}
                    onChange={(e) =>
                      setFormValues({ ...formValues, ghee1000: Number(e.target.value) })
                    }
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-warm-border text-sm font-bold text-forest focus:outline-none focus:ring-2 focus:ring-forest"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Contact Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-border shadow-elevated space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-warm-border">
              <Phone className="w-5 h-5 text-forest" />
              <h2 className="text-lg font-serif font-bold text-forest">
                {language === 'hi' ? 'फोन व WhatsApp संपर्क नंबर' : 'Owner Phone & WhatsApp Settings'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-2">
                  {t.admin.phoneField}
                </label>
                <input
                  type="text"
                  value={formValues.phoneDisplay}
                  onChange={(e) =>
                    setFormValues({ ...formValues, phoneDisplay: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-warm-border text-sm font-bold text-earth-dark focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-2">
                  {t.admin.whatsappField}
                </label>
                <input
                  type="text"
                  value={formValues.whatsappNumber}
                  onChange={(e) =>
                    setFormValues({ ...formValues, whatsappNumber: e.target.value })
                  }
                  placeholder="e.g. 919450528143"
                  className="w-full px-4 py-2.5 rounded-xl border border-warm-border text-sm font-bold text-earth-dark focus:outline-none focus:ring-2 focus:ring-forest"
                />
                <p className="text-[10px] text-earth-muted mt-1">
                  Include country code (91) without +, spaces or dashes for wa.me links.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Announcement Message */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-border shadow-elevated space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-warm-border">
              <Sparkles className="w-5 h-5 text-gold" />
              <h2 className="text-lg font-serif font-bold text-forest">
                {language === 'hi' ? 'शीर्ष बैनर संदेश' : 'Top Banner Announcement Text'}
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-1.5">
                  Banner Text (Hindi)
                </label>
                <input
                  type="text"
                  value={formValues.announcementTextHi}
                  onChange={(e) =>
                    setFormValues({ ...formValues, announcementTextHi: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-1.5">
                  Banner Text (English)
                </label>
                <input
                  type="text"
                  value={formValues.announcementTextEn}
                  onChange={(e) =>
                    setFormValues({ ...formValues, announcementTextEn: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-warm-border text-sm focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-2xl bg-forest hover:bg-forest-light text-white font-bold text-sm shadow-md hover:shadow-elevated transition-all"
            >
              <Save className="w-4 h-4 text-gold" />
              <span>{t.admin.saveButton}</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl border border-earth-muted/30 text-earth-muted hover:text-earth-dark hover:bg-warm-cream text-xs font-bold transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.admin.resetButton}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

