// //module.exports = () => {
//   // ...
//   //}

//ALMACENAMIENTO DE PATH
let pathAbsRel = process.argv[2];


//ALMACENAMIENTO DEL ACTUAL DIRECTORIO DE TRABAJO
let relativePath = process.cwd();
//TRANSFORMACIÓN A RUTA ABSOLUTA
let absolutePathToken = relativePath + '\\' + pathToken;
const readPath = (pathName) =>{
//SE MUESTRA RUTA ABSOLUTA...(
console.log(pathName);
};