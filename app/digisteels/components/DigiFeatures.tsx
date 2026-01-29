import React from 'react';
import Image from 'next/image';
import styles from './DigiFeatures.module.css';

const features = [
  {
    title: "Katalog Produk & Varian",
    desc: "Tampilan katalog stainless steel (201, 304, 316) yang terorganisir. Mendukung detail varian ukuran, ketebalan, dan harga dinamis.",
    img: "/images/digisteels/page1.webp" 
  },
  {
    title: "Dashboard Admin Komprehensif",
    desc: "Pusat kontrol untuk memantau pesanan masuk (Ongoing Orders) dan riwayat penjualan dengan status real-time.",
    img: "/images/digisteels/page2.webp"
  },
  {
    title: "Analitik Penjualan Otomatis",
    desc: "Visualisasi data penjualan harian dan bulanan dengan grafik batang interaktif untuk membantu pengambilan keputusan bisnis.",
    img: "/images/digisteels/page3.webp"
  }
];

const DigiFeatures = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Fitur Unggulan Digisteels</h2>
          <p className={styles.subtitle}>
            Dirancang untuk efisiensi operasional bisnis material konstruksi dengan teknologi modern.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageFrame}>
                {/* Gunakan Image Next.js di production */}
                <img src={item.img} alt={item.title} className={styles.cardImage} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigiFeatures;