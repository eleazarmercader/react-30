/**
 * Function to populate values in card from form input
 */
function generateCard() {
	// Get value of Student name from form input 
	const nameValue = document.getElementById("name").value;
	// Assign the value of student name to generated card
	document.getElementById("cardName").innerHTML = nameValue;
	
	// Get value of college name from form input 
	const collegeValue = document.getElementById("college").value;
	// Assign the value of college name to generated card
	document.getElementById("cardCollege").innerHTML = collegeValue;
	
	// Get value of location name from form input 
	const locationValue = document.getElementById("location").value;
	// Assign the value of location name to generated card
	document.getElementById("cardLocation").innerHTML = locationValue;
	
	// Display final generated card to user     
	document.getElementById("collegeCard").style.display = "block";
}