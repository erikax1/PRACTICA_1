var express = require('express');
var router = express.Router();
var USER =require("../database/user");

/* GET home page. */
router.get('/usuario',(req, res, next) => {
  USER.find({},(err,docs) =>{
res.status(200).json (docs);
  });
});
router.post("/usuario",(req,res) => {
var datos = req.body;
var typepracticas =datos.practicas.split(",");
var  user ={};
user["name"]= datos.name;
user["lastname"]= datos.lastname;
user["date"]= new Date();
user ["typepracticas"]=typepracticas;
var newuser = new USER(user);
newuser.save().then(() => {
  res.status(200).json({"mns": "USUARIO REGISTRADO"});
});
});
router.put("/usuario",(req,res) => {
  var datos = req.body;
  datos ["timeserver"] = new Date();
datos["method"] = "PUT";
  console.log(datos);
  res.status(200).json(datos);
  });

  
module.exports = router;

