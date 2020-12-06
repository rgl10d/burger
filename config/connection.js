// CREATE THE MYSQL CONNECTION
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connetion = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "jungleJimothy-1211",
        database: "burgers_db"
    });
};

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