import React from 'react';
import styles from './contact.module.css';
import ContactCard from './components/ContactCard';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  
  const contactData = [
    {
      id: 1,
      title: 'WhatsApp',
      value: '+62 852-1282-9415',
      link: 'https://wa.me/6285212829415',
      icon: <FaWhatsapp color="#25D366" />, 
      color: '#25D366'
    },
    {
      id: 2,
      title: 'Instagram',
      value: '@hrpurnomo_',
      link: 'https://www.instagram.com/hrpurnomo_',
      icon: <FaInstagram color="#E1306C" />, 
      color: '#E1306C'
    },
    {
      id: 3,
      title: 'LinkedIn',
      value: 'heru-purnomo17',
      link: 'https://www.linkedin.com/in/heru-purnomo17',
      icon: <FaLinkedin color="#0077B5" />, 
      color: '#0077B5'
    },
    {
      id: 4,
      title: 'Email',
      value: 'purnomoht17@gmail.com',
      link: 'mailto:purnomoht17@gmail.com',
      icon: <FaEnvelope color="#EA4335" />,
      color: '#EA4335'
    }
  ];

  return (
    <section className={styles.wrapper} id="contact">
      <div className={styles.ambientLight}></div>

      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animateFadeIn}`}>
          <h1 className={styles.title}>Get in Touch</h1>
        </div>

        <div className={`${styles.contactGrid} ${styles.animateFadeIn}`}>
          {contactData.map((contact) => (
            <ContactCard 
              key={contact.id}
              title={contact.title}
              value={contact.value}
              link={contact.link}
              icon={contact.icon}
              color={contact.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;