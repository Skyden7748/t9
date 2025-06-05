import React from 'react'
import AuroraText from '../components/AuroraText'
import { Link } from 'react-router-dom';
import './Designer.css'
import p1 from '../assets/p-1.jpg';
import p3 from '../assets/p-3.jpg';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

function Designer() {
  const { t } = useTranslation() 
  return (
    <div className='d-main bg-white'>
      <div className='h-[7rem] md:h-[10rem] bg-white'></div>

     <div className='d-content w-[95vw] xl:w-[1200px] mx-auto'>
      
        <div className='d-head md:h-[20rem] h-[10rem] grid place-items-center   [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]   '>
            <h1 className="text-7xl font-bold  tracking-[-1px] md:text-7xl lg:text-7xl">
              {t('service73')} <AuroraText> {t('service74')} </AuroraText>
            </h1>
        </div>

        <div className='d-para  p-5 [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]   ' >
            <p className='text-neutral-400 text-[1.3em]'  >
            {t('service75')}
            </p>
        </div>

        <div className='sm:flex gap-5 block  p-3 '>
           
            <div className='  grid place-items-center [box-shadow:0_-20px_80px_-20px_#ff000033_inset] [border:1px_solid_rgba(0,0,0,0.3)]   p-5 rounded-xl mb-4 sm:mb-0 '>
                
                <div className='flex gap-4  '>

                
                <div style={{ backgroundImage: `url(${p1})` }} className=' bg-cover bg-center min-w-[100px] h-[100px] rounded-full bg-gray-400  [border:1px_solid_rgba(255,255,255,.1)] ' >
                    
                </div>
                 <div>

                 
                    <h1 className=' font-semibold text-[1.7em] sm:font-bold '>
                    Sarada Prasad
                    </h1>
                    <p className='text-neutral-500 font-semibold text-[1em] mb-2' >Lead Designer</p>

                    <Link to={'/sarada'} className = 'p-5  no-underline'  >

                         <div className='[border:1px_solid_rgba(0,0,0,.4)] w-[fit-content] p-3 -mt-5 rounded-xl '>
                              <p className='text-neutral-700 text-[1em]' >Portfolio</p>
                         </div> 
                    </Link>
                 </div>
                 </div>

            </div>


            <div className='  grid place-items-center [box-shadow:0_-20px_80px_-20px_#0000ff33_inset]  [border:1px_solid_rgba(0,0,0,0.3)] p-5 rounded-xl '>
                
                <div className='flex gap-4  '>

                
                <div style={{ backgroundImage: `url(${p3})` }} className='bg-cover bg-center min-w-[100px] h-[100px] rounded-full bg-gray-400  [border:1px_solid_rgba(255,255,255,.1)] ' >
                    
                </div>
                 <div>

                 
                    <h1 className=' font-semibold text-[1.7em] sm:font-bold '>
                    Abhisekh Swain
                    </h1>

                    <Link to={'/abhisek'} className = 'p-5  no-underline'  >

                         <div className='[border:1px_solid_rgba(0,0,0,.4)] w-[fit-content] p-3 -mt-5 rounded-xl '>
                              <p className='text-neutral-700 text-[1em]' >Portfolio</p>
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

export default Designer