// SLOZKA: components/Footer.tsx
import "../styles/Footer.css"
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
  return (
    <footer className="foo-box bg-muted text-center text-sm text-secondary py-6">
      <Link href="https://www.facebook.com/profile.php?id=61574919272925"><Image src="/fb.png" alt="" className="w-15 h-15 fb-img" width={100} height={50} /></Link>
      
      &copy; {new Date().getFullYear()} Allnat web design
    </footer>
  );
}
