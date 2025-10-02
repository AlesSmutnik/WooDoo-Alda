"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/ServiceCarousel.module.scss";

type ServicePackage = {
    id: number;
    title: string;
    description: string;
    features: string[];
    price: string;
  };
  
  const priceList: ServicePackage[] = [
    {
        id: 1,
        title: "Menší kusy nábytku",
        description: "Jednoduchý nábytek, který nezabere moc času ani prostoru.",
        features: ["Noční stolky, židle, malé police, konferenční stolky"],
        price: "300–500 Kč / ks",
      },
      {
        id: 2,
        title: "Středně velké kusy",
        description: "Běžný bytový nábytek, který vyžaduje pečlivou montáž.",
        features: ["Komody, skříně, psací stoly, botníky"],
        price: "600–1200 Kč / ks",
      },
      {
        id: 3,
        title: "Velký nábytek",
        description: "Náročnější montáže více dílů a rozměrnějších sestav.",
        features: ["Velké šatní skříně, rohové skříně, více dílů"],
        price: "1500–2500 Kč / ks",
      },
      {
        id: 4,
        title: "Postele",
        description: "Montáž lůžek včetně rámu, roštů a úložného prostoru.",
        features: ["Dětské, jednolůžka i manželské postele včetně roštů"],
        price: "1000–1600 Kč / ks",
      },
      {
        id: 5,
        title: "Kuchyňská linka",
        description:
          "Kompletní montáž kuchyní z marketů včetně zavěšení a přesného osazení.",
        features: [
          "Kuchyňské sestavy z marketů, montáž skříněk, úchytek, pracovní desky",
        ],
        price: "3000–8000 Kč / zakázka",
      },
      {
        id: 6,
        title: "Hodinová sazba",
        description:
          "Pro speciální úpravy, kotvení na stěny nebo jiné práce mimo standardní montáž.",
        features: [
          "Úpravy na míru, montáž na stěnu, přidání doplňků, elektrospotřebiče",
        ],
        price: "450–700 Kč / hod",
      },
      {
        id: 7,
        title: "Výjezd mimo Pardubice",
        description:
          "Cestovné pro zakázky mimo město. Po Pardubicích výjezd zdarma.",
        features: ["Doprava na místo montáže mimo město"],
        price: "10 km – 99 Kč, dále 9 Kč/km",
      },
      {
        id: 8,
        title: "Dovoz nábytku",
        description:
          "Dovezeme vámi zakoupený nábytek až k vám domů a vyneseme, kam bude potřeba.",
        features: ["Dovoz zakoupeného nábytku včetně výnosu a manipulace"],
        price: "Pardubice od 350 Kč",
      },
    // ...ostatní položky
  ];


const ServiceCarousel: React.FC = () => {
  return (
    <div className="text-white">

      <div className="relative flex flex-col items-center h-40 border-b border-white text-center mb-10">
        <h2 className="text-3xl font-bold text-primary text-white mb-10">Ceník služeb</h2>
        <p>
          Vyberte si přesně ten, který nejlépe odpovídá Vašim potřebám.
        </p>
        <p>Spočítejte si orientační cenu</p>
      </div>

       <div  className="relative mb-20 flex justify-center items-center h-80">
      <div className="">
        <button className="swiper-button-prev border border-[#fff] bg-[#606060] rounded-md p-5 hover:bg-white"  />
        <button className="swiper-button-next border border-[#fff] bg-[#606060] rounded-md p-5 hover:bg-white" />
      </div>

      <Swiper
        spaceBetween={98}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}

        className="lg:h-60 lg:w-full lg:h-auto lg:max-w-xl top-10"
      >
        {priceList.map((pkg) => (
          <SwiperSlide key={pkg.id} className="flex flex-row inetms-center text-center items-center p-15 mb-10 bg-[#606060]/80 rounded-lg shadow-lg ">
            <h3 className="text-[#7cec10] mb-4 text-xl font-bold text-shadow-lg/30">{pkg.title}</h3>
            <p className="">{pkg.description}</p>
            <ul className="">
              {pkg.features.map((feature, index) => (
                <li key={index} className="">
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-5">💰 {pkg.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default ServiceCarousel;
