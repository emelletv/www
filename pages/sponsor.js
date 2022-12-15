import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
/* import { Sidebar } from "../components/Sidebar";
import constants from "../constants";
import Image from "next/image"; */

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

export default function SponsorPage() {
  return (
    <>
      <Head>
        <title>EmelleTV | Sponsor</title>
      </Head>
      <Header />
      <div>
        <h1 className="mb-6 text-4xl leading-10 text-slate-800">Sponsor</h1>
        <div className="text-lg leading-8 text-gray-800 md:row-span-1">
          EmelleTV Patreon page
        </div>
      </div>
      <Footer />
    </>
  );
}
