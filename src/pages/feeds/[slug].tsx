import { format } from 'date-fns';
import { FEEDS, getFeed } from '../api/rss';
import styles from '@/styles/Recipes.module.css';

export async function getStaticPaths() {
  return {
    paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
    const feed = FEEDS.find((feed) => feed.slug === params.slug);

    if (!feed) return;

    const detailedFeed = await getFeed(feed.url);

    return {
      props: {
        feed,
        items: detailedFeed.items,
      },
      revalidate: 1,
    };
}

export default function Feed({ feed, items }: any) {
  return (
    <main className={styles.main}>
        <div>
        <h1>{feed.title}</h1>
            <div className={styles.description}>
                {items.map((item: any, index: number) => (
                    <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <h3>{item.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    <div>{format(new Date(item.isoDate), "PPP")}</div>
                    </a>
                ))}
            </div>
        </div>
    </main>
  );
}