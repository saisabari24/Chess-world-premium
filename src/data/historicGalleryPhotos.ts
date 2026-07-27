import { GalleryItem } from '../components/GallerySection';

// Vite Glob import for ALL images in /public/gallery/ without naming constraints
const galleryGlob = (import.meta as any).glob('/public/gallery/**/*', {
  eager: true,
  query: '?url',
  import: 'default'
});

export function getDiscoveredPhotos(): GalleryItem[] {
  const photos: GalleryItem[] = [];
  const seenUrls = new Set<string>();

  const addPhoto = (rawUrl: string) => {
    if (!rawUrl) return;
    let cleanUrl = rawUrl;
    if (cleanUrl.startsWith('/public/')) {
      cleanUrl = cleanUrl.replace('/public', '');
    }
    if (seenUrls.has(cleanUrl)) return;

    const lower = cleanUrl.toLowerCase();
    // Exclude system/manifest/metadata/README files
    if (
      lower.endsWith('.md') ||
      lower.endsWith('.json') ||
      lower.endsWith('.txt') ||
      lower.includes('logo') ||
      lower.includes('favicon')
    ) {
      return;
    }

    seenUrls.add(cleanUrl);
    photos.push({
      id: `photo-${photos.length + 1}`,
      title: '',
      imageUrl: cleanUrl,
      rotation: 0
    });
  };

  // Add all image files found in /public/gallery/
  for (const [path, moduleVal] of Object.entries(galleryGlob)) {
    const url = typeof moduleVal === 'string' ? moduleVal : (moduleVal as { default?: string })?.default || path.replace('/public', '');
    addPhoto(url);
  }

  return photos;
}

export const HISTORIC_PHOTOS: GalleryItem[] = getDiscoveredPhotos();
