import React from 'react'
import AuroraText from '../components/AuroraText'
import { Link } from 'react-router-dom';
import './Designer.css'
import p1 from '../assets/p-1.jpg';
import p4 from '../assets/p-4.jpg';
import s01 from '../assets/s01.png'
import f01 from '../assets/f01.jpg'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function FinanceGuys() {
  return (
    <div className='d-main bg-black'>
    <div className='h-[7rem] sm:h-[10rem] bg-black'></div>

   <div className='d-content w-[95vw] sm:w-[1200px] mx-auto'>
    
      <div className='d-head sm:h-[20rem] h-[10rem] grid place-items-center   [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]   '>
          <h1 className="text-7xl font-bold text-neutral-200  tracking-[-1px] md:text-7xl lg:text-7xl">
          Financial Managers
          </h1>
      </div>

      <div className='d-para  p-5 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]   ' >
          <p className='text-neutral-400 text-[1.3em]'  >
          As a group of efficient developers, we foster collaboration, deliver scalable code, and embrace innovation to improve processes and functionality. By managing time effectively and adapting to changes, we create a positive environment and ensure high-quality outcomes to achieve team goals.
          </p>
      </div>

      <div className='sm:flex gap-5 block  p-3 '>
         
          <div className='  grid place-items-center [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  [border:1px_solid_rgba(255,255,255,0.1)]   p-5 rounded-xl mb-4 sm:mb-0 '>
              
              <div className='flex gap-4  '>

              
              <div style={{ backgroundImage: `url(${s01})` }} className=' bg-cover bg-center w-[100px] h-[100px] rounded-full bg-gray-400  [border:1px_solid_rgba(255,255,255,.1)] ' >
                  
              </div>
               <div>

               
                  <h1 className=' text-neutral-300 font-semibold text-[1.7em] sm:font-bold '>
                  Sambit Maharana
                  </h1>

                  <Link to={'/sambit'} className = 'p-5  no-underline'  >

                       <div className='[border:1px_solid_rgba(255,255,255,.2)] w-[fit-content] p-3 -mt-5 rounded-xl '>
                            <p className='text-neutral-400 text-[1em]' >Portfolio</p>
                       </div> 
                  </Link>
               </div>
               </div>

          </div>


          <div className='  grid place-items-center [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  [border:1px_solid_rgba(255,255,255,0.1)] p-5 rounded-xl '>
              
              <div className='flex gap-4  '>

              
              <div style={{ backgroundImage: `url(${f01})` }} className='bg-cover bg-center w-[100px] h-[100px] rounded-full bg-gray-400  [border:1px_solid_rgba(255,255,255,.1)] ' >
                  
              </div>
               <div>

               
                  <h1 className=' text-neutral-300 font-semibold text-[1.7em] sm:font-bold '>
                  Sambit Maharana
                  </h1>

                  <Link to={'/rikth'} className = 'p-5  no-underline'  >

                       <div className='[border:1px_solid_rgba(255,255,255,.2)] w-[fit-content] p-3 -mt-5 rounded-xl '>
                            <p className='text-neutral-400 text-[1em]' >Portfolio</p>
                       </div> 
                  </Link>
               </div>
               </div>

          </div>

          
               
          <div>

          </div>


      </div>


    <div className='h-[5rem]' >

    </div>
    {/* <Accordion  >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography component="span">Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <Typography component="span">Accordion Actions</Typography>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
      
    </Accordion> */}


   </div>
   
   


  </div>
  )
}

export default FinanceGuys