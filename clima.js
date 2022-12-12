const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55238700demshdec3342b5aac45dp1e2d78jsn5ebbc7d35cf8',
		'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
	}
};

fetch('https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));