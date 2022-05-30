import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Booklist from '../components/Booklist';
import Featured from '../components/Featured';
import styles from '../styles/Home.module.css';

export default function Home({ booklist }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Bookshop in Douala</title>
        <meta name="description" content="Best online bookshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <Booklist booklist={booklist} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      booklist: res.data,
    },
  };
};
