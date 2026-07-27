"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070708] border-t border-border-custom py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-lg tracking-wider text-white">
              ELİTE
            </span>
            <span className="font-display font-semibold text-[10px] tracking-[0.25em] text-gold -mt-1">
              AUTO GARAGE
            </span>
            <p className="text-gray-500 text-xs mt-2 font-light max-w-xs">
              Antalya'nın seçkin otomobil detailing, koruma ve bakım merkezi.
            </p>
          </div>

          {/* Social and Links */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/eliteautogarage007/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors duration-200 p-2 bg-white/5 hover:bg-white/10 rounded-full"
                aria-label="Instagram'da Takip Et"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-500 text-xs font-light">
              Takip edin, en güncel uygulamalarımızı kaçırmayın.
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-gold tracking-wider uppercase transition-colors duration-200"
            aria-label="Yukarı Çık"
          >
            <span>YUKARI DÖN</span>
            <div className="w-8 h-8 rounded-full border border-border-custom flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>

        </div>

        {/* Bottom copy */}
        <div className="mt-12 pt-8 border-t border-border-custom/50 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <p className="text-gray-600 text-xs font-light">
            &copy; {currentYear} ELİTE Auto Garage. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-gray-600 text-xs font-light">
            <span>Antalya / Kepez</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-custom self-center" />
            <a href="tel:+905539713443" className="hover:text-gray-400 transition-colors">0553 971 3443</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
