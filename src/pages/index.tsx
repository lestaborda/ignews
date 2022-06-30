import Head from 'next/head';

import styles from './home.module.scss';
import { SubscribeButton } from '../components/SubscribeButton';

export default function Home() {
  return (
    <>
      <Head>Home | ig.news</Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src='/images/avatar.svg' alt='GIrl coding' />
      </main>
    </>
  );
}
