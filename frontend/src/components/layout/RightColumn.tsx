"use client";

import { motion } from "framer-motion";
import { Sparkles, Smartphone, Search, ShieldCheck, ShoppingBag, Utensils, Scissors, Camera, Dumbbell, Laptop, Cake, MessageSquare, Cpu, Paintbrush, Globe, PlayCircle, Star, Quote } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Website Builder", color: "bg-purple-100 text-purple-600" },
  { icon: Smartphone, title: "Mobile Optimized", color: "bg-blue-100 text-blue-600" },
  { icon: Search, title: "SEO Friendly", color: "bg-emerald-100 text-emerald-600" },
  { icon: ShieldCheck, title: "Secure & Reliable", color: "bg-orange-100 text-orange-600" }
];

const templates = [
  { name: "Fashion Store", image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&q=80", tag: "E-commerce" },
  { name: "Coffee Shop", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&q=80", tag: "Local Business" },
  { name: "Digital Agency", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80", tag: "Portfolio" },
  { name: "Furniture Store", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80", tag: "Retail" }
];

const categories = [
  { icon: ShoppingBag, name: "Fashion" },
  { icon: Utensils, name: "Restaurant" },
  { icon: Scissors, name: "Beauty Salon" },
  { icon: Camera, name: "Photography" },
  { icon: Dumbbell, name: "Fitness" },
  { icon: Laptop, name: "Electronics" },
  { icon: Cake, name: "Bakery" },
];

const workflow = [
  { icon: MessageSquare, title: "Answer Questions", num: 1 },
  { icon: Cpu, title: "AI Generates Website", num: 2 },
  { icon: Paintbrush, title: "Customize Site", num: 3 },
  { icon: Globe, title: "Publish & Go Live", num: 4 },
];

export const RightColumn = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 px-8 xl:px-16 overflow-y-auto">
      
      {/* 1. FEATURES PANEL */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#0B1120] mb-8">Everything you need to succeed online</h3>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card-light rounded-2xl p-6 flex flex-col items-start transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feat.color}`}>
                <feat.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#0B1120]">{feat.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. TEMPLATE PREVIEWS */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#0B1120] mb-8">Premium Templates</h3>
        <div className="flex flex-col gap-6">
          {templates.map((tpl, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative h-48 rounded-2xl overflow-hidden group shadow-lg cursor-pointer"
            >
              <img src={tpl.image} alt={tpl.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold mb-2 inline-block border border-white/30">
                  {tpl.tag}
                </span>
                <h4 className="text-xl font-bold text-white">{tpl.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. BUSINESS CATEGORIES */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#0B1120] mb-8">Create a Website for Any Business</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(124,58,237,0.15)" }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:border-primary/30 transition-all group"
            >
              <cat.icon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">{cat.name}</span>
            </motion.div>
          ))}
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
            <span className="text-sm font-semibold text-gray-500">More categories &rarr;</span>
          </div>
        </div>
      </div>

      {/* 4. AI WORKFLOW */}
      <div className="mb-24">
        <h3 className="text-3xl font-bold text-[#0B1120] mb-8">AI-Powered Website Builder</h3>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100" />
          <div className="flex flex-col gap-8 relative z-10">
            {workflow.map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all relative">
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#0B1120] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">{step.num}</div>
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. VIDEO SECTION */}
      <div className="mb-24">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative h-64 rounded-3xl overflow-hidden group shadow-xl cursor-pointer"
        >
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team working" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:bg-primary/80 transition-colors shadow-lg border border-white/30">
              <PlayCircle className="w-8 h-8 text-white ml-1" />
            </div>
            <h3 className="text-xl font-bold text-white">See how vendors create & grow</h3>
          </div>
        </motion.div>
      </div>

      {/* 6. TESTIMONIALS */}
      <div className="mb-10">
        <h3 className="text-3xl font-bold text-[#0B1120] mb-8">Loved by creators</h3>
        <div className="flex flex-col gap-6">
          {[
            { name: "Sarah Jenkins", role: "Bloom Bakery", text: "Within 30 seconds, SiteCraft gave me exactly what I wanted." },
            { name: "David Chen", role: "Photographer", text: "The generated layout was better than paying a designer $2,000." },
            { name: "Amanda Rivera", role: "Agency Owner", text: "What took weeks now takes a few hours of customizing AI." }
          ].map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-100" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-600 mb-4 text-sm font-medium leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt={t.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h5 className="font-bold text-sm text-[#0B1120]">{t.name}</h5>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};
