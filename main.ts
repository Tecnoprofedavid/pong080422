input.onButtonPressed(Button.A, function () {
    if (posicionpaleta > 0) {
        paleta1.move(-1)
        paleta2.move(-1)
        posicionpaleta += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (posicionpaleta < 3) {
        paleta1.move(1)
        paleta2.move(1)
        posicionpaleta += 1
    }
})
function moverpelota () {
    basic.pause(500)
    pelota.move(1)
    pelota.ifOnEdgeBounce()
    if (pelota.isTouching(paleta1) || pelota.isTouching(paleta2)) {
        pelota.change(LedSpriteProperty.Direction, randint(45, -45))
        puntos += 1
    } else {
        if (pelota.get(LedSpriteProperty.Y) == 4) {
            basic.clearScreen()
            basic.showIcon(IconNames.No)
            basic.showString("ptos")
            basic.showNumber(puntos)
        }
    }
}
let puntos = 0
let posicionpaleta = 0
let pelota: game.LedSprite = null
let paleta2: game.LedSprite = null
let paleta1: game.LedSprite = null
paleta1 = game.createSprite(2, 4)
paleta2 = game.createSprite(3, 4)
pelota = game.createSprite(2, 0)
posicionpaleta = 2
puntos = 0
pelota.turn(Direction.Right, 90)
basic.forever(function () {
    moverpelota()
})
