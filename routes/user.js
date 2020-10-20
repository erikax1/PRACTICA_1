
var express = require("express");
var router = express.Router();
var USER = require("../database/user");

router.get("/user",(req, res) => {
    var filter={};
    var params = req.query;
    var select ="";
    var aux={};
    if(params.nick !=null){
        var expresion = new RegExp(params.nick);
        filter["nick"] = expresion;
    }
    if (params.filters != null){
             select = params.filters.replace(/,/g," ");
    }

    if (params.agegt != null){
       var gt = parseInt(params.agegt);
       aux ["$gt "]= gt;
    }
    if(params.agelt != null){
        var gl=parseInt(params.agelt);
        aux ["$lt "]= gl;

    }
    if (aux !=  {}){
        filter["age"]=aux;
    }
   console.log(filter);

USER.find(filter).
select(select).
exec((err, docs) =>{
    if (err) {
        res.status(500).json({msn: "Error en el servicio"});
        return;
    }
    res.status(200).json(docs);
    return;
});
});

router.post("/user",(req, res) => {
var userRest = req.body;
var userDB = new USER (userRest);
userDB.save((err, docs) =>{
    if(err){
        var errors = err.errors;
        var keys = Object.keys(errors);
        var msn ={};
        for (var i = 0; i< keys.length; i++){
            msn[keys[i]] = errors [keys[i]].message;
        }
        res.status(500).json(msn);
        return;
    }
    res.status(200).json(docs);
    return;
})
});
router.put("/user",(req, res) => {
var params =req.query;
var bodydata = req.body;
if(params.id == null){
    res.status(300).json({msn: "El parametro ID  es neceario"});
return;
}
USER.update({_id: params.id}, {$set: bodydata}, () => {


});
});
router.delete("/user",(req, res) => {

});
module.exports = router;
