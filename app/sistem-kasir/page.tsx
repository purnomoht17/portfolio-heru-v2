import React from 'react';
import styles from './page.module.css';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import FeatureSection, { FeatureItem } from './components/FeatureSection';

const featuresData: FeatureItem[] = [
  {
    title: "Dashboard Multi-Cabang & Laporan Real-time",
    description: "Pusat kendali bagi pemilik bisnis untuk memantau performa penjualan secara global maupun per cabang. Menyajikan visualisasi data pendapatan, produk terlaris, dan stok menipis.",
    points: [
      "Grafik tren pendapatan harian.",
      "Ringkasan omzet bruto dan bersih.",
      "Filter laporan berdasarkan tanggal dan cabang toko.",
      "Ekspor laporan ke PDF dan Excel."
    ],
    imageSrc: "/images/sistem-kasir/page1.webp",
    imageAlt: "Dashboard Owner KasirPro"
  },
  {
    title: "Point of Sales (POS) Intuitif",
    description: "Antarmuka kasir yang dirancang untuk kecepatan transaksi. Kasir dapat memproses pesanan dengan cepat, mendukung berbagai kategori menu, dan perhitungan otomatis.",
    points: [
      "Kategori menu (Minuman Hangat, Makanan Berat, dll).",
      "Indikator stok real-time pada kartu produk.",
      "Dukungan pembayaran Tunai dan QRIS.",
      "Penerapan kode promo/diskon langsung di keranjang."
    ],
    imageSrc: "/images/sistem-kasir/page2.webp",
    imageAlt: "Halaman Transaksi Kasir"
  },
  {
    title: "Manajemen Inventaris & Stok",
    description: "Sistem pelacakan stok yang akurat untuk mencegah kehabisan barang. Admin dapat mengelola produk, menetapkan harga, dan memantau ketersediaan bahan baku.",
    points: [
      "Manajemen unit/satuan (cup, porsi).",
      "Status stok aman/menipis.",
      "Pencarian produk cepat.",
      "Edit dan tambah produk dengan mudah."
    ],
    imageSrc: "/images/sistem-kasir/page3.webp",
    imageAlt: "Manajemen Inventaris"
  },
  {
    title: "Manajemen Promo",
    description: "Fitur lengkap untuk mengelola kampanye pemasaran dan akses pengguna. Pemilik dapat mengatur diskon dan mengontrol akses admin cabang serta kasir.",
    points: [
      "Buat promo tipe persen atau nominal.",
    ],
    imageSrc: "/images/sistem-kasir/page4.webp",
    imageAlt: "Manajemen Promo dan Admin"
  },
    {
    title: "Manajemen Karyawan",
    description: "Fitur lengkap untuk mengelola akses pengguna. Pemilik dapat mengontrol akses admin cabang serta kasir.",
    points: [
      "Manajemen akun Admin Cabang dan Kasir.",
      "Log aktivitas shift kasir (Modal awal, selisih setoran).",
      "Pengaturan status aktif/non-aktif pengguna."
    ],
    imageSrc: "/images/sistem-kasir/page5.webp",
    imageAlt: "Manajemen Promo dan Admin"
  }
];

export default function SistemKasirPage() {
  return (
    <main className={styles.main}>
      <Hero />
      <FeatureSection features={featuresData} />
      <TechStack />
    </main>
  );
}