const { Client } = require('pg')

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "data_siswa",
    password: "postgres",
    port: 5432
})

module.exports = client
