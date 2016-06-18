$(document).ready(function() {
var dataRef = new Firebase("https://theproconnectchat.firebaseio.com/");

// Get the values in each field and store them in variables
$("#submit").on("click", function() {
	var name = $('#name').val();
	var destination = $('#destination').val();
	var firstTrain = $('#fTrain').val();
	var frequency = $('#frequency').val();

// Clear form fields after submitting
	$('#name').val('');
	$('#destination').val('');
	$('#frequency').val('');
	$('#fTrain').val('');

// Push data to Firebase
	dataRef.push({
		name: name,
		destination: destination,
		firstTrain: firstTrain,
		frequency: frequency
	});
	return false;
});

// Store firebase data in variables
dataRef.on("child_added", function(snapshot){
	var name = snapshot.val().name;
	var destination = snapshot.val().destination;
	var frequency = snapshot.val().frequency;
	var firstTrain = snapshot.val().firstTrain;

// Make variables with the current time and first train time, converted to MomentJS format
	var timeHour = moment().format('H');
	var timeMin = moment().format('m');
	var ftHour = moment(firstTrain, "HH:mm").format('H');
	var ftMin = moment(firstTrain, "HH:mm").format('m');

	var ftMoment = (ftHour * 60) + (ftMin * 1);
	var timeMoment = (timeHour * 60) + (timeMin * 1);

// Find how much time has passed since the first train
	var diff = timeMoment - ftMoment;

// Find how many trains have come so far
	var trainsSinceFirst = Math.floor(diff/frequency);

// Find how long until the next train comes
	var nextArrival = ((trainsSinceFirst + 1) * frequency) + ftMoment;
	
// Handle negative values for minAway and nextArrival
	if (ftMoment < timeMoment) {
		var minAway = nextArrival - timeMoment;
		var nextArrival = moment().add(minAway, 'minutes').format('HH:mm');
	} 
	else {
		var nextArrival = firstTrain;
		var minAway = ftMoment - timeMoment;
	};
	
	
	// Make a new row and append all the data
	$("#trainTable").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minAway + "</td></tr>");

	});
});