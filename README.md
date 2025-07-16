
# 🗣️ Taller de Programación: **El Chisme se Cuenta con Clases**

¡Bienvenido al taller más chismoso de JavaScript! En este ejercicio aprenderás los fundamentos de la **Programación Orientada a Objetos (OOP)** mientras construyes un mini-sistema donde diferentes personajes cuentan chismes, recolectan información y ganan (o pierden) reputación.

---

## 📦 Requisitos

- Node.js instalado
- Editor de código (VSCode recomendado)

---

## 📁 Estructura del proyecto

```

chismosas-js/
│
├── Chismosa.js            # Clase abstracta base
├── TiaVecina.js           # Subclase que hereda de Chismosa
├── EstudianteEspia.js     # Otra subclase que hereda de Chismosa
├── index.js               # Punto de entrada del programa
├── package.json
└── README.md              # Este archivo

````

---

## 🧠 Conceptos clave

- Clases abstractas
- Herencia
- Encapsulamiento con propiedades privadas
- Polimorfismo
- Simulación de rondas y valores aleatorios con `Math.random()`
- Uso de librerías externas para formateo de consola (`chalk`)

---

## 🚀 ¿Cómo ejecutar?

1. Clona el repositorio o descarga los archivos.

2. Instala las dependencias:

```bash
npm install
````

3. Ejecuta el programa:

```bash
node index.js
```

---

## 🖍️ Formato de salida con colores (`chalk`)

* 🟣 **Nivel de chisme alto** (`nivelChisme >= 8`)
* 🟠 **Reputación alta** (`reputacion >= 7`)
* ⚫ **Reputación baja** (`reputacion < 4`)

---

## 🧪 Simulación

* Cada chismosa realiza 2 rondas de:

  * Recolectar información
  * Contar un chisme
* En cada ronda se actualizan:

  * `nivelChisme`: +0 a +3
  * `reputacion`: -1, 0 o +1
* Se imprime al final:

  * Reputación y nivel de chisme de cada personaje
  * Quién contó el chisme más viral

---

## 🧩 Extensiones sugeridas

* Agregar más tipos de chismosas
* Crear un ranking general de popularidad
* Conectar con una interfaz visual
* Persistencia con archivos JSON

---

## 📚 Autor

Nicole Ordoñez

---

