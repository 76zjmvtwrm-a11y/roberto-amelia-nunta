"use client";

export default function Schedule() {
  const events = [
    { time: "14:00", title: "Cununia Religioasă", desc: "Binecuvântarea și legământul înaintea lui Dumnezeu în Biserică" },
    { time: "15:30", title: "Părtășie & Felicitări", desc: "Agapă frățească în grădinile Conacului Polizu (fără alcool)" },
    { time: "17:00", title: "Masa Festivă", desc: "Timp de mulțumire, părtășie și binecuvântare alături de familie" },
    { time: "19:00", title: "Momente de Laudă și Mărturii", desc: "Cântări de slavă și mesaje de încurajare din Scriptură" },
    { time: "21:30", title: "Tortul Festiv & Rugăciunea de Încheiere", desc: "Gânduri de final și binecuvântarea serii" },
  ];

  return (
    <section className="py-24 px-6 bg-white/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl text-center mb-4 uppercase tracking-widest">Programul Zilei</h2>
        <p className="text-center italic text-wedding-gold mb-16 font-heading text-xl">
          „Slăviți pe Domnul împreună cu mine, să înălțăm cu toții Numele Lui!” – Psalmul 34:3
        </p>
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="font-heading text-4xl text-wedding-gold w-32 text-center md:text-right shrink-0">
                {event.time}
              </div>
              <div className="h-px w-12 bg-wedding-blush hidden md:block" />
              <div className="text-center md:text-left">
                <h3 className="font-heading text-2xl text-wedding-charcoal uppercase tracking-wide">{event.title}</h3>
                <p className="text-wedding-charcoal/60 mt-1 text-sm md:text-base">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
