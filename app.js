 let a = 20;
 let b = 10;
 let c = 15; 
 //1
 console.log(a + b);
 //2
 console.log(a - b);
 //3
 console.log(a * b);
 //4
 console.log(a / b);
 //5
 const reqem = prompt("183954:");
if(reqem % 2 == 1) {
  console.log("The number is odd.");
}
else  {
  console.log("The number is even.");
  
}
 //6

const number = prompt("999:");
if(number % 2 == 1) {
  console.log("The number is even.");
}
else  {
  console.log("The number is odd.");
}
 //7

function test_prime(n) {

  
    if (n === 1) {
      return false;
    }

    else if (n === 2) {
      return true;
    } else {

      for (var x = 2; x < n; x++) {

        if (n % x === 0) {
          return false;
        }
      }
      return true;  
    }
  }
  
 
  console.log(test_prime(37));
  //8
  function findMaxUsingMathMax(a, b) {
    return Math.max(a, b);
  }
  console.log(Math.max(a, b));
  //9
  function findMinUsingMathMin(a, b) {
    return Math.max(a, b);
  }
  console.log(Math.min(a, b));
  //10
let hahaha = [1, 2, 3, 5, 4 ];
let sum = 0;
for (let i = 0; i < hahaha.length; i++ ) {
  sum += hahaha[i];
}

console.log(sum)
 //11
 function findAverage(arr) { 
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i]; 
  } 
  return sum / arr.length; 
} 
 
let numbers = [1, 2, 3, 4, 5]; 
let average = findAverage(numbers); 
console.log(average); 
 //12
 function findMedian(arr) {
  arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
      return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  } else {
      return arr[middleIndex];
  }
}
 //13
 /* I dont  knov   */ 
 //14
 let original = "Hello World";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log(reversed);
 //15


function checkPalindrome(string) {

 
  const len = string.length;


  for (let i = 0; i < len / 2; i++) {


      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
}


const string = prompt('String: ');


const value = checkPalindrome(string);

console.log(value);

 //16
 function convertToUpperCase(str) {
  return str.toUpperCase();
}

console.log(convertToUpperCase("hello"));
console.log(convertToUpperCase("Abdurauf"));
 //17
 let myString = "HeLLo WoRLD!";
let lowerCaseString = myString.toLowerCase();

console.log(lowerCaseString);
 //18
 const str = "dasvidos";

let result = str.charAt(0).toUpperCase() + str.slice(1);


console.log(result); 
 //19,20
 function separateLetters(str) {
  let vowels = "";
  let consonants = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if ("aeiou".includes(letter)) {
      vowels += letter;
    } else if (letter >= "a" && letter <= "z") {
      consonants += letter;
    }
  }
  return { vowels, consonants };
}

console.log(separateLetters("Ebelfez")); 
 //21,22
 function separateLetters(str) {
  let vowels = "";
  let consonants = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if ("aeiou".includes(letter)) {
      vowels += letter;
    } else if (letter >= "a" && letter <= "z") {
      consonants += letter;
    }
  }
  return { vowels, consonants };
}

console.log(separateLetters("Salamun Aleykum")); 
 //23
 function containsOnlyDigits(str) {
  return /^\d+$/.test(str);
}

console.log(containsOnlyDigits("123")); 
console.log(containsOnlyDigits("123abc"));
 //24
 function checkAlphabets(input) {
  for (const char of input) {
      if (!(char >= "a" && char <= "z") &&
          !(char >= "A" && char <= "Z")) {
          return false;
      }
  }
  return true;
}

const str1 = "Aslanov";
const str2 = "Abdurauf123";

console.log(checkAlphabets(str1));
console.log(checkAlphabets(str2));
 //25
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
 //26
 const num = 8;
const randomNameGenerator = num => {
   let res = '';
   for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
   };
   return res;
};
console.log(randomNameGenerator(num));
 //27
/*I don't know*/
 //28
const power_of_2 = n => !!n && (n & (n - 1)) == 0;

console.log(power_of_2(16));

console.log(power_of_2(18));

