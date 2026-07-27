import { GalleryItem } from '../components/GallerySection';

// Helper to construct clean SVG Data URLs
function createSvgUrl(svgString: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString.trim())}`;
}

const SVG_1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2c241b" />
      <stop offset="50%" stop-color="#3d3225" />
      <stop offset="100%" stop-color="#1e1812" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg1)" />
  <rect x="25" y="25" width="750" height="550" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.3" />
  
  <rect x="330" y="120" width="140" height="200" fill="#222" stroke="#554" stroke-width="4" rx="4" />
  <path d="M 400 160 Q 370 200 400 240 Q 430 200 400 160 Z" fill="#68a" opacity="0.6" />
  <circle cx="400" cy="180" r="20" fill="#aae" opacity="0.7" />

  <g id="left-figure">
    <path d="M 50 250 Q 120 220 180 260 L 220 600 L 0 600 Z" fill="#1d2d50" />
    <circle cx="110" cy="190" r="55" fill="#c68a68" />
    <path d="M 55 180 Q 100 120 165 170 Q 150 130 100 135 Z" fill="#1a1a1a" />
    <path d="M 60 380 Q 120 420 180 380 Q 150 450 90 440 Z" fill="#152238" stroke="#000" stroke-width="2" />
  </g>

  <g id="center-mentor">
    <path d="M 280 360 Q 400 330 520 360 L 550 600 L 250 600 Z" fill="#e8e2d5" />
    <circle cx="400" cy="240" r="60" fill="#e0a98b" />
    <path d="M 335 230 Q 400 160 465 230 Q 450 170 350 170 Z" fill="#f0f0f0" />
    <rect x="365" y="225" width="30" height="20" fill="none" stroke="#333" stroke-width="3" rx="3" />
    <rect x="405" y="225" width="30" height="20" fill="none" stroke="#333" stroke-width="3" rx="3" />
    <line x1="395" y1="235" x2="405" y2="235" stroke="#333" stroke-width="3" />
    
    <g id="rose-garland">
      <path d="M 330 330 Q 280 450 400 580 Q 520 450 470 330" fill="none" stroke="#a00" stroke-width="38" stroke-linecap="round" />
      <path d="M 330 330 Q 280 450 400 580 Q 520 450 470 330" fill="none" stroke="#700" stroke-width="28" stroke-dasharray="15,10" stroke-linecap="round" />
      <circle cx="340" cy="340" r="14" fill="#c00" />
      <circle cx="320" cy="380" r="15" fill="#900" />
      <circle cx="315" cy="420" r="16" fill="#d00" />
      <circle cx="330" cy="460" r="16" fill="#b00" />
      <circle cx="360" cy="510" r="17" fill="#800" />
      <circle cx="400" cy="540" r="18" fill="#d00" />
      <circle cx="440" cy="510" r="17" fill="#a00" />
      <circle cx="470" cy="460" r="16" fill="#c00" />
      <circle cx="485" cy="420" r="16" fill="#800" />
      <circle cx="480" cy="380" r="15" fill="#b00" />
      <circle cx="460" cy="340" r="14" fill="#900" />
    </g>
  </g>

  <g id="right-dr-sai">
    <path d="M 580 320 Q 680 300 780 330 L 800 600 L 540 600 Z" fill="#214283" />
    <path d="M 620 320 L 740 320 L 720 600 L 640 600 Z" fill="#d4af37" opacity="0.8" />
    <circle cx="680" cy="220" r="58" fill="#d49472" />
    <path d="M 620 210 Q 680 140 740 210 Q 720 150 640 155 Z" fill="#121212" />
    <path d="M 650 245 Q 680 260 710 245 Q 680 252 650 245 Z" fill="#121212" />
  </g>

  <rect x="40" y="520" width="340" height="40" fill="#000" opacity="0.75" rx="6" />
  <text x="55" y="545" font-family="monospace" font-size="15" fill="#d4af37" font-weight="bold">FOUNDING MENTOR &amp; DR. SAI • 1994</text>
</svg>`;

