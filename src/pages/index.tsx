// IMPORTS
import { type NextPage } from "next";
// import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

// COMPONENTS
import Head from "next/head";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import CardStack from "../components/CardStack";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import HeroCards from "../components/HeroCards";
import FormSection from "../components/FormSection";
import TestimonialFeed from "../components/TestimonialFeed";
import Industries from "../components/Industries";
import Modal from "../components/Modal";
import Slider from "../components/Slider";
import Testing from "../components/Testing";

const Home: NextPage = (props) => {
  const trpcMessage = trpc.api.alert.useQuery({
    title: "Alert:",
    msg: "Hello World, from tRPC.",
  });

  return (
    <>
      <Head>
        <title>Rugged Development</title>
        <meta name="description" content="Generated by T3D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="top" className="bg-neutral-800">
        <Alert
          title={trpcMessage.data?.title ?? "loading..."}
          msg={trpcMessage.data?.msg}
        />
        <Navbar />

        {/* <div className="flex items-center justify-center"> */}
        {/* <Modal /> */}
        {/* </div> */}

        <Hero
          title="Rugged Development"
          description="We supply, deploy, and support innovative technology
that will optimize efficiency and increase profitability."
        />

        <HeroCards />
        <Solutions />
        <CardStack />
        <Industries />
        <Partners />
        <TestimonialFeed />
        <FormSection />
        <Footer />
      </div>
    </>
  );
};
export default Home;
