const {con} = require('../../db/db_connection');

function Create(res) {

    /** con.connect((err) => {
    if(err) throw err;
    const sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, (error, result) =>{
        if(error) throw error;
        console.log(result)
    })
})*/

// INSERT MULTIPLE RECORDS

    con.connect((err) => {
        if (err) throw err;
        const sql = "INSERT into customers (name, address) VALUES ?";
        const values = [
            ['John', 'Highway 71'],
            ['Peter', 'Lowstreet 4'],
            ['Amy', 'Apple st 652'],
            ['Hannah', 'Mountain 21'],
            ['Michael', 'Valley 345'],
            ['Sandy', 'Ocean blvd 2'],
            ['Betty', 'Green Grass 1'],
            ['Richard', 'Sky st 331'],
            ['Susan', 'One way 98'],
            ['Vicky', 'Yellow Garden 2'],
            ['Ben', 'Park Lane 38'],
            ['William', 'Central st 954'],
            ['Chuck', 'Main Road 989'],
            ['Viola', 'Sideway 1633']
        ];
        con.query(sql, [values], (error, result) => {
            if (error) throw error;
            res.send(result)
        })
    })
}
module.exports = Create

