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

///////////////////////////////////////////////
// Math Object
// Built-In Math object that has many different methods and properties

const myFloatNumber = 15.5

const PI = Math.PI

const myIntNumber = Math.floor(myFloatNumber)
const myOtherIntNumber = Math.ceil(myFloatNumber)
console.log(myIntNumber)
console.log(myOtherIntNumber)
console.log(PI)


// document.getElementById (The DOM, not covered yet)
// const navBar = document.getElementById("mainNav")
// console.log(navBar.textContent)

///////////////////////////////////////////////
// Array.splice
// delete items from an array and return the deleted items
console.log("splice example")
//                0        1       2        3         4
const colors = ["red", "green", "blue", "orange", "yellow"]
const newColors = colors.splice(1,3)
console.log(colors)
console.log(newColors)

///////////////////////////////////////////////
// pop method
// pop the last item off the list
console.log("pop example")
const colorsArr = ["red", "green", "blue", "orange", "yellow"] 
console.log(colorsArr)

colorsArr.pop()

console.log(colorsArr)

///////////////////////////////////////////////
// Array.join()
// join all the items in a list with a character we specify (" & ")
// const colorsArr = ["red", "green", "blue", "orange", "yellow"] 
console.log("join example")
const sentence = colorsArr.join(' & ')
console.log(sentence)


///////////////////////////////////////////////
// Array.shift()
// shift the first item off the list
// const colorsArr = ["red", "green", "blue", "orange", "yellow"] 
console.log("shift example")
console.log(colorsArr)
colorsArr.shift()
console.log(colorsArr)

///////////////////////////////////////////////
// Array.push()
// push a new item to the list
// const colorsArr = ["red", "green", "blue", "orange", "yellow"] 
console.log("push example")
console.log(colorsArr)
colorsArr.push("purple")
console.log(colorsArr)
