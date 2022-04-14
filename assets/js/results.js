// function that takes the search result from the index page and moves it to the fetch function
function getIndexSearch() {
  var searchParams = document.location.search.trim();
  console.log(searchParams)
  var searchedText = searchParams.split('=').pop();
  console.log(searchedText)

  yelpFetchTest(searchedText);
}

// fetches data from yelp api for the searched term
// pushes data to a new variable to print desired data to the html results	
function yelpFetchTest(searchedText) {

console.log(searchedText);

fetch(`https://floating-headland-95050.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchedText}&price=1&location=33410&limit=10`, {
  "method": "GET",
  "headers": {
    "Authorization": "Bearer GFh-TUiVvdi6RsShCJKhucGwyeTCt8LOC9Fw2O9CmZSziB3CeoLj5T87o6cbp5a1tyWNsltXGw9xDpMjrKzV3SM9SX5iSgDrsxUCX00B80lbUnLa1dSfUS9StKxVYnYx"
  }
})
  .then(response => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    printYelpData(data);
  })
  .catch(err => {
    console.error(err);
  });
}

// finds aplicable data 
// for now, just console logged to show it is working
function printYelpData(data) {
console.log(data);
var placeName = data.businesses[0].name;
var placeAddress = data.businesses[0].location.display_address;
var phoneNum = data.businesses[0].phone;
var rating = data.businesses[0].rating;
var lat = data.businesses[0].coordinates.latitude;
var lon = data.businesses[0].coordinates.longitude;

console.log(placeName);
console.log(placeAddress);
console.log(phoneNum);
console.log(rating);
console.log(lat);
console.log(lon);

}

// runs this function first when page is loaded
getIndexSearch()


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
