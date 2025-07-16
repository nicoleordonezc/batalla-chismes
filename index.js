const chalk = require("./node_modules/chalk/package.json")
const CompaneraCuriosa = require("./classes/CompaneraCuriosa");
const TiaVecina = require("./classes/TiaVecina");
const EstudianteEspia = require("./classes/EstudianteEspia");

const chismosas = [
    new CompaneraCuriosa("Laura"),
    new TiaVecina("Ruth"),
    new EstudianteEspia("Carla")
]

chismosas.forEach((e)=>{
    e.recolectarInfo()
})