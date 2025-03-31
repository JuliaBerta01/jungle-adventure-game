let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
controller.moveSprite(mySprite, 100, 100)
mySprite = sprites.create(assets.image`chico`, SpriteKind.Player)
story.cancelSpriteMovement(mySprite)
