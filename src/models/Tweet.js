const Sequelize = require("sequelize");

module.exports = sequelize.define("tweets", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    // content: Sequelize.STRING(300)
    content: Sequelize.CHAR(300)
});



