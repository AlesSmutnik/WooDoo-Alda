import "../styles/Cta.css"
import Link from "next/link";


export default function Cta() {
    return (
      <section className="cta-box py-12 bg-primary text-red text-center">
        <h2 className="cta-h2 text-2xl font-semibold mb-4">Potřebujete pomoc s montáží?</h2>
        <Link href="/kontakt" className="cta-btn"><img src="/con3.png" alt="Kontakt" className="img-cta"/>
         Spojte se s námi
        </Link>
      </section>
    );
  }