function subscribe() {
	var email = document.getElementById('email').value;
	$.get({
		url: 'https://running-tracks.herokuapp.com/subscribe?email=' + email
	});
}
