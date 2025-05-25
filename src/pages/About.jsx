
import './About.css'
import { useTranslation } from 'react-i18next';


import Profile from '../components/Profile'

import Designer from '../components/Designer'

import { Parallax } from 'swiper/modules'
import { TestParallax } from '../components/Parallax'
import Example from '../components/HoScroll'
import React from 'react'
import './Home.css'
import heroImage from '../assets/hero90-blured3.png';
import flare from '../assets/flare1.png';
import eye from '../assets/eye.png';

import sk1 from '../assets/sk1.png';
import sk2 from '../assets/sk2.png';
import sk3 from '../assets/sk3.png';
import sk4 from '../assets/sk4.png';
import p2 from '../assets/p-2.jpg';
import theTeam from '../assets/the-team.png'
import {motion} from 'motion/react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide ,  } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import { HeroParallax } from '../components/ui/hero-parallax'
import Footer from '../components/Footer';
import Test from './Test';
import AnimatedShinyText from './AnimatedShinyText';
import CardContent from './CardContent';
import { BentoGrid,BentoCard } from '../components/BentoGrid.jsx';
import { Link } from 'react-router-dom';
import NumberTicker from '../components/NumberTicker';
import ScrollAnimationPage from '../components/ScrollAnimationPage';
import { SelectDemo } from '../components/SelectButton'

