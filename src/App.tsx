import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Trophy, Users, Monitor, ChevronRight, Crown, Target, CheckCircle2, Loader2, Calendar } from 'lucide-react';
import { GallerySection } from './components/GallerySection';
import { UpcomingEventsSection } from './components/UpcomingEventsSection';
import { ChessWorldLogo } from './components/ChessWorldLogo';

export default function App() {
  const [activeRung, setActiveRung] = useState<number | null>(3);

  return (
    <div className="min-h-screen bg-cw-dark text-white font-sans overflow-x-hidden selection:bg-cw-gold selection:text-cw-dark">
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDgwdjgwSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpIi8+PHBhdGggZD0iTTgwIDgwaDgwdjgwSDgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIvPjwvc3ZnPg==')] opacity-100 blur-[2px]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, var(--color-cw-gold) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
          <ChessWorldLogo size="lg" />
          <div className="flex items-center gap-3">
            <a href="#events" className="px-6 py-3 bg-white/10 border border-cw-gold/30 text-cw-gold font-bold uppercase text-xs tracking-widest rounded-full hover:bg-cw-gold/20 transition-all duration-300 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cw-gold" /> Upcoming Events
            </a>
            <a href="#contact" className="px-8 py-3 bg-cw-gold text-cw-dark font-bold uppercase text-xs tracking-widest rounded-full shadow-lg shadow-cw-gold/20 hover:bg-yellow-400 transition-all duration-300 hidden sm:block">
              Contact Us
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-1 pb-12 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            {/* Official Logo Badge */}
            <div className="mb-2 hover:scale-105 transition-transform duration-500 cursor-pointer p-0">
              <img 
                src="/logo.png" 
                alt="Chess World Crest" 
                className="w-64 h-auto sm:w-80 md:w-[22rem] lg:w-[26rem] filter drop-shadow-[0_10px_30px_rgba(212,175,55,0.45)] object-contain"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cw-gold animate-pulse" />
              1. e4 — EST. 1994
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.9] mb-8">
              The Arena of <br className="hidden md:block" />
              <span className="text-cw-gold">Champions</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              <strong className="text-white font-medium">Chess World</strong> is India's most experienced home-grown chess institution. 33 years of building grandmasters and engineering elite chess events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <a href="tel:+919282301111" className="px-8 py-3 bg-cw-gold text-cw-dark font-bold uppercase text-xs tracking-widest rounded-full shadow-lg shadow-cw-gold/20 hover:bg-yellow-400 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center group">
                Partner With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+919282301111" className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center flex">
                Join the Academy
              </a>
            </div>
          </motion.div>
        </section>

        {/* Statistics Marquee */}
        <section className="w-full py-3 bg-cw-gold border-y border-cw-gold/50 overflow-hidden relative">
          <div className="flex w-max animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 px-2 text-cw-dark font-black tracking-widest uppercase text-xs md:text-sm whitespace-nowrap">
                <span>★ 33 YEARS OF EXCELLENCE</span>
                <span>★ 300+ TOURNAMENTS ORGANIZED</span>
                <span>★ FIDE & SAAC BACKED</span>
                <span>★ GOVERNMENT SUPPORTED</span>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* The Legacy - Bento Box Grid */}
        <section className="py-32 px-4 max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cw-gold" /> c4 — THE LEGACY
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">The Legacy</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cw-gold to-transparent rounded-full" />
            </div>
            <p className="text-gray-400 max-w-md font-light text-lg">
              We build the players and run the arenas they battle in. Unmatched credibility since 1994.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 (Large) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group hover:border-white/20 transition-all duration-700 hover:shadow-2xl hover:shadow-cw-gold/5"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl md:text-[12rem] transition-all duration-700 text-white pointer-events-none leading-none">
                33
              </div>
              <div className="relative z-20 h-full flex flex-col justify-end">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cw-gold/10 text-cw-gold font-mono text-sm tracking-widest uppercase mb-6 w-fit border border-cw-gold/20">
                  Founder & Visionary
                </div>
                <div>
                  <h3 className="font-display text-4xl md:text-6xl font-bold mb-4">Dr. Sai R. Arul Murugan</h3>
                  <div className="text-xl text-gray-400 mb-6 font-light">PhD (USA)</div>
                  <p className="text-gray-300 font-light text-lg mb-8 leading-relaxed max-w-2xl">
                    A visionary in Indian chess. Dr. Sai has dedicated over three decades to building the next generation of Grandmasters, combining psychological resilience with rigorous analytical training to unlock the true potential in every student.
                  </p>
                  <ul className="space-y-4 text-gray-300 font-light text-lg">
                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-cw-gold"/> National Arbiter</li>
                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-cw-gold"/> Coach</li>
                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-cw-gold"/> 1995 Best Coach Award Winner</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Box 2 (Ecosystem) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cw-charcoal flex items-center justify-center text-cw-gold mb-6 border border-white/5 group-hover:border-cw-gold/30 transition-colors">
                  <Monitor className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Institutional Scope</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  Pioneering chess programs in top schools and delivering premium corporate esports leagues.
                </p>
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cw-gold"/>
                    <span>School Academies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cw-gold"/>
                    <span>Corporate Leagues</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cw-gold"/>
                    <span>Differently-abled Coaching</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 3 (Scale) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-cw-gold/10 border border-cw-gold/30 rounded-3xl p-6 hover:border-cw-gold/50 hover:bg-cw-gold/20 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cw-gold/20 flex items-center justify-center text-cw-gold mb-6 backdrop-blur-md">
                  <Trophy className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Unmatched Scale</h3>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-display font-black text-cw-gold mb-3 tracking-tighter">300+</div>
                <p className="text-gray-300 font-light">
                  Tournaments organized across Tamil Nadu & Karnataka. Free stadium scale.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coaching Pathway Section */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cw-gold" /> Nf3 — DEVELOPMENT
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">The Coaching Pathway</h2>
            <p className="text-gray-400 font-light text-base md:text-lg max-w-2xl mx-auto">
              A meticulously structured grassroots ecosystem designed to identify and nurture talent across multiple hubs.
            </p>
          </div>
          
          <div className="flex flex-col-reverse gap-3">
            {[
              { title: 'Foundations', desc: 'First-timers, ages 5+', detail: 'Laying the groundwork for a lifelong journey. We focus on piece movement, basic checkmates, and developing board awareness.', width: 'w-full' },
              { title: 'Club', desc: 'Tactics, openings, rated-play prep', detail: 'Transitioning to structured play. Students learn opening principles, tactical motifs, and tournament etiquette.', width: 'w-full md:w-11/12 mx-auto' },
              { title: 'Competitive', desc: 'Tournament coaching, FIDE-rating pathway', detail: 'Intensive preparation for state and national arenas. Advanced positional understanding, endgame technique, and opening repertoire building.', width: 'w-full md:w-5/6 mx-auto' },
              { title: 'Elite / Namma Chess', desc: 'The youth pyramid into serious competition', detail: 'Our highest tier. Grandmaster-level analytical rigor, psychological resilience training, and bespoke FIDE rating elevation strategies.', width: 'w-full md:w-3/4 mx-auto' },
            ].map((rung, idx) => {
              const isActive = activeRung === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveRung(isActive ? null : idx)}
                  className={`${rung.width} bg-white/5 border border-white/10 hover:border-cw-gold/30 transition-all duration-300 rounded-2xl p-4 md:p-6 cursor-pointer group relative overflow-hidden`}
                >
                  {isActive && <div className="absolute inset-0 bg-cw-gold/10 transition-opacity" />}
                  <div className="flex justify-between items-center relative z-10">
                    <h3 className={`font-display text-lg md:text-xl font-bold transition-colors ${isActive ? 'text-cw-gold' : 'text-white group-hover:text-cw-gold/70'}`}>
                      {rung.title}
                    </h3>
                    <ChevronRight className={`w-5 h-5 text-cw-gold transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                  </div>
                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden relative z-10"
                      >
                        <p className="text-gray-300 font-light mt-3 pt-3 border-t border-white/10 text-sm md:text-base">
                          {rung.detail}
                        </p>
                      </motion.div>
                    ) : (
                      <div className="text-gray-400 font-light mt-1 relative z-10 text-sm">{rung.desc}</div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Strategic Roadmap Section */}
        <section className="py-24 px-4 max-w-7xl mx-auto relative mb-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[400px] bg-cw-gold/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="bg-gradient-to-b from-cw-charcoal/80 to-cw-dark/90 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-16 relative z-10 overflow-hidden shadow-2xl">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-8">
                  <Target className="w-4 h-4" /> d4 — STRATEGIC ROADMAP
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">Strategic <br/>Roadmap</h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                  Elevating chess to a mainstream spectacle. We've built the foundation, and now we are executing our grandmaster vision for the next decade of Indian chess.
                </p>
                
                <button className="mt-12 px-8 py-4 bg-white text-cw-dark font-bold rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 group">
                  Partner With Our Vision <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Tick List / Roadmap */}
              <div className="relative rounded-[2rem] bg-gradient-to-tr from-[#0d121c] to-cw-charcoal border border-white/10 flex flex-col p-8 shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cw-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3 border-b border-white/10 pb-6 relative z-10">
                  <Trophy className="text-cw-gold w-6 h-6" /> Milestones
                </h3>

                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-cw-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-lg mb-1">300+ Tournaments Successfully Organized</div>
                      <div className="text-gray-400 text-sm">Flawless execution across Tamil Nadu & Karnataka</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-cw-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-lg mb-1">Grassroots Pathway Established</div>
                      <div className="text-gray-400 text-sm">Namma Chess ecosystem spanning multiple hubs</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-cw-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-lg mb-1">FIDE & SAAC Backing Secured</div>
                      <div className="text-gray-400 text-sm">Recognized globally for coaching excellence</div>
                    </div>
                  </div>

                  <div className="relative py-4 my-2">
                    <div className="absolute inset-0 bg-cw-gold/5 rounded-xl border border-cw-gold/10" />
                    <div className="relative px-4 py-1 text-xs font-mono text-cw-gold tracking-widest uppercase">In Progress</div>
                  </div>

                  <div className="flex gap-4 items-start opacity-70">
                    <Loader2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5 animate-[spin_3s_linear_infinite]" />
                    <div>
                      <div className="font-bold text-lg mb-1">Bengaluru Chess Marathon</div>
                      <div className="text-gray-400 text-sm">A city-wide spectacle of endurance chess</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start opacity-70">
                    <Loader2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5 animate-[spin_3s_linear_infinite]" />
                    <div>
                      <div className="font-bold text-lg mb-1">Inter-Corporate Chess League</div>
                      <div className="text-gray-400 text-sm">Bringing the battlefield to elite business minds</div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start opacity-70">
                    <Loader2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5 animate-[spin_3s_linear_infinite]" />
                    <div>
                      <div className="font-bold text-lg mb-1">Broadcast-Grade Live Production</div>
                      <div className="text-gray-400 text-sm">Esports-derived analytics and real-time streams</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section (Moved below Hero) */}
        <UpcomingEventsSection />

        {/* Inclusion Section */}
        <section className="py-12 px-4 max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 p-4 md:p-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cw-gold" /> b3 — INCLUSIVE CHESS
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-8">
              Chess belongs to every mind.
            </h2>
            
            <div className="w-24 h-[1px] bg-cw-gold/50 mx-auto mb-10" />
            
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
              At Chess World, we believe the board is a great equaliser. We are proud of our distinctive, long-running work pioneering coaching at institutions serving differently-abled students. We adapt our teaching, provide the right support, and focus on the intellectual capability of every child.
            </p>
            
            <button className="px-8 py-3 border border-white/20 text-gray-300 font-mono uppercase text-xs tracking-widest rounded-full hover:bg-white/5 hover:text-white transition-all duration-300">
              INCLUSION & SUPPORT COACHING
            </button>
          </motion.div>
        </section>

        
        {/* Testimonials */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cw-gold" /> Qxd5 — CHAMPION TESTIMONIALS
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">What Our Champions Say</h2>
            <div className="w-16 h-1 bg-cw-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Chess World transformed my approach to the game. The analytical rigor and tournament exposure here is unmatched in India.", author: "Arjun K.", title: "Academy Student" },
              { text: "The coaches don't just teach openings; they build psychological resilience. The Grassroots Pathway is a brilliantly structured program.", author: "Priya S.", title: "Parent" },
              { text: "Organizing our corporate league with Chess World was flawless. Their professional production elevated the entire experience.", author: "Vikram R.", title: "Corporate Sponsor" },
              { text: "Chess World has been instrumental in cultivating young talent and promoting intellectual sportsmanship within our community. Their dedication to organizing high-caliber tournaments in Hosur is truly commendable.", author: "S. A. Sathya", title: "Hon'ble Mayor, Hosur" },
              { text: "Chess World conducted the Krishnagiri District Tournament in an incredibly successful and grand manner. The professionalism, flawless execution, and attention to detail provided our students with an unforgettable experience.", author: "Principal", title: "Brundavan School, Hosur" },
              { text: "The scale and organization of the district championship were mind-blowing. Seeing my child compete in such a well-structured, professional arena gives me immense confidence in their journey.", author: "Ramesh M.", title: "Tournament Parent" }
            ].map((testi, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col">
                <div className="text-cw-gold text-4xl font-serif mb-4">"</div>
                <p className="text-gray-300 font-light leading-relaxed mb-6 italic flex-grow">{testi.text}</p>
                <div>
                  <div className="font-bold text-white">{testi.author}</div>
                  <div className="text-xs text-cw-gold uppercase tracking-wider">{testi.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 max-w-4xl mx-auto relative mb-12">
          <div className="bg-gradient-to-br from-cw-charcoal to-[#0d121c] border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl text-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cw-gold/10 border border-cw-gold/30 text-cw-gold text-xs font-mono uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cw-gold" /> 1-0 — CHECKMATE / CONTACT
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Make Your Move?</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Whether you're looking to enroll in our academy, partner for a corporate event, or learn more about our inclusion programs, our team is ready to assist you.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="tel:9282301111" className="px-8 py-4 bg-cw-gold text-cw-dark font-bold rounded-full hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-3">
                  Call +91 92823 01111
                </a>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300">
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-gray-400 bg-cw-dark">
          <ChessWorldLogo size="sm" showText={true} />
          
          <div className="text-center md:text-left font-mono">
            HQ: HOSUR | ELECTRONIC CITY, BENGALURU | TAMBARAM, CHENNAI
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-mono">
            <a href="tel:9282301111" className="hover:text-cw-gold transition-colors">+91 92823 01111</a>
            <a href="mailto:office@chessworldindia.com" className="hover:text-cw-gold transition-colors">OFFICE@CHESSWORLDINDIA.COM</a>
          </div>
          
          <div className="font-bold text-white">&copy; {new Date().getFullYear()} CHESS WORLD EST. 1994</div>
        </footer>
      </div>
    </div>
  );
}
