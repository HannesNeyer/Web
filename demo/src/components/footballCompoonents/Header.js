import React from 'react'
import "../../App.css"
import { useNavigate } from 'react-router-dom'
 
export default function Header() {
const navigate = useNavigate();
  return (
    <div className='w-full h-[80px] font-sans-serif text-[25px] text-white overflow-hidden'>
        <header className='flex fixed bg-gradient-to-r from-[#F90000] to-[#BC0606] 
        w-[90vw] h-[40px] ml-[13%] items-center justify-evenly 
        clipPathPolygonLeftDiagonalUp'>
          <p>Home</p>
          <p>Spielplan</p>

          <p onClick={() => {
            navigate("/");
          }}>Tabelle</p>

          <p onClick={() => {
            navigate("/Clubs");
          }}>Clubs</p>

          <p>Liveticker</p>
        </header>

        <header className='flex fixed bg-gradient-to-r from-[#F90000] to-[#BC0606] 
        h-[40px] w-[20vw] left-[0px] mt-[40px] items-center justify-evenly clipPathPolygonRightDiagonalDown'>
          <p className='ml-[-35px]'>Tabelle</p>
        </header>

        <img src="https://www.bundesliga.com/assets/logo/bundesliga_pos.svg" alt="Bundesliga Logo" className='fixed w-[20vw] h-[40px]'></img>
    </div>
  )
}
