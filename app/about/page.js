import Image from 'next/image'

const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'PHP', level: 85 },
    { name: 'Laravel', level: 88 },
    { name: 'Git', level: 92 },
    { name: 'SQL', level: 87 },
]

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/2.jpg"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-serif text-[#6D6875]">
                            Tentang Saya
                        </h1>

                        <p className="text-lg text-[#6D6875]/80 leading-relaxed">
                            Sebagai seorang Web Developer, saya memiliki passion dalam menciptakan solusi digital yang fungsional dan estetis.
                            Saya memulai karir sebagai full-stack developer, dan kini fokus pada pengembangan aplikasi web modern dengan teknologi terkini.
                        </p>

                        <p className="text-lg text-[#6D6875]/80 leading-relaxed">
                            Nilai utama yang saya tawarkan: <br />
                            <span className="text-[#B89F7B]">✓</span> Kode Bersih & Terstruktur<br />
                            <span className="text-[#B89F7B]">✓</span> Fokus pada User Experience<br />
                            <span className="text-[#B89F7B]">✓</span> Komunikasi Transparan
                        </p>

                        <a
                            href="https://drive.google.com/file/d/14GWGBkcnQifyYD0FK6JR-9cByxiOq5P1/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#B89F7B] text-white px-8 py-3 rounded-md hover:bg-[#A38F6D] transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-[#F5F3F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif text-[#6D6875] text-center mb-12">
                        Keahlian Teknis
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-[#6D6875]">{skill.name}</span>
                                    <span className="text-[#6D6875]/80">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-full bg-[#B89F7B] rounded-full transition-all duration-500"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif text-[#6D6875] mb-6">
                        Tertarik Berkolaborasi?
                    </h2>
                    <p className="text-[#6D6875]/90 mb-8 text-lg max-w-2xl mx-auto">
                        Mari berbicara tentang bagaimana saya dapat membantu mewujudkan visi digital Anda menjadi kenyataan.
                    </p>
                    <a
                        href="https://wa.me/6289526323412?text=Saya%20ingin%20bertanya%20tentang%20pembuatan%20website%20%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#B89F7B] text-white px-8 py-3 rounded-md hover:bg-[#A38F6D] transition"
                    >
                        Hubungi Sekarang !
                    </a>
                </div>
            </section>
        </div>
    )
}
