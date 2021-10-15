def on_up_pressed():
    animation.run_image_animation(mySprite, assets.animation("""
        up walk
    """), 100, True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_down_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_left_pressed():
    animation.run_image_animation(mySprite, assets.animation("""
        left walk
    """), 100, True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_pressed():
    animation.run_image_animation(mySprite,
        assets.animation("""
            right walk
        """),
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_up_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_down_pressed():
    animation.run_image_animation(mySprite, assets.animation("""
        walk down
    """), 100, True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

mySprite: Sprite = None
tiles.set_tilemap(tilemap("""
    hub
"""))
mySprite = sprites.create(assets.image("""
    player
"""), SpriteKind.player)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)