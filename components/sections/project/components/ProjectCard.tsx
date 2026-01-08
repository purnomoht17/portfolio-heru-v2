'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

interface ProjectItem {
  id: number | string;
  title: string;
  description: string;
  techStack?: string[];
  filename?: string;
  link?: string;       
  detailUrl?: string | null; 
}

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const href = project.detailUrl || project.link || '#';

  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      
      <Link 
        href={href} 
        className={styles.cardLink}
        aria-label={`Lihat detail ${project.title}`}
      >
      </Link>

      {/* 2. Header Gambar */}
      {project.filename && (
        <div className={styles.imageHeader}>
          <Image
            src={`/images/${project.filename}`}
            alt={project.title}
            fill
            className={styles.projectImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            priority={false} 
          />
        </div>
      )}

      {/* 3. Detail Project */}
      <div className={styles.cardBody}>
        <h2 className={styles.projectTitle}>{project.title}</h2>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className={styles.techStackWrapper}>
            <div className={styles.techLabel}>Tech Stack</div>
            <div className={styles.techBadges}>
              {project.techStack.map((tech, index) => (
                <span key={index} className={styles.badge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <p className={styles.description}>{project.description}</p>

        <div 
          className={styles.linkBtn} 
          style={{ zIndex: 0, marginTop: 'auto' }} 
        >
          Lihat Project <FaArrowRight size={12} style={{ marginLeft: '8px' }} />
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;