// 2. Crear una función asíncrona para obtener los datos de la URL.
// 3. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await
// para recibir el valor directamente de la promesa.
const datosUrl = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    const response = await fetch(url);
    const album = await response.json();
    // punto 4Foreach para traer 20 primeros elementos del arreglo.
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
  });
})();

// Punto 6 Crear una función asíncrona que permite recibir el mensaje de la promesa creada en
// el requerimiento cinco (5), de forma directa con await para ser mostrado en la
// consola del navegador, además de agregar el llamado a las dos funciones
// principales.
