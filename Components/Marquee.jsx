import { motion } from 'framer-motion';
import React from 'react'

function Marquee() {
    motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full py-15 rounded-tl-3xl rounded-tr-2xl bg-[#004D43]'>
        <div className='text border-t-2 mb-20  border-h-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1
             initial={{x:"0"}}
              animate={{x:"-100"}} 
              transition={{repeat: Infinity, ease:"linear", duration:5}} 
              className='text-[15vw] leading-none font-["founders_Frotesk_X-Condensed"] uppercase pt-20 -mb-[2vw] font-semibold'>
              We are ochi</motion.h1>
            <motion.h1
             initial={{x:"0"}}
              animate={{x:"-100"}} 
              transition={{repeat: Infinity, ease:"linear", duration:5}} 
               className='text-[20vw] leading-none font-["founders_Frotesk_X-Condensed"] uppercase pt-10 -mb-[3vw] font-semibold'>
              We are ochi</motion.h1>
           
        </div>
        <div className="w-full border-t-[2px] border-zinc-300"></div>
       
    </div>
  )
}

export default Marquee;