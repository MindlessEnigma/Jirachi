var HID = require('node-hid')

function Controller(vid, pid) {
    this.device = new HID.HID(vid, pid);
    this.inputBuffer = null;

    this.device.on("data", function(data) {
        this.inputBuffer = data;
    })
}

Controller.prototype.readInputs = function() {
    return this.inputBuffer;
}