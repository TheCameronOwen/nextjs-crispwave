import Parser from 'rss-parser';

type Feed = {
  slug: string;
  title: string;
  url: string;
}

export const FEEDS: Feed[] = [
  {
    slug: "recipes",
    title: "The best air fryer receipes",
    url: "https://www.airfryerfanatics.com/blog/feed/",
  }
];

export async function getFeed(feedUrl: string) {
  const parser = new Parser();

  const feed = await parser.parseURL(feedUrl);

  return feed;
}