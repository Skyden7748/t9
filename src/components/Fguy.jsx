
import React from 'react'
import './Profile.css'  
import p1 from '../assets/p-1.jpg';
import f01 from '../assets/f01.jpg';

import { PhoneCallIcon ,  } from 'lucide-react'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'



function Fguy() {
  return (
   <div className=' profile-main  bg-black '>
                   <div className='h-[7rem] sm:h-[10rem] bg-black'>
       
                   </div>
           
                   <div className='profile-content   w-[100vw]  sm:w-[1344px] mx-auto  '>
                       <div className='sm:w-[85%] w-[95%]  mx-auto p-2 sm:p-5 rounded-tl-xl rounded-tr-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>
                           
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
                            <h1 className='text-2xl font-semibold text-neutral-200   ' >about</h1>
                           <p className='text-neutral-400 [font-size:1.1rem]' >passionate finance professional with expertise in valuation analysis, financial modeling, and reporting. I have a strong interest in innovative startups, equity markets, and impact investing. Holding certifications as a Certified Financial Planner (CFP) and Chartered Wealth Manager (CWM), I have built a solid foundation in wealth management. My academic background includes an MSc in Finance, Investment, and Wealth Management, along with a Master’s in Commerce and several professional certifications, including NISM-Series-VIII: Equity Derivatives and NSE Academy's Certified Capital Market Professional (NCCMP). With a deep understanding of financial strategies, I am driven to make informed, impactful decisions.
           
           </p>
            
                       </div>
                       </div>
           
                       <div className='profile-work w:[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                           
                           <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto   p-5 ' >
                                 <h1 className='text-2xl font-semibold text-neutral-200   ' >Work Experience</h1>
                                 
                           </div> 
                           <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                                 <h1 className='text-2xl font-semibold text-neutral-200 mb-2   ' >Wellers Impact | Investment Research Analyst</h1>
                                 <p className='text-neutral-400 [font-size:1.1rem]' >I conducted detailed risk analysis to evaluate portfolio acquisitions, ensuring compliance with IFRS principles and accounting standards. I integrated risk assessment methodologies into model development and played a key role in mitigating risks during syndicated investment negotiations. I collaborated with cross-border teams to ensure IFRS compliance, using data analysis to improve operational efficiency and foster a risk-aware culture within the organization.
       interface.
       </p>
                           </div>
                           <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                                 <h1 className='text-2xl font-semibold text-neutral-200 mb-2   '  >NEOMA MSc Entrepreneurship & Innovation</h1>
                                 <p className='text-neutral-400 [font-size:1.1rem]' >Analyzed 35+ startup projects and developed financial models using advanced Excel. Created business strategies to boost cash flows through scenario and sensitivity analysis, and applied tailored valuation models for both pre- and post-revenue startups.
       </p>
           
                           </div>
                           <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                                 <h1 className='text-2xl font-semibold text-neutral-200  mb-2  ' >Supervising Lecturer | NEOMA Business School</h1>
                                 <p    className='text-neutral-400 [font-size:1.1rem]' >As a Supervising Lecturer at NEOMA Business School, I guide and mentor students in their academic journey, providing insights into finance, investment strategies, and business management. I facilitate engaging lessons, ensuring students gain a solid understanding of key concepts while encouraging critical thinking and practical application. My role includes overseeing student progress, offering personalized support, and fostering a collaborative learning environment that prepares students for the complexities of the financial world.</p>
           
                           </div>
           
                       </div>
                       <div className='profile-work w:[100%] sm:w-[85%] mx-auto rounded-bl-xl rounded-br-xl  [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                           
                           <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto    p-5 ' >
                                 <h1 className='text-2xl font-semibold text-neutral-200   ' >Key Attributes</h1>
                                 
                           </div>
                           <div className='sm:flex w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                                 <h1 className='text-2xl font-semibold text-neutral-200   ' >Mentorship</h1>
                                 <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Provides guidance and personalized support to students, fostering academic and professional growth.</p>
                           </div>
                           <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                                 <h1 className='text-2xl font-semibold text-neutral-200   '  >Finance</h1>
                                 <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Possesses deep knowledge in finance, investment strategies, and business management, translating complex concepts into accessible lessons.</p>
           
                           </div>
                           <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                                 <h1 className='text-2xl font-semibold text-neutral-200   ' >Leadership</h1>
                                 <p    className='text-neutral-400 [font-size:1.1rem] mt-1'  >Oversees student progress and creates a collaborative learning environment, encouraging critical thinking and practical application.  </p>
             
                           </div>
                           </div>
           
                       </div>
                       
           
           
           
                   </div>
       
                   <div className='h-[7rem] sm:h-[10rem] bg-black'></div>
           
           
               </div>   
  )
}

export default Fguy