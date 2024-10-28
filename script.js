const usuarioValido = "admin";
const contrasenaValida = "1234";
let intentos = 0;
const maxIntentos = 3;

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  if (usuario === usuarioValido && contrasena === contrasenaValida) {
    alert("Se ha iniciado sesion");
  } else {
    intentos++;

    if (intentos >= maxIntentos) {
      alert("Superaste los 3 intentos. Cerrando la aplicacion");
    }
  }
}

function capturarProduccionDiaria() {
  let dia = 1;
  const resultado = document.getElementById("resultado");

  while (dia <= 7) {
    let unidades = parseInt(
      prompt("Ingresa la cantidad de unidades producidas: ")
    );

    if (!isNaN(unidades)) {
      let ganancia = calcularGanancia(unidades);
      mostrarGanancia(dia, ganancia);
      dia++;
    } else {
      alert("Ingresa un valor valido");
    }
  }
}

function calcularGanancia(){
    if (unidades<50){
        return 0
    } else if(unidades<=100){
        return unidades * 0.05
    }else{
        return unidades * 0.10
    }
}

