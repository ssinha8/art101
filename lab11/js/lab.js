/**
 * Author:    Shloak Sinha
 * Created:   05/11/2022
 *
 * School: UCSC
 * Class: Art101
 **/

// declaring 3 buttons that go into the challenge, problems, and result section

$("#challenge").append(
  "<button class = 'blue one'>Blue Button</button>"
);

$("#problems").append(
  "<button class = 'red two'>Red Button</button>"
);

$("#results").append(
  "<button class = 'green three'>Green Button</button>"
);


/* creating click events for buttons that toggle the 'special' class for
 the section the button is in */

$("button.blue").click(function(){
  $("#challenge").toggleClass("special");
  $("button.two").toggleClass("blue");
  $("button.two").toggleClass("red");
  checkSpecial();
});

$("button.red").click(function(){
  $("#problems").toggleClass("special");
  $("button.three").toggleClass("red");
  $("button.three").toggleClass("green");
  checkSpecial();
});

$("button.green").click(function(){
  $("#results").toggleClass("special");
  $("button.one").toggleClass("green");
  $("button.one").toggleClass("blue");
  checkSpecial();
});

function checkSpecial() {
  if ($("#challenge").hasClass("special") || $("#problems").hasClass("special") || $("#results").hasClass("special")) {
    $("#output").removeClass("hidden");
  } else {
    $("#output").addClass("hidden");
  }
}
