import React from 'react'

const StarRating = ({ rating, handleRating }) => {
    const stars = (rating) => {
    var tab = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            tab.push(<span style={{width:"100px", height:"40px", color:"gold", fontSize:"30px" ,cursor:"alias" ,marginLeft:"20px"}} onClick={()=>handleRating(i)}>★</span>)
        } else {
            tab.push(<span style={{width:"100px", height:"40px", color:"black", fontSize:"30px",cursor:"alias" ,marginLeft:"20px"}} onClick={()=>handleRating(i)}>★</span>)
        }
    }
    return tab
}
return (
    <div>
        {React.Children.toArray(stars(rating))}
    </div>
)
}
StarRating.defaultProps={
    handleRating:()=>{}
}

export default StarRating