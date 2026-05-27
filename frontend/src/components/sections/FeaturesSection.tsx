"use client";

import { motion } from "framer-motion";
import { Sparkles, Smartphone, Search, ShieldCheck } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Website Builder", desc: "Generate a complete, stunning website with a single prompt. No coding required.", color: "bg-purple-100 text-purple-600", border: "border-purple-200" },
  { icon: Smartphone, title: "Mobile Optimized", desc: "Every layout is automatically responsive and looks perfect on all devices.", color: "bg-blue-100 text-blue-600", border: "border-blue-200" },
  { icon: Search, title: "SEO Friendly", desc: "Built-in optimization ensures your business ranks high on search engines.", color: "bg-emerald-100 text-emerald-600", border: "border-emerald-200" },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind.", color: "bg-orange-100 text-orange-600", border: "border-orange-200" }
];

export const FeaturesSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold tracking-widest uppercase mb-6"
          >
            Build. Launch. Grow.
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight"
          >
            Everything you need <br className="hidden md:block" /> to succeed online
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all cursor-default group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 border ${feat.border} ${feat.color}`}>
                <feat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{feat.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
