'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePrice } from '@/context/PriceContext';
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function EnquiryForm() {
  const { language, t } = useLanguage();
  const { createQuickEnquiryLink } = usePrice();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Deoria',
    address: '',
    product: 'Pure A2 Desi Cow Milk',
    quantity: '1 Litre Daily',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      alert(language === 'hi' ? 'कृपया अपना नाम, मोबाइल नंबर और पता दर्ज करें।' : 'Please enter your name, mobile number and address.');
      return;
    }

    const waUrl = createQuickEnquiryLink({
      name: formData.name,
      phone: formData.phone,
      city: formData.city,
      address: formData.address,
      product: formData.product,
      quantity: formData.quantity,
      notes: formData.notes,
    });

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-warm-border shadow-elevated">
      <div className="mb-8">
        <span className="text-xs font-bold text-forest uppercase tracking-wider block mb-1">
          {t.contactPage.formTitle}
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-earth-dark">
          {language === 'hi' ? 'WhatsApp पर सीधा ऑर्डर भेजें' : 'Send Direct Order on WhatsApp'}
        </h3>
        <p className="text-xs sm:text-sm text-earth-muted mt-2">
          {t.contactPage.formSubtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-1.5">
              {t.contactPage.nameLabel} *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t.contactPage.namePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-warm-border bg-warm/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-all"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-1.5">
              {t.contactPage.phoneLabel} *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t.contactPage.phonePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-warm-border bg-warm/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-all"
            />
          </div>
        </div>

        {/* City & Product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-1.5">
              {t.contactPage.cityLabel}
            </label>
            <select
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-warm-border bg-warm/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-all"
            >
              <option value="Deoria">Deoria (देवरिया)</option>
              <option value="Gorakhpur">Gorakhpur (गोरखपुर)</option>
              <option value="Bariyarpur Farm Pickup">Bariyarpur Farm Pickup (फार्म से स्वयं उठाना)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-1.5">
              {t.contactPage.productLabel}
            </label>
            <select
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-warm-border bg-warm/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-all"
            >
              <option value="Pure A2 Toned Milk (~₹65/L)">Pure A2 Toned Milk (~₹65/L | A2 टोन्ड दूध)</option>
              <option value="Pure A2 Full Cream Milk (~₹75/L)">Pure A2 Full Cream Milk (~₹75/L | A2 फुल क्रीम दूध)</option>
              <option value="Traditional Vedic Bilona Ghee (~₹1500/kg)">Traditional Vedic Bilona Ghee (~₹1,500/kg | पारंपरिक बिलौना घी)</option>
              <option value="Combo: Milk & Ghee">Combo: Milk & Ghee (दूध एवं घी दोनों)</option>
            </select>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-1.5">
            {t.contactPage.quantityLabel}
          </label>
          <input
            type="text"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            placeholder={language === 'hi' ? 'उदा. 1 लीटर प्रतिदिन / 1 किग्रा घी' : 'e.g. 1 Litre Daily / 1kg Ghee Jar'}
            className="w-full px-4 py-3 rounded-xl border border-warm-border bg-warm/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-all"
          />
        </div>

        {/* Delivery Address */}
        <div>
          <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-1.5">
            {t.contactPage.addressLabel} *
          </label>
          <textarea
            required
            rows={2}
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder={t.contactPage.addressPlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-warm-border bg-warm/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-all resize-none"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-bold text-earth-dark uppercase tracking-wider mb-1.5">
            {t.contactPage.messageLabel}
          </label>
          <input
            type="text"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder={t.contactPage.messagePlaceholder}
            className="w-full px-4 py-3 rounded-xl border border-warm-border bg-warm/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md hover:shadow-elevated transition-all active:scale-[0.99]"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>{t.contactPage.submitButton}</span>
        </button>

        {submitted && (
          <div className="p-3 bg-forest-soft rounded-xl text-forest text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
            <span>
              {language === 'hi'
                ? 'WhatsApp खुल रहा है... यदि नहीं खुला तो कृपया पॉप-अप अनुमति दें।'
                : 'Opening WhatsApp with your pre-filled details... If it did not open, please check popup blocker.'}
            </span>
          </div>
        )}
      </form>
    </div>
  );
}

