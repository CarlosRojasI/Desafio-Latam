let multimedias = {
  musica: "https://www.youtube.com/embed/SGVedsUw-Io",
  peliculas: "https://www.youtube.com/embed/5PSNL1qE6VY",
  series: "https://www.youtube.com/embed/E3IlrW6gEas",
};

let impresiones = (() => {
  let iframe = (multimedia) => document.querySelector(`#${multimedia} iframe`);

  function imprimirMultimedia(multimedia, url) {
    iframe(multimedia).setAttribute("src", url);
  }

  return {
    imprimirMultimedia: (multimedia, url) => {
      imprimirMultimedia(multimedia, url);
    },
  };
})();

class Multimedia {
  constructor(multimedia, url) {
    let _multimedia = multimedia;
    this.getMultimedia = () => _multimedia;
    let _url = url;
    this.getUrl = () => _url;
  }

  get Multimedia() {
    return this.getMultimedia;
  }

  get Url() {
    return this.getUrl;
  }

  imprimirMultimedia() {
    impresiones.imprimirMultimedia(this.getMultimedia(), this.getUrl());
  }
}

Object.keys(multimedias).forEach((m) => {
  new Multimedia(m, multimedias[m]).imprimirMultimedia();
});
