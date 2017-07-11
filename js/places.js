/*
Model of places, before ANYTHING can happen, this needs to completely load
*/
var cors_anywhere_url = 'https://cors-anywhere.herokuapp.com/'; // prevents CORS error
var yt = "far-TFsqEITUllAyGc0dEMBm3BZhwktFiUmtXCuAsSuC9hU_EkKi9dx73ixbY6U9X-DNgloo53hOYT5x2pRXbG3nIBEy51Gxyw8N2kuUTWOy5PHGtfqKioIWeFVkWXYx"; // Yelp token
var initialPlaces;
var filteredPlaces; // after inital response
yelpSearchResults();

// get initial places from Yelp search reesults
function yelpSearchResults() {
    var yelp_search_url = cors_anywhere_url + "https://api.yelp.com/v3/businesses/search";

    var help_queries = "Lick, Venezia, Dolce Neve, Tasty Spoon, Science Cream, Amy's, Holla Mode, Bananarchy, Steel City Pops, Holy Cacao, GoodPop, Bennu, Medici, Irie, Once Over, Summermoon, Jo's, Seventh Flag, Starbucks, Fair Bean";

    $.ajax({
        url: yelp_search_url,
		beforeSend: function(xhr){
			xhr.setRequestHeader('Authorization', 'Bearer '+yt);
		},
        data: {
        	term : "ice cream, coffee", 
            location : "1102 S Congress Ave, Austin, TX 78704",
            radius : 3219,
            limit : 48,
            sort_by : "distance",
            price : "1,2"
        },
    }).done(function(response){
        initialPlaces = response.businesses;
        console.log(initialPlaces);
        createOutput(initialPlaces);
        
    }).fail(function(error, textStatus, errorThrown){
        console.log("Error occured while searching.");
    	console.dir(textStatus, errorThrown);
    });
}

// create output for static test data
function createOutput(bs) {
    $("body").append("<div id=\"output\"></div>");
    var output;
    output = "[\n";
    bs.forEach(function(b, i){
        output += "{\n\tname: \"" + b.name + "\",\n" +
        "\tid: \"" + b.id + "\",\n" +
        "\tcoordinates: {latitude: " + b.coordinates.latitude + ", longitude: " + b.coordinates.longitude + "},\n" +
        "\tdisplay_phone: \"" + b.display_phone + "\",\n" +
        "\tprice: \"" + b.price + "\",\n" +
        "\trating: \"" + b.rating + "\",\n" +
        "\timage_url: \"" + b.image_url + "\",\n" + 
        "\tcategories: [\n";
        (b.categories).forEach(function(c, j){
            var s = "\t\t{alias: \"" + c.alias + "\", title: \"" + c.title + "\"}";
            (j !== (b.categories.length-1)) ? output += s + ",\n" : output += s + "\n";
        });
        output += "\t\t]\n";
        (i !== (bs.length-1)) ? output += "\t},\n" : output += "\t}\n";
    });
    output += "];";
    $("#output").append(output);
}