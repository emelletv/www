import Head from "next/head";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import constants from "../constants";

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
            <div className="leading-6 text-gray-800 md:row-span-1">
              <section>{children}</section>
            </div>
            <Sidebar />
          </div>
        </section>
      </section>
    </main>
  );
};

const About = () => (
  <Main>
    <h1 className="mb-6 text-4xl leading-10 text-slate-800">About us</h1>
    <div className="text-lg leading-8 text-gray-800 md:row-span-1">
      EmelleTV is a show where we bring brains from the ML community to talk
      about their visions and goals in a very casual conversation.
      <br className="leading-8" />
      <br className="leading-8" />
      EmelleTV is hosted by{" "}
      <a
        href={constants.authors.davesnx.twitter}
        className="font-semibold underline cursor-pointer text-neutral-800 hover:opacity-80"
      >
        {constants.authors.davesnx.name}
      </a>{" "}
      and{" "}
      <a
        href={constants.authors.fakenickels.twitter}
        className="font-semibold underline cursor-pointer text-neutral-800 hover:opacity-80"
      >
        {constants.authors.fakenickels.name}
      </a>
      .
      <br className="leading-8" />
      Feedbacks, questions, schedule an interview
      <br className="leading-8" />
      <a
        href={constants.twitter.url}
        className="font-semibold underline cursor-pointer text-neutral-800 hover:opacity-80"
      >
        DM us on Twitter
      </a>
      .
    </div>
  </Main>
);

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>EmelleTV | About us</title>
      </Head>
      <Header />
      <About />
      <Footer />
    </>
  );
}
