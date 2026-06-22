---
title: Dictionary & Object
description: Menyimpan data berpasangan (Key-Value) tanpa nomor index
weight: 62
---

## Dictionary / Object (Kamus Pasangan)

Kalau Array menggunakan nomor urut (Index) sebagai pengingat lokasi laci penyimpanan, **Dictionary** (di Python) atau **Object** (di JavaScript) menggunakan sistem **Pasangan Nama Kunci dan Nilai (Key-Value Pair)**.

Analogi yang tepat adalah seperti Buku Kamus di dunia nyata, atau Kontak di HP-mu. Saat mencari kontak temanmu, kamu mencari lewat "Nama" temanmu (sebagai Key), lalu muncul "Nomor Teleponnya" (sebagai Value).

Penulisannya ditandai dengan penggunaan kurung kurawal `{}`.

### Contoh Penggunaan

**Di Python (Dictionary):**
```python
# Membuat profil murid
profil_murid = {
    "nama": "Budi Santoso",
    "umur": 17,
    "kota": "Bandung",
    "lulus": True
}

# Cara mengakses data adalah dengan memanggil Key-nya
print(profil_murid["nama"]) # Output: Budi Santoso
print(profil_murid["umur"]) # Output: 17

# Mengubah nilai Key kota
profil_murid["kota"] = "Jakarta"
```

**Di JavaScript (Object):**
```javascript
let profilMurid = {
    nama: "Budi Santoso",
    umur: 17,
    kota: "Bandung",
    lulus: true
};

// Mengakses data menggunakan penulisan titik (Dot Notation)
console.log(profilMurid.nama); // Output: Budi Santoso
console.log(profilMurid.umur); // Output: 17
```

Dictionary/Object sangat cocok digunakan ketika kita menyimpan _banyak informasi spesifik tentang suatu entitas tunggal_, seperti profil user, konfigurasi sistem, atau rincian produk di toko online.
