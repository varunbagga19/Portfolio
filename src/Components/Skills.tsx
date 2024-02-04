import React from 'react'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='text-black h-screen text-center flex flex-col'>
        <h3 className="text-black text-[28px] font-normal font-['Sora'] leading-loose"> My <span className="text-black text-[28px] font-extrabold font-['Sora'] leading-loose">Skills</span></h3>
        <div className='grid grid-cols-2'>
            <div></div>
        </div>
    </div>
  )
}