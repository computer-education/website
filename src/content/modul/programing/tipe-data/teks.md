---
title: Data Teks (String)
description: Mengelola tipe data teks dan karakter
weight: 32
---

## Tipe Data Teks (String)

Dalam bahasa pemrograman, teks disebut sebagai **String**. String bisa berupa satu huruf, sekumpulan kata, atau bahkan kalimat yang sangat panjang.

Ciri khas utama dari sebuah String adalah **selalu diapit oleh tanda kutip**, baik kutip tunggal (`'...'`) maupun kutip ganda (`"..."`).

### Contoh dalam Python
```python
nama_depan = "John"
nama_belakang = 'Doe'
kalimat = "Halo, selamat belajar pemrograman!"
```

**Kenapa harus pakai kutip?**
Jika kamu tidak pakai kutip, komputer akan mengira teks tersebut adalah sebuah _nama variabel_ atau instruksi program.

### Menggabungkan String (Concatenation)
Kita bisa menyambung teks menggunakan simbol tambah `+`.

```python
nama = "Budi"
sapaan = "Halo " + nama + ", selamat pagi!"
print(sapaan) # Output: Halo Budi, selamat pagi!
```

> [!NOTE]
> Hampir semua bahasa modern mendukung penyambungan string menggunakan operator `+`. Namun di PHP, penggabungan teks biasanya menggunakan titik `.`.
