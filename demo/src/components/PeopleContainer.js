import React from 'react'
import Card from './card'

export default function PeopleContainer() {
  return (
    <div>
        <h1>People</h1>
        <div className='w-40'>
          <Card name="Hans" title="CEO" imageUrl="https://picsum.photos/200/300"/>
          <Card name="Hans" title="CEO" imageUrl="https://picsum.photos/200/300"/>
          <Card name="Hans" title="CEO" imageUrl="https://picsum.photos/200/300"/>
        </div>
    </div>
  )
}


