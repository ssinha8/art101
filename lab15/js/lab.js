/**
 * Author:    Shloak Sinha
 * Created:   05/26/2022
 *
 * School: UCSC
 * Class: Art101
 **/

 var button = document.getElementById("activate");

 // Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://yesno.wtf/#no",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
