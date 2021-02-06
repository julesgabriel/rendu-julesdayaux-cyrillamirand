const {con} = require('../../db/db_connection');

function Delete(res) {
    con.connect(err => {
        if (err) throw err;
        const sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
        con.query(sql, (error, result) => {
            if (error) throw error;
            res.send(result)
        })
    })
}

module.exports = Delete
