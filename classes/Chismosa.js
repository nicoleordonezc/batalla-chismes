class Chismosa {
    #reputacion = 0;
    #nivelChisme = 0;
    constructor(nombre, reputacion, nivelChisme) {
        if(this.constructor === Chismosa){
            throw new Error("No se puede instanciar la clase abstracta Chismosa.");
            
        }
        this.nombre = nombre;
        this.#reputacion = reputacion;
        this.#nivelChisme = nivelChisme   
    }

    recolectarInfo(){
        throw new Error("Este método no esta disponible");
    };
    contarChisme(){
        throw new Error("Este método no esta disponible");
    };
    getReputacion(){
        console.log(`Nivel de reputación ${this.#reputacion}`)
    }
    getNivelChisme(){
        console.log(`Nivel de chisme ${this.#nivelChisme}`);
        
    }
};

module.exports = Chismosa;