input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 70)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 110)
})
input.onSound(DetectedSound.Loud, function () {
    if (mv == 0) {
        mv = 1
        pins.analogWritePin(AnalogPin.P0, 1023)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        mv = 0
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
})
let mv = 0
input.setSoundThreshold(SoundThreshold.Loud, 101)
pins.servoWritePin(AnalogPin.P1, 90)
basic.forever(function () {
	
})
