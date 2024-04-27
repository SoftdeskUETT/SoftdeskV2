import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Cabinet from "./components/Home/Cabinet";
import Heads from "./components/Home/Heads";
import Courses from "./components/Home/Courses";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
        <title>Lost Nest</title>
        <meta
          name="description"
          content="Lost and Found Hub for University Students"
        />
        <link rel="icon" href="/images/LostNestLogo.svg" />
      </Head>
      <Hero />
      {/* About softdesk */}
      <About />
      {/* Meet the cabinet */}
      <Cabinet />
      {/* Connect with Heads */}
      <Heads />
      {/* Courses */}
      <Courses />
    </>
  );
}
