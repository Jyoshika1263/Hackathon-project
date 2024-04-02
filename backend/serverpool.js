const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');

const path = require('path');
const app = express()
app.set("view engine","ejs");
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "faculty_maintainance"
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully connected");
    }
});

app.get("/faculty",(req,res)=>{
    console.log("reporting")
    db.query("select * from faculty",(err,result)=>{
        if(err){
            console.log("error");
        }
        else{
            console.log("result");
            res.send(result);
        }
    })
})

app.get("/cse",(req,res)=>{
    console.log("reporting")
    db.query("select * from faculty where dept_id=10 ",(err,result)=>{
        if(err){
            console.log("error");
        }
        else{
            console.log("result")
            res.send(result)
        }
    })
})

// app.get("/department",(req,res)=>{
//     console.log("reporting")
//     db.query("select * from faculty",(err,result)=>{
//         if(err){
//             console.log("error");
//         }
//         else{
//             console.log("result")
//             res.send(result)
//         }
//     })
// })
app.get("/it",(req,res)=>{
    console.log("reporting")
    db.query("select * from faculty where dept_id=20 ",(err,result)=>{
        if(err){
            console.log("error");
        }
        else{
            console.log("result")
            res.send(result)
        }
    })
})
app.get("/ai-ds",(req,res)=>{
    console.log("reporting")
    db.query("select * from faculty where dept_id=30 ",(err,result)=>{
        if(err){
            console.log("error");
        }
        else{
            console.log("result")
            res.send(result)
        }
    })
})
app.get("/ece",(req,res)=>{
    console.log("reporting")
    db.query("select * from faculty where dept_id=40 ",(err,result)=>{
        if(err){
            console.log("error");
        }
        else{
            console.log("result")
            res.send(result)
        }
    })
})

app.post("/signup",(req,res)=>{
    const userid = req.body.userid
    const name = req.body.name
    const password = req.body.password
    db.query("insert into faculty_data (userid,name,password) values (?,?,?)",
    [userid,name,password],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result)
            res.send(result)
        }
    })

})
app.post("/delete",(req,res)=>{

    const name = req.body.name
    const password = req.body.password
    db.query("delete from userdata where name=? and password=?",
    [name,password],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);

        }
    })

})
app.post("/signin",(req,res)=>{
    const name = req.body.name
    const password = req.body.password
    db.query("select * from faculty_data where name = ? and password = ?",
    [name,password],
    (err,result)=>{
        if(err){
            res.send({err:err})
        }
        if(result.length>0){
            res.send(result)
        }
        else
          res.send({message:"wrong username/password"})
    })  
})
app.delete("/delete/:name",(req,res)=>{
    const name = req.params.name
    db.query('delete from userdata where name=? ',[name],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
})

app.post("/update",(req,res)=>{
    const {name,password}=req.body
    //console.log(regno);
    //console.log(name);
    const sql=`UPDATE userdata SET name=(?) WHERE userdata.password=(?);`
    db.query(sql,[name,password],(error)=>{
      if(error){
        console.log(error)
      }else{
        //console.log("Updated")
      }
    })
  })


app.listen('8080',()=>{
    console.log("server listening")
})

