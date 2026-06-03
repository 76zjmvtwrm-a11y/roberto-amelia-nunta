"use client";
import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function RSVPForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      await addDoc(collection(db, "rsvp"), {
        nume: formData.get("nume"),
        telefon: formData.get("telefon"),
        participa: formData.get("participa"),
        invitati: formData.get("invitati"),
        copii: formData.get("copii"),
        dieta: formData.get("dieta"),
        mesaj: formData.get("mesaj"),
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("A apărut o eroare. Vă rugăm să încercați din nou.");
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="text-center py-20 bg-white border border-wedding-blush mx-4 rounded-sm shadow-sm max-w-2xl mx-auto">
        <h2 className="font-names text-5xl text-wedding-gold mb-4">Vă mulțumim!</h2>
        <p className="font-heading text-xl text-wedding-charcoal">Răspunsul vostru a fost înregistrat cu succes.</p>
        <p className="mt-4 text-sm text-wedding-charcoal/60">Ne rugăm ca Domnul să vă binecuvânteze!</p>
      </div>
    );
  }

  return (
    <section id="rsvp" className="py-24 px-6 bg-wedding-ivory">
      <div className="max-w-2xl mx-auto border border-wedding-blush p-8 md:p-12 shadow-sm bg-white/60 backdrop-blur-sm rounded-sm">
        <h2 className="font-heading text-4xl text-center mb-2 uppercase tracking-widest text-wedding-charcoal">Confirmare Prezență</h2>
        <p className="text-center mb-12 italic text-wedding-charcoal/60 text-sm">Vă rugăm să confirmați participarea până la data de 1 August 2026</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest mb-2 text-wedding-charcoal/70">Nume Complet</label>
              <input name="nume" required className="bg-transparent border-b border-wedding-charcoal/20 py-2 focus:border-wedding-gold outline-none transition-colors" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest mb-2 text-wedding-charcoal/70">Număr Telefon</label>
              <input name="telefon" required type="tel" className="bg-transparent border-b border-wedding-charcoal/20 py-2 focus:border-wedding-gold outline-none transition-colors" />
            </div>
          </div>

          <div className="flex flex-col space-y-4 pt-2">
            <label className="text-xs uppercase tracking-widest text-wedding-charcoal/70">Veți fi alături de noi?</label>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="participa" value="DA" required className="accent-wedding-gold" /> 
                <span className="font-heading text-lg">Da, cu drag!</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="participa" value="NU" required className="accent-wedding-gold" /> 
                <span className="font-heading text-lg">Din păcate, nu pot</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest mb-2 text-wedding-charcoal/70">Număr Adulți</label>
              <input name="invitati" type="number" min="1" defaultValue="1" className="bg-transparent border-b border-wedding-charcoal/20 py-2 focus:border-wedding-gold outline-none" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-widest mb-2 text-wedding-charcoal/70">Număr Copii (dacă e cazul)</label>
              <input name="copii" type="number" min="0" defaultValue="0" className="bg-transparent border-b border-wedding-charcoal/20 py-2 focus:border-wedding-gold outline-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest mb-2 text-wedding-charcoal/70">Preferințe culinare / Regim special</label>
            <input name="dieta" placeholder="Ex: Vegetarian, post, alergii..." className="bg-transparent border-b border-wedding-charcoal/20 py-2 focus:border-wedding-gold outline-none text-sm placeholder:opacity-40" />
          </div>

          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest mb-2 text-wedding-charcoal/70">Un gând sau verset pentru miri</label>
            <textarea name="mesaj" rows={3} className="bg-transparent border border-wedding-charcoal/10 p-4 focus:border-wedding-gold outline-none resize-none text-sm rounded-sm" />
          </div>

          <button 
            disabled={loading}
            className="w-full bg-wedding-charcoal text-wedding-ivory py-4 uppercase tracking-[0.2em] text-xs hover:bg-wedding-gold transition-all disabled:opacity-50 font-bold shadow-sm"
          >
            {loading ? "Se trimite..." : "Trimite Confirmarea"}
          </button>
        </form>
      </div>
    </section>
  );
}
