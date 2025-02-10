
import React from 'react'
import './Profile.css'  
import p1 from '../assets/p-1.jpg';
import s01 from '../assets/s01.png'

import { PhoneCallIcon ,  } from 'lucide-react'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'


function Sambit() {
  return (
    <div className=' profile-main  bg-black '>
                <div className='h-[7rem] sm:h-[10rem] bg-black'>
    
                </div>
        
                <div className='profile-content   w-[100vw]  sm:w-[1344px] mx-auto  '>
                    <div className='sm:w-[85%] w-[95%]  mx-auto p-2 sm:p-5 rounded-tl-xl rounded-tr-xl [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>
                        
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
                         <h1 className='text-2xl font-semibold text-neutral-200   ' >about</h1>
                        <p className='text-neutral-400 [font-size:1.1rem]' >product manager skilled in project planning, product development, and implementation. Skilled in digital marketing, IT tools, and team leadership. Strong in process improvement, ideation, and critical thinking. Passionate about entrepreneurship.
        
        </p>
         
                    </div>
                    </div>
        
                    <div className='profile-work w:[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                        
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
        
                    </div>
                    <div className='profile-work w:[100%] sm:w-[85%] mx-auto rounded-bl-xl rounded-br-xl  [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                        
                        <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto    p-5 ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Key Attributes</h1>
                              
                        </div>
                        <div className='sm:flex w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                           <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Data Analysis</h1>
                              <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >Insightful, data-driven analysis with accuracy and clarity.</p>
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200   '  > Project Management</h1>
                              <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >manage projects efficiently, ensuring timely and smooth delivery.</p>
        
                        </div>
                        <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                              <h1 className='text-2xl font-semibold text-neutral-200   ' >Market Research</h1>
                              <p    className='text-neutral-400 [font-size:1.1rem] mt-1'  >conduct market research to uncover insights that drive decisions.</p>
          
                        </div>
                        </div>
        
                    </div>
                    
        
        
        
                </div>
    
                <div className='h-[7rem] sm:h-[10rem] bg-black'></div>
        
        
            </div>   
  )
}

export default Sambit