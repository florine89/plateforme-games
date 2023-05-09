var game = {


  nbDices: null,
  victory: 0,
  defeat: 0,


  ingame: false,
  // méthodes
  init: function() {
    var playBtn = document.getElementById('play');

    playBtn.addEventListener('click', game.start);

    document.addEventListener('keyup', function(event) {
      if (event.code === 'Space') {
        game.start();
      }
    });
    game.boards = document.querySelectorAll('.board');

    game.diceNumberInput = document.getElementById('dice-number-input');

    game.diceNumberInput.addEventListener('input', game.changeNumber);

    var gameForm = document.getElementById('game-form');

    gameForm.addEventListener('submit', game.play);

    game.changeNumber();
  },

  start: function() {

    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
  },

  changeNumber: function() {
    var diceNumberElement = document.getElementById('dice-number');
    game.nbDices = game.diceNumberInput.value;
    diceNumberElement.textContent = game.nbDices;
  },

  play: function(event) {
  
    event.preventDefault();

    if(!game.ingame) {

      game.ingame = true;

      // on vide l'interface
      game.reset();

      game.playerScore = game.createAllDices('player');

      // on déclenchera le lancer du dealer dans 3 secondes
      setTimeout(game.dealerPlay, 3000);

      // on crée le compteur
      game.createCounter();
    }
  },

  // méthode pour supprimer les dés et réinitialiser les scores
  reset: function() {
    for (var boardIndex = 0; boardIndex < game.boards.length; boardIndex++) {
      game.boards[boardIndex].innerHTML = '';
    }
  },

  // méthode retournant un nombre aléatoire dans une plage donnée
  getRandom: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // méthode pour le lancer le bon nombre dés et retourner le score total
  createAllDices: function(player) {
    var score = 0;
    for (var nbDice = 0; nbDice < Number(game.nbDices); nbDice++) {
      var diceScore = game.createDice(player);
      score += diceScore;
    }
    // on retourne le score
    return score;
  },

  // on récupère l'index du joueur en paramètre pour incrémenter son score
  createDice: function(player) {
    var dice = document.createElement('div');
    var diceValue = game.getRandom(1, 6);
    var imageOffset = (diceValue - 1) * 100;
    dice.className = 'dice';
    dice.textContent = '';
    dice.style.backgroundPosition = '-'+ imageOffset + 'px 0';
    document.getElementById(player).appendChild(dice);
    return diceValue;
  },

  // méthode pour le lancer de l'adversaire
  dealerPlay: function() {
    var dealerScore = game.createAllDices('dealer');

    // si le score de l'adversaire est plus élevé on a perdu
    if(dealerScore > game.playerScore) {
      game.defeat++;
    }
    // si notre score est plus élevé on a gagné
    else if(dealerScore < game.playerScore) {
      game.victory++;
    }
    // en cas de match nul on ne change rien

    // on met à jour l'interface avec les résultats
    game.displayResult('player', game.victory);
    game.displayResult('dealer', game.defeat);

    // la partie est finie on peut ensuite en lancer une autre
    game.ingame = false;
  },

  // méthode pour ajouter un div avec le nombre de victoires pour chaque joueur
  displayResult: function(board, counter) {
    // on crée un div
    var result = document.createElement('div');
    // on lui met une classe
    result.className = 'result';
    // on écrit le nombre de victoire du joueur récuperé en paramètre
    result.textContent = counter;
    // on ajoute le div créé dans le board qui a l'id passé en paramètre
    document.getElementById(board).appendChild(result);
  },

  // méthode pour initialiser le compteur
  createCounter: function() {
    // on itinitialise un compteur
    game.counter = 3;

    // on crée et on ajoute un élément au DOM
    game.counterElement = document.createElement('div');
    game.counterElement.textContent = game.counter;
    game.counterElement.className = 'counter';
    document.getElementById('app').appendChild(game.counterElement);

    // on stocke la référence à l'interval pour pouvoir l'annuler plus tard
    // à chaque seconde on veux mettre à jour l'interval
    game.counterInterval = setInterval(game.countdown, 1000);
  },

  // méthode pour décrémenter le compteur
  countdown: function() {
    // on décrémente le compteur
    game.counter--;

    // on met à jour l'élement dans le DOM
    game.counterElement.textContent = game.counter;

    // si on arrive à 0
    if (game.counter === 0) {
      game.deleteCounter();
    }
  },

  // méthode pour stopper et supprimer le compteur du DOM
  deleteCounter: function() {
    // on stoppe l'interval
    clearInterval(game.counterInterval);
    game.counterElement.remove();
  },
};

// game.init();
// on execute init seulement quand on est sûr que le document est prêt
document.addEventListener('DOMContentLoaded', game.init);
