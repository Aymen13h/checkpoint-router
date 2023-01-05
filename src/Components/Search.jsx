import React from 'react'
import StarRating from './StarRating'

const Search = ({rating,itemText,handleRating,handleText}) => {
  return (
    <div>
        <form>
        <input type="text" value={itemText} onChange={e=>handleText(e.target.value)} style={{backgroundColor:'#d33d29',borderRadius:" 10px"}} />
            <StarRating rating={rating} handleRating={handleRating}/>
        </form>
    </div>
  )
}

export default Search