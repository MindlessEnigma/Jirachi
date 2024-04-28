var HID = require('node-hid');

var device = null;
var inputBuffer = null;

function createController(vid, pid) {
    device = new HID.HID(vid, pid);

    device.on("data", function(data) {
        inputBuffer = parseInput(data);
    })
}

function readInputs() {
    console.log("reading inputs")
    console.log(inputBuffer)
    return inputBuffer;
}

function parseInput(input) {
    //TODO: Parse dualsense input
    return input;
}

module.exports = {
    createController,
    readInputs
}