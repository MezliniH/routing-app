import React from 'react'
import MovieData from '../Data/MovieData';
import './Trailer.css'
function Trailer(movie) {
    return (
        <div>
         <video className='T-tag'>
     <source src={movie.trailer} type='video/mp4' />
    </video>   
        </div>
    )
}

export default Trailer ; 