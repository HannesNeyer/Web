import React, { useEffect, useState } from 'react'
import Header from './Header'
import TableHeader from './TableHeader';

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
    </div>
  )
}
