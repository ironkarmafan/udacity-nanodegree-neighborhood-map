/* test Yelp Fusion API */
var cors_anywhere_url = 'https://cors-anywhere.herokuapp.com/';
var yelp_auth_url = cors_anywhere_url + "https://api.yelp.com/oauth2/token";
var bearerToken;
var tokeIt = "far-TFsqEITUllAyGc0dEMBm3BZhwktFiUmtXCuAsSuC9hU_EkKi9dx73ixbY6U9X-DNgloo53hOYT5x2pRXbG3nIBEy51Gxyw8N2kuUTWOy5PHGtfqKioIWeFVkWXYx";
/*
$.ajax({
    url: yelp_auth_url,
    method: "POST",
    data: {
        grant_type: 'client_credentials',
        client_id: 'xxx',
        client_secret: 'xxx'
    },
}).done(function(response){
    bearerToken = response.access_token;
    console.log(bearerToken);
    //searchResults();
}).fail(function(error){
    console.log("An error occured in getting Yelp access token!");
});*/

console.log(tokeIt);

function searchResults(q) {
    var yelp_search_url = cors_anywhere_url + "https://api.yelp.com/v3/businesses/" + q;

    $.ajax({
        url: yelp_search_url,
		beforeSend: function(xhr){
            // xhr.setRequestHeader('Access-Control-Allow-origin', 'true');
			xhr.setRequestHeader('Authorization', 'Bearer '+tokeIt);
		},
    }).done(function(response){
    	console.log("response is : ");
        console.log(response); // the response has the access_token
    }).fail(function(error, textStatus, errorThrown){
        console.log("Error occured while searching.");
    	console.dir(textStatus, errorThrown);
    });
}

$("body").append("<button>Push ME</button>");
$("button").on("click", function(){
    searchResults("lick-honest-ice-creams-austin-3");
});