var mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else {
//     connection = mysql.createConnection({
//         host: "vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//         user: "o0ee8xcj6fbigv53",
//         password: "lvgb8pt3wzxzml06",
//         port: 3306,
//         database: "burgers_db"
//     });
// }

connection = mysql.createConnection({
    host: "vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "o0ee8xcj6fbigv53",
    password: "lvgb8pt3wzxzml06",
    port: 3306,
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id: " + connection.threadId);
    return;
});

module.exports = connection;