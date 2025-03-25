import Link from 'next/link'
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    MessageCircle
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'


export default function Footer() {
    const socialLinks = [
        { icon: Facebook, url: "https://facebook.com/muhammadkelvin" },
        { icon: Twitter, url: "https://twitter.com/muhammadkelvin" },
        { icon: Instagram, url: "https://instagram.com/muhammadkelvin" },
        { icon: Linkedin, url: "https://linkedin.com/in/muhammadkelvin" }
    ]

    const waLink = "https://wa.me/083150835308" // Ganti dengan nomor WhatsApp Anda

    return (
        <footer className="bg-[#2C3E50] text-white py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Footer Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">Muhammad Kelvin</h2>
                        <p className="text-[#BDC3C7]">Web Developer & Digital Creative</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.url}
                                target="_blank"
                                className="text-[#BDC3C7] hover:text-white transition-colors"
                            >
                                <social.icon size={24} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Copyright & WhatsApp Button */}
                <div className="mt-8 pt-6 border-t border-[#34495E] flex justify-between items-center">
                    <p className="text-sm text-[#BDC3C7]">
                        &copy; {new Date().getFullYear()} Muhammad Kelvin. All Rights Reserved.
                    </p>
                </div>
            </div>
            <Link
                href={waLink}
                target="_blank"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50"
            >
                <FaWhatsapp size={28} />
            </Link>
            <Link
                href={waLink}
                target="_blank"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50"
            >
                <MessageCircle size={28} className="text-white" />
            </Link>
        </footer>
    )
}