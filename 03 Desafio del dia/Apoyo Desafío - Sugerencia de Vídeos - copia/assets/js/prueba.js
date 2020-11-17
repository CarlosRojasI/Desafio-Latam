const datosUrl = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
      const response = await fetch(url);
      const album = await response.json();
      //Foreach para traer 20 primeros elementos del arreglo.
      album.slice(0, 20).forEach((e) => console.log(e));
    } catch (err) {
      console.log(err);
    }
  };
  datosUrl();
  //punto 5  Función IIFE que retorna una promesa despues de 3 segundos.
  (function mensaje() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Información enviada!");
      }, 3000);
      console.log(mensaje);
    });
  })();
  