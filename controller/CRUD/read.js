const {con} = require('../../db/db_connection');

function Read(res) {

// Select ALL and display them

/** con.connect((err) => {
    if(err) throw err;
    const sql = "SELECT * from customers";
    con.query(sql, (error, result) => {
        if(error) throw error;
        console.log(result)
    })
})
 */

// Select only one attribute and display it

/** con.connect((err) => {
    if(err) throw err;
    const sql = "SELECT name from customers";
    con.query(sql, (error, result, fields) => {
        if(error) throw error;
        console.log(result) // return all the name
        //console.log(fields) //give the informations about the fields searched it is an array so you can check whatever you want
    })
})*/

// Select with a filter

/** con.connect((err) => {
    if(err) throw err;
    const sql = "SELECT * from customers WHERE address = 'Park Lane 38'";
    con.query(sql, (error, result) => {
        if(error) throw error;
        console.log(result) // return all customers address that have Park Lane 38
    })
})
 */

// Like statement

/** con.connect(err => {
    if (err) throw err;
    con.query("SELECT * from customers WHERE address LIKE 'S%", (error, result) => {
        if (error) throw error;
        console.log(result) // get all the row where address begin with a S
    })
})*/


// avoid injections!


/**con.connect(err => {
    if (err) throw err;
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ' + require('mysql').escape(adr);
    // No need to import the complete dependencies just for that escape
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
})*/

// Limit the number of records returned

/**con.connect(err => {
    if(err) throw err;
    const sql = "SELECT * from customers ORDER BY id DESC LIMIT 5 ";
    // Possibility of beginning from the end and limit to 5
    con.query(sql, (error, results) => {
        if(error) throw error;
        console.log(results)
    })
})*/

// Choose preicsely where we want to begin

    con.connect(err => {
        if (err) throw err;
        const sql = "SELECT * from customers LIMIT 2, 5"; // === LIMIT 5 OFFSET 2
        // It begins at id 3 (because an array starts at 0)
        con.query(sql, (error, results) => {
            if (error) throw error;
            res.send(results)
        })
    })
}

module.exports = Read



