const {con} = require('../db/db_connection');

function CreateDb(res){
    con.connect((err) => {
        if (err) throw err;
        con.query("CREATE DATABASE mydb", (err, result) => { // QUERY SQL
            if (err) throw err;
            res.send("Database Created")
        })
    })
}

module.exports = CreateDb