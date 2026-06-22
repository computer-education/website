---
title: Fungsi Dasar
description: Cara mendeklarasikan dan memanggil fungsi sederhana
weight: 51
---

## Mendeklarasikan Fungsi Dasar

Setiap bahasa pemrograman punya aturan (sintaks) masing-masing dalam membuat sebuah fungsi, tapi konsep dasarnya sama:
1. Kita beri tahu komputer bahwa kita akan membuat fungsi (misalnya menggunakan kata kunci `def`, `function`, atau tipe kembalian seperti `void`).
2. Kita beri **nama fungsi** (sebaiknya merepresentasikan tugas dari fungsi tersebut).
3. Kita buka tanda kurung `()`.
4. Kita tuliskan baris kode apa saja yang akan dieksekusi saat fungsi dipanggil.

### Contoh Deklarasi & Pemanggilan

**Di Python:**
```python
# 1. Mendeklarasikan fungsi
def sapa_pengguna():
    print("Halo, selamat datang di aplikasi kami!")
    print("Semoga harimu menyenangkan.")

# 2. Memanggil fungsi
sapa_pengguna()
sapa_pengguna()
```

**Di JavaScript:**
```javascript
// 1. Mendeklarasikan fungsi
function sapaPengguna() {
    console.log("Halo, selamat datang di aplikasi kami!");
    console.log("Semoga harimu menyenangkan.");
}

// 2. Memanggil fungsi
sapaPengguna();
sapaPengguna();
```

Ketika kamu memanggil `sapa_pengguna()` dua kali, maka pesan tersebut akan dicetak dua kali tanpa perlu kamu mengetik ulang perintah `print` atau `console.log` secara manual.

> [!TIP]
> **DRY: Don't Repeat Yourself**
> Fungsi adalah implementasi utama dari prinsip DRY. Jika kamu merasa sedang melakukan _Copy-Paste_ blok kode yang sama ke beberapa baris, itu adalah tanda yang jelas bahwa kamu harus mengubah blok kode tersebut menjadi sebuah Fungsi!
