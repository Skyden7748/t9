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
import {motion} from 'motion/react'
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
  import { BentoGrid,BentoCard } from '../components/BentoGrid.jsx';
import { PhoneCallIcon, Table } from 'lucide-react';
import './CardContent.css'
import ShimmerButton from '../components/ShimmerButton.jsx';
import AvatarCircles from '../components/AvatarCircles.jsx';
import { Link } from 'react-router-dom';
import NumberTicker from '../components/NumberTicker';
import { HeroParallax } from '../components/ui/hero-parallax';

function Graphics() {
   
  const products = [
    {
      title: "Moonbeam",
      link: "/project/moonbeam",
      thumbnail: "https://i.pinimg.com/474x/51/a7/c3/51a7c3da6375b096f7e10bbfbcaf7d48.jpg", // public path or import
    },
    {
      title: "Appwrite",
      link: "/project/appwrite",
      thumbnail: "https://i.pinimg.com/474x/a7/1d/0d/a71d0d6f8b9bf7b6b9d7aa8ed7bffb07.jpg",
    },
    {
      title: "Appwrite",
      link: "/project/appwrite",
      thumbnail: "https://i.pinimg.com/474x/7f/cd/76/7fcd7604b11afbcfec24351c05cde9d9.jpg",
    },
    {
      title: "Appwrite",
      link: "/project/appwrite",
      thumbnail: "https://images.unsplash.com/photo-1742599968125-a790a680a605?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Appwrite",
      link: "/project/appwrite",
      thumbnail: "https://i.pinimg.com/474x/74/d8/82/74d882919b2130b786902aafb46de0cb.jpg",
    },
    {
      title: "Appwrite",
      link: "/project/appwrite",
      thumbnail: "https://i.pinimg.com/474x/74/d8/82/74d882919b2130b786902aafb46de0cb.jpg",
    },
    {
      title: "Appwrite",
      link: "/project/appwrite",
      thumbnail: "https://i.pinimg.com/474x/6a/16/30/6a16302758f56fec77ae8a25b73a3b85.jpg",
    },
    {
      title: "Appwrite",
      link: "/project/appwrite",
      thumbnail: "https://i.pinimg.com/474x/07/3b/bc/073bbc49624153331216e6a12de9804b.jpg",
    },
    
    // ...
  ];
   






  
    const avatars = [
          {
            imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHjC-DFIokdqw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722532581137?e=1742428800&v=beta&t=dqIRFpM-xZ2UbCJunH0OtnJy8UjhTF68zDwNi5B1Y_U",
            profileUrl: "/design",
          },
          {
            imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEiZ4CNk_ejNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729790721710?e=1742428800&v=beta&t=Dd-aKmeK-69nY0RMwGxqi8v6v9ZGgsWDRhW5q18HTKo",
            profileUrl: "/design",
          },
                    
          
        ];



      
      
      
          const features = [
               {
                        Icon: DrawingPinIcon ,
                        name: "Brand Identity Creation :",
                        description: "Delivered impactful branding within 2 weeks on average, ensuring faster go-to-market readiness for clients.",
                        href: "/",
                        
                        background: <img src={zk1} className="absolute -right-20 -top-25 opacity-20 blur-m " />,
                        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
                      },
                      {
                        Icon: CrumpledPaperIcon,
                        name: "Marketing Collaterals : ",
                        description: "Designed 300+ marketing collaterals, including brochures, flyers, and presentations, that effectively conveyed client messages.",
                        href: "/",
                        
                        background: <img src={zk2} className="absolute -right-[130px] -top-20 opacity-20 scale-[0.7]  " />,
                        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
                      },
                      {
                        Icon: HobbyKnifeIcon,
                        name: "Illustrations & Artwork :",
                        description: "unique, hand-drawn and digital artwork for 70+ clients across diverse industries, including tech, fashion, and publishing.",
                        href: "/",
                        
                    background: <img src={zk3} className="absolute -right-[130px] top-[-150px] opacity-40 blur-m scale-[1] sm:scale-[0.5] " />,
                        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
                      },
                      {
                        Icon: BookmarkFilledIcon,
                        name: "Social Media Graphics :",
                        description: "Increased post reach by 80% through creative use of animations, infographics, and carousels.",
                        href: "/",
                        
                        background: <img src={zk4} className="absolute -right-[90px] sm:-right-[150px] -top-[190px] opacity-25 sm:scale-[0.5] scale-[0.9]   " />,
                        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
                      },
                      {
                        Icon: CardStackMinusIcon,
                        name: "Packaging Design :",
                        description:
                          "Delivered 100% print-ready designs, ensuring flawless production and faster time-to-market.",
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
                Bringing Your Brand to Life with Creative Design
              </h1>
              {/* <p>

              </p> */}

              <div className='sm:w-[70%] mt-3 sm:mt-3 2xl:mt-5 w-[100%] 2xl:w-[80%] sm:flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] p-3 rounded-lg  ' >
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[1.4em] sm:text-[1.4em] 2xl:text-[1.5em] font-medium tracking-tighter text-neutral-400 dark:text-white' ><NumberTicker  value={500} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-100 dark:text-white" /><span className='text-neutral-500' >+ </span> Design Projects</p>
                </div>

                
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[1.4em] sm:text-[1.4em] 2xl:text-[1.5em] font-medium tracking-tighter text-neutral-400 dark:text-white' ><NumberTicker  value={5} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-100 dark:text-white" /><span className='text-neutral-500' >+ </span>  Years of Design Excellence </p>
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
          < PhoneCallIcon  className='h-8 w-8 text-neutral-600  ' />

          <div className='sm:flex gap-3' >
          <p className='text-xl font-semibold text-poppins text-neutral-300'>Give us a call on</p>
          
          <p className='text-xl font-sm text-poppins text-neutral-400' >9869679058</p>
          </div>
          </div>
          <div className="ccc mt-3 sm:mt-0  sm:block pl-10  sm:pl-6 w-[100%] sm:w-[50%] border-right border-neutral-600 ">
             <p className='text-xl mb-3 font-sm text-poppins text-neutral-300' >or, get in touch </p>
              <Link to="/contact" ><ShimmerButton >contact</ShimmerButton></Link>

             
          </div>
        
        </div>
        <div className='sm:w-[30%] p-5 mt-4 sm:mt-0  sm:h-full [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl '>
          <p className='text-xl mb-3 font-sm text-poppins text-neutral-300 ' >meet our design team</p>
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