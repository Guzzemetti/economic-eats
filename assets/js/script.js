<<<<<<< HEAD



=======
var apiKeyyelp =
	"av6vdy6Ds6E5OJz2sxNld0D7kKiuLBWiE99xQUXUp1QZ0IYEjRvV1-6KS29udQtCCZCnn328_-vI3fLJh9pZhlaXkqBxda7y8ZvOcj75WEaM42wx9cTbNbKvv5FVYnYx";

function test() {
	fetch(
		"https://floating-headland-95050.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=%22chicken%22&location=%22orlando%22",
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
    
		}).then((data) =>{
      console.log(data);
    })
		.catch((err) => {
			console.error(err);
		});
}

test();
>>>>>>> 6237358d4c73777f48c9084e44cb648930d30356
