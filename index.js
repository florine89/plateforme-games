//on require express ici
const express = require('express')
const app = express()
// modules personnels
const routes = require('./routes')
// on précise le moteur de rendu via EJS
app.set('view engine', 'ejs');
//on indique que les views d'EJS sont dans le dossier views
app.set('views', 'views');
//On rends statiques les fichiers du dossier public
app.use(express.static(__dirname+'/public'))

//On précise à express d'utiliser le fichier route opour gérer les adresses
app.use(routes);



app.listen((3000), () => console.log('Server listening  on  port 3000'));