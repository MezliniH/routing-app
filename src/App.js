import React , {useState} from 'react'
import { Routes  , Link, Route,  } from 'react-router-dom';
import './App.css'
import MovieNavbar from './routerComponents/MovieNavbar/MovieNavbar'
import "bootstrap/dist/css/bootstrap.min.css";
import MovieData from './routerComponents/Data/MovieData';
import MovieList from "./routerComponents/MovieList/MovieList";
import AddMovie from './routerComponents/AddMovie/AddMovie';
import Trailer from './routerComponents/Trailer/Trailer';


function App() {
  const [titleSearch , setTitleSearch]=useState("");
  const getTitleSearch =(input)=>{
    setTitleSearch(input)
  };
  const [rateSearch, setRateSearch] = useState(0);
  const getRateSearch =(input)=>{
    setRateSearch(input)
  };
  const [movieListData, setMovieListData] = useState(MovieData);
  const getMoviesListData=(input)=>{
    setMovieListData([...movieListData ,input]);
  }
  return (
    <div>
    <div className ="header">
    <Link to="/Home"><img src="https://img.rasset.ie/00150711-1600.jpg" alt="" className="logotof"/> 
    <h1>The taste of real cinema </h1>
    </Link>
    </div>

    <MovieNavbar 
      getTitleSearch={getTitleSearch}
      getRateSearch={getRateSearch}
     />

    <MovieList
      rateSearch={rateSearch}
      titleSearch={titleSearch}
      movie 
    /> 

  <Routes>


    <Route exact path="/Home">
    
    <Route Route exact path="/Add" components={<AddMovie getMoviesListData={getMoviesListData} />}>  </Route>

    <Route exact path="/trailer" components ={<Trailer/>}/> </Route>
   
  </Routes>
  
  </div>
 
  )
}

export default App ; 
