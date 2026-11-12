'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import {
  CowIllustrationSvg,
  GheeIllustrationSvg,
  MilkIllustrationSvg,
  FarmIllustrationSvg,
} from './DairySvgs';

interface SmartImageProps extends Omit<ImageProps, 'onError'> {
  category?: 'cows' | 'ghee' | 'milk' | 'farm';
  fallbackTitle?: string;
}

export default function SmartImage({
  src,
  alt,
  category = 'cows',
  className = '',
  ...props
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    if (category === 'ghee') return <GheeIllustrationSvg className="w-full h-full object-cover" />;
    if (category === 'milk') return <MilkIllustrationSvg className="w-full h-full object-cover" />;
    if (category === 'farm') return <FarmIllustrationSvg className="w-full h-full object-cover" />;
    return <CowIllustrationSvg className="w-full h-full object-cover" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
