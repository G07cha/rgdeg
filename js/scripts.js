function subscribe() {
	var email = document.getElementById('email').value;
	$.get({
		url: 'https://running-tracks2.herokuapp.com/subscribe?email=' + email
	});
}
