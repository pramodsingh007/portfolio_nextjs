import Image from "next/image";
import html from "@/assets/images/html.svg";
import css from "@/assets/images/css3.svg";
import reactjs from "@/assets/images/reactjs.svg";
import javascript from "@/assets/images/javascript.svg";
import tailwind from "@/assets/images/tailwind.png";
import git from "@/assets/images/git.svg";
import node from "@/assets/images/nodejs.png";
import nextjs from "@/assets/images/nextdotjs.svg";
import firebase from "@/assets/images/firebase.svg";
import mongodb from "@/assets/images/mongodb.png";
import bucket from "@/assets/images/bucket.png";
import spiral from "@/assets/images/spiral.png";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div
      className=" bg-[#292930]  py-28 lg:pr-20 lg:pl-20 pl-5 pr-5 relative "
      name="skills"
    >
      <div className=" text-slate-300 text-lg flex items-center justify-center">
        <div className=" w-3 h-3 bg-yellow-400  mr-2 rounded-full"></div>I'm
        Expert In
      </div>
      <h1 className=" text-3xl font-bold text-center text-white mt-3">
        Skills
      </h1>
      <div className=" flex justify-center mt-12">
        <div className=" grid lg:grid-cols-5 md:grid-cols-5 grid-cols-4 gap-12 max-w-3xl">
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={html}
            alt="html"
            width={80}
            height={80}
          />
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={css}
            alt="css"
            width={80}
            height={80}
          />
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={javascript}
            alt="javascript"
            width={80}
            height={80}
          />
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={reactjs}
            alt="react"
            width={80}
            height={80}
          />
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={tailwind}
            alt="tailwind"
            width={80}
            height={80}
          />
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={git}
            alt="git"
            width={80}
            height={80}
          />
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={node}
            alt="node"
            width={80}
            height={80}
          />
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={nextjs}
            alt="nextjs"
            width={80}
            height={80}
          />
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={firebase}
            alt="firebase"
            width={80}
            height={80}
          />
          <Image
            className=" hover:scale-125 transition-all duration-500 cursor-pointer"
            src={mongodb}
            alt="mongodb"
            width={80}
            height={80}
          />
        </div>
      </div>
      <motion.div
        animate={{ y: 150, type: "spring" }}
        transition={{
          duration: 5,
          repeatDelay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className=" absolute top-4 w-12 lg:w-auto md:w-auto  left-4"
      >
        <Image src={bucket} alt="bucket" width={80} height={80} />
      </motion.div>

      <motion.div
        className=" w-12 lg:w-auto md:w-auto absolute bottom-4 right-4"
        animate={{ y: -150 }}
        transition={{
          duration: 5,
          repeatDelay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image src={spiral} alt="spiral" width={80} height={80} />
      </motion.div>
    </div>
  );
}
