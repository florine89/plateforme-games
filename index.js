//on require express ici
const express = require('express')
const app = express()

// on précise le moteur de rendu via EJS
app.set('view engine', 'ejs');
//on indique que les views d'EJS sont dans le dossier views
app.set('views', 'views');
//On rends statiques les fichiers du dossier public
app.use(express.static(__dirname+'/public'))



app.get('/', function (request, response) {
  response.send('Hello World')
})

app.listen((3000), () => console.log('Server listening  on  port 3000'));