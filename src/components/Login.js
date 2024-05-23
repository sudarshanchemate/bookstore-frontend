import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function handleSubmit(e){
        e.preventDefault();

        try{

            await axios.post("https://bookstore-backend-h5et.onrender.com/api/user/Login",{
                email,password
            })
            .then(res=>{
                if(res?.data?.success){
                    history("/home",{state:{id:email}})
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
        <div className="Login">

            <h1>Login</h1>

            <div >
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  style={{margin:"10px", padding:"10px"}}/><br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  style={{margin:"10px", padding:"10px"}}/><br></br>
                <input type="submit" onClick={handleSubmit}/>

            </div>

            <br />
            <p>OR</p>
            <br />

            <Link to="/Signup">Signup Page</Link>

        </div>
    )
}

export default Login