import React from 'react'
import {Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './MovieNavbar.css'


function MovieNavbar({getTitleSearch , getRateSearch}) {
  const ratingChanged = (newRating) => {
  getRateSearch(newRating);
};
    const handleTitleChange =(e)=>{
      getTitleSearch(e.target.value)
    }
    return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">cinematic</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About us</Nav.Link>
      <Nav.Link href="#pricing">movies</Nav.Link>
      
    </Nav>
    <Form inline className ="searchArea" >
      <img className="log" src="https://mpng.subpng.com/20190715/yvh/kisspng-film-portable-network-graphics-hoyts-cinematograph-5d2c8faee1b3c1.4701060915632014549245.jpg" alt="page logo"/>
      <FormControl 
      type="text"
      placeholder="Search" 
      className="mr-sm-2 searchInput"
      onChange={handleTitleChange} />
      <ReactStars
      count={5}
      onChange={ratingChanged}
      size={28}
      activeColor="#ffd700"
  />
    </Form>
  </Navbar>
    )
}

export default MovieNavbar ;