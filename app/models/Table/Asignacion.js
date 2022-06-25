const { Sequelize } = require("sequelize");
const sequelize = require('../configBd');

const Asignacion = sequelize.define('asignacion', {
    id_Asignacion: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },


}, {
    freezeTableName: true,
    timestamps: false,

})


module.exports = Asignacion;