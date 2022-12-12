const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55238700demshdec3342b5aac45dp1e2d78jsn5ebbc7d35cf8',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
	.then(response => response.json())
    .then(data => {
		let body= ''
		data.array.forEach(data => {
			body += `<li>${data.id}: ${data.first_name}</li>`;
			
		});
		document.getElementById('data').innerHTML = body;
	})

    