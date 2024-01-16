console.log("Script is working");

class Student {
  constructor(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;
  }

  getAge() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const age = currentYear - this.birthYear;
    return age;
  }

  getInfo() {
    return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
  }
  getGradesAverage() {
    let sumOfGrade = 0;
    for (let i = 0; i < this.grades.length; i++) {
      let grade = this.grades[i];
      sumOfGrade += grade;
    }
    const averageGrade = sumOfGrade / this.grades.length;
    return averageGrade;
  }
}

const student = new Student("Bojan", "Jankov", 2004, "SEDC", [3, 2, 4, 3, 5]);
const studentTwo = new Student(
  "Ana",
  "Jovanoska",
  2005,
  "SEDC",
  [3, 2, 5, 1, 3]
);
const studentThree = new Student(
  "Ivo",
  "Sokoloski",
  2001,
  "Brainster",
  [2.4, 3, 1, 2]
);

const arrayOfStudents = [student, studentTwo, studentThree];
console.log(arrayOfStudents);

console.log(student.getAge());
console.log(student.getInfo());
console.log(student.getGradesAverage());

console.log(studentTwo.getAge());
console.log(studentTwo.getInfo());
console.log(studentTwo.getGradesAverage());

console.log(studentThree.getAge());
console.log(studentThree.getInfo());
console.log(studentThree.getGradesAverage());
