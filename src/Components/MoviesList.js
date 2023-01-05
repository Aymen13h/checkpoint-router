import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({data,handleDelete,handleEdit}) => {
    console.log(data)
  return (
    <div className='MoviesList'>
      {
        React.Children.toArray(data.map(el =><MovieCard movie={el} handleDelete={handleDelete} handleEdit={handleEdit} />))
      }
    </div>
  )
}

export default MoviesList