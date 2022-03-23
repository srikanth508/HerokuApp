console.log("Hello From Srikanth reddy");



const express = require('express');
const req = require('express/lib/request');

const app = express();

const PORT = 4000 || process.env.PORT


app.get('/', (req, res) => {
  res.status(200).send("hi srikanth")
})


app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    UserName: "srikanth",
    followers:200,
    follows:500,
    date : new Date().toLocaleDateString()

  }
  res.status(200).json({ instaSocial });
})


app.get("/api/v1/facebook",(req,res)=>{
  const facebook={
    'UserName':'reddy',
    'Password':'P@ssw0rd'

  }
  res.status(200).json({facebook});
})


app.get("/api/v1/facebook",(req,res)=>{
  const linkdin={
    'UserName':'reddy',
    'Password':'P@ssw0rd'

  }
  res.status(200).json({linkdin});
})


app.get("/api/v1/:token",(req,res)=>{
  console.log(req.params.token);
  res.status(200).json({param:req.params.token});
})

app.listen(PORT, () => {

})