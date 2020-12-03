// CREATE THE MYSQL CONNECTION
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "jungleJimothy-1211",
    database: "burgers_db"
});

// MAKE A CONNECTION
connection.connect((err) => {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    };
    console.log("connected as id " + connection.threadId);
});

// EXPORT CONNECTION FOR THE ORM TO USE
module.exports = connection;