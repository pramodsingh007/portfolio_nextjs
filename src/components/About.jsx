import Image from "next/image";
import author from "@/assets/images/author.jpeg";
import linkedin from "@/assets/images/linkedin.svg";
import github from "@/assets/images/github.svg";
import twitter from "@/assets/images/twitter.svg";
import Link from "next/link";
import netflix from '@/assets/images/netflix.png';
import cooking from '@/assets/images/cooking.png';
import adventure from '@/assets/images/adventure.png';
import controller from '@/assets/images/controller.png';



function About() {
  return (
    <section name="about" className="lg:pr-20 lg:pl-20 lg:pt-20 pt-10 relative pb-10 pr-5 pl-5 bg-[#f6f7fd]">
      <div className=" text-slate-700 font-medium text-lg flex items-center justify-center">
        <div className=" w-3 h-3 bg-yellow-400  mr-2 rounded-full"></div>
        About Me
      </div>
      <div className=" flex justify-center">

      <div className=" grid lg:gap-24 gap-5  place-items-center  md:grid-cols-4 grid-cols-1 lg:grid-cols-4 mt-24">
        <div className=" shadow-md shadow-slate-400 lg:w-[18rem] flex justify-center rounded-2xl w-fit h-fit overflow-hidden">
          <Image
            src={author}
            className="  hover:scale-125 duration-500 w-auto sm:w-72 max-sm:w-56 rounded-lg"
            alt="author"
            width={400}
            height={200}
          />
        </div>
        <div className=" col-span-2">
          <h1 className=" lg:text-3xl md:text-3xl text-2xl font-bold mb-4">Pramod Singh</h1>
          <p className=" text-blue-600 text-sm mb-2">Full Stack Devloper</p>
          <p className="mb-4 text-sm md:text-base  lg:text-base text-slate-700">I am a Full Stack Devloper with a passion for building
            beautiful and user friendly websites. I have strong 
            understanding of both front-end and back-end devlopement, and
            i am excited to put my skills to use in a professional setting.
            I am a quick learner and a team player, and i am confident that i can 
            be a valueable asset to ant web devlopement team.
          </p>
          <h1 className=" sm:text-sm max-sm:text-sm"><span className=" font-bold text-slate-500 mr-2">Email:</span>pramodsingh0591@gmail.com</h1>
          <div>
            <h1 className="sm:text-sm max-sm:text-sm flex items-center space-x-3"><span className=" mr-3">Area of Interest:</span>
              <Image src={netflix} alt="netflix" width={50} height={50} />
              <Image src={cooking} alt="cooking" width={30} height={30} />
              <Image src={adventure} alt="adventure" width={30} height={30} />
              <Image src={controller} alt="controller" width={30} height={30} />
            </h1>
          </div>
        </div>
        <div className="flex md:justify-end lg:justify-end">
          <div className=" lg:block md:block flex ">
          <Link target="_blank" href={'https://www.linkedin.com/in/pramod-thakur-49a2ba205/'}><Image src={linkedin} alt="linkedin" width={50} height={50}/></Link>
          <Link target="_blank" href={'https://twitter.com/PramodThakur26'}><Image src={twitter} alt="twitter" width={50} height={50}/></Link>
          <Link target="_blank" href={'https://github.com/pramodsingh007/'}><Image src={github} alt="github" width={50} height={50}/></Link>
          </div>
        </div>
      </div>

      </div>

      
    </section>
  );
}

export default About;
