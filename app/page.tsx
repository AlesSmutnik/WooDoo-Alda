// SLOZKA: app/page.tsx
import Hero from "../app/components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import Cta from "../app/components/Cta";
import Onas from "../app/o-nas/page"
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Onas/>
      <ServicesPreview />
      <Cta />
    </main>
  );
}