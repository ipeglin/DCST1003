import mysql from 'mysql';

// Setup MySQL-server connection pool
export let pool = mysql.createPool({
  host: 'mysql-ait.stud.idi.ntnu.no',
  user: 'YourUsernameHere', 
  password: 'YourPasswordHere', 
  database: 'YourDatabaseHere', 
  connectionLimit: 1, 
});
