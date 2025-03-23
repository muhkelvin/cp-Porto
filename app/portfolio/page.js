// app/portfolio/page.jsx
'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

const categories = ['All', 'Company Profile', 'Landing Page', 'Blog/Magazine', 'Custom Website', 'CMS']

const projects = [
    {
        title: "Website Property LuxeLiving",
        category: "Custom Website",
        description: "Website perusahaan dengan fitur lengkap untuk showcase produk dan layanan",
        tech: ["Next.js", "Tailwind CSS",],
        image: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        challenge: "Membuat sistem update konten yang mudah untuk tim marketing",
        solution: "Implementasi Produk Dan Service Property",
        links: {
            demo: "https://cp-estate.vercel.app/",
            github: "#"
        }
    },
    {
        title: "Insurance Company Website ",
        category: "Company Profile",
        description: "Company Profile For Insurance",
        tech: ["React", "GSAP", "Framer Motion"],
        image: "https://plus.unsplash.com/premium_photo-1661329820722-3a38e945083b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        challenge: "Optimasi kecepatan loading dengan banyak animasi",
        solution: "Lazy loading + optimasi bundle JavaScript",
        links: {
            demo: "https://cp-insu.vercel.app/"
        }
    },
    {
        title: "Blog Magazine",
        category: "Blog/Magazine",
        description: "Platform blog dengan desain modern dan integrasi media sosial",
        tech: ["Next.js", "Markdown", "Prismic CMS"],
        image: "https://picsum.photos/600/400?random=13",
        challenge: "Mengelola konten yang terus berkembang",
        solution: "Menggunakan Prismic CMS untuk manajemen konten yang fleksibel",
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "Website Potograper LUXSHOOT",
        category: "Company Profile",
        description: "Potograpy website",
        tech: ["Vue.js", "Firebase", "Node.js"],
        image: "https://plus.unsplash.com/premium_photo-1682097066897-209d0d9e9ae5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        challenge: "Menyediakan fitur real-time dan skalabilitas tinggi",
        solution: "Mengintegrasikan Firebase real-time database dan Node.js backend",
        links: {
            demo: "https://cp-poto.vercel.app/",
            github: "#"
        }
    },
    {
        title: "LUXAUTO Automative Company Profile",
        category: "Company Profile",
        description: "Website Automative",
        tech: ["WordPress", "PHP", "MySQL"],
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        challenge: "Menyeimbangkan kecepatan dan kemudahan manajemen konten",
        solution: "Kustomisasi tema dan plugin untuk performa optimal",
        links: {
            demo: "https://cp-auto.vercel.app/",
            github: "#"
        }
    },
    {
        title: "PortoFolio Landing Page",
        category: "Landing Page",
        description: "Landing page untuk startup dengan desain minimalis namun powerful",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "https://picsum.photos/600/400?random=16",
        challenge: "Menciptakan kesan pertama yang kuat",
        solution: "Menggunakan desain responsif dan animasi subtle",
        links: {
            demo: "https://muhammadkelvin.vercel.app/",
            github: "#"
        }
    },
    {
        title: "Website Company Law",
        category: "Company Profile",
        description: "Company Profile For Law",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        challenge: "Menciptakan kesan pertama yang kuat",
        solution: "Menggunakan desain responsif dan animasi subtle",
        links: {
            demo: "https://cp-law.vercel.app/",
            github: "#"
        }
    },

    {
        title: "Website Company Wedding Organizer",
        category: "Company Profile",
        description: "Company Profile For Law",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "https://plus.unsplash.com/premium_photo-1690148812608-9942834931a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        challenge: "Menciptakan kesan pertama yang kuat",
        solution: "Menggunakan desain responsif dan animasi subtle",
        links: {
            demo: "https://cp-wedding.vercel.app/",
            github: "#"
        }
    },



]

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedProject, setSelectedProject] = useState(null)

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory)

    return (
        <div className="min-h-screen">
            {/* Category Filter */}
            <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-[#6D6875] text-center mb-8">
                    Portfolio
                </h1>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full ${
                                selectedCategory === category
                                    ? 'bg-[#B89F7B] text-white'
                                    : 'bg-[#F5F3F0] text-[#6D6875] hover:bg-[#E0DCD6]'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative aspect-video">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-sm text-[#B89F7B]">{project.category}</span>
                                <h3 className="text-xl font-semibold text-[#6D6875] mt-2 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-[#6D6875]/80 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-[#F5F3F0] text-[#6D6875] rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Project Detail Modal */}
            <Dialog
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-3xl bg-white rounded-2xl p-8">
                            {selectedProject && (
                                <>
                                    <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                                        <Image
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <Dialog.Title className="text-2xl font-serif text-[#6D6875] mb-4">
                                        {selectedProject.title}
                                    </Dialog.Title>

                                    <div className="space-y-6 text-[#6D6875]/90">
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">Deskripsi Projek</h4>
                                            <p>{selectedProject.description}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">Teknologi Digunakan</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-[#F5F3F0] text-[#6D6875] rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {selectedProject.challenge && (
                                            <div>
                                                <h4 className="text-lg font-semibold mb-2">Tantangan & Solusi</h4>
                                                <p className="mb-2"><span className="font-medium">Tantangan:</span> {selectedProject.challenge}</p>
                                                <p><span className="font-medium">Solusi:</span> {selectedProject.solution}</p>
                                            </div>
                                        )}

                                        <div className="flex gap-4">
                                            {selectedProject.links.demo && (
                                                <a
                                                    href={selectedProject.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-[#B89F7B] text-white px-6 py-2 rounded-md hover:bg-[#A38F6D]"
                                                >
                                                    Lihat Demo
                                                </a>
                                            )}
                                            {selectedProject.links.github && (
                                                <a
                                                    href={selectedProject.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="border border-[#6D6875] text-[#6D6875] px-6 py-2 rounded-md hover:bg-[#F5F3F0]"
                                                >
                                                    Kode GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>

            {/* CTA Section */}
            <section className="py-20 bg-[#F5F3F0]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif text-[#6D6875] mb-6">
                        Ingin Melihat Lebih Banyak?
                    </h2>
                    <p className="text-[#6D6875]/90 mb-8 text-lg max-w-2xl mx-auto">
                        Hubungi saya untuk melihat studi kasus lengkap dan detail implementasi teknis
                    </p>
                    <a
                        href="/contact"
                        className="bg-[#B89F7B] text-white px-8 py-3 rounded-md hover:bg-[#A38F6D] transition"
                    >
                        Request Case Study
                    </a>
                </div>
            </section>
        </div>
    )
}
