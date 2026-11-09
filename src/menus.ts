export const mainMenus = [
    { name: 'Beranda', href: '/' },
    { 
        name: 'Tentang', 
        href: '#',
        children: [
            { name: 'Profil CE', href: '/about' },
            { name: 'Pengurus', href: '/pengurus' },
            { name: 'Buku Saku', href: '/buku-saku' }
        ]
    },
    { name: 'Divisi', href: '/learning' },
    { 
        name: 'Publikasi', 
        href: '#',
        children: [
            { name: 'Kegiatan', href: '/kegiatan' },
            { name: 'Gallery', href: '/kegiatan' }
        ]
    },
    { 
        name: 'Informasi', 
        href: '#',
        children: [
            { name: 'Blog & Berita', href: '/blog' },
            { name: 'Materi Kajian', href: '/kajian' }
        ]
    },
    { name: 'Galeri', href: '/kegiatan' },
    { name: 'Kontak', href: '#footer' }
];

export const footerMenus = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Buku Saku Organisasi', href: '/buku-saku' },
    { name: 'Belajar & Modul', href: '/learning' },
    { name: 'Galeri Kegiatan', href: '/kegiatan' },
    { name: 'Susunan Pengurus', href: '/pengurus' }
];
