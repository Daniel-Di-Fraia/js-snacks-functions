/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function salutoHour (nome){
    const oggi = new Date();
    const hours = oggi.getHours();
    console.log(oggi);
    if (hours < 13){
        return `Buongiorno ${nome}`;  
    } else if(hours > 13){
        return `BuonPomeriggio ${nome}`;
    } else if (hours > 18){
        return `Buonasera ${nome}`;
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(salutoHour(name));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.