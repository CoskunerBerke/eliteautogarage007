import Image from "next/image";
import { Check } from "lucide-react";

export default function About() {
  const points = [
    "Nano Teknoloji Seramik Kaplama ve Boya Koruma",
    "Gelişmiş Pasta Cila ve Boya Kusur Düzeltme",
    "Profesyonel Anti-Bakteriyel Detaylı İç Temizlik",
    "Güvenilir Express Yağ Değişimi ve Periyodik Filtre Bakımları",
    "Antalya İklimine Dayanıklı Yüksek Standartlı Ürünler",
  ];

  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-[#070708] border-t border-border-custom relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images Grid */}
          <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-12 gap-4">
            {/* Large Main Image */}
            <div className="col-span-8 relative aspect-[4/3] rounded-lg overflow-hidden border border-border-custom shadow-xl">
              <Image
                src="/garage-bay.jpg"
                alt="Elite Auto Garage Uygulama Alanı"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
            
            {/* Small Side Image */}
            <div className="col-span-4 relative aspect-square rounded-lg overflow-hidden border border-border-custom shadow-xl mt-8">
              <Image
                src="/interior-detail.jpg"
                alt="Elite Auto Garage İç Detay Uygulaması"
                fill
                sizes="(max-width: 768px) 50vw, 15vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Copy Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 text-gold text-xs font-semibold tracking-wider uppercase">
              <span>BİZ KİMİZ?</span>
            </div>
            
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Otomobiliniz İçin Premium <br />
              <span className="text-gold">Bakım Standartları</span>
            </h2>
            
            <p className="text-gray-400 font-light leading-relaxed">
              Antalya Kepez'de yer alan **ELİTE Auto Garage**, otomobilinizi korumak ve ona ilk günkü estetiğini kazandırmak amacıyla kurulmuş profesyonel bir detailing ve bakım merkezidir. İşimize olan tutkumuzu, en yüksek standartlardaki işçilikle birleştiriyoruz.
            </p>
            
            <p className="text-gray-400 font-light leading-relaxed">
              Aracınıza uygulanan her işlemde dünya standartlarında onaylanmış markaları ve en ileri teknolojik ekipmanları tercih ediyoruz. Amacımız sadece geçici bir parlaklık değil, otomobilinizin değerini ve yüzey kalitesini uzun yıllar koruyacak kalıcı çözümler üretmektir.
            </p>

            {/* Bullets */}
            <div className="space-y-3 pt-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-gray-300 font-light text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