const SVG_2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b3228" />
      <stop offset="100%" stop-color="#1c1610" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffe066" />
      <stop offset="50%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#997a15" />
    </linearGradient>
    <pattern id="lattice" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect x="5" y="5" width="30" height="30" rx="3" fill="#18130d" />
      <circle cx="20" cy="20" r="8" fill="#2a221a" />
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#bg2)" />
  <rect x="0" y="0" width="800" height="300" fill="url(#lattice)" />

  <rect x="300" y="240" width="480" height="180" fill="#1e2a3a" rx="8" />
  <rect x="290" y="230" width="500" height="25" fill="#2c3e50" rx="4" />

  <g id="trophies">
    <path d="M 330 150 Q 370 120 410 150 L 390 200 L 350 200 Z" fill="url(#goldGrad)" />
    <rect x="360" y="200" width="20" height="30" fill="url(#goldGrad)" />
    <rect x="340" y="225" width="60" height="10" fill="#111" />

    <path d="M 450 130 Q 500 90 550 130 L 530 190 L 470 190 Z" fill="url(#goldGrad)" />
    <rect x="490" y="190" width="20" height="40" fill="url(#goldGrad)" />
    <rect x="465" y="225" width="70" height="10" fill="#111" />

    <path d="M 590 140 Q 630 110 670 140 L 650 195 L 610 195 Z" fill="url(#goldGrad)" />
    <rect x="620" y="195" width="20" height="35" fill="url(#goldGrad)" />
    <rect x="600" y="225" width="60" height="10" fill="#111" />

    <path d="M 700 170 L 730 170 L 725 210 L 705 210 Z" fill="url(#goldGrad)" />
    <rect x="710" y="210" width="10" height="20" fill="url(#goldGrad)" />
  </g>

  <path d="M 40 320 Q 120 280 200 320 L 230 600 L 10 600 Z" fill="#2c3e50" />
  <circle cx="120" cy="220" r="50" fill="#d49472" />
  <path d="M 70 210 Q 120 150 170 210 Z" fill="#111" />
  <line x1="160" y1="260" x2="190" y2="240" stroke="#aaa" stroke-width="4" />
  <circle cx="195" cy="235" r="8" fill="#555" />

  <path d="M 220 380 Q 300 360 380 390 L 400 600 L 200 600 Z" fill="#4a3052" />
  <circle cx="300" cy="300" r="45" fill="#c68a68" />

  <path d="M 380 400 Q 480 370 560 410 L 580 600 L 360 600 Z" fill="#d0c0b0" />
  <circle cx="470" cy="340" r="40" fill="#d49472" />

  <rect x="40" y="520" width="380" height="40" fill="#000" opacity="0.75" rx="6" />
  <text x="55" y="545" font-family="monospace" font-size="15" fill="#ffe066" font-weight="bold">STATE CHAMPIONSHIP TROPHY SHOWCASE</text>
</svg>`;

const SVG_3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3d3326" />
      <stop offset="100%" stop-color="#1f1810" />
    </linearGradient>
    <pattern id="windowGrill" width="60" height="60" patternUnits="userSpaceOnUse">
      <circle cx="30" cy="30" r="15" fill="none" stroke="#665544" stroke-width="3" />
      <path d="M 0 30 L 60 30 M 30 0 L 30 60" stroke="#554433" stroke-width="2" />
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#bg3)" />

  <rect x="50" y="50" width="700" height="280" fill="url(#windowGrill)" stroke="#665544" stroke-width="4" />

  <line x1="200" y1="0" x2="200" y2="350" stroke="#d4af37" stroke-width="6" stroke-dasharray="12,6" />
  <line x1="600" y1="0" x2="600" y2="350" stroke="#d4af37" stroke-width="6" stroke-dasharray="12,6" />

  <rect x="160" y="350" width="480" height="35" fill="#5c3a21" rx="6" stroke="#3b2210" stroke-width="4" />
  <rect x="180" y="385" width="440" height="15" fill="#3b2210" rx="3" />

  <g id="mentor-1">
    <path d="M 220 350 Q 280 250 340 350 L 330 520 L 230 520 Z" fill="#e2c97c" />
    <circle cx="280" cy="200" r="48" fill="#d49472" />
    <path d="M 235 190 Q 280 130 325 190 Z" fill="#1a1a1a" />
    <path d="M 260 220 Q 280 230 300 220 Z" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="3" />
  </g>

  <g id="mentor-2">
    <path d="M 420 350 Q 500 240 580 350 L 570 540 L 430 540 Z" fill="#802020" />
    <circle cx="500" cy="190" r="50" fill="#c68a68" />
    <path d="M 450 180 Q 500 120 550 180 Z" fill="#111" />
    <path d="M 480 212 Q 500 222 520 212 Z" fill="#111" stroke="#111" stroke-width="4" />
  </g>

  <rect x="40" y="520" width="380" height="40" fill="#000" opacity="0.75" rx="6" />
  <text x="55" y="545" font-family="monospace" font-size="15" fill="#d4af37" font-weight="bold">HERITAGE RESIDENCE &amp; ACADEMY SWING</text>
</svg>`;

