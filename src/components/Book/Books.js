import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Book from './Book';
import "./Book.css";
import Header from '../Header';

const URL  = "https://bookstore-backend-h5et.onrender.com/books";

const fecthHandler = async () =>{
  return await axios.get(URL).then((res) => res.data) 
} 

const Books = () => {
  const [books, setBooks] = useState(); 
  useEffect (() => {

    fecthHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return  (
    <div>
      <Header />
      <ul>
        {books && 
          books.map((book,i) => (
            <li  key = {i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
  
};

export default Books;