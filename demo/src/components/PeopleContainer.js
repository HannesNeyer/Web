import React, { useEffect, useState } from 'react'
import Card from './card'

export default function PeopleContainer() {

  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const filterPeople = (filter) => {
    let filtered = people.filter(person=> person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered);
  }

  useEffect(()=>{
    fetch("https://659fddef5023b02bfe8aa81a.mockapi.io/api/person/person").then((res) => res.json().then((data)=>{
      setPeople(data);
      setFilteredPeople(data);
    })
    );
  },[])

  return (
    <div className='p-8'>
      <div className='border mb-4 fixed bg-white w-full h-28'>
        <h1>People</h1>
        <input className='border p-5' type="text" placeholder='search' onChange={(element)=>{
          filterPeople(element.target.value);
        }}></input>
      </div>
        <div className="grid grid-cols-4 lg:grid-cols-4 gap-4 p-8 pt-32">
          {filteredPeople.map((person) => {
              return <Card name={person.name} title={person.jobtitle} imageUrl={person.avatar}/>
          })}
        </div>
    </div>
  )
}


