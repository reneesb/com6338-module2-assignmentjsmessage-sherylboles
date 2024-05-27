// Your code here
function greet() {
    // Prompt to ask for the user's name
    var name = prompt("What is your name?");
    // Greet the user with her name
    alert("Hello, " + name);

    // Prompt to ask for the user's age
    var age = prompt("How old are you?");
    // Convert the user's answer into a number
    age = parseInt(age);

    // Confirm if the user has had a birthday this year
    var hasHadBirthday = confirm("Have you had a birthday yet this year?");

    // Get the current year
    var currentYear = new Date().getFullYear();

    // Calculate the year the user was born in
    var birthYear;
    if (hasHadBirthday) {
        birthYear = currentYear - age;
    } else {
        birthYear = currentYear - (age + 1);
    }

    // Display the year the user was born in
    alert("You were born in " + birthYear);
}

// Call the greet function
greet();
