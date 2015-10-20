// Initialize Parse app
Parse.initialize('8NGkoUvgY2CcLcgRhxrujRq7t7KeJ7s9BdVu2dEu','UBD5kTCwOt6hOFLSTVnvB2SMZUA6dEauDXZkhXCu')

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');

// Save your instance of your song -- and go see it on parse.com!


// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	


	// Create a new instance of your Music class 
	var musicObject = new Music();

	$(this).find('input').each(function(){
		musicObject.set($(this).attr('id'),$this(this).value);
		$(this).value = "";
	})

	musicObject.save();

	// For each input element, set a property of your new instance equal to the input's value


	// After setting each property, save your new instance back to your database

	
	return false
})

var setObject = function(value){

}

// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


