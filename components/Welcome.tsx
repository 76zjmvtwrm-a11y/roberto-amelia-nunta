"use client";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="py-24 px-6 bg-wedding-ivory">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="mb-12 space-y-3">
          <p className="font-heading italic text-2xl md:text-3xl text-wedding-gold">
            „Iar acum rămân acestea trei: credința, nădejdea și dragostea.”
          </p>
          <p className="font-heading italic text-2xl md:text-3xl text-wedding-gold">
            „Dar cea mai mare dintre ele este dragostea."
          </p>
          <p className="font-body text-xs uppercase tracking-[0.2em] opacity-60 pt-2">1 Corinteni 13:13</p>
        </div>

        <div className="h-px w-24 bg-wedding-gold/40 mx-auto mb-12" />

        <p className="font-heading text-2xl leading-relaxed text-wedding-charcoal max-w-2xl mx-auto text-balance">
          Călăuziți de iubirea lui Dumnezeu și binecuvântați cu darul de a merge împreună
          pe același drum, vă invităm să ne fiți alături în ziua în care Dumnezeu ne va uni inimile
          
        </p>
      </motion.div>
    </section>
  );
}
