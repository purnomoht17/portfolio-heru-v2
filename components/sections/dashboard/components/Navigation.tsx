import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { FaUserTie, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navigation = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.sectionLabel}>Quick Menu</h3>
      <div className={styles.navGrid}>
        
        <Link href="#resume" className={styles.navItem}>
          <div className={`${styles.iconBox} ${styles.resumeIcon}`}>
            <FaUserTie />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.navTitle}>Resume</span>
            <span className={styles.navSubtitle}>Experience & Skills</span>
          </div>
          <div className={styles.arrow}>&rarr;</div>
        </Link>

        <Link href="#projects" className={styles.navItem}>
          <div className={`${styles.iconBox} ${styles.projectIcon}`}>
            <FaProjectDiagram />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.navTitle}>Projects</span>
            <span className={styles.navSubtitle}>Portfolio & Code</span>
          </div>
          <div className={styles.arrow}>&rarr;</div>
        </Link>

        <Link href="#contact" className={styles.navItem}>
          <div className={`${styles.iconBox} ${styles.contactIcon}`}>
            <FaEnvelope />
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.navTitle}>Contact</span>
            <span className={styles.navSubtitle}>Get in Touch</span>
          </div>
          <div className={styles.arrow}>&rarr;</div>
        </Link>

      </div>
    </div>
  );
};

export default Navigation;