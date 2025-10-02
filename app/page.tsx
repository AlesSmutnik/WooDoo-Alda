import Head from "next/head";
import Hero from "../app/components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import Cta from "../app/components/Cta";
import Onas from "../app/o-nas/page";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Montáž nábytku Pardubice | Truhlářské práce Woodoalda</title>
        <meta
          name="description"
          content="Profesionální montáž nábytku v Pardubicích – IKEA, Sconto, Asko. Truhlářské úpravy a zakázková práce od Woodoalda. Rychle, precizně, kvalitně."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="montáž nábytku Pardubice, truhlář Pardubice, montáž IKEA Pardubice, nábytkář Pardubice" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Woodoalda",
        "description": "Montáž nábytku a truhlář v Pardubicích",
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pardubice",
        "addressCountry": "CZ"
       },
        "url": "https://woodooalda.cz",
        "telephone": "+420774579768"
     })
     }} />
      </Head>      
      <main className="container-hero">
      <Hero /> 
      <Onas />
      <ServicesPreview />
      <Cta />
        <section className="relative flex flex-col items-center h-80 mt-25 border-b border-white text-center ">
          <h1 className="text-3xl font-bold text-primary text-white">Montáž nábytku a truhlář v Pardubicích</h1>
          <p className="text-white mt-6">
          Nabízím profesionální <strong>montáže nábytku v Pardubicích</strong> z obchodů jako IKEA, Sconto, Asko, Jysk a dalších.
         </p>
         <p className="text-white mt-6">
          Dále provádím <strong>truhlářské práce</strong> na míru, opravy a úpravy nábytku podle vašich požadavků.
         </p>
         <p className="text-white mt-6">
          Kvalita, spolehlivost a férový přístup. Objednejte si termín ještě dnes.
         </p>
        </section>    
      </main>
    </>
  );
}
