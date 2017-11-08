var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "o0ee8xcj6fbigv53",
    password: "lvgb8pt3wzxzml06",
    database: "burgers_db",
    port: "3306"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id: " + connection.threadId);
    return;
});

module.exports = connection;