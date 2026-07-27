"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="oncesi-sonrasi" className="py-20 md:py-28 bg-[#0a0a0a] border-t border-border-custom relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Kusursuz Dönüşüm
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6" />
          <p className="text-gray-400 font-light leading-relaxed">
            Pasta cila ve boya düzeltme işlemlerimizdeki farkı görün. Sürgüyü sağa sola kaydırarak boya yüzeyindeki çiziklerin nasıl giderildiğini ve derin ayna parlaklığını inceleyebilirsiniz.
          </p>
        </div>

        {/* Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-xl overflow-hidden border border-border-custom shadow-2xl select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* Before Pane (Left Side - Swirly paint) */}
            <div className="absolute inset-0 w-full h-full">
              {/* We show the left half of before-after-car.jpg scaled to 100% width */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-[200%] h-full">
                  <Image
                    src="/before-after-car.jpg"
                    alt="Boya Düzeltme Öncesi (Çizikli Yüzey)"
                    fill
                    sizes="100vw"
                    className="object-cover object-left"
                    priority
                  />
                </div>
              </div>
              {/* Badge */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-gray-300 tracking-wider uppercase border border-white/10">
                Öncesi (Çizikli ve Solgun)
              </div>
            </div>

            {/* After Pane (Right Side - Polished paint) */}
            <div
              className="absolute inset-0 h-full overflow-hidden transition-all duration-75"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* We show the right half of before-after-car.jpg scaled to 100% width, positioned correctly */}
              <div className="absolute top-0 left-0 w-[200%] h-full" style={{ width: containerRef.current?.getBoundingClientRect().width ? containerRef.current.getBoundingClientRect().width * 2 : '200%' }}>
                <Image
                  src="/before-after-car.jpg"
                  alt="Boya Düzeltme Sonrası (Cam Parlaklığı)"
                  fill
                  sizes="100vw"
                  className="object-cover object-right"
                  priority
                />
              </div>
              {/* Badge */}
              <div className="absolute bottom-4 right-4 bg-gold/90 text-black px-3 py-1 rounded text-xs font-bold tracking-wider uppercase shadow-lg">
                Sonrası (Elite Seramik Kaplama)
              </div>
            </div>

            {/* Drag Handle Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gold cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black border-2 border-gold rounded-full flex items-center justify-center shadow-2xl text-gold">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
