const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());


const db= mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: "sql6435928",
    password: "NZ1eGB6KB9",
    database: "sql6435928"
  });
  
  


app.post('/create',(req ,res ) =>{
  console.log(req.body);
const designationName = req.body.designation;

db.query("INSERT INTO designation(desig_name) VALUES(?)",
[designationName],(err,result) =>{

  if(err){
    console.log(err)
    return res.status(500).send({"message":"designation not created"});

  }
  else{

    return res.status(200).send({"message":"designation created"});

  }
}

)

})

app.post('/designation',(req,res) => {
console.log(req);
db.query("SELECT*FROM designation",(err,result) =>{
if(err){
  console.log(err)
} else {
console.log(result);
  res.send(result)
}

})

})


  app.listen(process.pnv.Port || '3001', () => {
    console.log("Your server is running on port 3000");
});