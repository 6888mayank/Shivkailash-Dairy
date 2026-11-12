import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { PriceProvider } from '@/context/PriceContext';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { farmConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Kailash Kamdhenu Dairy Farm | Pure A2 Desi Cow Milk & Traditional Vedic Ghee in Deoria & Gorakhpur',
  description:
    'Kailash Kamdhenu Dairy Farm by Shiv Kailash in Bariyarpur, Deoria. Providing 100% pure raw A2 milk and traditional Vedic Bilona Desi Ghee from 25 indigenous Sahiwal and Gir cows. Daily doorstep delivery in Deoria and Gorakhpur. Tagline: Shuddh Doodh, Saccha Vishwas.',
  keywords: [
    'A2 Milk Deoria',
    'A2 Milk Gorakhpur',
    'Desi Cow Milk Deoria',
    'Bilona Ghee Gorakhpur',
    'Sahiwal Cow Milk Deoria',
    'Gir Cow Milk Gorakhpur',
    'Kailash Kamdhenu Dairy Farm',
    'Shiv Kailash Dairy Deoria',
    'Bariyarpur Deoria Dairy',
    'Pure Desi Ghee Uttar Pradesh',
    'शुद्ध A2 दूध देवरिया',
    'पारंपरिक बिलौना घी गोरखपुर',
  ],
  authors: [{ name: 'Shiv Kailash' }],
  openGraph: {
    title: 'Kailash Kamdhenu Dairy Farm - Shuddh Doodh, Saccha Vishwas',
    description:
      'Pure A2 Milk & Traditional Desi Ghee directly from 25 Sahiwal & Gir cows in Bariyarpur, Deoria. Fresh delivery in Deoria & Gorakhpur.',
    url: 'https://kailashkamdhenudairy.com',
    siteName: 'Kailash Kamdhenu Dairy Farm',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DairyFarm',
    name: 'Kailash Kamdhenu Dairy Farm',
    alternateName: 'कैलाश कामधेनु डेयरी फार्म',
    slogan: 'Shuddh Doodh, Saccha Vishwas.',
    founder: {
      '@type': 'Person',
      name: 'Shiv Kailash',
    },
    telephone: farmConfig.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Village Bariyarpur, Tola Rampur, Post - Bhahara',
      addressLocality: 'Deoria',
      addressRegion: 'Uttar Pradesh',
      postalCode: '274001',
      addressCountry: 'IN',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Deoria',
      },
      {
        '@type': 'City',
        name: 'Gorakhpur',
      },
    ],
    priceRange: '₹45 - ₹1850',
    description:
      'Informational dairy farm website for Kailash Kamdhenu Dairy Farm. Fresh A2 milk and Vedic Bilona Desi Ghee from 25 indigenous Sahiwal and Gir cows.',
  };

  return (
    <html lang="hi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐄</text></svg>" />
      </head>
      <body className="min-h-screen flex flex-col bg-warm text-earth-dark font-sans selection:bg-gold/30 selection:text-forest-deep antialiased">
        <LanguageProvider>
          <PriceProvider>
            <AnnouncementBar />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </PriceProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

