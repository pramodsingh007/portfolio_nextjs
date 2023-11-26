import Image from "next/image";
import atSign from "@/assets/images/atSign.svg";
import phone from "@/assets/images/phone.svg";
import github from "@/assets/images/github_white.svg";
import twitter from "@/assets/images/twitter_white.svg";
import linkedin from "@/assets/images/linkedin_white.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer
      id="Footer"
      className=" border-t  border-slate-600 lg:flex lg:flex-row md:flex md:flex-row flex flex-col  justify-between    p-6 bg-[#292930]"
    >
      <div className=" flex justify-center">
        <div className=" flex max-sm:flex-col max-sm:flex">
          <h1 className="text-sm flex text-center justify-center max-sm:border-r-0 border-r-2 border-slate-400 p-3 text-slate-400 items-center">
            <Image
              className="mr-3"
              src={atSign}
              alt="atSign"
              width={20}
              height={20}
            />
            pramodsingh0591@gmail.com
          </h1>
          <h1 className="text-sm flex justify-center text-slate-400 p-3 items-center">
            <Image
              className=" mr-3"
              src={phone}
              alt="phone"
              width={20}
              height={20}
            />
            +916263616208
          </h1>
        </div>
      </div>
      <div className=" sm:mt-3 max-sm:mt-3 flex items-center justify-center space-x-4">
        <Link target="_blank" href={'https://twitter.com/PramodThakur26'}><Image src={twitter} alt="twitter" width={20} height={20}/></Link>
        <Link target="_blank" href={'https://www.linkedin.com/in/pramod-thakur-49a2ba205/'}><Image src={linkedin} alt="linkedin" width={20} height={20}/></Link>
        <Link target="_blank" href={'https://github.com/pramodsingh007/'}><Image src={github} alt="github" width={20} height={20}/></Link>
      </div>
    </footer>
  );
}

export default Footer;
