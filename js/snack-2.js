// Snack #5:
// Crea un array vuoto.

var numbers = [];

// Chiedi per 6 volte all’utente di inserire un numero
for (var i = 0; i < 6; i++) {

    var inputUtente = richiestaInput();
    var inputUtente = verificaDispari();
    
    console.log("L'utente ha inserito - " + inputUtente + " -  al tentativo numero #" + [i+1]);
    
}

// Stampa l'array nella console.
console.log("Questo è il nuovo array: " + numbers);

// FUNZIONE di RICHIESTA numero 
function richiestaInput() {
    var input = parseInt(prompt("Inserisci un numero:"));

    return input;
}

function verificaDispari() {
    if (inputUtente % 2 !== 0) {
        numbers.push(inputUtente);
        } else {
            
        }

    return inputUtente;
}


