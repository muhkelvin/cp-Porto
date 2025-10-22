"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FiGlobe,
    FiBriefcase,
    FiShoppingCart,
    FiFileText,
    FiLayout,
    FiCode,
} from 'react-icons/fi';

// Services Data - Simplified
const services = [
    {
        icon: <FiLayout className="w-10 h-10 text-emerald-600" />,
        title: 'Landing Page',
        desc: 'Website satu halaman untuk promosi produk/jasa dengan desain konversi tinggi',
    },
    {
        icon: <FiBriefcase className="w-10 h-10 text-emerald-600" />,
        title: 'Company Profile',
        desc: 'Website multi-halaman untuk profil bisnis dengan portfolio & layanan lengkap',
    },
    {
        icon: <FiShoppingCart className="w-10 h-10 text-emerald-600" />,
        title: 'Katalog Produk',
        desc: 'Toko online atau katalog digital dengan sistem manajemen produk',
    },
    {
        icon: <FiFileText className="w-10 h-10 text-emerald-600" />,
        title: 'Website + Blog',
        desc: 'Website dengan CMS untuk posting artikel dan content marketing',
    },
    {
        icon: <FiCode className="w-10 h-10 text-emerald-600" />,
        title: 'Custom Web App',
        desc: 'Solusi web khusus sesuai kebutuhan bisnis spesifik Anda',
    },
    {
        icon: <FiGlobe className="w-10 h-10 text-emerald-600" />,
        title: 'Maintenance',
        desc: 'Update rutin, backup, dan technical support untuk website Anda',
    },
];

// Simplified Pricing
const pricingPackages = [
    {
        name: 'Paket Starter',
        subtitle: 'Landing Page',
        description: 'Perfect untuk UMKM yang baru mulai go digital atau butuh website sederhana',
        price: 'Rp 1.200.000',
        features: [
            'Landing page 1 halaman',
            'Responsive design (mobile-friendly)',
            '3-5 section konten',
            'Form kontak + WhatsApp button',
            'Basic SEO setup',
            'Free domain .id atau .com (1 tahun)',
            'Shared hosting (1 tahun)',
            'SSL certificate (HTTPS)',
            'Google Analytics setup',
            '2x revisi design',
            'Tutorial cara update konten',
        ],
        timeline: '1-2 minggu',
        badge: null,
    },
    {
        name: 'Paket Professional',
        subtitle: 'Company Profile',
        description: 'Untuk bisnis yang ingin tampil lebih lengkap dan profesional',
        price: 'Rp 3.000.000',
        features: [
            'Website multi-page (hingga 5 halaman)',
            'Custom design sesuai branding',
            'Homepage + About + Services + Gallery + Contact',
            'Blog section (opsional)',
            'Admin panel untuk update konten',
            'SEO optimization',
            'Google Analytics + Facebook Pixel',
            'Social media integration',
            'WhatsApp chat widget',
            'Free domain .com/.id (1 tahun)',
            'Shared hosting (1 tahun)',
            '3 email domain (@namausaha.com)',
            '3x revisi design',
            'Video tutorial lengkap',
            'Free minor update 1 bulan',
        ],
        timeline: '3-4 minggu',
        badge: 'Most Popular',
    },
    {
        name: 'Paket Business',
        subtitle: 'E-Commerce / Katalog',
        description: 'Solusi lengkap untuk toko online atau katalog produk',
        price: 'Rp 5.500.000',
        features: [
            'Website dengan katalog produk (unlimited)',
            'Custom design premium',
            'Product management system',
            'Kategori & filter produk',
            'Shopping cart (opsional)',
            'Checkout via WhatsApp atau payment gateway',
            'Homepage + Shop + Product Detail + About + Contact',
            'Blog section',
            'Admin panel advanced',
            'SEO optimization per halaman',
            'Google Analytics + Facebook Pixel',
            'Social media integration',
            'Free domain .com/.id (1 tahun)',
            'Dedicated hosting (1 tahun)',
            '5 email domain',
            'Unlimited revisi selama development',
            'Video tutorial lengkap',
            '2 bulan free support & maintenance',
        ],
        timeline: '4-6 minggu',
        badge: 'Best Value',
    },
    {
        name: 'Paket Custom',
        subtitle: 'Custom Web Application',
        description: 'Butuh website dengan fitur khusus atau sistem yang lebih kompleks?',
        price: 'Mulai Rp 7.000.000',
        features: [
            'Web application custom',
            'Sistem booking/reservasi online',
            'Member portal dengan login system',
            'Multi-language website',
            'Payment gateway integration',
            'Custom dashboard & reporting',
            'API integration',
            'Dan fitur custom lainnya',
            'Konsultasi & requirement gathering',
            'Proposal teknis + timeline',
            'Development sesuai agreement',
            'Testing & quality assurance',
            'Documentation lengkap',
            'Training & handover',
        ],
        timeline: '6-10 minggu',
        badge: null,
    },
];

// Standard Features
const standardFeatures = [
    'Responsive Design (Mobile-Friendly)',
    'Fast Loading Speed',
    'SEO-Friendly Structure',
    'SSL Certificate (HTTPS)',
    'WhatsApp Integration',
    'Google Analytics',
    'Contact Form',
    'Social Media Links',
    'Browser Compatible',
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
            <motion.div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition border border-gray-100"
                whileHover={{ scale: 1.03 }}
            >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
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
                                        <div className="text-3xl font-bold text-emerald-700">{plan.price}</div>
                                        <div className="text-gray-600 text-xs mt-1">Timeline: {plan.timeline}</div>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="flex-1 space-y-2 text-gray-700 mb-6">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start text-sm">
                                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2 leading-snug">{f}</span>
                                        </li>
                                    ))}
                                </ul>

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

                    <div className="mt-12 text-center space-y-2">
                        <p className="text-gray-600">
                            💰 <strong>Sistem Pembayaran:</strong> DP 50% di awal, pelunasan 50% sebelum launch
                        </p>
                        <p className="text-sm text-gray-500">
                            *Harga sudah include domain & hosting untuk 1 tahun pertama
                        </p>
                    </div>
                </div>
            </section>

            {/* Standard Features */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <SectionTitle 
                    title="Yang Pasti Anda Dapatkan" 
                    subtitle="Fitur standar di setiap paket website yang saya kerjakan" 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {standardFeatures.map((feature, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-white border border-emerald-100"
                        >
                            <span className="text-emerald-600 text-xl font-bold">✓</span>
                            <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gray-50">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <SectionTitle 
                        title="Cara Kerja Saya" 
                        subtitle="Proses yang transparan dan terstruktur dari konsultasi hingga launch" 
                    />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {processSteps.map((p) => (
                            <motion.div
                                key={p.step}
                                className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition"
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
                            a: 'Tergantung paket: Landing page 1-2 minggu, Company profile 3-4 minggu, E-commerce 4-6 minggu, Custom 6-10 minggu.'
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
                            a: 'Ya, saya berikan free support 30 hari untuk bug fixing setelah launch.'
                        },
                    ].map((faq, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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
                        Jadwalkan konsultasi gratis sekarang. No pressure, no commitment - just a friendly chat about your needs.
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