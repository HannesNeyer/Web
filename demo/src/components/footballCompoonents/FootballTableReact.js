import React, { useEffect, useState } from 'react'
import Header from './Header'
import TableHeader from './TableHeader';
import TableContent from './TableContent';

export default function FootballTableReact() {
    const [table, setTable] = useState([]);
    
    useEffect(()=>{
        fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) => res.json().then((data)=>{
          setTable(data);
        })
        );
    },[])

  return (
    <div>
      <Header/>
      <TableHeader/>
      {table.map((FootballTable) => {
        return <TableContent name={FootballTable.teamName}/>
      })}

    </div>
  )
}
