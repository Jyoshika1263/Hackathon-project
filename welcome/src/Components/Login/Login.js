// import React, {useEffect, useState} from 'react';
// import "./Login.css";


// const Loginform = () => {
// // const users = [
// //   {
// //     username: 'admin1',
// //     password: '12345678'
// //   },
// //   {
// //     username:'admin2',
// //     password:'012345678'
// //   }
// // ];

//   const [data, setData] = useState({
//     username: '',
//     password: ''
//   });

//   const changeHandler = (e) => {
//     setData({...data, [e.target.name]: e.target.value})
//   }

//   const checkUser = () => {
//     const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
//     if(usercheck) {
//       console.log("Login successful");
//     }else {
//       console.log("Wrong password or username");
//     }
//     // console.log(uname);
//     console.log(usercheck);
//   }


//   useEffect(() => {
// checkUser(users)
//   }, [data.username, data.password])

//   console.log(data)
//   return (
//     <center>
//     <div className="App">
//     <div className="border">
//           <div className = "card"> 
    // <h2>LOGIN</h2>
    //   <div className="input-text">Usename
    //   <br></br>
    //           <input
    //             type="text"
    //             name="username"
    //             value={data.username}
    //             placeholder="Username"
    //             aria-describedby="inputGroupPrepend2" required
    //             onChange={changeHandler}
    //           />
    //       </div>
    //       <div className="input-text">
    //         Password
    //         <br></br>
    //         <input
    //           type="password"
    //           name="password"
    //           value={data.password}
    //           placeholder="Password"
    //           aria-describedby="inputGroupPrepend2" required
//     //           onChange={changeHandler}
//             />
            
//           </div>
//     </div>
//     </div>
//     </div>
//     </center>
//   );
// }
// export default Login;


// import axios from 'axios';
import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router';
const Login = () => {
    const [data,setData]=useState({
        username:"",
        password:""
    })
    
    const{username,password}=data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
     let navigate=useNavigate();
    const submitHandler =e=>{
        e.preventDefault()
        console.log(data)
        alert("login successful")
         navigate("../department",{replace:true})

   
        //  axios.post("http://localhost:5400/insert1",{data})
    //  .then(function(response){
    //      console.log(response)
    //      alert('Inserted successfully');
    //      navigate("../success",{replace:true});
    //  })
    //  .catch(function(error){
    //      console.log(error)
    //  })
    }
    return (
        <div>
       <center >
          <div className="border">
          <div className="card">
            
         
           <form onSubmit={submitHandler}>
           <h1>LOGIN</h1>
               
               <input type="text" name="username" id="un" placeholder="username" value={username} onChange={changeHandler}/><br/><br/>
              <br/>
          
               <input type="password" name="password" placeholder="password" value={password} onChange={changeHandler}/><br/><br/> 
               <input id="btn" type="submit" password="submit"/>
              
           </form>
           </div>
           </div>
       </center>
          </div>
    );
};

export default Login;