var apiKeyyelp = "av6vdy6Ds6E5OJz2sxNld0D7kKiuLBWiE99xQUXUp1QZ0IYEjRvV1-6KS29udQtCCZCnn328_-vI3fLJh9pZhlaXkqBxda7y8ZvOcj75WEaM42wx9cTbNbKvv5FVYnYx";










fetch("https://api.yelp.com/v3/businesses/search?term=%22chicken%22&location=%22orlando%22", {
  "method": "GET",
  "headers": {
    "Authorization": "Bearer av6vdy6Ds6E5OJz2sxNld0D7kKiuLBWiE99xQUXUp1QZ0IYEjRvV1-6KS29udQtCCZCnn328_-vI3fLJh9pZhlaXkqBxda7y8ZvOcj75WEaM42wx9cTbNbKvv5FVYnYx"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});