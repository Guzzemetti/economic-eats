// function that takes the search result from the index page and moves it to the fetch function
function getIndexSearch() {
  var recentSearch = []
  var searchParams = document.location.search.trim();
  // console.log(searchParams)
  // console.log(recentSearch);
  var searchedText = searchParams.split('=').pop();
  // console.log(searchedText)
  recentSearch.push(searchedText)
  var localHistory = localStorage.getItem("recentSearch")
  recentSearch.push(localHistory)
  localStorage.setItem("recentSearch", recentSearch)
  
  yelpFetchTest(searchedText);
}

// runs the above function first when page is loaded
getIndexSearch();

// fetches data from yelp api for the searched term
// pushes data to a new variable to print desired data to the html results	
function yelpFetchTest(searchedText) {

  console.log(searchedText);

  fetch(`https://floating-headland-95050.herokuapp.com/https://api.yelp.com/v3/businesses/search?description=food&location=${searchedText}&price=1&limit=5`, {
    "method": "GET",
    "headers": {
      "Authorization": "Bearer GFh-TUiVvdi6RsShCJKhucGwyeTCt8LOC9Fw2O9CmZSziB3CeoLj5T87o6cbp5a1tyWNsltXGw9xDpMjrKzV3SM9SX5iSgDrsxUCX00B80lbUnLa1dSfUS9StKxVYnYx"
    }
  })
    .then(response => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      printYelpData(data);
    })
    .catch(err => {
      console.error(err);
    });
}

// finds aplicable data from Yelp
function printYelpData(data) {
  
  // console.log(data);

  var yelpSearchList = data.businesses;
  for (let i = 0; i < yelpSearchList.length; i++) {


    var placeName = data.businesses[i].name;
    var placeAddress = data.businesses[i].location.display_address;
    var phoneNum = data.businesses[i].phone;
    var rating = data.businesses[i].rating;
    var lat = data.businesses[i].coordinates.latitude;
    var lon = data.businesses[i].coordinates.longitude;
    
    var addressOne = data.businesses[i].location.address1
    var addressTwo = data.businesses[i].location.address2
    var addressCity = data.businesses[i].location.city
    var addressState = data.businesses[i].location.state
    var addressZip = data.businesses[i].location.zip_code
    
    // console.log(placeName);
    // console.log(placeAddress);
    // console.log(phoneNum);
    // console.log(rating);
    // console.log(lat);
    // console.log(lon);
    
    // create html elements and push them to the HTML
    var pushSearchResults = document.getElementById('search-pull-results')
    
    // the rest of this function creates elements for business info from the Yelp ID to display on the results div
    
    var nameItem = document.createElement('h2')
    nameItem.textContent = placeName
    nameItem.className = "chat-notification-title mt-2"
    
    var addressItem = document.createElement('p')
    addressItem.textContent = addressOne + ", " + addressTwo
    addressCity.className = "chat-notification-message"
    
    var cityStZip = document.createElement('p')
    
    cityStZip.textContent = addressCity + ", " + addressState + " " + addressZip
    cityStZip.className = "chat-notification-message"
    
    var phoneItem = document.createElement('p')
    phoneItem.textContent = "Phone Number: " + phoneNum
    phoneItem.className = "chat-notification-message"
    
    var ratingItem = document.createElement('p')
    ratingItem.className = "mb-2"
    ratingItem.textContent = "Rating: " + rating
    
    // pushSearchResults.append(chatNotification)
    pushSearchResults.append(nameItem)
    pushSearchResults.append(addressItem)
    pushSearchResults.append(cityStZip)
    pushSearchResults.append(phoneItem)
    pushSearchResults.append(ratingItem)

    // Runs initMap function
    initMap(data)
  }
}


let map;
var apiKey = "AIzaSyDREEsPaYeOmMTfyuA6WAejEQQsWEeNWSU";
// var apiLink = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;

// Appends Google Maps API script to the results.html
var script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
script.async = true;
document.body.appendChild(script);

// Initialize and add the map
function initMap(data) {

  // Coordinates for the map to the region lon/lat for the first listed result
  var regionLat = parseFloat(data.region.center.latitude);
  var regionLon = parseFloat(data.region.center.longitude);

  // The map, centered the users lat/long based on their zip code
    const location = new google.maps.LatLng(regionLat, regionLon)
    // Displays the map on the page and sets it to the map div
    map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
    }
  );

    // Pulls from the data returned by the yelp API,
  var businessLocations = data.businesses;
  for (let i = 0; i < businessLocations.length; i++) {
      // Variables for the lat/long for the results from the Yelp api
  var lat = (data.businesses[i].coordinates.latitude);
  var lon = (data.businesses[i].coordinates.longitude);
  // search param to place markers
  const resultMark = {lat: lat, lng: lon};
    // Variables to pull the business addresses and names to be appended to the markers
  var placeAddress = data.businesses[i].location.display_address;
  var placeName = data.businesses[i].name;
  const contentString = placeName + "; " + placeAddress;

    // Sets an info window to pop up when a marker is clicked
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  // The marker, positioned at the zip code entered
  const marker = new google.maps.Marker({
    position: resultMark,
    map: map,
  })
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
  }
}

// Toggle function for the dropdown menu
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




searchHistory()

// Users search history is stored in local storage and appended to a div within the dropdown menu"
function searchHistory() {
  var recentCities = localStorage.getItem("recentSearch")
  var storedCities = (recentCities).split(",");
	storedCities.pop()
  console.log(storedCities);


for (let i = 0; i < storedCities.length; i++) {
  var dropdownAddition = document.getElementById("myDropdown")
  // Adds them as A tags
  var makeButton = document.createElement("a")
  makeButton.textContent = storedCities[i]
  dropdownAddition.appendChild(makeButton)
  makeButton.href += './results.html?q=' + storedCities[i]
}
}



// Function to run a search based on user input into the Results Page search box
var searchButton = document.querySelector("#button-addon2")
function searchHandler(event) {
	event.preventDefault();

	var searchText = document.querySelector("#searchBar").value;

	if (!searchText) {
		return;
	}

	var queryString = './results.html?q=' + searchText;

	location.assign(queryString);
}

// listens for button click. when clicked, function is run
searchButton.addEventListener('click', searchHandler);