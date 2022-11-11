input.onButtonPressed(Button.A, function () {
    radio.sendString("Marco")
    music.playTone(247, music.beat(BeatFraction.Whole))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Polo")
    music.playTone(523, music.beat(BeatFraction.Whole))
})
radio.setGroup(1)
