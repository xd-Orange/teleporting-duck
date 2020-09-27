input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("DUCK")
})
radio.onReceivedStringDeprecated(function (receivedString) {
    basic.showIcon(IconNames.Duck)
})
radio.setGroup(23)
