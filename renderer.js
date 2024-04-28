var controller = require('./controller');

console.log("render started")
controller.createController(1356, 3302);

function updateInputs() {
  controller.readInputs()
}

document.getElementById('starter').addEventListener('click', updateInputs)