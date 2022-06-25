const createTable = require('./craeteTable');
const sequelize = require('./configBd');
const User = require('./Table/User');
const Roll = require('./Table/Roll');
const Asignacion = require('./Table/Asignacion');


init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexión establecida exitosamente con mysql.");
    }).catch(err => {
        console.error("conexión no establecida: ", err);

    });
    User.hasMany(Asignacion);
    Asignacion.belongsTo(User);
    Roll.hasMany(Asignacion);
    Asignacion.belongsTo(Roll);
    // Asignacion.belongsTo(Roll);
    // createTable(Asignacion);
}

getUsers = function(callback) {
    User.findAll({ attributes: ['FirstName', 'LastName'] }).then(registros => callback(registros));
};

getAsignacion = function(callback) {
    Asignacion.findAll({
        include: [
            { model: User, attributes: ['FirstName'] },
            { model: Roll, attributes: ['roll_name'] },
        ],
        attributes: ['id_Asignacion'],
    }).then(asignacion => callback(asignacion));
}
module.exports.getAsignacion = getAsignacion;
module.exports.init = init;
module.exports.getUsers = getUsers;

// const Roll = require('./Roll');