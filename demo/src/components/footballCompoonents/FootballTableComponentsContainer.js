import React, { useEffect, useState } from 'react'
import TableContent from './TableContent';

export default function FootballTableComponentsContainer() {
    const [table, setTable] = useState([]);

    useEffect(() => {
      fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) => res.json().then((data) => {
        setTable(data);
      })
      );
    }, [])

    return (
    <div className='relative w-[1012px] h-[500px] ml-[19.1vw] justify-center font-sans-serif 
        text-[15px] text-white ml-[30px] overflow-y-scroll'>

        {table.map((match) => {
          return  <TableContent teamName={match.teamName} teamIconUrl={match.teamIconUrl} matches={match.matches} won={match.won} draw={match.draw} 
          lost={match.lost} goals={match.goals} goalDiff={match.goalDiff} points={match.points}/>
        })}
    </div>
  )
}
