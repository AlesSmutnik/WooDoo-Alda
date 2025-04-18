// SLOZKA: components/Footer.tsx
import "../styles/Footer.css"
export default function Footer() {
  return (
    <footer className="foo-box bg-muted text-center text-sm text-secondary py-6">
      <a href="https://www.facebook.com/profile.php?id=61574919272925"><img src="/fb.png" alt="" className="w-15 h-15 fb-img"/></a>
      <a href=""></a>
      &copy; {new Date().getFullYear()} Allnat web design
    </footer>
  );
}
