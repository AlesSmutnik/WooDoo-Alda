import React from "react";
import ServiceCarousel from "./ServiceCarousel";
import CalculatorPage from "../calculator/page";  

const Sluzby: React.FC =  () => {
    return(
      <main>
      <ServiceCarousel />
      <CalculatorPage />
    </main>
  );
    
};

export default Sluzby;