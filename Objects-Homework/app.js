console.log("Script is working");

/*
Exercise/Homework
Task 1
Create 3 classes: Academy, Student and Subject.

Their structure should look like this:

Academy
name - string
students - array of Students
subjects - array of Subjects
start - Date when it starts
end - Date when it ends
numberOfClasses - number of subjects multipled by 10, not settable*
printStudents - method that prints all students in console
printSubjects - method that prints all subjects in console
Subject
title - string
numberOfClasses - default 10, not settable*
isElective - boolean
academy - Academy object
students - array of Students
overrideClasses - method that accepts a number and rewrites the numberOfClasses property with that number. The number can't be smaller than 3.
Student
firstName - string
lastName - string
age - number
completedSubjects - emptyArray as default, not settable*
academy - null as default, not settable*
currentSubject - null as default, not settable*
startAcademy - method that accepts Academy object that it sets to the Academy property of the student
startSubject - method that accepts Subject object and adds it to the currentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy.
 If not, give error in console and do not set the CurrentSubject property
Task 2
Make the functions startAcademy and startSubject dynamic.

startAcademy - When the student calls startAcademy, the student should also be added to the Academy property students ( The academy that he is starting )
startSubject - When the student calls startSubject the student should also be added to the Subject property students ( The subject that he is starting ). If there was another subject in the CurrentSubject property,
 that subject should be transferred to completedSubjects and then add the new Subject
*/

class Academy {
  constructor(name, students, subjects, startData, endDate, numberOfClases) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = startData;
    this.end = endDate;
    this.numberOfClases = numberOfClases * 10;
  }

  printStudents() {
    this.students.forEach((student) => {
      console.log(student);
    });
  }
  printSubjects() {
    this.subjects.forEach((subject) => {
      console.log(subject);
    });
  }
}

const academyOne = new Academy("SEDC", [], [], "17.10.2023", "20.10.2024", 10);

console.log(academyOne);

// console.log(academyOne.printStudents());

// console.log(academyOne.printSubjects());

class Subject {
  numberOfClasses = 10;
  constructor(title, isElective, academy, students) {
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
  }

  overrideClasses(number) {
    if (number > 3) {
      this.numberOfClasses = number;
    }
  }
}

const subjectOne = new Subject("NodeJs", 10, false, academyOne, []);

// console.log(subjectOne);

subjectOne.overrideClasses(12);

// console.log(subjectOne);

class Student {
  academy = null;
  currentSubject = null;
  completedSubject = [];
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  startAcademy(academyObejct) {
    this.academy = academyObejct && academyObejct.students.push(this);
  }

  startSubject(subjectObject) {
    if (
      this.academy &&
      academyOne.subjects.some((subject) => {
        return subject === subjectObject.title;
      })
    ) {
      return subjectOne.students.push(this);
    }
    if (!this.currentSubject) {
      return (this.currentSubject = subjectObject);
    }
    if (this.currentSubject) {
      return this.completedSubject.push(this.currentSubject);
    }
  }
}

const studentOne = new Student("David", "Davidovski", 20);

// console.log(academyOne);

studentOne.startAcademy(academyOne);

// console.log(academyOne);

// console.log(subjectOne);

studentOne.startSubject(subjectOne);

console.log(subjectOne);

console.log(studentOne);

// console.log(academyOne.students);
