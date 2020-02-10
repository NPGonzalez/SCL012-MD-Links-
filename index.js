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
      //TRANSFORMACIÓN A RUTA ABSOLUTA
      let absolutePathToken = path.resolve(pathToken);
      const readPath = (pathName) =>{
        if(path.extname(pathName) === '.md'){
          console.log(pathName);
        } else{
          console.log("Ingrese archivo con extensión .md");
        }
        //SE MUESTRA RUTA ABSOLUTA...
        
  };
  readPath(absolutePathToken);
  };
  };
  
  mdlinks(pathAbsRel);