/**
 * Author:    Shloak Sinha
 * Created:   04/25/2022
 *
 * School: UCSC
 * Class: Art101
 **/


// declaring variables
 myTransport = ["my car", "uber", "bus", "walking"];

 myMainRide = {
   make: "Volvo",
   model: "XC60",
   color: "Midnight Blue",
   year: 2015,
   ownIt: true
 };

 // Output

 document.writeln("Kinds of transport I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
