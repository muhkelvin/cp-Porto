const fs = require('fs');

const id = JSON.parse(fs.readFileSync('messages/id.json'));
const en = JSON.parse(fs.readFileSync('messages/en.json'));

id.ServicesPage = {
  headerTitle: "Layanan Saya",
  headerSubtitle: "Spesialisasi pembuatan website profesional untuk UMKM & Bisnis Lokal",
  pricingTitle: "Paket & Harga",
  pricingSubtitle: "Pilih paket yang sesuai dengan kebutuhan dan budget Anda",
  addonTitle: "Layanan Tambahan",
  addonSubtitle: "Tingkatkan performa website Anda dengan layanan add-on",
  featuresTitle: "Yang Pasti Anda Dapatkan",
  featuresSubtitle: "Fitur standar di setiap paket website yang saya kerjakan",
  notIncludedTitle: "Yang TIDAK Termasuk:",
  processTitle: "Cara Kerja Saya",
  processSubtitle: "Proses yang transparan dan terstruktur dari konsultasi hingga launch",
  faqTitle: "Pertanyaan yang Sering Ditanya",
  ctaTitle: "Siap Memulai Project Website Anda?",
  ctaSubtitle: "Jadwalkan konsultasi gratis sekarang. No pressure, no commitment—just a friendly chat about your needs.",
  ctaChat: "💬 Chat WhatsApp Sekarang",
  ctaPortfolio: "Lihat Portfolio",
  ctaResp: "Response time: < 2 jam (Senin-Jumat, 09.00-18.00 WIB)",
  paymentTitle: "💰 Sistem Pembayaran:",
  payment1: "▸ DP 50% untuk mulai project",
  payment2: "▸ 25% saat development selesai (untuk review)",
  payment3: "▸ 25% sisanya sebelum launch",
  paymentNote: "✓ Transfer via BCA / Mandiri / QRIS • Invoice resmi setiap pembayaran",
  selectPackage: "Pilih Paket Ini",
  notePrefix: "⚠️ Catatan:",
  services: [
    { title: 'Landing Page', desc: 'Website satu halaman untuk promosi produk/jasa dengan desain konversi tinggi', bestFor: 'Product launch, promo event, lead generation' },
    { title: 'Company Profile', desc: 'Website multi-halaman untuk profil bisnis dengan portfolio & layanan lengkap', bestFor: 'Perusahaan, konsultan, studio/agency' },
    { title: 'Katalog Digital', desc: 'Katalog produk online dengan sistem order via WhatsApp', bestFor: 'UMKM, toko retail, distributor' },
    { title: 'Website + Blog', desc: 'Website dengan CMS untuk posting artikel dan content marketing', bestFor: 'Personal brand, media, content creator' }
  ],
  pricingPackages: [
    { name: 'Paket Express', subtitle: 'Landing Page Simple', description: 'Untuk yang butuh cepat & budget terbatas', price: 'Rp 600.000', strikePrice: 'Rp 1.200.000', features: ['1 halaman landing page responsive', '3-4 section (Hero, Features, CTA, Footer)', 'Design pakai template premium (custom warna/logo)', 'Form kontak sederhana', 'WhatsApp button', 'Mobile friendly', '1x revisi minor', 'Selesai 3-5 hari kerja'], timeline: '3-5 hari', limitations: ['Tidak termasuk copywriting (konten dari client)', 'Tidak ada SEO optimization', 'Support 7 hari saja'], badge: 'Budget Friendly' },
    { name: 'Paket Starter', subtitle: 'Landing Page Pro', description: 'Landing page dengan optimasi & konversi lebih baik', price: 'Rp 1.200.000', strikePrice: 'Rp 2.000.000', features: ['1 halaman landing page custom design', '5-6 section lengkap', 'Form kontak + email notifikasi', 'WhatsApp floating button', 'Google Analytics setup', 'Basic SEO (meta tags, sitemap)', 'Loading speed optimization', 'Mobile & desktop responsive', '2x revisi design', 'Bantuan upload ke hosting', 'Support 14 hari'], timeline: '7-10 hari', badge: 'Most Popular', note: 'Domain & hosting dibantu setup (biaya terpisah)' },
    { name: 'Paket Professional', subtitle: 'Multi-Page Website', description: 'Company profile lengkap untuk bisnis profesional', price: 'Rp 2.200.000', strikePrice: 'Rp 3.500.000', features: ['4-5 halaman (Home, About, Services, Portfolio, Contact)', 'Custom design profesional', 'Blog section dengan CMS sederhana', 'Contact form + Google Maps', 'SEO optimization per halaman', 'Google Analytics + Facebook Pixel', 'Social media integration', 'WhatsApp chat widget', 'Admin panel untuk update konten', '3x revisi design', 'Video tutorial lengkap', 'Support 30 hari'], timeline: '2-3 minggu', badge: 'Best Value' },
    { name: 'Paket Business', subtitle: 'Katalog Digital', description: 'Website katalog produk + order system', price: 'Rp 4.000.000', strikePrice: 'Rp 6.500.000', features: ['Katalog produk (unlimited)', 'Shopping cart + order via WhatsApp', 'Admin panel untuk kelola produk', 'Kategori & filter produk', 'Product detail page', 'SEO optimization', 'Blog section', 'Analytics tracking', '3x revisi design', 'Tutorial admin panel', 'Support 45 hari'], timeline: '3-4 minggu', badge: 'For UMKM' }
  ],
  addOnServices: [
    { icon: '✍️', title: 'Copywriting Service', price: 'Rp 300rb', desc: 'Gue buatin konten landing page yang converting (headline, CTA, dll)', features: ['Headline menarik', 'CTA yang converting', 'Product description', 'SEO-friendly copy'] },
    { icon: '📸', title: 'Stock Photo Premium', price: 'Rp 200rb', desc: 'Akses foto premium dari Unsplash Pro / Pexels untuk website', features: ['10+ foto premium', 'HD quality', 'Sesuai tema bisnis', 'Licensed properly'] },
    { icon: '🔧', title: 'Maintenance', price: 'Rp 250rb/bulan', desc: 'Update konten, backup, security check, priority support', features: ['Update konten 2x/bulan', 'Weekly backup', 'Security check', 'Priority WA support'] },
    { icon: '📈', title: 'SEO Boost', price: 'Rp 750rb', desc: 'Keyword research, on-page SEO, speed optimization, Search Console', features: ['Keyword research', 'On-page SEO', 'Speed optimization', 'Google Search Console'] }
  ],
  standardFeatures: [
    'Responsive Design (Mobile-Friendly)', 'Fast Loading Speed (< 3 detik)', 'SEO-Friendly Structure', 'SSL Certificate (HTTPS)', 'WhatsApp Integration', 'Google Analytics', 'Contact Form', 'Social Media Links', 'Browser Compatible', 'Backup Setup', 'Documentation & Tutorial'
  ],
  notIncluded: [
    'Copywriting/penulisan konten (bisa dibantu dengan fee tambahan)', 'Foto produk/professional photography', 'Logo design (jika belum punya)', 'Biaya perpanjangan domain/hosting tahun ke-2', 'Update konten rutin setelah masa support habis'
  ],
  processSteps: [
    { step: 1, title: 'Konsultasi & Briefing', desc: 'Kita diskusi kebutuhan, goals, dan budget Anda. Saya riset kompetitor & target market' },
    { step: 2, title: 'Proposal & Planning', desc: 'Saya kirim proposal detail dengan timeline, deliverables, dan wireframe/mockup awal' },
    { step: 3, title: 'Development', desc: 'Saya mulai kerjakan project dengan update berkala. Anda bisa request revisi di setiap milestone' },
    { step: 4, title: 'Review & Testing', desc: 'Anda review hasil kerja dan saya pastikan semuanya berfungsi sempurna di semua device' },
    { step: 5, title: 'Launch & Support', desc: 'Project go live! Saya berikan tutorial dan free support 30 hari' }
  ],
  faqs: [
    { q: 'Berapa lama proses pembuatan website?', a: 'Tergantung paket: Landing page 1-2 minggu, Company profile 3-4 minggu, Katalog Digital 4-6 minggu, Custom 6-10 minggu.' },
    { q: 'Apakah saya bisa update website sendiri?', a: 'Bisa! Saya akan setup CMS yang user-friendly dan kasih tutorial lengkap. Anda bisa update konten tanpa perlu coding.' },
    { q: 'Bagaimana dengan revisi?', a: 'Setiap paket ada quota revisi. Paket Starter: 2x, Professional: 3x, Business: unlimited selama development.' },
    { q: 'Apakah ada garansi?', a: 'Ya, saya berikan free support 30 hari untuk bug fixing dan troubleshooting setelah launch.' },
    { q: 'Apakah include domain dan hosting?', a: 'Paket Professional dan Business include domain + hosting 1 tahun. Paket Starter dibantu setup (biaya terpisah ~Rp 300-500rb/tahun).' },
    { q: 'Bagaimana untuk E-Commerce dengan payment gateway?', a: 'Untuk e-commerce full dengan shopping cart dan payment gateway (Midtrans, dll), harga mulai dari Rp 8-10jt. Konsultasi dulu untuk diskusi detail.' }
  ]
};

