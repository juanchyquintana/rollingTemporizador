const iniciarContador = document.querySelector('#iniciarContador')
const pausarContador = document.querySelector('#pausarContador')
const resetearContador = document.querySelector('#resetearContador')
const tiempoInput = document.querySelector("#tiempo");
let temporizadorCorriendo = false;
let tiempoPantalla;
let segundos = 0;

resetearContador.addEventListener('click', resetearTemporizador)
iniciarContador.addEventListener('click', iniciarTemporizador)
pausarContador.addEventListener('click', pausarTemporizador)

function iniciarTemporizador() {
  if (!temporizadorCorriendo && tiempoInput.value > 0) {
    segundos = parseInt(tiempoInput.value) * 60;
    tiempoPantalla = setInterval(actualizarTiempo, 1000);
    temporizadorCorriendo = true;
    tiempoInput.disabled = true;
  }
}

function pausarTemporizador() {
  clearInterval(tiempoPantalla);
  temporizadorCorriendo = false;
  tiempoInput.disabled = false;
}

function resetearTemporizador() {
  clearInterval(tiempoPantalla);
  temporizadorCorriendo = false;
  segundos = 0;
  tiempoPantalla = null;
  actualizarTiempo();
  tiempoInput.value = 0;
  tiempoInput.disabled = true;
}

function actualizarTiempo() {
  if (segundos > 0) {
    segundos--;
    const hora = Math.floor(segundos / 3600);
    const minutops = Math.floor((segundos % 3600) / 60);
    const contadorSegundos = segundos % 60;

    document.getElementById("tiempoPantalla").innerText = `
    ${formatearTiempo(hora)}:${formatearTiempo(minutops)}:${formatearTiempo(contadorSegundos)}
    `;
  } else {
    clearInterval(tiempoPantalla);
    temporizadorCorriendo = false;
    tiempoInput.value = 0;
    tiempoInput.disabled = null;
  }
}

function formatearTiempo(tiempo) {
  return tiempo < 10 ? `0${tiempo}` : tiempo;
}
