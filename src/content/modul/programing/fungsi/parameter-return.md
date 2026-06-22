---
title: Parameter & Return
description: Membuat fungsi yang interaktif dan menghasilkan output
weight: 52
---

## Membuat Fungsi Lebih Pintar

Fungsi biasa yang sekadar mencetak teks terkadang kurang berguna. Fungsi akan sangat powerful jika ia bisa menerima data (Input), mengolahnya, dan mengembalikan hasil (Output). 

Di sinilah peran **Parameter/Argumen** dan **Return Value** (Nilai Kembalian).

### 1. Parameter (Input)
Parameter adalah variabel khusus yang kita letakkan di dalam tanda kurung `()` saat mendeklarasikan fungsi. Fungsinya sebagai pintu masuk data dari luar.

**Python:**
```python
def sapa(nama):
    print("Halo", nama)

sapa("Budi") # Output: Halo Budi
sapa("Siti") # Output: Halo Siti
```

### 2. Return Value (Output)
Terkadang, kita tidak ingin fungsi mencetak hasil ke layar secara langsung, melainkan kita ingin fungsi mengembalikan hasil perhitungannya untuk digunakan oleh bagian kode lain. Untuk itu, kita menggunakan perintah `return`.

**Python:**
```python
def tambah(angka1, angka2):
    hasil = angka1 + angka2
    return hasil

# Memanggil fungsi dan menyimpan kembaliannya ke dalam variabel
total = tambah(10, 5)

# Sekarang variabel total berisi angka 15
print("Total harga adalah:", total)
```

**JavaScript (Parameter & Return):**
```javascript
function tambah(angka1, angka2) {
    return angka1 + angka2;
}

let total = tambah(10, 5);
console.log("Total harga adalah:", total);
```

Dengan menggunakan Parameter dan Return, kita telah membuat sebuah **mesin penghitung kecil** yang dinamis dan fleksibel!
