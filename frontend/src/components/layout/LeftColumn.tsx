"use client";

import { motion } from "framer-motion";
import { Sparkles, Layout, Zap, Wand2, MousePointer2, Type, Image as ImageIcon, CheckCircle2, PlayCircle } from "lucide-react";

export const LeftColumn = () => {
  return (
    <div className="w-full h-full pt-40 px-6 md:px-12 xl:px-20 relative flex flex-col items-center xl:items-start text-center xl:text-left overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-mesh opacity-40 pointer-events-none" />
      <div className="absolute top-40 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-[800px] left-40 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* 1. HERO SECTION */}
      <div className="relative z-10 w-full max-w-3xl mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-gray-300">Create. Customize. Grow.</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[80px] font-bold text-white leading-[1.1] tracking-tight mb-8"
        >
          Build Stunning <br />
          <span className="text-gradient">Websites</span> for <br />
          Every Business.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed"
        >
          Generate entire layouts, copy, and themes with a single prompt. No coding required. Experience the future of web design.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center xl:justify-start justify-center"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-1">
            Start Building Free
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
            <PlayCircle className="w-5 h-5" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap gap-4 mt-12 justify-center xl:justify-start"
        >
          {["No Coding", "Drag & Drop", "AI Powered", "100+ Templates"].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 text-sm text-gray-400 hover:text-white hover:border-primary/50 transition-colors animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. AI BUILDER PREVIEW (FLOATING UI) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-4xl relative z-20 mb-40"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl -z-10 rounded-full" />
        
        {/* Builder Container */}
        <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[600px] animate-float-slow">
          
          {/* Top Bar */}
          <div className="h-14 bg-black/40 border-b border-white/10 flex items-center justify-between px-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
              <Wand2 className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">AI Magic Active</span>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-1.5 rounded bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition">Preview</button>
              <button className="px-4 py-1.5 rounded bg-white text-black text-sm font-bold hover:bg-gray-200 transition">Publish</button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden relative">
            {/* Left Sidebar */}
            <div className="w-16 border-r border-white/10 bg-black/40 flex flex-col items-center py-4 gap-6 z-10">
              {[Layout, Zap, Wand2, Type, ImageIcon, CheckCircle2].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center cursor-pointer text-gray-400 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>

            {/* Canvas Area */}
            <div className="flex-1 bg-[#0A0F1C] p-6 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]" />
              
              {/* Fake Website Mockup (Skincare/Ecommerce) */}
              <div className="relative w-full max-w-lg h-[450px] bg-[#FAF9F6] rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-700 ease-out border border-white/5">
                {/* Hero section of mockup */}
                <div className="h-[250px] w-full bg-stone-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-300/50" />
                  <div className="absolute top-4 left-4 font-serif text-lg font-bold text-stone-800">Lumière</div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-4 h-4 rounded bg-stone-300" />
                    <div className="w-4 h-4 rounded bg-stone-300" />
                  </div>
                  <div className="absolute bottom-8 left-8">
                    <div className="text-3xl font-serif text-stone-900 mb-2">Pure Radiance.</div>
                    <div className="w-24 h-8 bg-stone-900 rounded text-stone-100 text-[10px] flex items-center justify-center">Shop Now</div>
                  </div>
                </div>
                {/* Products section */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  <div className="h-32 bg-stone-200 rounded-lg" />
                  <div className="h-32 bg-stone-200 rounded-lg" />
                </div>
                
                {/* Selection Outline */}
                <div className="absolute inset-0 border-[3px] border-primary z-20 pointer-events-none">
                  <div className="absolute -top-4 -right-4 bg-primary text-white text-xs px-2 py-1 rounded shadow-lg flex items-center gap-1">
                    <Wand2 className="w-3 h-3" /> AI Generated
                  </div>
                </div>
              </div>

              {/* Bottom Floating Toolbar */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-panel rounded-full px-6 py-3 flex gap-6 z-30 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                {[Type, ImageIcon, MousePointer2, Layout].map((Icon, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 cursor-pointer group">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>

              {/* Right Floating Color Picker */}
              <div className="absolute top-1/4 right-6 glass-panel rounded-xl p-3 flex flex-col gap-3 z-30 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className="w-6 h-6 rounded-full bg-stone-200 ring-2 ring-white/50" />
                <div className="w-6 h-6 rounded-full bg-rose-200 cursor-pointer hover:scale-110 transition-transform" />
                <div className="w-6 h-6 rounded-full bg-stone-800 cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. STATISTICS SECTION */}
      <div className="w-full relative z-20 mb-40 pt-20 border-t border-white/10">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className="text-5xl font-bold text-white mb-2 tracking-tight">50K+</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm font-medium">Happy Vendors</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-2 tracking-tight">100K+</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm font-medium">Websites Created</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-2 tracking-tight">120+</div>
            <div className="text-gray-400 uppercase tracking-wider text-sm font-medium">Templates</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-white mb-2 tracking-tight text-gradient">99.9%</div>
            <div className="text-primary-light uppercase tracking-wider text-sm font-medium">Uptime Guarantee</div>
          </div>
        </div>
      </div>

      {/* 4. FINAL CTA BANNER */}
      <div className="w-full relative z-20 mb-20">
        <div className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to build your <br /> dream website?
            </h2>
            <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1">
              Get Started Free
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
