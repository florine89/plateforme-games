//on require express ici
const express = require('express')
const app = express()
// modules personnels
const routes = require('./routes')
const games= require ('./games.json');
const { get, request } = require('http');
const { response } = require('express');
const dayjs= require('dayjs');
const diary= require('./log.json');
//const isoweek = require('dayjs/plugin/isoWeek')
//dayjs.extend(isoweek);
// on précise le moteur de rendu via EJS
app.set('view engine', 'ejs');
//on indique que les views d'EJS sont dans le dossier views
app.set('views', 'views');
//On rends statiques les fichiers du dossier public
app.use(express.static(__dirname+'/public'))

app.locals.games = games;

app.use((request, response, next) => {

    let journal=[];
    const ip = request.ip;
    let date = new Date;
    date=date.toISOString();
    let url=request.url;
    journal.push(ip,date, url);
    console.log(journal);

    next()

})



//On précise à express d'utiliser le fichier route opour gérer les adresses
app.use(routes);
app.listen((process.env.PORT) || 3007, () => console.log(`Server listening  on  port ${process.env.PORT || 3007}`));