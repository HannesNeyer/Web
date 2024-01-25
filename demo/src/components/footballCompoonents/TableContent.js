import React from 'react'

export default function TableContent({teamName, teamIconUrl, won, draw, lost, goals, goalDiff, points}) {
  return (
    <div className='flex relative w-full h-max rounded-[8px]
        items-center justify-center font-sans-serif text-[15px] text-white ml-[30px] overflow-y-scroll'>
        <div className='w-[1015px] h-[40px] mt-[10px] rounded-[8px] bg-gradient-to-r from-[#F90000] to-[#BC0606]'></div>
    </div>
  )
}
