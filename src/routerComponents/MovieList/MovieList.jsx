import React from 'react'
import MoviesCard from '../MovieCard/MovieCard'
import './MovieList.css'
function MovieList({movieListData , titleSearch , rateSearch}) {
    return (
        <div className="MovList" >
         {movieListData.filter(movie =>movie.title.toLowerCase().includes(titleSearch.toLowerCase())
            && movie.rating>=rateSearch)
            .map((movie,index)=> <MoviesCard   key={index} movie={movie}/>)}
        </div>
    )
}

export default MovieList