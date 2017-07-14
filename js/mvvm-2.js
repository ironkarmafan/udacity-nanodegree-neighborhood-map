var filteredPlaces;
var map;
var iw; // info window

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
            initMarkers();
            ko.applyBindings(new viewModel());
            console.log(filteredPlaces);
            
        }).fail(function(error, textStatus, errorThrown){
            console.log("Error occured while searching.");
            console.dir(textStatus, errorThrown);
        });
    });
}

// Excludes these places from the map app
function filterPlaces(bs) {
    var fs = [];
    bs.forEach(function(f, i){
        // if any of these places, exclude
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
            // if coordinates are not NULL add
            if(typeof f.coordinates.latitude === 'number' && typeof f.coordinates.longitude === 'number') {
                fs.push(f);
            }
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

    // TODO: Populate marker's info window with data from Yelp Fusion
}

function initMarkers() {
	filteredPlaces.forEach(function(f){
		var m = new google.maps.Marker({
            position: {lat: f.coordinates.latitude, lng: f.coordinates.longitude},
            map: map,
            animation: google.maps.Animation.DROP
		});
		f.marker = m;
		makeInfoWindow(f, f.marker);
	});
}

function makeInfoWindow(p, m){
	google.maps.event.addListener(m,"click",function(){
        if(iw)iw.close();
        iw=new google.maps.InfoWindow({content: formatInfoWindow(p)});
        iw.open(map,m);}
    );
}

function formatInfoWindow(p){
	var s = "<div class=\"infoWindow\">" + p.name + "</div>";
	return s;
}

function viewModel() {
    var self = this;
    this.placesInput = ko.observable("");
    this.typeToShow = ko.observable("all");

    this.places = ko.observableArray([]);

    filteredPlaces.forEach(function(p, i){
		self.places.push(p);
	});

    this.setPlace = function(p) {
			//hideAll();
			allNullAnimation();
			p.marker.setMap(map);
			p.marker.animation = google.maps.Animation.BOUNCE;
			if(iw)iw.close();
			iw=new google.maps.InfoWindow({content: formatInfoWindow(p)});
			iw.open(map, p.marker);
	}

	function allNullAnimation() {
		self.places().forEach(function(p){
			p.marker.setAnimation(null);
		});
	}
	function hideAll() {
		self.places().forEach(function(p){
			p.marker.setMap(null);
		});
	}
	
	// shows places based on both category and name (if name exists)
    this.placesToShow = ko.computed(function() {
		var desiredType = self.typeToShow();
		if(iw)iw.close();
        if (desiredType == "all") {
            return(ko.utils.arrayFilter(self.places(), function(place) {
				if(self.placesInput() !== "") {
					if( containsMatch(place.name) ) {
						place.marker.setMap(map);
						return true;
					}
					else {
						place.marker.setMap(null);
						return false;
					}
				}
				place.marker.setMap(map);
				return true;
			}));
		}
        
        // if match is found, add to list of places to be shown
        return(ko.utils.arrayFilter(self.places(), function(place) {
			var matchCat = false;
            (place.categories).forEach(function(category){
				if(category.alias == desiredType) {
					matchCat = true;
				}
			});
			// matchCat should always be true before checking for matchNam
			if(matchCat == true) {
				if(self.placesInput() !== "") {
					if( containsMatch(place.name) )
					{
						place.marker.setMap(map);
						return true;
					}
					else {
						place.marker.setMap(null);
						return false;
					}
				}
				place.marker.setMap(map);
				return true;
			}
			else {
				place.marker.setMap(null);
				return false;
			}
        }));
	}, this);

	// Return if partial input string matches given name
	function containsMatch(n) {
		var ln = n.toLowerCase();
		var li = (self.placesInput()).toLowerCase();
		if((ln).search(li) > -1) {
			return true;
		}
	}
 
    // Show/hide callbacks for the places list
    this.showPlace = function(elem) { $(elem).show() }
    this.hidePlace = function(elem) { $(elem).hide() }
}