// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.


// Variabili dei numeri
var uNum = 
Math.round(Math.random() * 5) + 1;

var cNum = 
Math.round(Math.random() * 5) + 1;


// Stampa in pagina
var userPoint =
document.getElementById("visual").innerHTML =
'Il tuo punteggio è: ' + uNum;

var cpuPoint =
document.getElementById("visual-2").innerHTML =
'Il punteggio del computer è: ' + cNum;


if(cNum < uNum){
    document.getElementById("risultato").innerHTML = 'Hai vinto la partita';
    
} else if(cNum == uNum){
    document.getElementById("risultato").innerHTML = 'La partita termina in pareggio';


} else{
    document.getElementById("risultato").innerHTML = 'Hai perso la partita';

}