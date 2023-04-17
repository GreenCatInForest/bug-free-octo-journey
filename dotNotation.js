// Escaping Characters
// we escape characters because sometimes
// character break our JS, we can escape
// characters with a backslash (\)
const myString = "Hi, I'm a string"
const myOtherString = 'My friend said "They saw bigfoot"'

const templateBenefit = `My friend didn't see "bigfoot"`

// dot notation
const player = {
    name: 'Link',
    hearts: 3,
    equipment: ['Sword', 'Shield'],
    level: 99,
    xp: 123,
}

// console.log(player)

// Assign a new value
player.name = player.name.toLowerCase()

// console.log(player.name.toUpperCase())
// console.log(player.name.toLowerCase())
// console.log(player.name.replace('L', 'S'))
// console.log(player.name)
// console.log(player)

// console.log(player.hearts.toString())
// console.log(player.level)
// console.log(player.xp)
// console.log(player['xp'])

let neededKey = 'level'
// getting the string to fetch a key from the object
console.log(player[neededKey])

// fetch me 5 examples of built in methods
