import React from 'react';
import DigiHero from './components/DigiHero';
import DigiFeatures from './components/DigiFeatures';
import DigiTech from './components/DigiTech';
import styles from './page.module.css';

export default function DigisteelsPage() {
  return (
    <main className={styles.main}>
      <DigiHero />
      <DigiFeatures />
      <DigiTech />
    </main>
  );
}