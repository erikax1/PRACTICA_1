var mongoose = require("./connect");
var USERCHEMA = new mongoose.Schema({
   nick:{
       type:String,
       required: [true, " el nickname es necesario"]
   },
   age:{
       type: Number,
       required: [true, "la edad es necesario"]

   },
   email: {
       type: String,
       required: [true,"El email es necesario"],
       validate: {
            validator: (value) =>{
                return  /^[\w\.]+@[\w\.]+\.\w{3,3}$/.test(value);

            },
            message: props => '${props.value}no  es valido'
        }
},
password:{
    type:String,
    required: [true, " es password es necesario"],
    min: [6, "el password  debe tener minimo de 6 caracteres"],
     validate:{
         validator: (value  ) => {
             if (!/[A-Z]+/.test(value)){
                 return false
             }
             if (!/[\$\^\@\&\(\)\{\}\#]+/.test(value)){
                 return false
             }
             return true;
         },
         message: props =>'${props.value el password necesita 1 mayuscula '
     }
 
},
roles: {
    type: Array,
    default:[]
},
playlist: {
type: Array,
default: []
},

create:{
    type: Date,
    default: new Date()
}
});


var USER  = mongoose.model("user", USERCHEMA);
module.exports = USER;