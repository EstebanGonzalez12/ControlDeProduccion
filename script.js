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
  const resultadoDiv = document.getElementById("resultado");

  while (dia <= 7) {
    let input = prompt("Ingresa la cantidad de unidades producidas: ");

    if (input === null) {
      alert("Operación cancelada.");
      return; // Salimos si se cancela
    }

    let unidades = parseInt(input);

    if (!isNaN(unidades)) {
      let ganancia = calcularGanancia(unidades);
      mostrarGanancia(dia, ganancia);
      dia++;
    } else {
      alert("Ingresa un valor válido");
    }
  }
}

function calcularGanancia(unidades) {
  if (unidades < 50) {
    return 0;
  } else if (unidades <= 100) {
    return unidades * 0.05;
  } else {
    return unidades * 0.1;
  }
}

function mostrarGanancia(dia, ganancia) {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML += "Día " + dia + ": Ganancias: $" + ganancia + "<br>";
}
