import Head from "next/head";

const Footer = () => (
  <footer className="clear-both py-5 px-0 mt-8 leading-5 text-center text-neutral-500">
    <svg style={{ display: "none" }} className="hidden text-center">
      <symbol id="heart" viewBox="0 0 32 29.6" className="text-neutral-500">
        <path
          d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          className=""
        />
      </symbol>
    </svg>
    <div className="text-center">Made with love by EmelleTV</div>
  </footer>
);

const EpisodeItem = ({ edition, title, description, date }) => (
  <li
    className="relative p-0 m-0 text-left border-b border-dotted border-zinc-300"
    style={{ listStyle: "outside none none" }}
  >
    <a
      href="/episodes/server-driven-ui-served-from-behind-the-bar"
      className="block px-0 pt-8 pb-5 w-full h-full text-gray-700 cursor-pointer focus:bg-zinc-300 hover:bg-zinc-300"
      style={{ textDecoration: "none", listStyle: "outside none none" }}
    >
      <div
        className="flex relative flex-wrap items-center px-5 mx-auto leading-6 lg:mx-auto lg:w-4/5"
        style={{ maxWidth: 1100, listStyle: "outside none none" }}
      >
        <div
          className="flex items-center justify-center order-1 my-0 mr-2 ml-0 w-20 h-20 text-2xl text-center border-2 border-gray-700 border-solid"
          style={{
            borderRadius: 85,
            listStyle: "outside none none",
          }}
        >
          <span>{edition}</span>
        </div>
        <h3
          className="order-3 p-0 my-4 mx-0 w-64 text-lg font-bold leading-9"
          style={{ listStyle: "outside none none" }}
        >
          {title}
        </h3>
        <p
          className="absolute top-0 order-2 p-0 my-0 mr-0 ml-24 w-64 text-xs italic text-neutral-500"
          style={{ lineHeight: 10, listStyle: "outside none none" }}
        >
          {date}
        </p>
        <p
          className="order-4 p-0 mt-0 mr-0 mb-4 ml-24 w-full"
          style={{ listStyle: "outside none none" }}
        >
          {description}
        </p>
      </div>
    </a>
  </li>
);

const LatestEpisodes = () => (
  <div className="clear-both my-8 leading-5 text-black">
    <h2
      className="relative py-0 px-5 my-8 mx-auto text-3xl font-normal leading-8 text-gray-700 lg:mx-auto lg:w-4/5"
      style={{ maxWidth: 1100 }}
    >
      Latest episodes
    </h2>
    <div id="target" className="text-black">
      <div className="">
        <ul className="p-0 m-0" style={{ listStyle: "none" }}>
          <EpisodeItem
            edition="1"
            title="Casually talking with Gabriel Nordeborn"
            description="Talking with Gabriel Nordeborn about ReScript Relay"
          />
          <EpisodeItem
            edition="1"
            title="Casually talking with Gabriel Nordeborn"
            description="Talking with Gabriel Nordeborn about ReScript Relay"
          />
          <EpisodeItem
            edition="1"
            title="Casually talking with Gabriel Nordeborn"
            description="Talking with Gabriel Nordeborn about ReScript Relay"
          />
        </ul>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
      </Head>
      <header
        className="table clear-both relative py-5 px-0 mx-0 mt-0 -mb-7 w-full h-auto leading-5 text-gray-700"
        style={{ content: '""' }}
      >
        <div
          className="relative px-5 mx-auto leading-6 lg:mx-auto lg:w-4/5"
          style={{ maxWidth: 1100 }}
        >
          <a href="/" className="cursor-pointer">
            <h1 className="p-0 m-0 text-6xl font-normal">
              <img
                src="#"
                alt="EmelleTV"
                className="block float-left py-4 px-0 my-0 mx-auto text-4xl"
                style={{ maxWidth: 100 }}
              />
            </h1>
          </a>
          <ul
            className="float-right p-0 mx-0 mt-8 mb-0 text-center"
            style={{ maxWidth: "50%" }}
          >
            <li
              className="inline-block p-0 my-0 mr-5 ml-0"
              style={{ listStyle: "outside none none" }}
            >
              <a
                href="/"
                className="uppercase cursor-pointer text-neutral-500 hover:text-sky-400"
                style={{
                  textDecoration: "none",
                  listStyle: "outside none none",
                }}
              >
                Home
              </a>
            </li>
            <li
              className="inline-block p-0 my-0 mr-5 ml-0"
              style={{ listStyle: "outside none none" }}
            >
              <a
                href="/about/"
                className="uppercase cursor-pointer text-neutral-500 hover:text-sky-400"
                style={{
                  textDecoration: "none",
                  listStyle: "outside none none",
                }}
              >
                About
              </a>
            </li>
            <li
              className="inline-block p-0 m-0"
              style={{ listStyle: "outside none none" }}
            >
              <a
                href="https://twitch.tv/emelletv"
                className="uppercase cursor-pointer text-neutral-500 hover:text-sky-400"
                style={{
                  textDecoration: "none",
                  listStyle: "outside none none",
                }}
              >
                Subscribe
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className="clear-both my-8 leading-5 text-black">
        <h2
          id="heading"
          className="relative py-0 px-5 my-8 mx-auto text-3xl font-normal leading-8 text-gray-700 lg:mx-auto lg:w-4/5"
        />
        <div className="clear-both py-16 px-10 text-center bg-gray-700 text-zinc-300">
          <div className="my-0 mx-auto text-zinc-300" style={{ maxWidth: 690 }}>
            <h1 className="p-0 mx-0 mt-0 mb-4 text-2xl font-normal leading-10">
              EmelleTV
            </h1>
            <p className="p-0 mx-0 mt-0 mb-4 w-full">
              Where we talk about OCaml, ReScript and Reason ecosystems to ask
              silly questions, learn about great developers and have fun with
              Hindley–Milner type systems.
            </p>
            <a
              href="https://twitch.tv/emelletv"
              className="inline-block py-2 px-4 w-full h-full border-2 border-solid cursor-pointer border-sky-400 text-sky-400 focus:border-2 focus:border-solid focus:border-zinc-300 focus:bg-zinc-300 focus:text-gray-700 hover:border-2 hover:border-solid hover:border-zinc-300 hover:bg-zinc-300 hover:text-gray-700"
              style={{
                textDecoration: "none",
                borderRadius: 10,
                maxWidth: 140,
              }}
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>

      <LatestEpisodes />
      <Footer />
    </div>
  );
}
