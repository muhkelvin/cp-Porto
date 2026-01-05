"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
    FiLayout,
    FiBriefcase,
    FiShoppingCart,
    FiFileText,
} from 'react-icons/fi';

// Services Data - FIXED: Tambah array services yang missing
const services = [
    {
        icon: <FiLayout className="w-10 h-10 text-emerald-600" />,
        title: 'Landing Page',
        desc: 'Website satu halaman untuk promosi produk/jasa dengan desain konversi tinggi',
        bestFor: 'Product launch, promo event, lead generation'
    },
    {
        icon: <FiBriefcase className="w-10 h-10 text-emerald-600" />,
        title: 'Company Profile',
        desc: 'Website multi-halaman untuk profil bisnis dengan portfolio & layanan lengkap',
        bestFor: 'Perusahaan, konsultan, studio/agency'
    },
    {
        icon: <FiShoppingCart className="w-10 h-10 text-emerald-600" />,
        title: 'Katalog Digital',
        desc: 'Katalog produk online dengan sistem order via WhatsApp',
        bestFor: 'UMKM, toko retail, distributor'
    },
    {
        icon: <FiFileText className="w-10 h-10 text-emerald-600" />,
        title: 'Website + Blog',
        desc: 'Website dengan CMS untuk posting artikel dan content marketing',
        bestFor: 'Personal brand, media, content creator'
    },
];

// Pricing Packages
const pricingPackages = [
    {
        name: 'Paket Express',
        subtitle: 'Landing Page Simple',
        description: 'Untuk yang butuh cepat & budget terbatas',
        price: 'Rp 600.000',
        strikePrice: 'Rp 1.200.000',
        features: [
            '1 halaman landing page responsive',
            '3-4 section (Hero, Features, CTA, Footer)',
            'Design pakai template premium (custom warna/logo)',
            'Form kontak sederhana',
            'WhatsApp button',
            'Mobile friendly',
            '1x revisi minor',
            'Selesai 3-5 hari kerja',
        ],
        timeline: '3-5 hari',
        limitations: [
            'Tidak termasuk copywriting (konten dari client)',
            'Tidak ada SEO optimization',
            'Support 7 hari saja',
        ],
        badge: 'Budget Friendly',
    },
    {
        name: 'Paket Starter',
        subtitle: 'Landing Page Pro',
        description: 'Landing page dengan optimasi & konversi lebih baik',
        price: 'Rp 1.200.000',
        strikePrice: 'Rp 2.000.000',
        features: [
            '1 halaman landing page custom design',
            '5-6 section lengkap',
            'Form kontak + email notifikasi',
            'WhatsApp floating button',
            'Google Analytics setup',
            'Basic SEO (meta tags, sitemap)',
            'Loading speed optimization',
            'Mobile & desktop responsive',
            '2x revisi design',
            'Bantuan upload ke hosting',
            'Support 14 hari',
        ],
        timeline: '7-10 hari',
        badge: 'Most Popular',
        note: 'Domain & hosting dibantu setup (biaya terpisah)'
    },
    {
        name: 'Paket Professional',
        subtitle: 'Multi-Page Website',
        description: 'Company profile lengkap untuk bisnis profesional',
        price: 'Rp 2.200.000',
        strikePrice: 'Rp 3.500.000',
        features: [
            '4-5 halaman (Home, About, Services, Portfolio, Contact)',
            'Custom design profesional',
            'Blog section dengan CMS sederhana',
            'Contact form + Google Maps',
            'SEO optimization per halaman',
            'Google Analytics + Facebook Pixel',
            'Social media integration',
            'WhatsApp chat widget',
            'Admin panel untuk update konten',
            '3x revisi design',
            'Video tutorial lengkap',
            'Support 30 hari',
        ],
        timeline: '2-3 minggu',
        badge: 'Best Value',
    },
    {
        name: 'Paket Business',
        subtitle: 'Katalog Digital',
        description: 'Website katalog produk + order system',
        price: 'Rp 4.000.000',
        strikePrice: 'Rp 6.500.000',
        features: [
            'Katalog produk (unlimited)',
            'Shopping cart + order via WhatsApp',
            'Admin panel untuk kelola produk',
            'Kategori & filter produk',
            'Product detail page',
            'SEO optimization',
            'Blog section',
            'Analytics tracking',
            '3x revisi design',
            'Tutorial admin panel',
            'Support 45 hari',
        ],
        timeline: '3-4 minggu',
        badge: 'For UMKM',
    },
];

