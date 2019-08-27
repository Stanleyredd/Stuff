'use strict';


module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("users", {
            id:{
                type: Sequelize.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: Sequelize.CHAR(35),
                allowNull: false,
                unique: true
            },
            passwd: {
                type: Sequelize.CHAR(20),
                allowNull: false

            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("users");
    }
};
