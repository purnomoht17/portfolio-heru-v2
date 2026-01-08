import React from 'react';
import Image from 'next/image';
import styles from '../resume.module.css';

interface ExperienceItem {
  id: number | string;
  period: string;
  position: string;
  company: string;
  location: string;
  description: string;
  image?: string;
}

interface ExperienceProps {
  data: ExperienceItem[];
}

const Experience = ({ data }: ExperienceProps) => {
  return (
    <div className={`${styles.card} ${styles.animateFadeIn} ${styles.delay2}`}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      
      {data.map((exp) => (
        <div key={exp.id} className={styles.itemRow}>
          
          {/* Kolom Kiri: Info, Tanggal, Logo */}
          <div className={styles.leftCol}>
            {exp.image && (
              <div className={styles.imageWrapper}>
                {/* Asumsi gambar disimpan di public/images/ */}
                <Image 
                src={`/images/${exp.image}`} 
                alt={exp.company}
                fill
                className={styles.companyLogo}
                sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            )}
            
            <div className={styles.infoBox}>
              <span className={styles.period}>{exp.period}</span>
              <h3 className={styles.role}>{exp.position}</h3>
              <div className={styles.company}>{exp.company}</div>
              <div className={styles.location}>{exp.location}</div>
            </div>
          </div>

          {/* Kolom Kanan: Deskripsi */}
          <div className={styles.rightCol}>
            <p className={styles.description}>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;