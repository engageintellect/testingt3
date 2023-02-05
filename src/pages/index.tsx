// IMPORTS
import { type NextPage } from "next";
// import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

// COMPONENTS
import Head from "next/head";
// import Alert from "../components/Alert";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Solutions from "../components/Solutions";
import Partners from "../components/Partners";
import HeroCards from "../components/HeroCards";
import FormSection from "../components/FormSection";
import TestimonialFeed from "../components/TestimonialFeed";
import Industries from "../components/Industries";
import Financing from "../components/Financing";
import Products from "../components/Products";
import Alert from "../components/Alert";
import SlideUp from "../components/SlideUp";

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Rugged Development</title>
        <meta name="description" content="Generated by T3D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title="Rugged Development"
        description="We supply, deploy, and support technology designed to for the most demanding environments on earth."
      />

      <div className="bg-neutral-900">
        <HeroCards />
        <AboutUs />
        <SlideUp component={<Solutions />} />
        <SlideUp component={<Industries />} />
        <SlideUp component={<Products />} />
        <Partners />
        <SlideUp component={<TestimonialFeed />} />
        <Financing />
        <FormSection />
      </div>
    </>
  );
};
export default Home;
