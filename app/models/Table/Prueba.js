const { Sequelize } = require("sequelize");
const sequelize = require('../configBd');

const Prueba = sequelize.define('prueba', {
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: Sequelize.DataTypes.STRING,

    },
    user_email: {
        type: Sequelize.DataTypes.STRING,

    },
    user_password: {
        type: Sequelize.DataTypes.STRING,

    },
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Prueba;