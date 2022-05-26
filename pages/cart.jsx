import React from 'react';
import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Products</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  alt=""
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CARALZO</span>
            </td>
            <td>
              <span className={styles.price}>XAF 4000</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>XAF 8000</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  alt=""
                  objectFit="cover"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>CARALZO</span>
            </td>
            <td>
              <span className={styles.price}>XAF 4000</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>XAF 8000</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}> CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>XAF10000
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>XAF 0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>XAF10000
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
