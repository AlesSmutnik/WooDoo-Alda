"use client";
// This component is a contact form that allows users to submit their information
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ContactFormProps {
    defaultMessage?: string; // Volitelný prop pro výchozí zprávu
}

const ContactForm: React.FC<ContactFormProps> = ({ defaultMessage }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: defaultMessage || '', // Inicializace zprávy
    });
    const [status, setStatus] = useState<string>('');

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('https://formspree.io/f/xrbqjdwz', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
       if (res.ok) {
            router.push('/poptavka-odeslana');
        } else {
            setStatus('Nastala chyba při odesílání e-mailu.');
        }
    };

    return (
          <form onSubmit={handleSubmit} className="text-white border-b border-white flex flex-col  items-center h-auto gap-5 text-center">
        <section>
             <div className="flex flex-co items-center h-auto gap-5  text-center">
                    <img src="/logo1.png" alt="LogoWooDooAlda" className='w-80'/>
             </div>
              <article className='flex flex-col items-center gap-5 '>
                <div className='flex flex-col items-center gap-2'>
                <label htmlFor="name">Jméno:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='bg-[#A0A0A0] text-black mx-5 w-45 rounded  hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100 '
                />
                </div>
               
           
               <div className='flex flex-col items-center gap-2'>
                <label htmlFor="email" className='mr-2'>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='bg-[#A0A0A0] text-black mx-5 w-45 rounded  hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100 '
                />
                </div>
                <div className='flex flex-col items-center gap-2'>
                <label htmlFor="message">Zpráva:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='bg-[#A0A0A0] h-35 text-black mx-5 w-80 rounded  hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100 '
                />
                </div>
              </article>
               
           
         </section>

            <button type="submit" className='p-1 border border-white text-[#ffff] bg-[#757575] text-shadow-lg/30 font-bold rounded shadow hover:bg-[#489F32] hover:text-[#0D0D0C] opacity-75 hover:scale-105 transition-all duration-300 ease-in-out hover:opacity-100 mb-10'>Odeslat poptávku</button>
            {status && <div>{status}</div>}

    </form>
    );
};

export default ContactForm;