import React from 'react'

export default function TableHeader() {
  return (
    <div className='flex fixed overflow-hidden font-Segoe-UI text-[20px] text-white h-[40px] w-full items-center justify-center
    mt-[4%] text-center font-bold'>
        <header className='flex justify-evenly items-center bg-[#BC0606] w-[1075px] h-[40px] clipPathPolygonLeftDiagonalUp'>
            <p className='ml-[5vw]'>Spiele</p>
            <p>S U N</p>
            <p>Tore</p>
            <p>D</p>
            <p>Punkte</p>
        </header>
    </div>
  )
}