// Add-ons yang masuk akal
const addOnServices = [
    {
        icon: '✍️',
        title: 'Copywriting Service',
        price: 'Rp 300rb',
        desc: 'Gue buatin konten landing page yang converting (headline, CTA, dll)',
        features: ['Headline menarik', 'CTA yang converting', 'Product description', 'SEO-friendly copy']
    },
    {
        icon: '📸',
        title: 'Stock Photo Premium',
        price: 'Rp 200rb',
        desc: 'Akses foto premium dari Unsplash Pro / Pexels untuk website',
        features: ['10+ foto premium', 'HD quality', 'Sesuai tema bisnis', 'Licensed properly']
    },
    {
        icon: '🔧',
        title: 'Maintenance',
        price: 'Rp 250rb/bulan',
        desc: 'Update konten, backup, security check, priority support',
        features: ['Update konten 2x/bulan', 'Weekly backup', 'Security check', 'Priority WA support']
    },
    {
        icon: '📈',
        title: 'SEO Boost',
        price: 'Rp 750rb',
        desc: 'Keyword research, on-page SEO, speed optimization, Search Console',
        features: ['Keyword research', 'On-page SEO', 'Speed optimization', 'Google Search Console']
    },
];

// Standard Features - Updated
const standardFeatures = [
    'Responsive Design (Mobile-Friendly)',
    'Fast Loading Speed (< 3 detik)',
    'SEO-Friendly Structure',
    'SSL Certificate (HTTPS)',
    'WhatsApp Integration',
    'Google Analytics',
    'Contact Form',
    'Social Media Links',
    'Browser Compatible',
    'Backup Setup',
    'Documentation & Tutorial',
];

// What's NOT Included
const notIncluded = [
    'Copywriting/penulisan konten (bisa dibantu dengan fee tambahan)',
    'Foto produk/professional photography',
    'Logo design (jika belum punya)',
    'Biaya perpanjangan domain/hosting tahun ke-2',
    'Update konten rutin setelah masa support habis',
];

// Process Steps
const processSteps = [
    { 
        step: 1, 
        title: 'Konsultasi & Briefing', 
        desc: 'Kita diskusi kebutuhan, goals, dan budget Anda. Saya riset kompetitor & target market' 
    },
    { 
        step: 2, 
        title: 'Proposal & Planning', 
        desc: 'Saya kirim proposal detail dengan timeline, deliverables, dan wireframe/mockup awal' 
    },
    { 
        step: 3, 
        title: 'Development', 
        desc: 'Saya mulai kerjakan project dengan update berkala. Anda bisa request revisi di setiap milestone' 
    },
    { 
        step: 4, 
        title: 'Review & Testing', 
        desc: 'Anda review hasil kerja dan saya pastikan semuanya berfungsi sempurna di semua device' 
    },
    { 
        step: 5, 
        title: 'Launch & Support', 
        desc: 'Project go live! Saya berikan tutorial dan free support 30 hari' 
    },
];

// Components
const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
);

const ServicesGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
            <motion.div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition border border-gray-100"
                whileHover={{ scale: 1.03 }}
            >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                <p className="text-sm text-emerald-600 font-medium">
                    ✓ {s.bestFor}
                </p>
            </motion.div>
        ))}
    </div>
);

