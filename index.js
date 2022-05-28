var feedArray = ["images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg",
    "images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg",
    "images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg",
    "images/chihuahua.jpg", "images/cheems.jpg", "images/pedillos.jpg"];

var imagencontainer = document.getElementById("contenedorimg");
var iniciocontainer = document.getElementById("mainpage");


function mostrarimagenes(contenedor, size) {

    for (var i = 0; i < feedArray.length; i++) {
        var ioncol = document.createElement("ion-col");
        var imagen = document.createElement("img");
        ioncol.size = size;
        imagen.src = feedArray[i];
        ioncol.appendChild(imagen);
        contenedor.appendChild(ioncol);
    }

}
mostrarimagenes(imagencontainer, "4");

var user = {
    "name": "Cheems", 
    "correo": " cheems@mail.com ", 
    "username": "@cheems", 
    "password": "pass", 
    "pfp": "images/cheems.jpg", 
    "fechadenacimiento": "10/10/10",
    "followers": "100",
    "following": "0",
    "desc":"cheems",
    "images": feedArray.length
};

var feed = [
    {
        "user":"@pedillos",
        "imagen":"images/pedillos.jpg",
        "description":"Mi primer post",
        "idpub":"0000"
    },
    {
        "user":"@cheems",
        "imagen":"images/cheems.jpg",
        "description":"no cap",
        "idpub":"0001"
    },
    {
        "user":"@chihuahua",
        "imagen":"images/chihuahua.jpg",
        "description":"cap",
        "idpub":"'0002"
    },
    {
        "user":"@pedillos",
        "imagen":"images/pedillos.jpg",
        "description":"no cap",
        "idpub":"0003"
    },
    {
        "user":"@pedillos",
        "imagen":"images/pedillos.jpg",
        "description":"cap",
        "idpub":"0004"
    },
    {
        "user":"@cheems",
        "imagen":"images/cheems.jpg",
        "description":"no cap",
        "idpub":"0005"
    },
];

for (var i=0; i<feed.length;i++){
    var card= document.createElement("ion-card");
    var cheader= document.createElement("ion-card-header");
    var csubtitle= document.createElement("ion-card-subtitle");
    var ctitle= document.createElement("ion-card-title");
    var containerimg = document.createElement("p");
    var img= document.createElement("img");
    var ccontent= document.createElement("ion-card-content");

    csubtitle.innerHTML = feed[i].idpub;
    ctitle.innerHTML = "<img src=\""+feed[i].imagen+"\" width=\"50px\">"+"<strong>"+feed[i].user+"</strong>";
    img.src=feed[i].imagen;
    img.id="imgfeed";
    ccontent.innerText = feed[i].description;


    containerimg.appendChild(img);
    ctitle.appendChild(containerimg);
    cheader.appendChild(csubtitle);
    cheader.appendChild(ctitle);
    card.appendChild(cheader);
    card.appendChild(ccontent);
    iniciocontainer.appendChild(card);
}

var username = document.getElementById("username");
var profpic = document.getElementById("pfp");
var seguidores = document.getElementById("followers");
var seguidos = document.getElementById("following");
var descripcion = document.getElementById("desc");
var publicaciones = document.getElementById("images");

username.innerHTML = "<strong>"+user.username+"</strong>";
profpic.src = user.pfp;
seguidores.innerHTML= "<strong>"+user.followers+"</strong>";
seguidos.innerHTML = "<strong>"+user.following+"</strong>";
descripcion.innerText = user.desc;
publicaciones.innerHTML = "<strong>"+user.images+"</strong>";