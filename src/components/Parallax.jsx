import React, { useRef } from 'react';
import {FiArrowUpRight} from 'react-icons/fi'
import {motion, useTransform , useScroll } from 'motion/react'
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide ,  } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import '../pages/Home.css'
import { Link } from 'react-router-dom';




export const TestParallax = () =>{
    const { t } = useTranslation()
    return <div className='bg-black ' >
      
      <Parallax
       imgUrl= {a1}
       subheading={t("H_Greet1")}
       heading={t("H_Greet12")}
       > <ExampleContent
       main= {t("H_Sen1")}
       sub= {t("H_Sen12")} 
       sub2= {t("H_sen123")}
       >
          
          </ExampleContent>
          
         </Parallax>
         <Parallax
       imgUrl={a2}
       subheading={t("H_Greet2")}
       heading={t("H_Greet22")}
       > 
        <ExampleContent
        main={t("H_Sen2")}
          sub={t("H_Sen22")}
          sub2={t("H_Sen23")}
          >
             
             </ExampleContent>
          
         </Parallax>
         <Parallax
       imgUrl={a3}
       subheading={t("H_Greeet3")}
       heading={t("H_Greeet32")}
       > 

         {/* <div className=' w-[90%] relative mx-auto overflow-hidden' style={{
    backgroundImage: `
      radial-gradient(at 50% 100%, rgba(31, 9, 150, 0.4) 0px, transparent 50%),
      radial-gradient(at 50% 80%, hsla(266, 61%, 12%, 0.7) 0px, transparent 50%)
    `,
    backgroundColor: "#000", // Optional: Background fallback
  }}> </div> */}
          
         </Parallax>

    </div>
}

const IMG_PADDING = 12;
const Parallax = ( {imgUrl, subheading, heading, children} ) =>{
    return ( 
    <div 
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      
      <div className='relative h-[130vh]  md:h-[150vh]    ' >

        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy subheading={subheading} heading={heading} />

      </div>
      {children}

    </div>
    )
}


const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
      const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["end end","end start"]
      })

      const scale = useTransform (scrollYProgress, [0, 1], [1, 0.85])
      const opacity =  useTransform (scrollYProgress, [0, 1], [1, 0])
    return (
        <motion.div
        style={{
          backgroundImage: `
          radial-gradient(at 100% 100%, rgb(31, 9, 150) 0px, transparent 50%),
          radial-gradient(at 99% 0%, hsla(266, 61%, 12%, 0.5) 0px, transparent 50%),
          
          url(${imgUrl})
        `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: `calc(100vh - ${IMG_PADDING * 2}px)`,
            top: IMG_PADDING,
            border: "1px solid rgba(98, 98, 98, 0.4)",
            
            
            scale,
            opacity,
        }}
        ref={targetRef}
        className='sticky z-0 overflow-hidden rounded-3xl' 
        >
          
            

            <motion.div 
             className='absolute inset-0 bg-neutral-950/40 '
            />
        
        </motion.div>
    )
}

const OverlayCopy = ({subheading, heading}) => {
  return(

    <motion.div
    className='absolute left-0 top-0 flex  h-screen w-full flex-col items-center justify-center text-white'
    > 
        <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl' >{subheading}</p>
        <p className='text-center text-4xl font-bold md:text-5xl 2xl:text-6xl' >{heading}</p>
    </motion.div>
  )

}



const ExampleContent = ({main, sub, sub2}) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-semibold md:col-span-4 text-neutral-200">
       {main}
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-500 md:text-2xl">
          {sub}
        </p>
        <p className="mb-8 text-xl text-neutral-500 md:text-2xl">
          {sub2}
        </p>
        
      </div>
    </div>
  );
  
