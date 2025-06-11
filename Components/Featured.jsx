import { motion } from 'framer-motion'
import React from 'react'

function Featured() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20 bg-zinc-900'>
            <div className='w-full px-20  border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured projects</h1>
            </div>

            <div className='px-10'>
                <div className='cards w-full flex gap-20 mt-10'>
                    
                    <div className="cardcontainer relative w-1/2 h-[75vh] ">
                    <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-["Founders_Grotesk_X-Condensed"] text-6xl'></h1>
                    <h1 className='absolute flex text-[#CDEA68] right-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-["Founders_Grotesk_X-Condensed"] text-6xl'>
                        
                        {"VISE".split('').map((item, index) =>{
                            <motion.span className='inline-block translate-y-full' inital={{}}>{item}</motion.span>
                         })}
                        
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png" alt="" />
                        </div>

                    </div>
                    <div className="cardcontainer relative w-1/2 h-[75vh]">

                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <h1 className='absolute text-[#CDEA68] right-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-["Founders_Grotesk_X-Condensed"] text-6xl'></h1>
                        <h1 className='absolute text-[#CDEA68] right-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-["Founders_Grotesk_X-Condensed"] text-6xl'>
                        
                        {"VISE".split('').map((item, index) =>{
                            <span>{item}</span>
                         })}
                        
                        </h1>

                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png" alt="" />

                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Featured