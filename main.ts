function MovePlayer () {
    player.x += 1
    if (player.x > screen.width + player.width) {
        player.x = 0 - player.width
    }
    if (controller.A.isPressed()) {
        player.y += 1
    } else if (controller.B.isPressed()) {
        player.y -= 1;
    }
}

let player: Sprite = null
let numbers: number[] = []
let num = 10

numbers.push(7)
numbers.push(5)
numbers.push(14)
numbers.push(-3)

for(let i = 0; i < numbers.length; ++i)
{
    numbers[i] += 1
    console.log(numbers[i]);
}

player = sprites.create(img`
    . . . . . . . . . . . . . 3 . .
    3 . . . . . . . . . . . . 3 . .
    3 . . . . . . . . . . . 3 . . .
    3 . . . . . . . . . . . 3 . . .
    3 . . . . . . . . . . 3 . . . .
    3 . . . . . . . . . 3 . . . . .
    3 . . . . 3 . . . 3 3 . . . . .
    3 . . . 3 3 3 3 . 3 . . . . . .
    3 . . 3 3 3 3 3 3 3 . . . . . .
    3 . . . 3 3 3 3 3 3 . . . . . .
    3 . . . 3 3 3 3 3 3 . . . . . .
    3 3 3 3 3 3 3 3 3 3 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, 0)
if (num == 10) {
    console.log("Num is 10")
} else if (num > 10) {
    console.log("Num is greater than 10")
} else {
    console.log("Num is less than 10")
}
game.onUpdate(function () {
    MovePlayer()
})
