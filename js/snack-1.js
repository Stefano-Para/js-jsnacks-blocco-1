// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

// 1 creare lista nomi 
var cognomi = ["Orpuni", "Toddani", "Sagolatti", "Piortani", "Chiortidi", "Baragotti", "Merzonghi", "Zabini", "Aropatti", "Largani"];

var nomi = ["Gianfrancioschio", "Stefanello", "Marcolindo", "Silviarlotta", "Giulissima", "Cardanella", "Piergiangiacomo", "Tommassimo", "Pierlo", "Luisella"];




// funzione che crea nome + cognome 
for (var i = 0; i <= 10; i++) {
    var lista = random(nomi, cognomi);
    console.log(lista)

}

function random(nomi, cognomi) {
    cognomi = cognomi[(Math.floor((Math.random() * cognomi.length)))];

    nomi= nomi[(Math.floor((Math.random() * nomi.length)))];


    return nomi + " " + cognomi;
}