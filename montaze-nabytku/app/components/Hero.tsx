import "../styles/Hero.css"

// SLOZKA: components/Hero.tsx

export default function Hero() {
    return (
      <section className="Hero-box bg-background text-center py-20 px-4">
        <h1 className=" Hero-h1 text-4xl font-bold text-primary mb-4">
          Montáž nábytku z IKEA, Sconto, Asko
        </h1>
        <p className="Hero-des text-lg text-secondary mb-6">
          Rychle, spolehlivě a profesionálně – u vás doma nebo ve firmě.
        </p>
        <a href="/kontakt" className="hero-btn bg-primary text-black px-6 py-2 rounded shadow">
          Kontaktujte nás
        </a>
      </section>
    );
  }
  