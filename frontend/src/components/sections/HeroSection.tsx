"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Compass, Layout, Grid, Palette, Settings, ShoppingBag, Zap, Type, Image as ImageIcon, ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] pt-32 pb-24 overflow-hidden bg-[#070B1A] flex items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#0B1120] to-transparent opacity-80 pointer-events-none" />
      
      {/* Blurred Circles & Glowing Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Particles (simulated with radial dots) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* LEFT SIDE: 40% width */}
          <div className="w-full lg:w-[40%] flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-gray-200">Create. Customize. Grow.</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Build Stunning <br />
              Websites for <br />
              <span className="text-gradient font-extrabold">Every Business.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-[420px] font-medium leading-relaxed"
            >
              Design, customize, and launch premium business websites in seconds with our advanced AI builder. No coding required.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
              
              <button className="group px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-2">
                Explore Templates
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </button>
            </motion.div>

            {/* Feature Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap gap-3 mt-12"
            >
              {[
                { label: "No Coding", icon: Layout },
                { label: "Drag & Drop", icon: Grid },
                { label: "AI Powered", icon: Zap },
                { label: "100+ Templates", icon: Palette }
              ].map((badge, i) => (
                <div 
                  key={i} 
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold text-gray-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all cursor-default flex items-center gap-2 group"
                >
                  <badge.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary-light transition-colors" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE: 60% width */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="w-full lg:w-[60%] relative perspective-[2000px] mt-10 lg:mt-0"
          >
            {/* The Builder Container */}
            <div className="relative z-20 w-full h-[700px] rounded-[40px] glass-panel border border-primary/30 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] animate-float flex flex-col ring-2 ring-primary/20">
              
              {/* TOP TOOLBAR */}
              <div className="h-16 bg-[#0B1120]/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 z-20">
                <div className="flex items-center gap-3 bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-sm font-semibold text-white">Generating your website...</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-5 py-2 rounded-xl bg-white/5 text-gray-300 text-sm font-semibold border border-white/10 hover:bg-white/10 cursor-pointer transition-colors shadow-sm">Preview</div>
                  <div className="px-5 py-2 rounded-xl bg-white text-black text-sm font-bold hover:bg-gray-200 cursor-pointer transition-colors shadow-[0_0_20px_rgba(255,255,255,0.4)]">Publish</div>
                </div>
              </div>

              {/* MIDDLE AREA */}
              <div className="flex-1 flex overflow-hidden relative">
                {/* LEFT SIDEBAR */}
                <div className="w-20 bg-[#070B1A]/95 backdrop-blur-2xl border-r border-white/10 flex flex-col items-center py-8 gap-8 z-10 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
                  {[Grid, Layout, Zap, Palette, Settings, ShoppingBag].map((Icon, i) => (
                    <div key={i} className={`w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all ${i === 1 ? 'bg-primary/20 text-primary-light border border-primary/40 shadow-[0_0_20px_rgba(124,58,237,0.5)] scale-110' : 'text-gray-500 hover:text-white hover:bg-white/10'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>

                {/* CANVAS (Website Preview) */}
                <div className="flex-1 bg-[#050811] p-8 relative overflow-hidden flex justify-center items-center">
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
                  
                  {/* The generated website mockup */}
                  <div className="w-full max-w-2xl h-full max-h-[600px] bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-2xl relative transform transition-transform hover:scale-[1.02] duration-500 flex flex-col border border-black/10">
                    {/* Website Navbar */}
                    <div className="h-16 border-b border-black/5 flex items-center justify-between px-8 bg-white/90 backdrop-blur-md">
                      <span className="font-serif text-lg font-bold text-[#1A1A1A] tracking-widest uppercase">Aura</span>
                      <div className="flex gap-6 text-xs uppercase font-bold text-[#4A4A4A] tracking-wider">
                        <span className="hover:text-black cursor-pointer">Shop</span>
                        <span className="hover:text-black cursor-pointer">About</span>
                        <span className="hover:text-black cursor-pointer">Cart (0)</span>
                      </div>
                    </div>
                    {/* Website Hero */}
                    <div className="flex-1 relative overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1615397323218-4235fc525046?w=1200&q=80" 
                        alt="Skincare Hero" 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-center p-12 lg:p-16">
                        <h2 className="text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-6 max-w-md drop-shadow-lg">
                          Natural <br /> Radiance
                        </h2>
                        <button className="px-8 py-4 bg-white text-[#1A1A1A] text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-4 w-48 hover:bg-gray-100 transition-colors shadow-xl">
                          Shop Now <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {/* Active Editor Outline */}
                      <div className="absolute inset-0 border-[3px] border-primary pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1.5 flex items-center gap-2 shadow-lg">
                          <Layout className="w-3.5 h-3.5" /> Section Active
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM FLOATING TOOLBAR */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-4 flex items-center gap-8 z-30 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                    {[Type, ImageIcon, Layout, Grid, Settings].map((Icon, i) => (
                      <div key={i} className="text-gray-300 hover:text-white hover:scale-110 transition-all cursor-pointer hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                        <Icon className="w-5 h-5" />
                      </div>
                    ))}
                  </div>

                  {/* RIGHT FLOATING THEME PANEL */}
                  <div className="absolute top-1/4 right-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 flex flex-col gap-5 z-30 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                    <div className="flex justify-center border-b border-white/10 pb-3">
                      <Type className="w-5 h-5 text-gray-300" />
                    </div>
                    <div className="flex flex-col gap-4">
                      {['bg-[#1A1A1A]', 'bg-[#E8D8CE]', 'bg-[#2C4A3B]', 'bg-[#F4E3B2]'].map((color, i) => (
                        <div 
                          key={i} 
                          className={`w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition-all shadow-inner ${color} ${i === 0 ? 'ring-2 ring-primary ring-offset-2 ring-offset-[#0B1120]' : 'border border-white/20'}`} 
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Massive background glow for the builder */}
            <div className="absolute inset-0 bg-primary/20 blur-[120px] -z-10 rounded-[40px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
