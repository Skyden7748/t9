import React from 'react'
import bg1 from '../assets/card-img-1.png';
import bg0 from '../assets/card-img-0.png';
import bg2 from '../assets/card-img-2.png';
import bg3 from '../assets/card-img-3.png';
import bg4 from '../assets/card-img-4.png';
import bg5 from '../assets/card-img-5.png';
import gk1 from '../assets/gk1.png';
import gk2 from '../assets/gk2.png';
import gk3 from '../assets/gk3.png';
import gk4 from '../assets/gk4.png';
import gk5 from '../assets/gk5.png';

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
    RocketIcon,
  } from "@radix-ui/react-icons";
  import { BentoGrid,BentoCard } from '../components/BentoGrid.jsx';
import { PhoneCallIcon, Table } from 'lucide-react';
import './CardContent.css'
import ShimmerButton from '../components/ShimmerButton.jsx';
import AvatarCircles from '../components/AvatarCircles.jsx';
import { Link } from 'react-router-dom';
import NumberTicker from '../components/NumberTicker';
import Example from '../components/HoScroll';

function Uiux() {
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
                    Icon: TableIcon ,
                    name: "User-Centered Design :",
                    description: "40% Higher Conversion Rates, Achieved better results by aligning user goals with business objectives.",
                    href: "/",
                    
                    background: <img src={gk1} className="absolute -right-20 -top-25 opacity-20 blur-m " />,
                    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
                  },
                  {
                    Icon: BorderAllIcon,
                    name: "Wireframes & Prototypes :",
                    description: "15+ Design Tools Mastered, Expertise in Figma, Sketch, Adobe XD, and Axure for prototyping and design.",
                    href: "/",
                    
                    background: <img src={gk2} className="absolute -right-[130px] -top-20 opacity-20 scale-[0.7]  " />,
                    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
                  },
                  {
                    Icon: RulerSquareIcon,
                    name: "Responsive Design ",
                    description: "99% Device Compatibility, Designed for desktops, tablets, and mobile devices, ensuring pixel-perfect layouts on every screen.",
                    href: "/",
                    
                background: <img src={gk3} className="absolute -right-[130px] top-[-150px] opacity-40 blur-m scale-[1] sm:scale-[0.5] " />,
                    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
                  },
                  {
                    Icon: ComponentNoneIcon,
                    name: "Usability Testing :",
                    description: "95% Issue Detection Rate. Identified usability problems early in development, saving time and reducing rework costs.",
                    href: "/",
                    
                    background: <img src={gk4} className="absolute -right-[90px] sm:-right-[150px] -top-[190px] opacity-25 sm:scale-[0.5] scale-[0.9]   " />,
                    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
                  },
                  {
                    Icon: BarChartIcon,
                    name: "Brand Integration :",
                    description:
                      "Aligning design elements with your brand’s identity for a cohesive visual impact.",
                    href: "/",
                    
                    background: <img src={gk5} className="absolute -right-20 -top-20 opacity-20 scale-[0.8] " />,
                    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
                  },
          
        ];


  return (
    <>
    <div className='bg-black'>
    <div className='bg-black h-[7rem]'></div>
    <div className='card-content-main   bg-black p-5  sm:p-0   '>
      

      <div className='card-content-01  mx-auto  w-[100%] sm:w-[90%] md:w-[90%]  lg:w-[90%] xl:w-[90%] 2xl:w-[70%]'>
          <div className='card-content-head text-white [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  w-full grid place-items-center rounded-xl mb-3  md:p-20 p-5      '>
             

              <h1 className='text-4xl font-medium text-poppins '>
              Transforming Ideas into Seamless User Experiences
              </h1>
              {/* <p>

              </p> */}

<div className='sm:w-[70%] mt-3 sm:mt-3 2xl:mt-5 w-[100%] 2xl:w-[80%] sm:flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] p-3 rounded-lg  ' >
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[1.45em] sm:text-[1.5em] 2xl:text-[2em] font-medium tracking-tighter text-neutral-500 dark:text-white' ><NumberTicker  value={50} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-300 dark:text-white" /><span className='text-neutral-400' >+</span>  design projects</p>
                </div>

                
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[1.45em] sm:text-[1.5em] 2xl:text-[2em] font-medium tracking-tighter text-neutral-500 dark:text-white' ><NumberTicker  value={25} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-300 dark:text-white" /><span className='text-neutral-400' >+</span>  satisfied clients globally. </p>
                </div>

                
               
              </div>
          </div>
          

          <div className='card-content-body mt-7  '>
             <BentoGrid className="lg:grid-rows-3">
              {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} /> 
             ))}

              // 
    </BentoGrid>
   
          </div>


      </div>





    </div>

    <div className='card-content-main2  bg-black pl-5 pr-5 w-[100%]  sm:p-0  mb-5   '>

      <div className=' card-content-main22  mx-auto h-full  gap-3 block w-[100%]  sm:w-[90%]  2xl:w-[70%] md:flex   '>
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
        <div className='sm:w-[30%] p-5 mt-3 md:mt-0  sm:h-full [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl '>
          <p className='text-xl mb-3 font-sm text-poppins text-neutral-300 ' >meet our UI\UX team</p>
          <AvatarCircles numPeople={1} avatarUrls={avatars} />
        </div>
      </div>

    </div>
    
    <div className='card-content-main2  bg-black pl-5 pr-5 w-[100%]  sm:p-0     '>

      <div className=' card-content-main22  mx-auto    w-[100%]  sm:w-[90%]  2xl:w-[70%] [border:2px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  rounded-xl   '>
         <Example />
      </div>

    </div>


    <div className='h-10 sm:h-20 bg-black' >
    </div>
    </div>
    
    
    </>
  )
}

export default Uiux