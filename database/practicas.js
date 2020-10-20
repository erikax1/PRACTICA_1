var mongoose = require ("./connect");
var practicasSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true, "El titulo es requerido"]
    },
    subtitle:{
        type: String,
        required: [true, "el subtitulo es requerido"]

    },
    genero: Array,
    commentaries: ({body: String, date: Date}),
    likes: [{_iduser:{
        type: String,
        required:[true,"el usuario es necesario"]
    },
    date :{
        type: Date,
        default: new Date()  
    }}],
    album: {
        type: String,
        required: [true, " el album es necesario"]
    },
    year: Number,
    image:
    {
        type: String,
        required: [true,"la ruta de la imagen es necesaria"]
    },
    pathfile:{
        type:String,
        required: [true,"la ruta de la cansion es necesaria"]
    }
});
var practicas =mongoose.model("practicas",practicasSchema);
mudule.exports= practicas;
