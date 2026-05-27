"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, Paintbrush, Globe } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Answer a few questions", desc: "Tell us about your business, goals, and style preferences." },
  { icon: Cpu, title: "AI generates your website", desc: "Our engine creates a complete, personalized layout in seconds." },
  { icon: Paintbrush, title: "Customize your site", desc: "Tweak colors, fonts, and images using our intuitive editor." },
  { icon: Globe, title: "Publish and go live", desc: "Launch your brand to the world with a single click." }
];

export const WorkflowSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-purple-50 text-primary text-sm font-bold tracking-widest uppercase mb-6"
          >
            How it works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight"
          >
            AI-Powered Website Builder
          </motion.h2>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-[120px] h-[120px] rounded-full bg-white border-4 border-slate-100 shadow-2xl flex items-center justify-center relative z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-500">
                    <step.icon className="w-12 h-12 text-primary" />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#070B1A] text-white flex items-center justify-center font-bold text-lg border-[4px] border-white shadow-md">
                      {i + 1}
                    </div>
                  </div>

                  {/* Mobile Connecting Line (hidden on desktop) */}
                  {i !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-[3px] h-12 bg-slate-200 my-4" />
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
