// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Ask Email
var messaggio;
var userMail = prompt('Inserisci la tua mail');

console.log('email utente: ', userMail);


// Email Print

messaggio = "La tua mail è  " + userMail;
document.getElementById("visualizza").innerHTML = messaggio;
