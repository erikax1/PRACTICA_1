var mongoose  = require("mongoose");
mongoose.connect("mongodb://172.27.0.2:27017/practicasdatabase",{useNewUrlParser: true});
var db = mongoose.connection;
db.on("error", () => {
    console.log("ERRROR  no se puede conectar al servidor");
});
db.on("open",() => {
    console.log("conexion exitosa");
});
module.exports = mongoose;