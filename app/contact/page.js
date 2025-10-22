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
                                        href="https://www.linkedin.com/company/bisa-go-digital"
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
                                    <a
                                        href="https://www.instagram.com/bisagodigital/"
                                        className="text-emerald-700 hover:text-emerald-600 transition"
                                    >
                                        <FiInstagram className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="pt-6">
                                <h3 className="text-xl font-serif text-emerald-700 mb-4">
                                    Lokasi
                                </h3>
                                <p className="text-emerald-700/80 mb-4">
                                    Bisa Go Digital<br />
                                    (Melayani seluruh Indonesia secara remote)
                                </p>

                                {/* Google Maps Embed */}
                                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-emerald-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32654820.88251219!2d117.88879999999999!3d-2.4456499999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48bed00446dd0277%3A0xb9fc4dd28f3d3658!2sBisa%20Go%20Digital!5e0!3m2!1sen!2sid!4v1761153901058!5m2!1sen!2sid"
                                        className="w-full h-full"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                {/* Tombol Buka Maps */}
                                <a
                                    href="https://www.google.com/maps/place/Bisa+Go+Digital/@-2.44565,117.8888,4z/data=!3m1!4b1!4m6!3m5!1s0x48bed00446dd0277:0xb9fc4dd28f3d3658!8m2!3d-2.44565!4d117.8888!16s%2Fg%2F11x6z6srhl?hl=en&entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition shadow-md"
                                >
                                    <FiMapPin className="w-5 h-5" />
                                    Buka di Google Maps
                                </a>
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
