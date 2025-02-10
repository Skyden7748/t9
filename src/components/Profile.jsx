import React from 'react'
import './Profile.css'  
import { PhoneCallIcon ,  } from 'lucide-react'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

function Profile() {
  return (
    <div className=' profile-main  bg-black '>

        <div className='profile-content   w-[100vw]  sm:w-[1344px] mx-auto '>
            <div className='sm:w-[85%] w-[95%]  mx-auto p-2 sm:p-5 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>
                
                <div className=' sm:w-[85%] w-[100%] block sm:flex  mx-auto block sm:flex  mb-5 justify-between ' >

                <div className='sm:w-[58.3%] mb-5 sm:mb-0 w-[100%] flex [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-5 rounded-xl ' >
                <div className=' profile-pic h-[100px] w-[100px] rounded-full [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] '>

                </div>
                
                <div className='profile-name  self-center ml-5 '>
                    <h1 className='text-2xl font-semibold text-neutral-200 ' >
                       name
                   </h1>
                   <p className='text-neutral-400'>designation</p>
                </div>
                </div>
                <div className='sm:w-[40%]   w-[100%] [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-9 rounded-xl ]' >
                    <h1 className='text-xl font-semibold text-neutral-200   ' >socials</h1>
                    <div className='flex mt-1 gap-1'>  <a href="https://twitter.com/" > <TwitterLogoIcon className='h-7 w-7 text-neutral-600'  /> </a>   <a href="https://www.instagram.com/"><InstagramLogoIcon className='h-7 w-7 text-neutral-600' /> </a>    <a href="https://www.linkedin.com/"><LinkedInLogoIcon className='h-7 w-7 text-neutral-600' /> </a> </div>
                </div>
                

            </div>

            <div className='profile-about w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] rounded-xl p-10  ' >
                 <h1 className='text-2xl font-semibold text-neutral-200   ' >about</h1>
                <p className='text-neutral-400 [font-size:1.1rem]' >I am a passionate professional with expertise in graphics design, UI/UX design, and front-end development. I craft visually appealing and user-friendly digital experiences with creativity and precision.

Since 2021, I have honed my skills as a freelance designer, expanding into web development in 2023. I take pride in delivering quality results and thrive on collaboration.

</p>
 
            </div>
            </div>

            <div className='profile-work w:[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                
                <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto   p-5 ' >
                      <h1 className='text-2xl font-semibold text-neutral-200   ' >Work Experience</h1>
                      
                </div> 
                <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                      <h1 className='text-2xl font-semibold text-neutral-200   ' >title</h1>
                      <p className='text-neutral-400 [font-size:1.1rem]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod quasi voluptatem accusantium molestiae quam officiis excepturi harum consectetur temporibus.</p>
                </div>
                <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                      <h1 className='text-2xl font-semibold text-neutral-200   '  >title</h1>
                      <p className='text-neutral-400 [font-size:1.1rem]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod quasi voluptatem accusantium molestiae quam officiis excepturi harum consectetur temporibus.</p>

                </div>
                <div className='profile-work-2 w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 rounded-xl' >
                      <h1 className='text-2xl font-semibold text-neutral-200   ' >title</h1>
                      <p    className='text-neutral-400 [font-size:1.1rem]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod quasi voluptatem accusantium molestiae quam officiis excepturi harum consectetur temporibus.</p>

                </div>

            </div>
            <div className='profile-work w:[100%] sm:w-[85%] mx-auto  [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 '>
                
                <div className='profile-work-1 w-[100%] sm:w-[85%] mx-auto    p-5 ' >
                      <h1 className='text-2xl font-semibold text-neutral-200   ' >Key Attributes</h1>
                      
                </div>
                <div className='sm:flex w-[100%] sm:w-[85%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                   <div className='profile-work-1 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 rounded-xl ' >
                      <h1 className='text-2xl font-semibold text-neutral-200   ' >Graphic Designer</h1>
                      <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >I deliver creative, user-focused designs with precision and clarity.</p>
                </div>
                <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                      <h1 className='text-2xl font-semibold text-neutral-200   '  >UI UX</h1>
                      <p className='text-neutral-400 [font-size:1.1rem] mt-1 ' >I create intuitive, user-centered designs that enhance usability and aesthetics.</p>

                </div>
                <div className='profile-work-2 w-[100%] sm:w-[30%] mx-auto [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] p-5 mt-5 sm:mt-0 rounded-xl' >
                      <h1 className='text-2xl font-semibold text-neutral-200   ' >Front-End</h1>
                      <p    className='text-neutral-400 [font-size:1.1rem] mt-1'  >I build responsive, user-friendly interfaces with clean and efficient code.</p>
  
                </div>
                </div>

            </div>
            



        </div>


    </div>   


  )
}

export default Profile