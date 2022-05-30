import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import React, { useState } from 'react';
import axios from 'axios';

const Product = ({ book }) => {
  const [size, setSize] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={book.img} objectfit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{book.title}</h1>
        <span className={styles.price}>XAF{book.prices[size]}</span>
        <p className={styles.desc}>{book.desc}</p>
        <h3 className={styles.choose}> choose size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/usedbook.png" layout="fill" alt="" />
            <span className={styles.number}>Used</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/newbook.png" layout="fill" alt="" />
            <span className={styles.number}>New</span>
          </div>
        </div>
        <br />
        <h3 className={styles.choose}>Choose Quantity </h3>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      book: res.data,
    },
  };
};
export default Product;
