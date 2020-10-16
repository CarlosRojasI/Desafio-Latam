for (let i = 0; i <= 30; i++) {
    let password = +prompt("Ingrese su contraseña");
    let passwordReal = 123;
    if (password === passwordReal) {
      alert("Logeado con éxito");
      break;
    } else if (password !== passwordReal) {
      if (i === 2) {
        alert("Se te acabaron los intentos");
        break;
      } else {
        alert("Contraseña incorrecta, intente nuevamente");
      }
    }
  }