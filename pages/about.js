import Head from "next/head";
import { FaYoutube, FaTwitch } from "react-icons/fa";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import constants from "../constants";

const ListenAtButton = ({ href, text, Icon }) => {
  return (
    <a
      href={href}
      className="flex items-center py-2 pr-6 pl-2 mr-3 mb-3 w-3/4 leading-6 no-underline whitespace-nowrap bg-white rounded-md border border-gray-400 border-solid transition cursor-pointer box-border"
      target="_blank"
      rel="noreferrer"
      style={{ transform: "matrix(1, 0, 0, 1, 0, -2)" }}
    >
      <Icon className="block flex-shrink-0 mr-2 w-auto h-8 text-gray-800 align-middle cursor-pointer" />
      <label className="flex-shrink-0 text-gray-800 cursor-pointer">
        <span className="block text-xs font-medium tracking-wide leading-none text-gray-500 uppercase">
          Watch On
        </span>
        <b className="block mt-px text-base font-bold leading-none">{text}</b>
      </label>
    </a>
  );
};

const WhereToWatch = () => (
  <aside className="order-2 pt-2 leading-6 text-gray-800">
    <h3 className="flex items-end mx-0 mt-0 mb-4 text-sm font-semibold tracking-wide leading-none text-gray-500 uppercase">
      <svg
        role="img"
        className="block flex-shrink-0 w-5 h-5 font-semibold leading-3 uppercase align-middle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ fill: "currentcolor" }}
      >
        <g id="headphones" className="tracking-wide uppercase">
          <path
            d="M7,12a3,3,0,0,0-3,3v6a3,3,0,0,0,6,0V15A3,3,0,0,0,7,12Zm10,0a3,3,0,0,0-3,3v6a3,3,0,0,0,6,0V15A3,3,0,0,0,17,12ZM12,0A12,12,0,0,0,0,12v5a1,1,0,0,0,2,0V12a10,10,0,0,1,20,0v5a1,1,0,0,0,2,0V12A12,12,0,0,0,12,0Z"
            className="leading-3 uppercase"
          />
        </g>
      </svg>
      <span className="mr-0 ml-2 font-semibold leading-3 uppercase">
        Where to watch
      </span>
    </h3>
    <div className="flex flex-col gap-1">
      <ListenAtButton Icon={FaTwitch} text="Twitch" href={constants.twitch} />
      <ListenAtButton
        Icon={FaYoutube}
        text="YouTube"
        href={constants.youtube}
      />
    </div>
  </aside>
);

const Main = ({ children }) => {
  return (
    <main className="layout relative leading-6">
      <section
        className="pt-6 leading-6 text-gray-800 bg-white border-t-0 border-b border-gray-200
      border-solid sm:rounded sm:border-0 md:pt-8 box-border border-x-0"
      >
        <section
          className="leading-6 text-gray-800"
          style={{ minHeight: "400px" }}
        >
          <div
            className="grid md:grid-cols-2 md:grid-flow-col leading-6 text-gray-800 md:gap-y-8"
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
  );
};

const About = () => (
  <Main>
    <div className="order-1 text-lg leading-8 text-gray-800 md:row-span-1">
      EmelleTV is a show where we bring brains from the ML community to talk
      about their visions and goals in a very casual conversation.
      <br className="leading-8" />
      <br className="leading-8" />
      EmelleTV is hosted by{" "}
      <a
        href={constants.davesnx.twitter}
        className="font-semibold underline cursor-pointer text-neutral-800 hover:opacity-80"
      >
        {constants.davesnx.name}
      </a>{" "}
      and{" "}
      <a
        href={constants.fakenickels.twitter}
        className="font-semibold underline cursor-pointer text-neutral-800 hover:opacity-80"
      >
        {constants.fakenickels.name}
      </a>
      .
      <br className="leading-8" />
      Feedbacks, questions, schedule an interview
      <br className="leading-8" />
      <a
        href={constants.twitter}
        className="font-semibold underline cursor-pointer text-neutral-800 hover:opacity-80"
      >
        DM us on Twitter
      </a>
      .
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
      <About />
      <Footer />
    </>
  );
}
