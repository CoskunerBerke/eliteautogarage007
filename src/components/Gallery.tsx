"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/hero-car.jpg",
      alt: "Lüks Spor Otobil Seramik Kaplama Sonrası Yansıma Detayı",
      title: "Seramik Kaplama",
      ratio: "aspect-[16/9] md:col-span-2",
    },
    {
      src: "/before-after-car.jpg",
      alt: "Pasta Cila Öncesi ve Sonrası Boya Yüzeyi Karşılaştırması",
      title: "Boya Düzeltme & Koruma",
      ratio: "aspect-[4/3]",
    },
    {
      src: "/wheel-detail.jpg",
      alt: "Parlatılmış ve Kaplamış Alaşımlı Jant ve Kaliper",
      title: "Jant & Disk Temizliği",
      ratio: "aspect-square",
    },
    {
      src: "/interior-detail.jpg",
      alt: "Detaylı Temizlenmiş Alcantara ve Karbon Karavan Direksiyon ve Panel",
      title: "Detaylı İç Temizlik",
      ratio: "aspect-[4/3]",
    },
    {
      src: "/garage-bay.jpg",
      alt: "Elite Auto Garage Profesyonel Uygulama Alanı",
      title: "Detaylandırma İstasyonu",
      ratio: "aspect-[3/2] md:col-span-2",
    },
  ];

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: "next" | "prev", e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex === null) return;
    let nextIndex = direction === "next" ? activeImageIndex + 1 : activeImageIndex - 1;
    if (nextIndex >= galleryImages.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = galleryImages.length - 1;
    setActiveImageIndex(nextIndex);
  };

  return (
    <section id="galeri" className="py-20 md:py-28 bg-[#0a0a0a] border-t border-border-custom relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Sanat Galerimiz
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6" />
          <p className="text-gray-400 font-light leading-relaxed">
            Tamamladığımız uygulamalardan premium kesitler. Elite Auto Garage atölyesinden sıfır hata ile ayrılan araçların ışıltısı.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-border-custom bg-black/40 cursor-pointer ${image.ratio}`}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Maximize2 className="w-6 h-6 text-gold absolute top-6 right-6 translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300" />
                <p className="text-xs text-gold uppercase tracking-widest font-semibold mb-1">
                  ELİTE DETAY
                </p>
                <h4 className="text-lg font-display font-bold text-white tracking-tight">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[999] flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigate */}
          <button
            onClick={(e) => navigateLightbox("prev", e)}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Showcase Container */}
          <div className="relative max-w-5xl max-h-[80vh] w-full aspect-video md:aspect-auto md:h-[75vh] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Right Navigate */}
          <button
            onClick={(e) => navigateLightbox("next", e)}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Captions */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white max-w-lg px-4">
            <h5 className="font-display font-semibold text-lg text-gold mb-1">
              {galleryImages[activeImageIndex].title}
            </h5>
            <p className="text-xs text-gray-400 font-light">
              {galleryImages[activeImageIndex].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
