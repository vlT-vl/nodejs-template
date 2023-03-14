#!/usr/bin/env node
// cli.js <> code
//******************************************************************************

// <editor-fold> Import del modulo
import chalk from 'chalk';
import webcheck from './moduli/webcheck.js';
const argv = process.argv;
const Command = argv[2];
import {
  ver,
  build,
  nomecli,
  copyright
} from './db.js';
// </editor-fold>

// <editor-fold> Import dei moduli dei comandi
import cmdlist from './cli/commandlist.js';
// </editor-fold>

// <editor-fold> cli output base
function cliOut() {
  console.log(chalk.whiteBright(`${nomecli} --> nodejs CLI template`))
  console.log(chalk.hex('#aba9a9')(`ver: ${ver} build: ${build}`))
  console.log(chalk.hex('#aba9a9')(`${copyright}`))
}
// </editor-fold>

// <editor-fold> cli output info comandi
function helpOut() {
  console.log("");
  console.log(">> usa l'argomento " + chalk.hex('#98d066')(`'--help'`) + " per visualizzare una lista completa dei comandi");
}
// </editor-fold>

// <editor-fold> cli Command Interpreter
webcheck()
  .then((webConnected) => {
    if (webConnected) {
        switch (Command) {
            case undefined:
              cliOut()
              helpOut()
              break;
            case "--help":
              cliOut()
              cmdlist()
              break;
            case "--node":
              console.log(`${nomecli} running on nodejs: ` + chalk.hex('#c3c258')(`${process.version}`))
              console.log(`node executable path: ` + chalk.hex('#c2c2b1')(`${argv[0]}`))
              break;
            case "-v":
              console.log(`v${ver}`)
              break;
            case "--build":
              console.log(`${build}`)
              break;
            default:
              console.log(`${nomecli} ` + chalk.hex('#cd1414')("ERROR") + " comando '" + chalk.hex('#9166d0')(`${Command}`) + "' non riconosciuto.")
              helpOut()
          }
    } else {
      console.log("");
      console.log(chalk.hex('#e2f50a')(`ATTENZIONE: `) + (chalk.hex('#d7fcb6')(`CONNESSIONE DI RETE ASSENTE`)))
      console.log(chalk.hex('#d4d4d4')(`${nomecli} richiede una connessione di rete stabile per il corretto funzionamento,`));
      console.log(chalk.hex('#d4d4d4')("verifica la tua connessione di rete e riprova."));
      console.log("");
    }
  });
// </editor-fold>
