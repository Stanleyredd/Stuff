const Sequelize = require("sequelize");

module.exports = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        // type: Sequelize.STRING(35),
        type: Sequelize.CHAR(35),
        allowNull: false,
        unique: true
    },
    passwd: {
        // type: Sequelize.STRING(20),
        type: Sequelize.CHAR(20),
        allowNull: false
    }
});