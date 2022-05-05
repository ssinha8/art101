/**
 * Author:    Shloak Sinha
 * Created:   05/04/2022
 *
 * School: UCSC
 * Class: Art101
 **/

// using getElementById() to get the output id from the index file
 let outputEl = document.getElementById('output');

 // creating a new element assigning it to new1El and changing its HTML
 let new1El = document.createElement('p');
 new1El.innerHTML = 'Never gonna give you up!';

 // creating another new element and assigning it to new2El and changing its HTML
 let new2El = document.createElement('p');
 new2El.innerHTML = 'Never gonna let you down!';

 // appending new1El and new2El to outputEl
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

 //editing the css using JS
 document.getElementById('challenge').style.color = '#ECEBE4';
 document.getElementById('problems').style.color = '#ECEBE4';
 document.getElementById('results').style.color = '#ECEBE4';