const SVG_4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a2520" />
      <stop offset="100%" stop-color="#14110d" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg4)" />

  <rect x="180" y="120" width="460" height="120" fill="#f5f0eb" stroke="#c2b09b" stroke-width="4" rx="6" />
  <text x="410" y="165" font-family="sans-serif" font-size="20" font-weight="bold" fill="#0f2b5c" text-anchor="middle">CHENNAI DISTRICT CHESS ASSOCIATION</text>
  <text x="410" y="205" font-family="sans-serif" font-size="28" font-weight="900" fill="#b81d1d" text-anchor="middle">WELCOMES YOU</text>

  <path d="M 100 360 Q 170 300 240 360 L 250 600 L 90 600 Z" fill="#b05228" />
  <path d="M 120 360 L 220 360 L 200 600 L 140 600 Z" fill="#d4af37" opacity="0.7" />
  <circle cx="170" cy="260" r="42" fill="#c68a68" />

  <path d="M 320 320 Q 400 260 480 320 L 490 600 L 310 600 Z" fill="#4a5568" />
  <path d="M 380 320 L 420 320 L 415 600 L 385 600 Z" fill="#edf2f7" />
  <path d="M 395 320 L 405 320 L 402 450 L 398 450 Z" fill="#9b2c2c" />
  <circle cx="400" cy="180" r="48" fill="#d49472" />
  <path d="M 355 170 Q 400 110 445 170 Z" fill="#1a202c" />

  <path d="M 520 380 Q 580 340 640 380 L 650 600 L 510 600 Z" fill="#f7fafc" stroke="#cbd5e0" stroke-width="2" />
  <circle cx="580" cy="260" r="38" fill="#d49472" />

  <path d="M 450 360 Q 500 320 540 360 L 520 410 L 470 410 Z" fill="#ffd700" stroke="#b8860b" stroke-width="3" />
  <rect x="485" y="410" width="20" height="30" fill="#ffd700" />
  <rect x="460" y="440" width="70" height="15" fill="#111" />

  <rect x="40" y="520" width="400" height="40" fill="#000" opacity="0.75" rx="6" />
  <text x="55" y="545" font-family="monospace" font-size="15" fill="#ffd700" font-weight="bold">CHENNAI DISTRICT CHAMPIONSHIP AWARD</text>
