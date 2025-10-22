'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
    Home,
    User,
    Briefcase,
    ShoppingBag,
    MessageCircle,
    Phone,
    Menu,
    X
} from 'lucide-react'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { name: 'Beranda', path: '/', icon: Home },
        { name: 'Tentang', path: '/about', icon: User },
        { name: 'Portofolio', path: '/portfolio', icon: Briefcase },
        { name: 'Layanan', path: '/services', icon: ShoppingBag },
        { name: 'Kontak', path: '/contact', icon: MessageCircle },
        {
            name: 'Konsultasi Sekarang',
            path: 'https://api.whatsapp.com/send/?phone=6289526323412&text=Halo,%20saya%20tertarik%20untuk%20konsultasi%20gratis.%20Bolehkah%20saya%20bertanya%20lebih%20lanjut?&type=phone_number&app_absent=0',
            icon: Phone,
            external: true
        }
    ]

    return (
        <nav className="fixed w-full top-0 bg-white/90 backdrop-blur-md shadow-md z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-emerald-700 hover:text-emerald-600 transition-colors"
                    >
                        Bigo Go Digital by Kelvin
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors group"
                            >
                                <link.icon
                                    size={18}
                                    className="text-gray-400 group-hover:text-emerald-600 transition-colors"
                                />
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-emerald-700 p-2 rounded-md"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="flex items-center px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <link.icon
                                        size={18}
                                        className="mr-3 text-gray-400 group-hover:text-emerald-600"
                                    />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
