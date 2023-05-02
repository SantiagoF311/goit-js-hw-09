
const Btn = document.querySelectorAll ('button')
const BtnStart = Btn[0];
const BtnStop = Btn[1];

var interval;

function start() {
  interval = setInterval(function() {
    var color = generarColorAleatorio();
    document.body.style.backgroundColor = color;
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function generarColorAleatorio() {
  var letras = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

BtnStart.addEventListener('click', start);
BtnStop.addEventListener('click', stop)