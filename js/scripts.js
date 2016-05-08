function scrollToForm() {
	$('html, body').animate({
    scrollTop: $("#email").offset().top
  }, 1500, function() {
  	$("#email").focus();
  });
}

function subscribe() {
	var email = document.getElementById('email').value;
	$.get({
		url: 'https://running-tracks2.herokuapp.com/subscribe?email=' + email
	});
}
