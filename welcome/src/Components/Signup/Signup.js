import React, { useState } from 'react';
import {useNavigate} from 'react-router';
import axios from 'axios'
import "./Signup.css";
const Signup = () => {
    const [UserId,setUserId]=useState("")
    const userIdChange =(e)=>{
        setUserId(e.target.value)
    }

    const [UserName,setUserName]=useState("")
    const userNameChange =(e)=>{
        setUserName(e.target.value)
    }
    const [password,setpassword]=useState()
    const changePassWord=(e)=>{
        setpassword(e.target.value)
    }
    let navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const signup = ()=>{
        axios.post("http://localhost:8080/signup",{
            userid: UserId,
            name : UserName,
            password : password,
        }).then((response) =>{
            console.log(response);
            alert("success");
            navigate("../signin",{replace:true})
        })
    }

    return (
        <center><br/>

        <div className="border">
          <div className="card">
        <form onSubmit = {handleSubmit}> <br/>
        {/* <label>Name:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder='Userid' id='userid'
          value={UserId}
          onChange={userIdChange}
          /><br/><br/>
          <input
          type="text"
          placeholder='UserName' id='name'
          value={UserName} 
          onChange={userNameChange}
          /><br/><br/>
          <input
          type="text"
          placeholder='email' id='email'
          /><br/><br/>
          <input
           type="text"
           placeholder='phonenumber' id='phone number'
           /><br/><br/>
            <input
          type="password"
          placeholder='password' id='password'
          value={password}
          onChange={changePassWord}
          /><br/><br/>
           <input
          type="password"
          placeholder='confirm password' id='confirm password'
          value={password}
          onChange={changePassWord}
          /><br/><br/>
        </form>
        <center>
        <button id='btn' onClick={signup}>SIGNUP</button>
    </center>
        <br></br>
        </div>
        </div>
        </center>
    );
};

export default Signup;