import { useState } from 'react';
import styles from '../styles/Add.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'uploads');
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/dsbyq4sj1/image/upload',
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOptions,
        img: url,
      };

      await axios.post('http://localhost:3000/api/products', newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1> Add new book</h1>
        <div className={styles.item}>
          <label className={styles.label}>choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <input
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              type="number"
              placeholder="used"
              className={`${styles.input} ${styles.inputUs}`}
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              type="number"
              placeholder="new"
              className={`${styles.input} ${styles.inputUs}`}
              onChange={(e) => changePrice(e, 1)}
            />
          </div>
        </div>
      </div>
      <button className={styles.addButton} onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};

export default Add;
