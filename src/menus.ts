export const mainMenus = [
    { name: 'Home', href: '/' },
    { 
        name: 'Belajar', 
        href: '#',
        children: [
            { name: 'Modul Kurikulum', href: '/learning' },
            { name: 'Materi Kajian', href: '/kajian' }
        ]
    },
    { 
        name: 'Publikasi', 
        href: '#',
        children: [
            { name: 'Blog & Berita', href: '/blog' },
            { name: 'Galeri Kegiatan', href: '/kegiatan' }
        ]
    },
    {
        name: 'Tentang Kami',
        href: '#',
        children: [
            { name: 'Profil CE', href: '/about' },
            { name: 'Pengurus', href: '/pengurus' }
        ]
    }
];

export const footerMenus = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Belajar & Modul', href: '/learning' },
    { name: 'Galeri Kegiatan', href: '/kegiatan' },
    { name: 'Susunan Pengurus', href: '/pengurus' }
];
