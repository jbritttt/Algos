// given an array of primitive types, i.e. int, string, number, booleans and numbers
// Write a function diffTypes that will return an object (see example below)
// => { string: 1, array: 1, boolean: 2, object: 1, number: 1 }

function diffTypes(arr) {
  let str = 0;
  let array = 0;
  let bool = 0;
  let obj = 0;
  let num = 0;
  arr.map((type) => {
    switch (typeof type) {
      case "string":
        str++;
        break;
      case "array":
        array++;
        break;
      case "boolean":
        bool++;
        break;
      case "object":
        obj++;
        break;
      default:
        num++;
        break;
    }
  });
  return { number: num, string: str, boolean: bool, object: obj, array: array };
}

const ar = [
  1,
  "str",
  false,
  { name: "Romeo", age: 77 },
  ["a", "e", "i", "o", "u"],
  true,
];
console.log(diffTypes(ar));
// => { string: 1, array: 1, boolean: 2, object: 1, number: 1 }





// Time to combine all the efforts made in starter and array.
// Complete the info function that takes in an array
// and returns information about the array

// Complete the function below
const info = (arr) => {
  const length = arr.length;
  const sum = arr.reduce((a, b) => a + b);
  const avg = Math.floor(sum / length);
  let even = 0;
  let odd = 0;
  arr.map((num) => (num % 2 == 0 ? even++ : odd++));

  return {
    array: arr,
    elements: length,
    avg: avg,
    sum: sum,
    howManyEvenNumbers: even,
    howManyOddNumbers: odd,
  };
};

console.log(info([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// When passed the array above the result should like it does below

/*{
    array: [
      1, 2, 3, 4, 5,
      6, 7, 8, 9
    ],
    elements: 9,
    avg: 5,
    sum: 45,
    howManyEvenNumbers: 4,
    howManyOddNumbers: 5
  }
  
      */



// complete the avg function that takes in an array
// and returns (not console.log) the average (2 rounded digits)

// Complete the function below
const avg = (arr) => {
  const total = arr.reduce((a, b) => a + b);
  const result = (total / arr.length).toFixed(2);
  return result;
};

ar = [7, 19, 33, -5, -99, 6, 12];
console.log(avg(ar)); // => -3.86 (number)






// complete the sum function that takes in an array
// and returns (not console.log) the sum of its elements

//Complete the function below
const sum = (arr) => {
  return arr.reduce((a, b) => a + b);
};

ar = [7, 19, 33, -5, -99, 6, 12];
console.log(sum(ar)); //=> -27






// complete the function capit2 that takes in a word and returns an object returning the original string and the capitalised string

// Complete the function below
const capit2 = (word) => {
  const changeToUpper = word.slice(0, 1).toUpperCase();
  const changeToLower = word.slice(1).toLowerCase();
  const newWord = changeToUpper + changeToLower;

  return { original: word, capitalised: newWord };
};

console.log(capit2("hELlo"));
// { original: 'hELLo', capitalised: 'Hello' }






// complete the function swap2 that takes in a word and returns an object returning the original string and the swpacased string

// Complete the function below

const swap2 = (word) => {
  const stringToArray = word.split("");
  const newString = stringToArray.map((char) =>
    char == char.toUpperCase()
      ? (char = char.toLowerCase())
      : (char = char.toUpperCase())
  );
  const result = newString.join("");

  return { original: word, swapcased: result };
};
console.log(swap2("hELLo"));
//{ original: 'hELLo', swapcased: 'HellO' }






// complete the function snakeCase that takes in a word and returns a snake_cased string
// the Capital letter will be downcased and preceded by and understore

const snakeCase = (str) => {
  const stringToArray = str.split("");
  let getIndexOf = stringToArray.findIndex(
    (char) => char == char.toUpperCase()
  );
  stringToArray.splice(getIndexOf, 0, "_");
  const arrayToString = stringToArray.join("");
  const result = arrayToString.replace(
    stringToArray[(getIndexOf += 1)],
    stringToArray[getIndexOf].toLowerCase()
  );

  return result;
};

console.log(snakeCase("snakeCase")); // => snake_case
console.log(snakeCase("aVariable")); // => a_variable






// complete the function camelCase that takes in a word and returns a camelCased string
// the underscore will be removed and the letter that used to follow the understore will be capitalised

// Complete the function below
const camelCase = (str) => {
  const underScoreIndex = str.indexOf("_") + 1;
  const changeChar = str.replace(
    str[underScoreIndex],
    str[underScoreIndex].toUpperCase()
  );
  const result = changeChar.replace("_", "");

  return result;
};

console.log(camelCase("snake_case")); // => snakeCase
console.log(camelCase("a_variable")); // => aVariable






// complete the function swapcase that takes in a word and returns a swapcased string
// the lowercase letters will be uppercased and vice versa

// Complete the function below
const swapcase = (word) => {
  const stringToArray = word.split("");
  const newString = stringToArray.map((char) =>
    char == char.toUpperCase()
      ? (char = char.toLowerCase())
      : (char = char.toUpperCase())
  );
  const new_word = newString.join("");
  return new_word;
};

console.log(swapcase("hELLo")); // "HellO"
console.log(swapcase("betH")); // "BETh"
console.log(swapcase("jaGaN")); // "JAgAn"
console.log(swapcase("sergI")); // "SERGi"






//complete the function capitalize that takes in a word and returns a capitalised string

// Complete the function below
const capitalize = (word) => {
  const cutFirst = word.slice(0, 1).toUpperCase();
  const cutRest = word.slice(1).toLowerCase();
  const capitalisedWord = cutFirst + cutRest;
  // You will have to define the variable
  return capitalisedWord;
};

console.log(capitalize("hELLo")); // => Hello
console.log(capitalize("betH")); // => Beth
console.log(capitalize("jaGaN")); // => Jagan
console.log(capitalize("sergI")); // => Sergi
