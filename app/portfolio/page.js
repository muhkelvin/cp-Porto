'use client'
import { useState } from 'react'
import Image from 'next/image'

const categories = [
    'All',
    'Landing Page',
    'Company Profile',
    'Webite Application',
]

//  'E-Commerce',
//     'CMS',
//     'Web App/Dashboard',
//     'Portal/Marketplace',
//     'SaaS',
//     'ERP',
//     'Community/Forum',
// 'PWA',
// 'Blog/Content',


const projects = [
    {
        title: 'Community Forum Platform',
        category: 'Webite Application',
        tags: ['Forum', 'Social', 'Community'],
        description: 'Platform komunitas interaktif yang memungkinkan pengguna untuk membuat thread, memberikan komentar, dan menyimpan diskusi.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop',
        external: 'https://community-chi-woad.vercel.app/'
    },
    {
        title: 'Modern Blog Website',
        category: 'Webite Application',
        tags: ['Blog', 'CMS', 'Content'],
        description: 'Website blog modern dengan antarmuka yang bersih untuk membaca dan mempublikasikan konten artikel.',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop',
        external: 'https://blog-rho-ochre-78.vercel.app/'
    },
    {
        title: 'Parfume Store E-Commerce',
        category: 'Webite Application',
        tags: ['Store', 'Perfume', 'E-Commerce'],
        description: 'Toko online e-commerce eksklusif yang menawarkan berbagai koleksi parfum premium.',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1470&auto=format&fit=crop',
        external: 'https://parfume-store-e-commerce.vercel.app/'
    },
    {
        title: 'Contact Management System',
        category: 'Webite Application',
        tags: ['CMS', 'Database'],
        description: 'Sistem manajemen kontak dengan fitur CRUD dan pengelompokan data',
        image: 'https://picsum.photos/600/400?random=21',
        external: 'https://hub-flow-contact-management-system.vercel.app/'
    },

    {
        title: 'Dashboard Pembukuan',
        category: 'Webite Application',
        tags: ['ERP', 'Finance', 'Dashboard'],
        description: 'Aplikasi dashboard untuk mencatat dan memantau keuangan pribadi atau bisnis kecil',
        image: 'https://picsum.photos/600/400?random=23',
        external: 'https://dahboard-pembukuan.vercel.app/'
    },

    {
        title: 'Lumière Skincare Serum',
        category: 'Landing Page',
        tags: ['E-Commerce', 'Skincare'],
        description: 'Landing page mewah, bersih, dan bergaya editorial untuk produk serum skincare premium.',
        image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1470&auto=format&fit=crop',
        external: 'https://landing-page-collection-indol.vercel.app/lumiere'
    },
    {
        title: 'Brewly Coffee Subscription',
        category: 'Landing Page',
        tags: ['E-Commerce', 'Subscription'],
        description: 'Landing page hangat, kasual (lifestyle), dan nyaman (cozy) untuk layanan langganan kopi.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1470&auto=format&fit=crop',
        external: 'https://landing-page-collection-indol.vercel.app/brewly'
    },
    {
        title: 'Wearbase Korean Fashion',
        category: 'Landing Page',
        tags: ['E-Commerce', 'Fashion'],
        description: 'Landing page kasual, berani, dan bertema streetwear untuk koleksi fashion Korea yang trendi.',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1470&auto=format&fit=crop',
        external: 'https://landing-page-collection-indol.vercel.app/wearbase'
    },
    {
        title: 'Fitframe Personal Trainer',
        category: 'Landing Page',
        tags: ['Fitness', 'Booking'],
        description: 'Landing page energik, sporty, dan bertema gelap (dark mode) untuk pemesanan personal trainer.',
        image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1470&auto=format&fit=crop',
        external: 'https://landing-page-collection-indol.vercel.app/fitframe'
    },
    {
        title: 'Skillshift Online Course',
        category: 'Landing Page',
        tags: ['E-Commerce', 'Education'],
        description: 'Landing page modern, bernuansa teknologi, dan minimalis untuk kursus online.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop',
        external: 'https://landing-page-collection-indol.vercel.app/skillshift'
    },
    {
        title: 'Cozify Candle & Diffuser',
        category: 'Landing Page',
        tags: ['E-Commerce', 'Aromatherapy'],
        description: 'Landing page lembut, estetis, dan feminin yang menampilkan lilin aromaterapi & diffuser.',
        image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1470&auto=format&fit=crop',
        external: 'https://landing-page-collection-indol.vercel.app/cozify'
    },
    {
        title: 'Website Property LuxeLiving',
        category: 'Company Profile',
        tags: ['Real Estate', 'Showcase'],
        description: 'Website perusahaan dengan fitur lengkap untuk showcase produk dan layanan',
        image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-estate.vercel.app/'
    },
    {
        title: 'Insurance Company Website',
        category: 'Company Profile',
        tags: ['Insurance', 'Corporate'],
        description: 'Company profile untuk perusahaan asuransi dengan tampilan profesional',
        image: 'https://plus.unsplash.com/premium_photo-1661329820722-3a38e945083b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-insu.vercel.app/'
    },
    {
        title: 'Blog Magazine',
        category: 'Blog/Content',
        tags: ['Magazine', 'News'],
        description: 'Platform blog modern dengan integrasi media sosial',
        image: 'https://picsum.photos/600/400?random=13',
        external: '#' // tambahkan link jika ada
    },
    {
        title: 'LUXSHOOT Photographer',
        category: 'Company Profile',
        tags: ['Photography', 'Booking'],
        description: 'Website fotografi dengan fitur galeri dan booking online',
        image: 'https://plus.unsplash.com/premium_photo-1682097066897-209d0d9e9ae5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-poto.vercel.app/'
    },
    {
        title: 'LUXAUTO Automotive',
        category: 'Company Profile',
        tags: ['Automotive', 'Catalog'],
        description: 'Website otomotif dengan katalog produk dan layanan servis',
        image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-auto.vercel.app/'
    },
    {
        title: 'Portfolio Landing Page',
        category: 'Landing Page',
        tags: ['Personal', 'Portfolio'],
        description: 'Landing page minimalis namun powerful untuk startup',
        image: 'https://picsum.photos/600/400?random=16',
        external: 'https://muhammadkelvin.vercel.app/'
    },
    {
        title: 'Law Firm Website',
        category: 'Company Profile',
        tags: ['Law Firm', 'Corporate'],
        description: 'Profil firma hukum dengan fitur kontak dan testimoni klien',
        image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3',
        external: 'https://cp-law.vercel.app/'
    },
    {
        title: 'Wedding Organizer Website',
        category: 'Company Profile',
        tags: ['Wedding', 'Service'],
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
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                                        {proj.category}
                                    </span>
                                    {proj.tags && proj.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 uppercase tracking-wide"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
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