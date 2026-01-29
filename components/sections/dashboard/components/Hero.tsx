import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import profilePic from '@/public/images/profile.webp'; 

const Hero = () => {
  return (
    <div className={styles.card}>
      <div className={styles.heroContent}>
        <span className={styles.roleBadge}>
          &lt;BackendDeveloper /&gt;
        </span>
        <h1 className={styles.title}>
          Architecting Robust <br /> Digital Systems
        </h1>
        <p className={styles.subtitle}>
          Saya Heru Purnomo. Mengubah logika kompleks menjadi API yang efisien, 
          aman, dan skalabel. Fokus pada performa backend dan arsitektur modern.
        </p>
        
        <div className={styles.buttonGroup}>
          <a 
            href="/files/Heru_Purnomo_Resume.pdf" 
            download="Heru_Purnomo_Resume.pdf" 
            className={styles.btnPrimary}
          >
            Download Resume
          </a>
          <Link href="#contact" className={styles.btnSecondary}>
            Contact Me
          </Link>
        </div>
      </div>

      <div className={styles.profileWrapper}>
        <Image 
          src={profilePic} 
          alt="Heru Purnomo" 
          className={styles.profileImg}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;