//on require express ici
const express = require('express')
const app = express()
// modules personnels
const routes = require('./routes')
const games= require ('./games.json')
// on précise le moteur de rendu via EJS
app.set('view engine', 'ejs');
//on indique que les views d'EJS sont dans le dossier views
app.set('views', 'views');
//On rends statiques les fichiers du dossier public
app.use(express.static(__dirname+'/public'))

app.locals.games = games;
//On précise à express d'utiliser le fichier route opour gérer les adresses
app.use(routes);
app.listen((3000), () => console.log('Server listening  on  port 3000'));