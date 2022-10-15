var typeorm = require("typeorm")

var dataSource = new typeorm.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "example",
    database: "dbbackend",
    entities: [require("./entity/User")],
})

module.exports = dataSource;