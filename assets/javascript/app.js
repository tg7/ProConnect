$( document ).ready(function() {

	var city = '';
	var genre = '';
	var experience = '';
	var tag = '';
	var email = '';

	var dataRef = new Firebase ('https://theproconnect.firebaseio.com/');

	$('#userSubmit').on('click', function() {
	city = $('#cityInput').val();
	genre = $('#genreInput').val();
	experience = $('#expInput').val();
	tag = $('#tagInput').val();
	email = $('#emailInput').val();

//Pushes Data to Firebase

	dataRef.push ({
		city: city,
		genre: genre,
		experience: experience,
		tag: tag,
		email: email

	});

// Empties Form After Users Clicks Submit

	$('#cityInput').val('Choose a city...');
	$('#genreInput').val('Choose a genre...');
	$('#expInput').val('Choose your experience level...');
	$('#tagInput').val('');
	$('#emailInput').val('');

return false;

});

//----- OPEN Modal
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        console.log('Work');
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });

// Start of Validation JS


});

