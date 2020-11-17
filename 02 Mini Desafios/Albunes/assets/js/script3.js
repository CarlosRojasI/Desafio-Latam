const getData = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/photos";
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const imprimirDatos = async () => {
    const datos = await getData();
    const datosRecortados = datos.slice(0, 20);
    datosRecortados.forEach((a) => {
      console.log(a.title);
    });
  };

  function segundos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("informacion enviada");
      }, 3000);
    });
  }

  const principal = async () => {
    await imprimirDatos();
    const mensaje = await segundos();
    console.log(mensaje);
  };
  principal();
</script>