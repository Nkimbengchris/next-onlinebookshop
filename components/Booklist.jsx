import React from 'react';
import styles from '../styles/Booklist.module.css';
import Bookcard from './Bookcard';

const Booklist = ({ booklist }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST ONLINE BOOKSHOP IN DOUALA</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ad
        quis? Dolorem hic quam excepturi nemo quia voluptate adipisci
        perspiciatis facere. Excepturi eveniet voluptates omnis obcaecati labore
        porro odit veritatis.
      </p>
      <div className={styles.wrapper}>
        {booklist.map((book) => (
          <Bookcard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Booklist;
