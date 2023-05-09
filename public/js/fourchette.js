// Objectif : identifier un nombre aléatoire comme au juste prix

// 1. je définis  la fourchette max
let max = 500; 

//je génère un nombre aléatoire
// on le multiplie par le max pour transposer notre nombre de 0 à max
let searchedNumber = Math.round(Math.random() * max);
//je demande à l'utilisateur d'essayer de trouver, on veille à bien récupérer un nombre
let enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
// J'initialise un compteur pour compter les essais
let attempt = 1;
// Tant que l'utilisateur n'a pas saisi le nombre exact je lui redemande
while (enteredNumber !== searchedNumber) {
    // si le joueur ne rentre rien ou autre chose qu'un nombre
    //  parseInt va renvoyer NaN (not a number) donc ça s'arrête là avec le break
    if ( isNaN(enteredNumber) ) {
       break;
    }
    if (enteredNumber < searchedNumber) {
        enteredNumber = parseInt(prompt('C\'est plus'));
    }
    else {
        enteredNumber = parseInt(prompt('C\'est moins'))
    }
    // j'incrémente le nombre d'essais 
    attempt += 1;
}
// On sort de la boucle, c'est donc que le nombre entré est le bon, ou que le joueur a abandonné.
if (enteredNumber == searchedNumber) {
    // on prévient l'utilisateur qu'il a gagné
    alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attempt);
} else {
    // on prévient l'utilisateur qu'il a abandonné
    alert('Abandon après ' + attempt + ' essais. Dommage !');
}
