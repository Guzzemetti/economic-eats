let map;
var apiKey = "AIzaSyDREEsPaYeOmMTfyuA6WAejEQQsWEeNWSU";
// var apiLink = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;

console.log("connected");


var script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
script.async = true;

document.body.appendChild(script);

// Google Maps API test function
// Initialize and add the map

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
