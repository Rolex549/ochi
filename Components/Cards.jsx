import React from 'react'

function Cards() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-screen flex gap-5 items-center px-32 bg-zinc-800'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative rounded w-full flex items-center justify-center h-full bg-[#004D43]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-6 py-3 rounded-full border-2 left-10 bottom-10'>&copy;2025</button>
                </div>
            </div>
            <div className='cardcontainer flex  gap-5 h-[50vh] w-1/2'>
                <div className='card rounded relative flex w-1/2 h-full bg-[#1b2e2b] items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-6 py-3 rounded-full border-2 left-10 bottom-10'>&copy;2025</button></div>

                <div className='card rounded flex relative items-center justify-center w-1/2 h-full bg-[#49e9d4]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-6 py-3 rounded-full border-2 left-10 bottom-10'>&copy;2025</button></div>
            </div>
        </div>
    )
}

export default Cards