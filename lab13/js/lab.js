/**
 * Author:    Shloak Sinha
 * Created:   05/18/2022
 *
 * School: UCSC
 * Class: Art101
 **/

/* FizzBuzz function that prints Fizz if number is a multiple of 3, Buzz if it
 is a multiple of 5, Boom if it is  a multiple of 7, or a combination if multiple
 factors exist */

function FizzBuzz() {

  var outputStr = '';
  $("#output").append("<div class = row></div>");

  for (var num = 1; num < 201; num++) {

    outputStr = '';

    if (num % 25 == 1) {
      $(".row").append("<div class = column>");
    }
    if (num % 3 == 0) {
      outputStr += "Fizz";
    }
    if (num % 5 == 0) {
      outputStr += "Buzz";
    }
    if (num % 7 == 0) {
      outputStr += "Boom";
    }

    if (outputStr != "") {
      $(".row").append("<p1>" + num.toString() + " - " + outputStr + "!</p1><br>");
    } else {
      $(".row").append("<p1>" + num.toString() + "</p1><br>");
    }
    if (num % 25 == 0) {
      $(".row").append("</div>");
    }
  }
}

FizzBuzz();
