import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#070708]">
      {/* Background gradients for subtle depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 border border-gold/20 bg-gold/5 px-3 py-1 rounded-full text-gold text-xs font-semibold tracking-wide w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span>ANTALYA'NIN SEÇKİN DETAYLANDIRMA MERKEZİ</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Aracınız İçin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">
                Kusursuz Dokunuş
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-lg leading-relaxed font-light">
              Profesyonel seramik kaplama, detaylı temizlik ve periyodik oto bakım hizmetleriyle aracınızı ilk günkü parlaklığına ve temizliğine kavuşturuyoruz. Elite standartlarda işçilik, birinci sınıf malzeme kalitesi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#hizmetlerimiz"
                className="group flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-black px-6 py-3.5 rounded font-semibold text-sm tracking-wide transition-all duration-300"
              >
                <span>Hizmetleri İncele</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/905539713443"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:border-white/50 text-white px-6 py-3.5 rounded font-semibold text-sm tracking-wide transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>İletişime Geç</span>
              </a>
            </div>

            {/* Micro details / Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-custom max-w-md">
              <div>
                <p className="font-display font-bold text-xl text-white">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Müşteri Memnuniyeti</p>
              </div>
              <div>
                <p className="font-display font-bold text-xl text-white">Premium</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Ürün Kalitesi</p>
              </div>
              <div>
                <p className="font-display font-bold text-xl text-white">Uzman</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Detaylandırma</p>
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Geometric borders/frame behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent rounded-lg blur-2xl -z-10 transform scale-95" />
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-lg overflow-hidden border border-border-custom bg-black/50 shadow-2xl">
              <Image
                src="/hero-car.jpg"
                alt="Elite Auto Garage Premium Ceramic Coated Luxury Car"
                fill
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
