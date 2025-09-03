/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocalsNumber(parola){
    let vocale = 0;
    const vocali = ["a","e","i","o","u"]
    for(let i = 0; i < parola.length; i++){
        let controllo = parola.charAt(i);
    for(let i = 0; i < vocali.length; i++){
        const arrayCheck = vocali[i];
        // if(
        //     controllo === "a" ||
        //     controllo === "e" ||
        //     controllo === "i" ||
        //     controllo === "o" ||
        //     controllo === "u"
        // ){
        //     vocale++;
        // }
        if(controllo === arrayCheck){
            vocale++;
        }
    }
    }
    return vocale;
}

// Invoca la funzione qui e stampa il risultato in console
console.log("le vocali nella parola sono:" , vocalsNumber(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)