const {con} = require('../db/db_connection');

function CreateTables(){
    /**con.connect((err) => {
    if (err) throw err;
    let sql = "CREATE TABLE test (name VARCHAR(255), address VARCHAR(255))";
        // Toujours créer une clé primaire (id) qui s'increment aumtomatiquement
    let sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, (error, result) => {
        if (error) {
            if (error.sqlMessage === "Table 'customers' already exists") {
                sql = "ALTER TABLE customers ADD COLUMN modifier VARCHAR(255)";
                con.query(sql, (erreur, res) => {
                    if (erreur) throw erreur;
                    console.log('Table modifiée')
                })
            } else {
                throw error;
            }
        } else {
            console.log('Table créée')
        }
    })
})*/

// for the next exercices

    con.connect(err => {
        if (err) throw err;
        const customers = "CREATE TABLE IF NOT EXISTS customers (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), address VARCHAR(255)); ";
        const users = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), favorite_product INT)";
        const products = "CREATE TABLE IF NOT EXISTS products (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255));";
        con.query(customers, (error, results) => {
            if (error) throw error;
            console.log(results)
        })
        con.query(users, (error, results) => {
            if (error) throw error;
            console.log(results)
        })
        con.query(products, (error, results) => {
            if (error) throw error;
            console.log(results)
        })
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
        const sqlCustomers = "INSERT INTO customers (name, address) VALUES ? "
        con.query(sqlCustomers, [values], (error, results) => {
            if(error) throw error;
            console.log(results)
        })
        const valueUsers = [
            ['John', 1],
            ['Peter', 2],
            ['Amy', 3],
        ]
        const sqlUsers = "INSERT into users (name, favorite_product) VALUES ?"
        con.query(sqlUsers, [valueUsers], (a, result) => {
            if(a) throw a;
            console.log(result)
        })
        const valueProducts = [
            ['Chocolate Heaven' ],
            ['Tasty Lemons' ],
            [ 'Vanilla Dreams'],
        ]
        const sqlProducts = "INSERT into products (name) VALUES ?"
        con.query(sqlProducts, [valueProducts],  (b, resultat) => {
            if(b) throw b;
            console.log(resultat)
        })
    })
}

module.exports = CreateTables