export default function Services() {
    return (
        <div className="space-y-24 pt-20">
            {/* Header */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SectionTitle 
                    title="Layanan Saya" 
                    subtitle="Spesialisasi pembuatan website profesional untuk UMKM & Bisnis Lokal" 
                />
                <ServicesGrid />
            </section>

            {/* Pricing Packages */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <SectionTitle 
                        title="Paket & Harga" 
                        subtitle="Pilih paket yang sesuai dengan kebutuhan dan budget Anda" 
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pricingPackages.map((plan, idx) => (
                            <motion.div
                                key={idx}
                                className={`relative bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl transition border-2 ${
                                    plan.badge ? 'border-emerald-500' : 'border-gray-100'
                                }`}
                                whileHover={{ y: -5 }}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                                        {plan.badge}
                                    </div>
                                )}
                                
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h3>
                                    <p className="text-sm text-emerald-600 font-medium mb-3">{plan.subtitle}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{plan.description}</p>
                                    
                                    {/* Price */}
                                    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-4">
                                        {plan.strikePrice && (
                                            <div className="text-sm text-gray-500 line-through mb-1">{plan.strikePrice}</div>
                                        )}
                                        <div className="text-3xl font-bold text-emerald-700">{plan.price}</div>
                                        <div className="text-gray-600 text-xs mt-1">Timeline: {plan.timeline}</div>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="flex-1 space-y-2 text-gray-700 mb-4">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start text-sm">
                                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 leading-snug">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Limitations (untuk Paket Express) */}
                                {plan.limitations && (
                                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                        <p className="text-xs font-semibold text-amber-800 mb-2">⚠️ Catatan:</p>
                                        {plan.limitations.map((l, i) => (
                                            <p key={i} className="text-xs text-amber-700 mb-1">• {l}</p>
                                        ))}
                                    </div>
                                )}

                                {/* Note */}
                                {plan.note && (
                                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                        <p className="text-xs text-amber-800">{plan.note}</p>
                                    </div>
                                )}

                                {/* CTA Button */}
                                <a
                                    href={`https://wa.me/6289526323412?text=Halo%20Kelvin,%20saya%20tertarik%20dengan%20${plan.name}.%20Boleh%20diskusi%3F`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition"
                                >
                                    Pilih Paket Ini
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Payment Info */}
                    <div className="mt-12 text-center space-y-3 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
                        <p className="text-gray-700 font-semibold">
                            💰 Sistem Pembayaran:
                        </p>
                        <div className="text-gray-600 space-y-1">
                            <p>▸ DP 50% untuk mulai project</p>
                            <p>▸ 25% saat development selesai (untuk review)</p>
                            <p>▸ 25% sisanya sebelum launch</p>
                        </div>
                        <p className="text-sm text-gray-500 pt-2">
                            ✓ Transfer via BCA / Mandiri / QRIS • Invoice resmi setiap pembayaran
                        </p>
                    </div>
                </div>
            </section>

            {/* Add-On Services */}
            <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SectionTitle 
                    title="Layanan Tambahan" 
                    subtitle="Tingkatkan performa website Anda dengan layanan add-on" 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {addOnServices.map((addon, i) => (
                        <motion.div
                            key={i}
                            className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-md border border-emerald-100 hover:shadow-lg transition"
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="text-4xl mb-3">{addon.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{addon.title}</h3>
                            <p className="text-2xl font-bold text-emerald-600 mb-2">{addon.price}</p>
                            <p className="text-sm text-gray-600 mb-4">{addon.desc}</p>
                            <ul className="space-y-2">
                                {addon.features.map((f, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-700">
                                        <span className="text-emerald-500 mr-2">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Standard Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50">
                <SectionTitle 
                    title="Yang Pasti Anda Dapatkan" 
                    subtitle="Fitur standar di setiap paket website yang saya kerjakan" 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {standardFeatures.map((feature, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 p-4 rounded-lg bg-white border border-emerald-100 shadow-sm"
                        >
                            <span className="text-emerald-600 text-xl font-bold">✓</span>
                            <span className="text-gray-700 font-medium text-sm">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* What's NOT Included */}
                <div className="mt-12 bg-amber-50 border-2 border-amber-200 rounded-xl p-6 max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                        <span>⚠️</span> Yang TIDAK Termasuk:
                    </h3>
                    <ul className="space-y-2">
                        {notIncluded.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-amber-900">
                                <span className="text-amber-600 mr-2">✗</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <SectionTitle 
                        title="Cara Kerja Saya" 
                        subtitle="Proses yang transparan dan terstruktur dari konsultasi hingga launch" 
                    />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {processSteps.map((p) => (
                            <motion.div
                                key={p.step}
                                className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition border border-emerald-100"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold shadow-lg">
                                    {p.step}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{p.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <SectionTitle 
                    title="Pertanyaan yang Sering Ditanya" 
                />
                <div className="space-y-6">
                    {[
                        {
                            q: 'Berapa lama proses pembuatan website?',
                            a: 'Tergantung paket: Landing page 1-2 minggu, Company profile 3-4 minggu, Katalog Digital 4-6 minggu, Custom 6-10 minggu.'
                        },
                        {
                            q: 'Apakah saya bisa update website sendiri?',
                            a: 'Bisa! Saya akan setup CMS yang user-friendly dan kasih tutorial lengkap. Anda bisa update konten tanpa perlu coding.'
                        },
                        {
                            q: 'Bagaimana dengan revisi?',
                            a: 'Setiap paket ada quota revisi. Paket Starter: 2x, Professional: 3x, Business: unlimited selama development.'
                        },
                        {
                            q: 'Apakah ada garansi?',
                            a: 'Ya, saya berikan free support 30 hari untuk bug fixing dan troubleshooting setelah launch.'
                        },
                        {
                            q: 'Apakah include domain dan hosting?',
                            a: 'Paket Professional dan Business include domain + hosting 1 tahun. Paket Starter dibantu setup (biaya terpisah ~Rp 300-500rb/tahun).'
                        },
                        {
                            q: 'Bagaimana untuk E-Commerce dengan payment gateway?',
                            a: 'Untuk e-commerce full dengan shopping cart dan payment gateway (Midtrans, dll), harga mulai dari Rp 8-10jt. Konsultasi dulu untuk diskusi detail.'
                        },
                    ].map((faq, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-emerald-200 transition">
                            <h4 className="font-semibold text-gray-800 mb-2">Q: {faq.q}</h4>
                            <p className="text-gray-600">A: {faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="max-w-3xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Siap Memulai Project Website Anda?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 leading-relaxed">
                        Jadwalkan konsultasi gratis sekarang. No pressure, no commitment—just a friendly chat about your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://wa.me/6289526323412?text=Halo%20Kelvin,%20saya%20tertarik%20konsultasi%20tentang%20pembuatan%20website.%20Boleh%20diskusi%3F" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105"
                        >
                            💬 Chat WhatsApp Sekarang
                        </a>
                        <a 
                            href="/portfolio" 
                            className="inline-block bg-emerald-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-emerald-400 transition"
                        >
                            Lihat Portfolio
                        </a>
                    </div>
                    <p className="mt-6 text-white/80 text-sm">
                        Response time: &lt; 2 jam (Senin-Jumat, 09.00-18.00 WIB)
                    </p>
                </div>
            </section>
        </div>
    );
}