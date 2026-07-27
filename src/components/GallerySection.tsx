import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { HISTORIC_PHOTOS } from '../data/historicGalleryPhotos';

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  fallbackUrl?: string;
  caption?: string;
  location?: string;
  date?: string;
  rotation?: number;
}

export const GallerySection: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>(HISTORIC_PHOTOS);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Optional runtime manifest fetcher for post-build dynamic photo additions
  useEffect(() => {
    let isMounted = true;

    async function checkManifest() {
      try {
        const res = await fetch('/gallery/manifest.json');
        if (!res.ok) return;
        const data = await res.json();
        if (!Array.isArray(data.photos) || !isMounted) return;

        const manifestUrls: string[] = data.photos
          .filter((p: unknown): p is string => typeof p === 'string' && p.trim().length > 0)
          .map((p: string) => p.trim());

        if (manifestUrls.length === 0) return;

        setItems((prev) => {
          const existingUrls = new Set(prev.map((item) => item.imageUrl));
          const newItems: GalleryItem[] = [];

          manifestUrls.forEach((url, idx) => {
            if (!existingUrls.has(url)) {
              newItems.push({
                id: `manifest-${idx}-${Date.now()}`,
                title: '',
                imageUrl: url,
                rotation: 0,
              });
            }
          });

          if (newItems.length === 0) return prev;
          return [...prev, ...newItems];
        });
      } catch {
        // ignore if manifest missing or unparseable
      }
    }

    checkManifest();

    return () => {
      isMounted = false;
    };
  }, []);

  // Scroll container ref
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleRotate = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const updatedRotation = ((item.rotation || 0) + 90) % 360;
          if (selectedItem?.id === id) {
            setSelectedItem({ ...selectedItem, rotation: updatedRotation });
          }
          return { ...item, rotation: updatedRotation };
        }
        return item;
      })
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[300px] bg-cw-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cw-gold" /> Rxf7+ — VISUAL ARCHIVES
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
              Chess World Gallery
            </h2>
            <p className="text-gray-400 font-light text-base md:text-lg mt-2 max-w-2xl">
              A visual chronicle of tournament play, training arenas, equipment, and academy life.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Scroll Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-cw-gold hover:text-cw-gold transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:border-cw-gold hover:text-cw-gold transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Gallery Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[380px] group bg-cw-charcoal/80 border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-cw-gold/50 transition-all duration-500 shadow-xl"
            >
              {/* Photo View */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/60 flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt="Chess World Photo"
                  loading="lazy"
                  style={{
                    transform: item.rotation ? `rotate(${item.rotation}deg)` : undefined,
                    transition: 'transform 0.4s ease'
                  }}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (item.fallbackUrl && img.src !== item.fallbackUrl) {
                      img.src = item.fallbackUrl;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cw-dark/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Card Quick Rotate button */}
                <button
                  onClick={(e) => handleRotate(item.id, e)}
                  title="Rotate photo 90°"
                  className="absolute top-4 left-4 p-2.5 rounded-full bg-cw-dark/80 backdrop-blur-md border border-white/15 text-white hover:text-cw-gold opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <RotateCw className="w-4 h-4 text-cw-gold" />
                </button>

                {/* Hover zoom icon */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-cw-dark/70 backdrop-blur-md border border-white/15 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4 text-cw-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-cw-charcoal border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 flex flex-col items-center justify-center min-h-[350px] max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-cw-gold hover:bg-black transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image View */}
                <div className="w-full h-full bg-black/80 rounded-2xl flex items-center justify-center relative overflow-hidden min-h-[300px] p-2">
                  <img
                    src={selectedItem.imageUrl}
                    alt="Chess World Gallery Detail"
                    style={{
                      transform: selectedItem.rotation ? `rotate(${selectedItem.rotation}deg)` : undefined,
                      transition: 'transform 0.4s ease'
                    }}
                    className="w-full h-full object-contain max-h-[75vh]"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (selectedItem.fallbackUrl && img.src !== selectedItem.fallbackUrl) {
                        img.src = selectedItem.fallbackUrl;
                      }
                    }}
                  />

                  {/* Lightbox Rotate Control */}
                  <button
                    onClick={() => handleRotate(selectedItem.id)}
                    className="absolute bottom-4 left-4 z-20 px-4 py-2.5 rounded-full bg-black/80 border border-cw-gold/40 text-cw-gold hover:bg-cw-gold hover:text-cw-dark text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 backdrop-blur-md shadow-lg"
                  >
                    <RotateCw className="w-4 h-4" /> Rotate 90°
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

