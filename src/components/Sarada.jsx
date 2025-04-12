
import React from 'react'
import './Profile.css'  
import p1 from '../assets/p-1.jpg';

import { PhoneCallIcon ,  } from 'lucide-react'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Progress } from './Progress';
import { BentoGrid, BentoCard } from './BentoGrid';
import bg1 from '../assets/card-img-1.png';
import bg0 from '../assets/card-img-0.png';
import bg2 from '../assets/card-img-2.png';
import bg3 from '../assets/card-img-3.png';
import bg4 from '../assets/card-img-4.png';
import bg5 from '../assets/card-img-5.png';
import icono from '../assets/icono.png';
import logoss from '../assets/logoss.png';
import ilus from '../assets/ilus.png';
import ilus2 from '../assets/ilus2.jpg';
import theartist01 from '../assets/theartist01.png';
import chessensei_logo from '../assets/chessensei_logo.jpg';
import ms_logo from '../assets/ms_logo.png';
import fiverr from '../assets/fiverr.png';

import {
   BellIcon,
   CalendarIcon,
   FileTextIcon,
   GlobeIcon,
   InputIcon,
   FaceIcon,
   
   
   RocketIcon,
 } from "@radix-ui/react-icons"; 
import Examplee from './HoScroll2';











function Sarada() {

   const features = [
           {
                     
                     name: "logos",
                     description: "Worked closely with clients to understand their vision and deliver logos that effectively communicate their values and mission.",
                     href: "/",
                     
                     background: <img src={logoss} className="absolute -right-0 -top-10   md:right-10 md:-top-25 md:scale-[1.5]  md:-right-20 md:-top-25 opacity-20 bg-cover  " />,
                     className: "col-span-3 lg:col-span-1 h-[15rem] md:h-[30rem]",
                   },
                   {
                     
                     name: "Iconography",
                     description: "for web and mobile interfaces, creating custom icons that align with brand identities and enhance user experience. ",
                     href: "/",
                     
                     background: <img src={icono} className="absolute -right-[160px] -top-40 opacity-100 scale-[0.4]  " />,
                     className: "col-span-3 lg:col-span-2 h-[30rem]",
                   },
                   {
                     
                     name: "UIUX / Frontend Development",
                     description: "Led the end-to-end design process from user research, wireframing, prototyping, and usability testing, ensuring optimal user experiences.",
                     href: "/",

                     
                     background: <img src={ilus} className="absolute -right-[130px] top-[-150px] opacity-100 blur-m bg-cover scale-[0.8]   " />,
                     className: "col-span-3 lg:col-span-2 h-[20rem]",
                   },
                   {
                     
                     name: "Illustrations",
                     description: "custom illustrations for various clients, including digital art, branding elements, web designs, and editorial pieces. ",
                     href: "/",
                     
                     background: <img src={ilus2} className="absolute -right-[90px] sm:-right-[120px] -top-[200px] opacity-90  bg-cover scale-[0.7]   " />,
                     className: "col-span-3 lg:col-span-1 h-[15rem] md:h-[30rem]",
                   },
                  //  {
                  //    Icon: CalendarIcon,
                  //    name: "Maintenance and Support",
                  //    description:
                  //      "99.9% Uptime Guaranteed. 24/7 Support Coverage,  Issues Resolved with in 24 Hours",
                  //    href: "/",
                     
                  //    background: <img src={bg5} className="absolute -right-20 -top-20 opacity-20 scale-[0.8] " />,
                  //    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
                  //  },
         ];






  return (
    <div className=' profile-main  bg-black '>
            <div className='h-[7rem] sm:h-[10rem] bg-black'>

            </div>
    
            <div className='profile-content   w-[100vw]  md:w-[100vw]   xl:w-[90vw] mx-auto  '>
                <div className='sm:w-[85%] w-[95%]  mx-auto p-2 sm:p-5 rounded-tl-xl rounded-tr-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>
                    
                    <div className=' md:w-[95%] xl:w-[85%] w-[100%] block sm:flex  mx-auto block sm:flex  mb-5 justify-between ' >
    
                    <div className='sm:w-[58.3%] mb-5 sm:mb-0 w-[100%] flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-5 rounded-xl ' >
                    <div   style={{ backgroundImage: `url(${p1})` }}   className=' bg-cover bg-center profile-pic h-[100px] w-[100px] rounded-full [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>
    
                    </div>
                    
                    <div className='profile-name  self-center ml-5 '>
                        <h1 className='text-2xl font-semibold text-neutral-200 ' >
                           Sarada Prasad
                       </h1>
                       <p className='text-neutral-400'>Designer, Developer</p>
                    </div>
                    </div>
                    <div className='sm:w-[40%]   w-[100%] [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-9 rounded-xl ]' >
                        <h1 className='text-xl font-semibold text-neutral-200   ' >socials</h1>
                        <div className='flex mt-1 gap-1'>  <a href="https://twitter.com/" > <TwitterLogoIcon className='h-7 w-7 text-neutral-600'  /> </a>   <a href="https://www.instagram.com/skyden.psd"><InstagramLogoIcon className='h-7 w-7 text-neutral-600' /> </a>    <a href="https://www.linkedin.com/in/sarada-prasad-b56437267/"><LinkedInLogoIcon className='h-7 w-7 text-neutral-600' /> </a> </div>
                    </div>
                    
    
                </div>
    
                <div className='profile-about md:w-[95%] xl:w-[85%] w-[100%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-xl p-10  ' >
                     <h1 className='text-2xl font-semibold text-neutral-200   ' >about</h1>
                    <p className='text-neutral-400 [font-size:1.1rem]' >I am a passionate professional with expertise in graphics design, UI/UX design, and front-end development. I craft visually appealing and user-friendly digital experiences with creativity and precision.
    
    Since 2021, I have honed my skills as a freelance designer, expanding into web development in 2023. I take pride in delivering quality results and thrive on collaboration.
    
    </p>
     
                </div>
                </div>

                <div className=' progress w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 ' >
                  
                   
                     <div className=' md:w-[95%] xl:w-[85%] w-[100%] p-10    mx-auto   mb-5 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl ' >
    
                     <h1 className='text-2xl font-semibold text-neutral-200   ' >Stats</h1>
                     <div className='md:flex w-[100%] pt-2 justify-between gap-3  '  >
                             <div className='md:w-[60%] w-[100%] p-2 sm:p-5   [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-lg  '  >
                                   
                                   <div className='mt-0'>
                                      <h2 className='text-lg font-semibold text-neutral-300   '  >Design <span className='font-[100]'>|</span> 90%</h2>
                                      <div className='flex mt-0'>
                                         <div className='w-[100%] flex' > <Progress  value={90}/>   </div>
                                         
                                         
                                      </div>
                                   </div>
                                   <div className='mt-4'>
                                      <h2 className='text-lg font-semibold text-neutral-300   '  >Development <span className='font-[100]'>|</span> 50%</h2>
                                      <div className='flex '>
                                         <div className='w-[100%] flex' > <Progress  value={50}/>   </div>
                                         
                                         
                                      </div>
                                   </div>

                                   <div className='mt-4'>
                                      <h2 className='text-lg font-semibold text-neutral-300   '  >User Experience <span className='font-[100]'>|</span> 80%</h2>
                                      <div className='flex '>
                                         <div className='w-[100%] flex' > <Progress  value={80}/>   </div>
                                         
                                         
                                      </div>
                                   </div>

                                   <div className='mt-4'>
                                      <h2 className='text-lg font-semibold text-neutral-300   '  >User Research <span className='font-[100]'>|</span> 70%</h2>
                                      <div className='flex '>
                                         <div className='w-[100%] flex' > <Progress  value={70}/>   </div>
                                         
                                         
                                      </div>
                                   </div>

                                   <div className='mt-4'>
                                      <h2 className='text-lg font-semibold text-neutral-300   '  >Project Management <span className='font-[100]'>|</span> 60%</h2>
                                      <div className='flex '>
                                         <div className='w-[100%] flex' > <Progress  value={60}/>   </div>
                                         
                                         
                                      </div>
                                   </div>

                                   
                             </div>
                             <div style={{ backgroundImage: `url(${theartist01})` }}  className=' bg-cover bg-center md:w-[40%] w-[100%] mt-5 md:mt-0   [border:1px_solid_rgba(255,255,255,.1)] rounded-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-10 flex items-end ' >
                                   
                                   <div className=' text-neutral-200  ' >
                                   <h1>Expressive</h1>
                                   <h1>Masterful</h1>
                                   <h1>Original</h1>
                                   </div>

                             </div>
                             </div>
    

                     </div>
                   

                </div>
    
                {/* <div className='profile-work w:[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                    
                    <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto   p-5 ' >
                          <h1 className='text-2xl font-semibold text-neutral-200   ' >Work Experience</h1>
                          
                    </div> 
                    <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                          <h1 className='text-2xl font-semibold text-neutral-200 mb-2   ' >CHESSENSEI | Front-End Developer</h1>
                          <p className='text-neutral-400 [font-size:1.1rem]' >Spearheaded the development of the company's website, overseeing the entire front-end
process from initial design to full implementation, and ensuring a cohesive and user-friendly
interface.
</p>
                    </div>
                    <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                          <h1 className='text-2xl font-semibold text-neutral-200 mb-2   '  >Mainstay-Abroad</h1>
                          <p className='text-neutral-400 [font-size:1.1rem]' >Built their website to help the reach more clients and streamline their services.
Created an online portal to represent their brand.
</p>
    
                    </div>
                    <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                          <h1 className='text-2xl font-semibold text-neutral-200  mb-2  ' >Freelance Design Work</h1>
                          <p    className='text-neutral-400 [font-size:1.1rem]' >I’ve had the privilege of working with numerous clients across industries, delivering tailored designs that align with their unique goals. From startups to established brands, I’ve adapted to diverse styles and challenges, ensuring every project leaves a lasting impact.</p>
    
                    </div>
    
                </div> */}
                <div className='profile-work w:[100%] sm:w-[85%] mx-auto   [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                    
                    <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto    p-2' >
                          <h1 className='text-2xl font-semibold text-neutral-200   ' >Work</h1>
                          
                    </div>
                    <div className='sm:flex w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                       <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                          <div className='flex w-[100%] gap-2  ' > <div style={{ backgroundImage: `url(${chessensei_logo})` }} className=' bg-cover bg-center min-w-[50px] max-h-[50px] rounded-full bg-gray-500 flex items-center justify-center 
            [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]' ></div> <div><h1 className='text-[1rem] font-semibold text-neutral-200'>CHESSENSEI  | Front-End Developer</h1> <p className='text-neutral-400 [font-size:1.1rem] md:[font-size:0.9vw] mt-2 ' > Developer / Designer</p>
                          <p  className='text-neutral-500 [font-size:1.1rem] md:[font-size:0.8vw] ' >Apr 2023 - Jan 2024</p> </div> </div>
                          
                         
                    </div>
                    <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                          <div className='flex w-[100%] gap-2  ' > <div style={{ backgroundImage: `url(${ms_logo})` }} className='bg-cover bg-center min-w-[50px] max-h-[50px] rounded-full bg-gray-500 flex items-center justify-center 
            [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]' ></div> <div><h1 className='text-[1rem] font-semibold text-neutral-200'>Mainstay Abroad | UI UX Designer</h1> <p className='text-neutral-400 [font-size:1.1rem] md:[font-size:0.9vw] mt-2  ' > Logo Design, Brand Identity creation</p>
                          <p  className='text-neutral-500 [font-size:1.1rem] md:[font-size:0.8vw] ' >Aug 2024 - nov 2024</p> </div> </div>
                          
                         
                    </div> 
                    <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                          <div className='flex w-[100%] gap-2  ' > <div style={{ backgroundImage: `url(${fiverr})` }} className='bg-cover bg-center bg-center min-w-[50px] max-h-[50px] rounded-full bg-gray-500 flex items-center justify-center 
            [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]' ></div> <div><h1 className='text-[1rem] font-semibold text-neutral-200'>Freelance Work</h1> <p className='text-neutral-400 [font-size:1.1rem] md:[font-size:0.9vw] mt-2 ' > illustrator, graphic designer, web designer</p>
                          <p  className='text-neutral-500 [font-size:1.1rem] md:[font-size:0.8vw] ' >2021 - present</p> </div> </div>
                          
                         
                    </div> 
                    </div>
    
                </div>

                <div className='profile-work w:[90%] sm:w-[85%] mx-auto rounded-bl-xl rounded-br-xl  [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 md:pl-20  md:pr-20 pt-5 '>
                    
                    {/* <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto    p-5 ' >
                          <h1 className='text-2xl font-semibold text-neutral-200   ' >Work Experience</h1>
                          
                    </div> */}
                    <div className='w-[100%] sm:w-[95%] mx-auto mt-3  p-2 md:p-3 md:mt-5 rounded-xl '>
                    <h1 className='text-2xl font-semibold text-neutral-200   ' >Projects</h1> </div>
                    
                    <BentoGrid className="   ">
              {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} /> 
             ))}

              // 
    </BentoGrid>
                    
    
                </div>
                
    
    
    
            </div>

            <div className=' mt-5 w-[100%] md:w-[80%] mx-auto  ' >
               <Examplee/>
            </div>

            <div className='h-[7rem] sm:h-[10rem] bg-black'></div>
    
    
        </div>   
  )
}

export default Sarada