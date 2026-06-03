"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ zile: 0, ore: 0, minute: 0, secunde: 0 });

  useEffect(() => {
    const target = new Date("September 6, 2026 14:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        zile: Math.floor(distance / (1000 * 60 * 60 * 24)),
        ore: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minute: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secunde: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background elegant cu nuanțe calde */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8D1D8] via-[#F6F0E8] to-wedding-ivory -z-20" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="z-10"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-wedding-charcoal/60 block mb-4">Vă invităm la nunta noastră</span>
        <h1 className="font-names text-6xl md:text-9xl text-wedding-charcoal mb-4">Roberto & Amelia</h1>
        <p className="font-heading text-2xl md:text-3xl tracking-widest uppercase mb-2">6 Septembrie 2026</p>
        <p className="font-heading text-xl text-wedding-gold italic mb-12">Conac Polizu, Iași</p>

        {/* Ceasul Biblic / Numărătoarea Inversă */}
        <div className="flex gap-6 justify-center mb-12 font-heading text-xl bg-white/40 backdrop-blur-sm p-6 rounded-sm shadow-sm inline-flex mx-auto">
          <div className="flex flex-col px-2"><span className="text-3xl font-bold text-wedding-charcoal">{timeLeft.zile}</span> <span className="text-xs uppercase tracking-wider opacity-60">zile</span></div>
          <div className="flex flex-col px-2"><span className="text-3xl font-bold text-wedding-charcoal">{timeLeft.ore}</span> <span className="text-xs uppercase tracking-wider opacity-60">ore</span></div>
          <div className="flex flex-col px-2"><span className="text-3xl font-bold text-wedding-charcoal">{timeLeft.minute}</span> <span className="text-xs uppercase tracking-wider opacity-60">min</span></div>
          <div className="flex flex-col px-2"><span className="text-3xl font-bold text-wedding-charcoal">{timeLeft.secunde}</span> <span className="text-xs uppercase tracking-wider opacity-60">sec</span></div>
        </div>

        <div className="block">
          <a href="#rsvp" className="bg-wedding-charcoal text-wedding-ivory px-10 py-4 uppercase tracking-widest text-sm hover:bg-wedding-gold transition-colors duration-300 shadow-sm">
            Confirmă Prezența
          </a>
        </div>
      </motion.div>
    </section>
  );
}
