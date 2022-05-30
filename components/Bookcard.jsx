import React from 'react';
import Image from 'next/image';
import styles from '../styles/BookCart.module.css';
import Link from 'next/link';

const Bookcard = ({ book }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${book._id}`} passHref>
        <Image src={book.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}> {book.title} </h1>
      <span className={styles.price}>{book.prices[0]}XAF</span>
      <p className={styles.desc}>{book.desc}</p>
    </div>
  );
};

export default Bookcard;
