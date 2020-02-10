// //module.exports = () => {
//  ...
// }
// ALMACENAMIENTO DE PATH

const pathAbsRel = process.argv[2];
const path = require('path');
const fs = require('fs');
// FUNCIÓN mdLinks(path)
const mdlinks = (pathToken) => {
// VALIDACIÓN DE PATH
  if (pathToken === undefined) {
    // console.log('Ingrese ruta');
    const relativePath = process.cwd();
    // FUNCIÓN QUE IMPRIME ARCHIVOS QUE SE ENCUENTRAN EN EL CURRENT WORKING DIRECTORY
    fs.readdir(relativePath, (err, files) => {
      files.forEach((file) => {
        if (path.extname(file) === '.md') {
          console.log(file);
        };
      });
    });
  } else {
    // TRANSFORMACIÓN A RUTA ABSOLUTA
    const absolutePathToken = path.resolve(pathToken);
    const readPath = (pathName) => {
      if (path.extname(pathName) === '.md') {
        console.log(pathName);
       
      } else {
        console.log('Ingrese archivo con extensión .md');
      }
      // SE MUESTRA RUTA ABSOLUTA...
    };
    readPath(absolutePathToken);
  }
};
mdlinks(pathAbsRel);
