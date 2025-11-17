'use client'
import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Company Profile', 'Landing Page', 'Blog/Magazine', 'Custom Website', 'CMS']

const projects = [
    // {
    //     title: 'Contact Management System',
    //     category: 'CMS',
    //     description: 'Sistem manajemen kontak dengan fitur CRUD dan pengelompokan data',
    //     image: 'https://picsum.photos/600/400?random=21',
    //     external: 'https://cms-green-ten.vercel.app/'
    // },
    // {
    //     title: 'Shorten URL',
    //     category: 'Custom Website',
    //     description: 'Aplikasi pemendek URL dengan fitur statistik sederhana',
    //     image: 'https://picsum.photos/600/400?random=22',
    //     external: 'https://shorten-url-umber-sigma.vercel.app/'
    // },
    // {
    //     title: 'Dashboard Pembukuan',
    //     category: 'Custom Website',
    //     description: 'Aplikasi dashboard untuk mencatat dan memantau keuangan pribadi atau bisnis kecil',
    //     image: 'https://picsum.photos/600/400?random=23',
    //     external: 'https://dahboard-pembukuan.vercel.app/'
    // },
    // {
    //     title: 'Workout Plan',
    //     category: 'Custom Website',
    //     description: 'Aplikasi perencanaan latihan untuk membantu pengguna membentuk jadwal olahraga harian',
    //     image: 'https://picsum.photos/600/400?random=24',
    //     external: 'https://workout-plan-mnljz9t3r-muhkelvinms-projects.vercel.app'
    // },
    {
        title: 'Website Property LuxeLiving',
        category: 'Custom Website',
        description: 'Website perusahaan dengan fitur lengkap untuk showcase produk dan layanan',
        image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-estate.vercel.app/'
    },
    {
        title: 'Insurance Company Website',
        category: 'Company Profile',
        description: 'Company profile untuk perusahaan asuransi dengan tampilan profesional',
        image: 'https://plus.unsplash.com/premium_photo-1661329820722-3a38e945083b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-insu.vercel.app/'
    },
    {
        title: 'Blog Magazine',
        category: 'Blog/Magazine',
        description: 'Platform blog modern dengan integrasi media sosial',
        image: 'https://picsum.photos/600/400?random=13',
        external: '#' // tambahkan link jika ada
    },
    {
        title: 'LUXSHOOT Photographer',
        category: 'Company Profile',
        description: 'Website fotografi dengan fitur galeri dan booking online',
        image: 'https://plus.unsplash.com/premium_photo-1682097066897-209d0d9e9ae5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-poto.vercel.app/'
    },
    {
        title: 'LUXAUTO Automotive',
        category: 'Company Profile',
        description: 'Website otomotif dengan katalog produk dan layanan servis',
        image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-auto.vercel.app/'
    },
    {
        title: 'Portfolio Landing Page',
        category: 'Landing Page',
        description: 'Landing page minimalis namun powerful untuk startup',
        image: 'https://picsum.photos/600/400?random=16',
        external: 'https://muhammadkelvin.vercel.app/'
    },
    {
        title: 'Law Firm Website',
        category: 'Company Profile',
        description: 'Profil firma hukum dengan fitur kontak dan testimoni klien',
        image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-law.vercel.app/'
    },
    {
        title: 'Wedding Organizer Website',
        category: 'Company Profile',
        description: 'Website wedding organizer dengan galeri dan form pemesanan',
        image: 'https://plus.unsplash.com/premium_photo-1690148812608-9942834931a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-wedding.vercel.app/'
    }
]


export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filtered =
        selectedCategory === 'All'
            ? projects
            : projects.filter(p => p.category === selectedCategory)

    return (
        <div className="min-h-screen bg-white">
            {/* Filter Section */}
            <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-gray-800 text-center mb-8">
                    Portfolio
                </h1>
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 rounded-full font-medium transition 
                ${selectedCategory === cat
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((proj, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
                        >
                            <div className="relative aspect-video">
                                <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <span className="text-sm text-green-600">{proj.category}</span>
                                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-2">
                                    {proj.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-1">
                                    {proj.description}
                                </p>
                                <a
                                    href={proj.external}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition text-center"
                                >
                                    Lihat Website
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-2xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-serif text-gray-800 mb-4">
                        Ingin Melihat Lebih Banyak?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Hubungi saya untuk akses studi kasus lengkap dan detail teknis.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
                    >
                        Request Case Study
                    </a>
                </div>
            </section>
        </div>
    )
}