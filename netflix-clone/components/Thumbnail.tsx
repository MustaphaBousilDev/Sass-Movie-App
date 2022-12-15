import React from 'react'
import {Movie} from '../typings'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
interface Props{
    //DocumentData For using firebase 
    //movies:Movie | DocumentData 
    movie:Movie 
}
const Thumbnail = ({movie} : Props) => {
  const [showModal,setShowModal]=useRecoilState(modalState)
  const [currentMovie,setCurrentMovie]=useRecoilState(movieState)
  return (
    <div className="relative h-28 min-w-[180px]  cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    onClick={
      ()=>{
        setCurrentMovie(movie)
        setShowModal(true)//katwli showModal=true okatsift l modal component okayt7l 7int Khdam b recoil like redux 
      }
    }
    >
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
