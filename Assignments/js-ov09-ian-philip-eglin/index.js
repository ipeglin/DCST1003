import fs from 'fs';

let studentList = document.getElementById('studentList');
let student_array = [];
let submitStudent = document.getElementById("submitStudent");

// Creating function for reading the json data file
function jsonReader(filePath, cb) {

  // Read the file
  fs.readFile(filePath, "utf-8", (err, fileData) => {

    // If error: return error
    if (err) {
      return cb && cb(err);
    }
    try {
      let object = JSON.parse(fileData);
      return cb && cb(null, object);
    }
    catch {
      return cb && cb(err);
    }
  })
}

// Run function jsonReader
jsonReader("src/data.json", (err, data) => {
  if (err) {
    console.log(err);
  }
  else {
    // Store data in students array
    let students = data;

    // duplicate array in student_array to make sure it is global
    student_array = data;

    // Create table shown on website
    for (let student of students) {
      let li = document.createElement('li');
      li.innerText = student.name + ', ' + student.email;
      studentList.appendChild(li);
    }
  }
})

// Creating a new object for the new student
function createStudentObject() {

  // Getting name and email of student from HTML
  let studentName = document.getElementById("nameInput").value;
  let studentEmail = document.getElementById("emailInput").value;

  // Creating the new object
  let newObject = {
    name: studentName,
    email: studentEmail
  }

  // Appending the new object to the array
  student_array.push(newObject);
  
}

// Do this on button click
submitStudent.onclick = () => {
  
  // Run function for creating object
  createStudentObject();

  // Write to json file. Writing full array since fs.writeFile will overwrite every line in file
  fs.writeFile("src/data.json", JSON.stringify(student_array, null, 2), err => {
    if (err) {
      console.log(err);
    }
    else {
      // Display to user that the write was successful
      console.log("File successfully written!");
    }
  });

  // Clear out the prevous list
  document.getElementById("studentList").innerHTML = "";

  // Read the json file over again and create new list of students
  jsonReader("src/data.json", (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      let students = data;
  
      // Creating list
      for (let student of students) {
        let li = document.createElement('li');
        li.innerText = student.name + ', ' + student.email;
        studentList.appendChild(li);
      }
    }
  })
}