</svg>`;

const SVG_5 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e2836" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="bannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="50%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg5)" />

  <rect x="60" y="60" width="680" height="200" fill="url(#bannerGrad)" rx="8" stroke="#d97706" stroke-width="6" />
  <text x="400" y="160" font-family="Impact, sans-serif" font-size="72" fill="#dc2626" font-weight="900" text-anchor="middle" letter-spacing="4">CHESS WORLD</text>
  <text x="400" y="210" font-family="sans-serif" font-size="22" fill="#1e3a8a" font-weight="bold" text-anchor="middle">AFFILIATED CHESS ACADEMY &amp; TOURNAMENT HUB</text>

  <g id="coaches">
    <path d="M 280 280 Q 350 240 420 280 L 430 450 L 270 450 Z" fill="#1e293b" />
    <path d="M 320 280 L 380 280 L 370 450 L 330 450 Z" fill="#ffffff" />
    <circle cx="350" cy="200" r="45" fill="#d49472" />
    <path d="M 310 190 Q 350 130 390 190 Z" fill="#0f172a" />

    <path d="M 480 300 Q 540 260 600 300 L 610 450 L 470 450 Z" fill="#38bdf8" />
    <circle cx="540" cy="230" r="42" fill="#c68a68" />
  </g>

  <g id="medal-kids">
    <path d="M 60 420 Q 130 380 200 420 L 210 600 L 50 600 Z" fill="#3b82f6" />
    <circle cx="130" cy="340" r="38" fill="#d49472" />
    <path d="M 110 370 L 130 440 L 150 370" fill="none" stroke="#f59e0b" stroke-width="6" />
    <circle cx="130" cy="450" r="14" fill="#fbbf24" stroke="#d97706" stroke-width="2" />

    <path d="M 220 400 Q 290 360 360 400 L 370 600 L 210 600 Z" fill="#06b6d4" />
    <circle cx="290" cy="320" r="40" fill="#c68a68" />
    <path d="M 270 350 L 290 430 L 310 350" fill="none" stroke="#f59e0b" stroke-width="6" />
    <circle cx="290" cy="440" r="16" fill="#fbbf24" stroke="#d97706" stroke-width="2" />

    <path d="M 420 410 Q 490 370 560 410 L 570 600 L 410 600 Z" fill="#a855f7" />
    <circle cx="490" cy="330" r="38" fill="#d49472" />
    <path d="M 470 360 L 490 435 L 510 360" fill="none" stroke="#f59e0b" stroke-width="6" />
    <circle cx="490" cy="445" r="15" fill="#fbbf24" stroke="#d97706" stroke-width="2" />

    <path d="M 600 420 Q 670 380 740 420 L 750 600 L 590 600 Z" fill="#1d4ed8" />
    <circle cx="670" cy="340" r="38" fill="#c68a68" />
    <path d="M 650 370 L 670 440 L 690 370" fill="none" stroke="#f59e0b" stroke-width="6" />
    <circle cx="670" cy="450" r="14" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
  </g>

  <rect x="40" y="520" width="380" height="40" fill="#000" opacity="0.75" rx="6" />
  <text x="55" y="545" font-family="monospace" font-size="15" fill="#fbbf24" font-weight="bold">CHESS WORLD ACADEMY CHAMPIONS</text>
</svg>`;

const SVG_6 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#332a22" />
      <stop offset="100%" stop-color="#1a140f" />
    </linearGradient>
    <linearGradient id="woodShield" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#854d0e" />
      <stop offset="100%" stop-color="#451a03" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg6)" />

  <rect x="400" y="380" width="360" height="140" fill="#1c1917" rx="6" />

  <g id="india-shield">
    <path d="M 520 280 Q 580 240 640 280 L 620 400 Q 580 430 540 400 Z" fill="url(#woodShield)" stroke="#f59e0b" stroke-width="4" />
    <path d="M 570 290 Q 600 310 590 330 Q 610 350 580 380 Q 570 360 560 330 Q 550 310 570 290 Z" fill="#d97706" stroke="#fef08a" stroke-width="2" />
  </g>

  <path d="M 450 340 L 480 340 L 475 380 L 455 380 Z" fill="#f59e0b" />
  <path d="M 670 340 L 700 340 L 695 380 L 675 380 Z" fill="#f59e0b" />

  <g id="chief-guest">
    <path d="M 280 220 Q 360 180 440 220 L 450 600 L 270 600 Z" fill="#f8fafc" />
    <circle cx="360" cy="120" r="50" fill="#d49472" />
    <rect x="330" y="115" width="25" height="16" fill="none" stroke="#111" stroke-width="2" />
    <rect x="365" y="115" width="25" height="16" fill="none" stroke="#111" stroke-width="2" />
  </g>

  <g id="dr-sai-blue">
    <path d="M 500 240 Q 570 200 640 240 L 650 600 L 490 600 Z" fill="#2563eb" />
    <circle cx="570" cy="150" r="45" fill="#c68a68" />
    <path d="M 530 140 Q 570 80 610 140 Z" fill="#0f172a" />
    <path d="M 550 170 Q 570 180 590 170 Z" fill="#0f172a" stroke="#0f172a" stroke-width="3" />
  </g>

  <g id="young-players">
    <path d="M 60 320 Q 130 280 200 320 L 210 600 L 50 600 Z" fill="#15803d" />
    <circle cx="130" cy="220" r="42" fill="#d49472" />

    <path d="M 180 340 Q 240 300 300 340 L 310 600 L 170 600 Z" fill="#fef08a" />
    <circle cx="240" cy="250" r="38" fill="#c68a68" />
  </g>

  <rect x="40" y="520" width="410" height="40" fill="#000" opacity="0.75" rx="6" />
  <text x="55" y="545" font-family="monospace" font-size="15" fill="#f59e0b" font-weight="bold">INDIA MAP SHIELD CHAMPIONSHIP AWARD</text>
