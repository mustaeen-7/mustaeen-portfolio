"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 xl:px-48 lg:flex-row ">
        {/* Image conatiner */}
        <div className="h-1/2  lg:h-full lg:w-1/2 relative sm:mb-10 sm:pb-5">
          <Image src="/myhero.png" alt="" fill className="object-contain " />
        </div>
        {/* text-container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center gap-8">
          {/* title */}
          <h1 className="ml-0 flex-col text-4xl md:6xl font-bold flex items-start ">
            Hello Everyone! I am Mustaeen.
          </h1>
          {/* Des */}
          <p>
            Welcome to my portfolio.With a keen eye for aesthetics my portfolio
            showcases a diverse collection of projects that reflect my
            commitment to excellence
          </p>
          {/* Buttons */}
          <div className=" w-full flex gap-4 justify-center">
            <Link href="/portfolio">
              <button className="p-4 rounded ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded ring-1">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
