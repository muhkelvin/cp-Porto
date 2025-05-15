"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiGlobe,
    FiSearch,
    FiBriefcase,
    FiFileText,
    FiLayout,
    FiCode,
    FiSettings,
    FiTool,
} from 'react-icons/fi';

// Data
const services = [
    {
        icon: <FiGlobe className="w-10 h-10 text-emerald-600" />,
        title: 'Pembuatan Website',
        desc: 'Pengembangan website profesional dari nol (React, Next.js, Laravel)',
    },
    {
        icon: <FiSearch className="w-10 h-10 text-emerald-600" />,
        title: 'Optimasi SEO',
        desc: 'Optimasi teknikal & konten untuk ranking pencarian optimal',
    },
    {
        icon: <FiBriefcase className="w-10 h-10 text-emerald-600" />,
        title: 'Company Profile',
        desc: 'Website perusahaan modern dengan portfolio & tim',
    },
    {
        icon: <FiFileText className="w-10 h-10 text-emerald-600" />,
        title: 'Blog & CMS',
        desc: 'Sistem blog terintegrasi CMS untuk manajemen mudah',
    },
    {
        icon: <FiLayout className="w-10 h-10 text-emerald-600" />,
        title: 'Landing Page',
        desc: 'Desain konversi tinggi + copywriting persuasif',
    },
    {
        icon: <FiCode className="w-10 h-10 text-emerald-600" />,
        title: 'Custom Web App',
        desc: 'Aplikasi web khusus sesuai skenario bisnis',
    },
    {
        icon: <FiSettings className="w-10 h-10 text-emerald-600" />,
        title: 'Admin Panel',
        desc: 'Dashboard custom untuk manajemen data',
    },
    {
        icon: <FiTool className="w-10 h-10 text-emerald-600" />,
        title: 'Maintenance',
        desc: 'Update, backup, dan security audit berkala',
    },
];
const pricingSections = [
    {
        category: 'Website Bisnis',
        packages: [
            {
                name: 'Paket Hemat UMKM',
                subtitle: 'Paket Hemat',
                description: 'Rekomendasi untuk UMKM/Yayasan yang baru memulai Go-Digital',
                price: 'Rp725.000',
                annual: null,
                features: [
                    '1 Halaman Website',
                    'Free Domain',
                    'Basic Landing Page Design',
                    'Basic Copy Writing',
                ],
                badge: null,
            },
            {
                name: 'UMKM',
                subtitle: null,
                description: 'Rekomendasi untuk UMKM yang ingin mengoptimalkan produknya dengan catalog lengkap',
                price: 'Rp1.000.000',
                annual: null,
                features: [
                    '3 Halaman Website',
                    'Free Domain',
                    'Aktif 1 Tahun',
                    'Advanced Copy Writing',
                ],
                badge: 'Most Popular',
            },
            {
                name: 'Paket Website Untung',
                subtitle: null,
                description: 'Rekomendasi untuk bisnis UMKM yg fokus perkenalkan produknya',
                price: 'Rp1.500.000',
                annual: null,
                features: [
                    '5 Halaman Website',
                    'Free Domain',
                    'Basic Web Design',
                    'Advanced Copy Writing',
                    'Akses Dashboard Website',
                    'Analytic Traffic',
                    '1 email domain',
                    'SEO Optimation (Keyword & Page)',
                    'Tombol whatsapp',
                    'Gallery Produk',
                    'Integrasi Sosial Media',
                    'Video modul penggunaan website',
                ],
                badge: null,
            },
            {
                name: 'Paket Bisnis',
                subtitle: 'Paket Bisnis',
                description: 'Cocok untuk Profile Bisnis, Portal Berita, Sekolah/Yayasan, Portofolio',
                price: 'Rp2.525.000',
                annual: null,
                features: [
                    '10 Halaman Website',
                    'Contoh: Home, Service, About, Contact, Blog',
                    'Free Domain .com .id .org .or.id',
                    'Shared Hosting',
                    'Advanced Copy Writing',
                ],
                badge: 'Best Choice',
            },
            {
                name: 'Paket Bisnis Plus',
                subtitle: null,
                description: 'Cocok untuk Profesional Bisnis Website Profile Bisnis, Portal Berita, Sekolah/Yayasan, Portofolio',
                price: 'Rp3.500.000',
                annual: null,
                features: [
                    '20 Halaman Website',
                    'Contoh: Home, Service, About, Contact, Blog',
                    'Free Domain .com .id .org .or.id',
                    'Dedicated Hosting',
                    'Aktif 1 Tahun',
                    'Advanced Copy Writing',
                ],
                badge: null,
            },
            {
                name: 'Paket Bisnis High',
                subtitle: null,
                description: 'Cocok untuk Profesional Bisnis Website Profile Bisnis, Portal Berita, Sekolah/Yayasan, Portofolio',
                price: 'Rp5.500.000',
                annual: null,
                features: [
                    '30+ Halaman Website',
                    'Contoh: Home, Service, About, Contact, Blog, Product, Team',
                    'Free Domain .com .id .org .or.id .co.id',
                    'Dedicated Hosting',
                    'Aktif 1 Tahun',
                    'Free Logo Design',
                    'Advanced Copy Writing',
                    'Mutli Bahasa',
                    'Akses Panel Hosting',
                    'Analytic Traffic',
                    'Aktivasi Iklan Google Ads & Meta',
                    'Web Security & Activity Log',
                    'SEO Optimation (Keyword & Page)',
                    'Setting 15 email domain',
                    'Tombol whatsapp',
                    '6 Article/Blog',
                    'Google maps',
                    'Gallery Produk',
                    'Integrasi Sosial Media',
                    'Video modul penggunaan website',
                ],
                badge: null,
            },
        ],
    },
    {
        category: 'Toko Online',
        packages: [
            {
                name: 'Paket Toko WA UMKM',
                subtitle: null,
                description: 'Cocok website toko online dengan fitur checkout via whatsapp',
                price: 'Rp2.525.000',
                annual: null,
                features: [
                    '10 Halaman Website',
                    'Contoh: Home, Product, About, Contact, Blog',
                    'Free Domain .com .id .org .or.id',
                    'Shared Hosting',
                    'Aktif 1 Tahun',
                    'Custom Web Design',
                    'Katalog Product',
                    'Checkout Via Whatsapp',
                    'Bantu Upload 10 Produk',
                    'Free Logo Design',
                    'Advanced Copy Writing',
                    'Analytic Traffic',
                    'Seo Optimation (Keyword & Page)',
                    '3 email domain',
                    'Tombol whatsapp',
                    '3 Article/Blog',
                    'Google maps',
                    'Gallery',
                    'Integrasi Sosial Media',
                    'Video modul penggunaan website',
                ],
                badge: null,
            },
            {
                name: 'Paket Toko Bisnis',
                subtitle: null,
                description: 'Cocok untuk website Toko Online dengan checkout via payment gateway',
                price: 'Rp3.500.000',
                annual: null,
                features: [
                    '15 Halaman Website',
                    'Contoh: Home, Product, About, Contact, Blog',
                    'Free Domain .com .id .org .or.id',
                    'Shared Hosting',
                    'Aktif 1 Tahun',
                    'Custom Web Design',
                    'Katalog Product',
                    'Checkout Via Payment Gateway : Midtrans, Xendit, Tripay, Duitku dll',
                    'Bantu Upload 20 Produk',
                    'Free Logo Design',
                    'Advanced Copy Writing',
                    'Analytic Traffic',
                    'SEO Optimation (Keyword & Page)',
                    '5 email domain',
                    'Tombol whatsapp',
                    '6 Article/Blog',
                    'Google maps',
                    'Gallery',
                    'Integrasi Sosial Media',
                    'Video modul penggunaan website',
                    'Integrasi Payment Gateway',
                    'Member page',
                    'Checkout page',
                    'Cek ongkos kirim',
                ],
                badge: null,
            },
            {
                name: 'Paket Toko High',
                subtitle: null,
                description: 'Cocok untuk Profesional Bisnis Website checkout payment gateway, multi bahasa',
                price: 'Rp7.500.000',
                annual: null,
                features: [
                    '30+ Halaman Website',
                    'Contoh: Home, Product, About, Contact, Blog',
                    'Free Domain .com .id .org .or.id',
                    'Dedicated Hosting',
                    'Aktif 1 Tahun',
                    'Custom Web Design',
                    'Katalog Product',
                    'Checkout Via Payment Gateway : Midtrans, Xendit, Tripay, Duitku dll',
                    'Bantu Upload 40 Produk',
                    'Free Logo Design',
                    'Multi Bahasa',
                    'Live Chat Integrasi Apps',
                    'Advanced Copy Writing',
                ],
                badge: 'Best Choice',
            },
        ],
    },
    {
        category: 'Custom',
        packages: [
            {
                name: 'Paket Custom Fitur Website',
                subtitle: null,
                description: 'Cocok website dengan fitur custom',
                price: 'Call Us',
                annual: null,
                features: [
                    'Semua Fitur Pada Paket High',
                    'Free Domain .com .id .org .or.id',
                    'Dedicated Hosting',
                    'Aktif 1 Tahun',
                    '- LMS/Online Class',
                    '- Donation Website',
                    '- Company with different Maps Listing',
                    '- Hotel Booking Date + Payment Gateway',
                    '- Job listing+Profile Builder',
                    '- Bookstore Website',
                    '- Company/Medical Appointment',
                    '- Video Listing Website',
                ],
                badge: null,
            },
        ],
    },
];


