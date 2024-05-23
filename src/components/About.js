import React from 'react';
import { Box, Typography} from "@mui/material";
import Header from "../components/Header";


const About = () => {
  return  ( 
  <div>
    <Header />
    <Box display = "flex" flexDirection = "column" alignItems = "center" margin = "100px">
      <Typography sx = {{ fontFamily: "fantasy"}} variant = "h2">
        This is a CRUD application
      </Typography>
      <Typography sx = {{ fontFamily : "fantasy"}} variant = "h2">
        By MERN STACK
      </Typography>
    </Box>
  </div>
  );
  
};

export default About;