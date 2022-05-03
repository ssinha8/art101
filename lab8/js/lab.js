/**
 * Author:    Shloak Sinha
 * Created:   05/03/2022
 *
 * School: UCSC
 * Class: Art101
 **/

// function that adds 5 to the numeric argument
 function addFive(x) {
   return x + 5;
 }

 //test function
 console.log("Output of function with 10 as input: ", addFive(10));
 console.log("Output of function with 3 as input: ", addFive(3));

 num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log("My number array: ", num);

 console.log("Test of adding five to the numbers in array: ", num.map(addFive));

 var result = num.map(function(x) {
   return x ** 2;
 });

 console.log("Squares of the array: ", result);
