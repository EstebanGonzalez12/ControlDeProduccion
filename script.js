document.getElementById("btn").addEventListener("click", iniciarSesion),
  function iniciarSesion() {
    const usuarioValido = "admin";
    const contrasenaValida = "1234";
    let intentos = 0;
    const maxIntentos = 3;

    const usuario = document.getElementById(usuario).value;
    const contrasena = document.getElementById(contraseña).value;

    if (usuario === usuarioValido && contrasena === contrasenaValida) {
      alert("Se ha iniciado sesion");
    } else intentos++;

    if (intentos >= maxIntentos) {
      alert("Superaste los 3 intentos. Cerrando la aplicacion");
    }
    window.close();
  };

function capturarProduccionDiaria() {
    let dia = 1;
    const resultado = document.getElementById("resultado")

    while(dia<=7){
        let unidades = parseInt(prompt("Ingresa la cantidad de unidades producidas: "))
    }
}
