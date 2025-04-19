import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}