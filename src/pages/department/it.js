import Head from "next/head";
import Layout from "@/components/Layout";
import { links } from "@/dictionary/ITLinks";
import Deptnav from "@/components/navigation/Deptnav";

const it = () => {
  return (
    <>
      <Head>
        <title>CSE</title>
        <meta name="description" content="Generated by me" />
      </Head>
      <Deptnav links={links} />
      <main className="flex items-center text-dark w-full min-h-screen">
      
        <div>
          <Layout className="!py-0">
            
            <div className="flex flex-wrap items-center justify-between w-full">
              <div className="xll:w-1/2 flex flex-col items-center self-center">
                {/* <p className='my-2 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p> */}
                <div
                  className="flex items-center self-start mt-1 z-30"                 
                >
                  
                </div>
        
              </div>
            </div>
          </Layout>
        </div>
      </main>
    </>
  );
};
export default it;
