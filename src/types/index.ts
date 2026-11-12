export type Language = 'en' | 'hi';

export interface ProductVariant {
  id: string;
  size: string;
  sizeHi: string;
  price: number;
  unit: string;
}

export interface Product {
  id: string;
  nameEn: string;
  nameHi: string;
  subtitleEn: string;
  subtitleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  image: string;
  badgesEn: string[];
  badgesHi: string[];
  benefitsEn: string[];
  benefitsHi: string[];
  variants: ProductVariant[];
  shelfLifeEn: string;
  shelfLifeHi: string;
  storageEn: string;
  storageHi: string;
}

export interface CowBreed {
  nameEn: string;
  nameHi: string;
  count: number;
  originEn: string;
  originHi: string;
  descriptionEn: string;
  descriptionHi: string;
  featuresEn: string[];
  featuresHi: string[];
  image: string;
  taglineEn: string;
  taglineHi: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameHi: string;
  location: string;
  locationHi: string;
  rating: number;
  commentEn: string;
  commentHi: string;
  verifiedBuyer: boolean;
  product: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'cows' | 'farm' | 'milk' | 'ghee';
  image: string;
  captionEn: string;
  captionHi: string;
}
