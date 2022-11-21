import React from 'react'
import {Movie} from '../typings'
import Image from 'next/image'
interface Props{
    //DocumentData For using firebase 
    //movies:Movie | DocumentData 
    movies:Movie 
}
const Thumbnail = ({movie} : Props) => {
  return (
    <div className="relative h-28 min-w-[180px]  cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        alt=""
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
