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
        b += ((c + a) % 2 == 0) ? \" \" : \"$\"; }
        b += \"\\n\"; }
        console.log(b);`
    },
    {
        "T": "javascript",
        "Q": "Find the smallest integer in an Array",
        "A": `let arr = Array(8).fill().map(() => Math.round(Math.random() * 2500));
console.log(Math.min.apply(Math, arr), arr);`
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
            else return isEven(num - 2);
        } isEven(10);`
    },
    {
        "T": "javascript",
        "Q": "Write a function to reverse a string. Function should be called \"reverseString\".",
        "A": `function reverseString() {
const str = 'This is a sample string!';
let newStr = '';
    for (i = str.length - 1; i >= 0; i--) {
            newStr += str[i]; 
        }
        console.log(newStr);
            } reverseString();`
    },
    {
        "T": "javascript",
        "Q": "Write a function to print the odd numbers from 1 to N.",
        "A": `console.log( Array.apply(null, {length: 15}).map(function(val, i) {
        return i * 2 + 1; }));`
    },
    {   
        "T": "javascript",
        "Q": "Find the largest integer value in an integer array",
        "A": `function scan() { const arr = Array(8).fill().map(() => Math.round(Math.random() * 2500));
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
    // {   
    //     "T": "java",
    //     "Q": "Create a chessboard with \" \" (a space) for even and \"$\" for odd integers",
    //     "A": `class Main{
    //         public static void main(String[] args) {
    //            String b = "";
    //            for (int a = 0; a < 8; a++) {
    //               for ( int c = 0; c < 8; c++) {
    //                  b += ((c + a) % 2 == 0) ? " " : "$";}
    //                  b +="\n";
    //            }
    //            System.out.println(b);
    //         }
    //     }`
    // },
    // {   
    //     "T": "java",
    //     "Q": "Reverse a String",
    //     "A": `class Main {
    //         public static void main(String[] args) {
    //            String a = "This is a sample string!";
    //            String b = "";
    //            for (int i = a.length() - 1; i >= 0; i--){
    //               b += a.charAt(i);
    //            }
    //            System.out.println("This is the original String " + a);
    //            System.out.println("This is the backwards String " + b);
    //         }   
    //     }`
    // },
    // {   
    //     "T": "java",
    //     "Q": "Print JAVA line by line as a symbol",
    //     "A": `public class Main {
    //         public static void main(String[] args) {
    //            // String var s as empty space
    //            String s = " ";
    //            // First Line
    //            System.out.println(String.format("%0" + 6 + "d", 0).replace("0", s) + "J" +
    //            String.format("%0" + 7 + "d", 0).replace("0", s) + "A" +
    //            String.format("%0" + 7 + "d", 0).replace("0", s) + "V" +
    //            String.format("%0" + 7 + "d", 0).replace("0", s) + "V" +
    //            String.format("%0" + 7 + "d", 0).replace("0", s) + "A");
    //            // Second Line
    //            System.out.println(String.format("%0" + 6 + "d", 0).replace("0", s) + "J" +
    //            String.format("%0" + 6 + "d", 0).replace("0", s) + "A " + "A" +
    //            String.format("%0" + 7 + "d", 0).replace("0", s) + "V     " + "V" +
    //            String.format("%0" + 7 + "d", 0).replace("0", s) + "A " + "A");
    //            // Third Line
    //            System.out.println(String.format("%0" + 1 + "d", 0).replace("0", s)+ "J    " + "J" +
    //            String.format("%0" + 5 + "d", 0).replace("0", s) + "AAAAA" +
    //            String.format("%0" + 7 + "d", 0).replace("0", s) + "V   " + "V" +
    //            String.format("%0" + 7 + "d", 0).replace("0", s) + "AAAAA");
    //            // Fourth Line
    //            System.out.print(String.format("%0" + 2 + "d", 0).replace("0", s) + "J  " + "J" +
    //            String.format("%0" + 5 + "d", 0).replace("0", s) + "A     " + "A" +
    //            String.format("%0" + 8 + "d", 0).replace("0", s) + "V" +
    //            String.format("%0" + 8 + "d", 0).replace("0", s) + "A     " + "A");
    //         }
    //     }`
    // },
    // {
    //     "T": "java",
    //     "Q": "Write a program to calculate population growth after 5 years",
    //     "A": `public class Main {
    //         public static void main(String[] args) {
    //            // Data type double for total population (double for division) 
    //            double t = 312032486;
    //            // Data type integer for s = Seconds in a day = 86,400
    //            int s = 86400;
    //            // Data type integer for a = Average
    //            double a = 0;
    //            // Created data type double for s = Seconds divided by births = b, deaths = d, and immigrants = m
    //            double b = s/7;
    //            double d = s/13;
    //            double m = s/45;
               
    //            // For loop to iterate t plus and equal to b + m minus total deaths * 365 until i <= 5
    //            for (int i = 1; i <= 5; i++) {
    //              t += (((b+m) - d) * 365);
    //              a += ((((b+m) - d) * 365) / 5);
    //              System.out.println("Population after year " + i + " = " + Math.round(t));
    //            }
               
    //            System.out.print("----------------------------------------- \n");
    //            System.out.print("Original Population = 312032486 \n" +
    //            "After 5 years the population = " + Math.round(t) + "\n" +
    //            "Difference after 5 years = " +  (Math.round(t) - 312032486)  + "\n");
    //            System.out.print("Average difference each year = " + Math.round(a));
    //         }
    //      }`
    // }
];