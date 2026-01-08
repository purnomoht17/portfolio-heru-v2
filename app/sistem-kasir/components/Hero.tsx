import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  const repositoryUrl = "https://github.com/purnomoht17/sistem-kasir.git";

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>        
        <h1 className={styles.heroTitle}>
          KasirPro: Solusi Cerdas<br />
          <span>Manajemen Segala Jenis Usaha</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Sistem kasir modern (POS) yang terintegrasi. Kelola inventaris, 
          laporan keuangan, dan multi-cabang dalam satu dashboard yang efisien.
        </p>
        <div className={styles.heroButtons}>
          <Link href="/" className={styles.btnSecondary}>
            Kembali ke Portfolio
          </Link>
          <a 
            href={repositoryUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.btnPrimary}
          >
            Lihat Repository GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;