scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    game.over(false, effects.blizzard)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    haai.vy = -40
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    haai.ay = 80
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let haai: Sprite = null
game.showLongText("deze Engels game is bedoeld voor iedereen die Engels wil leren. ik zal in de groep 7 app iedere keer dat we Engels krijgen een nieuwe online zetten. Met spatie of de A kun je naar boven en dit soort uitleg weg halen", DialogLayout.Full)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(6)
haai = sprites.create(img`
    ..............fffcc.............
    ..............fbbddc............
    ...............fbbddc...........
    ccc............fcbbccf..........
    cbbcc.........ffccccccffffff....
    .cbbdc.....fffcbbbbbbbbbbbbbff..
    .fbbddc..ffcccbbbbcbcbbbbbbbbbff
    ..fbbdfffcccccbbbcbcbbffbbbbbcbf
    ..fcbbbcccccccbbbcbcb1ff1111bbbf
    ..fccbcccccccccbbbbbb11111111bf.
    .fcbbfffccccccccbbbb11cc33cccf..
    .fbbf...cbdbcccccbbb111c131cf...
    fbbf.....ccdddddfbbbc111c33f....
    fff........ccddfbbdbf1111ff.....
    .............cfbbdbfccccc.......
    ..............fffff.............
    `, SpriteKind.Player)
let projectile = sprites.createProjectileFromSprite(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, haai, -50, 0)
let projectile2 = sprites.createProjectileFromSide(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, -50, 0)
haai.setPosition(30, 42)
haai.setStayInScreen(false)
info.setLife(3)
