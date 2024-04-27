var HID = require('node-hid')

console.log("render started")


async function createController() {
  var controller = await HID.HIDAsync.open(1356, 3302);

  controller.on('data', function(data) {
    console.log(data);
    document.getElementById("deviceData").textContent = data
  })
}

document.getElementById('starter').addEventListener('click', createController)