const fs = require('fs');

const id = JSON.parse(fs.readFileSync('messages/id.json'));
const en = JSON.parse(fs.readFileSync('messages/en.json'));

id.About = {
  title: "Tentang Saya",
  p1: "Halo, saya Muhammad Kelvin Web Developer freelance yang fokus membantu UMKM dan bisnis lokal hadir profesional di dunia digital.",
  p2: "Saya percaya setiap bisnis, sekecil apapun, berhak tampil kredibel secara online. Website bukan sekadar tampilan — tapi fondasi digital untuk tumbuh dan dikenal pelanggan baru.",
  p3: "Dengan pendekatan personal, saya memastikan setiap project dikembangkan sesuai kebutuhan Anda, bukan template massal. Saya bekerja langsung dengan klien agar hasilnya efisien, clean, dan siap scaling.",
  principlesTitle: "Prinsip Kerja Saya:",
  principles: [
    { title: "Transparansi", desc: "Harga jelas, timeline realistis, tanpa biaya tersembunyi." },
    { title: "Responsif", desc: "Komunikasi langsung via WhatsApp, update rutin." },
    { title: "Kualitas Kode", desc: "Clean code, aman, dan mudah dikembangkan." },
    { title: "Fokus pada Hasil", desc: "Design yang cepat, mobile-first, dan SEO-friendly." },
    { title: "Support Pasca-Project", desc: "Bantuan 30 hari dan dokumentasi lengkap." }
  ],
  whyTitle: "Kenapa Memilih Freelancer?",
  whyList: [
    { title: "Langsung dengan yang Mengerjakan", desc: "Tanpa perantara sales atau manajer. Anda berkomunikasi langsung dengan saya yang membangun website dari awal sampai online." },
    { title: "Harga Lebih Efisien", desc: "Tanpa biaya operasional besar seperti agency. Hasil tetap profesional, harga tetap masuk akal untuk UMKM." },
    { title: "Komunikasi Cepat & Fleksibel", desc: "Respon cepat via WhatsApp. Revisi dan feedback ditangani langsung tanpa birokrasi panjang." },
    { title: "Kualitas di Atas Kuantitas", desc: "Saya hanya mengambil project yang bisa saya tangani secara maksimal — setiap website dikerjakan dengan detail." }
  ],
  techTitle: "Tech Stack & Keahlian",
  techDesc: "Tools dan teknologi yang saya gunakan untuk membangun website yang cepat, aman, dan mudah dikembangkan.",
  techTools: "Tools tambahan: Figma, Adobe XD, GitHub, Google Analytics, Notion, VS Code",
  ctaTitle: "Siap Go Digital Sekarang?",
  ctaDesc: "Ayo diskusi santai dulu tentang kebutuhan website kamu. Konsultasi gratis — tanpa tekanan, tanpa komitmen.",
  ctaBtn: "💬 Chat via WhatsApp",
  ctaResp: "Response time: < 2 jam"
};

en.About = {
  title: "About Me",
  p1: "Hello, I am Muhammad Kelvin, a freelance Web Developer focused on helping SMEs and local businesses present themselves professionally in the digital world.",
  p2: "I believe every business, no matter how small, deserves to look credible online. A website is not just a visual display — it is a digital foundation to grow and be known by new customers.",
  p3: "With a personal approach, I ensure every project is developed according to your needs, not mass templates. I work directly with clients so the results are efficient, clean, and ready to scale.",
  principlesTitle: "My Working Principles:",
  principles: [
    { title: "Transparency", desc: "Clear pricing, realistic timelines, no hidden costs." },
    { title: "Responsive", desc: "Direct communication via WhatsApp, regular updates." },
    { title: "Code Quality", desc: "Clean code, secure, and easy to maintain." },
    { title: "Focus on Results", desc: "Fast design, mobile-first, and SEO-friendly." },
    { title: "Post-Project Support", desc: "30 days of support and complete documentation." }
  ],
  whyTitle: "Why Choose a Freelancer?",
  whyList: [
    { title: "Direct Contact with the Developer", desc: "No sales middlemen or managers. You communicate directly with me, the one building the website from scratch to online." },
    { title: "More Efficient Pricing", desc: "No large operational costs like an agency. The results remain professional, the price remains reasonable for SMEs." },
    { title: "Fast & Flexible Communication", desc: "Fast response via WhatsApp. Revisions and feedback are handled directly without long bureaucracy." },
    { title: "Quality Over Quantity", desc: "I only take projects that I can handle optimally — every website is done with detail." }
  ],
  techTitle: "Tech Stack & Expertise",
  techDesc: "Tools and technologies I use to build fast, secure, and maintainable websites.",
  techTools: "Additional tools: Figma, Adobe XD, GitHub, Google Analytics, Notion, VS Code",
  ctaTitle: "Ready to Go Digital Now?",
  ctaDesc: "Let's have a casual chat about your website needs. Free consultation — no pressure, no commitment.",
  ctaBtn: "💬 Chat via WhatsApp",
  ctaResp: "Response time: < 2 hours"
};

id.Portfolio = {
  title: "Portfolio",
  btnSite: "Lihat Website",
  ctaTitle: "Ingin Melihat Lebih Banyak?",
  ctaDesc: "Hubungi saya untuk akses studi kasus lengkap dan detail teknis.",
  ctaBtn: "Request Case Study",
  categories: ['All', 'Landing Page', 'Company Profile', 'Webite Application']
};

en.Portfolio = {
  title: "Portfolio",
  btnSite: "Visit Website",
  ctaTitle: "Want to See More?",
  ctaDesc: "Contact me for access to complete case studies and technical details.",
  ctaBtn: "Request Case Study",
  categories: ['All', 'Landing Page', 'Company Profile', 'Website Application']
};

fs.writeFileSync('messages/id.json', JSON.stringify(id, null, 2));
fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
