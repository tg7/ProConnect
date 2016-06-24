$( document ).ready(function() {

	$(document).on('click', '.city', function(event){
  event.preventDefault();
  var name = $(this).text().replace('@', '');
  nameSearch(name)
});

$('#userSubmit').click(function() {
      $('#dallascity').empty();
      $('#newyorkcity').empty();
      $('#philadelphiacity').empty();
      $('#losangelescity').empty();
      $('#bostoncity').empty();
      $('#chicagocity').empty();
      var city = $('#cityInput').val();
      var queryUrl = 'https://theproconnect.firebaseio.com/.json?orderBy=%22city%22&equalTo=%22' + city + '%22';
      $.ajax({url: queryUrl, method:'GET'})
      .done(function(response){
        console.log(response);
      });


dataRef.on("child_added", function(snapshot){

  var city = snapshot.val().city;
  var genre = snapshot.val().genre;
  var experience = snapshot.val().experience;
  var tag = snapshot.val().tag;
  var email = snapshot.val().email;
  var tableRow = $('<tr>'); 

  var trainInfo = [snapshot.val().city, snapshot.val().genre, snapshot.val().experience, snapshot.val().tag, snapshot.val().email];
  //create a for loop to easily create a new table data with  the HTMl from the inputed value 
    for(var i = 0; i < trainInfo.length;i++){
    // create a new td
    var tableData = $('<td>');
    // add the information from the array to the HTMl of this td
    tableData.html(trainInfo[i]);
    // give it an attribute for save measure 
    tableData.attr('data-id', i);
    // append current td to table row 
    tableRow.append(tableData)
  }
  // append the new row to the last child of the table body
  $('#userTable').append(tableRow);
  var cityData = snapshot.val().city;
  var tagData = snapshot.val().tag;
      if ($('#cityInput').val() == 'Dallas') {
        if (city == 'Dallas') {
      
        console.log('Success!')
        console.log(tagData);
        $('#dallascity').append('<center> <b> ' + '<p class="city btn-sm btn-primary">' + tagData + '</p>' + '</center> </b>');
      };
    

  // return false to prevent constant returning
  return false;
// Handle the errors
};


$('#userTable').append(tableRow);
  var cityData = snapshot.val().city;
  var tagData = snapshot.val().tag;
      if ($('#cityInput').val() == 'Boston') {
        if (city == 'Boston') {
        console.log('Success!')
        console.log(tagData);
        $('#bostoncity').append('<center> <b> ' + '<p class="city btn-sm btn-primary">' + tagData + '</p>' + '</center> </b>');
      };
  // return false to prevent constant returning
  return false;
// Handle the errors
    };

$('#userTable').append(tableRow);
  var cityData = snapshot.val().city;
  var tagData = snapshot.val().tag;
      if ($('#cityInput').val() == 'New York City') {
        if (city == 'New York City') {
        console.log('Success!')
        console.log(tagData);
        $('#newyorkcity').append('<center> <b> ' + '<p class="city btn-sm btn-primary">' + tagData + '</p>' + '</center> </b>');
      };
  // return false to prevent constant returning
  return false;
// Handle the errors
    };


$('#userTable').append(tableRow);
  var cityData = snapshot.val().city;
  var tagData = snapshot.val().tag;
      if ($('#cityInput').val() == 'Philadelphia') {
        if (city == 'Philadelphia') {
        console.log('Success!')
        console.log(tagData);
        $('#philadelphiacity').append('<center> <b> ' + '<p class="city btn-sm btn-primary">' + tagData + '</p>' + '</center> </b>');
      };
  // return false to prevent constant returning
  return false;
// Handle the errors
    };

$('#userTable').append(tableRow);
  var cityData = snapshot.val().city;
  var tagData = snapshot.val().tag;
      if ($('#cityInput').val() == 'Los Angeles') {
        if (city == 'Los Angeles') {
        console.log('Success!')
        console.log(tagData);
        $('#losangelescity').append('<center> <b> ' + '<p class="city btn-sm btn-primary">' + tagData + '</p>' + '</center> </b>');
      };
  // return false to prevent constant returning
  return false;
// Handle the errors
    };

$('#userTable').append(tableRow);
  var cityData = snapshot.val().city;
  var tagData = snapshot.val().tag;
      if ($('#cityInput').val() == 'Chicago') {
        if (city == 'Chicago') {
        console.log('Success!')
        console.log(tagData);
        $('#chicagocity').append('<center> <b> ' + '<p class="city btn-sm btn-primary">' + tagData + '</p>' + '</center> </b>');
      };
  // return false to prevent constant returning
  return false;
// Handle the errors
    };


  });
});

// Edit Below

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

  dataRef.on("child_added", function(snapshot){

  var city = snapshot.val().city;
  var genre = snapshot.val().genre;
  var experience = snapshot.val().experience;
  var tag = snapshot.val().tag;
  var email = snapshot.val().email;
  var tableRow = $('<tr>'); 

  var trainInfo = [snapshot.val().city, snapshot.val().genre, snapshot.val().experience, snapshot.val().tag, snapshot.val().email];
  //create a for loop to easily create a new table data with  the HTMl from the inputed value 
    for(var i = 0; i < trainInfo.length;i++){
    // create a new td
    var tableData = $('<td>');
    // add the information from the array to the HTMl of this td
    tableData.html(trainInfo[i]);
    // give it an attribute for save measure 
    tableData.attr('data-id', i);
    // append current td to table row 
    tableRow.append(tableData)
  }
  // append the new row to the last child of the table body
  $('#userTable').append(tableRow);
  // return false to prevent constant returning
  return false;
// Handle the errors
}, function(errorObject){
  console.log("Errors handled: " + errorObject.code)

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


});



$("#submit").on("click", function() {
   var name = $('#name').val();
   nameSearch(name);
   return false;
 });
 
  function nameSearch(name){
    SC.oEmbed('http://soundcloud.com/' + name, {
    element: document.getElementById('putTheWidgetHere')
    });
  }

 function emptyDivs(){
    $('#userTable').empty();
     console.log('hi')
  };
 

