// app/contact/page.jsx
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiMessageSquare, FiMapPin } from 'react-icons/fi'
import Image from 'next/image'

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl font-serif text-emerald-700">
                            Hubungi Kami
                        </h1>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FiMail className="w-6 h-6 text-emerald-600" />
                                <div>
                                    <p className="text-emerald-700/80">Email</p>
                                    <a
                                        href="mailto:muhkelvin36@gmail.com"
                                        className="text-emerald-700 hover:text-emerald-600"
                                    >
                                        muhkelvin36@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FiMessageSquare className="w-6 h-6 text-emerald-600" />
                                <div>
                                    <p className="text-emerald-700/80">WhatsApp</p>
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=089526323412&text=Halo,%20saya%20tertarik%20untuk%20konsultasi%20gratis.%20Bolehkah%20saya%20bertanya%20lebih%20lanjut?&type=phone_number&app_absent=0"
                                        className="text-emerald-700 hover:text-emerald-600"
                                    >
                                        +62 89526323412
                                    </a>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="pt-6">
                                <h3 className="text-xl font-serif text-emerald-700 mb-4">
                                    Media Sosial
                                </h3>
                                <div className="flex gap-6">
                                    <a
                                        href="https://www.linkedin.com/in/muhkelvin/"
                                        className="text-emerald-700 hover:text-emerald-600 transition"
                                    >
                                        <FiLinkedin className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://github.com/muhkelvin"
                                        className="text-emerald-700 hover:text-emerald-600 transition"
                                    >
                                        <FiGithub className="w-6 h-6" />
                                    </a>
                                    {/* <a
                                        href="https://www.instagram.com/bisagodigital/"
                                        className="text-emerald-700 hover:text-emerald-600 transition"
                                    >
                                        <FiInstagram className="w-6 h-6" />
                                    </a> */}
                                </div>
                            </div>

                            {/* Location */}
                            <div className="pt-6">
                                <h3 className="text-xl font-serif text-emerald-700 mb-4">
                                    Lokasi
                                </h3>
                                <p className="text-emerald-700/80 mb-4">
                                    MuhKelvin Developer <br />
                                    (Melayani seluruh Indonesia secara remote)
                                </p>

                               
                            </div>
                        </div>
                    </div>

                    {/* Google Form Embed */}
                    <div className="bg-white p-8 rounded-xl shadow-md border border-emerald-100">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdAC4VzcijpOLnJ3flGTgIxjtqDh371gkDIwy8OXtvesDrT5A/viewform?usp=sharing"
                            width="100%"
                            height="800"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Contact Form"
                        >
                            Memuat Form...
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}
