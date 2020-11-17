// conexion para prueba de ricky  and Morty

const urlGlobal = "https://rickandmortyapi.com/api/character/1";

const getData = async () => {
  const response = await fetch(urlGlobal);
  const data = await response.json();
  return data;
};

const locacion = async () => {
  const url2 = await getData();
  const response = await fetch(url2.location.url);
  const datosResponse = await response.json();
  return datosResponse;
};

const imprimirPersonajes = async () => {
  const dos = await locacion();
  dos.residents.slice(0, 10).forEach(async (r) => {
    const response = await fetch(r);
    const resident = await response.json();
    console.log(resident.name);
  });
};

imprimirPersonajes();