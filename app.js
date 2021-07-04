// 1.) Given this function: 
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}
  
// Refactor it to use the rest operator & an arrow function:
// My attempt; not sure where the rest operator goes, threw it in with the arguments. 
filterOutOdds = () => {
    const nums = Array.prototype.slice.call(...arguments);
    return nums.filter((num) => num % 2 === 0);
}
// Solution:
// Oh. That's where it went. This makes more sense. 
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

// 2.) findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3, 1) // 1

// My attempt. Shamelessly copying the above example. 
const findMin = (...args) => Math.min(...args)

// Solution. Peeked just to see how they achieved the 'min' part, I was starting to use 'reduce' and figured there was a simpler way. 
const findMin = (...args) => Math.min(...args)


// 3.) mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }) // {a:1, b:2, c:3, d:4}

// My attempt. 
const myMergeObjects = (obj, obj2) => ({ ...obj, obj2 });

// Solution:
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// 4.) doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4) // [2, 20, 8]

//My attempt. Parens city. 
const doubleAndReturnArgs = (arr, ...args) => ([...arr, (2(...args))])

// Solution. 
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

// 5.) Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
//Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) =>  {
    const newObject = { ...obj };
    newObject[key] = val;
    return newObject;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}