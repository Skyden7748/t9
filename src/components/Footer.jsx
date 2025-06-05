import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { PhoneIcon } from 'lucide-react'
import { EnvelopeClosedIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { EmailSharp, Instagram, LinkedIn, PhoneAndroidRounded, Twitter } from '@mui/icons-material'
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation();
    const location = useLocation();
  
    // Define colors for specific routes
    const routeColors = {
      "/": "#00FFFF", // Default (cyan)
      "/projects": "violet", // Purple for '/project'
      "/uiux": "#bdfffd", // Example: orange for '/about'
      "/software": "#787878", 
      "/graphics": "#8317ff",
      "/marketing": "#ff7575",
      "/wealth": "#3b48ff",
      "/transform": "#fc9772",
      
    };
    const currentColor = routeColors[location.pathname] || "#00FFFF";


  return (
    <div className='footer-main    flex-col p-5'>
      <div className=' sm:w-[92.5%] 2xl:w-[72%] w-[100%] mx-auto sm:flex  [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] p-10 rounded-xl justify-around '>
       <div  > 
          <h1 className='text-neutral-200 font-[500] '>T<span className=' ' style={{ color: currentColor,
                transition: "color 0.5s ease-out",
               }} >9</span>  </h1> 
           <div className='flex gap-1 text-cyan-300'><p className=''style={{ color: currentColor,
                transition: "color 0.5s ease-out",
               }} ><Instagram/> </p> <p style={{ color: currentColor,
                transition: "color 0.5s ease-out",
               }} > <Twitter/> </p>  <p style={{ color: currentColor,
                transition: "color 0.5s ease-out",
               }} ><LinkedIn/></p>  </div>
       </div>


       <div className='no-underline mt-5 sm:mt-0 ' >
          <h1 className='text-neutral-200 font-[500]' >services </h1>
          <Link  to={'/software  '} className='no-underline text-neutral-500 ' ><p>{t("feature1")}</p></Link>
          <Link to={'/uiux'} className='no-underline text-neutral-500 ' ><p>{t("feature2")}</p></Link>
          <Link to={'/graphics'} className='no-underline text-neutral-500 ' ><p>{t("feature3")}</p></Link>
          <Link to={'/marketing'} className='no-underline text-neutral-500 ' ><p>{t("feature4")}</p></Link>
          
       </div>


       <div className='no-underline mt-5 sm:mt-0 ' >

        <h1 className='text-neutral-200 font-[500]' >contact</h1>
        <div className=' w-[fit-content] sm:w-[100%] p-3 sm:p-2 [border:1px_solid_rgba(255,255,255,.1)] flex gap-1 rounded-lg [box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] ' > <p className='' style={{ color: currentColor,
                transition: "color 0.5s ease-out",
               }} > <EmailSharp/></p> <p className='text-neutral-300'>  email</p> </div>
        <div className='w-[fit-content] sm:w-[100%] p-3 sm:p-2     [border:1px_solid_rgba(255,255,255,.1)] flex gap-1 mt-1 rounded-lg [box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] ' > <p className='' style={{ color: currentColor,
                transition: "color 0.5s ease-out",
               }} > <PhoneAndroidRounded/> </p> <p>   9808976543</p> </div>
        

       </div>

       

       </div>
       <div className='text-neutral-200 font-[500] text-center text-[9.5vw]  text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 via-[#0b0b0b]   to-black" ' ><h1>TRIBE 9</h1></div>

    </div>
  )
}

export default Footer