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
  //ALMACENAMIENTO DEL ACTUAL DIRECTORIO DE TRABAJO
  let relativePath = process.cwd();
  
  // IMPRIME EXTENSIÓN DEL ARCHIVO INGRESADO
  const path = require('path');
  console.log(path.extname(pathAbsRel));

  //TRANSFORMACIÓN A RUTA ABSOLUTA
  //let absolutePathToken = relativePath + '\\' + pathToken;
  let absolutePathToken = path.resolve(pathToken);

    const readPath = (pathName) =>{
  //SE MUESTRA RUTA ABSOLUTA...(
  console.log(pathName);
  };
    readPath(absolutePathToken);
  };
  }
  
  mdlinks(pathAbsRel);