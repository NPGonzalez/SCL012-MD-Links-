// //module.exports = () => {
//  ...
// }

// ALMACENAMIENTO DE PATH
const pathAbsRel = process.argv[2];
const optionValidate = process.argv[3];
const path = require('path');
const fs = require('fs');
// FUNCIÓN mdLinks(path)
const mdlinks = (pathToken) => {
  // console.log(optionValidate);
  // VALIDACIÓN DE PATH
  if (pathToken === undefined) {
    // console.log('Ingrese ruta');
    const relativePath = process.cwd();
    // FUNCIÓN QUE IMPRIME ARCHIVOS QUE SE ENCUENTRAN EN EL CURRENT WORKING DIRECTORY
    fs.readdir(relativePath, (err, files) => {
      files.forEach((file) => {
        if (path.extname(file) === '.md') {
          // SE LLAMA A mdLinks() PARA ENCONTRAR RUTAS ABSOLUTAS DE ARCHIVOS .MD ENCONTRADOS EN EL CWD, SI RUTA VACÍA (RECURSIVIDAD) 
          mdlinks(file);
        }
      });
    });
  } else {
    // TRANSFORMACIÓN A RUTA ABSOLUTA
    const absolutePathToken = path.resolve(pathToken);
    const readPath = (pathName) => {
      if (path.extname(pathName) === '.md') {
        try{
        console.log(absolutePathToken);
      

        }catch (err) {
          console.error(err);
        }
      } else {
        console.log('Ingrese archivo con extensión .md');
      }
      // SE MUESTRA RUTA ABSOLUTA...
    };
    readPath(absolutePathToken);
  }
};
mdlinks(pathAbsRel);
