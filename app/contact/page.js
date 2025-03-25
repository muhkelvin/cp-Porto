// app/contact/page.jsx
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiMessageSquare, FiMapPin } from 'react-icons/fi'
import Image from 'next/image'

export default function Contact() {
    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl font-serif text-[#6D6875]">
                            Hubungi Saya
                        </h1>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FiMail className="w-6 h-6 text-[#B89F7B]" />
                                <div>
                                    <p className="text-[#6D6875]/80">Email</p>
                                    <a
                                        href="mailto:muhkelvin36@gmail.com"
                                        className="text-[#6D6875] hover:text-[#B89F7B]"
                                    >
                                        muhkelvin36@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FiMessageSquare className="w-6 h-6 text-[#B89F7B]" />
                                <div>
                                    <p className="text-[#6D6875]/80">WhatsApp</p>
                                    <a
                                        href="https://wa.me/83150835308"
                                        className="text-[#6D6875] hover:text-[#B89F7B]"
                                    >
                                        +62 83150835308
                                    </a>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="pt-6">
                                <h3 className="text-xl font-serif text-[#6D6875] mb-4">
                                    Media Sosial
                                </h3>
                                <div className="flex gap-6">
                                    <a
                                        href="https://www.linkedin.com/in/muhkelvin/"
                                        className="text-[#6D6875] hover:text-[#B89F7B] transition"
                                    >
                                        <FiLinkedin className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://github.com/muhkelvin"
                                        className="text-[#6D6875] hover:text-[#B89F7B] transition"
                                    >
                                        <FiGithub className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-[#6D6875] hover:text-[#B89F7B] transition"
                                    >
                                        <FiInstagram className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="pt-6">
                                <h3 className="text-xl font-serif text-[#6D6875] mb-4">
                                    Lokasi
                                </h3>
                                <p className="text-[#6D6875]/80 mb-4">
                                    Jambi, Indonesia<br />
                                    (Melayani seluruh Indonesia secara remote)
                                </p>

                                {/* Google Maps Embed */}
                                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510262.1925359957!2d103.24426634999999!3d-1.485183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2583c2e0078aab%3A0x30176dd3699e780!2sJambi%2C%20Jambi%20City%2C%20Jambi!5e0!3m2!1sen!2sid!4v1717122504639!5m2!1sen!2sid"
                                        className="w-full h-full"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                                {/* Tombol Buka Maps */}
                                <a
                                    href="https://goo.gl/maps/6z8z8z8z8z8z8z8z8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 bg-[#B89F7B] text-white px-6 py-2 rounded-md hover:bg-[#A38F6D] transition"
                                >
                                    <FiMapPin className="w-5 h-5" />
                                    Buka di Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Google Form Embed */}
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdAC4VzcijpOLnJ3flGTgIxjtqDh371gkDIwy8OXtvesDrT5A/viewform?usp=dialog"
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
