import { FiGithub, FiLinkedin, FiInstagram, FiMapPin } from 'react-icons/fi'

export default function Footer() {
    return (
        <footer className="bg-[#F5F3F0] mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-lg font-serif text-[#6D6875] mb-4">DevPort</h3>
                        <p className="text-sm text-[#6D6875]/80">
                            Crafting digital experiences with modern elegance.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-[#6D6875] mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/portfolio" className="text-[#6D6875]/80 hover:text-[#B89F7B] transition-colors">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="text-[#6D6875]/80 hover:text-[#B89F7B] transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-[#6D6875]/80 hover:text-[#B89F7B] transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-[#6D6875] mb-4">Connect</h4>
                        <div className="flex flex-col space-y-2">
                            <a
                                href="https://github.com/muhkelvin"
                                className="text-[#6D6875]/80 hover:text-[#B89F7B] transition-colors flex items-center gap-2"
                            >
                                <FiGithub className="w-5 h-5" />
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muhkelvin/"
                                className="text-[#6D6875]/80 hover:text-[#B89F7B] transition-colors flex items-center gap-2"
                            >
                                <FiLinkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                            <a
                                href="#"
                                className="text-[#6D6875]/80 hover:text-[#B89F7B] transition-colors flex items-center gap-2"
                            >
                                <FiInstagram className="w-5 h-5" />
                                Instagram
                            </a>
                            <a
                                href="https://goo.gl/maps/example-jambi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#6D6875]/80 hover:text-[#B89F7B] transition-colors flex items-center gap-2"
                            >
                                <FiMapPin className="w-5 h-5" />
                                Lokasi Kami
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-[#E0E0E0] text-center text-sm text-[#6D6875]/80">
                    © {new Date().getFullYear()} Muhammad Kelvin. All rights reserved.
                </div>
            </div>
        </footer>
    )
}