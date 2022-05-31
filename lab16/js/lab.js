/**
 * Author:    Shloak Sinha
 * Created:   05/30/2022
 *
 * School: UCSC
 * Class: Art101
 **/


// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/614/info.0.json",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        var comicObj = data;
        $("#output").append("<h1>" + comicObj.title + "</h1><br>");
        $("#output").append("<img src='" + comicObj.img + "'>");
        console.log('things do be happening');
    },
    // What we do if the api call fails
    error: function (textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
});
