const {con} = require('../db/db_connection');

function Drop(res){
    con.connect(err => {
        if(err) throw err;
        const sql = "DROP TABLE customers";
        con.query(sql, (error, results) => {
            if(error) throw error;
            res.send(results)
        })
    })
}

module.exports = Drop