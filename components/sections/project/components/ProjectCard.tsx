'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

interface ProjectItem {
  id: number | string;
  title: string;
  description: string;
  techStack?: string[];
  filename?: string;
  link?: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  onProjectClick: (id: number | string) => void;
}

const ProjectCard = ({ project, onProjectClick }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      
      {/* Header Gambar */}
      {project.filename && (
        <motion.div 
          className={styles.imageHeader}
          onClick={() => onProjectClick(project.id)}
          layoutId={`project-image-container-${project.id}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={`/images/${project.filename}`}
            alt={project.title}
            fill
            className={styles.projectImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            priority={false} 
          />
        </motion.div>
      )}

      {/* Detail Project (Bagian Bawah Kartu) */}
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

        {/* Link Button */}
        {project.link && (
          <Link 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            Lihat Project <FaExternalLinkAlt size={12} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;