import Head from 'next/head'
import Link from 'next/link';
import { FEEDS } from './api/rss';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Crisp Wave</title>
        <meta name="description" content="Air fryers are awesome" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <h1>Welcome to Crisp Waves</h1>
          <p>The home of all things air fryers</p>
          <div>
              {FEEDS.map((feed) => (
                <Link className="cta-action" key={feed.slug} href={`/feeds/${feed.slug}`}>
                  Read More about {feed.title}
                </Link>
              ))}
            </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>
          Proudly powered by ChatAI and the wise inputs of Cameron
        </span>
      </footer>
    </>
  )
}
