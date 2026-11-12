import React from 'react';

export function CowIllustrationSvg({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cowSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EAF3EC" />
          <stop offset="100%" stopColor="#FFFDF5" />
        </linearGradient>
        <linearGradient id="cowBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C47335" />
          <stop offset="50%" stopColor="#964B1A" />
          <stop offset="100%" stopColor="#6E320D" />
        </linearGradient>
        <linearGradient id="cowGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8D87E" />
          <stop offset="100%" stopColor="#E8B84A" />
        </linearGradient>
        <linearGradient id="cowGrass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#76A85B" />
          <stop offset="100%" stopColor="#245C38" />
        </linearGradient>
      </defs>

      {/* Sky Background */}
      <rect width="400" height="300" fill="url(#cowSky)" />

      {/* Sun / Aura */}
      <circle cx="200" cy="110" r="75" fill="#FAF1D6" opacity="0.6" />
      <circle cx="200" cy="110" r="50" fill="url(#cowGold)" opacity="0.4" />

      {/* Distant Hills */}
      <path d="M0 220 Q120 180 240 210 T400 200 L400 300 L0 300 Z" fill="#93BE79" opacity="0.4" />
      <path d="M0 240 Q160 210 320 235 T400 240 L400 300 L0 300 Z" fill="url(#cowGrass)" />

      {/* Indian Indigenous Cow Silhouette & Details */}
      {/* Cow Body */}
      <ellipse cx="210" cy="180" rx="75" ry="45" fill="url(#cowBody)" />

      {/* Distinct Hump (Surya Ketu Nadi) */}
      <path
        d="M165 145 C165 125 185 115 195 125 C205 135 210 145 210 145 Z"
        fill="url(#cowBody)"
      />
      {/* Surya Ketu Golden Vein Glow */}
      <path
        d="M178 135 Q188 123 193 133"
        stroke="url(#cowGold)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Neck & Dewlap (गलकंबल) */}
      <path
        d="M145 155 C130 170 135 195 145 205 C155 215 170 215 175 200 Z"
        fill="#823F14"
      />
      <path
        d="M135 175 C128 188 132 202 140 208"
        stroke="#5C2B0B"
        strokeWidth="2"
        fill="none"
      />

      {/* Head with Dome Forehead */}
      <ellipse cx="125" cy="150" rx="28" ry="22" fill="url(#cowBody)" />
      {/* Convex Forehead (माथा) */}
      <path d="M115 135 Q125 125 138 135" stroke="url(#cowGold)" strokeWidth="3" fill="none" />

      {/* Gir Horns (Curved backward) */}
      <path
        d="M132 135 C142 110 160 112 165 120 C155 124 140 126 135 138 Z"
        fill="#2C2219"
      />
      <path
        d="M118 135 C108 115 95 118 92 125 C102 128 112 130 115 138 Z"
        fill="#2C2219"
      />

      {/* Long Drooping Ears */}
      <ellipse cx="140" cy="160" rx="7" ry="18" transform="rotate(30 140 160)" fill="#733611" />
      <ellipse cx="108" cy="155" rx="6" ry="16" transform="rotate(-20 108 155)" fill="#733611" />

      {/* Sacred Tilak / Bell */}
      <circle cx="120" cy="148" r="3" fill="#E8B84A" />
      <circle cx="150" cy="205" r="5" fill="url(#cowGold)" />

      {/* Legs */}
      <rect x="155" y="215" width="12" height="55" rx="5" fill="#6E320D" />
      <rect x="180" y="210" width="12" height="60" rx="5" fill="#823F14" />
      <rect x="245" y="215" width="12" height="55" rx="5" fill="#6E320D" />
      <rect x="268" y="210" width="12" height="60" rx="5" fill="#823F14" />

      {/* Hooves */}
      <rect x="155" y="265" width="12" height="8" rx="2" fill="#2C2219" />
      <rect x="180" y="265" width="12" height="8" rx="2" fill="#2C2219" />
      <rect x="245" y="265" width="12" height="8" rx="2" fill="#2C2219" />
      <rect x="268" y="265" width="12" height="8" rx="2" fill="#2C2219" />

      {/* Tail with Tuft */}
      <path d="M285 175 Q298 210 295 240" stroke="#6E320D" strokeWidth="4" fill="none" />
      <ellipse cx="295" cy="245" rx="5" ry="8" fill="#2C2219" />

      {/* Sacred Flower Garland on Neck */}
      <circle cx="145" cy="180" r="4" fill="#E8B84A" />
      <circle cx="152" cy="188" r="4" fill="#D49D2C" />
      <circle cx="160" cy="194" r="4" fill="#E8B84A" />
      <circle cx="168" cy="198" r="4" fill="#D49D2C" />

      {/* Foreground Grass Blades */}
      <path d="M20 270 Q25 240 30 270" stroke="#76A85B" strokeWidth="3" />
      <path d="M50 280 Q58 245 65 280" stroke="#93BE79" strokeWidth="3" />
      <path d="M350 275 Q358 240 365 275" stroke="#76A85B" strokeWidth="3" />
      <path d="M370 285 Q375 250 385 285" stroke="#93BE79" strokeWidth="3" />

      {/* Label Badge */}
      <g transform="translate(130, 260)">
        <rect width="140" height="26" rx="13" fill="#173D24" opacity="0.9" />
        <text x="70" y="17" fill="#F8D87E" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          100% DESI GOMATA
        </text>
      </g>
    </svg>
  );
}

