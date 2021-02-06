const {con} = require('../../db/db_connection');

function Update(res) {
    con.connect(err => {
        if (err) throw err;
        const sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'VALLEY 345'";
        // DON'T FORGET THE WHERE "=" OR ALL THE RECORDS WILL BE UPDATED
        con.query(sql, (error, results) => {
            if (error) throw error;
            res.send(results)
        })
    })
}

module.exports = Update

