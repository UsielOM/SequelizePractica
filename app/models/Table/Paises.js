const { Sequelize } = require("sequelize");
const sequelize = require('../configBd');

const Paises = sequelize.define('paises', {
    id_Pais: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true

    },
    Nombre_Pais: {
        type: Sequelize.DataTypes.STRING,
    }

}, {
    freezeTableName: true,
    timestamps: false
});


module.exports = Paises;