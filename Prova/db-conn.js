const knex = require("knex");

module.exports = knex({
    client: 'mysql2',
    connection: {
        host: 8080,
        port: 3306,
        user: "root",
        passoword:"",
        database: "BIBLIOTECA"
    }
})