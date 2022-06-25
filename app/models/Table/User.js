const { DataTypes } = require("sequelize");
const sequelize = require('../configBd');

const User = sequelize.define('user', {
    id_User: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: { type: DataTypes.STRING },
    LastName: { type: DataTypes.STRING },
    Email: { type: DataTypes.STRING },
    Phone: { type: DataTypes.STRING },
    Password: { type: DataTypes.STRING },
    Cpassword: { type: DataTypes.STRING }
}, {
    freezeTableName: true,
    timestamps: false
});


module.exports = User;