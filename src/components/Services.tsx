import { Shield, Sparkles, Droplet, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Seramik Kaplama",
      description: "Nano-teknolojik koruma katmanı ile aracınızın boyasını çizilmelere, UV ışınlarına ve asit yağmurlarına karşı korur. Sıra dışı su kaydırıcılık (boncuklanma) ve uzun yıllar süren ayna parlaklığı sağlar.",
      icon: Shield,
    },
    {
      title: "Pasta Cila & Boya Düzeltme",
      description: "Yüzeydeki kılcal çizikleri, hareleri ve oksidasyonu profesyonel polisaj ekipmanları ve birinci sınıf pastalarla gidererek boyanın derinliğini ve orijinal parlaklığını ortaya çıkarıyoruz.",
      icon: Sparkles,
    },
    {
      title: "Detaylı İç & Dış Temizlik",
      description: "Aracınızın tavanından tabanına kadar tüm yüzeylerini anti-bakteriyel kimyasallarla dezenfekte ediyor, deri koltukları besliyor ve plastik aksamları yeniliyoruz. Kusursuz hijyen.",
      icon: Droplet,
    },
    {
      title: "Express Yağ Değişimi & Bakım",
      description: "Premium marka motor yağları ve orijinal filtreler ile motorunuzun ömrünü uzatıyoruz. Hızlı, şeffaf ve güvenilir periyodik bakım hizmeti.",
      icon: Wrench,
    },
  ];

  return (
    <section id="hizmetlerimiz" className="py-20 md:py-28 bg-[#070708] border-t border-border-custom relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.01] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            Seçkin Hizmetlerimiz
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6" />
          <p className="text-gray-400 font-light leading-relaxed">
            Aracınızın hak ettiği özeni ve korumayı sağlamak için tasarlanmış profesyonel detailing ve bakım paketlerimiz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#121213] border border-border-custom hover:border-gold/30 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Micro Border/Background highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl" />
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm font-light">
            Aracınıza özel fiyat teklifi almak veya randevu oluşturmak için bizimle iletişime geçebilirsiniz.
          </p>
          <a
            href="https://wa.me/905539713443"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-gold hover:text-white font-medium text-sm border-b border-gold/50 hover:border-white transition-colors pb-1"
          >
            WhatsApp ile Hızlı Teklif Al
          </a>
        </div>

      </div>
    </section>
  );
}
