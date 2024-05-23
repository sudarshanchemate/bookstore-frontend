import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
// import { } from "@mui/material";


function Signup() {
    const history=useNavigate();
    
    const [name,setName] =useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    async function handleSubmit(e){
        e.preventDefault();

        try{

            await axios.post("https://bookstore-backend-h5et.onrender.com/api/user/signup",{
                name,email,password
            })
            .then(res=>{
                if(res?.data?.success){
                    history("/",{state:{id:email}})
                }
                else {
                    alert("Something went wrong. Please check network console.")
                }
            })
            .catch(e=>{
                alert("Something went wrong. Please check network console.")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="Signup" >

            <h1>Signup</h1>

            <form action="POST" onSubmit = {handleSubmit}>
                <input type="name" onChange = {(e) => { setName(e.target.value)}}  value = {name} placeholder ="Name"  style={{margin:"10px", padding:"10px"}}/><br></br>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} value = {email} placeholder="Email"  style={{margin:"10px", padding:"10px"}}/><br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} value = {password} placeholder="Password" style={{margin:"10px", padding:"10px"}}/><br></br>
                <input type="submit"  />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>

        </div>
    )
}

export default Signup;


