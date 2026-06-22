---
title: Deklarasi & Aturan
description: Cara membuat variabel dan aturan penamaannya
weight: 22
---

## Cara Mendeklarasikan Variabel

_Deklarasi_ adalah proses membuat variabel baru di dalam kode kita. Kita akan melihat bagaimana cara membuatnya dalam Python dan membandingkannya dengan bahasa lain.

### Di dalam Python
Python sangat sederhana. Kamu cukup menuliskan nama variabelnya, diikuti dengan tanda sama dengan (`=`), dan nilainya.

```python
# Membuat variabel bernama skor dan mengisinya dengan 100
skor = 100

# Membuat variabel nama dan mengisinya dengan teks
nama_karakter = "Pahlawan Super"

# Mengubah isi variabel skor menjadi 150
skor = 150
```

### Di dalam Bahasa Lain (Sebagai Perbandingan)

**JavaScript:**
Di JS, kita butuh kata kunci pendahulu seperti `let` atau `const`.
```javascript
let skor = 100;
let namaKarakter = "Pahlawan Super";
```

**C++ / Java:**
Di bahasa yang ketat (_statically typed_), kita wajib menyebutkan "Tipe Data" dari kardusnya terlebih dahulu!
```cpp
int skor = 100;           // int berarti integer (angka bulat)
string namaKarakter = "Pahlawan Super";
```

## Aturan Penamaan Variabel
Meski kamu bebas memberi nama kardusmu, ada aturan universal di dunia pemrograman:
1. **Tidak boleh diawali angka** (`1nama` tidak boleh, `nama1` boleh).
2. **Tidak boleh pakai spasi** (Gunakan _underscore_ `nama_karakter` (Snake Case) atau huruf kapital `namaKarakter` (Camel Case)).
3. **Jangan gunakan kata kunci bawaan bahasa** (seperti `if`, `for`, `print`).
