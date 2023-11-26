import Image from "next/image";
import handshake from "@/assets/images/handshake.svg";
import typing from "@/assets/images/typing.png";
import {motion} from 'framer-motion';

function Contact() {
  return (
    <section
      className=" bg-[#292930] relative lg:pl-20 pt-12 pb-12 lg:pr-20 pr-5 pl-5"
      name="contact"
    >
      <div className=" text-slate-400 font-medium text-lg flex items-center justify-center">
        <div className=" w-3 h-3 bg-yellow-400  mr-2 rounded-full"></div>
        Contact me
      </div>
      <div className="  text-center text-3xl font-bold flex justify-center mt-12  text-slate-300 ">
        Let's build something together
        <Image
          className="ml-3"
          src={handshake}
          width={30}
          height={30}
          alt="handshke"
          
        />
      </div>

      <div className=" flex justify-center mt-12 ">
        <form action="" className=" space-y-8  max-w-[40rem]">
          <input
            placeholder="Enter your name"
            className=" text-slate-300 bg-transparent border border-slate-500 rounded-md outline-none p-3 w-full"
            type="text"
            name="name"
          />
          <input
            placeholder="Enter your email"
            className=" text-slate-300 bg-transparent border border-slate-500 rounded-md outline-none p-3 w-full"
            type="email"
            name="email"
          />
          <textarea
            placeholder="Enter your message"
            className=" text-slate-300 resize-none bg-transparent border border-slate-500 rounded-md outline-none p-3 w-full h-52"
            type="text"
            name="message"
          />
          <button className=" w-full p-3 bg-yellow-400 rounded-md">
            Send Message
          </button>
        </form>
      </div>

      <motion.div
        className=" w-12 lg:w-auto md:w-auto absolute bottom-4 right-4"
        animate={{ y: -150 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image src={typing} alt="typing" width={80} height={80} />
      </motion.div>
    </section>
  );
}

export default Contact;
