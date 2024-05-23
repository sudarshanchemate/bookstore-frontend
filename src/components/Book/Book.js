import { Link , useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./Book.css";
import axios from "axios";


const Book = (props) => {
    const history = useNavigate();
    const { _id, name, author, description, price, availability, image } = props.book;
    const deleteHandler = async () => {
      await axios
      .delete(`https://bookstore-backend-h5et.onrender.com/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/books"));
      
      
    
  };
  return  <div className = "card" >
    <img src={image} alt={name} />
    <article>By {author}</article>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>{availability}</p>
    <h3>Rs {price}</h3>
    <Button LinkComponent={Link} to ={`/books/${_id}`} sx = {{ mt : "auto" }}>Update</Button> 
    <Button onClick = {deleteHandler} sx = {{ mt : "auto" }}>Delete</Button>   
  </div>;
};

export default Book;