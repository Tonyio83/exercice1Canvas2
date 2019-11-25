var c = document.getElementById('mon_canvas');//défini une variable sur mon élément canvas
var ctx = c.getContext('2d');//défini l'environnement de mon canvas
ctx.beginPath();//début du chemin
ctx.moveTo(100,200);//le tracé part du point 100,200
ctx.bezierCurveTo(100,150,200,70,200,200);//défini le tracé du cône
ctx.closePath();//fermeture du chemin
ctx.fillStyle = '#8A0908'//défini une couleur de remplissage
ctx.fill();//défini et rempli le cône
ctx.beginPath();//début du chemin
ctx.moveTo(100,200);//le tracé part du point 200,50
ctx.lineTo(150,400);//un segment est ajouté vers 150,400
ctx.lineTo(200,200);//un segment est ajouté vers 200,200
ctx.closePath();//fermeture du tracé
ctx.fillStyle = '#AA6522'//défini une couleur de remplissage
ctx.fill();//défini et rempli le triangle
