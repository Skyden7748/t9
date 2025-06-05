import React from 'react'
import bg1 from '../assets/card-img-1.png';
import bg0 from '../assets/card-img-0.png';
import bg2 from '../assets/card-img-2.png';
import bg3 from '../assets/card-img-3.png';
import bg4 from '../assets/card-img-4.png';
import bg5 from '../assets/card-img-5.png';
import mk1 from '../assets/mk1.png';
import mk2 from '../assets/mk2.png';
import mk3 from '../assets/mk3.png';
import mk4 from '../assets/mk4.png';
import mk5 from '../assets/mk5.png';
import s01 from '../assets/s01.png';
import p3 from '../assets/p-3.jpg';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import {motion} from 'motion/react'
import {
    
    InstagramLogoIcon,
    EnvelopeClosedIcon,
    GearIcon,
    AllSidesIcon,
  } from "@radix-ui/react-icons";
  import { BentoGrid,BentoCard } from '../components/BentoGrid.jsx';
import { PhoneCallIcon, PlayIcon, Table } from 'lucide-react';
import './CardContent.css'
import ShimmerButton from '../components/ShimmerButton.jsx';
import AvatarCircles from '../components/AvatarCircles.jsx';
import { Link } from 'react-router-dom';
import NumberTicker from '../components/NumberTicker';
import { useTranslation } from 'react-i18next';

import { useState } from "react";
import { DBox } from '../components/DBox';

function Marketing() {

     const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const avatars = [
             {
               imageUrl: s01,
               profileUrl: "/marketingteam",
             },
             {
               imageUrl: p3,
               profileUrl: "/marketingteam",
             },
             
             
           ];
         
         
         
             const features = [
                  {
                           Icon: GearIcon ,
                           name: t("service48"),
                           description: t("service49"),
                           href: "/",
                           
                           background: <img src={mk1} className="absolute -right-20 -top-25 opacity-20 blur-m " />,
                           className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
                         },
                         {
                           Icon: InstagramLogoIcon,
                           name: t("service50"),
                           description: t("service51"),
                           href: "/",
                           
                           background: <img src={mk2} className="absolute -right-[130px] -top-20 opacity-20 scale-[0.7]  " />,
                           className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
                         },
                         {
                           Icon: EnvelopeClosedIcon,
                           name: t("service52"),
                           description: t("service53"),
                           href: "/",
                           
                       background: <img src={mk3} className="absolute -right-[130px] top-[-150px] opacity-40 blur-m scale-[1] sm:scale-[0.5] " />,
                           className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
                         },
                         {
                           Icon: AllSidesIcon,
                           name: t("service54"),
                           description: t("service55"),
                           href: "/",
                           
                           background: <img src={mk4} className="absolute -right-[90px] sm:-right-[150px] -top-[190px] opacity-25 sm:scale-[0.5] scale-[0.9]   " />,
                           className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
                         },
                         {
                           Icon: PlayIcon,
                           name: t("service56"),
                           description:
                             t("service57"),
                           href: "/",
                           
                           background: <img src={mk5} className="absolute -right-20 -top-20 opacity-20 scale-[0.8] " />,
                           className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
                         },
                 
               ];


  return (
    <>
    <div className='bg-black h-[7rem]'></div>
    <div className='card-content-main  bg-black p-5   sm:p-0   '>
      

      <div className='card-content-01  mx-auto  w-[100%] sm:w-[90%] md:w-[90%]  lg:w-[90%] xl:w-[90%] 2xl:w-[70%] card-content-01  mx-auto  w-[100%] sm:w-[90%] md:w-[90%]  lg:w-[90%] xl:w-[90%] 2xl:w-[70%] '>
          <div className='card-content-head text-white [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  w-full grid place-items-center rounded-xl    md:p-20 p-5     '>
             

              <h1 className='text-4xl font-medium text-poppins '>
              {t("service45")}
              </h1>
              {/* <p>

              </p> */}

              <div className='sm:w-[70%] mt-3 sm:mt-3 2xl:mt-5 w-[100%] 2xl:w-[80%] sm:flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] p-3 rounded-lg  ' >
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[2em] sm:text-[2em] 2xl:text-[3em] font-medium tracking-tighter text-neutral-400 dark:text-white' ><NumberTicker  value={25} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-400 dark:text-white" />+   {t("service46")}</p>
                </div>

                
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[2em] sm:text-[2.2em] 2xl:text-[3em] font-medium tracking-tighter text-neutral-100 dark:text-white' ><NumberTicker  value={90} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-400 dark:text-white" /><span className='text-neutral-400' >% </span> {t("service47")} </p>
                </div>
               
              </div>
          </div>
          

          <div className='card-content-body '>
             <BentoGrid className="lg:grid-rows-3 mt-7   ">
              {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} /> 
             ))}

              // //
    </BentoGrid>
   
          </div>


      </div>





    </div>

    <div className='card-content-main2  bg-black pl-5 pr-5 w-[100%]  sm:p-0     '>

      <div className=' card-content-main22  mx-auto h-full  gap-3 block w-[100%]  sm:w-[90%]  2xl:w-[70%] sm:flex   '>
        <div className=' w-[100%]  sm:w-[70%]  h-[fit-content] sm:h-full [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl p-6 sm:flex '>

          <div className=' cc flex sm:flex-col   gap-3 w-[100%] sm:w-[50%]  '>
          < PhoneCallIcon  className='h-8 w-8 text-neutral-600  ' />

          <div className='sm:flex gap-3' >
          <p className='text-xl font-semibold text-poppins text-neutral-300'>{t("service14")}</p>
          
          <p className='text-xl font-sm text-poppins text-neutral-400' >9869679058</p>
          </div>
          </div>
          <div className="ccc mt-3 sm:mt-0  sm:block pl-10  sm:pl-6 w-[100%] sm:w-[50%] border-right border-neutral-600 ">
             <p className='text-xl mb-3 font-sm text-poppins text-neutral-300' >{t("service15")} </p>
              <button className='  no-underline bg-transparent border-none ' onClick={() => setOpen(true)}>
                                     <ShimmerButton>contact</ShimmerButton>
                                   </button>
                                   <DBox open={open} setOpen={setOpen} />

             
          </div>
        
        </div>
        <div className='sm:w-[30%] p-5 mt-3 sm:mt-0  sm:h-full [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl '>
          <p className='text-xl mb-3 font-sm text-poppins text-neutral-300 ' >{t("service58")}</p>
          <AvatarCircles numPeople={1} avatarUrls={avatars} />
        </div>
      </div>

    </div>
    <div className='h-10 sm:h-20 bg-black' >
    </div>
    
    
    </>
  )
}

export default Marketing