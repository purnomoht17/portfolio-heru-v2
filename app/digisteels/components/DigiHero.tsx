/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import styles from './DigiHero.module.css';

const DigiHero = () => {
  const repoUrl = "https://github.com/purnomoht17/digisteels";

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <span className={styles.badge}>B2B E-Commerce Platform</span>
          <h1 className={styles.title}>
            Digitalisasi Supply Chain <br />
            Material Baja
          </h1>
          <div className={styles.line}></div>
          <p className={styles.description}>
            Platform terintegrasi untuk pemesanan material stainless steel (201, 304, 316). 
            Dilengkapi fitur tracking pesanan real-time, manajemen stok gudang, 
            dan laporan analitik penjualan otomatis.
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/" className={styles.btnOutline}>
              Kembali
            </Link>
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnPrimary}
            >
              Lihat Project
            </a>
          </div>
        </div>
        
        <div className={styles.visualContent}>
          <div className={styles.mockupCard}>
            <img 
              src="/images/digisteels/digisteels-dashboard.png" 
              alt="Digisteels Dashboard Preview" 
              className={styles.dashboardImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigiHero;