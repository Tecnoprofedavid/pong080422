input.onButtonPressed(Button.A, function () {
    if (paleta1.get(LedSpriteProperty.X) > 0) {
        paleta1.move(-1)
        paleta2.move(-1)
    }
})
input.onButtonPressed(Button.AB, function () {
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
    if (pelota.isTouching(paleta1) || pelota.isTouching(paleta2)) {
        pelota.change(LedSpriteProperty.Direction, 0 + randint(45, -45))
        game.addScore(1)
    }
    if (pelota.get(LedSpriteProperty.Y) == 4 && !(pelota.isTouching(paleta1) || pelota.isTouching(paleta2))) {
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        game.removeLife(1)
    }
}
let pelota: game.LedSprite = null
let paleta2: game.LedSprite = null
let paleta1: game.LedSprite = null
paleta1 = game.createSprite(2, 4)
paleta2 = game.createSprite(3, 4)
pelota = game.createSprite(2, 0)
game.setLife(3)
game.setScore(0)
pelota.change(LedSpriteProperty.Direction, 180 + randint(45, -45))
basic.forever(function () {
    moverpelota()
    if (0 < 1) {
    	
    }
})
