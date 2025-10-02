"use client";
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import '../styles/PoptavkaOdeslana.css';

export default function PoptavkaOdeslana() {
  const router = useRouter();
  const logoRef = useRef<HTMLImageElement>(null);

  const handleLogoClick = () => {
    if (logoRef.current) {
      logoRef.current.classList.add('rotate');
      setTimeout(() => {
        router.push('/');
      }, 1000); // stejný čas jako animace v CSS
    }
  };

  return (
    <div className="success-screen">
      <img
        ref={logoRef}
        src="/logo1.png"
        alt="LogoWooDooAlda"
        className="logo-img-sec"
        onClick={handleLogoClick}
      />
      <h1 className="success-title">Poptávka odeslána</h1>
      <p className="success-note">Klikněte na logo pro návrat na úvodní stránku.</p>
    </div>
  );
}