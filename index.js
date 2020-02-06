//module.exports = () => {
  // ...
  //}
//LECTURA DE RUTA DESDE LÍNEA DE COMANDO
console.log("Ingresa ruta");
let pathToken = process.argv[2];
if (pathToken){
  const readPath = (path) =>{
    console.log(pathToken);
  };
  readPath(pathToken);
}else{
  console.log("No ingrese ruta vacía");
}