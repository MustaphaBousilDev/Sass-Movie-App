import React, { useEffect, useState } from 'react'
import MuiModal from "@mui/material/Modal";
import { useRecoilValue,useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { XIcon } from '@heroicons/react/solid';
import { Element,Genre } from '../typings';
import ReactPlayer from 'react-player/lazy';
const Modal = () => {
  
  const [showModal,setShowModal]=useRecoilState(modalState)
  const [movie, setMovie] = useRecoilState(movieState)
  const [trailer,setTrailer]=useState('') 
  const [genres,setGenres]=useState<Genre[]>([])
  const [muted,setMuted]=useState(true)
  
  useEffect(()=>{
    async function fetchMovie(){
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`)
        .then((response) => response.json())
        .catch(err => console.log(err.message))
        if(data?.videos){
          const index=data.videos.results.findIndex((element:Element)=>element.type==='Trailer')
          setTrailer(data.videos?.results[index]?.key)
        }
        if(data?.genres){
          setGenres(data.genres)
        }
      
      
    }
    fetchMovie()
  },[movie])
  //console.log(data)//dyal useState
  const handleClose=()=>{
    setShowModal(false)
  }
  console.log(trailer)
  return (
    <MuiModal open={showModal} onClose={handleClose}>
        <>
          <button onClick={handleClose} 
            className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none
              bg-[#181818] hover:bg-[#181818]'>
            <XIcon className='h-6 w-6 '/>
          </button>
          <div className='relative pt-[56.25%]'>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${trailer}`}
              width="50%"
              height="50%"
              style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}
              playing 
              muted={muted}
            />
          </div>
        </>
    </MuiModal>
  )
}

export default Modal