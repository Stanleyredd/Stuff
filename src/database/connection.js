const Sequelize = require("sequelize");


const sequelize = new Sequelize("stuff", 'stanley', 'root',
    {
        host: 'localhost',
        dialect: "postgresql"
    });


module.exports = sequelize;


global.sequelize = sequelize;



