const { Sequelize } = require("sequelize");
const sequelize = require('../configBd');

const Roll = sequelize.define('roll', {
    roll_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roll_name: {
        type: Sequelize.DataTypes.STRING,

    }

}, {
    freezeTableName: true,
    timestamps: false
})


module.exports = Roll;