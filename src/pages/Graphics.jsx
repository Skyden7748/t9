import React from 'react'
import bg1 from '../assets/card-img-1.png';
import bg0 from '../assets/card-img-0.png';
import bg2 from '../assets/card-img-2.png';
import bg3 from '../assets/card-img-3.png';
import bg4 from '../assets/card-img-4.png';
import bg5 from '../assets/card-img-5.png';
import zk1 from '../assets/zk1.png';
import zk2 from '../assets/zk2.png';
import zk3 from '../assets/zk3.png';
import zk4 from '../assets/zk4.png';
import zk5 from '../assets/zk5.png';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import { motion } from 'motion/react'
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
  FaceIcon,
  PaperPlaneIcon,

  TableIcon,
  BorderAllIcon,
  RulerSquareIcon,
  ComponentNoneIcon,
  BarChartIcon,
  CrumpledPaperIcon,
  DrawingPinIcon,
  BookmarkFilledIcon,
  RocketIcon,
  HobbyKnifeIcon,
  CardStackMinusIcon,
} from "@radix-ui/react-icons";
import { BentoGrid, BentoCard } from '../components/BentoGrid.jsx';
import { PhoneCallIcon, Table } from 'lucide-react';
import './CardContent.css'
import ShimmerButton from '../components/ShimmerButton.jsx';
import AvatarCircles from '../components/AvatarCircles.jsx';
import { Link } from 'react-router-dom';
import NumberTicker from '../components/NumberTicker';
import { HeroParallax } from '../components/ui/hero-parallax';
import p_1 from '../assets/p-1.jpg';
import p_3 from '../assets/p-3.jpg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { DBox } from '../components/DBox';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';
import f5 from '../assets/f5.jpg';
import f7 from '../assets/f7.jpg';
import f6 from '../assets/f6.jpg';

function Graphics() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
   
  const products = [
    {
      title: "3D",
      link: "#",
      thumbnail: f5, // public path or import
    },
    {
      title: "Environments",
      link: "#",
      thumbnail: f2,
    },
    {
      title: "Illustrations",
      link: "#",
      thumbnail: f1,
    },
    {
      title: "3D",
      link: "#",
      thumbnail: f5,
    },
    {
      title: "Appwrite",
      link: "#",
      thumbnail: f1,
    },
    {
      title: "Promos",
      link: "#",
      thumbnail: f7,
    },
    {
      title: "Banners",
      link: "#",
      thumbnail: f6,
    },
    {
      title: "Doodles",
      link: "#",
      thumbnail: f4,
    },

    // ...
  ];








  const avatars = [
    {
      imageUrl: p_1,
      profileUrl: "/design",
    },
    {
      imageUrl: p_3,
      profileUrl: "/design",
    },


  ];






  const features = [
    {
      Icon: DrawingPinIcon,
      name: t("service34"),
      description: t("service35"),
      href: "/",

      background: <img src={zk1} className="absolute -right-20 -top-25 opacity-20 blur-m " />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: CrumpledPaperIcon,
      name: t("service36"),
      description: t("service37"),
      href: "/",

      background: <img src={zk2} className="absolute -right-[130px] -top-20 opacity-20 scale-[0.7]  " />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: HobbyKnifeIcon,
      name: t("service38"),
      description: t("service39"),
      href: "/",

      background: <img src={zk3} className="absolute -right-[130px] top-[-150px] opacity-40 blur-m scale-[1] sm:scale-[0.5] " />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: BookmarkFilledIcon,
      name: t("service40"),
      description: t("service41"),
      href: "/",

      background: <img src={zk4} className="absolute -right-[90px] sm:-right-[150px] -top-[190px] opacity-25 sm:scale-[0.5] scale-[0.9]   " />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: CardStackMinusIcon,
      name: t("service42"),
      description:
       t("service43"),
      href: "/",

      background: <img src={zk5} className="absolute -right-20 -top-20 opacity-20 scale-[0.8] " />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },

  ];





  return (
    <>
      <div className='bg-black h-[7rem]'></div>
      <div className=' w-[95%] xl:w-[70%] mx-auto ' > <HeroParallax products={products} />  </div>
      <div className='card-content-main  bg-black p-5   sm:p-0   '>


        <div className='card-content-01  mx-auto  w-[100%] sm:w-[90%] md:w-[90%]  lg:w-[90%] xl:w-[90%] 2xl:w-[70%] card-content-01  mx-auto  w-[100%] sm:w-[90%] md:w-[90%]  lg:w-[90%] xl:w-[90%] 2xl:w-[70%]'>
          <div className='card-content-head text-white [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  w-full grid place-items-center rounded-xl    md:p-20 p-5     '>


            <h1 className='text-4xl font-medium text-poppins '>
              {t("service31")}
            </h1>
            {/* <p>

              </p> */}

            <div className='sm:w-[70%] mt-3 sm:mt-3 2xl:mt-5 w-[100%] 2xl:w-[80%] sm:flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] p-3 rounded-lg  ' >
              <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                <p className='font-poppins whitespace-pre-wrap text-[1.4em] sm:text-[1.4em] 2xl:text-[1.5em] font-medium tracking-tighter text-neutral-400 dark:text-white' ><NumberTicker value={500} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-100 dark:text-white" /><span className='text-neutral-500' >+ </span> {t("service32")}</p>
              </div>


              <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                <p className='font-poppins whitespace-pre-wrap text-[1.4em] sm:text-[1.4em] 2xl:text-[1.5em] font-medium tracking-tighter text-neutral-400 dark:text-white' ><NumberTicker value={5} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-100 dark:text-white" /><span className='text-neutral-500' >+ </span>  {t("service33")} </p>
              </div>

            </div>
          </div>


          <div className='card-content-body  '>
            <BentoGrid className="lg:grid-rows-3 mt-7">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}

              //
            </BentoGrid>

          </div>


        </div>





      </div>

      <div className='card-content-main2  bg-black pl-5 pr-5 w-[100%]  sm:p-0     '>

        <div className='card-content-main22  mx-auto h-full  gap-3 block w-[100%]  sm:w-[90%]  2xl:w-[70%] sm:flex   '>
          <div className=' w-[100%]  sm:w-[70%] h-[fit-content] sm:h-full [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl p-6 sm:flex '>

            <div className=' cc flex sm:flex-col   gap-3 w-[100%] sm:w-[50%]  '>
              < PhoneCallIcon className='h-8 w-8 text-neutral-600  ' />

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
          <div className='sm:w-[30%] p-5 mt-4 sm:mt-0  sm:h-full [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl '>
            <p className='text-xl mb-3 font-sm text-poppins text-neutral-300 ' >{t("service44")}</p>
            <AvatarCircles numPeople={1} avatarUrls={avatars} />
          </div>
        </div>

      </div>
      <div className='h-10 sm:h-20 bg-black' >
      </div>


    </>
  )
}

export default Graphics