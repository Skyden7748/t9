
import React from 'react'
import './Profile.css'  
import p1 from '../assets/p-1.jpg';
import p4 from '../assets/p-4.jpg'

import { PhoneCallIcon ,  } from 'lucide-react'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'


function Aryan() {
  return (
    <div className=' profile-main  bg-black '>
                <div className='h-[7rem] sm:h-[10rem] bg-black'>
    
                </div>
        
                <div className='profile-content   w-[100vw]  sm:w-[1344px] mx-auto  '>
                    <div className='sm:w-[85%] w-[95%]  mx-auto p-2 sm:p-5 rounded-tl-xl rounded-tr-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>
                        
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
                         <h1 className='text-2xl font-semibold text-neutral-200   ' >about</h1>
                        <p className='text-neutral-400 [font-size:1.1rem]' >I am a passionate developer with expertise in front-end and back-end development, mobile app development for Android and iOS, as well as AI and machine learning. I specialize in delivering scalable, efficient, and user-friendly solutions, leveraging innovation and collaboration to achieve impactful results.
        
        </p>
         
                    </div>
                    </div>
        
                    <div className='profile-work w:[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                        
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto   p-5 ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Work Experience</h1>
                              
                        </div> 
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2   ' >CollabCanvas</h1>
                              <p className='text-neutral-400 [font-size:1.1rem]' >CollabCanvas is a real-time collaborative drawing and brainstorming web application
built using Next.js, TypeScript, and WebSockets. It enables multiple users to interact
seamlessly on a shared canvas with low-latency updates, making it ideal for team
collaboration and creative workflows. The application features a user-friendly interface for
drawing and annotating in real time, with TypeScript ensuring type safety and maintainable
code. CollabCanvas delivers a smooth, responsive experience across various user
environments.
    interface.
    </p>
     <a href="https://github.com/aryanbroy/next_crawler_v2">git repository</a>
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200 mb-2   '  >Imagenary AI</h1>
                              <p className='text-neutral-400 [font-size:1.1rem]' >Developed a web application using Next.js, Cloudinary, Clerk for authentication, and
Prisma ORM with PostgreSQL to manage user and media data. The platform allows users
to upload images, videos, and custom thumbnail images, with an option to select different
aspect ratios. Integrated AI technology crops thumbnails while retaining key content and
compresses image sizes for optimized download. Users can post videos and share them
with others for public access and download.
    </p>
    <a href="https://github.com/aryanbroy/imagenary/tree/main">git repository</a>
        
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200  mb-2  ' >Youtube Playlist Crawler</h1>
                              <p    className='text-neutral-400 [font-size:1.1rem]' >Built a web crawler using Next.js, TypeScript, Crawlee, and Playwright Crawler to extract
and analyze video statistics (e.g., views) from YouTube playlists. Integrated Recharts to
visually represent the data through dynamic graphs, providing clear insights into video
performance trends.</p>
<a href="https://github.com/aryanbroy/next_crawler_v2">git repository</a>
        
                        </div>
        
                    </div>
                    <div className='profile-work w:[100%] sm:w-[85%] mx-auto rounded-bl-xl rounded-br-xl  [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                        
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto    p-5 ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Key Attributes</h1>
                              
                        </div>
                        <div className='sm:flex w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                           <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Full-Stack</h1>
                              <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >I build scalable, efficient, and robust applications with a seamless integration of front-end and back-end technologies.</p>
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200   '  >Mobile App Developer</h1>
                              <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >I create responsive, user-focused mobile apps for Android and iOS, ensuring smooth functionality and modern design.</p>
        
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >AI/ML</h1>
                              <p    className='text-neutral-400 [font-size:1.1rem] mt-1'  >I develop intelligent solutions by leveraging machine learning and artificial intelligence to optimize processes and enhance innovation.</p>
          
                        </div>
                        </div>
        
                    </div>
                    
        
        
        
                </div>
    
                <div className='h-[7rem] sm:h-[10rem] bg-black'></div>
        
        
            </div>   
  )
}

export default Aryan