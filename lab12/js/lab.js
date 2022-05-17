/**
 * Author:    Shloak Sinha
 * Created:   05/16/2022
 *
 * School: UCSC
 * Class: Art101
 **/

// array for Hogwarts Houses

const houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];


// sortingHat function

function sortingHat(str) {
  mod = str.length % 4;

  // if (mod == 0) {
  //   return "Gryffindor";
  // } else if (mod == 1) {
  //   return "Ravenclaw";
  // } else if (mod == 2) {
  //   return "Slytherin";
  // } else {
  //   return "Hufflepuff";

  return houses[mod];
}

// button initialization
var button = document.getElementById("button");


// listener for the button that enables the click function
button.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);

  $('#Gryffindor').addClass("hidden");
  $('#Ravenclaw').addClass("hidden");
  $('#Slytherin').addClass("hidden");
  $('#Hufflepuff').addClass("hidden");

  // var newText =  "The Sorting Hat has sorted you into " + house;
  // document.getElementById('output').prepend(newText);

  $('#' + house).removeClass("hidden");
})
