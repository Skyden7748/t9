
import React from 'react'
import './Profile.css'  
import p1 from '../assets/p-1.jpg';
import s01 from '../assets/s01.png'
import { Progress } from './Progress';
import thedev01 from '../assets/thedev01.png';
import themanage02 from '../assets/themanage02.png';
import chessensei_logo from '../assets/chessensei_logo.jpg';
import ms_logo from '../assets/ms_logo.png';
import fiverr from '../assets/fiverr.png';
import bep_logo from '../assets/bep_logo.png';
import nextleap_logo from '../assets/nextleap_logo.png';
import icono from '../assets/icono.png';
import logoss from '../assets/logoss.png';
import ilus from '../assets/ilus.png';
import ilus2 from '../assets/ilus2.jpg';
import { BentoGrid, BentoCard } from './BentoGrid';
import bg1 from '../assets/card-img-1.png';
import bg0 from '../assets/card-img-0.png';
import bg2 from '../assets/card-img-2.png';
import bg3 from '../assets/card-img-3.png';
import bg4 from '../assets/card-img-4.png';
import bg5 from '../assets/card-img-5.png';

import { PhoneCallIcon ,  } from 'lucide-react'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'


function Sambit() {
  
     const features = [
               {
                         
                         name: "logos",
                         description: "Worked  closely with clients to understand their vision and deliver logos that effectively communicate their values and mission.",
                         href: "https://assets.nextleap.app/submissions/Ecommerce-Tech-Gig-Workers-in-Bharat2-35145ef4-7685-4db9-bdb1-8eeaca22142d.pdf",
                         
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
        
                <div className='profile-content   w-[100vw]  sm:w-[1344px] mx-auto  '>
                    <div className='sm:w-[85%] w-[95%]  mx-auto p-2 sm:p-5 rounded-tl-xl rounded-tr-xl  '>
                        
                        <div className=' sm:w-[85%] w-[100%] block sm:flex  mx-auto block sm:flex  mb-5 justify-between ' >
        
                        <div className='sm:w-[58.3%] mb-5 sm:mb-0 w-[100%] flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-5 rounded-xl ' >
                        <div   style={{ backgroundImage: `url(${s01})` }}   className=' bg-cover bg-center profile-pic sm:h-[100px] sm:w-[100px] h-[100px] w-[200px]  rounded-full [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>
        
                        </div>
                        
                        <div className='profile-name  self-center ml-5 '>
                            <h1 className='text-2xl font-semibold text-neutral-200 ' >
                            Sambit Maharana
                           </h1>
                           <p className='text-neutral-400 text-sm'>Master in Management | NEOMA BUSINESS SCHOOL </p>
                        </div>
                        </div>
                        <div className='sm:w-[40%]   w-[100%] [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-9 rounded-xl ]' >
                            <h1 className='text-xl font-semibold text-neutral-200   ' >socials</h1>
                            <div className='flex mt-1 gap-1'>  <a href="https://twitter.com/" > <TwitterLogoIcon className='h-7 w-7 text-neutral-600'  /> </a>   <a href="https://www.linkedin.com/in/sambit-maharana/"><LinkedInLogoIcon className='h-7 w-7 text-neutral-600' /> </a> </div>
                        </div>
                        
        
                    </div>
        
                    <div className='profile-about w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-xl p-10  ' >
                         <h1 className='text-2xl font-semibold text-neutral-200 mb-2  ' >about</h1>
                        <p className='text-neutral-400 [font-size:1.1rem mb-[3px] ]' >Product manager with expertise in planning, development, and implementation.</p> 
                        <p className='text-neutral-400 [font-size:1.1rem mb-[3px] ]' >Skilled in digital marketing, IT tools, and team leadership</p>
                        <p className='text-neutral-400 [font-size:1.1rem mb-[3px] ]' >Strong in process improvement, ideation, and critical thinking</p>
                        <p className='text-neutral-400 [font-size:1.1rem mb-[3px] ]' >Passionate about entrepreneurship</p>
         
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
                                                                  <div style={{ backgroundImage: `url(${themanage02})` }}  className=' bg-cover bg-center md:w-[40%] w-[100%] mt-5 md:mt-0   [border:1px_solid_rgba(255,255,255,.1)] rounded-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-10 flex items-end ' >
                                                                        
                                                                        <div className=' text-white  ' >
                                                                        <h1>Visionary</h1>
                                                                        <h1>Empathetic</h1>
                                                                        <h1>Decisive</h1>
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
                                                                               <div className='flex w-[100%] gap-2  ' > <div style={{ backgroundImage: `url(${nextleap_logo})` }} className=' bg-cover bg-center min-w-[50px] max-h-[50px] rounded-full bg-gray-500 flex items-center justify-center 
                                                                 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]' ></div> <div><h1 className='text-[1rem] font-semibold text-neutral-200'>NextLeap | Product Management Fellow</h1> <p className='text-neutral-400 [font-size:1.1rem] md:[font-size:0.9vw] mt-2 ' >NextLeap · Trainee</p>
                                                                               <p  className='text-neutral-500 [font-size:1.1rem] md:[font-size:0.8vw] ' >may 2024 - Jul 2024</p> </div> </div>
                                                                               
                                                                              
                                                                         </div>
                                                                         <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                                                                               <div className='flex w-[100%] gap-2  ' > <div style={{ backgroundImage: `url(${chessensei_logo})` }} className='bg-cover bg-center min-w-[50px] max-h-[50px] rounded-full bg-gray-500 flex items-center justify-center 
                                                                 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]' ></div> <div><h1 className='text-[1rem] font-semibold text-neutral-200'>
Chessensei</h1> <p className='text-neutral-400 [font-size:1.1rem] md:[font-size:0.9vw] mt-2  ' > Program Manager & Co-Founder</p>
                                                                               <p  className='text-neutral-500 [font-size:1.1rem] md:[font-size:0.8vw] ' >Nov 2022 - May 2024</p> </div> </div>
                                                                               
                                                                              
                                                                         </div> 
                                                                         <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                                                                               <div className='flex w-[100%] gap-2  ' > <div style={{ backgroundImage: `url(${bep_logo})` }} className='bg-cover bg-center bg-center min-w-[50px] max-h-[50px] rounded-full bg-gray-500 flex items-center justify-center 
                                                                 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]' ></div> <div><h1 className='text-[1rem] font-semibold text-neutral-200'>BEPEC Solutions . Full time</h1> <p className='text-neutral-400 [font-size:1.1rem] md:[font-size:0.9vw] mt-2 ' > Program Manager </p>
                                                                               <p  className='text-neutral-500 [font-size:1.1rem] md:[font-size:0.8vw] ' >Sep 2018 - Aug 2020</p> </div> </div>
                                                                               
                                                                              
                                                                         </div> 
                                                                         </div>
                                                         
                                                                     </div>

                                                                      {/* <div className='profile-work w:[90%] sm:w-[85%] mx-auto rounded-bl-xl rounded-br-xl   p-5 md:pl-20  md:pr-20 pt-5 '>
                      <div className='w-[100%] sm:w-[95%] mx-auto mt-3  p-2 md:p-3 md:mt-5 rounded-xl '>
                       <h1 className='text-2xl font-semibold text-neutral-200   ' >Projects</h1> </div>
                    
                             <BentoGrid className="   ">
                                   {features.map((feature) => (
                                  <BentoCard key={feature.name} {...feature} /> 
                                  ))}

              
                             </BentoGrid>
                    
    
                </div>  */}
        
                    {/* <div className='profile-work w:[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                        
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto   p-5 ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Work Experience</h1>
                              
                        </div> 
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2   ' >NextLeap | Product Management Fellow </h1>
                              <p className='text-neutral-400 [font-size:1.1rem]' >Conducted comprehensive market analysis of India's food delivery sector, assessing market size, competitors, regulatory landscape, and ecosystem dynamics. 
    </p> 
    <p className='text-neutral-400 [font-size:1.1rem] mt-3' >
    Analyzed ratings and reviews mechanisms across diverse food delivery platforms, pinpointing critical features and strategies for enhancing user engagement. 
    </p>

    <p className='text-neutral-400 [font-size:1.1rem] mt-3' >
    Developed actionable insights for Zomato on the significance of reviews, outlining specific product goals to boost customer text reviews. 
    </p>

    <p className=' text-neutral-400 [font-size:1.1rem] mt-3 '>
    Executed user research methodologies, including surveys and interviews, to gather insights and validate product hypotheses. Developed wireframes, user flows, and prototypes to visualize and iterate on product features.
    </p>
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2   '  > Chessensei | Program Manager & Co-Founder</h1>
                              <p className='text-neutral-400 [font-size:1.1rem]' >Directed the development and management of the Learning Management System (LMS), ensuring it was user-friendly, visually appealing, and equipped with essential features to enhance user engagement
    </p>

    <p className=' text-neutral-400 [font-size:1.1rem] mt-3 '>
    Conducted user surveys and provided actionable insights, driving a 15% improvement in LMS usability.
    </p>
    <p className=' text-neutral-400 [font-size:1.1rem] mt-3 '>
    Collaborated on website redesign, improving aesthetics and functionality, leading to a 25% increase in user retention & engagement.
    </p>
        
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200  mb-2  ' > BEPEC Solutions | Program Manager</h1>
                              <p    className='text-neutral-400 [font-size:1.1rem]' >Strategized and launched AI & ML learning programs, tracked performance metrics, and controlled associated costs. Organized and executed five tech events to enhance learner retention. </p>
                              
                              <p className=' text-neutral-400 [font-size:1.1rem] mt-3 '>
    Conducted client meetings, drafted project specifications, and oversaw website development projects. Increased brand awareness locally and boosted audience interest by 30% through strategic marketing campaigns.
    </p>
    <p className=' text-neutral-400 [font-size:1.1rem] mt-3 '>
    Negotiated business collaboration terms, resulting in a 20% expansion in new market presence.
    </p>

        
                        </div>
        
                    </div> */}






                    <div className='profile-work w:[100%] sm:w-[75%] mx-auto rounded-bl-xl rounded-br-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)]  p-5 '>
                        
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto    p-5 ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Projects</h1>
                              
                        </div>
                        <div className='sm:flex w-[100%] sm:w-[95%] mx-auto p-5 rounded-xl ' >
                           <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2  ' >Ecommerce Tech Gig
