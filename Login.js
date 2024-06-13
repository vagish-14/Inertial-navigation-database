import "./login.css";
import React, {useContext, useEffect, useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const [register,setRegister] = useState(false);
    const [details,setDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username:"",
        password: "",
    })
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setDetails({...details, [input.name]: input.value});
    }
    

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = details.username;
        const password = details.password;
       if(register){
           try {
               const url = "http://localhost:8080/api/users";
               await axios.post(url,details);
               setRegister(false);
           } catch (error) {
               setError(error.response.data.message);
           }
       }
       else{
           try {
               const url = "http://localhost:8080/api/auth";
               const res = await axios.post(url,{username,password});
               localStorage.setItem("token",res.data);
               navigate('/dashboard');
           } catch (error) {
               setError(error.response.data.message);
           }
       }
    }
    return (
        <div className='login-page'>
             <div class="background">
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>
            <div class="content">
                <div class='login-lg' style={{position: "relative"}}>
                    <h2 style={{marginBottom: '100px'}}>Member Login</h2>
                    <p style={{position: "absolute", top: "130px",left: '50%', transform:'translateX(-50%)', fontWeight: 600, color: "#ff3333", width: "300px"}}>{error}</p>
                    <div>
                    <div class="form__group">
                        <input type="text" class="form__input" id="text" name="username" value={details.username} onChange={handleChange} placeholder="Username" required></input>
                        <label for="text" class="form__label">Username</label>
                    </div>
                    {
                        register?  <div class="form__group">
                        <input type="text" class="form__input" id="text" name="email" value={details.email} onChange={handleChange} placeholder="Email" required></input>
                        <label for="text" class="form__label">Email</label>
                    </div>:null
                    }
                    {
                        register?  <div class="form__group">
                        <input type="text" class="form__input" id="text" name="firstName" value={details.firstName} onChange={handleChange} placeholder="First Name" required></input>
                        <label for="text" class="form__label">First Name</label>
                    </div>:null
                    }
                    {
                        register?  <div class="form__group">
                        <input type="text" class="form__input" id="text" name="lastName" value={details.lastName} onChange={handleChange} placeholder="Last Name" required></input>
                        <label for="text" class="form__label">Last Name</label>
                    </div>:null
                    }
                    <div class="form__group">
                        <input type="password" class="form__input" id="password" name="password" value={details.password} onChange={handleChange} placeholder="Password" required></input>
                        <label for="password" class="form__label">Password</label>
                    </div>
                    </div>
                     <button className='btn btn-login' onClick={handleSubmit}>{register?"Register":"Login"}</button>
                     <p onClick={() => {setRegister(!register);setError("")}} style={{fontSize: "14px", fontWeight: 400, marginTop:"10px", cursor: "pointer"}}>{register?"Login":"Register"}</p>
                </div>
                <div class='cover-lg'>
                        <h1 style={{fontSize: "40px"}}>Inertial Navigation System</h1>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
