//on require express ici
const express = require ('express')
const router = express.Router()
const games = require ('./games.json')

router.get('/', (request, response) => {
    response.render('index',{cssFile:null})
  });

// // /fourchette.ejs
// router.get('/game/fourchette',(request, response) =>{
//     response.render('fourchette',{cssFile:null})
//   });

// router.get('/game/diceRoller',(request, response) =>{
//     response.render('diceRoller',{cssFile:'diceRoller.css'})
//   });

  router.get('/game/:gameName',(request,response )=>{
    let foundGame= games.find(game => game.name.toLowerCase()===request.params.gameName.toLowerCase())

    response.render(`${foundGame.name}`,{cssFile:foundGame.cssFile})
})

module.exports= router;