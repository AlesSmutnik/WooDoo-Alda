// app/head.tsx
export default function Head() {
    return (
      <>
        <title>Woodoo Alda | Montáže nábytku v Pardubicích</title>
        <meta name="description" content="Profesionální montáže nábytku z IKEA, Sconto a dalších obchodů. Rychlé a kvalitní služby v Pardubicích a okolí." />
        <meta name="keywords" content="montáž nábytku, IKEA, Sconto, Asko, Pardubice, truhlář, nábytek" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
  
        {/* Open Graph pro sdílení na Facebooku */}
        <meta property="og:title" content="Woodoo Alda | Montáže nábytku" />
        <meta property="og:description" content="Specialista na montáže nábytku z IKEA, Sconto a dalších. Férové ceny a kvalitní služby." />
        <meta property="og:image" content="https://woodooalda.cz/og-image.jpg" />
        <meta property="og:url" content="https://woodooalda.cz" />
        <meta property="og:type" content="website" />
  
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Woodoo Alda | Montáže nábytku" />
        <meta name="twitter:description" content="Profesionální montáže nábytku z IKEA, Sconto a dalších." />
        <meta name="twitter:image" content="https://woodooalda.cz/og-image.jpg" />
  
        {/* Favicon / logo */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </>
    );
  }
  