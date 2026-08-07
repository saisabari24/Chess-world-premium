import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, AlertCircle, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

interface EventListItem {
  slug: string;
  title: string;
  date: string;
}

interface EventListResponse {
  events: EventListItem[];
}

interface ImageItem {
  key: string;
  name: string;
  size: number;
}

interface EventDetailResponse {
  title: string;
  date: string;
  count: number;
  images: ImageItem[];
}

export const GallerySection: React.FC = () => {
  const [events, setEvents] = useState<EventListItem[] | null>(null);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState(false);

  const [eventDetails, setEventDetails] = useState<Record<string, EventDetailResponse>>({});
  const [loadingDetails, setLoadingDetails] = useState<Record<string, boolean>>({});
  const [errorDetails, setErrorDetails] = useState<Record<string, boolean>>({});

  const [activeEventSlug, setActiveEventSlug] = useState<string | null>(null);
  const [lightboxState, setLightboxState] = useState<{ eventSlug: string; index: number } | null>(null);

  const fetchEvents = useCallback(async () => {
    setEventsLoading(true);
    setEventsError(false);
    try {
      const res = await fetch('/api/gallery');
      if (!res.ok) throw new Error('Failed to fetch events');
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Expected JSON response but received: ' + contentType);
      }
      const data: EventListResponse = await res.json();
      setEvents(data.events || []);
    } catch (err) {
      console.error(err);
      setEventsError(true);
    } finally {
      setEventsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const openEvent = async (slug: string) => {
    setActiveEventSlug(slug);

    if (!eventDetails[slug] && !loadingDetails[slug]) {
      setLoadingDetails((prev) => ({ ...prev, [slug]: true }));
      setErrorDetails((prev) => ({ ...prev, [slug]: false }));
      try {
        const res = await fetch(`/api/gallery/event/${slug}`);
        if (!res.ok) throw new Error('Failed to fetch event details');
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Expected JSON response but received: ' + contentType);
        }
        const data: EventDetailResponse = await res.json();
        setEventDetails((prev) => ({ ...prev, [slug]: data }));
      } catch (err) {
        console.error(err);
        setErrorDetails((prev) => ({ ...prev, [slug]: true }));
      } finally {
        setLoadingDetails((prev) => ({ ...prev, [slug]: false }));
      }
    }
  };

  const closeEvent = () => {
    setActiveEventSlug(null);
  };

  const openLightbox = (eventSlug: string, index: number) => {
    setLightboxState({ eventSlug, index });
  };

  const closeLightbox = () => {
    setLightboxState(null);
  };

  const navigateLightbox = useCallback((direction: 'next' | 'prev') => {
    if (!lightboxState) return;
    const { eventSlug, index } = lightboxState;
    const images = eventDetails[eventSlug]?.images || [];
    if (images.length === 0) return;

    let newIndex = index;
    if (direction === 'next') {
      newIndex = (index + 1) % images.length;
    } else {
      newIndex = (index - 1 + images.length) % images.length;
    }
    setLightboxState({ eventSlug, index: newIndex });
  }, [lightboxState, eventDetails]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState, navigateLightbox]);

  const isVideo = (filename: string) => {
    const lower = filename.toLowerCase();
    return lower.endsWith('.mp4') || lower.endsWith('.mov') || lower.endsWith('.webm');
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden" id="gallery">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[300px] bg-cw-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cw-gold" /> VISUAL ARCHIVES
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Chess World Gallery
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg mt-2 max-w-2xl mx-auto md:mx-0">
            A visual chronicle of tournament play, training arenas, equipment, and academy life.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!activeEventSlug ? (
            <motion.div
              key="events-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {eventsLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-cw-charcoal/50 rounded-3xl animate-pulse border border-white/5" />
                  ))}
                </div>
              ) : eventsError ? (
                <div className="p-8 rounded-3xl bg-cw-charcoal/60 border border-red-500/20 text-center flex flex-col items-center justify-center max-w-2xl mx-auto">
                  <AlertCircle className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="font-display text-xl font-bold text-white mb-2">Unable to load gallery</h3>
                  <p className="text-gray-400 text-sm mb-6">There was an error connecting to the photo archive.</p>
                  <button
                    onClick={fetchEvents}
                    className="px-6 py-2 rounded-full bg-cw-gold/10 border border-cw-gold text-cw-gold hover:bg-cw-gold hover:text-cw-dark transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : events && events.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {events.map((event) => (
                    <button
                      key={event.slug}
                      onClick={() => openEvent(event.slug)}
                      className="group relative aspect-square bg-cw-charcoal/60 border border-white/10 rounded-3xl overflow-hidden hover:border-cw-gold/50 transition-all flex flex-col justify-end text-left shadow-lg hover:shadow-cw-gold/10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-cw-dark/90 via-cw-dark/40 to-transparent z-10" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 group-hover:opacity-100 transition-all group-hover:scale-110 duration-500 text-cw-gold">
                         <ImageIcon className="w-16 h-16 mb-4" />
                         <span className="bg-cw-gold text-cw-dark px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to Open Gallery</span>
                      </div>
                      
                      <div className="relative z-20 p-6 group-hover:opacity-0 transition-opacity duration-300">
                        <p className="text-cw-gold/80 text-xs font-mono mb-2">{new Date(event.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                          {event.title}
                        </h3>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">No events found in the gallery.</div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="event-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Active Event Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={closeEvent}
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-cw-gold hover:border-cw-gold transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {events?.find((e) => e.slug === activeEventSlug)?.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-mono mt-1">
                      {events?.find((e) => e.slug === activeEventSlug)?.date && new Date(events?.find((e) => e.slug === activeEventSlug)!.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>

              {loadingDetails[activeEventSlug] ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-white/5 rounded-2xl animate-pulse" />
                  ))}
                </div>
              ) : errorDetails[activeEventSlug] ? (
                <div className="text-center py-12">
                  <p className="text-red-400 mb-4">Failed to load media for this event.</p>
                  <button
                    onClick={() => openEvent(activeEventSlug)}
                    className="px-6 py-2 rounded-full bg-cw-gold/10 border border-cw-gold text-cw-gold hover:bg-cw-gold hover:text-cw-dark transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : eventDetails[activeEventSlug]?.images && eventDetails[activeEventSlug].images.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {eventDetails[activeEventSlug].images.map((item, index) => {
                    const video = isVideo(item.name);
                    return (
                      <div
                        key={item.key}
                        onClick={() => openLightbox(activeEventSlug, index)}
                        className="aspect-square relative rounded-2xl overflow-hidden cursor-pointer group bg-black/40 border border-white/5"
                      >
                        {video ? (
                          <video
                            src={`https://media.chessworldindia.com/${item.key}#t=0.1`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            preload="metadata"
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={`https://media.chessworldindia.com/${item.key}`}
                            alt={item.name}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-cw-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                          {video ? <VideoIcon className="w-6 h-6 text-cw-gold drop-shadow-md" /> : <ImageIcon className="w-5 h-5 text-cw-gold drop-shadow-md" />}
                        </div>
                        {video && (
                           <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 backdrop-blur-md">
                             <VideoIcon className="w-3 h-3 text-white" />
                           </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-12">No media found for this event.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxState && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-cw-dark/95 backdrop-blur-xl p-4 md:p-12"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:text-cw-gold hover:bg-black transition-all"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:text-cw-gold hover:bg-black transition-all"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Current Item */}
              <div 
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} // prevent click-outside from firing here
              >
                {eventDetails[lightboxState.eventSlug]?.images[lightboxState.index] && (
                  (() => {
                    const item = eventDetails[lightboxState.eventSlug].images[lightboxState.index];
                    const video = isVideo(item.name);
                    const mediaUrl = `https://media.chessworldindia.com/${item.key}`;

                    if (video) {
                      return (
                        <video
                          key={item.key}
                          src={mediaUrl}
                          controls
                          autoPlay
                          playsInline
                          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                      );
                    }

                    return (
                      <img
                        key={item.key}
                        src={mediaUrl}
                        alt="Gallery Full Size"
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                      />
                    );
                  })()
                )}
                
                {/* Photo counter / info */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-400 font-mono text-sm whitespace-nowrap">
                  {lightboxState.index + 1} / {eventDetails[lightboxState.eventSlug]?.images.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