const processSteps = [
    { step: 1, title: 'Konsultasi & Analisis', desc: 'Diskusi kebutuhan & strategi UMKM Anda' },
    { step: 2, title: 'Perencanaan & Wireframe', desc: 'Struktur halaman & roadmap konten' },
    { step: 3, title: 'Development', desc: 'Implementasi kode & setup hosting/SSL' },
    { step: 4, title: 'Digital Setup', desc: 'Konfigurasi media sosial & iklan dasar' },
    { step: 5, title: 'Peluncuran & Monitoring', desc: 'Deployment & optimasi awal' },
];



// Reusable Components
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
);

const ServicesGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
            <motion.div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
            >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </motion.div>
        ))}
    </div>
);

const PricingTabs = ({ active, setActive }) => (
    <div className="flex justify-center mb-8 space-x-4">
        {pricingSections.map((s) => (
            <button
                key={s.category}
                onClick={() => setActive(s.category)}
                className={`px-5 py-2 rounded-full font-medium transition 
          ${active === s.category ? 'bg-emerald-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
                {s.category}
            </button>
        ))}
    </div>
);

export default function Services() {
    const [activeTab, setActiveTab] = useState(pricingSections[0].category);

    return (
        <div className="space-y-24">
            {/* Services */}
            <section className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SectionTitle title="Layanan Kami" subtitle="Solusi digital lengkap untuk bisnis Anda" />
                <ServicesGrid />
            </section>

            {/* Pricing */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle title="Paket Layanan Pembuatan Website" subtitle="Pilih paket sesuai kebutuhan bisnis Anda" />
                    <PricingTabs active={activeTab} setActive={setActiveTab} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingSections
                            .find((s) => s.category === activeTab)
                            .packages.map((plan) => (
                                <motion.div
                                    key={plan.name}
                                    className="relative bg-white rounded-2xl shadow p-6 flex flex-col hover:shadow-lg transition border"
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Badge */}
                                    {plan.badge && (
                                        <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {plan.badge}
                                        </div>
                                    )}
                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                                    {plan.subtitle && <p className="text-sm text-emerald-600 mb-3">{plan.subtitle}</p>}
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{plan.description}</p>
                                    <div className="bg-gray-100 rounded-lg p-4 mb-6 text-center">
                                        <div className="text-2xl font-bold text-emerald-600">{plan.price} (Nego)</div>
                                        {plan.annual && <div className="text-gray-500 text-sm">{plan.annual}</div>}
                                    </div>
                                    <ul className="flex-1 space-y-2 text-gray-700 mb-6">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start">
                                                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-2 text-sm leading-snug">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                    </div>
                    <p className="mt-8 text-center text-sm text-gray-500">*Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</p>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SectionTitle title="Proses Kerja" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                    {processSteps.map((p) => (
                        <motion.div
                            key={p.step}
                            className="bg-white p-6 rounded-2xl shadow-lg text-center"
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="w-12 h-12 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center mb-4">
                                {p.step}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">{p.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                        </motion.div>
                    ))}
                    {/* Connector lines hidden on mobile */}
                    <div className="hidden md:block absolute inset-y-1/2 left-0 right-0 grid grid-cols-5">
                        {processSteps.map((_, i) => (
                            i < processSteps.length - 1 && (
                                <div key={i} className="border-b-2 border-emerald-200 col-span-1 mx-auto w-24"></div>
                            )
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-emerald-600">
                <div className="max-w-xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-white mb-4">Siap Memulai Proyek Anda?</h2>
                    <p className="text-white/90 mb-8 leading-relaxed">Jadwalkan konsultasi gratis & dapatkan solusi terbaik untuk digital bisnis Anda.</p>
                    <a href="/contact" className="inline-block bg-white text-emerald-600 font-medium px-6 py-3 rounded-full shadow hover:shadow-md transition">
                        Konsultasi Gratis
                    </a>
                </div>
            </section>
        </div>
    );
}