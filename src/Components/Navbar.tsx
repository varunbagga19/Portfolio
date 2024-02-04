import React from 'react'

function Navbar() {
  return (
    <div className='max-w-[1280px] flex text-black p-[16px] justify-between items-center mx-auto'>
        <div className='flex items-center space-x-2'>
          <img src="/logo 1.png" alt="" />
          <h3 className="text-black text-xl font-bold font-['Sora'] capitalize leading-normal">Personal</h3>
        </div>

        <div className=' justify-between space-x-[32px] hidden md:flex  '>
          <h3>About Me</h3>
          <h3>Skills</h3>
          <h3>Project</h3>
          <h3>Contact Me</h3>
        </div>

        <div className='px-5 py-2 bg-black rounded justify-center items-center gap-2 hidden md:inline-flex'>
         <h3 className="text-white text-xl font-semibold font-['Sora'] leading-normal tracking-tight">Resume</h3>
         <img src="/download.png" alt="" />
        </div>


        <div className='space-y-1 md:hidden'>
          <div className='bg-black h-1 w-9'></div>
          <div className='bg-black h-1 w-9'></div>
          <div className='bg-black h-1 w-9'></div>
        </div>

    </div>
  )
}

export default Navbar