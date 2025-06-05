
import React from 'react'
import './Profile.css'  
import p1 from '../assets/p-1.jpg';
import f01 from '../assets/f01.jpg';
import themanage02 from '../assets/themanage02.png';
import themanage01 from '../assets/themanage01.png';
import { Progress } from './Progress';
import bep_logo from '../assets/bep_logo.png';
import nextleap_logo from '../assets/nextleap_logo.png';
import chessensei_logo from '../assets/chessensei_logo.jpg';
import nschool_logo from '../assets/nschool_logo.jpg';
import wellers_impact_logo from '../assets/wellers_impact_logo.jpg';
import IIRWM_logo from '../assets/IIRWM_logo.jpg';

import { PhoneCallIcon ,  } from 'lucide-react'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'



function Fguy() {
  return (
   <div className=' profile-main  bg-black '>
                   <div className='h-[7rem] sm:h-[10rem] bg-black'>
       
                   </div>
           
                   <div className='profile-content   w-[100vw]  sm:w-[1344px] mx-auto  '>
                       <div className='sm:w-[85%] w-[95%]  mx-auto p-2 sm:p-5 rounded-tl-xl rounded-tr-xl  '>
                           
                           <div className=' sm:w-[85%] w-[100%] block sm:flex  mx-auto block sm:flex  mb-5 justify-between ' >
           
                           <div className='sm:w-[58.3%] mb-5 sm:mb-0 w-[100%] flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-5 rounded-xl ' >
                           <div   style={{ backgroundImage: `url(${f01})` }}   className=' bg-cover bg-center profile-pic h-[100px] w-[100px] rounded-full [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>
           
                           </div>
                           
                           <div className='profile-name  self-center ml-5 '>
                               <h1 className='text-2xl font-semibold text-neutral-200 ' >
                               Rikth Dutta 

                              </h1>
                              <p className='text-neutral-400'>Growth Equity & VC Investment Analyst </p>
                           </div>
                           </div>
                           <div className='sm:w-[40%]   w-[100%] [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-9 rounded-xl ]' >
                               <h1 className='text-xl font-semibold text-neutral-200   ' >socials</h1>
                               <div className='flex mt-1 gap-1'>  <a href="https://twitter.com/" > <TwitterLogoIcon className='h-7 w-7 text-neutral-600'  /> </a>   <a href="https://www.instagram.com/skyden.psd"><InstagramLogoIcon className='h-7 w-7 text-neutral-600' /> </a>    <a href="https://www.linkedin.com/in/rikth-dutta/"><LinkedInLogoIcon className='h-7 w-7 text-neutral-600' /> </a> </div>
                           </div>
                           
           
                       </div>
           
                       <div className='profile-about w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-xl p-10  ' >
                         <h1 className='text-2xl font-semibold text-neutral-200 mb-2  ' >about</h1>
                        <p className='text-neutral-400 [font-size:1.1rem mb-[3px] ]' >Skilled in valuation analysis, financial modeling, and financial reporting.</p> 
                        <p className='text-neutral-400 [font-size:1.1rem mb-[3px] ]' >Certified Financial Planner (CFP) and Chartered Wealth Manager (CWM).</p>
                        <p className='text-neutral-400 [font-size:1.1rem mb-[3px] ]' >Certified in NISM-Series-VIII (Equity Derivatives) and NCCMP by NSE Academy.</p>
                        <p className='text-neutral-400 [font-size:1.1rem mb-[3px] ]' >Passionate about startups, equity markets, and impact investing with a strategic decision-making mindset.</p>
         
                    </div>
                       </div>
           
                      <div className=' progress w-[100%] sm:w-[85%] mx-auto  p-5 ' >
                                                                             
                                                                              
                                                                                <div className=' md:w-[95%] xl:w-[85%] w-[100%] p-10    mx-auto   mb-5 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl ' >
                                                               
                                                                                <h1 className='text-2xl font-semibold text-neutral-200   ' >Stats</h1>
                                                                                <div className='md:flex w-[100%] pt-2 justify-between gap-3  '  >
                                                                                        <div className='md:w-[60%] w-[100%] p-2 sm:p-5   [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-lg  '  >
                                                                                              
                                                                                              <div className='mt-0'>
                                                                                                 <h2 className='text-lg font-semibold text-neutral-300   '  >Data & Metrics Orientation <span className='font-[100]'>|</span> 50%</h2>
                                                                                                 <div className='flex mt-0'>
                                                                                                    <div className='w-[100%] flex' > <Progress  value={50}/>   </div>
                                                                                                    
                                                                                                    
                                                                                                 </div>
                                                                                              </div>
                                                                                              <div className='mt-4'>
                                                                                                 <h2 className='text-lg font-semibold text-neutral-300   '  >Management <span className='font-[100]'>|</span> 90%</h2>
                                                                                                 <div className='flex '>
                                                                                                    <div className='w-[100%] flex' > <Progress  value={90}/>   </div>
                                                                                                    
                                                                                                    
                                                                                                 </div>
                                                                                              </div>
                                                              
                                                                                              <div className='mt-4'>
                                                                                                 <h2 className='text-lg font-semibold text-neutral-300   '  >Presentation & Communication Skills <span className='font-[100]'>|</span> 80%</h2>
                                                                                                 <div className='flex '>
                                                                                                    <div className='w-[100%] flex' > <Progress  value={80}/>   </div>
                                                                                                    
                                                                                                    
                                                                                                 </div>
                                                                                              </div>
                                                              
                                                                                              <div className='mt-4'>
                                                                                                 <h2 className='text-lg font-semibold text-neutral-300   '  >Creativity of Solution <span className='font-[100]'>|</span> 60%</h2>
                                                                                                 <div className='flex '>
                                                                                                    <div className='w-[100%] flex' > <Progress  value={60}/>   </div>
                                                                                                    
                                                                                                    
                                                                                                 </div>
                                                                                              </div>
                                                              
                                                                                              <div className='mt-4'>
                                                                                                 <h2 className='text-lg font-semibold text-neutral-300   '  >Project Management <span className='font-[100]'>|</span> 85%</h2>
                                                                                                 <div className='flex '>
                                                                                                    <div className='w-[100%] flex' > <Progress  value={85}/>   </div>
                                                                                                    
                                                                                                    
                                                                                                 </div>
                                                                                              </div>
                                                              
                                                                                              
                                                                                        </div>
                                                                                        <div style={{ backgroundImage: `url(${themanage01})` }}  className=' bg-cover bg-center md:w-[40%] w-[100%] mt-5 md:mt-0   [border:1px_solid_rgba(255,255,255,.1)] rounded-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-10 flex items-end ' >
                                                                                              
                                                                                              <div className=' text-white  ' >
                                                                                              <h1>Analytical</h1>
                                                                                              <h1>Strategic</h1>
                                                                                              <h1>Diligent</h1>
                                                                                              </div>
                                                              
                                                                                        </div>
                                                                                        </div>
                                                               
                                                              
                                                                                </div>
                                                                              
                                                              
                                                                           </div>
                       <div className='profile-work w:[100%] sm:w-[75%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-t-xl   p-5 '>
                                                                                               
                                                                                               <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto    p-2' >
                                                                                                     <h1 className='text-2xl font-semibold text-neutral-200   ' >Work</h1>
                                                                                                     
                                                                                               </div>
                                                                                               <div className='sm:flex w-[100%] sm:w-[90%] mx-auto  p-0 rounded-xl ' >
                                                                                                  <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                                                                                                     <div className='flex w-[100%] gap-2  ' > <div style={{ backgroundImage: `url(${nschool_logo})` }} className=' bg-cover bg-center min-w-[50px] max-h-[50px] rounded-full bg-gray-500 flex items-center justify-center 
                                                                                       [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]' ></div> <div><h1 className='text-[1rem] font-semibold text-neutral-200'>NEOMA Business School</h1> <p className='text-neutral-400 [font-size:1.1rem] md:[font-size:0.9vw] mt-2 ' > Professor</p>
                                                                                                     <p  className='text-neutral-500 [font-size:1.1rem] md:[font-size:0.8vw] ' >Sept 2024 - present</p> </div> </div>
                                                                                                     
                                                                                                    
                                                                                               </div>
                                                                                               <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                                                                                                     <div className='flex w-[100%] gap-2  ' > <div style={{ backgroundImage: `url(${wellers_impact_logo})` }} className='bg-cover bg-center min-w-[50px] max-h-[50px] rounded-full bg-gray-500 flex items-center justify-center 
                                                                                       [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]' ></div> <div><h1 className='text-[1rem] font-semibold text-neutral-200'>
                      Wellers Impact</h1> <p className='text-neutral-400 [font-size:1.1rem] md:[font-size:0.9vw] mt-2  ' > Investment Research Analyst</p>
                                                                                                     <p  className='text-neutral-500 [font-size:1.1rem] md:[font-size:0.8vw] ' >Jan 2023 - Dec 2024</p> </div> </div>
                                                                                                     
                                                                                                    
                                                                                               </div> 
                                                                                               <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                                                                                                     <div className='flex w-[100%] gap-2  ' > <div style={{ backgroundImage: `url(${IIRWM_logo})` }} className='bg-cover bg-center bg-center min-w-[50px] max-h-[50px] rounded-full bg-gray-500 flex items-center justify-center 
                                                                                       [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]' ></div> <div><h1 className='text-[1rem] font-semibold text-neutral-200'>IIRWM</h1> <p className='text-neutral-400 [font-size:1.1rem] md:[font-size:0.9vw] mt-2 ' >Market Research Analyst </p>
                                                                                                     <p  className='text-neutral-500 [font-size:1.1rem] md:[font-size:0.8vw] ' >Sep 2019 - Aug 2020</p> </div> </div>
                                                                                                     
                                                                                                    
                                                                                               </div> 
                                                                                               </div>
                                                                               
                                                                                           </div>
                       
           
           
           
                   </div>
       
                   <div className='h-[7rem] sm:h-[10rem] bg-black'></div>
           
           
               </div>   
  )
}

export default Fguy