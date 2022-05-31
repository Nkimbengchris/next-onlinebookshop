import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

const Product = ({ book }) => {
  const [price, setPrice] = useState(book.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = book.prices[sizeIndex] - book.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...book, price, quantity }));
  };

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
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/usedbook.png" layout="fill" alt="" />
            <span className={styles.number}>Used</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/newbook.png" layout="fill" alt="" />
            <span className={styles.number}>New</span>
          </div>
        </div>
        <br />
        <h3 className={styles.choose}>Choose Quantity </h3>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
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
