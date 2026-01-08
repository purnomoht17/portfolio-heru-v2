'use client'; 

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './FeatureSection.module.css';

export interface FeatureItem {
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
}

interface FeatureSectionProps {
  features: FeatureItem[];
}

const FeatureSection = ({ features }: FeatureSectionProps) => {
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 } 
    );

    const rows = document.querySelectorAll(`.${styles.featureRow}`);
    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Fitur Unggulan</h2>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.featureRow} ${index % 2 !== 0 ? styles.reversed : ''}`}
            >
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className={styles.featureList}>
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.imageWrapper}>
                <Image 
                  src={feature.imageSrc} 
                  alt={feature.imageAlt} 
                  width={800} 
                  height={500} 
                  className={styles.image}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;