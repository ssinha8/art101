/**
 * Author:    Shloak Sinha
 * Created:   04/27/2022
 *
 * School: UCSC
 * Class: Art101
 **/


// sort - function that sorts letters of a name

function sortName() {

  // take in user input
  let userName = window.prompt("Enter your name");

  let nameSorted = userName.toLower().split("").sort().join("");
  return nameSorted;
}


// output
document.writeln("Your sorted name: ", sortName(), "</br>");
