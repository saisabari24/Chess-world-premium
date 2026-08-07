import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, Clock, MapPin, Trophy, Users, Globe2, Award, 
  Sparkles, ChevronRight, Phone, Mail, CheckCircle2, X, 
  Info, ShieldAlert, ArrowUpRight, Flame
} from 'lucide-react';

export interface UpcomingEvent {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  dateDisplay: string;
  timeDisplay: string;
  venueDisplay: string;
  locationTag: string;
  featuredPerson?: {
    name: string;
    role: string;
  };
  highlights: string[];
  prizePool?: string;
  entryFee?: string;
  rulesAndFormat: string[];
  contactPerson?: {
    name: string;
    phone: string;
    email: string;
  };
  themeColor: 'gold' | 'blue' | 'amber';
  nations?: string[];
  registrationDeadline?: string;
}

const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: 'gm-simultaneous-2026',
    title: 'Grandmaster Simultaneous Chess Exhibition',
    subtitle: 'One Grandmaster. Twenty Boards. One Afternoon. First Time Ever in Hosur.',
    category: 'Exhibition Masterclass',
    badge: 'GM Event • 31st July',
    dateDisplay: '31st July 2026 (Friday)',
    timeDisplay: '11:00 AM Onwards',
    venueDisplay: 'Brundavana High School, Hosur',
    locationTag: 'Brundavana, Hosur',
    featuredPerson: {
      name: 'Grandmaster Thejkumar M S',
      role: 'Secretary, Karnataka State Chess Association (KDSCA)'
    },
    highlights: [
      '20 boards played simultaneously',
      'GM plays White on all boards at Brundavana High School',
      'No clocks — player moves when GM arrives at board',
      'Special memento for any player who draws or defeats the GM',
      'Certificate of Participation for every participant',
      'Presented in celebration of South Asian Chess Heritage Month (SACC)'
    ],
    rulesAndFormat: [
      'Format: 20-board simultaneous exhibition at Brundavana High School, Hosur.',
      'Grandmaster handles White pieces across all boards.',
      'Players make their move only when the Grandmaster steps to their board.',
      'Duration: Approx. 2.5 to 3 hours.',
      'All players receive an official SACC & Chess World participation certificate.'
    ],
    contactPerson: {
      name: 'Chess World Office',
      phone: '+91 92823 01111',
      email: 'office@chessworldindia.com'
    },
    themeColor: 'gold',
    registrationDeadline: '30th July 2026'
  },
  {
    id: 'krishnagiri-district-2026',
    title: 'Krishnagiri District Level Chess Championship 2026',
    subtitle: 'Organised by Chess World Hosur (Est. 1994) at Brundavana High School',
    category: 'District Championship',
    badge: 'District Cup • 1st August',
    dateDisplay: '01 - 08 - 2026 (Saturday)',
    timeDisplay: '10:30 AM First Round (Report 9:30 AM)',
    venueDisplay: 'Brundavana High School, Hosur, Krishnagiri Dist.',
    locationTag: 'Brundavana, Hosur',
    highlights: [
      'Total 40 Trophies to be won (Top 10 in U-8, U-10, U-12, U-15)',
      'All participants receive an official Medal',
      'FREE entry for Government school students with valid ID',
      'Special awards: Best Girl, Youngest Player & Best Sportsmanship',
      'Official FIDE rules with Swiss Pairing System (6 rounds, unrated)'
    ],
    prizePool: '40 Trophies + Medals for ALL',
    entryFee: '₹250 per player (FREE for Govt School Students)',
    rulesAndFormat: [
      'Tournament is open only to Krishnagiri District players.',
      'Swiss Pairing System will be followed — 6 rounds, unrated.',
      'Latest FIDE Rules in force shall apply.',
      'First round starts at 10:30 AM. Reporting by 9:30 AM.',
      'Electronic devices and gadgets strictly prohibited during play.',
      'Entries close on 30th July 2026 upon receipt of payment.'
    ],
    contactPerson: {
      name: 'A. Jothie (Coordinator)',
      phone: '+91 92823 01111',
      email: 'office@chessworldindia.com'
    },
    themeColor: 'blue',
    registrationDeadline: '30th July 2026'
  },
  {
    id: 'sacc-onsite-2026',
    title: "South Asian Children's Chess Invitational — On-Site (India)",
    subtitle: 'A prestigious over-the-board championship in Bengaluru uniting young Indian minds across 4 age categories.',
    category: 'SACC On-Site Tournament',
    badge: 'On-Site • 1st Week August',
    dateDisplay: '1st Week August 2026',
    timeDisplay: 'Schedule TBA',
    venueDisplay: 'Bengaluru, Karnataka, India',
    locationTag: 'Bengaluru, India',
    highlights: [
      'INR 1,00,000 Total On-Site Prize Fund + Trophies & Medals',
      'Categories: Under-8, Under-10, Under-12, Under-14',
      'Open to Indian players with world-class playing conditions',
      'Celebrating South Asian Heritage Month in association with SACC',
      'Organised by Founder-Director Dr. Sai R. Arul Murugan'
    ],
    prizePool: 'INR 1,00,000 Total Prize Fund',
    entryFee: 'Open for Indian Categories',
    rulesAndFormat: [
      'On-site Tournament (India): Held in Bengaluru, open to Indian players across U-8, U-10, U-12, U-14.',
      'Total On-Site Prize Pool: INR 1,00,000.',
      'Format: Rapid tournament with official FIDE Arbiter oversight.',
      'Trophies, Medals & Certificates awarded to top position holders in every category.'
    ],
    contactPerson: {
      name: 'Dr. Sai R. Arul Murugan (Founder-Director)',
      phone: '+91 92823 01111',
      email: 'office@chessworldindia.com'
    },
    themeColor: 'amber',
    registrationDeadline: 'Early August 2026'
  },
  {
    id: 'sacc-online-2026',
    title: "South Asian Children's Chess Invitational — Online (8 Nations)",
    subtitle: 'A monitored international online tournament connecting young prodigies across all 8 South Asian nations.',
    category: 'SACC International Online',
    badge: '8-Nation Online • 1st Week August',
    dateDisplay: '1st Week August 2026',
    timeDisplay: 'Schedule TBA',
    venueDisplay: 'Monitored Online Platform (Global Access)',
    locationTag: '8 South Asian Nations',
    nations: [
      'India (Host)', 'Sri Lanka', 'Nepal', 'Bangladesh', 
      'Bhutan', 'Maldives', 'Pakistan', 'Afghanistan'
    ],
    highlights: [
      'INR 3,00,000 Combined Online Prize Fund (Titled & Non-Titled)',
      'INR 2,00,000 Total Prize Fund for Titled Category',
      'INR 1,00,000 Total Prize Fund for Non-Titled Category',
      'Open to young players from all 8 participating South Asian countries',
      'Monitored online platform ensuring strict fair play'
    ],
    prizePool: 'INR 3,00,000 Total Online Prize Fund',
    entryFee: 'Invitational / Open Online Entry',
    rulesAndFormat: [
      'Online Tournament (8 Nations): Monitored fair-play platform connecting young players across South Asia.',
      'Titled Category Online Prize: INR 2,00,000 total pool.',
      'Non-titled Category Online Prize: INR 1,00,000 total pool.',
      'Official SACC & Chess World Digital Certificates awarded for all participants.'
    ],
    contactPerson: {
      name: 'Dr. Sai R. Arul Murugan (Founder-Director)',
      phone: '+91 92823 01111',
      email: 'office@chessworldindia.com'
    },
    themeColor: 'gold',
    registrationDeadline: 'Early August 2026'
  }
];

