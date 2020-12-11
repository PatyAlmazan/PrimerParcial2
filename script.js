window.onload = function () {
    var peliculas = [{
        id: 1,
        nombre: "El sexto sentido",
        director: "M. Night Shyamalan",
        clasificacion: "Drama",
        imagen: 'https://source.unsplash.com/random/500x500/?movie&sig=2'
    },
    {
        id: 2,
        nombre: "Pulp Fiction",
        director: "Tarantino",
        clasificacion: "Acción",
        imagen: 'https://source.unsplash.com/random/500x500/?octopus&sig=2'
    },
    {
        id: 3,
        nombre: "Todo Sobre Mi Madre",
        director: "Almodobar",
        clasificacion: "Drama",
        imagen: 'https://source.unsplash.com/random/500x500/?mom&sig=2'
    },
    {
        id: 4,
        nombre: "300",
        director: "Zack Snyder",
        clasificacion: "Acción",
        imagen: 'https://source.unsplash.com/random/500x500/?300&sig=2'
    },
    {
        id: 5,
        nombre: "El silencio de los corderos",
        director: "Jonathan Demme",
        clasificacion: "Drama",
        imagen: 'https://source.unsplash.com/random/500x500/?goat&sig=2'
    },
    {
        id: 6,
        nombre: "Forrest Gump",
        director: "Robert Zemeckis",
        clasificacion: "Comedia",
        imagen: 'https://source.unsplash.com/random/500x500/?run&sig=2'
    },
    {
        id: 7,
        nombre: "Las Hurdes",
        director: "Luis Buñuel",
        clasificacion: "Documental",
        imagen: 'https://source.unsplash.com/random/500x500/?movie&sig=2'
    }]

    var clasificaciones = [
        {
            nombre: "Drama",
            id: 1
          },
          {
            nombre: "Comedia",
            id: 2
          },
          {
            nombre: "Documental",
            id: 3
          },
          {
            nombre: "Acción",
            id: 4
        }
    ]

    document.querySelector('#boton').addEventListener('click', construir);

    function construir(){
        var info = peliculas.map(function(bar){
        return '	<h3>' +bar.id+ '.- ' +bar.nombre+ '</h2> Director: ' +bar.director+ ' / Clasificacion: ' +bar.clasificacion+ '. <br><br>	<img src=' +bar.imagen+ '> <br><br>';
    })

    document.getElementById("demo").innerHTML = info;
    }
}