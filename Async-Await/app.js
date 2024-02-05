console.log("Scirpt is working");

// Async/HOF Exercise / Homework
// Requirements
// Using only async/await syntax fetch the students from this endpoing "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

// After you have the data display the following informations in the HTML

// ONLY USE HIGHER ORDER FUNCTIONS
// USE AYSNC/AWAIT
// DO NOT MUTATE OR CHANGE OR SORT THE ORIGINAL DATA

// Show the average age and average grade of all students combined
// Show the number of students that are over 60 and the number of students that are under 30 years old
// Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
// Find the student named Arthur Cadore and display all of his information
// Find the oldest and youngest student and display their information on the screen
// Show a list of the full names of students that have a last name longer than 8 characters
// Show a list of the top 10 best students by average grade
// Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)

const fetchData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
  );
  let data = await response.json();
  console.log(data);

  renderHTML(data);
  return data;
};

const renderHTML = (studentsDetalis) => {
  const dataContainer = document.querySelector("#data-container");

  // Show the average age and average grade of all students combined

  const mapAverageArray = studentsDetalis
    .map((student) => {
      return student.averageGrade;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  const averageGradeResult = mapAverageArray / studentsDetalis.length;

  dataContainer.innerHTML += `<h2>Average grade of all students: ${averageGradeResult}</h2>`;

  const mapAverageArrayOfAge = studentsDetalis
    .map((student) => {
      return student.age;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  const ageResult = mapAverageArrayOfAge / studentsDetalis.length;

  dataContainer.innerHTML += `<h2>Average age of all students: ${ageResult}</h2>`;

  // Show the number of students that are over 60 and the number of students that are under 30 years old

  const numberOfStudentsOverSixty = studentsDetalis.filter((student) => {
    return student.age > 60;
  });

  dataContainer.innerHTML += `<h2>Number of students that are over 60 years: ${numberOfStudentsOverSixty.length}</h2>`;

  const numberOfStudentsUnderThirty = studentsDetalis.filter((student) => {
    return student.age < 30;
  });

  dataContainer.innerHTML += `<h2>Number of students that are under 30 years: ${numberOfStudentsUnderThirty.length}</h2>`;

  // Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above

  const listContainer = document.querySelector(".list");

  const students = studentsDetalis.filter((student) => {
    return student.age > 30 && student.averageGrade === 4;
  });

  listContainer.innerHTML = students
    .map((student) => `<li>Name: ${student.firstName} ${student.lastName}</li>`)
    .join("");

  // Find the student named Arthur Cadore and display all of his information
  // I will use filter for this function beacuse return array with one element and then with map will print information in HTML

  const findArthur = studentsDetalis.filter((student) => {
    return student.firstName === "Arthur" && student.lastName === "Cadore";
  });

  const container = document.querySelector(".container");

  container.innerHTML = findArthur
    .map(
      (student) =>
        `<h2>${student.firstName} ${student.lastName} from ${student.city}, Age: ${student.age}.</h2>`
    )
    .join("");

  // Find the oldest and youngest student and display their information on the screen

  // Oldest

  const dataContainerOldest = document.querySelector(".list-oldest");
  const olderStudentAge = studentsDetalis
    .map((student) => {
      return student.age;
    })
    .reduce(
      (acc, value) => {
        if (acc.max < value) {
          acc.max = value;
        }

        return acc;
      },
      { max: -Infinity }
    );

  dataContainerOldest.innerHTML += studentsDetalis
    .filter((student) => {
      return student.age === olderStudentAge.max;
    })
    .map((student) => {
      return `<li>${student.firstName} ${student.lastName}, Age: ${student.age}</li>`;
    });

  // Youngest

  const dataContainerYounger = document.querySelector(".list-youngest");
  const youngerStudentAge = studentsDetalis
    .map((student) => {
      return student.age;
    })
    .reduce(
      (acc, value) => {
        if (acc.min > value) {
          acc.min = value;
        }

        return acc;
      },
      { min: +Infinity }
    );

  dataContainerYounger.innerHTML += studentsDetalis
    .filter((student) => {
      return student.age === youngerStudentAge.min;
    })
    .map((student) => {
      return `<li>${student.firstName} ${student.lastName}, Age: ${student.age}</li>`;
    });

  // Show a list of the full names of students that have a last name longer than 8 characters

  const ulList = document.querySelector(".container-list");

  const studentsWithLongLastName = studentsDetalis.filter((student) => {
    return student.lastName.length > 8;
  });

  ulList.innerHTML = studentsWithLongLastName
    .map((student) => `<li>${student.firstName} ${student.lastName}</li>`)
    .join("");

  // Show a list of the top 10 best students by average grade

  const bestList = document.querySelector(".best-list");

  const bestStudents = studentsDetalis.filter((student) => {
    return student.averageGrade === 5;
  });
  bestList.innerHTML += bestStudents.slice(0, 10).map((student) => {
    return `<li>${student.firstName} ${student.lastName} with average grade of ${student.averageGrade}</li>`;
  });

  // Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)

  const listAverageGradeOfOne = document.querySelector(".averaGradeOfOne");
  const stundetsButton = document.querySelector(".buttonForGradeOne");

  stundetsButton.addEventListener("click", () => {
    const studentsWithAverageGradeOfOne = studentsDetalis.filter((student) => {
      return student.averageGrade === 1;
    });

    listAverageGradeOfOne.innerHTML += studentsWithAverageGradeOfOne.map(
      (student) => {
        return `<li>${student.firstName} ${student.lastName}</li>`;
      }
    );
  });

  const adultList = document.querySelector(".adultStudents");
  const adultBtn = document.querySelector(".buttonAdultStudents");

  adultBtn.addEventListener("click", () => {
    const adultStudents = studentsDetalis.filter((student) => {
      return student.age >= 18;
    });
    console.log(adultStudents);

    adultList.innerHTML += adultStudents.map((student) => {
      return `<li>${student.firstName} ${student.lastName}</li>`;
    });
  });
};

fetchData();
