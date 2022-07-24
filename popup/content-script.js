"use strict"
let isRunning = false

function changeProductiveMode() {
  let command = isRunning ? "stop" : "run"
  isRunning = !isRunning
  browser.runtime.sendMessage({ command })
  changeTextContent()
}

function changeTextContent() {
  if (isRunning) {
    document.querySelector("#register").textContent = "HORA DO STOP"
  } else {
    document.querySelector("#register").textContent = "HORA DE RENDER"
  }
}

document
  .querySelector("#register")
  .addEventListener("click", changeProductiveMode)
