import React from 'react'

export default function Header() {
  return (
    <header className='flex fixed bg-gradient-to-r from-[#F90000] to-[#BC0606] 
    overflow-hidden font-sans-serif text-[25px] text-white w-[90vw] h-[40px] ml-[13%] items-center justify-evenly'>
        <p>Home</p>
        <p>Spielplan</p>
        <a href="FootballAPI_Table.html">Tabelle</a>
        <a href="FootballAPI_Club.html">Clubs</a>
        <p>Liveticker</p>
    </header>
  )
}
