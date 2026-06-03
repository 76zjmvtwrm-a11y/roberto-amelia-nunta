import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import RSVPForm from "../components/RSVPForm";

export default function Home() {
  return (
    <main className="bg-wedding-ivory min-h-screen text-wedding-charcoal m-0 p-0 font-sans antialiased selection:bg-wedding-gold/20">
      <Hero />
      <Welcome />
      <RSVPForm />
    </main>
  );
}
