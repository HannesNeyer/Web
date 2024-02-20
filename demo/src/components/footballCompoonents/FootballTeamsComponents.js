import React, { useEffect, useState } from 'react'
import TeamsContent from './TeamsContent'

export default function FootballTeamsReact() {
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then((res) => res.json().then((data) => {
          setTeams(data);
        })
        );
    },[])

    return(
        <div className='flex overflow-x w-full'>
            <div className='flex w-[2530px]'>
                <nav className='flex relative w-full h-[145px] ml-[1%] mt-[80px] z-10'>
                {table.map((match, index=0) => {
                    return  <TableContent teamName={match.teamName} teamIconUrl={match.teamIconUrl}/>})}
                </nav>
            </div>
        </div>
    )
}
