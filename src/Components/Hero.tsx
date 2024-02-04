import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='flex max-h-screen flex-col justify-center items-center p-[16px] md:flex-row-reverse max-w-[1280px] mx-auto'>

        {/* <img src='/boy.png' className='object object-contain w-1/2 h-1/2'/> */}
        
        <div className='w-1/2'>
          <div className='flex flex-col text-left pt-10 gap-0'>
            <h3 className="text-black text-[28px] font-normal leading-loose md:text-5xl md:leading-[56px]">Hello I’am  <span className="text-black text-l font-extrabold  leading-loose px-3">Evren Shah.</span></h3>
            <h3 className="text-black text-[28px] font-extrabold  leading-loose md:text-5xl md:leading-[56px]">Frontend <span className="text-l font-extrabold  leading-loose">Developer</span></h3>
            <h3 className="text-black text-[28px] font-normal  leading-loose md:text-5xl md:leading-[56px]">Based In <span className="text-black font-extrabold  leading-loose px-3">India.</span> </h3>
          </div>

          <h3  className="text-zinc-500 text-xl font-normal font-['Sora'] leading-normal tracking-tight"> I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</h3>

          <div className='flex gap-[24px] items-center pt-10 '>
              <img src="/fb.png" alt="" className='p-5 bg-black rounded-lg' />
              <img src='/D.png' className='border p-5 rounded-lg border-black'/>         
              <img src="/t.png" alt="" className='border p-5 rounded-lg border-black' />       
              <img src="/r.png" alt="" className='border p-5 rounded-lg border-black' />
          </div>
        
        </div>
    </div>
  )
}