Workers in Bharat
</h1>
                             
                              {/* <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Insightful, data-driven analysis with accuracy and clarity.</p> */}
                               <button className=' cursor-pointer text-neutral-200 [font-size:1rem] mt-1 bg-black pt-1 pb-1 pl-4 pr-4 rounded-md [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.4)] ' onClick={() => { window.open('https://assets.nextleap.app/submissions/Ecommerce-Tech-Gig-Workers-in-Bharat2-35145ef4-7685-4db9-bdb1-8eeaca22142d.pdf') }} ><p> View  </p></button>
                              
                        </div>
                       <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2  ' >Automated Shopping Assistance For Adidas</h1>
                             
                              {/* <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Insightful, data-driven analysis with accuracy and clarity.</p> */}
                               <button className=' cursor-pointer text-neutral-200 [font-size:1rem] mt-1 bg-black pt-1 pb-1 pl-4 pr-4 rounded-md [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.4)] ' onClick={() => { window.open('https://assets.nextleap.app/submissions/AutomatedShoppingAssistanceForAdidas1-3e16d717-4468-4e80-a30d-8919b00a410c.pdf') }} ><p> View  </p></button>
                              
                        </div>
                        <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2  ' >Launch Plan for High-Frequent Users</h1>
                             
                              {/* <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Insightful, data-driven analysis with accuracy and clarity.</p> */}
                               <button className=' cursor-pointer text-neutral-200 [font-size:1rem] mt-1 bg-black pt-1 pb-1 pl-4 pr-4 rounded-md [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.4)] ' onClick={() => { window.open('https://assets.nextleap.app/submissions/Launch-Plan-for-High-Frequent-Users-a47512a0-6fa6-4ed9-8843-1eff256a7f17.pdf') }} ><p> View  </p></button>
                              
                        </div>
                        </div>
                        <div className='sm:flex w-[100%] sm:w-[95%] mx-auto p-5 rounded-xl ' >
                           <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2  ' >STREETBITE, your local street food companion in hand
