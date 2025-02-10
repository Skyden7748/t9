import React from 'react'
import bg1 from '../assets/card-img-1.png';
import bg0 from '../assets/card-img-0.png';
import bg2 from '../assets/card-img-2.png';
import bg3 from '../assets/card-img-3.png';
import bg4 from '../assets/card-img-4.png';
import bg5 from '../assets/card-img-5.png';
import wk1 from '../assets/wk1.png';
import wk2 from '../assets/wk2.png';
import wk3 from '../assets/wk3.png';
import wk4 from '../assets/wk4.png';
import wk5 from '../assets/wk5.png';

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
    DoubleArrowUpIcon,
    CircleIcon,
    EyeClosedIcon,
    RulerHorizontalIcon,
    BorderStyleIcon,
  } from "@radix-ui/react-icons";
  import { BentoGrid,BentoCard } from '../components/BentoGrid.jsx';
import { BackpackIcon, PhoneCallIcon, Table } from 'lucide-react';
import './CardContent.css'
import ShimmerButton from '../components/ShimmerButton.jsx';
import AvatarCircles from '../components/AvatarCircles.jsx';
import { Link } from 'react-router-dom';
import NumberTicker from '../components/NumberTicker';

function Wealth() {

    const avatars = [
        {
            imageUrl: "https://media.licdn.com/dms/image/v2/D4D35AQH3ZE-ENLxrdw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1713543665870?e=1737802800&v=beta&t=tvhtfWdtoF7n1spUDDOMsAsQ9sPp3pqkovHox9sPgUI",
            profileUrl: "/finance",
         },
         {
           imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHyOOXRcJ-S4A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711106313269?e=1742428800&v=beta&t=QSbOhRgqZ7kpyQW6Lul3N3LaE--CW5ymTu86SnyV-SI",
           profileUrl: "/finance",
         },
          
        ];
      
      
      
          const features = [
               {
                        Icon: DoubleArrowUpIcon ,
                        name: "Investment Planning and Goal Planning: :",
                        description: "Assisted HNI clients to invest across multiple asset classes namely shares, mutual funds, fixed deposits and insurance as per client goals & risk appetite. Actively managing AUM > 50 crore rupees.",
                        href: "/",
                        
                        background: <img src={wk1} className="absolute -right-20 -top-25 opacity-20 blur-m " />,
                        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
                      },

                      {
                        Icon: BackpackIcon,
                        name: "Insurance Planning & Risk Management : ",
                        description: "Adequate computation of insurance needs of clients & providing insurance coverage. Handholding and successfully surrendering > 2 crores rupees of insurance products missold to clients by various agents. ",
                        href: "/",
                        
                        background: <img src={wk2} className="absolute -right-[130px] -top-20 opacity-20 scale-[0.7]  " />,
                        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
                      },

                      {
                        Icon: BorderStyleIcon,
                        name: "Comprehensive Financial Plan Preparation :  ",
                        description: "Mentored more than 40 Certified Financial Planner ( CFP®) certification course aspirants to prepare comprehensive financial plans.",
                        href: "/",
                        
                    background: <img src={wk3} className="absolute -right-[130px] top-[-150px] opacity-40 blur-m scale-[1] sm:scale-[0.5] " />,
                        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
                      },

                     

                      {
                        Icon: RulerHorizontalIcon,
                        name: "Physical Shares Conversion Services :",
                        description:
                          "Successfully processed KYC and dematerialisation of Physical share holding of multiple clients in various listed companies. Portfolio of > 1 crore rupees handled successfully.",
                        href: "/",
                        
                        background: <img src={wk5} className="absolute -right-20 -top-20 opacity-20 scale-[0.8] " />,
                        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4",
                      },
              
            ];
  return (
    <>
    <div className='bg-black h-[7rem]'></div>
    <div className='card-content-main  bg-black p-5     sm:p-0   '>
      

      <div className='card-content-01  mx-auto  w-[100%] sm:w-[90%] md:w-[90%]  lg:w-[90%] xl:w-[90%] 2xl:w-[70%]'>
          <div className='card-content-head text-white [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  w-full grid place-items-center rounded-xl    md:p-20 p-5    '>
             

              <h1 className='text-4xl font-medium text-poppins '>
              Driving Growth with Strategic Wealth Management
              </h1>
              {/* <p>

              </p> */}
              
              <div className='sm:w-[70%] mt-3 sm:mt-3 2xl:mt-5 w-[100%] 2xl:w-[80%] sm:flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] p-3 rounded-lg  ' >
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[2em] sm:text-[2em] 2xl:text-[3em] font-medium tracking-tighter text-neutral-400 dark:text-white' ><NumberTicker  value={25} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-400 dark:text-white" />+  Campaigns</p>
                </div>

                
                <div className='w-[100%] sm:w-[50%] flex sm:justify-center items-center ' >
                   <p className='font-poppins whitespace-pre-wrap text-[2em] sm:text-[2.2em] 2xl:text-[3em] font-medium tracking-tighter text-neutral-100 dark:text-white' ><NumberTicker  value={90} className=" font-poppins whitespace-pre-wrap  font-medium tracking-tighter text-neutral-400 dark:text-white" /><span className='text-neutral-400' >% </span> Success rate </p>
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

    <div className='card-content-main2  bg-black pl-5 pr-5 w-[100%] sm:p-0     '>

      <div className=' card-content-main22  mx-auto h-full  gap-3 block w-[100%]  sm:w-[90%]  2xl:w-[70%] sm:flex    '>
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

export default Wealth