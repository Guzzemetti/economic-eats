// variable to identify the search button on index.html
var searchButton = document.querySelector("#search-button")
// function that checks that an input was made
// if not, pop states that something needs to be entered
// takes the input result and moves to the results page when the button is clicked
function searchHandler(event) {
	event.preventDefault();

	var searchText = document.querySelector("#search-text").value;

	if (!searchText) {
		return;
	}

	var queryString = './results.html?q=' + searchText;

	location.assign(queryString);
}


// listens for button click. when clicked, function is run
searchButton.addEventListener('click', searchHandler);