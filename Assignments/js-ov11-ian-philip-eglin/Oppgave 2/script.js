// Declaring array with objectives
let students = [
    { name: "Ola", grade: "A" },
    { name: "Kari", grade: "C" },
    { name: "Knut", grade: "C" }
];

// Printing students and their respective grades to new
let studentElements = students.map((student) => student.name + " got " + student.grade);
console.log(studentElements);

// Printing out student Kari and her grades
let studentKari = students.map((student) => student.name == "Kari" ? student.name + " got " + student.grade : "").filter((student) => student != "");
console.log(studentKari);

// Checking if all the listed students got a C
let AllGradeC = students.every((student) => student.grade == "C");
console.log(AllGradeC == true ? "Did everyone get C: Yes" : "Did everyone get C: No");

// Printing the amount of students who got a C
let amountOfGradeC = students.filter((student) => student.grade == "C").length;
console.log("How many got C: " + amountOfGradeC);

// Printing the percentage of students who recieves a C
let percentageOfGradeC = students.filter((student) => student.grade == "C").length / students.length * 100;
console.log("Percentage of C grades: " + percentageOfGradeC);

//  Checking if any of the students got an A
let anyGradeA = students.some((student) => student.grade == "A");
console.log(anyGradeA == true ? "Did anyone get A: Yes" : "Did anyone get A: No");

// Checking if any of the students got an F
let anyGradeF = students.some((student) => student.grade == "F");
console.log(anyGradeF == true ? "Did anyone get F: Yes" : "Did anyone get F: No");