</svg>`;

export const HISTORIC_BASE_PHOTOS: GalleryItem[] = [
  {
    id: 'cw-archive-1',
    title: '',
    imageUrl: '/gallery/photo1.jpg',
    fallbackUrl: createSvgUrl(SVG_1),
    rotation: 0
  },
  {
    id: 'cw-archive-2',
    title: '',
    imageUrl: '/gallery/photo2.jpg',
    fallbackUrl: createSvgUrl(SVG_2),
    rotation: 0
  },
  {
    id: 'cw-archive-3',
    title: '',
    imageUrl: '/gallery/photo3.jpg',
    fallbackUrl: createSvgUrl(SVG_3),
    rotation: 0
  },
  {
    id: 'cw-archive-4',
    title: '',
    imageUrl: '/gallery/photo4.jpg',
    fallbackUrl: createSvgUrl(SVG_4),
    rotation: 0
  },
  {
    id: 'cw-archive-5',
    title: '',
    imageUrl: '/gallery/photo5.jpg',
    fallbackUrl: createSvgUrl(SVG_5),
    rotation: 0
  },
  {
    id: 'cw-archive-6',
    title: '',
    imageUrl: '/gallery/photo6.jpg',
    fallbackUrl: createSvgUrl(SVG_6),
    rotation: 0
  }
];

// Vite Glob import for images in /public/gallery/ and /public/
const galleryGlob = (import.meta as any).glob('/public/gallery/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP,gif,GIF,svg,SVG}', {
  eager: true,
  query: '?url',
  import: 'default'
});

const publicGlob = (import.meta as any).glob('/public/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP,gif,GIF}', {
  eager: true,
  query: '?url',
  import: 'default'
});

export function getDiscoveredPhotos(): GalleryItem[] {
  const photos: GalleryItem[] = [];
  const seenUrls = new Set<string>();

  const addPhoto = (rawUrl: string, fallbackUrl?: string) => {
    if (!rawUrl) return;
    let cleanUrl = rawUrl;
    if (cleanUrl.startsWith('/public/')) {
      cleanUrl = cleanUrl.replace('/public', '');
    }
    if (seenUrls.has(cleanUrl)) return;

    const lower = cleanUrl.toLowerCase();
    if (lower.includes('logo') || lower.includes('favicon') || lower.includes('readme')) return;

    seenUrls.add(cleanUrl);
    photos.push({
      id: `photo-${photos.length + 1}`,
      title: '',
      imageUrl: cleanUrl,
      fallbackUrl: fallbackUrl,
      rotation: 0
    });
  };

  // 1. Add files from /public/gallery/
  for (const [path, moduleVal] of Object.entries(galleryGlob)) {
    const url = typeof moduleVal === 'string' ? moduleVal : (moduleVal as { default?: string })?.default || path.replace('/public', '');
    addPhoto(url);
  }

  // 2. Add files from /public/
  for (const [path, moduleVal] of Object.entries(publicGlob)) {
    const url = typeof moduleVal === 'string' ? moduleVal : (moduleVal as { default?: string })?.default || path.replace('/public', '');
    addPhoto(url);
  }

  // 3. Fallback to base historic photos if none or to ensure base gallery renders
  HISTORIC_BASE_PHOTOS.forEach((item) => {
    if (!seenUrls.has(item.imageUrl)) {
      addPhoto(item.imageUrl, item.fallbackUrl);
    }
  });

  return photos;
}

export const HISTORIC_PHOTOS: GalleryItem[] = getDiscoveredPhotos();
