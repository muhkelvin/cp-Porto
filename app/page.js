// app/page.jsx
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern online shopping platform with React & Node.js",
    tech: ["React", "Next.js", "Tailwind"],
    link: "#",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS product",
    tech: ["TypeScript", "Chart.js", "Firebase"],
    link: "#",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    title: "Portfolio Website",
    description: "Artist portfolio with CMS integration",
    tech: ["WordPress", "PHP", "GSAP"],
    link: "#",
    image: "https://picsum.photos/600/400?random=3"
  }
]

const testimonials = [
  {
    name: "John Doe",
    role: "CEO Startup Tech",
    text: "Hasil kerja yang luar biasa, komunikasi jelas dan tepat waktu.",
    avatar: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    text: "Mengubah visi kami menjadi website yang benar-benar hidup.",
    avatar: "https://i.pravatar.cc/100?img=2"
  }
]

export default function Home() {
  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-serif text-[#6D6875] leading-tight">
                Web Developer<br />
                <span className="text-[#B89F7B]">Membangun Pengalaman</span><br />
                Digital yang Memukau
              </h1>

              <p className="text-xl text-[#6D6875]/80">
                Spesialis dalam pengembangan aplikasi web modern menggunakan React.js & Next.js,
                dengan fokus pada performa optimal dan user experience yang memikat.
              </p>

              <div className="flex gap-4">
                <Link
                    href="/portfolio"
                    className="bg-[#B89F7B] text-white px-8 py-3 rounded-md hover:bg-[#A38F6D] transition"
                >
                  Lihat Projek
                </Link>
                <Link
                    href="/contact"
                    className="border-2 border-[#6D6875] text-[#6D6875] px-8 py-3 rounded-md hover:bg-[#6D6875]/10 transition"
                >
                  Hubungi Saya
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                    src="https://picsum.photos/600/600?random=4"
                    alt="Profile"
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-[#F5F3F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-[#6D6875] text-center mb-12">
              Projek Unggulan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                  <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative aspect-video">
                      <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#6D6875] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[#6D6875]/80 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-[#F5F3F0] text-[#6D6875] rounded-full text-sm"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif text-[#6D6875] text-center mb-12">
              Testimoni Klien
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                  <div
                      key={index}
                      className="p-8 rounded-xl bg-white shadow-md border-l-4 border-[#B89F7B]"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-[#6D6875]">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#6D6875]/80">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-[#6D6875]/80 italic">
                      "{testimonial.text}"
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#B89F7B]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif text-white mb-6">
              Mulai Proyek Anda Sekarang
            </h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Tertarik bekerja sama? Mari diskusikan ide Anda dan buat sesuatu yang luar biasa bersama.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                  href="/contact"
                  className="bg-white text-[#B89F7B] px-8 py-3 rounded-md hover:bg-gray-100 transition"
              >
                Konsultasi Gratis
              </Link>
              <Link
                  href="/portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition"
              >
                Lihat Projek Lain
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}