---
title: Array & List
description: Menyimpan sekumpulan data dalam urutan tertentu
weight: 61
---

## Array / List (Daftar)

Array atau List adalah tipe struktur data yang digunakan untuk menyimpan daftar nilai. Nilai-nilai di dalamnya disebut elemen, dan dipisahkan oleh tanda koma di dalam tanda kurung siku `[]`.

Kamu bisa membayangkan Array seperti sebuah lemari panjang yang memiliki laci-laci bernomor. Nomor urut tersebut dalam pemrograman dinamakan **Index**.

> [!IMPORTANT]
> Hampir semua bahasa pemrograman memulai hitungan Index dari angka **0** (bukan 1). 
> Jadi, elemen pertama berada di index ke-0, elemen kedua di index ke-1, dan seterusnya.

### Contoh Penggunaan

**Di Python (biasa disebut List):**
```python
# Membuat List yang berisi nama-nama murid
daftar_murid = ["Andi", "Budi", "Caca", "Deni"]

# Mengambil murid pertama (Index 0)
print(daftar_murid[0]) # Output: Andi

# Mengambil murid ketiga (Index 2)
print(daftar_murid[2]) # Output: Caca

# Mengubah data murid kedua (Index 1) dari Budi menjadi Banu
daftar_murid[1] = "Banu"
```

**Di JavaScript (biasa disebut Array):**
```javascript
let daftarMurid = ["Andi", "Budi", "Caca", "Deni"];

console.log(daftarMurid[0]); // Output: Andi
```

Array sangat berguna jika dikombinasikan dengan perulangan (looping), karena kamu bisa "membuka laci" satu per satu dan memproses datanya dengan sangat cepat.
