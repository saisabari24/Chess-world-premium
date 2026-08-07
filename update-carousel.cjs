const fs = require('fs');
const content = fs.readFileSync('src/components/UpcomingEventsSection.tsx', 'utf8');

const updated = content
  .replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';")
  .replace(
    "export const UpcomingEventsSection: React.FC = () => {",
    "export const UpcomingEventsSection: React.FC = () => {\n  const [currentIndex, setCurrentIndex] = useState(0);\n\n  useEffect(() => {\n    const timer = setInterval(() => {\n      setCurrentIndex((prev) => (prev + 1) % UPCOMING_EVENTS.length);\n    }, 10000);\n    return () => clearInterval(timer);\n  }, []);\n"
  );

const gridStart = updated.indexOf('{/* Events Grid */}');
const gridEnd = updated.indexOf('{/* Detailed Event Modal */}');
const originalGrid = updated.slice(gridStart, gridEnd);

const newGrid = `
        {/* Events Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              {(() => {
                const event = UPCOMING_EVENTS[currentIndex];
                const isGold = event.themeColor === 'gold';
                const isBlue = event.themeColor === 'blue';
                return (
                  <div className={\`group relative bg-cw-charcoal/90 border rounded-3xl p-7 md:p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 overflow-hidden \${
                    isGold 
                      ? 'border-cw-gold/30 hover:border-cw-gold/60 shadow-cw-gold/5' 
                      : isBlue 
                      ? 'border-blue-500/30 hover:border-blue-400/60 shadow-blue-500/5'
                      : 'border-amber-500/30 hover:border-amber-400/60 shadow-amber-500/5'
                  }\`}>
                    {/* Top Badge */}
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-6">
                        <span className={\`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border font-bold \${
                          isGold
                            ? 'bg-cw-gold/10 text-cw-gold border-cw-gold/30'
                            : isBlue
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        }\`}>
                          {event.badge}
                        </span>
                        <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-cw-gold shrink-0" /> {event.locationTag}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-cw-gold transition-colors duration-300 leading-tight mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                        {event.subtitle}
                      </p>

                      {/* Featured GM Highlight if present */}
                      {event.featuredPerson && (
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-6 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-cw-gold/20 flex items-center justify-center text-cw-gold shrink-0">
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white text-xs font-bold">{event.featuredPerson.name}</div>
                            <div className="text-[11px] text-cw-gold/80 font-mono">{event.featuredPerson.role}</div>
                          </div>
                        </div>
                      )}

                      {/* Nations flag bar if present */}
                      {event.nations && (
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mb-6">
                          <div className="text-[10px] font-mono uppercase text-gray-400 mb-2 flex items-center gap-1.5">
                            <Globe2 className="w-3.5 h-3.5 text-amber-400" /> 8 Participating South Asian Nations
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {event.nations.map((nation, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-gray-300">
                                {nation}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Info Pills */}
                      <div className="space-y-2.5 mb-6 text-xs font-mono">
                        <div className="flex items-center gap-2.5 text-gray-300">
                          <Calendar className="w-4 h-4 text-cw-gold shrink-0" />
                          <span>{event.dateDisplay}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-300">
                          <Clock className="w-4 h-4 text-cw-gold shrink-0" />
                          <span>{event.timeDisplay}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-300">
                          <MapPin className="w-4 h-4 text-cw-gold shrink-0" />
                          <span className="truncate">{event.venueDisplay}</span>
                        </div>
                        {event.entryFee && (
                          <div className="flex items-center gap-2.5 text-cw-gold font-bold">
                            <Trophy className="w-4 h-4 shrink-0" />
                            <span>Fee: {event.entryFee}</span>
                          </div>
                        )}
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 mb-8 pt-4 border-t border-white/10 text-xs text-gray-300 font-light">
                        {event.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cw-gold shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <button
                        onClick={() => setRegisterEvent(event)}
                        className="w-full py-3 bg-cw-gold text-cw-dark font-bold text-xs uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cw-gold/15"
                      >
                        Register / Entry <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="w-full py-2.5 bg-white/5 border border-white/10 text-white font-mono text-xs uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Info className="w-3.5 h-3.5 text-cw-gold" /> View Details & Rules
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {UPCOMING_EVENTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={\`w-2.5 h-2.5 rounded-full transition-all duration-300 \${
                  idx === currentIndex ? 'bg-cw-gold w-6' : 'bg-white/20 hover:bg-white/40'
                }\`}
              />
            ))}
          </div>
        </div>

`;

const final = updated.replace(originalGrid, newGrid);

fs.writeFileSync('src/components/UpcomingEventsSection.tsx', final);
