pins.onPulsed(DigitalPin.P15, PulseValue.High, function () {
    radio.sendValue("B3", 1)
})
pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
    radio.sendValue("Z", 1)
})
pins.onPulsed(DigitalPin.P16, PulseValue.Low, function () {
    radio.sendValue("B4", 0)
})
pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
    radio.sendValue("B2", 1)
})
pins.onPulsed(DigitalPin.P13, PulseValue.Low, function () {
    radio.sendValue("B1", 0)
})
pins.onPulsed(DigitalPin.P13, PulseValue.High, function () {
    radio.sendValue("B1", 1)
})
pins.onPulsed(DigitalPin.P14, PulseValue.Low, function () {
    radio.sendValue("B2", 0)
})
pins.onPulsed(DigitalPin.P15, PulseValue.Low, function () {
    radio.sendValue("B3", 0)
})
pins.onPulsed(DigitalPin.P8, PulseValue.Low, function () {
    radio.sendValue("Z", 0)
})
pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    radio.sendValue("B4", -1)
})
let X = 0
let Y = 0
radio.setGroup(1)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    Y = Math.map(pins.analogReadPin(AnalogPin.P1), 1, 1023, 0, 180)
    X = Math.map(pins.analogReadPin(AnalogPin.P2), 1, 1023, 0, 180)
    radio.sendValue("Y", Y)
    radio.sendValue("X", X)
    basic.pause(40)
})
