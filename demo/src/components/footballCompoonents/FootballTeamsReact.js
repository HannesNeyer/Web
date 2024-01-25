import React, { useEffect, useState } from 'react'
import Header from './Header'
import TableHeader from './TableHeader';

export default function FootballTeamsReact() {
    const [teams, setTeams] = useState([]);
    
    useEffect(()=>{
        fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then((res) => res.json().then((data)=>{
          setTeams(data);
        })
        );
    },[])

  return (
    <div>
      <Header/>
    </div>
  )
}
