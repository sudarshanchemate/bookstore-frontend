import React from "react";
// import Header from "./components/Header";
import { Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetails from "./components/Book/BookDetails";


function App() {
  return (
  <React.Fragment>
    <main>
      {/* <header>
      <Header />
    </header> */}
      <Routes>
        <Route path = "/signup" element = {<Signup />}  exact />
        <Route path = "/" element = {<Login />} exact  />
      </Routes>
    </main>
    {/* <header>
      <Header />
    </header> */}
    <main>
      <Routes> 
        <Route path = "/home" element = {<Home/>} exact  />
        <Route path = "/add" element = {<AddBook />} exact />
        <Route path = "/books" element = {<Books />} exact />
        <Route path = "/about" element = {<About />} exact />
        <Route path = "/books/:id" element = {<BookDetails />}  exact /> 
      </Routes>
    </main>
  </React.Fragment>
  );

}

export default App;
