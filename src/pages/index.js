import Head from "next/head";
import Link from "next/link";
//import components
import Layout from "@/components/Layout";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";
import Event from "@/components/banner/Event";
import AnimatedText from "@/components/AnimatedText";

//dictionary import
import { homebanner } from "@/dictionary/Bannerlist";
import { links } from "@/dictionary/EventLinks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vishal Kumar Sinha</title>
        <meta name="description" content="Generated by me" />
      </Head>
      <Nav />
      <main className="flex w-full flex-col items-center justify-center">
        <Banner sliderItems={homebanner} />
        <Layout className="!pt-8">
          <AnimatedText text="Passion Fuels Purpose!" className="my-8" />
          <div className="grid grid-cols-2 gap-5 smmy:grid-cols-1">
            <div className=" bg-red-300 p-2 rounded-2xl">
              <div className=" flex mx-2 justify-center ">
                <AnimatedText
                  text="Announcements"
                  className="!text-4xl text-left ml-2"
                />
                <Link href="/" className="group" ><AnimatedText
                  text="View&nbsp;all"
                  className="!text-xl mt-2 px-2 rounded-2xl font-normal ease-in-out transition-all duration-200 group-hover:text-white group-hover:bg-black/20 max-w-fit ml-2"
                /></Link>
              </div>
              <div className=" overflow-y-auto bg-slate-500 rounded-lg mx-2">
                dvsv
              </div>
            </div>
            <div className=" bg-slate-400/60 p-2 rounded-2xl">
              <div className=" flex mx-2 justify-center ">
                <AnimatedText
                  text="Events"
                  className="!text-4xl text-left ml-2"
                />
                <Link href="/events" className="group" ><AnimatedText
                  text="View&nbsp;all"
                  className="!text-xl mt-2 px-2 rounded-2xl font-normal ease-in-out transition-all duration-200 group-hover:text-white group-hover:bg-black/20 max-w-fit ml-2"
                /></Link>
              </div>
              <div className="px-2">
                <Event sliderItems={links} />
              </div>
            </div>
          </div>
          <AnimatedText text="About us" className="my-8" />
          <div className="flex flex-wrap bg-orange-500 rounded-2xl p-4 w-full">
            Nisi labore officia consectetur do ex Lorem dolore fugiat est consequat. Fugiat sint aute qui non. Mollit ullamco occaecat velit et commodo cillum deserunt dolor reprehenderit adipisicing. Deserunt magna aliquip minim dolore dolor consequat ipsum esse ut proident. Qui esse reprehenderit tempor ad ullamco commodo ullamco est exercitation nisi qui id. Nostrud occaecat eiusmod nostrud elit fugiat culpa deserunt dolor dolor elit deserunt incididunt. Incididunt aute do voluptate dolor irure cillum sint minim.
          </div>
          <AnimatedText text="News" className="my-8" />
          <div className="flex flex-wrap h-60 bg-orange-500 w-full">
            yugkuuy
          </div>
        </Layout>
      </main>
    </>
  );
}
