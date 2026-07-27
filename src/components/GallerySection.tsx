import React, { useState, useRef } from 'react';
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
              className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[380px] group bg-cw-charcoal/80 border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-cw-gold/40 transition-all duration-500 shadow-xl"
            >
              {/* Photo View */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/60 flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
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
                <div className="absolute inset-0 bg-gradient-to-t from-cw-dark/90 via-cw-dark/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

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

              {/* Photo Details Below */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-cw-gold transition-colors duration-300 line-clamp-1">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="text-gray-400 text-xs font-light line-clamp-2 mt-1.5 leading-relaxed">
                    {item.caption}
                  </p>
                )}
                {(item.location || item.date) && (
                  <div className="flex justify-between items-center text-[11px] font-mono text-gray-500 pt-3 mt-3 border-t border-white/5">
                    <span>{item.location || 'Chess World'}</span>
                    {item.date && <span className="text-cw-gold/80">{item.date}</span>}
                  </div>
                )}
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
                className="relative max-w-4xl w-full bg-cw-charcoal border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-cw-gold hover:bg-black transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row max-h-[85vh]">
                  {/* Image View */}
                  <div className="md:w-2/3 bg-black/80 flex items-center justify-center relative overflow-hidden min-h-[320px] p-4">
                    <img
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      style={{
                        transform: selectedItem.rotation ? `rotate(${selectedItem.rotation}deg)` : undefined,
                        transition: 'transform 0.4s ease'
                      }}
                      className="w-full h-full object-contain max-h-[70vh]"
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
                      <RotateCw className="w-4 h-4" /> Fix / Rotate 90°
                    </button>
                  </div>

                  {/* Info Sidebar */}
                  <div className="md:w-1/3 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-cw-dark/90">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white mb-3">
                        {selectedItem.title}
                      </h3>
                      {selectedItem.caption && (
                        <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                          {selectedItem.caption}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 pt-6 border-t border-white/10">
                      {(selectedItem.location || selectedItem.date) && (
                        <div className="space-y-2 text-xs font-mono text-gray-400">
                          {selectedItem.location && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">Location:</span>
                              <span className="text-white">{selectedItem.location}</span>
                            </div>
                          )}
                          {selectedItem.date && (
                            <div className="flex justify-between">
                              <span className="text-gray-500">Date:</span>
                              <span className="text-cw-gold">{selectedItem.date}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <button
                        onClick={() => handleRotate(selectedItem.id)}
                        className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cw-gold text-cw-gold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                      >
                        <RotateCw className="w-3.5 h-3.5" /> Rotate Image (Current: {selectedItem.rotation || 0}°)
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