en.ServicesPage = {
  headerTitle: "My Services",
  headerSubtitle: "Specialized in professional website creation for SMEs & Local Businesses",
  pricingTitle: "Packages & Pricing",
  pricingSubtitle: "Choose a package that fits your needs and budget",
  addonTitle: "Add-On Services",
  addonSubtitle: "Boost your website performance with our add-on services",
  featuresTitle: "What You Will Get",
  featuresSubtitle: "Standard features in every website package I work on",
  notIncludedTitle: "What is NOT Included:",
  processTitle: "How I Work",
  processSubtitle: "A transparent and structured process from consultation to launch",
  faqTitle: "Frequently Asked Questions",
  ctaTitle: "Ready to Start Your Website Project?",
  ctaSubtitle: "Schedule a free consultation now. No pressure, no commitment—just a friendly chat about your needs.",
  ctaChat: "💬 Chat on WhatsApp Now",
  ctaPortfolio: "View Portfolio",
  ctaResp: "Response time: < 2 hours (Mon-Fri, 09.00-18.00 WIB)",
  paymentTitle: "💰 Payment System:",
  payment1: "▸ 50% Down Payment to start the project",
  payment2: "▸ 25% when development is finished (for review)",
  payment3: "▸ 25% remaining before launch",
  paymentNote: "✓ Transfer via BCA / Mandiri / QRIS • Official invoice for each payment",
  selectPackage: "Choose This Package",
  notePrefix: "⚠️ Note:",
  services: [
    { title: 'Landing Page', desc: 'Single page website for product/service promotion with high conversion design', bestFor: 'Product launch, promo events, lead generation' },
    { title: 'Company Profile', desc: 'Multi-page website for business profile with complete portfolio & services', bestFor: 'Companies, consultants, studios/agencies' },
    { title: 'Digital Catalog', desc: 'Online product catalog with WhatsApp order system', bestFor: 'SMEs, retail stores, distributors' },
    { title: 'Website + Blog', desc: 'Website with CMS for posting articles and content marketing', bestFor: 'Personal brand, media, content creators' }
  ],
  pricingPackages: [
    { name: 'Express Package', subtitle: 'Simple Landing Page', description: 'For those who need it fast with a tight budget', price: 'Rp 600.000', strikePrice: 'Rp 1.200.000', features: ['1 page responsive landing page', '3-4 sections (Hero, Features, CTA, Footer)', 'Designed using premium templates (custom colors/logo)', 'Simple contact form', 'WhatsApp button', 'Mobile friendly', '1x minor revision', 'Finished in 3-5 working days'], timeline: '3-5 days', limitations: ['Copywriting not included (content provided by client)', 'No SEO optimization', '7 days support only'], badge: 'Budget Friendly' },
    { name: 'Starter Package', subtitle: 'Pro Landing Page', description: 'Landing page with better optimization & conversion', price: 'Rp 1.200.000', strikePrice: 'Rp 2.000.000', features: ['1 page custom design landing page', '5-6 full sections', 'Contact form + email notification', 'WhatsApp floating button', 'Google Analytics setup', 'Basic SEO (meta tags, sitemap)', 'Loading speed optimization', 'Mobile & desktop responsive', '2x design revisions', 'Assistance uploading to hosting', '14 days support'], timeline: '7-10 days', badge: 'Most Popular', note: 'Domain & hosting setup assisted (separate cost)' },
    { name: 'Professional Package', subtitle: 'Multi-Page Website', description: 'Complete company profile for professional businesses', price: 'Rp 2.200.000', strikePrice: 'Rp 3.500.000', features: ['4-5 pages (Home, About, Services, Portfolio, Contact)', 'Custom professional design', 'Blog section with simple CMS', 'Contact form + Google Maps', 'SEO optimization per page', 'Google Analytics + Facebook Pixel', 'Social media integration', 'WhatsApp chat widget', 'Admin panel for content updates', '3x design revisions', 'Complete video tutorial', '30 days support'], timeline: '2-3 weeks', badge: 'Best Value' },
    { name: 'Business Package', subtitle: 'Digital Catalog', description: 'Product catalog website + ordering system', price: 'Rp 4.000.000', strikePrice: 'Rp 6.500.000', features: ['Product catalog (unlimited)', 'Shopping cart + order via WhatsApp', 'Admin panel for product management', 'Product categories & filters', 'Product detail page', 'SEO optimization', 'Blog section', 'Analytics tracking', '3x design revisions', 'Admin panel tutorial', '45 days support'], timeline: '3-4 weeks', badge: 'For SMEs' }
  ],
  addOnServices: [
    { icon: '✍️', title: 'Copywriting Service', price: 'Rp 300rb', desc: 'I will write converting landing page content (headline, CTA, etc.)', features: ['Catchy headlines', 'Converting CTAs', 'Product descriptions', 'SEO-friendly copy'] },
    { icon: '📸', title: 'Premium Stock Photos', price: 'Rp 200rb', desc: 'Access to premium photos from Unsplash Pro / Pexels for your website', features: ['10+ premium photos', 'HD quality', 'Matches your business theme', 'Properly licensed'] },
    { icon: '🔧', title: 'Maintenance', price: 'Rp 250rb/month', desc: 'Content updates, backups, security checks, priority support', features: ['Content updates 2x/month', 'Weekly backups', 'Security checks', 'Priority WA support'] },
    { icon: '📈', title: 'SEO Boost', price: 'Rp 750rb', desc: 'Keyword research, on-page SEO, speed optimization, Search Console setup', features: ['Keyword research', 'On-page SEO', 'Speed optimization', 'Google Search Console'] }
  ],
  standardFeatures: [
    'Responsive Design (Mobile-Friendly)', 'Fast Loading Speed (< 3 seconds)', 'SEO-Friendly Structure', 'SSL Certificate (HTTPS)', 'WhatsApp Integration', 'Google Analytics', 'Contact Form', 'Social Media Links', 'Browser Compatible', 'Backup Setup', 'Documentation & Tutorial'
  ],
  notIncluded: [
    'Copywriting/content writing (can be added for an extra fee)', 'Product photos/professional photography', 'Logo design (if you don\'t have one)', 'Domain/hosting renewal fees for the 2nd year', 'Routine content updates after support period ends'
  ],
  processSteps: [
    { step: 1, title: 'Consultation & Briefing', desc: 'We discuss your needs, goals, and budget. I will research competitors & your target market' },
    { step: 2, title: 'Proposal & Planning', desc: 'I will send a detailed proposal with timeline, deliverables, and initial wireframes/mockups' },
    { step: 3, title: 'Development', desc: 'I start working on the project with regular updates. You can request revisions at each milestone' },
    { step: 4, title: 'Review & Testing', desc: 'You review the final work, and I make sure everything functions perfectly across all devices' },
    { step: 5, title: 'Launch & Support', desc: 'Project goes live! I will provide tutorials and 30 days of free support' }
  ],
  faqs: [
    { q: 'How long does the website creation take?', a: 'Depends on the package: Landing page 1-2 weeks, Company profile 3-4 weeks, Digital Catalog 4-6 weeks, Custom 6-10 weeks.' },
    { q: 'Can I update the website myself?', a: 'Yes! I will setup a user-friendly CMS and provide complete tutorials. You can update content without needing to code.' },
    { q: 'What about revisions?', a: 'Each package has a revision quota. Starter Package: 2x, Professional: 3x, Business: unlimited during development.' },
    { q: 'Is there any warranty?', a: 'Yes, I provide 30 days of free support for bug fixing and troubleshooting after launch.' },
    { q: 'Does it include domain and hosting?', a: 'Professional and Business packages include 1 year of domain + hosting. Starter package receives setup assistance (separate cost ~Rp 300-500k/year).' },
    { q: 'What about E-Commerce with payment gateways?', a: 'For full e-commerce with a shopping cart and payment gateway (Midtrans, etc.), prices start from Rp 8-10m. Consult first to discuss details.' }
  ]
};

fs.writeFileSync('messages/id.json', JSON.stringify(id, null, 2));
fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
