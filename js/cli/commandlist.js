// commandlist.js <> code
// modulo che restituisce la lista dei comandi
//******************************************************************************

// <editor-fold> Import del modulo
import chalk from 'chalk';
import {
  nomecli
} from '../db.js';
// </editor-fold>

// <editor-fold> Funzione del Modulo
export default function commandlist() {
  console.log("");
  console.log(`utilizzo: ${nomecli} <comando> <parametro>`);
  console.log("");
  console.log(chalk.hex('#959595')("Sono disponibili i seguenti comandi:"));
  console.log("");
  console.log("   --help -->  mostra la lista completa dei comandi");
  console.log("");
  console.log("   --node -->  mostra la versione del runtime di nodejs");
  console.log("");
  console.log("  --build -->  mostra la build della cli");
  console.log("");
  console.log("       -v -->  mostra la versione della cli");
}
// </editor-fold>
