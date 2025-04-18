import "../styles/Navbar.css"
import Image from "next/image";
import Link from "next/link";
// SLOZKA: components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow py-4 px-6 flex justify-between items-center">
      <Link href="/"  className="logo"><Image src="/logo1.png" alt="montaze-nabytku" width={100} height={100} /></Link>
      <div className="nav-img-r space-x-4">
        <Link href="/sluzby" className=" text-secondary hover:text-primary"><Image src="/sl2.1.png" alt="Služby" className="img-nav" width={100} height={50} /></Link>
        <Link href="/kontakt" className="text-secondary hover:text-primary"><Image src="/con2.1.png" alt="Kontakt" className="img-nav" width={100} height={50} /></Link>
      </div>
    </nav>
  );
}
