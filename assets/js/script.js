var apiKeyyelp =
	"av6vdy6Ds6E5OJz2sxNld0D7kKiuLBWiE99xQUXUp1QZ0IYEjRvV1-6KS29udQtCCZCnn328_-vI3fLJh9pZhlaXkqBxda7y8ZvOcj75WEaM42wx9cTbNbKvv5FVYnYx";
let zipCode = document.getElementsByClassName("mt-3");
var apiLink = `https://floating-headland-95050.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=%22steak%22&location=%22${zipCode}%22`;
var originScript = "https://floating-headland-95050.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=%22steak%22&location=%22$$orlando%22"




function test() {
	fetch(apiLink,
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

test();

function getResult(zipCode){
	
	console.log(getResult);
}
addEventListener("click",getResult())