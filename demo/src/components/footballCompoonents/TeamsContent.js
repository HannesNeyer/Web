import React from 'react'

export default function TeamsContent({teamName, teamIconUrl}) {
  console.log("bin im TEamsconten")
  return (
    <div className='flex w-[500px] h-[80px] mb-[20px] mr-[1%] rounded-lg bg-gradient-to-r from-[#F90000] to-[#BC0606] 
      font-sans-serif text-[25px] text-white items-center'>
        <img className='w-[5.2vw] h-[5.2vw]' src={teamIconUrl} alt="Image Loading"/>
        <div className='pl-[5%]'>{teamName}</div>
    </div>
  )
}