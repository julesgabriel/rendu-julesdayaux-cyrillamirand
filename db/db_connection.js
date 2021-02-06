var mysql = require('mysql')
// CONNECT TO DATABASE
var con = mysql.createConnection({
    socketPath : '/Applications/Mamp/tmp/mysql/mysql.sock',
    host: "localhost",
    user: "root",
    password: "root",
    //database: "mydb" Uncomment once route "/createDb" is done
})
module.exports.con = con // export de variable to use it somewhere else