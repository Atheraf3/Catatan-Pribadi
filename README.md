# Catatan Pribadi (Personal Notes App)Aplikasi web sederhana untuk mengelola catatan pribadi. Proyek ini dibangun menggunakan **React** dan **Vite**, memungkinkan pengguna untuk membuat, menyimpan, mengarsipkan, dan menghapus catatan dengan antarmuka yang responsif.

## FiturBerdasarkan kode sumber, aplikasi ini memiliki fitur-fitur berikut:

* **Menambah Catatan Baru**:
* Form input untuk judul dan isi catatan.
* Validasi input (judul dan isi harus diisi).
* **Batasan Karakter Judul**: Judul dibatasi maksimal 50 karakter dengan indikator sisa karakter.


* **Daftar Catatan**:
* Menampilkan **Catatan Aktif** dan **Catatan Arsip** secara terpisah.
* Menampilkan pesan "Tidak ada catatan" jika daftar kosong.
* Format tanggal yang dilokalisasi (Bahasa Indonesia).


* **Manajemen Catatan**:
* **Arsip/Aktifkan**: Memindahkan catatan dari daftar aktif ke arsip dan sebaliknya.
* **Hapus**: Menghapus catatan secara permanen.


* **Pencarian**: Fitur pencarian *real-time* untuk memfilter catatan berdasarkan judul.
* **Responsive Design**: Tampilan grid yang menyesuaikan dengan ukuran layar (1 kolom di mobile, hingga 4 kolom di layar besar).

##🛠️ Teknologi yang Digunakan* [React](https://react.dev/) (v19) - Library UI Utama.
* [Vite](https://vitejs.dev/) - Build tool dan development server yang cepat.
* CSS3 - Styling kustom (Dark theme).

## Struktur Proyek```bash
src/
├── components/
│   ├── NoteInput.jsx   # Komponen form untuk tambah catatan
│   ├── NoteItem.jsx    # Komponen kartu untuk satu catatan
│   └── NoteList.jsx    # Komponen container daftar catatan
├── styles/
│   └── style.css       # Global styles
├── utils/
│   └── index.js        # Data dummy awal dan fungsi format tanggal
├── index.jsx           # Entry point dan logika utama aplikasi (App)
└── index.html

```

## Cara MenjalankanIkuti langkah-langkah ini untuk menjalankan proyek di komputer lokal Anda:

###1. PrasyaratPastikan Anda sudah menginstal **Node.js** (versi terbaru direkomendasikan).

###2. InstalasiClone repositori ini (atau download), lalu masuk ke folder proyek dan instal dependencies:

```bash
npm install

```

###3. Menjalankan Development ServerUntuk menjalankan aplikasi dalam mode development:

```bash
npm run dev

```

Aplikasi biasanya akan berjalan di `http://localhost:5173`.

###4. Build untuk ProductionUntuk membuild aplikasi menjadi file statis yang siap deploy:

```bash
npm run build

```

Untuk melihat preview hasil build:

```bash
npm run serve

```
