// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

//  Variabili iniziali
var display = document.getElementById('display');
var allowedUsers = [
  'norvegese@gmail.com',
  'italocalabrese@yahoo.it',
  'filbertomastrogianni@libero.it',
];

// collect email from user
var userEmail = prompt('Inserisci la tua mail', 'filbertomastrogianni@gmail.com');

// Check
var isAllowed = false;

for (var i = 0; i < allowedUsers.length; i++) {
  if (userEmail === allowedUsers[i]) {
    console.log('userMAil: ', userEmail);
    console.log('current email checked from the list: ', allowedUsers[i]);
    isAllowed = true;
  }
}
if (isAllowed) {
  display.innerText = 'Benvenuto ' + userEmail;
} else {
  display.innerText = 'Hai inserito una mail non valida.';
}
