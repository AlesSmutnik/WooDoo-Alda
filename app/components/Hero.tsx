import "../styles/Hero.css"
import Link from "next/link";

// SLOZKA: components/Hero.tsx

export default function Hero() {
    return (
      <section className="Hero-box relative flex flex-col items-center h-80 border-b border-white text-center ">
        <h1 className="text-3xl font-bold text-primary text-white">
          Montáž nábytku z IKEA, Sconto, Asko
        </h1>
        <p className="Hero-des absolute flex top-28 justify-center text-lg text-secondary text-white ">
          Rychle, spolehlivě a profesionálně – u vás doma nebo ve firmě.
        </p>
        <div className="gap-8 absolute flex justify-center items-center top-48">
           <Link href="/kontakt" className="p-1 border border-white text-[#ffff] bg-[#757575] text-shadow-lg/30 font-bold rounded shadow hover:bg-[#489F32] hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100">
          Kontaktujte nás
        </Link>
        <Link href="/calculator" className="p-1 border border-white text-[#ffff] bg-[#757575] text-shadow-lg/30 font-bold rounded shadow hover:bg-[#489F32] hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100">
          Spočítejte si cenu
        </Link>
        </div>
       
      </section>
    );
  }
  