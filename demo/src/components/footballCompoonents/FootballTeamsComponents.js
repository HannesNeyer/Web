import React, { useEffect, useState } from 'react'
import TeamsContent from './TeamsContent'

export default function FootballTeamsReact() {
    const [teams, setTeams] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);
    let lastLetter = "";

    const filterTeams = (filter) => {
        let filtered = teams.filter(teams=> teams.teamName.substring(0,1).includes(filter.toUpperCase()));
        setFilteredTeams(filtered);
    }

    useEffect(() => {
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then((res) => res.json().then((data) => {
            setTeams(data);
            setFilteredTeams(data);
        })
        );
    },[])

    return (
        <div>
            <input className='flex overflow-x relative w-[2530px] h-[145px] ml-[1%] mt-[80px] z-[-5] h-[200px] bg-black' onChange={(element)=>{
                filterTeams(element.target.value);
            }}></input>

            {filteredTeams.map((match, index = 0) => {
                    if (lastLetter !== match.teamName.toUpperCase().substring(0, 1)) {
                    lastLetter = match.teamName.toUpperCase().substring(0, 1);
                    return (
                        <>  
                            <div className=''>
                                <h4>{match.teamName.toUpperCase().substring(0, 1)}</h4>
                                <TeamsContent key={index} teamName={match.teamName} teamIconUrl={match.teamIconUrl} />
                            </div>
                        </>
                        
                    )

                } else {
                    return <TeamsContent key={index} teamName={match.teamName} teamIconUrl={match.teamIconUrl} />
                }

            })}
        </div>
        
    )
}
