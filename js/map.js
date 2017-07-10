var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.261823, lng: -97.7559063},
        zoom: 14
    });
    var markers = [];
    var myLatLng;
    for(var i=0; i<places.length; i++){
        myLatLng = {lat: places[i].lat, lng: places[i].lng};
        markers[i] = new google.maps.Marker({
            position: myLatLng,
            map: map
        });
    }
}