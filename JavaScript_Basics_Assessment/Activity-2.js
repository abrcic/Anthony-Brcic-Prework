var userInput = prompt("Enter name");

if (userInput.length >= 4) {
  alert("You have a long name");
} else if(userInput.length < 4 && userInput.length > 0) {
  alert("You have a short name");
} else {
  alert("Name cannot be blank");
}
