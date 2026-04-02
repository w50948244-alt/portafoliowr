
let numeroSecreto = 0;
let intentos = 0;
let juegoActivo = false;


function generarNumero() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  juegoActivo = true;

  actualizarMensaje("🎯 Número generado, intenta adivinar", "#38bdf8", 0);
  document.getElementById("intentos").innerText = "";
}


function intentar() {
  if (!juegoActivo) {
    alert("Primero presiona el botón ALEATORIO 🎲");
    return;
  }

  let input = document.getElementById("numero");
  let valor = input.value;

  if (valor === "") {
    alert("Ingresa un número");
    return;
  }

  valor = parseInt(valor);
  intentos++;

  let diferencia = Math.abs(numeroSecreto - valor);
  let progreso = Math.max(0, 100 - diferencia * 15);

  if (valor === numeroSecreto) {
    actualizarMensaje("🎉 ¡Felicidades! Adivinaste el número", "#22c55e", 100);
    document.getElementById("intentos").innerText =
      "Lo lograste en " + intentos + " intento(s)";
    juegoActivo = false;
  } else if (diferencia === 1) {
    actualizarMensaje("🔥 ¡MUY cerca!", "#facc15", progreso);
  } else if (diferencia <= 3) {
    actualizarMensaje("😮 Estás cerca", "#fb923c", progreso);
  } else {
    actualizarMensaje("❄️ Estás lejos", "#60a5fa", progreso);
  }

  input.value = "";
}

// REINICIAR
function reiniciar() {
  numeroSecreto = 0;
  intentos = 0;
  juegoActivo = false;

  actualizarMensaje("Juego reiniciado. Presiona ALEATORIO", "#94a3b8", 0);
  document.getElementById("intentos").innerText = "";
}

function actualizarMensaje(texto, color, progreso) {
  let mensaje = document.getElementById("mensaje");
  mensaje.innerText = texto;
  mensaje.style.color = color;

  let barra = document.getElementById("barra");
  if (barra) {
    barra.style.width = progreso + "%";
  }
}