---
title: Jaringan Komputer Dasar
description: Bagaimana komputermu bisa terhubung dengan dunia luar
weight: 55
---

## Mengkoneksikan Miliaran Komputer

Sistem Operasi modern tidak hanya mengurus dirinya sendiri, ia juga bertugas mengatur komunikasi komputermu dengan komputer lain di seluruh dunia melalui **Internet (Inter-connected Network)**.

### Konsep Dasar Jaringan

1. **IP Address (Alamat IP):**
   Sama seperti setiap rumah harus memiliki alamat agar tukang pos bisa mengirim paket, setiap perangkat (Komputer, HP, Smart TV) yang terhubung ke internet **wajib** memiliki **IP Address**. Contoh IP Address adalah: `192.168.1.5` atau `104.244.42.1`. Tanpa alamat ini, data tidak akan tahu harus dikirim ke mana.

2. **Router / Modem:**
   Ini adalah petugas pos-nya. Router (seperti alat WiFi di rumahmu) bertugas menghubungkan komputermu (Jaringan Lokal) ke kabel serat optik milik penyedia internet (Telkom/First Media), untuk selanjutnya diteruskan ke lautan internet dunia (Jaringan Global).

3. **Domain Name System (DNS):**
   Mengingat deretan angka IP Address sangatlah susah. Maukah kamu mengetik `142.250.194.46` setiap kali ingin membuka Google?
   Tentu tidak. Di sinilah **DNS** berfungsi. DNS ibarat Buku Telepon internet. Ia bertugas menerjemahkan nama yang mudah diingat manusia (misal: `google.com`) menjadi IP Address yang dimengerti oleh komputer.

### Client-Server Architecture
Saat kamu menonton video di YouTube, HP/Komputermu bertindak sebagai **Client** (Pihak yang meminta data). Sedangkan komputer raksasa milik Google di Amerika bertindak sebagai **Server** (Pihak yang melayani dan mengirimkan video kepadamu melalui jaringan internet).
