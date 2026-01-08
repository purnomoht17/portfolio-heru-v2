import React from 'react';
import styles from './page.module.css';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Connect from './components/Connect';
import Navigation from './components/Navigation';

const DashboardSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.ambientLight}></div>
      <div className={styles.ambientLightBottom}></div>

      <div className={styles.container}>
        <div className={styles.bentoGrid}>
          {/* Bagian Hero (Full Width di Desktop) */}
          <Hero />

          {/* Bagian Tech Stack (Kolom Kiri - Tinggi) */}
          <TechStack />

          {/* Bagian Kanan: Wrapper untuk Navigasi & Connect */}
          <div className={styles.rightColumn}>
            <Navigation />
            <Connect />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;