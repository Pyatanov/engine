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
let mv = 0
input.setSoundThreshold(SoundThreshold.Loud, 101)
basic.forever(function () {
	
})