export function GheeIllustrationSvg({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gheeBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FAF6EA" />
          <stop offset="100%" stopColor="#F4EEDC" />
        </linearGradient>
        <linearGradient id="gheeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="40%" stopColor="#E8B84A" />
          <stop offset="100%" stopColor="#B88219" />
        </linearGradient>
        <linearGradient id="clayPot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D97A53" />
          <stop offset="50%" stopColor="#AD4E28" />
          <stop offset="100%" stopColor="#753014" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="url(#gheeBg)" />

      {/* Divine Glow Ring */}
      <circle cx="200" cy="140" r="95" fill="#E8B84A" opacity="0.15" />
      <circle cx="200" cy="140" r="70" fill="#E8B84A" opacity="0.2" />

      {/* Traditional Wooden Surface */}
      <rect x="50" y="240" width="300" height="16" rx="4" fill="#6E320D" opacity="0.8" />
      <rect x="30" y="254" width="340" height="10" rx="3" fill="#4A2209" opacity="0.9" />

      {/* Clay Pot / Handi for Bilona Ghee */}
      <ellipse cx="200" cy="225" rx="55" ry="12" fill="#5A240E" opacity="0.4" />
      <path
        d="M140 180 C135 220 160 240 200 240 C240 240 265 220 260 180 C255 155 240 145 200 145 C160 145 145 155 140 180 Z"
        fill="url(#clayPot)"
      />
      {/* Handi Rim */}
      <ellipse cx="200" cy="145" rx="48" ry="12" fill="#913D1A" />
      <ellipse cx="200" cy="143" rx="42" ry="9" fill="url(#gheeGold)" />

      {/* Danedar Golden Ghee Texture Particles */}
      <circle cx="185" cy="143" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="195" cy="141" r="2.5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="210" cy="144" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="220" cy="142" r="1.5" fill="#FFFFFF" opacity="0.7" />

      {/* Wooden Bilona Churner (मथानी) */}
      <rect x="196" y="50" width="8" height="100" rx="3" fill="#A87243" />
      {/* Wooden Churner Flutes (चक्र) */}
      <path d="M185 130 L215 130 L210 142 L190 142 Z" fill="#855328" />
      <rect x="180" y="65" width="40" height="6" rx="2" fill="#855328" />

      {/* Golden Ghee Dripping Spoon / Dipper */}
      <path
        d="M245 100 Q260 120 250 160"
        stroke="#855328"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <ellipse cx="250" cy="162" rx="12" ry="8" fill="#A87243" />
      <path
        d="M250 165 C250 178 253 190 250 198 C247 190 250 178 250 165 Z"
        fill="url(#gheeGold)"
      />
      <circle cx="250" cy="202" r="3.5" fill="url(#gheeGold)" />

      {/* Steam / Fragrance Aroma Waves */}
      <path d="M175 115 Q170 95 180 85" stroke="#E8B84A" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M200 110 Q195 90 205 75" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <path d="M225 115 Q230 95 220 85" stroke="#E8B84A" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

      {/* Decorative Traditional Clay Motifs */}
      <path d="M160 190 Q200 200 240 190" stroke="#FAF1D6" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />

      {/* Label Badge */}
      <g transform="translate(120, 260)">
        <rect width="160" height="26" rx="13" fill="#245C38" opacity="0.95" />
        <text x="80" y="17" fill="#F8D87E" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          VEDIC BILONA GHEE
        </text>
      </g>
    </svg>
  );
}

