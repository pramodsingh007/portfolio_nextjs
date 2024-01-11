import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import BigBall from '@/components/BigBall'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
    title:'pramod singh portfolio',
    description:'this is a portfolio website for pramod singh made by pramod singh'
}

export default function Home() {
  

  return (
    <main className=' relative overflow-hidden'>
      <Header/>
      <Banner/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
      <BigBall/>
    </main>
  )
}
