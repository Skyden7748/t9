import React from 'react'
import bg1 from '../assets/card-img-1.png';
import bg0 from '../assets/card-img-0.png';
import bg2 from '../assets/card-img-2.png';
import bg3 from '../assets/card-img-3.png';
import bg4 from '../assets/card-img-4.png';
import bg5 from '../assets/card-img-5.png';
import pk1 from '../assets/pk1.png';
import pk2 from '../assets/pk2.png';
import pk3 from '../assets/pk3.png';
import pk4 from '../assets/pk4.png';
import pk5 from '../assets/pk5.png';
import s01 from '../assets/s01.png';
import Bcards from '../components/Bcards';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import {motion} from 'motion/react'
import {
    
    InstagramLogoIcon,
    EnvelopeClosedIcon,
    GearIcon,
    AllSidesIcon,
    Crosshair1Icon,
    EnterIcon,
  } from "@radix-ui/react-icons";
  import { BentoGrid,BentoCard } from '../components/BentoGrid.jsx';
import { FileMinusIcon, Link2Icon, PhoneCallIcon, PlayIcon, Table, TimerIcon } from 'lucide-react';
import './CardContent.css'
import ShimmerButton from '../components/ShimmerButton.jsx';
import AvatarCircles from '../components/AvatarCircles.jsx';
import { Link } from 'react-router-dom';
import NumberTicker from '../components/NumberTicker';

function Projects() {


  const items = [
    { heading: '10+', text: 'clients and teams managed with clear, transparent communication.' },
    { heading: 'Risk Management', text: 'Identified risks early and devised strategic mitigation plans.' },
    { heading: '40+', text: 'professionals managed across projects, ensuring optimal allocation and performance.' },
    { heading: '90%+', text: 'milestones met through task tracking and KPI monitoring.' },
    { heading: 'Communication', text: 'Mitigated risks through proactive identification and strategic planning.' },
  ];

     const avatars = [
                 {
                    imageUrl: s01,
                    profileUrl: "/finance",
                 },
                 {
                   imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHyOOXRcJ-S4A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711106313269?e=1742428800&v=beta&t=QSbOhRgqZ7kpyQW6Lul3N3LaE--CW5ymTu86SnyV-SI",
                   profileUrl: "/finance",
                 },
                 
                 
               ];
             
             
             
                 const features = [
                      {
                               Icon: Link2Icon ,
                               name: "Team Management :",
                               description: "Efficiently managed a resource pool of over 40 professionals across multiple projects, ensuring optimal allocation and performance",
                               href: "/",
                               
                               background: <img src={pk1} className="absolute -right-20 -top-25 opacity-20 blur-m " />,
                               className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
                             },
                             {
                               Icon: TimerIcon,
                               name: "Project Planning : ",
                               description: "Fostered clear and transparent communication with 10+ clients and project teams.",
                               href: "/",
                               
                               background: <img src={pk2} className="absolute -right-[130px] -top-20 opacity-20 scale-[0.7]  " />,
                               className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
                             },
                             {
                               Icon: Crosshair1Icon,
                               name: "Communication :",   
                               description: " Proactively identified potential risks and developed strategic mitigation plans to minimize impact.",
                               href: "/",
                               
                           background: <img src={pk3} className="absolute -right-[130px] top-[-150px] opacity-40 blur-m scale-[1] sm:scale-[0.5] " />,
                               className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
                             },
                             {
                               Icon: FileMinusIcon,
                               name: "Risk Management  :",
                               description: "Proactively identified potential risks and developed strategic mitigation plans to minimize impact.",
                               href: "/",
                               
                               background: <img src={pk4} className="absolute -right-[90px] sm:-right-[150px] -top-[190px] opacity-25 sm:scale-[0.5] scale-[0.9]   " />,
                               className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
                             },
                             {
                               Icon: EnterIcon,
                               name: "Progress tracking :",
                               description:
                                 "Tracked project tasks and milestones to ensure timely completion, while developing KPIs to monitor schedule and budget variances.Over 90% milestones decided achieved ",
                               href: "/",
                               
                               background: <img src={pk5} className="absolute -right-20 -top-20 opacity-20 scale-[0.8] " />,
                               className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
                             },
                     
                   ];
    
  return (
       

    <>
    <div className='bg-black h-[7rem]'></div>
    <div className='card-content-main  bg-black p-5 mb-5    sm:p-0   '>
      

      <div className='card-content-01  mx-auto  w-[100%] sm:w-[90%] md:w-[90%]  lg:w-[90%] xl:w-[90%] 2xl:w-[70%] card-content-01  mx-auto  w-[100%] sm:w-[90%] md:w-[90%]  lg:w-[90%] xl:w-[90%] 2xl:w-[70%] '>
          <div className='card-content-head text-white [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#6A4CFF80_inset]  w-full grid place-items-center rounded-xl    md:p-20 p-5    '>
             

              <h1 className='text-4xl font-medium text-poppins '>
              Streamlining Success with Expert Project Management
              </h1>
              {/* <p>

              </p> */}

              {/* <div className='sm:w-[70%] mt-3 sm:mt-3 2xl:mt-5 w-[100%] 2xl:w-[80%] sm:flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] p-3 rounded-lg  ' >
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[2em] sm:text-[2em] 2xl:text-[3em] font-medium tracking-tighter text-neutral-400 dark:text-white' ><NumberTicker  value={4} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-400 dark:text-white" />   MNC s</p>
                </div>

                
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[2em] sm:text-[2.2em] 2xl:text-[3em] font-medium tracking-tighter text-neutral-100 dark:text-white' ><NumberTicker  value={20} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-400 dark:text-white" /><span className='text-neutral-400' >+ </span> Projects </p>
                </div>
               
              </div> */}
          </div>
          

          {/* <div className='card-content-body '>
             <BentoGrid className="lg:grid-rows-3 mt-7">
              {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} /> 
             ))}

              // 
    </BentoGrid>
   
          </div> */}


      </div>





    </div>
    
    {/* <div className='h-10 sm:h-20 bg-black' >
    </div> */}

    <div>
        <Bcards  className=' text-white p-10 w-[90%] mx-auto mb-4 xl:w-[70%] [box-shadow:0_-20px_80px_-20px_#6A4CFF80_inset] [border:1px_solid_rgba(255,255,255,.1)]  rounded-xl ' items={items} />
    </div>

    

    <div className='card-content-main2  bg-black pl-5 pr-5 w-[100%]sm:p-0     '>

      <div className=' card-content-main22  mx-auto h-full  gap-3 block w-[100%]  sm:w-[90%]  2xl:w-[70%] sm:flex   '>
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
        <div className='sm:w-[30%] p-5 mt-3 sm:mt-0  sm:h-full [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl '>
          <p className='text-xl mb-3 font-sm text-poppins text-neutral-300 ' >meet our management team</p>
          <AvatarCircles numPeople={1} avatarUrls={avatars} />
        </div>
      </div>

    </div>
    <div className='h-10 sm:h-20 bg-black' >
    </div>
    
    
    </>
  )
}

export default Projects