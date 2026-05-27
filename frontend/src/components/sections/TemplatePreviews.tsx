"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const templates = [
  { name: "Fashion Store", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1000&q=80", tag: "E-commerce" },
  { name: "Coffee Shop", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000&q=80", tag: "Local Business" },
  { name: "Digital Agency", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80", tag: "Portfolio" },
  { name: "Furniture Store", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&q=80", tag: "Retail" }
];

export const TemplatePreviews = () => {
  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight"
          >
            Beautiful Templates <br className="hidden md:block" /> for Every Business
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="text-primary font-bold flex items-center gap-2 hover:text-primary-light transition-colors group text-lg pb-2"
          >
            View all templates
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((tpl, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -12 }}
              className="relative h-[550px] rounded-[32px] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              {/* Background Image with Hover Zoom */}
              <img 
                src={tpl.image} 
                alt={tpl.name} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out" 
              />
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B1A] via-[#070B1A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex justify-end">
                  <span className="px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold border border-white/30 shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {tpl.tag}
                  </span>
                </div>
                
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-md">{tpl.name}</h3>
                  <div className="w-0 h-1.5 bg-primary group-hover:w-16 transition-all duration-500 ease-out rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
