export const algorithms = [
    {
        "Q": "Code a loop which prints a right triangle with only 12 calls to itself",
        "A": `for (a = '#'; a.length \<\ 12; a += ' #')
            console.log(a);`
    },
    {
        "Q": "Write a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.",
        "A": `console.log( Array.apply(null, {length: 100}).map(function(val, i) {
            i++
            if (i % 15 == 0){return \"FizzBuzz\";}
            if (i % 3 == 0){return \"Fizz\";}
            if (i % 5 == 0){return \"Buzz\";}
            return i;
        }));`
    },
    {
        "Q": "Create a chessboard with \" \" (a space) for even and \"$\" for odd integers",
        "A": `let b = '';
        for (var a = 0; a < 8; a++) {
            for (var c = 0; c < 8; c++) {
                b += ((c + a) % 2 == 0) ? \" \" : \"$\";
            }
            b += \"\\n\";}
            console.log(b);`
    },
    {
        "Q": "Find the smallest integer in an Array",
        "A": `let arr = Array(8).fill().map(() => Math.round(Math.random() * 2500));
            console.log(Math.min.apply(Math, arr), arr)`
    },
    {
        "Q": "Create a recursion function called \"isEven,\" where the \"N\" returned one is odd and zero is even. For other numbers, its evenness is the same as N-2",
        "A": `function isEven(num) {
                num = Math.abs(num)
                if (num == 0)
                return true;
                else if (num == 1)
                return false;
                else return isEven(num - 2 )
            }`
    },
    {
        "Q": "Write a function to reverse a string.",
        "A": `function reverseString() {
                const str = 'This is a sample string!';
                let newStr = '';
                for (i = str.length - 1; i >= 0; i--) {
                   newStr += str[i];
                    }
                console.log(newStr);
                }
                reverseString();`
    },
    {
        "Q": "Write a function to print the odd numbers from 1 to N.",
        "A": `console.log(
            Array.apply(null, {length: 15}).map(function(val, i) {
                i++;
                if (i % 2 == 0 ){return null;}
                return i;
            }));`
    },
    {
        "Q": "Find the largest integer value in an integer array",
        "A": `function scan() {
            const arr = Array(8).fill().map(() => Math.round(Math.random() * 2500));
            console.log('Largest int = ' + Math.max.apply(Math, arr), arr) }
            scan();` 
    },
];