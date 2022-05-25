import Head from 'next/head';
import Image from 'next/image';
import Booklist from '../components/Booklist';
import Featured from '../components/Featured';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Bookshop in Douala</title>
        <meta name="description" content="Best online bookshop" />
        <link rel="icon" href="/shopping-cart.png" />
      </Head>
      <Featured />
      <Booklist />
    </div>
  );
}
