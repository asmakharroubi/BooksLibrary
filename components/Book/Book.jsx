import React, { useState } from "react";
import "./Book.css";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux"; 

const Book = ({ book }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch =  useDispatch();
  const [edited,setEdited] = useState("")
  const handleEdit=(e)=>{
    setEdited(e.target.name)
  }

  return (
    <div className="book-card ">
      <img src={book.img} alt={book.title} className="book-cover" />
      <h1 className="book-title"> {book.title} </h1>

      <button className={`read-button ${book.isDone ? "read" : "Done"}`}>
        {book.isDone ? "Done" : "Read"}
      </button>
      <button className="editbtn" onClick={handleShow}></button>

      {/* edit modal */}
      <Modal show={show} onHide={handleClose} className="themed-modal">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex",flexDirection : "column" }}>
          <label>Book Cover</label>
          <input type="text" onChange={handleEdit} name="cover" />
          <label>Book Title</label>
          <input type="text" onChange={handleEdit} name="title" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Book;
