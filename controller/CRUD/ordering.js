const {con} = require('../../db/db_connection');

// Order all the results bien the name from A to Z use "DESC" for making from Z to A

function Ordering(res) {
    /** con.connect(err => {
    if(err)throw err;
    con.query("SELECT * from customers ORDER BY name", (error, result) => {
        if(error) throw error;
        console.log(result)
    })
})
     */

    con.connect(err => {
        if (err) throw err;
        con.query('SELECT * from customers ORDER BY id DESC', (error, result) => {
            if (error) throw error;
            res.send(result)
        })
    })
}

module.exports = Ordering



