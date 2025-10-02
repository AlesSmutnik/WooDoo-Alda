// SLOZKA: components/Footer.tsx
import "../styles/Footer.css";
import Link from "next/link";



export default function Footer() {
  return (
    <footer className="foo-box bg-muted text-center text-sm text-white  py-6">
      <Link href="https://www.facebook.com/profile.php?id=61574919272925" target="_blank"><img src="/fb.png" alt="" className="w-15 h-15"/></Link>
      <div className="mt-4">
        &copy; {new Date().getFullYear()} Allnat web design
      </div>
      
    </footer>
  );
}
