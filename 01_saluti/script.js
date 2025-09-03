/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
// function salutaUser (nome){
//     let saluto = "ciao";
//     saluto = saluto + " " + nome;
//     return saluto;
// }


// const salutaUser = nome => "ciao" + " " + nome;

//funzione arrow
const salutaUser = nome => `ciao ${nome}`;


// Invoca la funzione qui e stampa il risultato in console
console.log(salutaUser(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario


