
import React from 'react'
import './Profile.css'  
import p1 from '../assets/p-1.jpg';
import p4 from '../assets/p-4.jpg'
import { Progress } from './Progress';
import thedev01 from '../assets/thedev01.png';

import { PhoneCallIcon ,  } from 'lucide-react'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'


function Aryan() {
  return (
    <div className=' profile-main  bg-black '>
                <div className='h-[7rem] sm:h-[10rem] bg-black'>
    
                </div>
        
                <div className='profile-content   w-[100vw]  sm:w-[1344px] mx-auto  '>
                    <div className='sm:w-[85%] w-[95%]  mx-auto p-2 sm:p-5 rounded-tl-xl rounded-tr-xl  '>
                        
                        <div className=' sm:w-[85%] w-[100%] block sm:flex  mx-auto block sm:flex  mb-5 justify-between ' >
        
                        <div className='sm:w-[58.3%] mb-5 sm:mb-0 w-[100%] flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-5 rounded-xl ' >
                        <div   style={{ backgroundImage: `url(${p4})` }}   className=' bg-cover bg-center profile-pic h-[100px] w-[100px] rounded-full [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>
        
                        </div>
                        
                        <div className='profile-name  self-center ml-5 '>
                            <h1 className='text-2xl font-semibold text-neutral-200 ' >
                            Aryan Balwantroy
                           </h1>
                           <p className='text-neutral-400'>Developer</p>
                        </div>
                        </div>
                        <div className='sm:w-[40%]   w-[100%] [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-9 rounded-xl ]' >
                            <h1 className='text-xl font-semibold text-neutral-200   ' >socials</h1>
                            <div className='flex mt-1 gap-1'>  <a href="https://twitter.com/" > <TwitterLogoIcon className='h-7 w-7 text-neutral-600'  /> </a>   <a href="https://www.instagram.com/skyden.psd"><InstagramLogoIcon className='h-7 w-7 text-neutral-600' /> </a>    <a href="https://www.linkedin.com/in/sarada-prasad-b56437267/"><LinkedInLogoIcon className='h-7 w-7 text-neutral-600' /> </a> <a href=""> <GitHubLogoIcon className='h-7 w-7 text-neutral-600' /> </a> </div>
                        </div>
                        
        
                    </div>
        
                    <div className='profile-about w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-xl p-10  ' >
                         <h1 className='text-2xl font-semibold text-neutral-200 mb-2' >about</h1>
                        <p className='text-neutral-400 [font-size:1.1rem] mb-[3px]' >Passionate full-stack and mobile app developer (Android & iOS)</p>
                        <p className='text-neutral-400 [font-size:1.1rem] mb-[3px]' >Skilled in front-end and back-end development</p>
                        <p className='text-neutral-400 [font-size:1.1rem] mb-[3px]' >Deliver scalable, efficient, and user-friendly solutions</p>
                        <p className='text-neutral-400 [font-size:1.1rem] mb-[3px]' >Leverage innovation and teamwork for impactful results</p>
         
                    </div>
                    </div>







                     <div className=' progress w-[100%] sm:w-[85%] mx-auto  p-5 ' >
                                   
                                    
                                      <div className=' md:w-[95%] xl:w-[85%] w-[100%] p-10    mx-auto   mb-5 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl ' >
                     
                                      <h1 className='text-2xl font-semibold text-neutral-200   ' >Stats</h1>
                                      <div className='md:flex w-[100%] pt-2 justify-between gap-3  '  >
                                              <div className='md:w-[60%] w-[100%] p-2 sm:p-5   [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-lg  '  >
                                                    
                                                    <div className='mt-0'>
                                                       <h2 className='text-lg font-semibold text-neutral-300   '  >Design <span className='font-[100]'>|</span> 10%</h2>
                                                       <div className='flex mt-0'>
                                                          <div className='w-[100%] flex' > <Progress  value={10}/>   </div>
                                                          
                                                          
                                                       </div>
                                                    </div>
                                                    <div className='mt-4'>
                                                       <h2 className='text-lg font-semibold text-neutral-300   '  >Development <span className='font-[100]'>|</span> 90%</h2>
                                                       <div className='flex '>
                                                          <div className='w-[100%] flex' > <Progress  value={90}/>   </div>
                                                          
                                                          
                                                       </div>
                                                    </div>
                    
                                                    <div className='mt-4'>
                                                       <h2 className='text-lg font-semibold text-neutral-300   '  >UI/UX <span className='font-[100]'>|</span> 40%</h2>
                                                       <div className='flex '>
                                                          <div className='w-[100%] flex' > <Progress  value={40}/>   </div>
                                                          
                                                          
                                                       </div>
                                                    </div>
                    
                                                    <div className='mt-4'>
                                                       <h2 className='text-lg font-semibold text-neutral-300   '  >AI <span className='font-[100]'>|</span> 60%</h2>
                                                       <div className='flex '>
                                                          <div className='w-[100%] flex' > <Progress  value={60}/>   </div>
                                                          
                                                          
                                                       </div>
                                                    </div>
                    
                                                    <div className='mt-4'>
                                                       <h2 className='text-lg font-semibold text-neutral-300   '  >Project Management <span className='font-[100]'>|</span> 20%</h2>
                                                       <div className='flex '>
                                                          <div className='w-[100%] flex' > <Progress  value={20}/>   </div>
                                                          
                                                          
                                                       </div>
                                                    </div>
                    
                                                    
                                              </div>
                                              <div style={{ backgroundImage: `url(${thedev01})` }}  className=' bg-cover bg-center md:w-[40%] w-[100%] mt-5 md:mt-0   [border:1px_solid_rgba(255,255,255,.1)] rounded-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-10 flex items-end ' >
                                                    
                                                    <div className=' text-white  ' >
                                                    <h1>Analytical</h1>
                                                    <h1>Ingenious</h1>
                                                    <h1>Precise</h1>
                                                    </div>
                    
                                              </div>
                                              </div>
                     
                    
                                      </div>
                                    
                    
                                 </div>
        
                    <div className='profile-work w:[100%] sm:w-[85%] mx-auto  p-5 '>
                        
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto   p-5 ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Project Work</h1>
                              
                        </div> 
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2   ' >CollabCanvas</h1>
                              <p className='text-neutral-400 [font-size:1.1rem]' >a real-time collaborative canvas built with Next.js, TypeScript, and WebSockets for seamless, low-latency team drawing and brainstorming.
    </p>
     <a href="https://github.com/aryanbroy/next_crawler_v2">git repository</a>
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2   '  >Imagenary AI</h1>
                              <p className='text-neutral-400 [font-size:1.1rem]' >Built a media-sharing app with Next.js, Clerk auth, Cloudinary, Prisma, and PostgreSQL. Users upload images/videos with custom thumbnails and aspect ratios. AI-powered cropping and compression optimize content. Supports public posting and downloads.
    </p>
    <a href="https://github.com/aryanbroy/imagenary/tree/main">git repository</a>
        
                        </div>
                        {/* <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200  mb-2  ' >Youtube Playlist Crawler</h1>
                              <p    className='text-neutral-400 [font-size:1.1rem]' >Built a web crawler using Next.js, TypeScript, Crawlee, and Playwright Crawler to extract
and analyze video statistics (e.g., views) from YouTube playlists. Integrated Recharts to
visually represent the data through dynamic graphs, providing clear insights into video
performance trends.</p>
<a href="https://github.com/aryanbroy/next_crawler_v2">git repository</a>
        
                        </div> */}
        
                    </div>
                    <div className='profile-work w:[100%] sm:w-[85%] mx-auto rounded-bl-xl rounded-br-xl   p-5 '>
                        
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto    p-5 ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Core Skills</h1>
                              
                        </div>
                        <div className='sm:flex w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                           <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Full-Stack</h1>
                              <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' > Building scalable, efficient, and robust apps with seamless front- and back-end integration.</p>
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200   '  >Mobile App Developer</h1>
                              <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Craft responsive, user-centric Android and iOS apps with smooth performance and modern design.</p>
        
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >AI/ML</h1>
                              <p    className='text-neutral-400 [font-size:1.1rem] mt-1'  >Developing smart solutions using ML and AI to optimize processes and drive innovation.</p>
          
                        </div>
                        </div>
        
                    </div>
                    
        
        
        
                </div>
    
                <div className='h-[7rem] sm:h-[10rem] bg-black'></div>
        
        
            </div>   
  )
}

export default Aryan