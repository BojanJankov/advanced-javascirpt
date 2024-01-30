console.log("Script is working");

/*
Homework 1
There is a JSON file with students. Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
*/

const data_url =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

const fetchData = () => {
  fetch(data_url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      console.log(averageGrade(data));
      console.log(femaleNameAndAverageGrade(data));
      console.log(maleStudentsInSkopje(data));
      console.log(averageGradeOfFemaleStudents(data));
      console.log(studentsWithBLetter(data));
    });
};

const averageGrade = (data) => {
  const filterAverageGrade = data.filter((student) => student.averageGrade > 3);
  return filterAverageGrade;
};

const femaleNameAndAverageGrade = (data) => {
  const filterAverageGrade = data
    .filter(
      (student) => student.gender === "Female" && student.averageGrade === 5
    )
    .map((student) => {
      return `${student.firstName}`;
    });
  return filterAverageGrade;
};

const maleStudentsInSkopje = (data) => {
  const filterMaleStudents = data
    .filter(
      (student) =>
        student.gender === "Male" &&
        student.city === "Skopje" &&
        student.age > 18
    )
    .map((student) => {
      return `${student.firstName} ${student.lastName}`;
    });
  return filterMaleStudents;
};

const averageGradeOfFemaleStudents = (data) => {
  const averageFemaleGrades = data
    .filter((student) => student.gender === "Female" && student.age > 24)
    .map((student) => {
      return `${student.firstName}:${student.averageGrade}`;
    });
  return averageFemaleGrades;
};

const studentsWithBLetter = (data) => {
  const maleStudentsWithB = data
    .filter(
      (student) =>
        student.gender === "Male" &&
        student.averageGrade > 2 &&
        student.firstName.startsWith("B")
    )
    .map((student) => {
      return `${student.firstName}`;
    });
  return maleStudentsWithB;
};

fetchData();
