---
title: Perulangan (Looping)
description: Menyuruh komputer mengulangi tugas
weight: 42
---

## Perulangan (Looping)

Komputer adalah mesin pekerja keras yang tidak pernah mengeluh. Oleh karena itu, komputer sangat hebat dalam melakukan pekerjaan berulang-ulang dengan sangat cepat.

Konsep utama dalam perulangan ada dua: **For Loop** dan **While Loop**.

### 1. For Loop (Perulangan Pasti)
Digunakan ketika kita *sudah tahu* berapa kali kode harus diulang.

**Di Python:**
```python
# Mencetak "Halo" sebanyak 5 kali (dari indeks 0 sampai 4)
for i in range(5):
    print("Halo ke-", i)
```

**Di JavaScript / C++ / Java:**
```javascript
// Konsep yang sama, sintaks sedikit berbeda
for (let i = 0; i < 5; i++) {
    console.log("Halo ke-", i);
}
```

### 2. While Loop (Perulangan Bersyarat)
Digunakan ketika perulangan dilakukan terus menerus *selama* suatu kondisi bernilai True, dan akan berhenti saat False.

**Di Python:**
```python
baterai = 100

while baterai > 0:
    print("Main Game...")
    baterai = baterai - 20
    
print("Baterai habis, HP mati!")
```

> [!CAUTION]
> **Hati-hati Infinite Loop!**
> Pastikan di dalam `while` ada sebuah baris kode yang bisa mengubah kondisinya menjadi `False` (seperti pengurangan baterai di atas). Jika tidak, programmu akan mengulang *selamanya* hingga komputer nge-hang (crash)!
