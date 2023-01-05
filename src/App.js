
import './App.css';
import { moviesData } from './data';
import { useState } from 'react';
import MoviesList from './Components/MoviesList';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewMovie from './Components/NewMovie';
import Search from './Components/Search';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact';
import ViewMovies from './Components/ViewMovies';




function App() {
  const [list, setList] = useState(moviesData)
  const [text, setText] = useState("")
  const [rating, setRating] = useState("")
  const handleRating=(x)=>setRating(x)
  const handleText=(y)=>setText(y)
  const handleDelete=(id)=>setList(list.filter(el=>el.id!==id))
  const handleAdd=(newMovieItem)=>setList([...list,newMovieItem])
  const handleEdit=(editeMovie)=>setList(list.map(el=>el.id===editeMovie.id?{...el,...editeMovie}:el))
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<MoviesList data={list.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&(el.rating>=rating))} handleDelete={handleDelete} handleEdit={handleEdit}/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/ViewMovies/:id' element={<ViewMovies list={list}/>}/>
      </Routes>
      <Search itemText={text} rating={rating} handleRating={handleRating} handleText={handleText}/>
      <NewMovie handleAdd={handleAdd}/>
      </Router>
      
      
    </div>
  );
}

export default App;
