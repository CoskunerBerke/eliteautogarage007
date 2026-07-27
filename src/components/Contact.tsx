import { Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      title: "Telefon Numarası",
      value: "0553 971 3443",
      href: "tel:+905539713443",
      icon: Phone,
    },
    {
      title: "WhatsApp Destek",
      value: "0553 971 3443",
      href: "https://wa.me/905539713443",
      icon: MessageSquare,
      color: "text-green-500",
    },
    {
      title: "Adresimiz",
      value: "Şafak Mah., 5004. Sok., No: 110, Kepez, Antalya",
      href: "https://maps.google.com/?q=Şafak%20Mahallesi%205004.%20Sokak%20No:%20110%20Kepez%20Antalya",
      icon: MapPin,
    },
    {
      title: "Çalışma Saatleri",
      value: "Pazartesi - Cumartesi: 09:00 - 19:00\nPazar: Kapalı",
      icon: Clock,
    },
  ];

  return (
    <section id="iletisim" className="py-20 md:py-28 bg-[#0a0a0a] border-t border-border-custom relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            İletişim & Konum
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6" />
          <p className="text-gray-400 font-light leading-relaxed">
            Sorularınız, fiyat teklifleri veya randevu almak için bize ulaşabilir, haritayı takip ederek atölyemizi ziyaret edebilirsiniz.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {contactDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-[#121213] border border-border-custom p-5 rounded-lg hover:border-gold/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-gold/10 flex items-center justify-center text-gold">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {detail.title}
                      </h4>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-white hover:text-gold font-medium text-sm md:text-base transition-colors duration-200 block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm md:text-base whitespace-pre-line">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick WhatsApp Action Block */}
            <div className="bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 p-6 rounded-lg text-left">
              <h5 className="text-white font-display font-semibold text-base mb-2">
                Hızlı Randevu ve Teklif Alın
              </h5>
              <p className="text-gray-400 text-xs font-light mb-4 leading-relaxed">
                WhatsApp üzerinden aracınızın fotoğraflarını göndererek fiyat teklifi alabilir ve randevu oluşturabilirsiniz.
              </p>
              <a
                href="https://wa.me/905539713443"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white px-5 py-2.5 rounded font-semibold text-sm tracking-wide transition-colors duration-300 w-full md:w-auto"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ile Yazın</span>
              </a>
            </div>
          </div>

          {/* Right Side: Google Map */}
          <div className="lg:col-span-7 relative h-[400px] lg:h-auto rounded-lg overflow-hidden border border-border-custom shadow-xl bg-black/40">
            <iframe
              title="ELİTE Auto Garage Google Maps Konumu"
              src="https://maps.google.com/maps?q=Şafak%20Mahallesi%205004.%20Sokak%20No:%20110%20Kepez%20Antalya&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-[1.1] invert-[0.9] opacity-80"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
