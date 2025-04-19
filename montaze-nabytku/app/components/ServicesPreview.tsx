// SLOZKA: components/ServicesPreview.tsx

import "../styles/ServicesPreview.css";

export default function ServicesPreview() {
    return (
      <section className="Pr-box py-16 px-4 bg-muted">
        <h2 className="Pr-h2 text-3xl font-semibold text-center mb-10">WooDoo Alda</h2>
        <p className="logo-sluzby">.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="box-ser p-4 bg-white shadow rounded">
            <div className="backLogo">
              <img src="/mont1.png" alt="montaz nabytku" className="Infopng"/>
            </div>            
            <h3 className="text-ser text-xl font-bold mb-2">Montáž nábytku</h3>
            <p>Postavíme vše od postele až po vestavěné skříně.</p>
          </div>
          
          <div className="box-ser p-4 bg-white shadow rounded">
            <div className="backLogo">
               <img src="/mont3.png" alt="instalace elektro" className="Infopng"/>
            </div>            
            <h3 className="text-ser text-xl font-bold mb-2">Instalace elektroniky</h3>
            <p>Zapojení osvětlení, elektro zásuvek a dalšího příslušenství.</p>
          </div>

          <div className="box-ser p-4 bg-white shadow rounded">
            <div className="backLogo">
              <img src="/mont2.png" alt="doprava" className="Infopng"/>
            </div>            
            <h3 className="text-ser text-xl font-bold mb-2">Dovoz a odvoz nábytku</h3>
            <p>Přivezeme vámi zakoupený nábytek a odvezeme starý.</p>
          </div>

        </div>
      </section>
    );
  }
  