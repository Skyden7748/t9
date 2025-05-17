
import './Home.css'
import heroImage from '../assets/hero90-blured3.png';
import flare from '../assets/flare1.png';
import eye from '../assets/eye.png';

import sk1 from '../assets/sk1.png';
import sk2 from '../assets/sk2.png';
import sk3 from '../assets/sk3.png';
import sk4 from '../assets/sk4.png';
import p2 from '../assets/p-2.jpg';
import theTeam from '../assets/the-team.png'
import {motion} from 'motion/react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide ,  } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import { useTranslation } from 'react-i18next';


// Import Swiper styles
import "swiper/css";
import Footer from '../components/Footer';
import Test from './Test';
import AnimatedShinyText from './AnimatedShinyText';
import CardContent from './CardContent';
import { BentoGrid,BentoCard } from '../components/BentoGrid.jsx';
import { Link } from 'react-router-dom';
import NumberTicker from '../components/NumberTicker';
import ScrollAnimationPage from '../components/ScrollAnimationPage';
import { TestParallax } from '../components/Parallax';


// import { HomeIcon, InfoIcon, SearchIcon } from "@radix-ui/react-icons";


//  


const beams = [
  { initialX: 10, translateX: 10, duration: 7 },
  { initialX: 600, translateX: 600, duration: 3 },
  { initialX: 100, translateX: 100, duration: 7, className: "tall-beam" },
  { initialX: 400, translateX: 400, duration: 5 },
  { initialX: 800, translateX: 800, duration: 11, className: "wide-beam" },
];



function home() {
  const { t } = useTranslation()
  
  return (
    <>
    <div className='' >
    <TestParallax/>
    
    <div className='  w-full xl:w-[85%] mx-auto mt-20 ' > <h1 className='text-center text-5xl font-semibold text-neutral-200'>{t("H_Greet4")}</h1> </div>
  <div className='home-main-four pb-20 w-full xl:w-full overflow-hidden'>

    
     <div className='home-four-content'>
      {/* <h1>We Expertise in-</h1> */}
      <div className='swiper-container'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3500, // Time between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Keep autoplay running even when the user interacts
        }}
        className="mySwiper"
      >
        <SwiperSlide> 
          <Link to='/software' className=' no-underline '>
           <div className='swiper-slide [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]'>
               <div className='swiper-slide-top'>
                <p>{t("feature1")}</p>
               </div>
               <div className='swiper-slide-bottom b1'></div>

            </div> 
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to='/UIUX' className=' no-underline '>
          <div className='swiper-slide [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]'>
            <div className='swiper-slide-top '>
              <p>  {t("feature2")} </p>
            </div>
            <div className='swiper-slide-bottom b2'></div>
          </div> 
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to='/graphics' className=' no-underline ' >
          <div className='swiper-slide [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]'>
          <div className='swiper-slide-top'>
            <p>  {t("feature3")} </p>
          </div>
               <div className='swiper-slide-bottom b3'></div>  
            
          </div> 
          </Link   >
        </SwiperSlide>
        <SwiperSlide> 
          <Link to='/marketing'  className=' no-underline '  >
          <div className='swiper-slide [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]'>
            <div className='swiper-slide-top'>
            <p>  {t("feature4")} </p>
            </div>
            <div className='swiper-slide-bottom b4'></div>
          </div> 
          </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to='/projects' className=' no-underline ' >
           <div className='swiper-slide [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]'>
            
             <div className='swiper-slide-top'>
             <p>  {t("feature5")} </p>
             </div>
             <div className='swiper-slide-bottom b5'></div>
           </div> 
           </Link>
        </SwiperSlide>
        <SwiperSlide> 
          <Link to='/wealth' className='no-underline ' >
          <div className='swiper-slide [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]'>
            <div className='swiper-slide-top'>
            <p>  {t("feature6")} </p>
            </div>
            <div className='swiper-slide-bottom b6'></div>  
            
          </div> 
          </Link>
        </SwiperSlide>
        {/* <SwiperSlide> 
          <Link to='/transform' className='no-underline ' >
          <div className='swiper-slide [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]'>
            <div className='swiper-slide-top'>
            <p>Digital Transformation</p>
            </div>
            <div className='swiper-slide-bottom b7'></div>  
          </div> 
          </Link>
        </SwiperSlide> */}
        {/* <SwiperSlide> 
          <div className='swiper-slide'>
            
            <div className='swiper-slide-top'></div>
            <div className='swiper-slide-bottom'></div>  
          </div> 
        </SwiperSlide> */}
        {/* <SwiperSlide> 
          <div className='swiper-slide'>
            
            <div className='swiper-slide-top'></div>
            <div className='swiper-slide-bottom'></div>
            
          </div> 
        </SwiperSlide> */}
      </Swiper>

      <div className="z-20 absolute left-0 top-0 h-full w-[0px]  md:w-[250px] lg:w-[450px] bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

         <div className="z-20  absolute right-0 top-0 h-full w-[0px] md:w-[250px] lg:w-[450px] bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

      </div>
     </div>
  </div>
  
  <div   style={{ backgroundImage: `radial-gradient(at 100% 100%, rgba(31, 9, 150,0.6) 0px, transparent 50%),
          radial-gradient(at 99% 0%, hsla(266, 61%, 12%, 0.5) 0px, transparent 50%), url(${theTeam})` }} className= 'mx-auto bg-black home-main-five max-w-[2560px]    '>
    
    
    <div className='flex hidden xl:block '>
      
    <div className='home-five-content  '>
      <div className='home-five-content-top'></div>
      <div className='home-five-content-topt'></div>
      <div className='home-five-content-toptt'></div>
      <p>meet</p>
      <h1>The</h1>
      <p></p>
    </div>
     
    <div className='' >
     <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;TEAM&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;TEAM&nbsp;</span>
    </button>
     </div>
     </div>

     <div className='  flex flex-col gap-3 justify-around home-five-content-bottom absolute   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[70vh]     xl:h-[70vh]   mx-auto  rounded-xl   xl:w-[20rem] xl:left-[80vw] xl:top-[25hv]   ' > 


     <div  className='thetext mx-auto text-center  rounded-xl pb-5 xl:hidden ' ><h2 className='text-5xl font-semibold text-neutral-200' style={{
    
  }} >Meet the Team</h2></div>
    
     <Link to="/design" className=' no-underline w-[90%] h-[25%] mx-auto  '>
  <div style={{ backgroundImage: `url(${sk2})` }} className=' w-[100%] h-[100%] rounded-xl bg-center bg-no-repeat    backdrop-blur-md bg-white/2 xl:bg-transparent   [box-shadow:0_-10px_30px_-20px_#ffffff1f_inset]  [border:1px_solid_rgba(255,255,255,.1)] w-[100%] h-[100%]  grid place-items-center rounded-[10px]  '>
    <h1 className='text-neutral-300 font-[500] text-center text-[1.6em] transition-transform duration-300 hover:scale-90'>
      Designers
    </h1>
  </div>
