import React from 'react'

export default function TableContent({teamName, teamIconUrl, matches, won, draw, lost, goals, goalDiff, points}) {
  return (
    <div className='flex w-full h-[40px] mt-[10px] rounded-[8px] bg-gradient-to-r from-[#F90000] to-[#BC0606] text-center items-center'>
      <img className='h-[2.6vw] w-[2.6vw]' src={teamIconUrl}/>
      <div className='w-[200px] text-left'>{teamName}</div>
      <div className='ml-[20px]'>{matches}</div>
      <div className='ml-[125px] w-[20px]'>{won}</div>
      <div className='ml-[2px] w-[20px]'>{draw}</div>
      <div className='ml-[2px] w-[20px]'>{lost}</div>
      <div className='ml-[117px]'>{goals}</div>
      <div className='ml-[115px] w-[20px]'>{goalDiff}</div>
      <div className='ml-[125px]'>{points}</div>
    </div>
  )
}
