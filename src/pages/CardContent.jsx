import React from 'react'
import bg1 from '../assets/card-img-1.png';
import bg0 from '../assets/card-img-0.png';
import bg2 from '../assets/card-img-2.png';
import bg3 from '../assets/card-img-3.png';
import bg4 from '../assets/card-img-4.png';
import bg5 from '../assets/card-img-5.png';
import {motion} from 'motion/react'
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
    FaceIcon,
    
    
    RocketIcon,
  } from "@radix-ui/react-icons";
  import { BentoGrid,BentoCard } from '../components/BentoGrid.jsx';
import { PhoneCallIcon } from 'lucide-react';
import './CardContent.css'
import ShimmerButton from '../components/ShimmerButton.jsx';
import AvatarCircles from '../components/AvatarCircles.jsx';
import { Link } from 'react-router-dom';
import NumberTicker from '../components/NumberTicker';
import p_2 from '../assets/p-2.jpg';
import p_3 from '../assets/p-3.jpg';
import p_1 from '../assets/p-1.jpg';

function CardContent() {

  const avatars = [
    {
      imageUrl: p_2,
      profileUrl: "/aryan",
    },
    {
      imageUrl: p_3,
      profileUrl: "/abhisek",
    },
    {
      imageUrl: p_1,
      profileUrl: "/sarada",
    },
    
    
  ];



    const features = [
        {
          Icon: RocketIcon ,
          name: "Custom Application Development:",
          description: "We design and develop web and mobile applications tailored to your goals and operational needs. 7+ Tech Stacks Mastered",
          href: "/",
          
          background: <img src={bg0} className="absolute -right-20 -top-25 opacity-20 blur-m " />,
          className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
        },
        {
          Icon: InputIcon,
          name: "Enterprise Solutions:",
          description: "Optimize your business processes with enterprise-grade solutions. 10+ Integrations Performed, 40% Operational Efficiency Boost",
          href: "/",
          
          background: <img src={bg3} className="absolute -right-[130px] -top-20 opacity-20 scale-[0.7]  " />,
          className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
        },
        {
          Icon: GlobeIcon,
          name: "UI/UX-Centric Development ",
          description: "Our designs prioritize user experience. Designed over 200 unique UI elements and icons. Ensured 100% responsiveness across all screen sizes.",
          href: "/",
          
          background: <img src={bg1} className="absolute -right-[130px] top-[-150px] opacity-40 blur-m scale-[1] sm:scale-[0.5] " />,
          className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
        },
        {
          Icon: FileTextIcon,
          name: "Agile Development Process",
          description: "90% On-Time Delivery, Daily Standups, Iterative Improvements. ",
          href: "/",
          
          background: <img src={bg4} className="absolute -right-[90px] sm:-right-[150px] -top-[190px] opacity-25 sm:scale-[0.5] scale-[0.9]   " />,
          className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
        },
        {
          Icon: CalendarIcon,
          name: "Maintenance and Support",
          description:
            "99.9% Uptime Guaranteed. 24/7 Support Coverage,  Issues Resolved with in 24 Hours",
          href: "/",
          
          background: <img src={bg5} className="absolute -right-20 -top-20 opacity-20 scale-[0.8] " />,
          className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
        },
      ];
  return (

    <>
    <div className='bg-black h-[7rem]'></div>
    <div className='card-content-main  bg-black p-5   sm:p-0   '>
      

      <div className='card-content-01  mx-auto h-full w-[100%]  sm:w-[70%]'>
          <div className='card-content-head text-white [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  w-full grid place-items-center rounded-xl mb-3  p-6     '>
             

              <h1 className='text-3xl font-medium text-poppins '>
              Empowering Your Vision with Cutting-Edge Solutions
              </h1>
              {/* <p>

              </p> */}
               <div className='sm:w-[70%] mt-3 sm:mt-3 2xl:mt-5 w-[100%] 2xl:w-[80%] sm:flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] p-3 rounded-lg  ' >
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[2em] sm:text-[1.5em] 2xl:text-[2em] font-medium tracking-tighter text-neutral-400 dark:text-white' ><NumberTicker  value={11} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-200 dark:text-white" /><span className='text-neutral-600' >+ </span> projects</p>
                </div>

                

                
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[2em] sm:text-[1.5em] 2xl:text-[2em] font-medium tracking-tighter text-neutral-400 dark:text-white' ><NumberTicker  value={95} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-200 dark:text-white" /><span className='text-neutral-600' >% </span> customer satisfaction </p>
                </div>
               
              </div>
          </div>
          

          <div className='card-content-body   '>
             <BentoGrid className="lg:grid-rows-3 mt-7">
              {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} /> 
             ))}

              // 
    </BentoGrid>
   
          </div>


      </div>





    </div>

    <div className='card-content-main2  bg-black pl-5 pr-5 w-[100%] h-[24rem] sm:h-[10rem] sm:p-0     '>

      <div className=' card-content-main22  mx-auto h-full  gap-3 block w-[100%]  sm:w-[70%] sm:flex   '>
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
              <Link className='no-underline' to="/contact" ><ShimmerButton >contact</ShimmerButton></Link>

             
          </div>
        
        </div>
        <div className='sm:w-[30%] p-5 mt-4 sm:mt-0  sm:h-full [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl '>
          <p className='text-xl mb-3 font-sm text-poppins text-neutral-300 ' >meet our dev team</p>
          <AvatarCircles numPeople={1} avatarUrls={avatars} />
        </div>
      </div>

    </div>
    <div className='h-10 sm:h-20 bg-black' >
    </div>
    
    
    </>
  )
}

export default CardContent