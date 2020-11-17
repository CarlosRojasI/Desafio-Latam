    //  COnsultorio
    function Consultorio(nombre) {
        this.nombre = nombre;
        this.pacientes = [];
      }

      Consultorio.prototype.getPacientes = function () {
        return this.pacientes;
      };

      Consultorio.prototype.agregarPaciente = function (pacientenuevo) {
        this.pacientes.push(pacientenuevo);
      };

      let consultorio = new Consultorio("Esferas del dragon");

      consultorio.agregarPaciente(
        "Soy un paciente nuevesito de paquete, agarrat e que estoy enfermo"
      );

      //  Pacientes
      function Paciente(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
      }
    </script>