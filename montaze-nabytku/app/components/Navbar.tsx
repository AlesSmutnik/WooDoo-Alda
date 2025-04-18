import "../styles/Navbar.css"
// SLOZKA: components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow py-4 px-6 flex justify-between items-center">
      <a href="/"  className="logo"><img src="/logo1.png" alt="montaze-nabytku" /></a>
      <div className="nav-img-r space-x-4">
        <a href="/sluzby" className=" text-secondary hover:text-primary"><img src="/sl2.1.png" alt="Služby" className="img-nav" /></a>
        <a href="/kontakt" className="text-secondary hover:text-primary"><img src="/con2.1.png" alt="Kontakt" className="img-nav" /></a>
      </div>
    </nav>
  );
}
