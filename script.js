let numeroSecreto = 0;
let intentos = 0;
let juegoActivo = false;

function generarNumero() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  juegoActivo = true;

  document.getElementById("mensaje").innerText = "Número generado, ¡empieza a jugar!";
  document.getElementById("mensaje").style.color = "#38bdf8";
  document.getElementById("intentos").innerText = "";
}

function intentar() {
  if (!juegoActivo) {
    alert("Primero presiona el botón ALEATORIO");
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
  let mensaje = document.getElementById("mensaje");

  if (valor === numeroSecreto) {
    mensaje.innerText = "🎉 ¡Felicidades! Adivinaste el número";
    mensaje.style.color = "#22c55e";

    document.getElementById("intentos").innerText =
      "Lo lograste en " + intentos + " intento(s)";

    juegoActivo = false;
  } 
  else {
    if (diferencia === 1) {
      mensaje.innerText = "🔥 ¡Estás MUY cerca!";
      mensaje.style.color = "#facc15";
    } 
    else if (diferencia <= 3) {
      mensaje.innerText = "😮 Estás cerca";
      mensaje.style.color = "#fb923c";
    } 
    else {
      mensaje.innerText = "❄️ Estás lejos";
      mensaje.style.color = "#60a5fa";
    }
  }

  input.value = "";
}

function reiniciar() {
  numeroSecreto = 0;
  intentos = 0;
  juegoActivo = false;

  document.getElementById("mensaje").innerText = "Juego reiniciado. Presiona ALEATORIO";
  document.getElementById("mensaje").style.color = "#94a3b8";
  document.getElementById("intentos").innerText = "";
}