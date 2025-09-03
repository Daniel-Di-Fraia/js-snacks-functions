/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.
function elementfirstLetter (array){
    //creazione nuovo array per prima lettera elementi
    const newArray = [];
    //scorriamo l'array
        for (let i = 0; i < array.length; i++) {
        let num = array[i];
        //creiamo una variabile che prendera come valore il primo carattere degli elementi
        const primocarattere = num.charAt(0);
        //pushamo all interno del nuovo array le prime lettere
        newArray.push(primocarattere);
        }
        return newArray;

}

// Invoca la funzione qui e stampa il risultato in console
console.log(elementfirstLetter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

