// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.

var userPoint =
document.getElementById("visual").innerHTML =
'Il tuo punteggio è: ' + Math.floor(Math.random() * 6);

var cpuPoint =
document.getElementById("visual-2").innerHTML =
'Il punteggio del computer è: ' + Math.floor(Math.random() * 6);


if(userPoint > cpuPoint){
    document.getElementById("risultato").innerHTML = "Hai vinto la partita"
} else{
    document.getElementById("risultato").innerHTML = "Il Computer ha vinto"
}