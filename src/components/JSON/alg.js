export const algorithms = [
    {
        "Q": "Code a loop which prints a right triangle with only 12 calls to itself",
        "A": `for (a = '#'; a.length \<\ 12; a += ' #')\n console.log(a);`
    },
    {
        "Q": "Write a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.",
        "A": `console.log( Array.apply(null, {length: 100}).map(function(val, i) {\n i++\n if (i % 15 == 0){return \"FizzBuzz\";}\n if (i % 3 == 0){return \"Fizz\";}\n if (i % 5 == 0){return \"Buzz\";}\n return i;\n })\n );`
    },
    {
        "Q": "Create a chessboard with \" \" (a space) for even and \"$\" for odd integers",
        "A": `let b = '';\n for (var a = 0; a < 8; a++) {\n for (var c = 0; c < 8; c++) {\n b += ((c + a) % 2 == 0) ? \" \" : \"$\";\n }\n b += \"\\n\"; }\n console.log(b);;`
    },
    {
        "Q": "Find the smallest integer in an Array",
        "A": `let arr = Array(8).fill().map(() => Math.round(Math.random() * 2500));\n console.log(Math.min.apply(Math, arr), arr)`
    },
    {
        "Q": "Create a recursion function called \"isEven,\" where the \"N\" returned one is odd and zero is even. For other numbers, its evenness is the same as N-2",
        "A": `function isEven(num) {\n num = Math.abs(num)\n if (num == 0)\n return true;\n else if (num == 1)\n  return false;\n else return isEven(num - 2 )\n }`
    },
    {
        "Q": "Write a function to reverse a string.",
        "A": `function reverseString() {\n const str = 'This is a sample string!';\n let newStr = '';\n for (i = str.length - 1; i >= 0; i--) {\n newStr += str[i];\n }\n console.log(newStr);\n }\n\n reverseString();`
    },
    {
        "Q": "Write a function to print the odd numbers from 1 to N.",
        "A": `console.log(\n Array.apply(null, {length: 15}).map(function(val, i) {\n i++;\n if (i % 2 == 0 ){return null;}\n return i;\n })\n );`
    },
    {
        "Q": "Find the largest integer value in an integer array",
        "A": `function scan() {\n const arr = Array(8).fill().map(() => Math.round(Math.random() * 2500));\n console.log('Largest int = ' + Math.max.apply(Math, arr), arr) }\n\n scan();`
    },
];