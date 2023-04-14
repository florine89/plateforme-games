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
    // const adresseABloquer = `168.45.48.78`;
    // récupérer leadresse ip de la personne qui est à l'origine de la reqête http
    let journal=[];
    const ip = request.ip;
    let date = new Date;
    date=date.toISOString();
    let url=request.url;
    journal.push(ip,date, url);
    console.log(journal);

    next()
    // remarque : en localhost mon ip est "::1"
    // l'IP complète c'est (en IPv6): 0:0:0:0:0:0:0:0:1
    // adresse ip de localhost en IPv4 : 127.0.0.1
    // IPv4 et IPv6 sont 2 format d'adresses IP (IPv6 a été déceloppé pour régler le problème du nombr limité d'adresses IPv4 : un jour nous aurions finit par manquer d'adresses à utiliser !)

    // si l'adresse ip est celle que l'on veut bloquer

})



//On précise à express d'utiliser le fichier route opour gérer les adresses
app.use(routes);
app.listen((3007), () => console.log('Server listening  on  port 3007'));