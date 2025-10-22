import Image from 'next/image'

const skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React.js/Next.js', level: 88 },
  { name: 'PHP/Laravel', level: 85 },
  { name: 'WordPress', level: 87 },
  { name: 'Git & Version Control', level: 92 },
  { name: 'SQL/Database', level: 83 },
  { name: 'Responsive Design', level: 90 },
  { name: 'SEO Optimization', level: 80 },
  { name: 'UI/UX Design', level: 78 },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Ghib.png"
                alt="Muhammad Kelvin - Freelance Web Developer"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">
              Tentang Saya
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Halo, saya <strong className="text-emerald-700">Muhammad Kelvin</strong> — Freelance Web Developer di <strong>Bisa Go Digital</strong>. 
              Saya membantu UMKM dan bisnis lokal membangun website profesional yang cepat, modern, dan mudah dikelola.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Saya percaya setiap bisnis, sekecil apapun, berhak tampil kredibel secara online. 
              Website bukan sekadar tampilan — tapi fondasi digital untuk tumbuh dan dikenal pelanggan baru.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan pendekatan personal, saya memastikan setiap project dikembangkan sesuai kebutuhan Anda, bukan template massal. 
              Saya bekerja langsung dengan klien agar hasilnya efisien, clean, dan siap scaling.
            </p>

            <div className="pt-4">
              <p className="text-lg font-semibold text-emerald-700 mb-3">
                Prinsip Kerja Saya:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><span className="text-emerald-600">✓</span> <strong>Transparansi</strong> — Harga jelas, timeline realistis, tanpa biaya tersembunyi.</p>
                <p><span className="text-emerald-600">✓</span> <strong>Responsif</strong> — Komunikasi langsung via WhatsApp, update rutin.</p>
                <p><span className="text-emerald-600">✓</span> <strong>Kualitas Kode</strong> — Clean code, aman, dan mudah dikembangkan.</p>
                <p><span className="text-emerald-600">✓</span> <strong>Fokus pada Hasil</strong> — Design yang cepat, mobile-first, dan SEO-friendly.</p>
                <p><span className="text-emerald-600">✓</span> <strong>Support Pasca-Project</strong> — Bantuan 30 hari dan dokumentasi lengkap.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Freelancer Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emerald-700 text-center mb-12">
            Kenapa Memilih Freelancer?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Langsung dengan yang Mengerjakan',
                desc: 'Tanpa perantara sales atau manajer. Anda berkomunikasi langsung dengan saya yang membangun website dari awal sampai online.',
              },
              {
                title: 'Harga Lebih Efisien',
                desc: 'Tanpa biaya operasional besar seperti agency. Hasil tetap profesional, harga tetap masuk akal untuk UMKM.',
              },
              {
                title: 'Komunikasi Cepat & Fleksibel',
                desc: 'Respon cepat via WhatsApp. Revisi dan feedback ditangani langsung tanpa birokrasi panjang.',
              },
              {
                title: 'Kualitas di Atas Kuantitas',
                desc: 'Saya hanya mengambil project yang bisa saya tangani secara maksimal — setiap website dikerjakan dengan detail.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emerald-700 text-center mb-4">
            Tech Stack & Keahlian
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Tools dan teknologi yang saya gunakan untuk membangun website yang cepat, aman, dan mudah dikembangkan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-800 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 text-sm">
              <strong>Tools tambahan:</strong> Figma, Adobe XD, GitHub, Google Analytics, Notion, VS Code
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-emerald-700 mb-6">
            Siap Go Digital Sekarang?
          </h2>
          <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Ayo diskusi santai dulu tentang kebutuhan website kamu. Konsultasi gratis — tanpa tekanan, tanpa komitmen.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=6289526323412&text=Halo%20Kelvin,%20saya%20tertarik%20untuk%20konsultasi%20tentang%20pembuatan%20website.%20Boleh%20diskusi%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-md hover:bg-emerald-700 transition text-lg font-medium"
          >
            💬 Chat via WhatsApp
          </a>
          <p className="mt-4 text-sm text-gray-600">
            Response time: &lt; 2 jam 
          </p>
        </div>
      </section>
    </div>
  );
}
