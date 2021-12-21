import React from 'react'
import {Card , Button} from "react-bootstrap"
import './MovieCard.css'

function MoviesCard({ movie }) {
    return (
        
        <div >
        <Card  className="MovCard" style={{ width: '20rem', height :'45rem'  }}>
        <Card.Img variant="top"   src={movie.posterurl} height = "400" />
        <Card.Body>
        <Card.Title style={{color:"gold"}}>{movie.title}</Card.Title>
        <Card.Text style={{color:"white"}}> {movie.discription}
        </Card.Text>
        <h2>{"⚝".repeat(movie.rating)}</h2>
        </Card.Body>
        <Card.Footer>        
        <Button variant="warning">Watch online</Button>
        </Card.Footer>
        </Card>
        </div>
        
    )
}

export default MoviesCard