// app/services/page.jsx
import { FiGlobe, FiSearch, FiBriefcase, FiFileText, FiLayout, FiCode, FiSettings, FiTool } from 'react-icons/fi'

const services = [
    {
        icon: <FiGlobe className="w-8 h-8" />,
        title: "Pembuatan Website",
        desc: "Pengembangan website profesional dari nol dengan teknologi terkini (React, Next.js, Laravel)"
    },
    {
        icon: <FiSearch className="w-8 h-8" />,
        title: "Optimasi SEO",
        desc: "Optimasi teknikal & konten untuk meningkatkan ranking pencarian Google"
    },
    {
        icon: <FiBriefcase className="w-8 h-8" />,
        title: "Company Profile",
        desc: "Website perusahaan modern dengan portfolio, tim, dan fitur kontak profesional"
    },
    {
        icon: <FiFileText className="w-8 h-8" />,
        title: "Blog & CMS",
        desc: "Sistem blog terintegrasi CMS untuk manajemen konten mudah"
    },
    {
        icon: <FiLayout className="w-8 h-8" />,
        title: "Landing Page + Copywriting",
        desc: "Halaman konversi tinggi dengan copywriting persuasif dan desain impactfull"
    },
    {
        icon: <FiCode className="w-8 h-8" />,
        title: "Custom Web App",
        desc: "Aplikasi web khusus sesuai kebutuhan bisnis Anda"
    },
    {
        icon: <FiSettings className="w-8 h-8" />,
        title: "Admin Panel",
        desc: "Dashboard admin custom untuk manajemen data dan konten"
    },
    {
        icon: <FiTool className="w-8 h-8" />,
        title: "Maintenance",
        desc: "Pemeliharaan berkala: update, backup, dan security audit"
    }
]

const pricing = [
    {
        type: "UMKM Starter",
        price: "Mulai RpxxxK (Nego)",
        features: [
            "✓ Company Profile Website",
            "✓ 5 Halaman",
            "✓ Desain responsif (mobile & desktop)",
            "✓ Hosting + SSL 1 tahun",
            "✓ Form kontak & link WhatsApp",
        ],
    },
    {
        type: "Go Digital",
        price: "Mulai Rpx.xJT (Nego)",
        features: [
            "✓ Semua fitur Starter",
            "✓ Basic Social Media Management (8 konten/bln)",
            "✓ Copywriting & hashtag research",
            "✓ Setup Iklan Dasar (Facebook & Instagram)*",
        ],
    },
    {
        type: "Digital Accelerator",
        price: "Mulai Rpx.xJT (Nego)",
        features: [
            "✓ Semua fitur Go Digital",
            "✓ Integrasi Pembayaran & Keranjang Belanja",
            "✓ Unlimited Produk & Kategori",
            "✓ Advanced Digital Management (12 grafis + 4 video/bln)",
            "✓ Analitik & Laporan Bulanan (web & social media)",
            "✓ Pembuatan & Optimasi Google Ads*",
        ],
    },
    {
        type: "Custom Project",
        price: "Negosiasi",
        features: [
            "✓ Full Custom Design",
            "✓ Integrasi API",
            "✓ Development from Scratch",
            "✓ Prioritas Support",
            "✓ Dokumentasi Lengkap"
        ],
    }
];


const process = [
    {
        step: 1,
        title: "Konsultasi & Analisis",
        desc: "Diskusi kebutuhan website & strategi digital untuk UMKM Anda"
    },
    {
        step: 2,
        title: "Perencanaan & Wireframe",
        desc: "Penyusunan struktur halaman, wireframe, dan roadmap konten digital"
    },
    {
        step: 3,
        title: "Development & Integrasi",
        desc: "Implementasi kode, setup hosting/SSL, dan integrasi fitur dasar"
    },
    {
        step: 4,
        title: "Digital Management Setup",
        desc: "Konfigurasi akun media sosial, pembuatan konten awal, dan setup iklan dasar"
    },
    {
        step: 5,
        title: "Peluncuran & Monitoring",
        desc: "Deployment website, training penggunaan, serta pemantauan & optimasi awal"
    }
];


export default function Services() {
    return (
        <div className="min-h-screen">
            {/* Services List */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-[#6D6875] text-center mb-16">
                    Layanan Kami
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            <div className="text-[#B89F7B] mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-[#6D6875] mb-2">
                                {service.title}
                            </h3>
                            <p className="text-[#6D6875]/80">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-[#F5F3F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif text-[#6D6875] text-center mb-12">
                        Model Harga
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricing.map((price, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-md text-center"
                            >
                                <h3 className="text-2xl font-serif text-[#6D6875] mb-4">
                                    {price.type}
                                </h3>
                                <div className="text-3xl text-[#B89F7B] font-medium mb-6">
                                    {price.price}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {price.features.map((feature, i) => (
                                        <li key={i} className="text-[#6D6875]/80">{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif text-[#6D6875] text-center mb-16">
                        Proses Kerja
                    </h2>

                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        {process.map((step, index) => (
                            <div
                                key={index}
                                className="flex-1 text-center relative"
                            >
                                <div className="w-12 h-12 bg-[#B89F7B] rounded-full text-white flex items-center justify-center mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h4 className="text-xl font-semibold text-[#6D6875] mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-[#6D6875]/80">{step.desc}</p>

                                {/* Connector Line */}
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-20 -right-20 w-40 h-1 bg-[#B89F7B]/20"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#6D6875]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif text-white mb-6">
                        Siap Memulai Proyek Anda?
                    </h2>
                    <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                        Jadwalkan konsultasi gratis untuk mendiskusikan kebutuhan web development Anda
                    </p>
                    <a
                        href="/contact"
                        className="bg-[#B89F7B] text-white px-8 py-3 rounded-md hover:bg-[#A38F6D] transition"
                    >
                        Konsultasi Gratis
                    </a>
                </div>
            </section>
        </div>
    )
}