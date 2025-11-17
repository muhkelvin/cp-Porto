import Link from 'next/link'
import {
    Instagram,
    Linkedin,
    MessageCircle
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    const socialLinks = [
        { icon: Instagram, url: "https://www.instagram.com/bisagodigital/" },
        { icon: Linkedin, url: "https://www.linkedin.com/company/bisa-go-digital" }
    ]

    const waLink = "https://api.whatsapp.com/send/?phone=6289526323412&text=Halo,%20saya%20tertarik%20untuk%20konsultasi%20gratis.%20Bolehkah%20saya%20bertanya%20lebih%20lanjut?&type=phone_number&app_absent=0"

    return (
        <footer className="bg-emerald-700 text-white pt-12 pb-8 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-emerald-600 pb-10">
                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Muhammad Kelvin</h2>
                        <p className="text-emerald-100 text-sm leading-relaxed">
                            Spesialis dalam membangun website modern, responsif, dan SEO-friendly 
untuk UMKM & startup di Indonesia.
                        </p>
                        <div className="flex mt-4 space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    className="text-emerald-100 hover:text-white transition-colors"
                                >
                                    <social.icon size={22} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Layanan</h3>
                        <ul className="space-y-2 text-emerald-100 text-sm">
                            <li><Link href="/services" className="hover:text-white transition">Pembuatan Website</Link></li>                        </ul>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Perusahaan</h3>
                        <ul className="space-y-2 text-emerald-100 text-sm">
                            <li><Link href="/about" className="hover:text-white transition">Tentang Saya</Link></li>
                            <li><Link href="/portfolio" className="hover:text-white transition">Portofolio</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition">Hubungi Kami</Link></li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Kontak</h3>
                        <ul className="space-y-2 text-emerald-100 text-sm">
                            <li>Email: <a href="mailto:muhkelvin36@gmail.com" className="hover:text-white transition">muhkelvin36@gmail.com</a></li>
                            <li>WhatsApp: <a href={waLink} target="_blank" className="hover:text-white transition">+62 89526323412</a></li>
                            <li>Lokasi: Online — Melayani seluruh Indonesia 🇮🇩</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-emerald-100 space-y-4 md:space-y-0">
                    <p>
                        &copy; {new Date().getFullYear()} <strong>Muhammad Kelvin</strong>. All Rights Reserved.
                    </p>
                    <p>
                        Dibuat ❤️ oleh <span className="text-white font-medium">Kelvin</span>
                    </p>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <Link
                href={waLink}
                target="_blank"
                className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all z-50"
            >
                <FaWhatsapp size={26} />
            </Link>
        </footer>
    )
}
