// webcheck.js <> Code
//******************************************************************************
// Modulo che consente di verificare lo stato della rete
// es. di utilizzo:
//          webcheck()
//         .then((webConnected) => { console.log(webConnected) })
//******************************************************************************

// <editor-fold> Costanti e Varibili del Modulo
import dns from 'dns';
// </editor-fold>

// <editor-fold> Funzione del Modulo
export default async function webcheck() {
  return new Promise(function(resolve, reject) {
    let webConnected;
    dns.lookupService('8.8.8.8', 53, function(err, hostname, service) {
      if (err) {
        webConnected = false
        resolve(webConnected)
      } else {
        webConnected = true
        resolve(webConnected)
      }
    });
  });
}
// </editor-fold>