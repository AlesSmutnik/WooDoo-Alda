import "../styles/Cta.css"
import Link from "next/link";


export default function Cta() {
    return (
      <section className="flex flex-col items-center justify-center py-10 mt-10 bg-primary text-red text-center">
        <h2 className="cta-h2 text-2xl  text-white font-semibold mb-4">Potřebujete pomoc s montáží?</h2>
        <div className=" p-1 border border-white text-[#ffff] bg-[#757575] text-shadow-lg/30 font-bold rounded shadow hover:bg-[#489F32] hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100 flex justify-center items-center mx-auto w-40">
           <Link href="/kontakt" className=" text-white">
         Spojte se s námi
        </Link>
        </div>
       
      </section>
    );
  }