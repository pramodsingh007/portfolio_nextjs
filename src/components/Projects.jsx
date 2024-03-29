import Image from "next/image";
import fileFlow from "@/assets/images/file-flow.png";
import docBooker from "@/assets/images/doc-booker.png";
import vantena from "@/assets/images/vantena.png";
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
import github from "@/assets/images/github.svg";
import arrow from "@/assets/images/arrow.png";
import bulb from "@/assets/images/bulb.png";
import lamp from '@/assets/images/lamp.png';
import Link from "next/link";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section name="projects" className="lg:p-20 p-5 relative pb-20 pt-20">
      <div className=" text-slate-700 font-medium text-lg flex items-center justify-center">
        <div className=" w-3 h-3 bg-yellow-400  mr-2 rounded-full"></div>
        Projects
      </div>
      <h1 className="text-4xl font-bold mt-4 text-center relative">
        <span className="text-[#5956e9]">Recent</span>{" "}
        <span className="absolute bottom-[-1rem] w-36 h-2 bg-yellow-400"></span>{" "}
        Projects
      </h1>

      <div className=" flex justify-center">
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-24 gap-16 lg:gap-24 mt-24 items-center max-w-[60rem]">
          
          <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:0.3}} className=" sm:order-2 max-sm:order-2 order-none float-left sm:float-none">
            <h1 className="lg:text-3xl md:text-3xl text-2xl font-bold ">Doc Booker</h1>
            <p>
            Doctor Appointment Booking web app using the MERN stack with roles for patients, doctors, and
administrators. Designed to simplify the appointment process for patients, doctors, and administrators.
            </p>
            <div className=" flex space-x-3 mt-4">
              <Image src={html} alt="html" width={20} height={20} />
              <Image src={css} alt="css" width={20} height={20} />
              <Image src={reactjs} alt="reactjs" width={20} height={20} />
              <Image src={node} alt="node" width={20} height={20} />
              <Image src={firebase} alt="firebase" width={20} height={20} />
              <Image src={mongodb} alt="mongodb" width={20} height={20} />
            </div>
            <div className="mt-8 flex space-x-4">
              <Link target="_blank" href={"https://github.com/pramodsingh007/doc-booker"}>
                <Image src={github} alt="github" width={30} height={30} />
              </Link>
              <Link className=" hover:-rotate-45 duration-300" target="_blank" href={"https://docbooker-5a70c.web.app/"}>
                <Image src={arrow} alt="arrow" width={30} height={30} />
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:0.3}} className="flex lg:justify-end md:justify-end justify-center  sm:order-1 order-none">
            <Image
              className=" hover:scale-110 duration-500 shadow-md rounded-md shadow-slate-500 "
              src={docBooker}
              alt="docbooker"
              width={300}
              height={300}
            />
          </motion.div>

{/* ***************************************************************************************************          */}

          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:0.3}} className=" float-left sm:float-none  lg:order-3 md:order-3 sm:order-4 max-sm:order-4 ">
            <h1 className="lg:text-3xl md:text-3xl text-2xl font-bold ">File Flow</h1>
            <p>
            File flow is file sharing web application built on the MERN stack—a powerful
combination of technologies that ensures seamless performance and a robust user experience.
In this application anyone can upload there file and generate shareable link to download the file.

            </p>
            <div className=" flex space-x-3 mt-4">
              <Image src={html} alt="html" width={20} height={20} />
              <Image src={css} alt="css" width={20} height={20} />
              <Image src={reactjs} alt="reactjs" width={20} height={20} />
              <Image src={node} alt="node" width={20} height={20} />
              <Image src={firebase} alt="firebase" width={20} height={20} />
              <Image src={mongodb} alt="mongodb" width={20} height={20} />
            </div>
            <div className="mt-8 flex space-x-4">
              <Link target="_blank" href={"https://github.com/pramodsingh007/file-flow.git"}>
                <Image src={github} alt="github" width={30} height={30} />
              </Link>
              <Link className=" hover:-rotate-45 duration-300" target="_blank" href={"https://file-flow-c0ae5.web.app"}>
                <Image src={arrow} alt="arrow" width={30} height={30} />
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:0.3}} className="flex lg:justify-start md:justify-start lg:order-4 md:order-4 sm:order-3 max-sm:order-3 justify-center">
            <Image
              className=" hover:scale-110 duration-500 shadow-md rounded-md shadow-slate-500 "
              src={fileFlow}
              alt="fileflow"
              width={300}
              height={300}
            />
          </motion.div>

{/* ******************************************************************************************** */}

          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:0.3}} className="flex lg:justify-end md:justify-end justify-center order-none sm:order-5 max-sm:order-5">
            <Image
              className=" hover:scale-110 duration-500 shadow-md shadow-slate-500 "
              src={vantena}
              alt="vantena"
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:0.3}} className=" float-left sm:float-none order-none sm:order-6 max-sm:order-6">
            <h1 className="lg:text-3xl md:text-3xl text-2xl font-bold ">Vantena</h1>
            <p>
            Vantena is a Platform for Bussinesses and Startups,Come up with any startup idea, we will help you with best technical solution.
            This is the  website i build for my client as a freelancer.
            
            </p>
            <div className=" flex space-x-3 mt-4">
              <Image src={html} alt="html" width={20} height={20} />
              <Image src={css} alt="css" width={20} height={20} />
              <Image src={reactjs} alt="reactjs" width={20} height={20} />
              <Image src={tailwind} alt="tailwind" width={20} height={20} />
              <Image src={node} alt="node" width={20} height={20} />
              <Image src={firebase} alt="firebase" width={20} height={20} />
              <Image src={mongodb} alt="mongodb" width={20} height={20} />
            </div>
            <div className="mt-8 flex space-x-4">
              <Link target="_blank" href={"https://github.com/pramodsingh007/vantena"}>
                <Image src={github} alt="github" width={30} height={30} />
              </Link>
              <Link className=" hover:-rotate-45 duration-300"  href={"#"}>
                <Image src={arrow} alt="arrow" width={30} height={30} />
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
      <motion.div
        className=" w-12 lg:w-auto md:w-auto absolute top-4 right-4"
        animate={{ y: 100 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image src={bulb} alt="bulb" width={80} height={80} />
      </motion.div>

      {/* *************lamp********* */}
      <Image className=" absolute lg:flex md:flex hidden bottom-[-2rem] left-5" src={lamp} alt="lamp" width={100} height={100}/>
    </section>
  );
}

export default Projects;
