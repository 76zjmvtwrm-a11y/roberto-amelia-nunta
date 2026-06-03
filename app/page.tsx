import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Story from "@/components/Story";
import Schedule from "@/components/Schedule";
import RSVPForm from "@/components/RSVPForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-wedding-ivory text-wedding-charcoal">
      <Hero />
      <Welcome />
      <Story />
      <Schedule />
      <RSVPForm />
      
      <footer className="py-12 bg-wedding-charcoal text-wedding-ivory text-center">
        <p className="font-names text-4xl mb-4">Roberto & Amelia</p>
        <p className="text-xs uppercase tracking-widest opacity-50">6 Septembrie 2026 • Iași</p>
      </footer>
    </main>
  );
}
