# Dot Notation, Methods and Properties

## Lesson Objectives

To Understand...

- Dot Notation
- Methods
- Properties

## Intro

### Dot Notation

In JavaScript, dot notation is a way of accessing and manipulating the properties and methods of an object. It involves using a dot (.) to separate the object from the property or method being accessed. Dot notation is commonly used to access and modify the properties of an object, as well as to call the methods associated with the object.

```js
// Declaring an object
const object = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
    occupation: "Software Developer",
    fullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

// dot notation 
console.log( object.firstName ) // "John", property
console.log( object.fullName() ) // "John Smith", method
//     methods have brackets^
```

[[see this]](https://www.w3schools.com/js/js_this.asp)

### Built-in methods and properties

#### Methods

A method is a `function` that is associated with an `object`. Methods can be used to perform actions or computations on the data contained within an `object`, and can be called by using dot notation to access the `method`. Methods can also take arguments as input, and can return values as output. Some built-in methods in JavaScript include `toString()`, `parseInt()`, and `parseFloat()`.

```js
// declare some variables to play with
const someNumber = 23
const someString = "25.9"
const someOtherString = "wow"


// convert someNumber into a string
const someNumberString = someNumber.toString() 
console.log(someNumberString) // "23"

// parse an Integer number from someString
const someStringInt = someString.parseInt() 
console.log(someStringInt) // 25

// parse a Float number from someString
const someStringFloat = someString.parseFloat() 
console.log(someStringFloat) // 25.9

// convert all the characters in someOtherString to Upper Case
const upperCaseWow = someOtherString.toUpperCase() 
console.log(upperCaseWow) // "WOW"
```

#### Properties

In JavaScript, a `property` is a `value` associated with an `object`. `Properties` can be thought of as variables that are associated with an object, and describe the state or characteristics of that objects' Properties can be accessed and modified using dot notation, and can be of any data type, including strings, numbers, arrays, and even other objects. Some common `properties` in JavaScript include `length` (for arrays and strings), `innerHTML` (for HTML elements), and `className` (for CSS classes).

```js
// define a string
const myString = "wow"

// Get the length of a string and assign it to another variable
const myStringLength = myString.length 
// result = 3

// define an array
const colors = [ "Red", "Green", "Blue", "Orange", "Purple", "Yellow" ]

// Get the length of the array and assign it to another variable
const colorsLength = colors.length 
// result = 6

// Do arrhythmic with the value
const tooManyColors = colorsLength + 1 
// result = 7
```

## Resources

### W3 Schools

- [JS Objects](https://www.w3schools.com/js/js_objects.asp)
- [Properties](https://www.w3schools.com/js/js_object_properties.asp)
- [Methods](https://www.w3schools.com/js/js_object_methods.asp)

### MDN Docs

- [Property Accessors (dot notation and [...])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Property](https://developer.mozilla.org/en-US/docs/Glossary/Property/JavaScript)
- [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
