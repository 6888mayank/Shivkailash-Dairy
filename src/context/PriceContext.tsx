'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialProducts } from '@/data/products';
import { farmConfig } from '@/data/config';
import { Product } from '@/types';

export interface PriceSettings {
  toned500: number;
  toned1000: number;
  fullCream500: number;
  fullCream1000: number;
  ghee500: number;
  ghee1000: number;
  phoneDisplay: string;
  whatsappNumber: string;
  announcementTextEn: string;
  announcementTextHi: string;
}

const defaultSettings: PriceSettings = {
  toned500: 35,
  toned1000: 65,
  fullCream500: 40,
  fullCream1000: 75,
  ghee500: 800,
  ghee1000: 1500,
  phoneDisplay: farmConfig.phoneDisplay,
  whatsappNumber: farmConfig.whatsappNumber,
  announcementTextEn: '🌿 Fresh Morning A2 Milk & Vedic Bilona Ghee Dispatched Daily Across Deoria & Gorakhpur • 100% Raw & Pure',
  announcementTextHi: '🌿 देवरिया एवं गोरखपुर में प्रतिदिन प्रातःकाल ताजा शुद्ध A2 दूध व वैदिक बिलौना घी की होम डिलीवरी',
};

interface PriceContextType {
  settings: PriceSettings;
  products: Product[];
  updateSettings: (newSettings: Partial<PriceSettings>) => void;
  resetSettings: () => void;
  createWhatsAppLink: (productName: string, quantity: string, customNote?: string) => string;
  createQuickEnquiryLink: (details: {
    name: string;
    phone: string;
    city: string;
    address: string;
    product: string;
    quantity: string;
    notes?: string;
  }) => string;
}

const PriceContext = createContext<PriceContextType | undefined>(undefined);

export function PriceProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<PriceSettings>(defaultSettings);
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kailash_dairy_settings_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        setSettings((prev) => ({
          ...prev,
          ...parsed,
          phoneDisplay: farmConfig.phoneDisplay,
          whatsappNumber: farmConfig.whatsappNumber,
        }));
      }
    } catch {
      // ignore
    }
  }, []);

  // Update products when settings change
  useEffect(() => {
    setProducts(() => {
      return initialProducts.map((p) => {
        if (p.id === 'toned-milk') {
          return {
            ...p,
            variants: p.variants.map((v) => {
              if (v.id === 'toned-500ml') return { ...v, price: settings.toned500 };
              if (v.id === 'toned-1000ml') return { ...v, price: settings.toned1000 };
              return v;
            }),
          };
        }
        if (p.id === 'full-cream-milk') {
          return {
            ...p,
            variants: p.variants.map((v) => {
              if (v.id === 'fullcream-500ml') return { ...v, price: settings.fullCream500 };
              if (v.id === 'fullcream-1000ml') return { ...v, price: settings.fullCream1000 };
              return v;
            }),
          };
        }
        if (p.id === 'desi-ghee') {
          return {
            ...p,
            variants: p.variants.map((v) => {
              if (v.id === 'ghee-500g') return { ...v, price: settings.ghee500 };
              if (v.id === 'ghee-1000g') return { ...v, price: settings.ghee1000 };
              return v;
            }),
          };
        }
        return p;
      });
    });
  }, [settings]);

  const updateSettings = (newSettings: Partial<PriceSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      try {
        localStorage.setItem('kailash_dairy_settings_v2', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    try {
      localStorage.removeItem('kailash_dairy_settings_v2');
    } catch {
      // ignore
    }
  };

  const createWhatsAppLink = (productName: string, quantity: string, customNote?: string) => {
    const rawNumber = settings.whatsappNumber.replace(/[^0-9]/g, '');
    let text = `Namaste Shiv Kailash ji,\nI am contacting from Kailash Kamdhenu Dairy Farm (SKRK) website.\n\n*Product Inquiry:* ${productName}\n*Selected Size:* ${quantity}\n\nPlease share today's accurate price, daily batch availability, and delivery schedule for my area (Deoria / Gorakhpur).`;
    if (customNote) {
      text += `\n*Note:* ${customNote}`;
    }
    text += `\n\nThank you!`;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  };

  const createQuickEnquiryLink = (details: {
    name: string;
    phone: string;
    city: string;
    address: string;
    product: string;
    quantity: string;
    notes?: string;
  }) => {
    const rawNumber = settings.whatsappNumber.replace(/[^0-9]/g, '');
    let text = `*New Order / Enquiry - Kailash Kamdhenu Dairy Farm (SKRK)*\n\n`;
    text += `👤 *Name:* ${details.name}\n`;
    text += `📞 *Phone:* ${details.phone}\n`;
    text += `📍 *City:* ${details.city}\n`;
    text += `🏠 *Delivery Address:* ${details.address}\n`;
    text += `🥛 *Product Required:* ${details.product}\n`;
    text += `📦 *Quantity / Requirement:* ${details.quantity}\n`;
    if (details.notes) {
      text += `📝 *Instructions:* ${details.notes}\n`;
    }
    text += `\nPlease confirm my delivery schedule.`;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <PriceContext.Provider
      value={{
        settings,
        products,
        updateSettings,
        resetSettings,
        createWhatsAppLink,
        createQuickEnquiryLink,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}

export function usePrice() {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error('usePrice must be used within a PriceProvider');
  }
  return context;
}
