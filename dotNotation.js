// Escaping Characters
// we escape characters because sometimes
// character break our JS, we can escape
// characters with a backslash (\)
const myString = "Hi, I'm a string";
const myOtherString = 'My friend said "They saw bigfoot"';

const templateBenefit = `My friend didn't see "bigfoot"`;

// dot notation
const player = {
  name: "Link",
  hearts: 3,
  equipment: ["Sword", "Shield"],
  level: 99,
  xp: 123,
};

// console.log(player)

// Assign a new value
//player.name = player.name.toLowerCase();

// console.log(player.name.toUpperCase())
// console.log(player.name.toLowerCase())
// console.log(player.name.replace('L', 'S'))
// console.log(player.name)
// console.log(player)

// console.log(player.hearts.toString())
// console.log(player.level)
// console.log(player.xp)
// console.log(player['xp'])

//let neededKey = "level";
// getting the string to fetch a key from the object
//console.log(player[neededKey]);

// fetch me 5 examples of built in methods

//to run in terminal js - node dotNotation.js

//string methods

//1. .toLowerCase ()
let name2 = player.name.toLowerCase();
console.log(name2);
//link

//2. .toUpperCase()
let name3 = player.name.toUpperCase();
console.log(name3);
//LINK

//3. .concat()
//let nameEquipment = `${player.name.concat(player.equipment)}`;
//console.log(nameEquipment);
let nameEquipment = player.name.concat(`${player.equipment}`);
console.log(nameEquipment);

//4. .trim()
let nameWithSpaces = "   Link   ";
console.log(nameWithSpaces.trim());

//5. .trimStart()
player.nameWithSpacesT = "   Link   ";
console.log(player.nameWithSpacesT.trimStart());

//6. .trimEnd()
player.nameWithSpacesTe = "   Link   ";
console.log(player.nameWithSpacesTe.trimEnd());

//7. .length
console.log(player.name.length);
