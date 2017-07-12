// dynamic Model pulling from Yelp Fusion API
var initialPlaces = [];
var filteredPlaces = [];
var map;
var markers = [];

// get initial places from Yelp search reesults first, then initialize maps, markers, and view-model
function Initialize() {
    $(document).ready(function(){

        var cors_anywhere_url = 'https://cors-anywhere.herokuapp.com/'; // prevents CORS error
        var yt = "far-TFsqEITUllAyGc0dEMBm3BZhwktFiUmtXCuAsSuC9hU_EkKi9dx73ixbY6U9X-DNgloo53hOYT5x2pRXbG3nIBEy51Gxyw8N2kuUTWOy5PHGtfqKioIWeFVkWXYx"; // Yelp token
        var yelp_search_url = cors_anywhere_url + "https://api.yelp.com/v3/businesses/search";

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
            filteredPlaces = filterPlaces(initialPlaces);
            initMap();
            ko.applyBindings(new viewModel());
            
        }).fail(function(error, textStatus, errorThrown){
            console.log("Error occured while searching.");
            console.dir(textStatus, errorThrown);
        });
    });
}

function filterPlaces(bs) {
    var fs = [];
    bs.forEach(function(f, i){
        switch(f.id) {
            case "burro-cheese-kitchen-austin":
            case "toms-austin-5":
            case "hey-cupcake-austin-3":
            case "gourdoughs-austin":
            case "enoteca-vespaio-austin":
            case "big-top-candy-shop-austin":
            case "la-patisserie-austin":
            case "the-soup-peddler-real-food-and-juice-bar-austin-5":
            case "bouldin-creek-cafe-austin":
            case "sugar-mamas-bakeshop-austin-3":
            case "la-mexicana-bakery-austin":
            case "polvos-mexican-restaurant-austin":
            case "shake-shack-austin":
            case "thai-fresh-austin":
            case "thrice-austin":
            case "altas-cafe-austin":
            case "juliet-italian-kitchen-austin-2":
            case "rivercity-market-austin":
            case "lamberts-downtown-barbecue-austin":
            case "picnik-austin-austin":
            case "café-crêpe-austin-2":
            case "piranha-killer-sushi-austin":
			case "barley-bean-austin-3":
			case "austin-java-austin-3":
			case "austin-java-austin-2":
			case "caffé-medici-austin-5":
			case "mañana-coffee-juice-and-bakeshop-austin":
			case "stonehouse-coffee-and-bar-austin-2":
                break;
        default:
            fs.push(f);
        }
    });
    return fs;
}

function initMap() {
    // create map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.2530171, lng: -97.7534126},
        zoom: 14,
        disableDefaultUI: true
	});
	
	// add all markers on map
    for(var i=0; i<filteredPlaces.length; i++){
        markers[i] = new google.maps.Marker({
            position: {lat: filteredPlaces[i].coordinates.latitude, lng: filteredPlaces[i].coordinates.longitude},
            map: map,
            animation: google.maps.Animation.DROP
        });
    }

    // TODO: Populate marker's info window with data from Yelp Fusion
}

// View Model
function viewModel() {
    var self = this;

    this.placesList = ko.observableArray([]);

    filteredPlaces.forEach(function(p){
        self.placesList.push(p);
    });

    this.setPlace = function(p) {
        for(var i=0; i<filteredPlaces.length; i++){
            if(p.name === filteredPlaces[i].name){
                markers[i].setMap(map);
                markers[i].animation = google.maps.Animation.BOUNCE;
            }
            else {
                // remove marker from map
                markers[i].setMap(null);
            }
        }
    }

    this.showAll = function() {
        markers.forEach(function(m){
            m.setMap(map);
            m.animation = google.maps.Animation.DROP;
        });
    }

    this.showHotDrinks = function() {
        /*for(var i=0; i<initialPlaces.length; i++){
            if(initialPlaces[i].hotDrinks == true) {
                markers[i].setMap(map);
                markers[i].animation = google.maps.Animation.DROP;
            }
            else {
                markers[i].setMap(null);
            }
        }*/
    }

    this.showColdTreats = function() {
        /*
        for(var i=0; i<initialPlaces.length; i++){
            if(initialPlaces[i].coldTreats == true) {
                markers[i].setMap(map);
                markers[i].animation = google.maps.Animation.DROP;
            }
            else {
                markers[i].setMap(null);
            }
        }*/
    }
}