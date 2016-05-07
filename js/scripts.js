//Add datepicker to birthday if browser isn't support it
if ( $('#birthday')[0].type != 'date' ) {
	$('#birthday').datepicker();
}

$(".sign-up-modal").fadeOut(0);
$(".sign-in-modal").fadeOut(0);

$("#close-sign-up-button").click(function() {
	$(".sign-up-modal").fadeOut(250);
});
$("#open-sign-up-modal").click(function() {
	$(".sign-in-modal").fadeOut(50);
	$(".sign-up-modal").fadeIn(250);
});
$("#close-sign-in-button").click(function() {
	$(".sign-in-modal").fadeOut(250);
});
$("#open-sign-in-modal").click(function() {
	$(".sign-up-modal").fadeOut(50);
	$(".sign-in-modal").fadeIn(250);
});
$("#sign-up-button").click(function() {
	var firstname = $("#firstname").val();
	var lastname = $("#lastname").val();
	var username = $("#signInUsername").val();
	var password = $("#signInPassword").val();
	var cPassword = $("#confirm-password").val();
	if(firstname.search(/\d/) != -1 || lastname.search(/\d/) != -1) {
		alert("Firstname or lastname contains digits");
		return;
	}
	if(username.length < 4 || !username.charAt(0).match(/[a-zA-Z]/i)) {
		alert("Username is less than 4 symbols or has no leading latin letter.");
		return;
	}
	if(!password.match(/^[0-9]+$/)) {
		alert("Password should contain only digits");
		return;
	}
	if(password != cPassword) {
		alert("Passwords aren't match!");
		return;	
	}
	alert("Registration complete");
});