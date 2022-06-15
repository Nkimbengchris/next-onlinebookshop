import React from 'react';
import styles from '../styles/Footer.module.css';
import Images from 'next/image';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaWhatsapp,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <FaFacebook className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <FaPinterest className={styles.icon} />
        <FaTwitter className={styles.icon} />
        <FaWhatsapp className={styles.icon} />
        <FaTiktok className={styles.icon} />
      </div>
      <div className={styles.container}>
        <div className={styles.col}>
          <h3>About</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About US</p>
        </div>
        <div className={styles.col}>
          <h3>Company</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About US</p>
        </div>
        <div className={styles.col}>
          <h3>Legal</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About US</p>
        </div>
        <div className={styles.col}>
          <h3>information</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About US</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
