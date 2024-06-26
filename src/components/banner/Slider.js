import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedTextWord from "../AnimatedTextWord";

const Slider = ({ clients }) => {
  const [current, setCurrent] = useState(0);
  const previous = () => {
    setCurrent(current === 0 ? clients.length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === clients.length - 1 ? 0 : current + 1);
  };
  let slideInterval;
  useEffect(() => {
    slideInterval = setTimeout(() => {
      setCurrent(current === clients.length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearTimeout(slideInterval);
  });
  const pause = () => {
    clearTimeout(slideInterval);
  };
  const resume = () => {
    slideInterval = setTimeout(next, 5000);
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-hidden relative">
        {clients.map(
          (item, index) =>
            index === current && (
              <div key={index} onMouseEnter={pause} onMouseLeave={resume}>
                <div className="transition-all ease-out duration-500">
                  <div className=" pb-[20px] flex llg:items-start">
                    <div className="inline text-center ">
                      <AnimatedTextWord
                        text={item.msg}
                        className="text-3xl text-accent inline font-bold text-center font-serif italic pt-3"
                      />
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-6 items-center py-4 px-10">
                    <motion.div
                      className="rounded-[50%] border border-transparent p-2 shadow-inside-shadow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeIn", delay: 0.2, duration: 2 }}
                    >
                      <Image
                        width={2000}
                        height={2000}
                        src={item.pic}
                        alt="1"
                        className=" w-40 h-40 rounded-[50%] border border-transparent shadow-outside-shadow"
                      />
                    </motion.div>
                    <div className=" pb-8">
                      <motion.h2
                        className="font-serif text-[22px] text-center font-medium pl-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          ease: "easeIn",
                          delay: 0.6,
                          duration: 2.5,
                        }}
                      >
                        {item.nme}
                      </motion.h2>
                      {/* <AnimatedTextWord text={item.nme} className="font-serif text-[22px] font-medium pl-2" /> */}
                      <motion.span
                        className=" font-sans text-base text-center font-normal pl-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeIn", delay: 1, duration: 3 }}
                      >
                        {item.desig}
                      </motion.span>
                    </div>
                  </div>
                  {/* <div className="absolute bottom-0 m-1 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                      {clients.map((s, i) => (
                        <div
                          key={i}
                          className={`transition-all w-2 h-2 bg-black rounded-full  ${
                            current === i
                              ? "p-0.5 scale-125"
                              : "bg-opacity-50 scale-75"
                          }`}
                        />
                      ))}
                    </div>
                  </div> */}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-2">
                  <button
                    onClick={previous}
                    className=" bg-white rounded-[50%] shadow-inside-shadow hover:scale-125 duration-300 ease-in-out transition-all"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={next}
                    className=" bg-white rounded-[50%] shadow-inside-shadow hover:scale-125 duration-300 ease-in-out transition-all"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Slider;
