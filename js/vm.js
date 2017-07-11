var Place = function(d) {
    this.name = d.name;
    this.lat = d.lat;
    this.lng = d.lng;
}
/*
for(var i=0; i<initialPlaces.length; i++) {
    console.log("Place #" + (i+1) + ": " + initialPlaces[i].name + " at lat: " + initialPlaces[i].lat + ", lng: " + initialPlaces[i].lng);
}*/

function viewModel() {
    var self = this;

    this.placesList = ko.observableArray([]);

    initialPlaces.forEach(function(p){
        self.placesList.push(new Place(p));
    });

    this.setPlace = function(p) {
        for(var i=0; i<initialPlaces.length; i++){
            if(p.name === initialPlaces[i].name){
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
}

ko.applyBindings(new viewModel());