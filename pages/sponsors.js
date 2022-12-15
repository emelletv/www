import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

/* export const getStaticProps = async () => {
  const PATREON_API_KEY = process.env.PATREON_API_KEY;
  const channelId = "UCvVVfCa7-nzSuCdMKXnNJNQ";

  return fetch(
    `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${YOUTUBE_API_KEY}&part=contentDetails`
  )
    .then((response) => response.json())
    .then((data) => {
      const uploadsId = data.items[0].contentDetails.relatedPlaylists.uploads;
      return fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${uploadsId}&key=${YOUTUBE_API_KEY}&part=snippet&maxResults=50`
      )
        .then((response) => response.json())
        .then((data) => ({
          props: {
            episodes: data.items
              .map((i) => i.snippet)
              .sort((left, right) => {
                const leftDate = new Date(left.publishedAt).toISOString();
                const rightDate = new Date(right.publishedAt).toISOString();
                return leftDate > rightDate ? -1 : 1;
              }),
          },
        }))
        .catch((error) => ({ props: { error, episodes: [] } }));
    })
    .catch((error) => ({ props: { error, episodes: [] } }));
}; */

const Main = ({ children }) => {
  return (
    <main className="layout relative flex-1">
      <section className="pt-6 text-gray-800 bg-white md:pt-8">
        <div className="flex text-gray-800">
          <article className="w-full text-gray-800 prose prose-h1:text-4xl prose-h1:leading-10 prose-h1:font-normal prose-h2:font-normal prose-h3:font-normal prose-a:font-semibold prose-a:underline prose-a:cursor-pointer prose-a:text-neutral-800">
            {children}
          </article>
        </div>
      </section>
    </main>
  );
};

export default function SponsorsPage() {
  return (
    <>
      <Head>
        <title>EmelleTV | Sponsors</title>
      </Head>
      <Header />
      <Main>
        <h1>Sponsors</h1>
        <p>
          This page is dedicated to all our sponsors. We are grateful for your
          support.
        </p>
        <h2>Sponsors</h2>
        <p>
          This page is dedicated to all our sponsors. We are grateful for your
          support.
        </p>
      </Main>
      <Footer />
    </>
  );
}
