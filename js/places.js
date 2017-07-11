/*
Model of places, before ANYTHING can happen, this needs to completely load
*/
var cors_anywhere_url = 'https://cors-anywhere.herokuapp.com/'; // prevents CORS error
var yt = "far-TFsqEITUllAyGc0dEMBm3BZhwktFiUmtXCuAsSuC9hU_EkKi9dx73ixbY6U9X-DNgloo53hOYT5x2pRXbG3nIBEy51Gxyw8N2kuUTWOy5PHGtfqKioIWeFVkWXYx"; // Yelp token
var initialPlaces;
yelpSearchResults();

// get initial places from Yelp search reesults
function yelpSearchResults() {
    var yelp_search_url = cors_anywhere_url + "https://api.yelp.com/v3/businesses/search";

    $.ajax({
        url: yelp_search_url,
		beforeSend: function(xhr){
			xhr.setRequestHeader('Authorization', 'Bearer '+yt);
		},
        data: {
        	term : "ice cream, coffee", 
            location : "1710 Evergreen Ave, Austin, TX 78704",
            radius : 3219,
            sort_by : "distance",
            limit : 2
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
/*    
    console.log("[");
    bs.forEach(function(b, i){
        console.log("{");
        console.log("name: \"" + b.name + "\",");
        console.log("id: \"" + b.id + "\",");
        console.log("coordinates: {latitude: " + b.coordinates.latitude + ", longitude: " + b.coordinates.longitude + "},");
        console.log("display_phone: \"" + b.display_phone + "\",");
        console.log("price: \"" + b.price + "\",");
        console.log("rating: \"" + b.rating + "\",");
        console.log("image_url: \"" + b.image_url + "\",");
        console.log("categories: ["); 
        (b.categories).forEach(function(c, j){
            var s = "{alias: " + c.alias + ", title: " + c.title;
            if( j !== (b.categories.length-1) ) {
                console.log(s + "}");
            }
            else {
                console.log(s + "},");
            }
        });
        console.log("]"); 
        (i !== (bs.length-1)) ? console.log("},") : console.log("}");
    });
    console.log("];");
*/
}

// Format for static


/*[
    {
        name: "Holla Mode",
        lat: 30.26422,
        lng: -97.76357,
        coldTreats: true,
        hotDrinks: false
    },
    {
        name: "The Science Cream",
        lat: 30.2484925,
        lng: -97.7517209,
        coldTreats: true,
        hotDrinks: false
    },
    {
        name: "Lick Honest Ice Creams",
        lat: 30.2556041,
        lng: -97.7648235,
        coldTreats: true,
        hotDrinks: false
    },
    {
        name: "The Tasty Spoon",
        lat: 30.250431,
        lng: -97.7567444,
        coldTreats: true,
        hotDrinks: true
    },
    {
        name: "Summer Moon Coffee",
        lat: 30.2332686,
        lng: -97.7670597,
        coldTreats: false,
        hotDrinks: true
    }
]*/