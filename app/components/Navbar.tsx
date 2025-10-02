import "../styles/Navbar.css";
import Link from "next/link";
// SLOZKA: components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="nav-box  bg-[#0D0D0C]/70">
      <Link href="/"  className="logo"><img src="/logo-w1-w.png" alt="montaze-nabytku" /></Link>
      <div className="nav-links ">
        <Link href="/sluzby"><h2 className="nav-h2">Služby</h2></Link>
        <Link href="/kontakt"><h2 className="nav-h2 nav-con">Kontakt</h2></Link>
      </div>
    </nav>
  );
}
