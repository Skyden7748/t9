
import './Homem.css'
import React from 'react'
import './Home.css'
import sk1 from '../assets/sk1.png';
import sk2 from '../assets/sk2.png';
import sk3 from '../assets/sk3.png';
import sk4 from '../assets/sk4.png';
import theTeam from '../assets/the-team.png'
import theTeam3 from '../assets/the-team3.png'


import heroImage from '../assets/hero90-blured3.png';
import flare from '../assets/flare1.png';
import eye from '../assets/eye.png';
import {motion} from 'motion/react'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide ,  } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import AnimatedShinyText from './AnimatedShinyText';

// Import Swiper styles
import "swiper/css";
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import { TestParallax } from '../components/Parallax';
import { useEffect } from 'react';



function Homem() {

  const [strokeWidth, setStrokeWidth] = useState(2);

  useEffect(() => {
    setTimeout(() => setStrokeWidth(8), 2000); // Change stroke width after 2s
  }, []);
  return (

    <>

    <TestParallax/>
    {/* <div className='homem-main'>
    <div className='   theShine'>


  
  </div>
        
       <div className='homes'>
       <h1 className='he11'>DESIGN</h1>
        <h1 className='he22'>DEVELOP</h1>
        <h1 className='he33'>DELIVER.</h1>
        <div className='w-[80%]'>
          <AnimatedShinyText shimmerWidth={50} className="font-poppins text-sm p-[4px]  ">Empowering your brand with creative strategies and expert digital craftsmanship.
  </AnimatedShinyText>
  </div>

  <button className='theShine-button w-[30%] ml-[1px] mt-[10px] ' >
    <p>Start now</p>
  </button>
       </div>



        </div> */}

        {/* <div className='home-main-two' >

  <div className='home-main-three'>
      
      <div className='home-three-content'>
      <h1>We are-</h1>
            <p>A passionate and innovative group of talented individuals, driven by creativity and <span className='hl'>expertise<svg className='hl-svg' width="404" height="185" viewBox="0 0 404 185" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path
initial= {{pathLength: 0  }}
animate={{pathLength: 1}}
transition={{duration: 10, ease: "easeInOut"}}
style={{ strokeWidth: "10px !important" }}
d="M2.86188 86.1608C2.56981 86.1973 17.3224 75.5145 19.535 74.1997C64.8581 47.2649 116.871 28.6794 168.215 17.2938C204.774 9.18688 242.753 4.95479 280.215 5.26018C305.216 5.464 331.874 8.22884 355.751 15.9889C381.781 24.4487 410.777 44.8213 397.941 75.722C391.44 91.3721 377.517 104.004 363.58 112.983C343.91 125.655 322.207 135.558 300.621 144.48C250.376 165.248 194.554 180.808 139.98 182.212C101.505 183.202 45.5685 175.974 24.3194 138.427C14.18 120.511 24.6195 99.0636 35.7731 84.421C63.19 48.4274 104.971 25.6242 142.481 1.99805" stroke="#92F6FF" stroke-width="5" stroke-linecap="round"/>
</svg>
 </span>, dedicated to <span> <svg className='hl-svg-t' width="827" height="28" viewBox="0 0 827 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path
initial= {{pathLength: 0}}
whileInView={{pathLength: 1 }}
transition={{duration: 5, ease: "easeInOut"}}
style={{ strokeWidth: 8 }}
d="M33.0443 3.6335C29.6706 3.70847 26.1625 3.93814 22.823 4.43087C17.4921 5.21743 33.5637 5.51828 38.9524 5.51828C107.637 5.51828 176.301 2.32861 245.01 2.32861C426.746 2.32861 608.615 4.27023 789.784 19.7991C800.461 20.7143 811.128 21.5101 821.753 22.9163C830.846 24.1198 818.655 23.8586 816.207 23.8586C763.116 23.8586 709.948 19.5908 656.943 16.9719C553.715 11.8717 450.306 7.89656 346.933 9.14284C231.634 10.5329 116.716 17.8857 1.72797 25.8159" stroke="#7DE7FF" stroke-width="3" stroke-linecap="round"/>
</svg>

 transforming your digital presence </span> into an engaging, impactful, and unforgettable experience.</p>
      </div>

  </div>
      
  </div> */}
  <div className='home-main-four pb-16  '>
       <div className='home-four-content  '>
        
        <div className='swiper-container'>
        <Swiper
          slidesPerView={3}
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
            <Link to={"software"} className='no-underline' >
             <div className='swiper-slide'>
                 <div className='swiper-slide-top'>
                  <p >Software Development</p>
                 </div>
                 <div className='swiper-slide-bottom b1'></div>
  
              </div> 
              </Link>
          </SwiperSlide>
          <SwiperSlide> 
            <Link to={"uiux"} className=' no-underline '>
            <div className='swiper-slide'>
              <div className='swiper-slide-top '>
                <p>UI/UX</p>
              </div>
              <div className='swiper-slide-bottom b2'></div>
            </div>
            </Link> 
          </SwiperSlide>
          <SwiperSlide> 
            <Link to={"graphics"} className='no-underline'>
            <div className='swiper-slide'>
            <div className='swiper-slide-top'>
              <p>Graphics Design</p>
            </div>
                 <div className='swiper-slide-bottom b3'></div>  
              
            </div> 
            </Link>
          </SwiperSlide>
          <SwiperSlide> 
            <Link to={'marketing'} className='no-underline'>
            <div className='swiper-slide'>
              <div className='swiper-slide-top'>
              <p>Digital Marketing</p>
              </div>
              <div className='swiper-slide-bottom b4'></div>
            </div> 
            </Link>
          </SwiperSlide>
          <SwiperSlide> 
            <Link to={'project'} className='no-underline' >
             <div className='swiper-slide'>
              
               <div className='swiper-slide-top'>
               <p>Project Management</p>
               </div>
               <div className='swiper-slide-bottom b5'></div>
             </div> 
             </Link>
          </SwiperSlide>
          <SwiperSlide> 
            <Link to={'wealth'} className='no-underline'>
            <div className='swiper-slide'>
              <div className='swiper-slide-top'>
              <p>Wealth Management</p>
              </div>
              <div className='swiper-slide-bottom b6'></div>  
              
            </div> 
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'transform'} className='no-underline' >
            <div className='swiper-slide'>
              <div className='swiper-slide-top'>
              <p>Digital Transformation</p>
              </div>
              <div className='swiper-slide-bottom b7'></div>  
            </div>
            </Link>  
          </SwiperSlide>
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
  
        </div>
       </div>
    </div>

    <div style={{backgroundImage:``}}  className=' bg-center bg-cover w-[100vw] mx-auto home-main-five block h-[fit-content] p-10  bg-black '>
    <h1 className='text-neutral-200 font-[500] text-center text-[2em] md:text-[1.6em] ' >Meet the team</h1>
    
    <div className='home-five-content hidden'>
      <div className='home-five-content-top'></div>
      <div className='home-five-content-topt'></div>
      <div className='home-five-content-toptt'></div>
      <p>meet</p>
      <h1>The </h1>
      <p></p>
    </div>
    

    <div className='hidden' >
     <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;TEAM&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;TEAM&nbsp;</span>
    </button>
     </div>

     <div className='p-5 flex flex-col gap-3 justify-around home-five-content-bottom  h-[30rem]  sm:h-[18rem] rounded-xl sm:w-[12rem] w-[80vw] mx-auto sm:right-[12rem] sm:right-[0vw]  sm:top-[87vw]  ' > 
    
     <Link to="/design" className='w-[100%] h-[25%] no-underline'>
  <div style={{ backgroundImage: `  url(${sk2})` }} className='bg-center backdrop-blur-sm bg-white/2    [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset] [border:1px_solid_rgba(255,255,255,.1)] w-[100%] h-[100%] grid place-items-center sm:rounded-[20px] rounded-[10px]'>
    <h1 className='text-neutral-200 font-[500] text-center text-[1.2em] sm:text-[1.6em] transition-transform duration-300 hover:scale-90'>
      Designers
    </h1>
  </div>
</Link>
     


     <Link to="/about" className=' w-[100%] h-[25%] no-underline'  >
     <div style={{ backgroundImage: `url(${sk1})` }} className=' bg-center backdrop-blur-sm bg-white/2   [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]  [border:1px_solid_rgba(255,255,255,.1)] w-[100%] h-[100%] [border] grid place-items-center sm:rounded-[20px] rounded-[10px]   ' >
       <h1 className='text-neutral-200 font-[500] text-center text-[1.2em] sm:text-[1.6em] transition-transform duration-300 hover:scale-90 ' >
           Developers
       </h1>
     </div>
     </Link>

     
      
      <Link className='w-[100%] h-[25%] no-underline'>
     <div style={{ backgroundImage: `url(${sk3})` }} className=' bg-center backdrop-blur-sm bg-white/2 [  box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]  [border:1px_solid_rgba(255,255,255,.1)] w-[100%] h-[100%] [border] grid place-items-center sm:rounded-[20px] rounded-[10px]   ' >
       <h1 className='text-neutral-200 font-[500] text-center text-[1.2em] sm:text-[1.6em] transition-transform duration-300 hover:scale-90 ' >
           finance 
       </h1>
     </div>
     </Link>
      
      <Link className='w-[100%] h-[25%] no-underline' >
     <div style={{ backgroundImage: `url(${sk4})` }} className=' bg-center backdrop-blur-sm bg-white/2  [box-shadow:0_-10px_40px_-20px_#ffffff1f_inset]  [border:1px_solid_rgba(255,255,255,.1)] w-[100%] h-[100%] [border] grid place-items-center sm:rounded-[20px] rounded-[10px]   ' >
       <h1 className='text-neutral-200 font-[500] text-center text-[1.2em] sm:text-[1.6em] transition-transform duration-300 hover:scale-90 ' >
           marketing
       </h1>
     </div>
     </Link>

     </div>
     
    
  </div>
  {/* <div className='home-main-fivefive'>
    
    <div className='home-fivefive-content'>
      
    <div className='home-fivefive-content-left'>
      <p>Transform your digital presence with us, and reach your target audience</p>
    </div>
    <div className='home-fivefive-content-right'>
    <div class="loader">
       <span></span>

           <div id="dot-1" class="dot"></div>
           <div id="dot-2" class="dot"></div>
           <div id="dot-3" class="dot"></div>
           <div id="dot-4" class="dot"></div>
           <div id="dot-5" class="dot"></div>
       </div>
    </div>

    </div>
   

</div> */}


 <div className='home-main-four pt-8 pb-20 '>
     <div className='home-four-content '>
     <div  className='thetext mx-auto text-center  rounded-xl '  ><h2 className='text-3xl font-semibold text-neutral-200' style={{
    
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

      </div>
     </div>
     

     
  </div>

  

        </>

  )
}

export default Homem