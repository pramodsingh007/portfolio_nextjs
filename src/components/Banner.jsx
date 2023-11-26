import Image from "next/image";
import hero from "@/assets/images/hero-1.png";
import { TypeAnimation } from "react-type-animation";
import MovingBall from "./MovingBall";
import Link from "next/link";
import twitter from '@/assets/images/twitter.svg';
import github from '@/assets/images/github.svg';
import linkedin from '@/assets/images/linkedin.svg';
import location from '@/assets/images/location.png';
import shape_1 from '@/assets/images/shape_1.png';


export default function Banner() {
  
  return (
    <section name={'home'}
      className=" relative grid gap-12 lg:grid-cols-2 align-middle lg:mr-20 lg:ml-20 mr-5 ml-5  mt-12 pb-6"
    >
      <div>
        <div className=" lg:h-52 max-sm:h-32">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">Hello I Am</h1>
          <TypeAnimation
            sequence={["Pramod Singh", 1000, "A Full Stack Devloper", 1000]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className=" lg:text-7xl text-5xl max-sm:text-4xl md:text-7xl text-[#5956e9] font-bold"
          />
        </div>
        <p className=" text-slate-500 mt-3 font-medium flex">I'm a Full Stack Devloper based in <Image className=" ml-1 w-5 h-5" src={location} alt="location" width={20} height={20}/> Hyderabad,India</p>
        <div className="mt-5 space-x-3">
        <button className="py-3 px-8 bg-yellow-400 rounded-full">Hire Me</button>
        <button className="py-3 px-8 duration-500 transition-all rounded-full border-2 hover:bg-[#5956e9] hover:text-white border-[#5956e9]">Download Resume</button>
        </div>

        {/*moving ball */}
        <MovingBall/>
        <div className=" flex space-x-6 mt-12">
          <Link className="flex text-sm font-bold items-center" target="_blank" href={'https://twitter.com/PramodThakur26'}><Image src={twitter} alt="twitter" width={25} height={30}/>TWITTER</Link>
          <Link className="flex text-sm font-bold items-center" target="_blank" href={'https://github.com/pramodsingh007/'}><Image src={github} alt="github" width={25} height={30}/>GITHUB</Link>
          <Link className="flex text-sm font-bold items-center" target="_blank" href={'https://www.linkedin.com/in/pramod-thakur-49a2ba205/'}><Image src={linkedin} alt="linkdien" width={25} height={30}/>LINKEDIN</Link>
        </div>
      <Image className=" absolute bottom-[-1rem] z-50 left-4 lg:w-32 w-24" src={shape_1} alt="shape_1" width={170} height={170}/>
      </div>


      <div className=" flex justify-center">
        <Image src={hero} width={550} height={550} alt="hero" />
      </div>
    </section>
  );
}
