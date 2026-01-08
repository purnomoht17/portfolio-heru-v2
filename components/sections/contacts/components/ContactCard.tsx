import React from 'react';
import styles from './ContactCard.module.css';
import { IconType } from 'react-icons';

interface ContactCardProps {
  title: string;
  value: string;
  link: string;
  icon: React.ReactNode;
  color: string;
}

const ContactCard = ({ title, value, link, icon }: ContactCardProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.card}
    >
      <div className={styles.iconBox}>
        {icon}
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </a>
  );
};

export default ContactCard;