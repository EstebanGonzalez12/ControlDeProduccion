const usuarioValido = "admin";
const contrasenaValida = "1234";
let intentos = 0;
const maxIntentos = 3;

document.getElementById("btn").addEventListener("click", iniciarSesion),
  function iniciarSesion() {
    const usuario = document.getElementById(usuario).value;
    const contrasena = document.getElementById(contraseña).value;

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
      alert("Se ha iniciado sesion")
    } else intentos++

    if (intentos >= maxIntentos) {
      alert("Superaste los 3 intentos. Cerrando la aplicacion")
    }
    window.close()
  }

