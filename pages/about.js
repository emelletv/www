import Head from "next/head";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import constants from "../constants";

const Main = ({ children }) => {
  return (
    <main className="layout relative flex-1">
      <section className="pt-6 bg-white md:pt-8">
        <div className="flex gap-8">
          <div className="w-full prose prose-h1:text-4xl prose-h1:leading-10 prose-h1:font-normal prose-h2:font-normal prose-h3:font-normal prose-a:font-semibold prose-a:underline prose-a:cursor-pointer prose-a:text-neutral-800">
            <section>{children}</section>
          </div>
          <Sidebar />
        </div>
      </section>
    </main>
  );
};

const About = () => (
  <Main>
    <h1>About us</h1>
    <p>
      EmelleTV is a show where we bring brains from the ML community to talk
      about their visions and goals in a very casual conversation. EmelleTV is
      hosted by{" "}
      <a href={constants.authors.davesnx.twitter}>
        {constants.authors.davesnx.name}
      </a>
      {"."}
      <p>
        We often chat casually about interesting topics related with OCaml,
        Reason or ReScript ecosystems but open to any other engineering topic or
        Programming language.
      </p>
      <p>
        It lasts about 1 hour and a half and it is streamed live on Twitch, and
        published the VOD in YouTube.
      </p>
      <p>
        To give feedback, ask any question or suggest a guest. Please{" "}
        <a href={constants.twitter.url}>DM us on Twitter</a>.
      </p>
    </p>
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
