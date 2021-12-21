import {Modal , Button , FormControl  } from 'react-bootstrap'
import React , {useState} from 'react'
import './AddMovie.css'
function AddMovie({getMoviesListData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [newMovie, setNewMovie] = useState({
    title:"",
    description :"",
    posterUrl:"",
    rating:0
  })
  const handleChange=(e)=>{
    setNewMovie({...newMovie , [e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
  getMoviesListData(newMovie)

    handleClose()
  }
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        + Add new 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="ModHead">
          <Modal.Title>Add Your Favourite Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="formControl"> 
        <FormControl 
      type="text"
      placeholder="Enter New title..." 
      className="mr-sm-2 searchInput"
      name="title"
      onChange={handleChange}
       />
      <FormControl 
      as = "textarea"
      type="text"
      placeholder="Enter Description..." 
      className="mr-sm-2 searchInput"
      name="discription"
      onChange={handleChange}

       />
      <FormControl 
      type="text"
      placeholder="Enter posterUrl..." 
      className="mr-sm-2 searchInput"
      name="posterurl"
      onChange={handleChange}

       />
      <FormControl 
      type="text"
      placeholder="Enter Rating..." 
      className="mr-sm-2 searchInput"
      name="rating"
      onChange={handleChange}

       />
       </Modal.Body>
        <Modal.Footer className="ModHead">
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick= {handleSubmit} >
            Save New Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default  AddMovie;