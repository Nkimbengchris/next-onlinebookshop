import React from 'react';
import Image from 'next/image';
import styles from '../styles/BookCart.module.css';

const Bookcard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/featured.jpg" alt="" width="500" height="500" />
      <h1 className={styles.title}>PARLONS FRANCAIS</h1>
      <span className={styles.price}>4000XAF</span>
      <p className={styles.desc}>
        lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Bookcard;
