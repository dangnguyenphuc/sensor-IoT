radio.onReceivedValue(function (name, value) {
    parseName = name.split(":")
    if (parseName.length == 3) {
        _radio_ID = parseName[0]
        _sensor_ID = parseName[1]
        if (_radio_ID == RADIO_ID && _sensor_ID == SENSOR_ID) {
            showLedOnCmd(value)
        }
    }
})
function showLedOnCmd (cmd: number) {
    if (cmd == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
    if (cmd == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
    if (cmd == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
    if (cmd == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (cmd == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (cmd == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (cmd == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (cmd == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
}
let val = 0
let msg = ""
let flag = false
let _sensor_ID = ""
let _radio_ID = ""
let parseName: string[] = []
let SENSOR_ID = ""
let RADIO_ID = ""
RADIO_ID = "9"
SENSOR_ID = control.deviceName()
basic.showLeds(`
    # # . . .
    # # . . .
    # # . . .
    . . . . .
    . . . . .
    `)
radio.setGroup(68)
led.enable(true)
let count = control.millis()
basic.forever(function () {
    if (control.millis() - count >= 5000 && !(flag)) {
        msg = "" + _sensor_ID + ":" + "TE"
        val = input.temperature()
        radio.sendValue(msg, val)
        flag = true
    }
    if (control.millis() - count >= 10000) {
        msg = "" + _sensor_ID + ":" + "LI"
        val = input.lightLevel()
        radio.sendValue(msg, val)
        flag = false
        count = control.millis()
    }
})
