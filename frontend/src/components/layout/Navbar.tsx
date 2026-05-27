"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-4" : "py-6"
      )}
    >
      {/* Floating Glass Container */}
      <div className={cn(
        "mx-auto max-w-[95%] xl:max-w-[90%] px-6 rounded-2xl border border-white/5 flex items-center justify-between transition-all duration-500",
        scrolled ? "bg-[#070B1A]/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-3" : "bg-transparent py-2"
      )}>
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Glowing outer box */}
            <div className="absolute inset-0 bg-primary rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary to-accent border border-white/20 flex items-center justify-center shadow-inner overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20" />
              <div className="w-4 h-4 bg-white rounded-sm rotate-45 transform group-hover:rotate-90 transition-transform duration-500" />
            </div>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">SiteCraft</span>
        </Link>

        {/* Center Menu Items */}
        <div className="hidden lg:flex items-center gap-8">
          {["Product", "Templates", "Solutions", "Resources", "Pricing"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Login
          </button>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300" />
            <button className="relative px-6 py-2.5 bg-[#0B1120] text-white text-sm font-semibold rounded-full leading-none flex items-center gap-2 transition-all hover:bg-transparent">
              Get Started Free
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 glass-panel p-6 rounded-2xl flex flex-col gap-4 border border-white/10"
          >
            {["Product", "Templates", "Solutions", "Resources", "Pricing"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white text-lg font-medium">{item}</Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <button className="text-white font-medium text-lg text-left">Login</button>
            <button className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg">
              Get Started Free
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
