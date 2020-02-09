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

// LECTURA CURRENT WORKING DIRECTORY
// let data = process.cwd();
// console.log(data);

// const https = require('https');
// https.get('https://github.com/NPGonzalez/SCL012-Cipher/blob/master/README.md', (res) => {
//   const { statusCode } = res;
//   const contentType = res.headers['content-type'];

//   let error;
//   if (statusCode !== 200) {
//     error = new Error('Request Failed.\n' +
//                       `Status Code: ${statusCode}`);}
//   // } else if (!/^application\/json/.test(contentType)) {
//   //   error = new Error('Invalid content-type.\n' +
//   //                     `Expected application/json but received ${contentType}`);
//   // }
//   if (error) {
//     console.error(error.message);
//     // Consume response data to free up memory
//     res.resume();
//     return;
//   }
// });
// //   res.setEncoding('utf8');
// //   let rawData = '';
// //   res.on('data', (chunk) => { rawData += chunk; });
// //   res.on('end', () => {
// //     try {
// //       const parsedData = JSON.parse(rawData);
// //       console.log(parsedData);
// //     } catch (e) {
// //       console.error(e.message);
// //     }
// //   });
// // }).on('error', (e) => {
// //   console.error(`Got error: ${e.message}`);
// // });


// // const https = require('https');

// // https.get('http://superpatanegra.com/texto/index.php', (resp) => {
// //   let data = '';

// //   // A chunk of data has been recieved.
// //   resp.on('data', (chunk) => {
// //     data += chunk;
// //   });

// //   // The whole response has been received. Print out the result.
// //   resp.on('end', () => {
// //     console.log(JSON.parse(data).explanation);
// //   });

// // }).on("error", (err) => {
// //   console.log("Error: " + err.message);
// // });

// // // const https = require('https')
// // // const options = {
// // //   hostname: 'flaviocopes.com',
// // //   port: 443,
// // //   path: '/todos',
// // //   method: 'GET'
// // // }

// // // const req = https.request(options, (res) => {
// // //   console.log(`statusCode: ${res.statusCode}`)

// // //   // res.on('data', (d) => {
// // //   //   process.stdout.write(d)
// // //   //})
// // // })

// // // req.on('error', (error) => {
// // //   console.error(error)
// // // })

// // // req.end()

