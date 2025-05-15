import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-[#FFF9F2] to-white">
        {/* Hero Section */}
        <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-[#2D2A32] leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B89F7B] to-[#9B8574]">
                Bantu UMKM Go Digital
              </span>
                <br />
                <span className="text-4xl md:text-5xl font-medium text-[#4A453E]">
                Lewat Solusi Digital yang
                <span className="block mt-2">Efektif & Terjangkau</span>
              </span>
              </h1>

              <p className="text-lg text-[#6D6875]/90 leading-relaxed">
                Transformasi bisnis Anda dengan website profesional dan manajemen media sosial
                yang dikelola oleh tim ahli kami. Mulai dari konsep hingga eksekusi - kami
                yang urus!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                    href="/portfolio"
                    className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[#FFF9F2] transition duration-300 ease-out rounded-full shadow-lg group"
                    style={{background: 'linear-gradient(45deg, #B89F7B 0%, #9B8574 100%)'}}
                >
                  <span className="relative">✨ Lihat Projek Kami</span>
                </Link>

                <Link
                    href="https://wa.me/6289526323412"
                    target="_blank"
                    className="flex items-center px-8 py-4 font-medium text-[#6D6875] hover:text-[#B89F7B] transition-colors duration-300 group"
                >
                  <span className="mr-2">💬</span>
                  <span className="border-b-2 border-transparent group-hover:border-[#B89F7B] pb-1 transition-all">
                  Konsultasi Gratis
                </span>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[1.1] rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                    src="/12.png"
                    alt="Digital Solution Illustration"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Go Digital Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2D2A32] mb-4">
                Mengapa Harus Digital?
              </h2>
              <p className="text-lg text-[#6D6875]/90 max-w-2xl mx-auto">
                Transformasi digital bukan sekedar tren, tapi kebutuhan bisnis di era modern
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {icon: '🌐', title: 'Jangkauan Luas', desc: 'Buka pasar baru hingga mancanegara'},
                {icon: '💸', title: 'Hemat Biaya', desc: 'Promosi digital lebih efisien'},
                {icon: '⏱️', title: '24/7', desc: 'Bisnis aktif tanpa henti'},
                {icon: '📊', title: 'Data Akurat', desc: 'Analitik real-time'},
              ].map((item, i) => (
                  <div
                      key={i}
                      className="p-8 rounded-2xl bg-white hover:bg-[#FFF9F2] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-[#4A453E] mb-3">{item.title}</h3>
                    <p className="text-[#6D6875]/90">{item.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#4A453E] pattern-isometric pattern-opacity-10 pattern-size-32 pattern-gray-800" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-[#4A453E] mb-6">
                Siap Transformasi Bisnis Anda?
              </h2>
              <p className="text-lg text-[#6D6875]/90 mb-8 max-w-xl mx-auto">
                Jadwalkan konsultasi gratis sekarang dan dapatkan roadmap digitalisasi khusus untuk UMKM Anda
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link
                    href="https://wa.me/6289526323412"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#B89F7B] hover:bg-[#9B8574] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  📞 Hubungi via WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}