</Link>
     


     <Link to="/develop" className=' w-[90%] h-[25%] mx-auto no-underline'  >
     <div  style={{ backgroundImage: `url(${sk1})` }} className=' w-[100%] h-[100%] rounded-xl bg-center bg-no-repeat  backdrop-blur-md bg-white/2 xl:bg-transparent  [box-shadow:0_-10px_30px_-20px_#ffffff1f_inset]  [border:1px_solid_rgba(255,255,255,.1)] w-[100%] h-[100%] [border] grid place-items-center rounded-[10px]   '  >
       <h1 className='text-neutral-300 font-[500] text-center text-[1.6em] transition-transform duration-300 hover:scale-90 ' >
           Developers
       </h1>
     </div>
     </Link>

     
      
      <Link to="/finance" className='w-[90%] h-[25%] mx-auto no-underline'>
     <div style={{ backgroundImage: `url(${sk3})` }} className=' w-[100%] h-[100%] rounded-xl bg-center bg-no-repeat  backdrop-blur-md bg-white/2 xl:bg-transparent [box-shadow:0_-10px_30px_-20px_#ffffff1f_inset]  [border:1px_solid_rgba(255,255,255,.1)] w-[100%] h-[100%] [border] grid place-items-center rounded-[10px]   ' >
       <h1 className='text-neutral-300 font-[500] text-center text-[1.6em] transition-transform duration-300 hover:scale-90 ' >
           finance 
       </h1>
     </div>
     </Link>
      
      <Link to={"/marketingteam"} className='w-[90%] h-[25%] mx-auto no-underline' >
     <div style={{ backgroundImage: `url(${sk4})` }} className=' w-[100%] h-[100%] rounded-xl bg-center bg-no-repeat  backdrop-blur-md bg-white/2 xl:bg-transparent [box-shadow:0_-10px_30px_-20px_#ffffff1f_inset]  [border:1px_solid_rgba(255,255,255,.1)] w-[100%] h-[100%] [border] grid place-items-center rounded-[10px]   ' >
       <h1 className='text-neutral-300 font-[500] text-center text-[1.6em] transition-transform duration-300 hover:scale-90 ' >
           marketing
       </h1>
     </div>
     </Link>

     </div>
     
    
  </div>




  <div className='home-main-four pt-32 pb-40 w-full xl:w-full overflow-hidden  '>
  
     <div className='home-four-content  '>

     <div  className='thetext mx-auto text-center  rounded-xl pb-2 '  ><h2 className='text-5xl font-semibold text-neutral-200' style={{
    
  }} >Client Reviews</h2></div>
      
      <div className='swiper-container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
           <div className='swiper-slide client [box-shadow:0_-20px_30px_-15px_#ffffff1f_inset]'>
              
             <div className='client-box'>

              <div className='client-circle'></div>
              <div className='client-name'><p>Chessensei</p></div>
              
             </div>
             <div className='client-content'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Quisquam, quia. Doloribus, dolores. Soluta, 
                  officiis. Quisquam, quia. Doloribus, dolores. 
                  Soluta, officiis. Quisquam, quia. Doloribus, dolores. 
                  Soluta, officiis. 
                </p>
             </div>
            </div> 
        </SwiperSlide>
        <SwiperSlide> 
        <div className='swiper-slide client [box-shadow:0_-20px_30px_-15px_#ffffff1f_inset]'>
              
              <div className='client-box'>
 
               <div className='client-circle'></div>
               <div className='client-name'><p>Mainstay</p></div>
               
              </div>
              <div className='client-content'>
                 <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Quisquam, quia. Doloribus, dolores. Soluta, 
                   officiis. Quisquam, quia. Doloribus, dolores. 
                   Soluta, officiis. Quisquam, quia. Doloribus, dolores. 
                   Soluta, officiis. 
                 </p>
              </div>
             </div>  
        </SwiperSlide>
        <SwiperSlide> 
        <div className='swiper-slide client [box-shadow:0_-20px_30px_-15px_#ffffff1f_inset]'>
              
              <div className='client-box'>
 
               <div className='client-circle'></div>
               <div className='client-name'><p>org s </p></div>
               
              </div>
              <div className='client-content'>
                 <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Quisquam, quia. Doloribus, dolores. Soluta, 
                   officiis. Quisquam, quia. Doloribus, dolores. 
                   Soluta, officiis. Quisquam, quia. Doloribus, dolores. 
                   Soluta, officiis. 
                 </p>
              </div>
             </div> 
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper-slide client [box-shadow:0_-20px_30px_-15px_#ffffff1f_inset]'>
          <div className='client-box'>
 
             <div className='client-circle'></div>
             <div className='client-name'><p>org s </p></div>
 
              </div>
             <div className='client-content'>
             <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, quia. Doloribus, dolores. Soluta, 
                officiis. Quisquam, quia. Doloribus, dolores. 
                Soluta, officiis. Quisquam, quia. Doloribus, dolores. 
                Soluta, officiis. 
              </p>
              </div>
 

          </div> 
        </SwiperSlide>
        <SwiperSlide> 
           <div className='swiper-slide'>
            
             

           </div> 
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper-slide'>
           
            
          </div> 
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper-slide'>



          </div> 
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper-slide'>
            


          </div> 
        </SwiperSlide>
        <SwiperSlide> 
          <div className='swiper-slide'>
            
            
            
          </div> 
        </SwiperSlide>
      </Swiper>

      <div className="z-20 absolute left-0 top-0 h-full w-[0px]  md:w-[250px] lg:w-[450px] bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

         <div className="z-20  absolute right-0 top-0 h-full w-[0px] md:w-[250px] lg:w-[450px] bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

      </div>
     </div>


     
     
     

     
  </div>
 
 

  
  
  


  
  

  
  </div>
  </> 
  
 
  )
}

export default home