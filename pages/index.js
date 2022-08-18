import Head from "next/head";
import { FaYoutube, FaTwitch } from "react-icons/fa";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import constants from "../constants";
import Image from "next/image";

const colors = {
  OCaml: "rgb(238 106 26)",
  Reason: "#db4d3f",
  ReScript: "rgba(230,72,79)",
};

const Host = ({ name, twitter, avatar }) => {
  let handler = twitter.replace("https://twitter.com/", "@");
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image src={avatar} alt={name + " face"} width="200" height="250" />
        <p className="text-slate-200 text-base">{name}</p>
      </div>
      <a
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
    <section className="bg-slate-800 pb-16 mb-8 pt-8">
      <div className="layout">
        <div className="flex gap-4">
          <div className="w-full max-w-[50%]">
            <h1 className="mb-6 text-4xl leading-9 text-slate-200">EmelleTV</h1>
            <h2 className="mb-3 text-xl text-slate-200">
              The show to talk about{" "}
              <strong style={{ color: colors.OCaml }}>OCaml</strong>,{" "}
              <strong style={{ color: colors.ReScript }}>ReScript</strong> and{" "}
              <strong style={{ color: colors.Reason }}>Reason</strong>{" "}
              ecosystems
            </h2>
            <h3 className="text-base text-slate-400">
              Where we bring cool members thosecommunities to ask silly
              questions, learn from them and have fun with Hindley-Milner type
              system.
            </h3>
            <div className="mt-14">
              <div className="flex text-xs items-center justify-start gap-4">
                <ListenAtButton
                  Icon={FaTwitch}
                  text="Twitch"
                  hrefy={constants.twitch}
                />
                <ListenAtButton
                  Icon={FaYoutube}
                  text="YouTube"
                  href={constants.youtubee}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-[50%] flex flex-col gap-2 items-end">
            <div>
              <div className="mt-1 flex text-xs items-center justify-start gap-4">
                <Host
                  name={constants.fakenickels.name}
                  twitter={constants.fakenickels.twitter}
                  avatar={constants.fakenickels.avatar}
                />
                <Host
                  name={constants.davesnx.name}
                  twitter={constants.davesnx.twitter}
                  avatar={constants.davesnx.avatar}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ListenAtButton = ({ href, text, Icon, heading }) => {
  return (
    <a
      href={href}
      className="flex items-center py-2 pr-6 pl-2 leading-6 no-underline whitespace-nowrap bg-white rounded-md border border-gray-400 border-solid transition cursor-pointer box-border"
      target="_blank"
      style={{ transform: "matrix(1, 0, 0, 1, 0, -2)" }}
      rel="noreferrer"
    >
      <Icon className="block flex-shrink-0 mr-2 w-auto h-8 text-gray-800 align-middle cursor-pointer" />
      <label className="flex-shrink-0 text-gray-800 cursor-pointer">
        <span className="block text-2xs font-medium leading-none mb-1 text-gray-400 uppercase">
          {heading}
        </span>
        <b className="block mt-px text-base font-bold leading-none">{text}</b>
      </label>
    </a>
  );
};

const WhereToWatch = () => (
  <aside className="order-2 pt-2 leading-6 text-gray-800">
    <h3 className="flex items-end mx-0 mt-0 mb-4 text-sm font-semibold tracking-wide leading-none text-gray-500 uppercase">
      <span className="mr-0 ml-0 font-semibold leading-3 uppercase">
        Where to watch
      </span>
    </h3>
    <div className="flex flex-col gap-2">
      <ListenAtButton
        heading="Watch us live on"
        Icon={FaTwitch}
        text="Twitch"
        href={constants.twitch}
      />
      <ListenAtButton
        heading="Watch past episodes on"
        Icon={FaYoutube}
        text="YouTube"
        href={constants.youtubee}
      />
    </div>
  </aside>
);

const Main = ({ children }) => {
  return (
    <>
      <IntroSection />
      <main className="layout relative leading-6 text-gray-800 lg:px-8 sm:-top-12 sm:mx-auto sm:px-4">
        <section
          className="pt-6 leading-6 text-gray-800 bg-white border-t-0 border-b border-gray-200
      border-solid sm:rounded sm:border-0 md:pt-8 box-border border-x-0"
        >
          <section
            className="px-4 leading-6 text-gray-800 md:px-8"
            style={{ minHeight: "400px" }}
          >
            <div
              className="grid grid-cols-2 grid-flow-col leading-6 text-gray-800 md:gap-y-8"
              style={{
                gap: "1.5rem 3rem",
                gridTemplateColumns: "auto 14rem",
              }}
            >
              <div className="order-1 leading-6 text-gray-800 md:row-span-1">
                <section>{children}</section>
              </div>
              <WhereToWatch />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export const Episode = ({ title, url, description, date, duration, index }) => (
  <div
    className="flex gap-x-4 items-start py-3 px-4 mb-8 text-gray-800 border-gray-300 border-solid box-border border-x-0 border-y"
    style={{ borderWidth: 0, boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
  >
    <button
      title="Play Episode"
      role="button"
      className="flex-shrink-0 p-0 m-0 w-10 h-10 text-center normal-case bg-transparent bg-none duration-200 ease-in-out cursor-pointer text-slate-600 hover:opacity-90"
      style={{
        fontSize: "128%",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter",
      }}
    >
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
          className=""
        />
      </svg>
    </button>
    <button
      title="Pause Episode"
      role="button"
      className="hidden flex-shrink-0 p-0 m-0 w-10 h-10 text-center normal-case bg-transparent bg-none duration-200 ease-in-out cursor-pointer text-slate-600 hover:opacity-90"
      style={{
        display: "none",
        fontSize: "128%",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter",
      }}
    >
      <svg
        role="img"
        className="block align-middle"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "currentcolor" }}
      >
        <path
          fillRule="evenodd"
          d="M16,8 C16,12.4183 12.4183,16 8,16 C3.58172,16 0,12.4183 0,8 C0,3.58172 3.58172,0 8,0 C12.4183,0 16,3.58172 16,8 Z M5,6 C5,5.44772 5.44772,5 6,5 C6.55228,5 7,5.44772 7,6 L7,10 C7,10.5523 6.55228,11 6,11 C5.44772,11 5,10.5523 5,10 L5,6 Z M10,5 C9.4477,5 9,5.44772 9,6 L9,10 C9,10.5523 9.4477,11 10,11 C10.5523,11 11,10.5523 11,10 L11,6 C11,5.44772 10.5523,5 10,5 Z"
          className=""
        />
      </svg>
    </button>
    <div className="flex-grow">
      <h2 className="mx-0 mt-0 mb-1 text-lg font-bold">
        <a
          href={url}
          aria-label={`View episode: ${title}`}
          className="cursor-pointer hover:underline"
        >
          {title}
        </a>
      </h2>
      <p className="mx-0 mt-0 mb-1 text-base leading-7 text-gray-700">
        {description}
      </p>
      <div className="flex flex-wrap gap-x-2 text-xs leading-4 text-gray-400">
        <time className="text-sm leading-5">{date}</time>
        <span className="text-sm leading-5">/</span>
        <span className="text-sm leading-5">{duration}</span>
        <span className="text-sm leading-5">/</span>
        <span className="text-sm leading-5">{index}</span>
      </div>
    </div>
    <a
      href={url}
      className="hidden flex-shrink-0 w-12 h-12 cursor-pointer sm:h-20 sm:w-20"
    >
      <Image
        src="/logo.png"
        className="block w-12 max-w-full h-12 align-middle md:h-20 md:w-20"
        alt="Logo"
        width="100"
        height="100"
      />
    </a>
  </div>
);

const episodes = [
  {
    title:
      "Talking with Gabriel Nordeborn ReScript, Relay and everything else!",
    description: "",
    url: "https://www.youtube.com/watch?v=Cm6xt7CUq7Y",
    date: "2 August 2021",
    duration: "1:08:21",
  },

  {
    title:
      "Talking with António Monteiro about Melange, Esy, Reason, Ocaml and more",
    description: "",
    url: "https://www.youtube.com/watch?v=nYQXV0XwzGw",
    date: "20 August 2021",
    duration: "1:02:37",
  },
  {
    title:
      "Casually talking with Craig Ferguson about OCaml, Mirage, Irmin and more",
    description: "",
    url: "https://www.youtube.com/watch?v=V668Mz-59bE",
    date: "7 September 2021",
    duration: "1:06:57",
  },
  {
    title:
      "Casually talking with Eduardo Rafael about OCaml, Tezos and probably compilers",
    description: "",
    url: "https://www.youtube.com/watch?v=ufwFNJIT7Kc",
    date: "24 September 2021",
    duration: "1:15:12",
  },
  {
    title:
      "Casually talking about ReScript, OSS, and communities with Patrick Ecker",
    description:
      "Patrick (@ryyppy) is working with OSS in ReScript and part thecore team",
    url: "https://www.youtube.com/watch?v=_ybWxXA8A-U",
    date: "20 October 2021",
    duration: "1:12:47",
  },
  {
    title: "Talking with Jaap Frolich about graphql-ppx",
    description:
      "Jaap (@JaapFrolich) is working at Walnut and maintainer graphqlppx",
    url: "https://www.youtube.com/watch?v=6E58xEV8Mos",
    date: "2 November 2021",
    duration: "1:11:23",
  },
  {
    title: "Talking with Oscar about Grain Lang, WASM, PLT and ML",
    description: "Oscar Spencer @oscar_spen is the co-author GrainLang",
    url: "https://www.youtube.com/watch?v=UcqeMJbW3y0",
    date: "8 November 2021",
    duration: "1:02:05",
  },
  {
    title:
      "Casually talking with Gabriel Radanne about OCaml, meta-programming and much more",
    description: `Gabriel "Drup" Radanne researcher at Inria in the CASH research team`,
    url: "https://www.youtube.com/watch?v=VgbZT-NPrcA",
    date: "8 November 2021",
    duration: "1:25:05",
  },
  {
    title:
      "Causally talking with Sean Grove about GraphQL, OneGraph and ReasonML",
    description: `Sean Grove Founder of OneGraph`,
    url: "https://www.youtube.com/watch?v=9-i_7Ldkc_8",
    date: "8 November 2021",
    duration: "1:08:51",
  },
].sort((left, right) => {
  const leftDate = new Date(left.date).toISOString();
  const rightDate = new Date(right.date).toISOString();
  return leftDate > rightDate ? -1 : 1;
});

const Episodes = () => (
  <Main>
    <div className="leading-6 text-gray-800">
      <div className="mb-4 leading-6 text-gray-800">
        <h3 className="flex items-end mx-0 mt-0 mb-4 text-sm font-semibold tracking-wide leading-none text-gray-500 uppercase">
          Latest Episodes
        </h3>
        {episodes.map((episode, index) => (
          <Episode
            key={index}
            title={episode.title}
            description={episode.description}
            date={episode.date}
            duration={episode.duration}
            index={`#${episodes.length - index}`}
            url={episode.url}
          />
        ))}
      </div>
    </div>
  </Main>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>EmelleTV</title>
      </Head>
      <Header />
      <Episodes />
      <Footer />
    </>
  );
}
