"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, Headset, Infinity as InfinityIcon, MousePointer2, Sparkles, LayoutDashboard } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden px-6">
      
      <div className="container mx-auto max-w-[1400px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] overflow-hidden bg-[#0A0F1C] border border-primary/20 shadow-[0_0_80px_rgba(124,58,237,0.15)]"
        >
          {/* Neon Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/10 to-[#0A0F1C] opacity-80" />
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
          
          {/* Stars & Planets Simulation */}
          <div className="absolute top-10 right-20 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white] animate-pulse" />
          <div className="absolute top-40 right-10 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-10 w-4 h-4 bg-primary rounded-full blur-[2px]" />
          <div className="absolute top-20 left-1/3 w-32 h-32 bg-primary-light/10 rounded-full blur-xl" />

          {/* Floating Cursor Illustration */}
          <motion.div 
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/4 right-[20%] z-30 hidden xl:flex items-center justify-center pointer-events-none drop-shadow-2xl"
          >
            <MousePointer2 className="w-14 h-14 text-white fill-primary -rotate-12" />
            <div className="absolute top-14 left-10 bg-white text-black text-sm font-bold px-4 py-2 rounded-full shadow-xl whitespace-nowrap border border-black/5">
              Sarah is editing...
            </div>
          </motion.div>

          <div className="relative z-20 flex flex-col lg:flex-row items-center gap-16 p-12 md:p-24 lg:p-32">
            
            {/* LEFT: Dashboard Mockup */}
            <div className="w-full lg:w-1/2 relative perspective-[1200px] hidden lg:block">
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: 5 }}
                className="w-full h-[450px] bg-[#070B1A] rounded-[32px] border border-white/20 shadow-2xl overflow-hidden relative transform -rotate-2 ring-1 ring-white/10"
              >
                {/* Mockup Header */}
                <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-3">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 w-3/4 h-5 bg-white/10 rounded" />
                </div>
                {/* Mockup Content */}
                <div className="p-8 flex flex-col gap-6 relative h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                      <LayoutDashboard className="w-6 h-6 text-primary-light" />
                    </div>
                    <div className="w-1/2 h-8 bg-white/10 rounded-lg" />
                  </div>
                  
                  <div className="w-full flex-1 bg-primary/20 rounded-2xl border border-primary/30 flex items-center justify-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                    <Sparkles className="w-12 h-12 text-primary-light group-hover:scale-125 transition-transform duration-500" />
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-2">
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT/CENTER: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
                Ready to build your <br className="hidden lg:block" />
                <span className="text-gradient">dream website?</span>
              </h2>
              <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-xl font-medium leading-relaxed">
                Join thousands of vendors who trust SiteCraft. Create your account today and launch in minutes.
              </p>
              <button className="group relative px-12 py-5 rounded-full bg-white text-[#0F172A] font-bold text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-3 overflow-hidden mb-8 hover:scale-105">
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Free
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            
          </div>

          {/* BOTTOM FEATURE STRIP */}
          <div className="relative z-20 border-t border-white/10 bg-black/40 backdrop-blur-md py-8 px-10 flex flex-wrap items-center justify-center lg:justify-between gap-8">
            {[
              { text: "Free Forever Plan", icon: InfinityIcon },
              { text: "24/7 Support", icon: Headset },
              { text: "Easy Integrations", icon: CheckCircle2 },
              { text: "Lightning Fast", icon: Zap },
              { text: "Regular Updates", icon: Shield },
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-400 group hover:text-white transition-colors cursor-default">
                <feat.icon className="w-5 h-5 text-primary group-hover:text-primary-light transition-colors group-hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
                <span className="text-base font-semibold">{feat.text}</span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};
