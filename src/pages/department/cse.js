import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { links } from "@/dictionary/CSELinks";
import Deptnav from "@/components/navigation/Deptnav";
import AnimatedText from "@/components/AnimatedText";
import Banner from "@/components/banner/Banner";
import {csebanner} from "@/dictionary/Bannerlist";

const cse = () => {
  return (
    <>
      <Head>
        <title>CSE</title>
        <meta name="description" content="Generated by me" />
      </Head>
      <Deptnav links={links} />
      <main className="flex w-full flex-col items-center justify-center z-0">
        <Banner sliderItems={csebanner} />
        <Layout className="!pt-8">
          bshdfblSG
          <AnimatedText text="Passion Fuels Purpose!" className="mb-8" />
          <div className="flex flex-wrap bg-orange-500 w-full">
            yugkuuy
          </div>
          <div className="flex flex-wrap bg-orange-500 w-full">
            yugkuuy
          </div>
          <div className="flex flex-wrap bg-orange-500 w-full">
            yugkuuy
          </div>
          
        </Layout>
      </main>
    </>
  );
};
export default cse;
