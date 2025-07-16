const chalk = require('./node_modules/chalk/source/utilities');
const TiaVecina = require('./TiaVecina');
const EstudianteEspia = require('./EstudianteEspia');

// Crear array de chismosas
const chismosas = [
  new TiaVecina('Doña Carmen', 5, 3),
  new EstudianteEspia('Luisita', 8, 4),
  new TiaVecina('Doña Elvira', 6, 2),
  new EstudianteEspia('Juliana', 3, 5)
];

// Simula 2 rondas por chismosa
for (let ronda = 1; ronda <= 2; ronda++) {
  console.log(chalk.blue(`\n--- RONDA ${ronda} ---`));
  chismosas.forEach((persona) => {
    persona.recolectarInfo();
    persona.contarChisme();

    // Simular cambios con Math.random()
    const cambioChisme = Math.floor(Math.random() * 4); // +0 a +3
    const cambioReputacion = Math.floor(Math.random() * 3) - 1; // -1, 0, 1

    // Acceder a los campos privados usando métodos adicionales
    persona._nivelChisme = (persona._nivelChisme || persona.getNivelChismeValue()) + cambioChisme;
    persona._reputacion = (persona._reputacion || persona.getReputacionValue()) + cambioReputacion;

    // Limitar valores entre 0 y 10
    persona._nivelChisme = Math.min(10, Math.max(0, persona._nivelChisme));
    persona._reputacion = Math.min(10, Math.max(0, persona._reputacion));
  });
}

// Agrega estos métodos temporales a la clase base para leer los valores privados
const Chismosa = require('./Chismosa');
Chismosa.prototype.getReputacionValue = function () {
  let valor;
  this.getReputacion = function () {
    return valor;
  };
  const originalLog = console.log;
  console.log = (str) => {
    const match = /(\d+)/.exec(str);
    valor = parseInt(match?.[1] || '0');
  };
  this.getReputacion();
  console.log = originalLog;
  return valor;
};
Chismosa.prototype.getNivelChismeValue = function () {
  let valor;
  this.getNivelChisme = function () {
    return valor;
  };
  const originalLog = console.log;
  console.log = (str) => {
    const match = /(\d+)/.exec(str);
    valor = parseInt(match?.[1] || '0');
  };
  this.getNivelChisme();
  console.log = originalLog;
  return valor;
};

// Mostrar estadísticas finales
console.log(chalk.green('\n📊 ESTADÍSTICAS FINALES:'));

let viral = null;
let maxNivel = 0;

chismosas.forEach((persona) => {
  const nombre = persona.nombre;
  const reputacion = persona._reputacion;
  const nivelChisme = persona._nivelChisme;

  // Determinar color según reglas
  const chismeColor = nivelChisme >= 8 ? chalk.magenta : chalk.white;
  const reputacionColor = reputacion >= 7 ? chalk.hex('#FFA500') : reputacion < 4 ? chalk.black : chalk.white;

  console.log(`${chalk.bold(nombre)}:`);
  console.log(`  Reputación: ${reputacionColor(reputacion)}`);
  console.log(`  Nivel de chisme: ${chismeColor(nivelChisme)}`);

  if (nivelChisme > maxNivel) {
    maxNivel = nivelChisme;
    viral = nombre;
  }
});

console.log(chalk.yellowBright(`\n🟣 El chisme más viral fue contado por: ${viral} con nivel ${maxNivel}`));
