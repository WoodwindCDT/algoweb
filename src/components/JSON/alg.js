export const algorithms = [
    {
        "T": "javascript",
        "Q": "Code a loop which prints a right triangle with only 12 calls to itself",
        "A": `for (a = '#'; a.length \<\ 12; a += ' #')
            console.log(a);`
    },
    {
        "T": "javascript",
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
        "T": "javascript",
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
        "T": "javascript",
        "Q": "Find the smallest integer in an Array",
        "A": `let arr = Array(8).fill().map(() => Math.round(Math.random() * 2500));
            console.log(Math.min.apply(Math, arr), arr)`
    },
    {
        "T": "javascript",
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
        "T": "javascript",
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
        "T": "javascript",
        "Q": "Write a function to print the odd numbers from 1 to N.",
        "A": `console.log(
            Array.apply(null, {length: 15}).map(function(val, i) {
                return i * 2 + 1;
            }));`
    },
    {   
        "T": "javascript",
        "Q": "Find the largest integer value in an integer array",
        "A": `function scan() {
            const arr = Array(8).fill().map(() => Math.round(Math.random() * 2500));
            console.log('Largest int = ' + Math.max.apply(Math, arr), arr) }
            scan();` 
    },
    {   
        "T": "java",
        "Q": "Write a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.",
        "A": `class Main {
            public static void main(String[] args) {
               for (int i = 1; i < 101; i++) {
                    if ((i % 15) == 0 )
                    System.out.println("FizzBuzz");
                    if((i % 3) == 0)
                    System.out.println("Fizz");
                    if((i % 5) == 0)
                    System.out.println("Buzz");
                    else System.out.println(i);
               }
            }
        }`
    },
    {   
        "T": "java",
        "Q": "Create a chessboard with \" \" (a space) for even and \"$\" for odd integers",
        "A": `class Main{
            public static void main(String[] args) {
               String b = "";
               for (int a = 0; a < 8; a++) {
                  for ( int c = 0; c < 8; c++) {
                     b += ((c + a) % 2 == 0) ? " " : "$";}
                     b +="\n";
               }
               System.out.println(b);
            }
        }`
    },
    {   
        "T": "java",
        "Q": "Reverse a String",
        "A": `class Main {
            public static void main(String[] args) {
               String a = "This is a sample string!";
               String b = "";
               for (int i = a.length() - 1; i >= 0; i--){
                  b += a.charAt(i);
               }
               System.out.println("This is the original String " + a);
               System.out.println("This is the backwards String " + b);
            }   
        }`
    }
];