import Head from "next/head";
import { FaYoutube, FaTwitch } from "react-icons/fa";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import constants from "../constants";

const colors = {
  OCaml: "rgb(238, 106, 26)",
  Reason: "rgb(219, 77, 63)",
  ReScript: "rgb(230, 72, 79)",
};

const PlayIcon = () => {
  return (
    <svg
      role="img"
      className="block align-middle"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        d="M8,16 C12.4183,16 16,12.4183 16,8 C16,3.58172 12.4183,0 8,0 C3.58172,0 0,3.58172 0,8 C0,12.4183 3.58172,16 8,16 Z M7.5547,5.16795 C7.24784,4.96338 6.8533,4.94431 6.52814,5.11833 C6.20298,5.29235 6,5.63121 6,6.00000106 L6,10.0000011 C6,10.3688 6.20298,10.7077 6.52814,10.8817 C6.8533,11.0557 7.24784,11.0366 7.5547,10.8321 L10.5547,8.8321 C10.8329,8.6466 11,8.3344 11,8.00000106 C11,7.66565 10.8329,7.35342 10.5547,7.16795 L7.5547,5.16795 Z"
      />
    </svg>
  );
};

const PlayButton = () => {
  return (
    <button
      title="Play Episode"
      role="button"
      className="flex-shrink-0 p-0 m-0 w-10 h-10 text-center normal-case bg-transparent bg-none duration-200 ease-in-out text-slate-200 hover:opacity-90"
      style={{
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter",
      }}
    >
      <PlayIcon />
    </button>
  );
};

export const getStaticProps = async () => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
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
};

const Host = ({ name, twitter, avatar }) => {
  let handler = twitter.replace("https://twitter.com/", "@");
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={avatar} alt={name + " face"} width="200" height="250" />
        <p className="text-slate-200 text-base">{name}</p>
      </div>
      <a
        target={"_blank"}
        rel="noreferrer"
        className="text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-3xl"
        href={twitter}
      >
        {handler}
      </a>
    </div>
  );
};

const IntroSection = () => {
  return (
    <section className="bg-slate-800 pb-8 pt-8">
      <div className="layout">
        <div className="flex gap-8 md:gap-4 flex-col md:flex-row">
          <div className="w-full md:max-w-[50%]">
            <h1 className="mb-6 text-4xl leading-9 text-slate-200">EmelleTV</h1>
            <h2 className="mb-3 text-xl text-slate-200">
              The show to talk about{" "}
              <strong style={{ color: colors.OCaml }}>OCaml</strong>,{" "}
              <strong style={{ color: colors.ReScript }}>ReScript</strong> and{" "}
              <strong style={{ color: colors.Reason }}>Reason</strong>{" "}
              ecosystems
            </h2>
            <h3 className="text-base text-slate-400">
              We bring cool members those communities to ask silly questions,
              learn from them and have fun with Hindley-Milner type system.
            </h3>
            <div className="md:mt-14 mt-8">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <Button
                  color="text-slate-200 hover:brightness-125"
                  backgroundColor={"bg-twitch"}
                  Icon={FaTwitch}
                  text="Twitch"
                  href={constants.twitch.url}
                />
                <Button
                  color="text-slate-200 hover:brightness-125"
                  backgroundColor={"bg-youtube"}
                  Icon={FaYoutube}
                  text="YouTube"
                  href={constants.youtube.url}
                />
              </div>
            </div>
          </div>

          <div className="w-full md:max-w-[50%] flex flex-col gap-2 items-center md:items-end">
            <div>
              <div className="flex text-xs items-center justify-start gap-4">
                <Host
                  name={constants.authors.fakenickels.name}
                  twitter={constants.authors.fakenickels.twitter}
                  avatar={constants.authors.fakenickels.avatar}
                />
                <Host
                  name={constants.authors.davesnx.name}
                  twitter={constants.authors.davesnx.twitter}
                  avatar={constants.authors.davesnx.avatar}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Main = ({ children }) => {
  return (
    <>
      <IntroSection />
      <div className="mt-8">
        <main className="layout relative leading-6 text-gray-800">
          <section
            className="leading-6 text-gray-800"
            style={{ minHeight: "400px" }}
          >
            <div
              className="flex leading-6 text-gray-800 md:gap-y-8"
              style={{
                gap: "1.5rem 3rem",
                gridTemplateColumns: "auto 14rem",
              }}
            >
              <div className="w-full leading-6 text-gray-800 md:row-span-1">
                <section>{children}</section>
              </div>
              <Sidebar />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export const Episode = ({
  thumbnail,
  title,
  url,
  description,
  date,
  index,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    aria-label={`View episode: ${title}`}
    className="cursor-pointer"
  >
    <div className="flex flex-col items-start text-slate-200 rounded-md bg-black hover:brightness-125">
      {thumbnail && thumbnail.url ? (
        <div className="mask-thumbnail">
          <img src={thumbnail.url} alt={title} />
        </div>
      ) : null}

      <div className="flex gap-4 py-3 px-4 items-center">
        <PlayButton />
        <div className="flex-grow">
          <h2 className="mx-0 mt-0 mb-1 text-lg font-bold">{title}</h2>
          <p className="mx-0 mt-0 mb-1 text-base leading-7 text-gray-700">
            {description}
          </p>
          <div className="flex flex-wrap gap-x-2 text-xs leading-4 text-gray-400">
            <span className="text-sm leading-5">{"#" + index}</span>
            <span className="text-sm leading-5">/</span>
            <time className="text-sm leading-5">
              {new Date(date).toLocaleDateString()}
            </time>
          </div>
        </div>
      </div>
    </div>
  </a>
);

const Episodes = ({ episodes }) => (
  <Main>
    <div className="leading-6 text-gray-800">
      <div className="mb-4 leading-6 text-gray-800">
        <h3 className="flex items-end mx-0 mt-0 mb-4 text-sm font-semibold tracking-wide leading-none text-gray-500 uppercase">
          Latest Episodes
        </h3>
        <div className="flex flex-col gap-4">
          {episodes.map((episode, index) => (
            <Episode
              key={episode.position}
              title={episode.title}
              date={episode.publishedAt}
              index={episodes.length - index + 1}
              url={`https://www.youtube.com/watch?v=${episode.resourceId.videoId}&ab_channel=EmelleTV`}
              thumbnail={episode.thumbnails.standard}
              /* Current descriptions are formatted for YouTube, they don't make sense. If we get some subtitles, we should add them here. */
              description={""}
            />
          ))}
        </div>
      </div>
    </div>
  </Main>
);

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>EmelleTV</title>
      </Head>
      <Header />
      <Episodes episodes={props.episodes} />
      <Footer />
    </>
  );
}
