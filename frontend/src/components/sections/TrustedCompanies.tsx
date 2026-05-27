"use client";

import { motion } from "framer-motion";

const companies = [
  "GreenMart", "Bloom & Co.", "Pixel Studio", "Brew Haven", "TechCorp", "NatureHub"
];

export const TrustedCompanies = () => {
  return (
    <section className="py-24 bg-white border-t border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-[1400px] text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Trusted by over 50,000 forward-thinking companies</p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {companies.map((company, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-bold font-serif text-slate-800 hover:text-primary transition-colors cursor-default"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