</h1>
                             
                              {/* <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Insightful, data-driven analysis with accuracy and clarity.</p> */}
                               <button className=' cursor-pointer text-neutral-200 [font-size:1rem] mt-1 bg-black pt-1 pb-1 pl-4 pr-4 rounded-md [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.4)] ' onClick={() => { window.open('https://assets.nextleap.app/submissions/NLSTREETBITEAPP1-70fd4843-5c53-49f0-ab6b-c8c2769b26af.pdf') }} ><p> View  </p></button>
                              
                        </div>
                       <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2  ' >Understanding the
Food Delivery
Market in India</h1>
                             
                              {/* <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Insightful, data-driven analysis with accuracy and clarity.</p> */}
                               <button className=' cursor-pointer text-neutral-200 [font-size:1rem] mt-1 bg-black pt-1 pb-1 pl-4 pr-4 rounded-md [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.4)] ' onClick={() => { window.open('https://assets.nextleap.app/submissions/Understanding-the-Food-Delivery-Market-in-India-396b44e7-609f-4225-9470-b9deed72a79a.pdf') }} ><p> View  </p></button>
                              
                        </div>
                        <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2  ' >Zomato's User
Segmentation and
Review Insights</h1>
                             
                              {/* <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Insightful, data-driven analysis with accuracy and clarity.</p> */}
                               <button className=' cursor-pointer text-neutral-200 [font-size:1rem] mt-1 bg-black pt-1 pb-1 pl-4 pr-4 rounded-md [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.4)] ' onClick={() => { window.open('https://assets.nextleap.app/submissions/Zomatos-User-Segmentation-and-Review-Insights-bcbd1f6c-d092-44ad-9e4f-98a9e1d642a1.pdf') }} ><p> View  </p></button>
                              
                        </div>
                        </div>
        
                    </div>
                    
        
        
        
                </div>
    
                <div className='h-[7rem] sm:h-[10rem] bg-black'></div>
        
        
            </div>   
  )
}

export default Sambit