export function MilkIllustrationSvg({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="milkBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EAF3EC" />
          <stop offset="100%" stopColor="#FAF6EA" />
        </linearGradient>
        <linearGradient id="milkWhite" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0EFEA" />
        </linearGradient>
        <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D9E6DC" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="url(#milkBg)" />

      {/* Aura */}
      <circle cx="200" cy="140" r="90" fill="#245C38" opacity="0.08" />

      {/* Table Surface */}
      <ellipse cx="200" cy="250" rx="130" ry="25" fill="#76A85B" opacity="0.2" />

      {/* Glass Bottle Body */}
      {/* Bottle Shadow */}
      <ellipse cx="170" cy="245" rx="35" ry="10" fill="#245C38" opacity="0.2" />

      {/* Glass Bottle */}
      <path
        d="M150 110 L150 130 C135 150 135 165 135 225 C135 240 145 245 170 245 C195 245 205 240 205 225 C205 165 205 150 190 130 L190 110 Z"
        fill="url(#glass)"
        stroke="#76A85B"
        strokeWidth="2"
      />
      {/* Bottle Cap / Cork */}
      <rect x="156" y="96" width="28" height="15" rx="3" fill="#C47335" />
      <rect x="152" y="108" width="36" height="5" rx="2" fill="#E8B84A" />

      {/* Pure White Milk inside Bottle */}
      <path
        d="M138 165 C138 235 142 242 170 242 C198 242 202 235 202 165 C195 167 185 163 170 163 C155 163 145 167 138 165 Z"
        fill="url(#milkWhite)"
      />
      {/* Thick Cream / Malai Layer */}
      <ellipse cx="170" cy="164" rx="31" ry="5" fill="#FAF1D6" />

      {/* Fresh Milk Glass */}
      <path
        d="M230 160 L238 235 C240 245 255 246 265 245 L275 160 Z"
        fill="url(#glass)"
        stroke="#76A85B"
        strokeWidth="1.5"
      />
      <path
        d="M233 175 L239 233 C241 242 253 243 263 242 L272 175 C265 178 250 174 245 175 C240 176 235 178 233 175 Z"
        fill="url(#milkWhite)"
      />
      {/* Foam Bubbles on Glass */}
      <circle cx="242" cy="173" r="3" fill="#FFFFFF" />
      <circle cx="250" cy="172" r="3.5" fill="#FFFFFF" />
      <circle cx="258" cy="174" r="2.5" fill="#FFFFFF" />
      <circle cx="264" cy="173" r="2" fill="#FFFFFF" />

      {/* Falling Fresh Milk Droplet */}
      <path
        d="M200 80 C200 70 205 60 205 60 C205 60 210 70 210 80 C210 86 206 90 205 90 C204 90 200 86 200 80 Z"
        fill="#FFFFFF"
        stroke="#E8B84A"
        strokeWidth="1"
      />

      {/* A2 Protein Stamp */}
      <g transform="translate(150, 185)">
        <circle cx="20" cy="20" r="18" fill="#245C38" opacity="0.9" />
        <text x="20" y="24" fill="#F8D87E" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          A2
        </text>
      </g>

      {/* Label Badge */}
      <g transform="translate(125, 260)">
        <rect width="150" height="26" rx="13" fill="#173D24" opacity="0.95" />
        <text x="75" y="17" fill="#F8D87E" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          100% PURE A2 MILK
        </text>
      </g>
    </svg>
  );
}

export function FarmIllustrationSvg({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="farmSky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8D87E" />
          <stop offset="40%" stopColor="#FFFDF5" />
          <stop offset="100%" stopColor="#EAF3EC" />
        </linearGradient>
        <linearGradient id="farmField" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93BE79" />
          <stop offset="100%" stopColor="#245C38" />
        </linearGradient>
      </defs>

      {/* Sky & Sunrise */}
      <rect width="400" height="300" fill="url(#farmSky)" />
      <circle cx="200" cy="110" r="45" fill="#E8B84A" opacity="0.6" />
      <circle cx="200" cy="110" r="65" fill="#FAF1D6" opacity="0.4" />

      {/* Sun Rays */}
      <line x1="200" y1="50" x2="200" y2="35" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="250" y1="75" x2="260" y2="65" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="150" y1="75" x2="140" y2="65" stroke="#E8B84A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Distant Trees */}
      <path d="M0 160 Q80 145 160 155 T320 150 T400 155 L400 210 L0 210 Z" fill="#5D8B43" opacity="0.6" />

      {/* Clean Farm Shed Structure (बरियारपुर फार्म) */}
      {/* Roof */}
      <polygon points="120,135 200,95 280,135" fill="#AD4E28" />
      <polygon points="125,135 200,98 275,135" fill="#C47335" />
      {/* Shed Pillars */}
      <rect x="135" y="135" width="8" height="55" fill="#FFFFFF" />
      <rect x="175" y="135" width="8" height="55" fill="#FFFFFF" />
      <rect x="215" y="135" width="8" height="55" fill="#FFFFFF" />
      <rect x="255" y="135" width="8" height="55" fill="#FFFFFF" />
      {/* Floor */}
      <rect x="125" y="185" width="150" height="8" rx="2" fill="#75685A" />

      {/* Green Organic Fodder Fields */}
      <path d="M0 190 Q120 175 250 185 T400 180 L400 300 L0 300 Z" fill="url(#farmField)" />

      {/* Fodder Rows */}
      <path d="M0 240 Q150 215 400 230" stroke="#76A85B" strokeWidth="3" fill="none" opacity="0.6" />
      <path d="M0 265 Q180 240 400 255" stroke="#5D8B43" strokeWidth="4" fill="none" opacity="0.7" />

      {/* Grazing Cow Silhouettes */}
      <ellipse cx="90" cy="220" rx="18" ry="11" fill="#FFFFFF" opacity="0.9" />
      <circle cx="75" cy="216" r="6" fill="#FFFFFF" opacity="0.9" />
      <path d="M85 210 C85 205 90 203 92 205" stroke="#FFFFFF" strokeWidth="3" />

      <ellipse cx="320" cy="215" rx="16" ry="10" fill="#6E320D" opacity="0.85" />
      <circle cx="333" cy="212" r="5.5" fill="#6E320D" opacity="0.85" />

      {/* Label Badge */}
      <g transform="translate(115, 260)">
        <rect width="170" height="26" rx="13" fill="#102918" opacity="0.95" />
        <text x="85" y="17" fill="#F8D87E" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          BARIYARPUR, DEORIA
        </text>
      </g>
    </svg>
  );
}

