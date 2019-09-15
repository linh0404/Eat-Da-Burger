var mysql = require ("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "pae.mepaim2",
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err) {
        console.error("error connectin: " + err.stack):
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connecton;