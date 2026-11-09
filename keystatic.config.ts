import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'computer-education/website'
  },
  singletons: {
    social: singleton({
      label: 'Social Media',
      path: 'src/content/social',
      format: { data: 'json' },
      schema: {
        instagram: fields.url({ label: 'Instagram URL' }),
        youtube: fields.url({ label: 'YouTube URL' }),
        tiktok: fields.url({ label: 'TikTok URL' }),
        whatsapp: fields.text({ label: 'Nomor WhatsApp (Format: 628xxx)' }),
      }
    })
  },
  collections: {
    kajian: collection({
      label: 'Materi Kajian (Rutin)',
      slugField: 'title',
      path: 'src/content/kajian/*',
      format: { contentField: 'content' },
      columns: ['pemateri', 'date'],
      schema: {
        title: fields.slug({ name: { label: 'Judul Kajian' } }),
        pemateri: fields.text({ label: 'Nama Pemateri', validation: { isRequired: true } }),
        date: fields.date({ label: 'Tanggal Kajian', defaultValue: { kind: 'today' } }),
        ppt_link: fields.url({ label: 'Link PPT (Gdrive/Canva dll)' }),
        video_link: fields.url({ label: 'Link Video / YouTube' }),
        image: fields.image({ 
            label: 'Thumbnail Kajian',
            directory: 'src/assets/images',
            publicPath: '../../assets/images/'
        }),
        description: fields.text({ label: 'Deskripsi Singkat / Cuplikan', multiline: true }),
        content: fields.markdoc({ label: 'Isi Tutorial / Rangkuman (Opsional tapi disarankan)' }),
      },
    }),
    
    blog: collection({
      label: 'Blog & Berita',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      columns: ['category', 'date'],
      schema: {
        title: fields.slug({ name: { label: 'Judul Artikel' } }),
        author: fields.text({ label: 'Penulis' }),
        date: fields.date({ label: 'Tanggal Publish', defaultValue: { kind: 'today' } }),
        category: fields.select({
          label: 'Kategori',
          defaultValue: 'Umum',
          options: [
            { label: 'Tutorial Lepas', value: 'Tutorial' },
            { label: 'Berita & Pengumuman', value: 'Berita' },
            { label: 'Opini', value: 'Opini' },
            { label: 'Umum', value: 'Umum' },
          ]
        }),
        image: fields.image({ 
            label: 'Thumbnail Artikel',
            directory: 'src/assets/images',
            publicPath: '../../assets/images/' 
        }),
        description: fields.text({ label: 'Deskripsi Singkat / Cuplikan', multiline: true }),
        content: fields.markdoc({ label: 'Isi Artikel' }),
      },
    }),

    kegiatan: collection({
      label: 'Galeri Kegiatan',
      slugField: 'title',
      path: 'src/content/kegiatan/*',
      format: { contentField: 'content' },
      columns: ['date', 'location'],
      schema: {
        title: fields.slug({ name: { label: 'Nama Kegiatan' } }),
        date: fields.date({ label: 'Tanggal Pelaksanaan', defaultValue: { kind: 'today' } }),
        location: fields.text({ label: 'Lokasi Kegiatan' }),
        image: fields.image({ 
            label: 'Cover Utama Kegiatan',
            directory: 'src/assets/images',
            publicPath: '../../assets/images/' 
        }),
        gallery: fields.array(
          fields.image({ 
            label: 'Foto Galeri',
            directory: 'src/assets/images',
            publicPath: '../../assets/images/' 
          }),
          { label: 'Foto-foto Galeri Tambahan', itemLabel: props => props.value || 'Foto' }
        ),
        description: fields.text({ label: 'Deskripsi / Cerita Kegiatan', multiline: true }),
        content: fields.markdoc({ label: 'Cerita Panjang (Opsional)' }),
      },
    }),

    pengurus: collection({
      label: 'Anggota Pengurus',
      slugField: 'nama',
      path: 'src/content/pengurus/*',
      format: { data: 'json' }, // Pengurus tidak butuh body markdown, cukup JSON file
      columns: ['jabatan', 'urutan'],
      schema: {
        nama: fields.slug({ name: { label: 'Nama Lengkap' } }),
        jabatan: fields.text({ label: 'Jabatan (Contoh: Ketua Umum)' }),
        foto: fields.image({ 
            label: 'Foto Pengurus',
            directory: 'src/assets/images/pengurus',
            publicPath: '../../assets/images/pengurus/' 
        }),
        urutan: fields.integer({ label: 'Urutan Tampil (Makin kecil makin awal)', defaultValue: 99 }),
      },
    }),

    ketua: collection({
      label: 'Ketua Umum Dari Masa ke Masa',
      slugField: 'nama',
      path: 'src/content/ketua/*',
      format: { data: 'json' },
      columns: ['periode', 'urutan'],
      schema: {
        nama: fields.slug({ name: { label: 'Nama Lengkap Beserta Gelar' } }),
        periode: fields.text({ label: 'Periode Jabatan (Contoh: 2001 - 2003)', validation: { isRequired: true } }),
        tahun_mulai: fields.integer({ label: 'Tahun Mulai (untuk urutan, misal: 2001)', defaultValue: 2001 }),
        urutan: fields.integer({ label: 'Nomor Urutan Ketua (1, 2, dst)', defaultValue: 1 }),
        foto: fields.image({ 
            label: 'Foto Ketua',
            directory: 'src/assets/images/ketua',
            publicPath: '../../assets/images/ketua/' 
        }),
        ttl: fields.text({ label: 'Tempat, Tanggal Lahir' }),
        alamat: fields.text({ label: 'Alamat Asal' }),
        email: fields.text({ label: 'Email' }),
        no_hp: fields.text({ label: 'Nomor HP / WhatsApp' }),
        riwayat_pendidikan: fields.text({ label: 'Riwayat Pendidikan', multiline: true }),
        moto_hidup: fields.text({ label: 'Moto Hidup', multiline: true }),
      },
    }),

    bukuSaku: collection({
      label: 'Buku Saku (Bab & Materi)',
      slugField: 'title',
      path: 'src/content/buku-saku/*',
      format: { contentField: 'content' },
      columns: ['urutan'],
      schema: {
        title: fields.slug({ name: { label: 'Judul Bab' } }),
        urutan: fields.integer({ label: 'Nomor Urutan Bab', defaultValue: 1 }),
        ringkasan: fields.text({ label: 'Ringkasan Singkat Bab', multiline: true }),
        icon: fields.text({ label: 'Phosphor Icon Class (misal: ph-book-open-text, ph-scroll)' }),
        content: fields.markdoc({ label: 'Isi Lengkap Bab Buku Saku' }),
      },
    }),
  },
});
