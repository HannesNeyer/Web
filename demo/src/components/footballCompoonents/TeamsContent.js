import React from 'react'

export default function TeamsContent({teamName, teamIconUrl}) {
  return (
    <div>
      <div className='w-[500px] h-[80px] mt-[60px] mr-[1%] rounded-lg bg bg-gradient-to-r from-[#F90000] to-[#BC0606] 
      font-serif text-lg text-white'>
        <img className='w-[5.2vw] h-[5.2vw]' src={teamIconUrl} alt="Image Loading"/>
        <div className='pl-[20%] pt-[6px]'>{teamName}</div>
      </div>
    </div>
  )
}