# Exo en autonomie 

Nous allons ajouter un middleware qui joue le role du videur !

Je sais qu'il y a quelqu'un de malveillant, dont l'adresse ip est : 
`168.45.48.78`

Je souhaiterai que cette personne ne puisse accéder à aucune page de mon application.

Faites en sorte de bloquer cette personne !

app.get ((request, response, next) => {
if (request.ip === `168.45.48.78`) 
response.send (`tu n'es pas autorisé`)
next()
})