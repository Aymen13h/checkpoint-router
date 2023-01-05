import React from 'react'
import EditMovie from './EditMovie'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'


const MovieCard = ({movie, handleDelete, handleEdit}) => {
  return (
    <div className='movie-card'>
        <h3>{movie.name}</h3>
        <img src={movie.image} alt={movie.name}/>
        <StarRating rating={movie.rating} />
        <p>{movie.rating}</p>
        <p>{movie.data}</p>
        <button id='btn-add' onClick={() => handleDelete(movie.id)}>Delete</button>
        <Link to={`/ViewMovies/${movie.id}`}><button id='btn-add'>ViewMovies</button></Link>
        <EditMovie movie={movie} handleEdit={handleEdit}/>

    </div>
  )
}

export default MovieCard