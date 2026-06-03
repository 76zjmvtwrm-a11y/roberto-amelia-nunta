"use client";
import { motion } from "framer-motion";

export default function Story() {
  const milestones = [
    { title: "Prima Întâlnire", date: "Martie 2021", text: "O discuție simplă care a pus începutul unei frumoase prietenii creștine." },
    { title: "Anii de Prietenie", date: "2021 - 2024", text: "Timp în care ne-am cunoscut valorile, principiile și dorința comună de a sluji Domnului." },
    { title: "Logodna", date: "Ianuarie 2025", text: "Cu binecuvântarea părinților și călăuziți de rugăciune, am hotărât să pășim spre familie." },
    { title: "Ziua Nunții", date: "6 Septembrie 2026", text: "Momentul în care devenim un singur trup înaintea altarului lui Dumnezeu." },
  ];

  return (
    <section id="poveste" className="py-24 px-6 relative overflow-hidden bg-white/40">
      {/* Linie verticală decorativă pentru timeline (vizibilă pe ecrane mari) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-wedding-gold/30 -translate-x-1/2 hidden md:block" />
      
      <h2 className="font-heading text-4xl text-center mb-20 uppercase tracking-widest">Povestea Noastră</h2>

      <div className="max-w-5xl mx-auto space-y-24">
        {milestones.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
          >
            <div className={`w-full md:w-1/2 text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <span className="font-heading text-xl text-wedding-gold block mb-1">{item.date}</span>
              <h3 className="font-heading text-3xl mb-4 text-wedding-charcoal">{item.title}</h3>
              <p className="text-wedding-charcoal/80 leading-relaxed text-sm md:text-base">{item.text}</p>
            </div>
            
            {/* Punctul central de pe axă */}
            <div className="relative shrink-0">
              <div className="w-3 h-3 bg-wedding-gold rounded-full z-10 relative" />
              <div className="absolute inset-0 bg-wedding-gold/20 animate-ping rounded-full" />
            </div>
            
            <div className="w-full md:w-1/2 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
