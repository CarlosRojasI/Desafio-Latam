// // Estructura del IFE con ES5
// (function () {
//   // ...declaraciones...
// })();

// // Estructura del IFE con ES6
// (() => {
//   return
// })();

let metodosDeMuestra = (() => {
  // let musica = document.querySelector("#musica iframe");
  let musica = $("#musica iframe");
  let peliculas = $("#peliculas iframe");
  let series = $("#series iframe");

  function imprimirMusicaPrivada(videoMusica) {
    musica.setAttribute("src", videoMusica);
  }
  function imprimirPeliculaPrivada(videoPelicula) {
    peliculas.attr("src", videoPelicula);
  }
  function imprimirSeriePrivada(videoSerie) {
    series.attr("src", videoSerie);
  }

  return {
    imprimirMusicaPublica: (videoMusica) => {
      imprimirMusicaPrivada(videoMusica);
    },
    imprimirPeliculaPublica: (videoPelicula) => {
      imprimirPeliculaPrivada(videoPelicula);
    },
    imprimirSeriePublica: (videoSerie) => {
      imprimirSeriePrivada(videoSerie);
    },
  };
})();

//Creación de variables públicas que contienen los videos a mostarar requerimiento 4.
let videoMusica = "https://www.youtube.com/embed/SGVedsUw-Io";
let videoPelicula = "https://www.youtube.com/embed/5PSNL1qE6VY";
let videoSerie = "https://www.youtube.com/embed/E3IlrW6gEas";
//Creación de superclase "VIDEO", declarando en su constructor los 3 parámetros y métodos indicados en diagrama de clases.
class Video {
  constructor(videoMusica, videoPelicula, videoSerie) {
    // Musica
    let _videoMusica = videoMusica;
    this.getVideoMusica = () => _videoMusica;

    // Pelicula
    let _videoPelicula = videoPelicula;
    this.getVideoPelicula = () => _videoPelicula;

    // Serie
    let _videoSerie = videoSerie;
    this.getVideoSerie = () => _videoSerie;
  }

  get VideoPelicula() {
    return this.videoPelicula;
  }
  get VideoMusica() {
    return this.getVideoMusica;
  }
  get VideoSerie() {
    return this.getVideoSerie;
  }

  imprimirMusica() {
    metodosDeMuestra.imprimirMusicaPublica(this.getVideoMusica());
  }
  imprimirPelicula() {
    metodosDeMuestra.imprimirPeliculaPublica(this.getVideoPelicula());
  }
  imprimirSerie() {
    metodosDeMuestra.imprimirSeriePublica(this.getVideoSerie());
  }
}

class Musica extends Video {
  constructor(videoMusica) {
    super(videoMusica);
  }
}

class Pelicula extends Video {
  constructor(videoPelicula) {
    super(null, videoPelicula);
  }
}

class Serie extends Video {
  constructor(videoSerie) {
    super(null, null, videoSerie);
  }
}

// const video = new Video(videoMusica, videoPelicula, videoSerie);

const musica = new Musica(videoMusica);
const pelicula = new Pelicula(videoPelicula);
const serie = new Serie(videoSerie);

musica.imprimirMusica();
pelicula.imprimirPelicula();
serie.imprimirSerie();
// video.imprimirMusica();
// video.imprimirPelicula();
// video.imprimirSerie();
