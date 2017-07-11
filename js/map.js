var map;
var markers = [];

function initMap() {
    // create map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.2499928, lng: -97.7658105},
        zoom: 14,
        disableDefaultUI: true
    });

    // add all markers on map
    /*
    for(var i=0; i<initialPlaces.length; i++){
        markers[i] = new google.maps.Marker({
            position: {lat: initialPlaces[i].latitude, lng: initialPlaces[i].longitude},
            map: map,
            animation: google.maps.Animation.DROP
        });
    } */

    // TODO: Populate marker's info window with Yelp Fusion
}