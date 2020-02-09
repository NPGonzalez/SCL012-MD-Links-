// //module.exports = () => {
//   // ...
//   //}

//ALMACENAMIENTO DE PATH
let pathAbsRel = process.argv[2];
// FUNCIÓN mdLinks(path)
const mdlinks = (pathToken) =>{
// VALIDACIÓN DE PATH
if(pathToken === undefined){
console.log('ingrese ruta')}
else{  
//ALMACENAMIENTO DEL D
let relativePath = process.cwd();
//TRANSFORMACIÓN A RUTA ABSOLUTA
let absolutePathToken = relativePath + '\\' + pathToken;
  const readPath = (path) =>{
//SE MUESTRA RUTA ABSOLUTA...
    console.log(path);
  };
  readPath(absolutePathToken);
};
}

mdlinks(pathAbsRel);