function About() {

  const { t } = useTranslation()

  
  

  return (

    <>
    

    
    {/* <div className='about-main  pt-[5rem] sm:pt-20 pb-[5rem] sm:pb-20  ' >
    
    

  <div>
      <div className='sm:w-[80%] w-[100%]  mx-auto p-2 sm:p-10 p-5 rounded-tl-xl rounded-tr-xl [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_60px_-20px_#8a2be21f_inset]  '>
           <h1 className = "sm:text-7xl text-4xl font-[400] text-neutral-400">Creating the best digital experiences</h1>
      </div>
      <div className='sm:w-[80%] w-[100%]  mx-auto p-2 sm:p-10 p-5  [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_60px_-20px_#8a2be21f_inset]  '>
           <h1 className = "sm:text-[10rem] text-6xl font-[400] text-neutral-700 sm:leading-[130px] leading-[50px]"> Innovation and creativity </h1>
      </div>
  </div>

     <div className='about-main-two [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_60px_-20px_#8a2be21f_inset] sm:w-[80%] w-[100%]  mx-auto p-2 sm:p-10 p-5 rounded-bl-xl rounded-br-xl '>
     <div className='about-content-two w-[100%] sm:w-[100%] '>

      <div className='about-content-two-left mt-0 opacity-100 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_60px_-20px_#8a2be21f_inset] sm:w-[50%] w-[100%] sm:p-10 p-5 '>
         
      <svg width="1191" height="419" viewBox="0 0 1191 419" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path
initial= {{pathLength: 0}}
whileInView={{pathLength: 1}}
transition={{duration: 25, ease: "easeInOut"}}
d="M298 307.5L550 195L175.5 235H44L15 225L36 180L166.5 145L588 129L740.5 54.5L886 75.5L1063.5 123L931.737 169M235.5 418L628 349.5L610 129L443.5 195L410.5 289.5L155.5 349.5L24 329.5L77 315.5L56 402L194.5 151L443.5 58.5L745.5 48.5L752.5 49.5045M235.5 418L1 394V225L24 180L187.5 136L664.5 115L654 195L610 219L593 191L479.5 235L404.5 402L235.5 418ZM874 277.5L931.737 169M874 277.5H825M874 277.5L689.5 323.5L825 277.5M931.737 169L874 189.157M874 189.157L218.5 418L385.5 315.5L151.5 359.5L15 335.5V255.5L166.5 169L439.5 64.5L721.5 54.5L851 95.5L628 129L644 345.5L921 307.5L999.5 161L1063.5 137L1076 255.5L1101 123L857 64.5L768 51.7287M874 189.157L825 277.5M1063.5 13.5L1034.5 75.5L1051.5 85L1076 28.3333M1063.5 13.5L1019 42L1076 28.3333M1063.5 13.5H782.5M768 13.5L733.5 31L677 1H1190L1076 28.3333M768 13.5L752.5 49.5045M768 13.5H782.5M752.5 49.5045L768 51.7287M768 51.7287L782.5 13.5M610 383L628 359.5L921 323.5L904 345.5L610 383ZM499.5 383L598.5 384.5L618 359.5L499.5 383Z" stroke="white"/>
</svg>


      </div>
      <div className='about-content-two-right opacity-50 sm:w-[50%] w-[100%] sm:p-10 p-5'>
        <p> At Tribe-9, we are driven by a passion for innovation and excellence. Our mission is to craft bespoke digital solutions that redefine user experiences and empower businesses to achieve their goals. Guided by creativity and fueled by cutting-edge technology, we transform ideas into impactful realities.

With a commitment to quality and a <span className='highlights'>user-first approach</span>, we design, develop, and deliver <span className='highlights'>solutions that resonate with audiences and inspire trust.</span> From <span className='highlights'>seamless functionality</span> to <span className='highlights' > stunning aesthetics </span>, every detail is thoughtfully curated to elevate the digital experience.

Partner with us to embark on a journey where innovation meets expertise, and your vision takes center stage. Let's build a brighter, more connected future together.</p>
      </div>
     </div>
     </div>
      <div className='about-main-three'>
      <div className='about-content-three'>
      <div className='about-content-three-left'>
        <h1> know more about the team :  </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur vero atque, enim adipisci ex corporis error autem. Itaque ea non incidunt reiciendis aut explicabo illum voluptatibus ut, excepturi eaque a ipsam totam nemo exercitationem nobis soluta sunt sed omnis voluptas voluptatum quisquam quod deleniti. 
        </p>
      </div>
      <div className='about-content-three-right'>
      </div>
      
      </div>
      </div>
      <ScrollAnimationPage />

      

      

   
    </div> */}

<div className='home-main '>
<div style={{backgroundImage: `url(${heroImage})`}}  className=' bg-cover bg-no-repeat bg-center home-mob w-[100%] mx-auto h-[100%] xl:hidden  '>
  <div className='w-[80%] h-[100%] mx-auto flex  items-center ' >
  <div className='text-neutral-200   ' >
     <h1 className='text-[18vw] font-[400]' >{t("aboutH1")}</h1>
     <h1 className='text-[17vw] font-[400] leading-[10vw] ' >{t("aboutH2")}</h1>
     <h1 className='text-[17vw] font-[400] ' >{t("aboutH3")}</h1>
     <p className='text-[4vw] font-[400] text-neutral-400 p-1' >Turning Ideas into Reality, Crafting Innovation with Precision, and Bringing Excellence to Every Step.</p>
  </div>
  </div>

</div>

<div className='home-content'>





{/* <div className='   theShine'>

<AnimatedShinyText shimmerWidth={50} className="font-poppins  ">Empowering your brand with creative strategies and expert digital craftsmanship.
  </AnimatedShinyText>
  <button className='theShine-button ' >
    <p className='text-cyan-300' >Start now</p>
  </button>
  </div> */}
  

  <div  className='hero-image hidden  xl:block'>
  <div  className='headings align-center '>
    <h1 className='he1 '>{t("aboutH1")}</h1>
    <h1 className='he2 '>{t("aboutH2")}</h1>
    <h1 className='he3 '>{t("aboutH3")}</h1>
    {/* <AnimatedShinyText shimmerWidth={50} className="font-poppins  ">Empowering your brand with creative strategies and expert digital craftsmanship.
      </AnimatedShinyText> */}
      

  </div>
<div class="fire">
<div class="fire-left">
<div class="main-fire"></div>
<div class="particle-fire"></div>
</div>
<div class="fire-center">
<div class="main-fire"></div>
<div class="particle-fire"></div>
</div>
<div class="fire-right">
<div class="main-fire"></div>
<div class="particle-fire"></div>
</div>
<div class="fire-bottom">
<div class="main-fire"></div>
</div>
</div>
  <div className='eye'>
     <img src={eye} alt="" />
  </div>
  <div className='flare'>
      <img src={flare} alt="" />
  </div>
  
  <img src={heroImage} alt="" />
  </div>
</div>
</div>



<div className='home-main-two h-[70vh] ' >

  <div className='home-main-three'>
      
      <div className='home-three-content'>
      <h1>{t("aboutH4")}</h1>
           <p>{t("aboutpara")}</p>




      </div>

  </div>
      
  </div>


  

    
   

    
   {/* <Example/> */}

   
    </>
  )
}

export default About