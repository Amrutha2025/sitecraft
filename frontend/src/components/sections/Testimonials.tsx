"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { 
    name: "Sarah Jenkins", 
    role: "Founder, Bloom Bakery", 
    text: "I was quoted $5,000 for a custom website. SiteCraft's AI generated a layout that was honestly better, and it took me less than 5 minutes to launch.",
    rating: 5,
    avatar: 10
  },
  { 
    name: "David Chen", 
    role: "Freelance Photographer", 
    text: "The portfolio templates are stunning. The AI automatically organized my photos and picked a dark theme that perfectly matches my moody photography style.",
    rating: 5,
    avatar: 12
  },
  { 
    name: "Amanda Rivera", 
    role: "Digital Agency Owner", 
    text: "We now use SiteCraft for all our local business clients. What used to take weeks of development now takes a few hours of customizing AI layouts.",
    rating: 5,
    avatar: 23
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight mb-6"
          >
            Loved by thousands of creators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl max-w-2xl mx-auto font-medium"
          >
            Don't just take our word for it. See what real vendors are building with SiteCraft every single day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -12, boxShadow: "0 30px 60px -15px rgba(124,58,237,0.15)" }}
              className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative group cursor-default transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-primary/10 transition-colors duration-500" />
              
              <div className="flex gap-1.5 mb-8">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                ))}
              </div>
              
              <p className="text-slate-700 text-xl font-medium leading-relaxed mb-10 relative z-10">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-5 mt-auto">
                <img 
                  src={`https://i.pravatar.cc/150?img=${t.avatar}`} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full ring-2 ring-slate-100 group-hover:ring-primary/30 transition-all shadow-md" 
                />
                <div>
                  <h5 className="font-bold text-[#0F172A] text-lg">{t.name}</h5>
                  <span className="text-sm font-bold text-primary">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
