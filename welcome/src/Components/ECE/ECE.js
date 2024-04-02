import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

const Faculty = () => {
    const [userdetails,setuserdetails]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8080/ece").then((response)=>{
             setuserdetails(response.data)
            console.log(response.data)
        })
    },[])
    
    const deleteUser = (user) => {
        axios.delete(`http://localhost:8080/delete/${user}`);
        
    };
    return (
        <div>
            <center>
            <table className="ui celled table">
  <thead>

    <tr>
    
    <th>fid</th>
    <th>did</th>
    <th>dname</th>
    <th>hname</th>
    <th>fname</th>
    <th>address</th>
    <th>email</th>
    <th>phno</th>
    <th>doj</th>
    <th>experience</th>
    <th>qualification</th>
    <th>designation</th>
    <th>workshop_conduct</th>
    <th>workshop attend</th>
    <th>pub_id</th>
    <th>pub_name</th>
    <th>edition</th>
    <th>price</th>
    <th>subject</th>
  </tr></thead>
  <tbody>
    {userdetails.map((item)=>{
        return(
            <tr>
            <td data-label="fid">{item.fid}</td>
            <td data-label="dept_id">{item.dept_id}</td>
            <td data-label="dept_name">{item.dept_name}</td>
            <td data-label="hod_name">{item.hod_name}</td>
            <td data-label="fname">{item.fname}</td>
            <td data-label="address">{item.address}</td>
            <td data-label="email">{item.email}</td>
            <td data-label="phone">{item.phone}</td>
            <td data-label="doj">{item.doj}</td>
            <td data-label="experience">{item.experience}</td>
            <td data-label="qualification">{item.qualification}</td>
            <td data-label="designation">{item.designation}</td>
            <td data-label="workshops_conduct">{item.workshops_conduct}</td>
            <td data-label="workshops_attend">{item.workshops_attend}</td>
            <td data-label="p_id">{item.p_id}</td>
            <td data-label="p_name">{item.p_name}</td>
            <td data-label="edition">{item.edition}</td>
            <td data-label="price">{item.price}</td>
            <td data-label="sub_name">{item.sub_name}</td>
            <td><button onClick={()=>{deleteUser(item.name)}}>Delete</button></td>
          </tr>
         
        )
    }) }
    
  </tbody>
</table>
</center>

        </div>
    );
};

export default Faculty;