import React from 'react'
import bg1 from '../assets/card-img-1.png';
import bg0 from '../assets/card-img-0.png';
import bg2 from '../assets/card-img-2.png';
import bg3 from '../assets/card-img-3.png';
import bg4 from '../assets/card-img-4.png';
import bg5 from '../assets/card-img-5.png';
import tk1 from '../assets/tk1.png';
import tk2 from '../assets/tk2.png';
import tk3 from '../assets/tk3.png';
import tk4 from '../assets/tk4.png';
import tk5 from '../assets/tk5.png';

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

function Transform() {

    const avatars = [
        {
            imageUrl: "https://media.licdn.com/dms/image/v2/D4D35AQH3ZE-ENLxrdw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1713543665870?e=1737802800&v=beta&t=tvhtfWdtoF7n1spUDDOMsAsQ9sPp3pqkovHox9sPgUI",
            profileUrl: "/sambit",
         },
         {
           imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHyOOXRcJ-S4A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711106313269?e=1742428800&v=beta&t=QSbOhRgqZ7kpyQW6Lul3N3LaE--CW5ymTu86SnyV-SI",
           profileUrl: "/rikth",
         },
          {
            imageUrl: "https://media.licdn.com/dms/image/v2/D5635AQELFz7KGHb5aA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725015879865?e=1737802800&v=beta&t=v_T95U57D56_KsjnxE3LK04vpf-blxxW277r2zfkIyo",
            profileUrl: "https://www.linkedin.com/in/shubhamgupta111/",
          },
          
          
        ];
      
      
      
          const features = [
               {
                        Icon: TableIcon ,
                        name: "Technology Integration :",
                        description: "Implementing cutting-edge technologies to streamline operations and enhance efficiency.",
                        href: "/",
                        
                        background: <img src={tk1} className="absolute -right-20 -top-25 opacity-20 blur-m " />,
                        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
                      },
                      {
                        Icon: BorderAllIcon,
                        name: "Process Automation :",
                        description: "Simplifying workflows through automation to save time and reduce costs.",
                        href: "/",
                        
                        background: <img src={tk2} className="absolute -right-[130px] -top-20 opacity-20 scale-[0.7]  " />,
                        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
                      },
                      {
                        Icon: RulerSquareIcon,
                        name: "Data-Driven Insights : ",
                        description: "Leveraging analytics to drive smarter decision-making and uncover growth opportunities.",
                        href: "/",
                        
                    background: <img src={tk3} className="absolute -right-[130px] top-[-150px] opacity-40 blur-m scale-[1] sm:scale-[0.5] " />,
                        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
                      },
                      {
                        Icon: ComponentNoneIcon,
                        name: "Digital Strategy Development :",
                        description: "Crafting comprehensive strategies to help businesses thrive in the digital era.",
                        href: "/",
                        
                        background: <img src={tk4} className="absolute -right-[90px] sm:-right-[150px] -top-[190px] opacity-25 sm:scale-[0.5] scale-[0.9]   " />,
                        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
                      },
                      {
                        Icon: BarChartIcon,
                        name: "Change Management Support :",
                        description:
                          "Guiding teams through the transition to ensure successful adoption of digital solutions.",
                        href: "/",
                        
                        background: <img src={tk5} className="absolute -right-20 -top-20 opacity-20 scale-[0.8] " />,
                        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
                      },
              
            ];
  return (
    <>
    <div className='bg-black h-[7rem]'></div>
    <div className='card-content-main  bg-black p-5 h-[132rem]  sm:h-[fit-content]  sm:p-0   '>
      

      <div className='card-content-01  mx-auto h-full w-[100%]  sm:w-[70%]'>
          <div className='card-content-head text-white [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  w-full grid place-items-center rounded-xl mb-3 h-[16rem] p-6  sm:h-[20rem]    '>
             

              <h1 className='text-4xl font-medium text-poppins '>
              Empowering Innovation with Digital Transformation
              </h1>
              {/* <p>

              </p> */}
          </div>
          

          <div className='card-content-body h-[37rem]  '>
             <BentoGrid className="lg:grid-rows-3">
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
             <Link to="/contact" ><ShimmerButton >contact</ShimmerButton></Link>

             
          </div>
        
        </div>
        <div className='sm:w-[30%] p-5 mt-4 sm:mt-0  sm:h-full [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl '>
          <p className='text-xl mb-3 font-sm text-poppins text-neutral-300 ' >meet our team</p>
          <AvatarCircles numPeople={1} avatarUrls={avatars} />
        </div>
      </div>

    </div>
    <div className='h-10 sm:h-20 bg-black' >
    </div>
    
    
    </>
  )
}

export default Transform