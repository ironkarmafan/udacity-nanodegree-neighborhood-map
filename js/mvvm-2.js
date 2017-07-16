var initialPlaces;
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
function filterPlaces(ps) {
    var fs = [];
    ps.forEach(function(f, i){
        switch(f.id) {
			case "burro-cheese-kitchen-austin":
			case "shake-shack-austin":
            case "toms-austin-5":
            case "enoteca-vespaio-austin":
            case "big-top-candy-shop-austin":
            case "la-patisserie-austin":
            case "the-soup-peddler-real-food-and-juice-bar-austin-5":
            case "sugar-mamas-bakeshop-austin-3":
            case "la-mexicana-bakery-austin":
            case "polvos-mexican-restaurant-austin":
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
		disableDefaultUI: true,
		styles: [
          {
            featureType: 'poi',
            stylers: [{visibility: 'off'}]
		  },
		  {
            featureType: 'poi.park',
            stylers: [{visibility: 'on'}]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          }
        ]
	});
}

function initMarkers() {
	// create markers and assign to associated filtered place
	filteredPlaces.forEach(function(f){
		var m = new google.maps.Marker({
            position: {lat: f.coordinates.latitude, lng: f.coordinates.longitude},
            map: map,
            animation: google.maps.Animation.DROP
		});
		f.marker = m;
	});
}

function viewModel() {
    var self = this;
	this.placesInput = ko.observable("");
	var defaultInput = "";
    this.typeToShow = ko.observable("all");
	this.places = ko.observableArray([]);

	// populate places
    filteredPlaces.forEach(function(p, i){
		self.places.push(p);
	});

	// initialize place info windows
	self.places().forEach(function(p){
		google.maps.event.addListener(p.marker,"click",function(){
			self.markPlace(p);
		});
	});

	// animate marker and display its info window
    this.markPlace = function(p) {
        p.marker.setMap(map);

        // open info window
        if(iw)iw.close();
        iw=new google.maps.InfoWindow({content: formatInfoWindow(p)});
        iw.open(map, p.marker);

        // specified marker bounces and cancels other marker animations
		self.places().forEach(function(h){
			if(p.id === h.id) {
				p.marker.setAnimation(google.maps.Animation.BOUNCE);
			}
			else {
				h.marker.setAnimation(null);
			}
		});
	}

	function formatInfoWindow(p){
		// returns number of stars to display
		var stars = displayStars(p);
		var address = displayAddress(p);
		
		
		var s = "<div class=\"infoWindowContent\">" + 
				"<a class=\"name\" title=\"" + p.name + "\" href=\"" + p.url + "\">" + p.name + "</a>" +
				"<p><div class=\"yelpStars " + stars + "\"></div>" +
				"<span class=\"reviewCount\">Reviews: " + p.review_count + "</span></p>" +
				"<p><span class=\"price\">" + p.price + "</span> · " +
				"<span class=\"category\">" + p.categories[0].title + "</span></p>" +
				address +
				"<a class=\"name\" title=\"" + p.name + "\" href=\"tel:" + p.phone + "\">" + p.display_phone + "</a>" +
				"</div>";
		return s;
	}

	function displayStars(p) {
		var rs = p.rating.toString();
		switch(rs) {
			case "1":
				return "oneStar";
				break;
			case "1.5":
				return "oneHalfStar";
				break;
			case "2":
				return "twoStars";
				break;
			case "2.5":
				return "twoHalfStars";
				break;
			case "3":
				return "threeStars";
				break;
			case "3.5":
				return "threeHalfStars";
				break;
			case "4":
				return "fourStars";
				break;
			case "4.5":
				return "fourHalfStars";
				break;
			case "5":
				return "fiveStars";
				break;
			default: 
				return "";
		}
	}

	function displayAddress(p) {
		if(p.location.display_address) {
			var s = "<p>";
			
			(p.location.display_address).forEach(function(a){
				s += "<span class=\"address\">" + a + "</span>"
			});
			s += "</p>";
				return s;
			}
		else {
			console.log("no display addresses available");
		}
	}
	
	// shows places based on both category and name (if name exists)
    this.placesToShow = ko.computed(function() {
		var desiredType = self.typeToShow();
		if(iw)iw.close();
        if (desiredType === "all") {
            return(ko.utils.arrayFilter(self.places(), function(p) {
				if(self.placesInput() !== defaultInput) {
					if( containsMatch(p.name) || categoryMatch(p.categories) ) {
						p.marker.setMap(map);
						return true;
					}
					else {
						p.marker.setMap(null);
						return false;
					}
				}
				p.marker.setMap(map);
				return true;
			}));
		}
        
        // if match is found, add to list of places to be shown
        return(ko.utils.arrayFilter(self.places(), function(p) {
			var matchCat = false;
            (p.categories).forEach(function(c){
				if(c.alias === desiredType) {
					matchCat = true;
				}
			});
			// matchCat should always be true before checking for matched input
			if(matchCat == true) {
				if(self.placesInput() !== defaultInput) {
					if( containsMatch(p.name) || categoryMatch(p.categories) ) {
						p.marker.setMap(map);
						return true;
					}
					else {
						p.marker.setMap(null);
						return false;
					}
				}
				p.marker.setMap(map);
				return true;
			}
			else {
				p.marker.setMap(null);
				return false;
			}
        }));
	}, this);

	// Return if partial input string matches given category titles
	function categoryMatch(cs) {
		var match = false;
		cs.forEach(function(c){
			if( containsMatch(c.title) ) {
				match = true;
			}
		});
		return match;
	}

	// Return if partial input string matches given name (or title)
	function containsMatch(s) {
		var ls = s.toLowerCase();
		var li = (self.placesInput()).toLowerCase();
		if((ls).search(li) > -1) {
			return true;
		}
	}
 
    // Show/hide callbacks for the places list
    this.showPlace = function(p) {
		$(p).show()
	}
    this.hidePlace = function(p) {
		$(p).hide()
	}
}