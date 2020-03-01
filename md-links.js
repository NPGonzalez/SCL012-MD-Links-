// #!/usr/bin/env node
// ALMACENAMIENTO DE PATH
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const chalk = require('chalk');


const readPath = (pathName) => {
  if (path.extname(pathName) === '.md') {
    // DEFINICIÓN DE CONTADORES
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    let u = 0;
    let n = 0;

    const linkComplete = [];

    try {
      // LECTURA DE ARCHIVO POR LÍNEA
      fs.readFileSync(pathName).toString().split('\n').forEach(
        (line) => {
          const regex = /(?<=\[).+?(?=\])|((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/gi;
          // BÚSQUEDA DE LINK Y URL CORRESPONDIENTE
          i += 1;
          let s = 0;
          const linkAndUrlFounded = line.match(regex);
          if (linkAndUrlFounded !== null) {
            const linkAndUrlFoundedElements = (linkAndUrlFounded);
            if (linkAndUrlFoundedElements[1] !== undefined && linkAndUrlFoundedElements[0] !== ' ') {
              linkComplete[j] = linkAndUrlFoundedElements[1];
              (linkAndUrlFoundedElements.reverse()).push(pathName);
              linkAndUrlFoundedElements.push(i);
              j += 1;
              m += 1;
              if (argv.validate === true || argv.stats === true) {
                fetch(linkAndUrlFoundedElements[0])
                  .then((res) => {
                    if (res.status >= 200 && res.status < 400) {
                      const statusUrl = 'ok';
                      linkAndUrlFoundedElements.push(statusUrl);
                    } else if (res.status > 399) {
                      const statusUrl = 'fail';
                      n += 1;
                      linkAndUrlFoundedElements.push(statusUrl);
                    }
                    l += 1; j -= 1;
                    // OPCIÓN STATS
                    if (argv.validate !== true && argv.stats === true) {
                      if (j === 1) {
                        console.log(chalk.red('******************************************************************************************************************************************************'));
                        console.log(path.basename(linkAndUrlFoundedElements[2]));
                        console.log(`${'Total:'}${' '}${m}`);
                        for (let f = 0; f <= m; f += 1) {
                          for (let q = f + 1; q <= m; q += 1) {
                            if (linkComplete[f] !== 0) {
                              if (linkComplete[f] === linkComplete[q]) {
                                linkComplete[q] = 0;
                                u += 1;
                              }
                            }
                          }
                        }
                        console.log(`${'Unique:'}${' '}${m - u}`);
                      }
                    }
                    // OPCIÓN VALIDATE Y STATS
                    if (argv.validate === true && argv.stats === true) {
                      if (j === 1) {
                        console.log(chalk.red('******************************************************************************************************************************************************'));
                        console.log(path.basename(linkAndUrlFoundedElements[2]));
                        console.log(`${'Total:'}${' '}${m}`);
                        for (let f = 0; f <= m; f += 1) {
                          for (let q = f + 1; q <= m; q += 1) {
                            if (linkComplete[f] !== 0) {
                              if (linkComplete[f] === linkComplete[q]) {
                                linkComplete[q] = 0;
                                u += 1;
                              }
                            }
                          }
                        }
                        console.log(`${'Unique:'}${' '}${m - u}`);
                        console.log(`${'Broken:'}${' '}${n}`);
                      }
                    }
                    // OPCIÓN VALIDATE EN CASO DE QUE TODAS LAS URL'S ESTÉN OK
                    if (argv.validate === true && argv.stats !== true) {
                      if(linkAndUrlFoundedElements[4] === 'fail') {
                        console.log(`${l}${'  '}${'File: '}${chalk.red(linkAndUrlFoundedElements[2])}${'  '}${'href: '}${chalk.red(linkAndUrlFoundedElements[0])}${'  '}${'Line: '}${chalk.red.bold(linkAndUrlFoundedElements[3])}${'  '}${'Line: '}${chalk.red.bold(linkAndUrlFoundedElements[3])}${'  '}${'Status: '}${chalk.red.bold(linkAndUrlFoundedElements[4])}${'  '}${'Status code: '}${chalk.red(res.status)}${'  '}${'Text: '}${chalk.red(linkAndUrlFoundedElements[1])}`);
                      } else {
                        console.log(`${l}${'  '}${'File: '}${chalk.blue(linkAndUrlFoundedElements[2])}${'  '}${'href: '}${chalk.green(linkAndUrlFoundedElements[0])}${'  '}${'Line: '}${chalk.blue.bold(linkAndUrlFoundedElements[3])}${'  '}${'Status: '}${chalk.green.bold(linkAndUrlFoundedElements[4])}${'  '}${'Status code: '}${chalk.green(res.status)}${'  '}${'Text: '}${chalk.yellow(linkAndUrlFoundedElements[1])}`);
                      }
                    }
                  }).catch((error) => {
                    k += 1;
                    // OPCIÓN VALIDATE EN CASO DE QUE UNA O MÁS URL FALLEN
                    if (argv.validate === true && argv.stats !== true) {
                      console.log(`${chalk.red(k)}${'  '}${chalk.red('File: ')}${chalk.red.bold(linkAndUrlFoundedElements[2])}${'  '}${'href: '}${chalk.red(linkAndUrlFoundedElements[0])}${'  '}${'Line: '}${chalk.green(linkAndUrlFoundedElements[3])}${'  '}${'Text: '}${chalk.yellow(linkAndUrlFoundedElements[1])}${'  '}${chalk.red.bold(error)}`);
                    }
                  });
                // NO SE INGRESAN OPCIONES
              } else if (argv.validate !== true && argv.stats !== true) {
                if (j === 1) {
                  console.log(chalk.red('******************************************************************************************************************************************************'));
                }
                console.log(`${j}${'  '}${'File: '}${chalk.blue(linkAndUrlFoundedElements[2])}${'  '}${'Line '}${i}${':'}${'  '}${'href: '}${chalk.yellow(linkAndUrlFoundedElements[0])}${'  '}${'Text: '}${chalk.green(linkAndUrlFoundedElements[1])}`);
              }
            }
          }
        },
      );
    } catch (err) {
      console.error(err);
    }
    // SI NO SE INGRESA ARCHIVO ".md"
  } else if (path.extname(pathName) !== '.md') {
    console.log('Ingrese archivo con extensión .md');
  }
};

// FUNCIÓN QUE VALIDA PATH
const pathValidation = (pathToken, optionOne, optionTwo) => {
  const noFile = '';
  if (pathToken === noFile || pathToken === './') {
    const relativePath = process.cwd();
    // FUNCIÓN QUE BUSCA ARCHIVOS "".md" QUE SE ENCUENTRAN EN EL CURRENT WORKING DIRECTORY
    fs.readdir(relativePath, (err, files) => {
      files.forEach((file) => {
        if (path.extname(file) === '.md') {
          // RECURSIVIDAD
          pathValidation(file, optionOne, optionTwo);
        }
      });
    });
  } else {
    // TRANSFORMACIÓN A RUTA ABSOLUTA
    const absolutePathToken = path.resolve(pathToken);
    readPath(absolutePathToken);
  }
};


// FUNCIÓN MDLINKS
const mdLinks = (pathToken, optionOne, optionTwo) => {
  return new Promise((resolve, reject) => {
    if (pathToken !== undefined) {
      resolve(pathValidation(pathToken, optionOne, optionTwo));
    } else {
      reject(console.log('La opción ingresada no es válida'));
    }
  });
};

module.exports.mdLinks = mdLinks;