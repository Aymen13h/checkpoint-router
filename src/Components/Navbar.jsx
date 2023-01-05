import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Navbar = ({rating, handleRating, handleText, handleAdd}) => {
  return (
    <div>
        <ul style={{display:"flex",justifyContent:"space-around",listStyle:'none',fontSize:"30px"}}>
        <Link to='/'><li>Home</li></Link>
        <Link to='/About'><li>About</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
          
          
        </ul>
    </div>
  )
}

export default Navbar