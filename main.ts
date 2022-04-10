input.onButtonPressed(Button.A, function () {
    if (paleta1.get(LedSpriteProperty.X) > 0) {
        paleta1.move(-1)
        paleta2.move(-1)
    }
})
function posición_inicial () {
    paleta1 = game.createSprite(2, 3)
    paleta2 = game.createSprite(3, 3)
    pelota = game.createSprite(2, 0)
    pelota.change(LedSpriteProperty.Direction, 270 + randint(45, -45))
}
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallDiamond)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (paleta1.get(LedSpriteProperty.X) < 3) {
        paleta1.move(1)
        paleta2.move(1)
    }
})
function moverpelota () {
    basic.pause(400)
    pelota.move(1)
    pelota.ifOnEdgeBounce()
    if (pelota.isTouching(paleta1)) {
        pelota.change(LedSpriteProperty.Direction, 180 + randint(0, 45))
        Puntos += 1
    }
    if (pelota.isTouching(paleta2)) {
        pelota.change(LedSpriteProperty.Direction, 180 + randint(-45, 0))
        Puntos += 1
    }
    if (pelota.get(LedSpriteProperty.Y) > 3) {
        basic.pause(500)
        Vidas += -1
        basic.showIcon(IconNames.Triangle)
        pelota.delete()
        paleta1.delete()
        paleta2.delete()
        posición_inicial()
    }
}
let pelota: game.LedSprite = null
let paleta2: game.LedSprite = null
let paleta1: game.LedSprite = null
let Vidas = 3
let Puntos = 0
posición_inicial()
basic.forever(function () {
    moverpelota()
    if (Vidas < 1) {
        pelota.delete()
        paleta1.delete()
        paleta2.delete()
        basic.showIcon(IconNames.Chessboard)
        basic.showString("Game over")
        basic.showString("Puntos")
        for (let index = 0; index < 2; index++) {
            basic.showString("" + (Puntos))
        }
    }
})
