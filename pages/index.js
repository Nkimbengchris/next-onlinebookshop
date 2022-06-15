import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Add from '../components/Add';
import AddButton from '../components/AddButton';
import Booklist from '../components/Booklist';
import Featured from '../components/Featured';
import styles from '../styles/Home.module.css';

export default function Home({ booklist, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Bookshop in Douala</title>
        <meta name="description" content="Best online bookshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <Booklist booklist={booklist} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookie || '';
  let admin = false;

  if (myCookie.token === process.env.TOkEN) {
    admin = true;
  }
  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      booklist: res.data,
      admin,
    },
  };
};
