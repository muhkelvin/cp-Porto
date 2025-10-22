import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        {/* Hero Section */}
        <section className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8 relative z-10">
              <div className="inline-block mb-4">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  👋 Freelance Web Developer
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-emerald-900 leading-tight">
                <span className="text-4xl md:text-5xl font-medium text-emerald-800 block mb-2">
                  Halo, Saya Kelvin
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-500">
                  Saya Bantu Bisnis Anda Hadir Profesional
                </span>
                <br />
                <span className="text-3xl md:text-4xl font-medium text-emerald-800 mt-2 block">
                  di Dunia Digital
                </span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                Freelance Web Developer yang fokus membangun website fungsional, modern, dan terjangkau untuk UMKM & bisnis lokal. 
                <span className="block mt-2 font-medium text-gray-700">
                  Deal langsung dengan saya - dari konsultasi hingga website jadi.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                    href="https://wa.me/6289526323412?text=Halo%20Kelvin,%20saya%20tertarik%20konsultasi%20tentang%20pembuatan%20website.%20Boleh%20diskusi%3F"
                    target="_blank"
                    className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-lg group bg-gradient-to-r from-emerald-600 to-emerald-500"
                >
                  <span className="relative">💬 Konsultasi Gratis</span>
                </Link>

                <Link
                    href="/portfolio"
                    className="flex items-center justify-center px-8 py-4 font-medium text-emerald-700 hover:text-emerald-600 transition-colors duration-300 group border-2 border-emerald-200 rounded-full hover:border-emerald-500"
                >
                  <span className="mr-2">✨</span>
                  <span>Lihat Portfolio</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Response &lt; 2 jam</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Harga Transparan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Free Support 30 Hari</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[1.1] rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                    src="/12.png"
                    alt="Web Developer Illustration"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Freelancer Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emerald-800 mb-4">
                Kenapa Pilih Freelancer?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Berbeda dengan agency besar - Anda dapat perhatian penuh dan harga yang lebih fair
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🤝', title: 'Deal Langsung', desc: 'Chat langsung dengan yang ngerjain, tanpa middleman' },
                { icon: '💰', title: 'Harga Terjangkau', desc: 'No markup agency, harga lebih fair untuk UMKM' },
                { icon: '⚡', title: 'Komunikasi Cepat', desc: 'Response via WhatsApp, revisi langsung ditangani' },
                { icon: '🎯', title: 'Quality Focus', desc: 'Fokus pada kualitas, bukan kuantitas project' },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-emerald-100">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I Offer Section */}
        <section className="py-24 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emerald-800 mb-4">
                Apa yang Saya Tawarkan?
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Website profesional yang tidak hanya bagus dilihat, tapi juga efektif untuk bisnis Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '🎯', title: 'Landing Page', desc: 'Website satu halaman untuk promosi produk/jasa dengan konversi tinggi' },
                { icon: '🏢', title: 'Company Profile', desc: 'Website lengkap untuk profil perusahaan dengan portfolio & layanan' },
                { icon: '🛒', title: 'Katalog Produk', desc: 'Toko online atau katalog digital dengan sistem manajemen produk' },
                { icon: '📝', title: 'Website + Blog', desc: 'Website dengan fitur blog untuk content marketing dan SEO' },
                { icon: '⚙️', title: 'Custom Web App', desc: 'Solusi web khusus sesuai kebutuhan bisnis spesifik Anda' },
                { icon: '🔧', title: 'Maintenance', desc: 'Update rutin, backup, dan technical support untuk website Anda' },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white transition-all duration-300 shadow-md hover:shadow-xl border border-emerald-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-emerald-800 mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4 min-h-[60px]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                Lihat Detail Layanan & Harga
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-emerald-800 mb-4">
                Yang Pasti Anda Dapatkan
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Fitur standar di setiap project website yang saya kerjakan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                '📱 Mobile Responsive',
                '⚡ Fast Loading',
                '🔍 SEO Friendly',
                '🔒 SSL Certificate',
                '💬 WhatsApp Integration',
                '📊 Google Analytics',
                '🎨 Custom Design',
                '📧 Contact Form',
                '🎓 Tutorial Lengkap'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <span className="text-emerald-600 text-xl">✓</span>
                  <span className="text-emerald-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden bg-emerald-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
                Siap Bawa Bisnis Anda Go Digital?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
                Jadwalkan konsultasi gratis sekarang. Kita diskusikan kebutuhan Anda tanpa komitmen - just a friendly chat about your goals.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link
                    href="https://wa.me/6289526323412?text=Halo%20Kelvin,%20saya%20tertarik%20konsultasi%20tentang%20pembuatan%20website.%20Boleh%20diskusi%3F"
                    target="_blank"
                    className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                >
                  💬 Chat WhatsApp Sekarang
                </Link>
                <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-200 hover:border-emerald-500 rounded-full transition-all duration-300 font-medium"
                >
                  Lihat Paket & Harga
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                <span className="font-medium">No pressure, no commitment</span> - Konsultasi pertama gratis
              </p>
            </div>
          </div>
        </section>
      </div>
  )
}
