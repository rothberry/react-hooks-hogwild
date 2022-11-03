import React from 'react'
import HogTile from './HogTile'

const HogTiles = ({hogs}) => {
  
  const mappedHogs = () => {
    return hogs.map((hog, idx) => {
      return <HogTile hog={hog} key={idx}/>
    })
  }

  return (
    <div>{mappedHogs()}</div>
  )
}

export default HogTiles