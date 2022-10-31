//on require express ici
const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.render('index')
  })

// /fourchette.ejs
router.get('/game/fourchette',(request, response) =>{
    response.render('fourchette')
  })


router.get('/game/diceRoller',(request, response) =>{
    response.render('diceRoller')
  })

//   router.get('/game/:gameName',(req,res)=>{
//     res.render(`${req.params.gameName}`)
//})
module.exports= router;