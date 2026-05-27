"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Utensils, Scissors, Camera, Dumbbell, Laptop, Cake, ArrowRight, Plus } from "lucide-react";

const categories = [
  { icon: ShoppingBag, name: "Fashion" },
  { icon: Utensils, name: "Restaurant" },
  { icon: Scissors, name: "Beauty Salon" },
  { icon: Camera, name: "Photography" },
  { icon: Dumbbell, name: "Fitness" },
  { icon: Laptop, name: "Electronics" },
  { icon: Cake, name: "Bakery" },
];

export const BusinessCategories = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight"
          >
            Create a Website for <br className="hidden md:block" /> Any Business
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="text-primary font-bold flex items-center gap-2 hover:text-primary-light transition-colors group text-lg pb-2"
          >
            View all categories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap lg:flex-nowrap gap-6"
        >
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(124,58,237,0.15)",
                borderColor: "rgba(124,58,237,0.3)"
              }}
              className="flex-1 min-w-[160px] flex flex-col items-center justify-center py-10 px-4 bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <cat.icon className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors duration-300 mb-5 relative z-10" />
              <span className="font-bold text-slate-700 group-hover:text-[#0F172A] transition-colors relative z-10 text-lg">{cat.name}</span>
            </motion.div>
          ))}
          
          {/* "More" Card */}
          <motion.div 
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.05)" }}
            className="flex-1 min-w-[160px] flex flex-col items-center justify-center py-10 px-4 bg-[#F8FAFC] rounded-[24px] border border-slate-200 cursor-pointer hover:bg-slate-100 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mb-5 group-hover:bg-slate-300 transition-colors">
              <Plus className="w-5 h-5 text-slate-600" />
            </div>
            <span className="font-bold text-slate-600 text-lg">More</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
