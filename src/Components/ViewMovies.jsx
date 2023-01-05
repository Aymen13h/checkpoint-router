import React from 'react'
import { useParams } from 'react-router-dom'

const ViewMovies = ({list}) => {

  const {id}=useParams()
  const filme=list.find(el=>el.id==id)
  return (
    <div>
      <iframe width="1400" height="700" src={filme.film} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default ViewMovies