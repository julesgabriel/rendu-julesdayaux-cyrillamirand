const {con} = require('../../db/db_connection')

function Join(res){
    con.connect(err => {
        if(err) throw err;
        const sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
        // Selectionne l'utilisateur par son nom et le définit comme 'user', idem pour le nom du produit en tant que favori
        // des tables users JOIN (faire une jointure) sur la table products sur le users.favorite product = products.id
        con.query(sql, (error, results) => {
            if(error) throw error;
            res.send(results)
        })
    })
}

module.exports = Join
