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
      // Asigură-te că numele colecției 'rsvp' coincide cu ce ai în Firebase
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
      <div className="text-center py-20">
        <h2 className="text-3xl text-wedding-gold">Vă mulțumim!</h2>
        <p className="mt-4">Confirmarea a fost trimisă cu succes.</p>
      </div>
    );
  }

  return (
    <section id="rsvp" className="py-24 px-6">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label className="block text-sm uppercase">Nume și Prenume</label>
          <input name="nume" required className="w-full border-b border-gray-400 py-2" />
        </div>
        <div>
          <label className="block text-sm uppercase">Telefon</label>
          <input name="telefon" type="tel" required className="w-full border-b border-gray-400 py-2" />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-black text-white py-3 uppercase tracking-widest"
        >
          {loading ? "Se trimite..." : "Trimite Confirmarea"}
        </button>
      </form>
    </section>
  );
}
