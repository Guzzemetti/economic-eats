var apiKeyyelp =
	"av6vdy6Ds6E5OJz2sxNld0D7kKiuLBWiE99xQUXUp1QZ0IYEjRvV1-6KS29udQtCCZCnn328_-vI3fLJh9pZhlaXkqBxda7y8ZvOcj75WEaM42wx9cTbNbKvv5FVYnYx";
// created search btn
var searchBtn = document.getElementById("search-button");
var zipCode = document.querySelector("#search-box")
var originScript = "https://floating-headland-95050.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=%22$$orlando%22"



// test() takes the value from the user
function test() {
	 var textInput = zipCode.value.trim()
	 if(textInput){
		fetchData(textInput)
	 }
	 }


// this is searching the data from api and cross-referencing input from user
	 function fetchData(textInput){
		 console.log(textInput);
	fetch(`https://floating-headland-95050.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${textInput}`,
		{
			method: "GET",
			headers: {
				Authorization:
					"Bearer av6vdy6Ds6E5OJz2sxNld0D7kKiuLBWiE99xQUXUp1QZ0IYEjRvV1-6KS29udQtCCZCnn328_-vI3fLJh9pZhlaXkqBxda7y8ZvOcj75WEaM42wx9cTbNbKvv5FVYnYx",
			},
		}
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
		console.log(data);
		})
		.catch((err) => {
			console.error(err);
		});
};



searchBtn.addEventListener("click", test)