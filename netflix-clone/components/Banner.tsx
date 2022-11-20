import React, { useEffect, useState } from 'react'
import {Movie} from "../typings"
import Image from 'next/image'
//netflixOriginals? kat3Nii ila kayn bach component dyal banner li findex ma7titch fiha argument dyal netflix Origin maytl3ch

interface Props{
  netflixOriginals:Movie[]
}
const Banner = ({netflixOriginals}:Props) => {
  const [movie,setMovie]=useState<Movie | null>(null)
  useEffect(()=>{
    setMovie(netflixOriginals[Math.floor(Math.random()*netflixOriginals.length)])
  },[netflixOriginals])
  console.log('hello mother fyckzer')
  console.log(movie)
  return (
    <div>
      <div>
        {/*<Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt="" /> */}
      </div>
    </div>
  )
}

export default Banner