export const UpcomingEventsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % UPCOMING_EVENTS.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const [selectedEvent, setSelectedEvent] = useState<UpcomingEvent | null>(null);
  const [registerEvent, setRegisterEvent] = useState<UpcomingEvent | null>(null);

  // Registration Form State
  const [playerName, setPlayerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [ageCategory, setAgeCategory] = useState('U-10');
  const [school, setSchool] = useState('');
  const [isGovtSchool, setIsGovtSchool] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setRegisterEvent(null);
      setPlayerName('');
      setPhone('');
      setEmail('');
      setSchool('');
    }, 2500);
  };

  return (
    <section id="events" className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cw-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-4 shadow-lg shadow-cw-gold/5">
            <Flame className="w-4 h-4 text-cw-gold animate-bounce" /> 0-0 — CASTLING • July & August 2026 Tournaments
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Upcoming Events & Championships
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">
            Experience grandmaster simultaneous exhibitions, district championships, and 8-nation South Asian invitationals hosted by Chess World.
          </p>
        </div>

        
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
                  <div className={`group relative bg-cw-charcoal/90 border rounded-3xl p-7 md:p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    isGold 
                      ? 'border-cw-gold/30 hover:border-cw-gold/60 shadow-cw-gold/5' 
                      : isBlue 
                      ? 'border-blue-500/30 hover:border-blue-400/60 shadow-blue-500/5'
                      : 'border-amber-500/30 hover:border-amber-400/60 shadow-amber-500/5'
                  }`}>
                    {/* Top Badge */}
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border font-bold ${
                          isGold
                            ? 'bg-cw-gold/10 text-cw-gold border-cw-gold/30'
                            : isBlue
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        }`}>
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-cw-gold w-6' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

{/* Detailed Event Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-cw-charcoal border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl my-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title Header */}
                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-[10px] font-mono uppercase tracking-widest">
                    {selectedEvent.category}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white mt-3">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">{selectedEvent.subtitle}</p>
                </div>

                {/* Event Schedule Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-cw-dark/80 border border-white/10 mb-8 font-mono text-xs">
                  <div>
                    <span className="text-gray-500 uppercase tracking-wider block mb-1">Date & Day</span>
                    <span className="text-cw-gold font-bold text-sm">{selectedEvent.dateDisplay}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase tracking-wider block mb-1">Timing</span>
                    <span className="text-white font-bold text-sm">{selectedEvent.timeDisplay}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase tracking-wider block mb-1">Venue</span>
                    <span className="text-white">{selectedEvent.venueDisplay}</span>
                  </div>
                  {selectedEvent.entryFee && (
                    <div>
                      <span className="text-gray-500 uppercase tracking-wider block mb-1">Entry Fee</span>
                      <span className="text-cw-gold font-bold">{selectedEvent.entryFee}</span>
                    </div>
                  )}
                </div>

                {/* All Rules & Regulations */}
                <div className="mb-8">
                  <h4 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-cw-gold" /> Tournament Format & Regulations
                  </h4>
                  <ul className="space-y-2.5 text-sm text-gray-300 font-light">
                    {selectedEvent.rulesAndFormat.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="w-5 h-5 rounded-full bg-cw-gold/10 text-cw-gold text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact & Registration Footer */}
                {selectedEvent.contactPerson && (
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                    <div>
                      <div className="text-xs font-mono uppercase text-gray-400">Official Contact Coordinator</div>
                      <div className="text-white font-bold text-sm">{selectedEvent.contactPerson.name}</div>
                      <div className="text-cw-gold text-xs font-mono mt-1">{selectedEvent.contactPerson.phone} • {selectedEvent.contactPerson.email}</div>
                    </div>
                    <a
                      href={`tel:${selectedEvent.contactPerson.phone.replace(/[^0-9+]/g, '')}`}
                      className="px-5 py-2.5 bg-cw-gold/20 text-cw-gold border border-cw-gold/40 rounded-full font-mono text-xs uppercase tracking-wider hover:bg-cw-gold hover:text-cw-dark transition-all flex items-center gap-2 shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call Coordinator
                    </a>
                  </div>
                )}

                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-6 py-3 rounded-full border border-white/10 text-gray-400 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const eventToReg = selectedEvent;
                      setSelectedEvent(null);
                      setRegisterEvent(eventToReg);
                    }}
                    className="px-8 py-3 rounded-full bg-cw-gold text-cw-dark font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-lg shadow-cw-gold/20 flex items-center gap-2"
                  >
                    Proceed to Registration <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Registration / Inquiry Modal */}
        <AnimatePresence>
          {registerEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto"
              onClick={() => setRegisterEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-lg w-full bg-cw-charcoal border border-cw-gold/30 rounded-3xl p-8 shadow-2xl my-8"
              >
                <button
                  onClick={() => setRegisterEvent(null)}
                  className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6 pb-4 border-b border-white/10">
                  <div className="inline-block px-3 py-1 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-[10px] font-mono uppercase tracking-widest mb-2">
                    Event Registration
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {registerEvent.title}
                  </h3>
                  <p className="text-cw-gold text-xs font-mono mt-1">{registerEvent.dateDisplay}</p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-cw-gold/20 text-cw-gold border border-cw-gold/40 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-white">Registration Submitted!</h4>
                    <p className="text-gray-300 text-xs font-mono max-w-xs leading-relaxed">
                      Thank you <span className="text-cw-gold font-bold">{playerName || 'Participant'}</span>. Our coordinator will contact you at <span className="text-white font-bold">{phone}</span> to confirm your slot.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                        Participant Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Master Arjun Kumar"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cw-gold transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cw-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                          Category
                        </label>
                        <select
                          value={ageCategory}
                          onChange={(e) => setAgeCategory(e.target.value)}
                          className="w-full bg-cw-dark border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cw-gold transition-colors"
                        >
                          <option value="U-08">Under-08</option>
                          <option value="U-10">Under-10</option>
                          <option value="U-12">Under-12</option>
                          <option value="U-15">Under-15</option>
                          <option value="Open">Open / Unrated</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                        School / Institution Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name of school or academy"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cw-gold transition-colors"
                      />
                    </div>

                    {registerEvent.id === 'krishnagiri-district-2026' && (
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-mono text-white font-bold">Government School Student?</div>
                          <div className="text-[10px] text-cw-gold font-mono">100% Free Entry with valid ID</div>
                        </div>
                        <input
                          type="checkbox"
                          checked={isGovtSchool}
                          onChange={(e) => setIsGovtSchool(e.target.checked)}
                          className="w-5 h-5 accent-cw-gold rounded cursor-pointer"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-cw-gold transition-colors"
                      />
                    </div>

                    <div className="p-3.5 rounded-xl bg-cw-dark border border-cw-gold/20 text-[11px] text-gray-400 font-mono">
                      <span>UPI Payment Info: <strong className="text-cw-gold">sai7sab7@okicici</strong></span>
                      <br />
                      <span>Direct Contact: <strong className="text-white">+91 92823 01111</strong></span>
                    </div>

                    <div className="pt-3 flex justify-end gap-3 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setRegisterEvent(null)}
                        className="px-5 py-2.5 rounded-full border border-white/10 text-gray-400 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-full bg-cw-gold text-cw-dark font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-lg shadow-cw-gold/20 flex items-center gap-2"
                      >
                        Confirm Entry
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
