---
title: Manajemen Hak Akses
description: Konsep akun pengguna, Administrator, dan keamanan Permissions
weight: 54
---

## Siapa yang Boleh Membuka File Ini?

Sistem Operasi modern didesain sejak awal untuk **bisa digunakan oleh banyak orang di satu komputer yang sama** (Multi-User) tanpa mencampurkan data pribadi masing-masing orang.

### Jenis Akun Pengguna

1. **Standard User (Pengguna Biasa):**
   Akun ini hanya bisa membuka file miliknya sendiri, menjalankan aplikasi yang sudah terinstal, dan menjelajah internet. Mereka **tidak diizinkan** menginstal aplikasi baru, mengubah pengaturan sistem, atau melihat file milik orang lain di komputer yang sama.
2. **Administrator / Root (Pengguna Super):**
   Akun ini ibarat "Tuhan" di dalam komputer tersebut. Administrator bebas melakukan apapun: menginstal/menghapus aplikasi, mengubah pengaturan inti komputer, bahkan menghapus seluruh isi komputer. Di Linux dan Mac, akun tertinggi ini disebut sebagai **Root**.

### Hak Akses (Permissions)
Untuk menjaga keamanan, Sistem Operasi menempelkan label Hak Akses (_Permissions_) pada setiap file dan folder. Hak akses ini dibagi menjadi tiga kekuatan dasar:
- **Read (R):** Hak untuk membaca / melihat isi file.
- **Write (W):** Hak untuk mengedit / mengubah / menghapus isi file.
- **Execute (X):** Hak untuk menjalankan file (jika file tersebut berupa program/aplikasi).

> [!CAUTION]
> Jangan pernah login dan bekerja menggunakan akun Administrator (atau Root) untuk kegiatan sehari-hari! Jika komputermu tidak sengaja mengunduh Virus saat kamu menggunakan akun Administrator, virus tersebut otomatis akan memiliki kekuatan "Tuhan" dan bisa menghancurkan seluruh sistemmu dalam sekejap.
