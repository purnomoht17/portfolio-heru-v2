import React from 'react';
import styles from './Connect.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Connect = () => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.sectionLabel}>Let&apos;s Connect</h3>
        <p className={styles.text}>
          Tertarik berkolaborasi atau berdiskusi tentang arsitektur software?
        </p>
      </div>
      
      <div className={styles.socialList}>
        <a href="https://github.com/purnomoht17" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Github">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/heru-purnomo17" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/hrpurnomo_" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Connect;