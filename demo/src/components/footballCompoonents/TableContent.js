import React from 'react'

export default function TableContent({teamName, teamIconUrl, matches, won, draw, lost, goals, goalDiff, points}) {
  return (
    <div className='flex w-full h-[40px] mt-[10px] rounded-[8px] bg-gradient-to-r from-[#F90000] to-[#BC0606] text-center items-center'>
      <img className='h-[2.6vw] w-[2.6vw]' src={teamIconUrl}/>
      <div className='bg-black w-[200px] text-left'>{teamName}</div>
      <div className=''>{matches}</div>
      <div className=''>{won}</div>
      <div className=''>{draw}</div>
      <div className=''>{lost}</div>
      <div className=''>{goals}</div>
      <div className=''>{goalDiff}</div>
      <div className=''>{points}</div>
    </div>
  )
}
