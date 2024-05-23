import React from 'react';
import { Box,Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return <div>
    <Header />
    <Box display ="flex" flexDirection = "column" alignItems ="center">
      <Button
        LinkComponent ={Link}
        to = "/books"
        sx = {{ marginTop : 15, background : "orangered"}}
        variant = "contained"
      > 
        <Typography variant = "h3" >View All Products</Typography>
      </Button>
    </Box>
  </div>;
   
};

export default Home;