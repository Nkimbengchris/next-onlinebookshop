import React from 'react';
import styles from '../styles/Booklist.module.css';
import Bookcard from './Bookcard';

const Booklist = ({ booklist }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST ONLINE BOOKSHOP IN DOUALA</h1>
      <p className={styles.desc}>
        You have to stay in school. You have to. You have to go to college. You
        have to get your degree. Because that is the one thing people can not
        take away from you is your education. And it is worth the investment.
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
