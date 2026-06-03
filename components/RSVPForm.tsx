"use client";
import { useState } from 'react';
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function RSVPForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    try {
      await addDoc(collection(db, "rsvp"), {
        nume: formData.get("nume"),
        telefon: formData.get("telefon"),
        participa: formData.get("participa"),
        invitati: formData.get("invitati"),
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
  };

  if (submitted) {
    return (
      <div className="text-center py-20 px-6">
        <h2 className="text-3xl text-wedding-charcoal">Vă mulțumim!</h2>
        <p className="mt-4">Confirmarea a fost trimisă cu succes.</p>
      </div>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl text-center mb-8 font-serif">Confirmare participare</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest mb-1">Nume și Prenume</label>
            <input name="nume" required className="w-full border-b border-gray-300 py-2 focus:border-black outline-none" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest mb-1">Telefon</label>
            <input name="telefon" type="tel" required className="w-full border-b border-gray-300 py-2 focus:border-black outline-none" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest mb-1">Veți participa?</label>
            <select name="participa" className="w-full border-b border-gray-300 py-2 bg-transparent outline-none">
              <option value="Da">Da, particip cu drag</option>
              <option value="Nu">Din păcate, nu pot ajunge</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest mb-1">Număr persoane</label>
            <input name="invitati" type="number" defaultValue="1" className="w-full border-b border-gray-300 py-2 outline-none" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest mb-1">Dietă / Alergii</label>
            <input name="dieta" className="w-full border-b border-gray-300 py-2 outline-none" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest mb-1">Mesaj</label>
            <textarea name="mesaj" className="w-full border-b border-gray-300 py-2 outline-none" rows={3}></textarea>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-wedding-charcoal text-white py-4 uppercase tracking-widest hover:bg-gray-800 transition-all"
          >
            {loading ? "Se trimite..." : "Trimite Confirmarea"}
          </button>
        </form>
      </div>
    </section>
  );
}
