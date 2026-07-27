"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Hizmetlerimiz", href: "#hizmetlerimiz" },
    { name: "Öncesi / Sonrası", href: "#oncesi-sonrasi" },
    { name: "Galeri", href: "#galeri" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border-custom py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-wider text-white">
              ELİTE
            </span>
            <span className="font-display font-semibold text-xs tracking-[0.25em] text-gold -mt-1">
              AUTO GARAGE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/905539713443"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-transparent border border-gold hover:bg-gold hover:text-black text-gold px-4 py-2 rounded text-sm font-medium tracking-wide transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Randevu Al</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Menüyü Aç"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] bg-background/95 backdrop-blur-lg z-45 flex flex-col px-4 pt-8 pb-6 space-y-6 border-t border-border-custom animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-gold transition-colors py-2 border-b border-border-custom/50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/905539713443"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-black py-3 rounded font-medium transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp Randevu</span>
          </a>
        </div>
      )}
    </header>
  );
}