console.log(power_of_2(256));
 //29


 function isPerfectSquare(num) {
  if (num <= 0 || typeof num !== "number") {
      return false;
  }

  const sqrt = Math.sqrt(num);
  return Number.isInteger(sqrt);
}

const number1 = 16;
const number2 = 9;
const number3 = 15;

console.log(`${number1} is perfect square:
${isPerfectSquare(number1)}`);
console.log(`${number2} is perfect square:
${isPerfectSquare(number2)}`);
console.log(`${number3} is perfect square:
${isPerfectSquare(number3)}`);
 //30

 function fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  if (num === 1) {
      return num1;
  } else if (num === 2) {
      return num2;
  } else {
      for (let i = 3; i <= num; i++) {
          sum = num1 + num2;
          num1 = num2;
          num2 = sum;
      }
      return num2;
  }
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));
 //31
 
function myFunction(a, b) {
  let smaller = Math.min(a, b);
  let hcf = 1;

  for (let i = 1; i <= smaller; i++) {
      if (a % i === 0 && b % i === 0) {
          hcf = i;
      }
  }

  return hcf;
}

const num1 = 20;
const num2 = 12;

console.log("GCD of the giving numbers(20,12) is:", 
  myFunction(num1, num2));
  //32

const nums = parseInt(prompt('10: '));

const resutl = number.toString(2);

console.log('Binary:' + '  ' + result);
 //33

function binaryToDecimal(n)
{
    let numsl = n;
    let dec_value = 0;
 

    let base = 1;
 
    let temp = numsl;
    while (temp) {
        let last_digit = temp % 10;
        temp = Math.floor(temp / 10);
 
        dec_value += last_digit * base;
 
        base = base * 2;
    }
 
    return dec_value;
}

    let numsl = 10101001;
 
    console.log((binaryToDecimal(numsl) ));
 //34
 var numArray = [140000, 104, 99];
 numArray.sort(function(a, b) {
   return a - b;
 });
 
 console.log(numArray);
 //35
 var numArray = [140000, 104, 99];
 numArray.sort(function(a, b) {
   return a + b;
 });
 
 console.log(numArray);
 //36
function getUnique(arr){
    
  let uniqueArr = [];
  
  for(let i of arr) {
      if(uniqueArr.indexOf(i) === -1) {
          uniqueArr.push(i);
      }
  }
  console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

getUnique(array);
 //37
function mergeSortedArrayUsingConcat(array1, array2) { 
  let sortedArray = [], 
      Array1Index = 0, 
      Array2Index = 0; 
  while ( 
      Array1Index < array1.length && 
      Array2Index < array2.length 
  ) { 
      if ( 
          sortFunc( 
              array1[Array1Index], 
              array2[Array2Index] 
          ) > 0 
      ) { 
          sortedArray.push(array2[Array2Index++]); 
      } else { 
          sortedArray.push(array1[Array1Index++]); 
      } 
  } 
  if (Array2Index < array2.length) { 
      sortedArray = sortedArray.concat( 
          array2.slice(Array2Index) 
      ); 
  } else { 
      sortedArray = sortedArray.concat( 
          array1.slice(Array1Index) 
      ); 
  } 
  return sortedArray; 
} 
function sortFunc(a, b) { 
  return a - b; 
} 
console.log( 
  mergeSortedArrayUsingConcat( 
      [1, 2, 3, 5, 9], 
      [4, 6, 7, 8] 
  ) 
);
 //38
 function comp(arr1, arr2){
  // sort arrays
  const sortCb = (a, b) => a - b;
  const arr1Sort = arr1.sort(sortCb),
      arr2Sort = arr2.sort(sortCb);

  // compare length and then compare values
  if(arr1Sort.length !== arr2Sort.length) {
    return false;
  }
  for(let i = 0; i < arr1Sort.length; i++) {
    if(arr1Sort[i] ** 2 !== arr2Sort[i]) {
      return false;
    }
  }
  return true;
}

console.log(comp([1,2,3], [1,5,4]));
console.log(comp([5,4,1], [1,16,25]));
 //39
 
