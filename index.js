const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json);


const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pratibha",
    database: "drdo_website"
  });
  
  


app.post('/create',(req ,res ) =>{
  console.log(req.body);
const designationName = req.body.designationName;

db.query("INSERT INTO designation(designationName) VALUES(?)",
[desig_name],(err,result) =>{

  if(err){
    console.log(err)
  }
  else{

    res.send("values inserted")
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


  app.listen(3001, () => {
    console.log("Your server is running on port 3000");
});