function lunch() {
	var choice = prompt("What do you want for lunch?","Type your lunch choice here").toUpperCase();

	if (choice === 'SOUP'){
		alert("Delicious! Tomato's my favorite.");
	} else if (choice === 'PASTA') {
	    alert("Yum, my favourite!");
	} else {
		alert("Sorry, I didn't understand that.");
	}

}


function monsters() {
	var choice1 = prompt("You are walking in the forest, when a monster jumps out. Do you FIGHT, pay or run?","Type your answer here").toUpperCase();

	if (choice1 === "FIGHT") {
		var choice2 = prompt("Are you strong?","Yes or No").toUpperCase();
		if (choice2 === "YES") {
			alert("You beat the monster!");
		} else {
			// What happens next?
		}

	}
}

document.getElementById("lunch").onclick = lunch;

document.getElementById("monsters").onclick = monsters;