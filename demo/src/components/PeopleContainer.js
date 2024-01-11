import React, { useEffect, useState } from 'react'
import Card from './card'

export default function PeopleContainer() {

  const [people, setPeople] = useState([]);

  useEffect(()=>{
    fetch("https://659fddef5023b02bfe8aa81a.mockapi.io/api/person/person").then((res) => res.json().then((data)=>{
      setPeople(data);
    })
    );
  },[])

  return (
    <div>
        <div className="grid grid-cols-4 lg:grid-cols-4 gap-4">
          {people.map((person) => {
              return <Card name={person.name} title={person.jobtitle} imageUrl={person.avatar}/>
          })}
        </div>
    </div>
  )
}


