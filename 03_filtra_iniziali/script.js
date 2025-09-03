/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function onlyFirstItemLetter (array,letter){
    //creiamo un nuovo array
    newArray = [];
    for (let i = 0; i < array.length; i++){
        let element = array[i];
        let iniziale = element.charAt(0);
        //condizione per verificare se la lettera inserita è la stessa degli elementi dell'array
        if(letter === iniziale){
            newArray.push(element);
        } 
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(onlyFirstItemLetter(names,"A"));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]