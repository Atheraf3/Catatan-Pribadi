# Catatan Pribadi (Personal Notes App)

Aplikasi web sederhana untuk mengelola catatan pribadi. Proyek ini dibangun menggunakan **React** dan **Vite**, memungkinkan pengguna untuk membuat, menyimpan, mengarsipkan, dan menghapus catatan dengan antarmuka yang responsif dan modern.

##  Fitur

Aplikasi ini memiliki fitur-fitur berikut:

- **Tambah Catatan**: Membuat catatan baru dengan judul dan isi.
- **Validasi Input**: Judul dibatasi maksimal **50 karakter** dengan indikator sisa karakter.
- **Daftar Catatan**: Pemisahan tampilan antara **Catatan Aktif** dan **Catatan Arsip**.
- **Cari Catatan**: Fitur pencarian *real-time* berdasarkan judul catatan.
- **Manajemen Arsip**: Memindahkan catatan ke arsip atau mengembalikannya ke daftar aktif.
- **Hapus Catatan**: Menghapus catatan yang sudah tidak diperlukan.
- **Responsive Design**: Tampilan grid yang menyesuaikan ukuran layar perangkat (mobile friendly).

##  Teknologi yang Digunakan

- [React](https://react.dev/) (v19)
- [Vite](https://vitejs.dev/)
- [CSS3](https://w3schools.com/Css/)

## 📂 Struktur Proyek

```bash
src/
├── components/
│   ├── NoteInput.jsx   # Form input catatan dengan limit karakter
│   ├── NoteItem.jsx    # Komponen item catatan (kartu)
│   └── NoteList.jsx    # List renderer untuk catatan
├── styles/
│   └── style.css       # Styling global aplikasi
├── utils/
│   └── index.js        # Data dummy dan helper function
├── index.jsx           # Entry point aplikasi
└── index.html

```

## Cara Menjalankan (Local Development)Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda:

### 1. PrasyaratPastikan **Node.js** dan **npm** sudah terinstal di komputer Anda.

### 2. InstalasiClone repositori ini, kemudian masuk ke direktori proyek dan instal dependensi:

```bash
npm install

```

### 3. Menjalankan Server DevelopmentJalankan perintah berikut untuk memulai server lokal. Aplikasi biasanya akan berjalan di `http://localhost:5173`.

```bash
npm run dev

```

### 4. Build untuk ProductionUntuk membuat versi produksi yang siap deploy (menghasilkan folder `dist`):

```bash
npm run build

```

Untuk melihat preview hasil build di lokal:

```bash
npm run serve

```
