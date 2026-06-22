---
title: Percabangan (If-Else)
description: Membuat keputusan dalam program
weight: 41
---

## Percabangan (If-Else)

Konsep *If-Else* adalah cara kita membuat komputer mengambil keputusan berdasarkan kondisi tertentu.

### Logika Dasar
- `IF` (Jika) sebuah kondisi terpenuhi/benar (True) ➡️ Jalankan Kode A
- `ELSE` (Selain itu/Bila Salah) ➡️ Jalankan Kode B

### Di dalam Python
Python sangat memperhatikan **Indentasi/Spasi** di awal baris kode. Blok kode yang ada di dalam `if` harus menjorok ke dalam (biasanya 4 spasi atau 1 tab).

```python
nilai = 80

if nilai >= 75:
    print("Selamat, Kamu Lulus!")
else:
    print("Maaf, Kamu Harus Mengulang.")
```

### Di dalam Bahasa Lain

Sebagai perbandingan, sebagian besar bahasa lain seperti **JavaScript, C++, Java, dan PHP** menggunakan tanda kurung kurawal `{ }` untuk membungkus blok kode, dan tidak mewajibkan indentasi (meskipun indentasi sangat dianjurkan untuk kerapian).

```javascript
// Contoh di JavaScript
let nilai = 80;

if (nilai >= 75) {
    console.log("Selamat, Kamu Lulus!");
} else {
    console.log("Maaf, Kamu Harus Mengulang.");
}
```

> [!IMPORTANT]
> Apapun bahasanya, konsep logikanya sama 100%. Komputer mengevaluasi kondisinya (apakah 80 lebih besar atau sama dengan 75?), menghasilkan *True* atau *False*, lalu memutuskan blok mana yang harus dijalankan.
