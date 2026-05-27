"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const StatsAndVideo = () => {
  return (
    <section className="py-32 bg-[#070B1A] relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          {/* LEFT SIDE: Statistics */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-16"
            >
              <div className="flex -space-x-4">
                {[10, 11, 12, 13].map((num) => (
                  <img 
                    key={num}
                    className="w-14 h-14 rounded-full border-[3px] border-[#070B1A] relative z-10 hover:z-20 hover:scale-110 transition-transform cursor-pointer shadow-lg" 
                    src={`https://i.pravatar.cc/150?img=${num}`} 
                    alt={`Vendor ${num}`} 
                  />
                ))}
                <div className="w-14 h-14 rounded-full border-[3px] border-[#070B1A] bg-white/10 flex items-center justify-center text-white text-sm font-bold backdrop-blur-md relative z-10 shadow-lg">
                  +2K
                </div>
              </div>
              <span className="text-gray-400 font-medium text-lg">Trusted by vendors worldwide</span>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              {[
                { number: "50K+", label: "Happy Vendors" },
                { number: "100K+", label: "Websites Created" },
                { number: "120+", label: "Premium Templates" },
                { number: "99.9%", label: "Uptime Guarantee", highlight: true }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-default"
                >
                  <div className={`text-5xl lg:text-7xl font-extrabold tracking-tight mb-3 transition-transform duration-500 group-hover:-translate-y-2 ${stat.highlight ? 'text-gradient' : 'text-white'}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 uppercase tracking-widest text-sm font-bold group-hover:text-primary-light transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Video Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-[40px] overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 cursor-pointer">
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
              
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80" 
                alt="Video thumbnail" 
                className="w-full h-auto aspect-[4/3] lg:aspect-video object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:bg-black/20 transition-colors duration-500 z-20 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_50px_rgba(124,58,237,0.8)] border border-white/20 group-hover:border-primary-light group-hover:scale-110">
                  <Play className="w-10 h-10 text-white ml-2 fill-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-2xl">
                  See how vendors create & grow
                </h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
