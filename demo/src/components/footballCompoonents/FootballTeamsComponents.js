import React, { useEffect, useState } from 'react'
import TeamsContent from './TeamsContent'

export default function FootballTeamsReact() {
    const [teams, setTeams] = useState([]);
    const alphabet = ["1","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let teamName = "";
    
    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then((res) => res.json().then((data) => {
          setTeams(data);
        })
        );
    },[])

    return(
        <div className='flex overflow-x w-full'>
            <div className='flex w-[2530px] h-[200px]'>
                <nav className='flex relative w-full h-[145px] ml-[1%] mt-[80px] z-10 h-[200px]'>
                {teams.map((match, index=0) => {
                    teamName = match.teamName[index];
                    if(teamName[0] == alphabet[index]){
                        return  <TeamsContent teamName={match.teamName} teamIconUrl={match.teamIconUrl}/>
                    }
                    })}
                </nav>
            </div>
        </div>
    )
}
