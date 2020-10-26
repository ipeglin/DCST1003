import { pool } from './mysql-pool';

// Declaring list element and buttons
let studentList = document.getElementById('studentList');
let submitButton = document.getElementById('submitStudent');
let deleteButton = document.getElementById('deleteStudent');

// Printing list on website
drawTable();

// Function used to print list to website
function drawTable() {
  // Clearing out the list currently on website
  studentList.innerHTML = '';

  // Perform select-query that fetches all the Students table rows from the database
  pool.query('SELECT * FROM Students', (error, results) => {
    if (error) return console.error(error); // If error, show error in console (in red text) and return

    // Create a new li element for each student in database
    for (let student of results) {
      let li = document.createElement('li');
      li.innerText = student.name + ', ' + student.email;
      studentList.appendChild(li);
    }
  });
}

// Clear out input fields in HTML on button click
let clearInputs = () => {
  document.getElementById('nameInput').value = '';
  document.getElementById('emailInput').value = '';
};

// Append the student to the database
submitButton.onclick = () => {
  // Getting the name and email of the student
  let studentName = document.getElementById('nameInput').value;
  let studentEmail = document.getElementById('emailInput').value;

  // SQL syntax string to be input in pool.query
  let insertString =
    "INSERT INTO Students (name, email) VALUES ('" + studentName + "', '" + studentEmail + "')";
  // Appending the student to the SQL database with query
  pool.query(insertString, (error, results) => {
    if (error) return console.error(error);
  });
  // Update the student list on website
  drawTable();

  // Clear the input fields
  clearInputs();
};

// Delete the students from database
deleteButton.onclick = () => {
  // Getting the name and email of the student
  let studentName = document.getElementById('nameInput').value;
  let studentEmail = document.getElementById('emailInput').value;

  // Reading all the student currently in the SQL database
  pool.query('SELECT * FROM Students', (error, results) => {
    if (error) return console.error(error);

    // For each student that is in the database: do...
    for (let student of results) {
      // If the student name and email maches the listed student in the database: do...
      if (studentName == student.name && studentEmail == student.email) {
        // SQL syntax string to be input in pool.query
        let deleteString = 'DELETE FROM Students WHERE id=' + student.id;
        // Deleting the student from the SQL database with query
        pool.query(deleteString, (error, results) => {
          if (error) return console.error(error);
        });
      }
    }
    // Update the student list on website
    drawTable();

    // Clear the input fields
    clearInputs();
  });
};
