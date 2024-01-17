console.log("Script is working");

/*
Create an HTML page with student registry form with
First Name
Last Name
Age
Email
Create a student generator class
When the form is submitted, the input values should be compiled into a new object of type Student
This student should be added to a list (array) called "students"
After submitting the form the students array should be printed in the console
The input fields should be cleared
*/

const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const ageInput = document.querySelector("#age");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submitButton");

// console.log(firstNameInput, lastNameInput, ageInput, emailInput);
// console.log(submitButton);

// Creating new class that is called Student and will have 4 values for object.

class Student {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}

// Function that create a new student with 4 parametars everytime is called.

function generateStudent(firstName, lastName, age, email) {
  return new Student(firstName, lastName, age, email);
}

// Create array for adding a new student in.
let students = [];

// Second function that on click on button will create a new student with calling a genreateStudent function with input value from HTML and will push a new object to array and console log same array, after that inputs will be clear beacuse of empty string value on
// selectors.

submitButton.addEventListener("click", function () {
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const age = document.querySelector("#age").value;
  const email = document.querySelector("#email").value;

  const newStudent = generateStudent(firstName, lastName, age, email);

  students.push(newStudent);

  console.log(students);

  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#email").value = "";
});
