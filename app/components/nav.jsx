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
            name: 'Hubungi',
            path: 'https://api.whatsapp.com/send/?phone=089526323412&text&type=phone_number&app_absent=0',
            icon: Phone,
            external: true
        }
    ]

    return (
        <nav className="fixed w-full top-0 bg-white/90 backdrop-blur-md shadow-md z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-[#2C3E50] hover:text-[#3498DB] transition-colors">
                        Kelvin
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-2 text-[#34495E] hover:text-[#3498DB] transition-colors group"
                            >
                                <link.icon
                                    size={18}
                                    className="text-[#7F8C8D] group-hover:text-[#3498DB] transition-colors"
                                />
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#2C3E50] p-2 rounded-md"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="flex items-center px-3 py-2 text-[#34495E] hover:bg-[#ECF0F1] rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <link.icon size={18} className="mr-3 text-[#7F8C8D]" />
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
