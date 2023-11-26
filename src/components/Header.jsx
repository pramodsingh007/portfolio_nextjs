import Link from "next/link"
import {Rock_Salt} from 'next/font/google';
import Image from "next/image";
import menu from '@/assets/images/menu.svg';
import cross from '@/assets/images/cross.png';
import { useState } from "react";
import {Link as ScrollLink} from 'react-scroll';

const rockSalt = Rock_Salt({subsets:['latin'],weight:["400"],})
export default function Header() {
   const [isHidden,setIsHidden] = useState(true)

   const onToggleHandler = ()=>{
    setIsHidden(!isHidden)
   }

    const navLinks = [
        {
            link:"Home",
            path:'home'
        },
        {
            link:"Skills",
            path:'skills'
        },
        {
            link:"Projects",
            path:'projects'
        },
        {
            link:"About",
            path:'about'
        },
    ]
  return (
    <header className=" flex justify-between  items-center p-6">
        <h1 className={`${rockSalt.className} md:text-2xl text-[17px] font-bold lg:text-2xl`}>Pramod Singh</h1>
    <nav className=" justify-between lg:flex hidden  items-center">
        <ul className=" space-x-12 flex">
        
        {navLinks.map((item)=><li key={item.link}  className="group relative cursor-pointer" ><ScrollLink to={item.path} spy={true} smooth={true} duration={1000} className=" font-medium text-lg text-slate-400">
            {item.link}
            <div  className=" w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full "></div>
            
            </ScrollLink></li>)}
        </ul>
    </nav>
        <ScrollLink to="contact" duration={1000} smooth={true} spy={true}><button className=" lg:flex hidden bg-yellow-400 px-9 py-5 hover:bg-black hover:text-white transition-all duration-500 rounded-md">Lets Talk</button></ScrollLink>
        <button onClick={onToggleHandler} className=" w-auto sm:w-10 max-sm:w-10 md:w-12 p-2 rounded-md flex lg:hidden bg-slate-50"><Image src={menu} width={40} height={40} alt="menu"/></button>
    
    {/* this will display when hamburger menu is pressed */}
    <nav className={` bg-yellow-300 fixed h-full w-full z-[100]  duration-500 p-6   top-0 left-0 ${isHidden?'hidden':'block'}`}>
    <ul className="space-y-12 flex-col flex text-center sticky top-0 ">
        
    <button onClick={onToggleHandler} className={`absolute right-0 p-3 `}><Image src={cross} width={40} height={40} alt="cross"></Image></button>
        {navLinks.map((item)=><li    key={item.link}><ScrollLink to={item.path} spy={true} smooth={true} duration={1000} className=" cursor-pointer font-medium text-lg text-slate-400" onClick={onToggleHandler}   >
            {item.link}
            </ScrollLink></li>)}
        </ul>
    </nav>
    </header>
  )
}
