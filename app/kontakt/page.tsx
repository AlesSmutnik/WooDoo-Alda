"use client";
import React from "react";
import "../styles/Contact.css";
import Link from "next/link";
import ContactFormul from "../components/ContactForm";



export default function ContactPage() {
return(
<main className="">
   <section className="border-b border-white flex flex-col items-center h-auto lg:h-70 text-center">
           <p className="text-2xl font-bold text-primary text-white lg:mb-10">Pokud máte zájem o naše služby, neváhejte nás kontaktovat. Rádi vám pomůžeme.</p>
         <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 mb-4 lg:gap-30"> 
           <div className="flex flex-col items-center gap-2">
               <img src="/con3.png" alt="" className="w-20"/>            
                  <p className="text-white">Volejte nebo pište na  WhatsApp</p>
                     <Link href="+420774579768" className="p-1 border border-white text-[#ffff] bg-[#757575] text-shadow-lg/30 font-bold rounded shadow hover:bg-[#489F32] hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100">+420 774 579 768</Link>
            </div>         
            <div className="flex flex-col items-center gap-2 ">
                     <img src="/con1.png" alt="" className="w-20"/>
                    <p className="lg:mt-5 text-white">Napište nám mail</p>
                   <Link href="mailto:woodooalda@gmail.com?subject=Poptávka&body=Dobrý den, rád bych..." className="p-1 border border-white text-[#ffff] bg-[#757575] text-shadow-lg/30 font-bold rounded shadow hover:bg-[#489F32] hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100 ">woodooalda@gmail.com</Link>  
            </div>                
         </div>  
   </section>   
    
       <section className="Contact">     
             <div>       
                <ContactFormul />
            </div>  
      </section>
</main>
   
)
}