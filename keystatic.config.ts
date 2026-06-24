import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'computer-education/website'
  },
  collections: {
    kajian: collection({
      label: 'Materi Kajian (Rutin)',
      slugField: 'title',
      path: 'src/content/kajian/*',
      format: { contentField: 'content' },
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
  },
});
