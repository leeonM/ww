import React from "react";
import { Inter } from '@next/font/google'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Steps from "./components/Steps";
import SignUp from "./components/SignUp";
import Promo from "./components/Promo";
import PromoReverse from "./components/PromoReverse";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import News from "./components/News";
import logoOne from '../../public/macallan.png'
import logoTwo from '../../public/bowmore.png'
import logoThree from '../../public/dalmore.png'
import logoFour from '../../public/springbank.png'
import logoFive from '../../public/gordonmc.png'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Promo 
    image="https://source.unsplash.com/6UIonphZA5o"
    title="Simple Passive Investment Opportunity"
    content=" We offer FREE storage and insurance at a government bonded warehouse, Capital gains tax free investment, Multiple proven exit strategies"
    link="signup"
    />
    <Info />
    <Steps />
    <Partners 
    logoOne={logoOne}
    logoTwo={logoTwo}
    logoThree={logoThree}
    logoFour={logoFour}
    logoFive={logoFive}
    />
    <News />
    <PromoReverse 
    image="https://source.unsplash.com/nZVjwM1xWU0"
    title="We Provide Completely Free Consultation Services"
    content="We match you with an investment for completely free, we pride on providing a transparent service so you can invest in confidence."
    link="signup"
    />
    <SignUp />

    <Footer />
    </>
  )
}
