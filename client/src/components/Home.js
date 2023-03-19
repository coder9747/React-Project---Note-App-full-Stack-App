import React from 'react'
import { useContext } from 'react'
import noteContext from '../Context/noteContext'

export default function Home() {
    const one = useContext(noteContext);
    console.log(one)

  return (
    <div>
      {one}
    </div>
  )
}
