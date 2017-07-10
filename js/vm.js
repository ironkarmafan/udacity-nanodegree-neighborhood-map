var Place = function() {
    this.name;
    this.lat;
    this.lng;
};
var places = [];

var K = new Place;
K.name = "Holla Mode";
K.lat = 30.2640942;
K.lng = -97.7658658;

places.push(K);

var J = new Place;
J.name = "The Science Cream";
J.lat = 30.2484925;
J.lng = -97.7517209;

places.push(J);

for(var i=0; i<places.length; i++) {
    console.log("Place #" + i + ": " + places[i].name + " at lat: " + places[i].lat + ", lng: " + places[i].lng);
}