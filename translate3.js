const fs = require('fs');

const idPath = 'messages/id.json';
const enPath = 'messages/en.json';

const id = JSON.parse(fs.readFileSync(idPath));
const en = JSON.parse(fs.readFileSync(enPath));

if (!id.Contact) {
    id.Contact = {
        title: "Hubungi Kami",
        email: "Email",
        whatsapp: "WhatsApp",
        social: "Media Sosial",
        locationTitle: "Lokasi",
        locationDesc: "MuhKelvin Developer\n(Melayani seluruh Indonesia secara remote)",
        formLoading: "Memuat Form..."
    };
}

if (!en.Contact) {
    en.Contact = {
        title: "Contact Us",
        email: "Email",
        whatsapp: "WhatsApp",
        social: "Social Media",
        locationTitle: "Location",
        locationDesc: "MuhKelvin Developer\n(Serving all over Indonesia remotely)",
        formLoading: "Loading Form..."
    };
}

fs.writeFileSync(idPath, JSON.stringify(id, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
