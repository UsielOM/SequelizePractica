const createTable = require('./craeteTable');
const sequelize = require('./configBd');
const User = require('./Table/User');
const Roll = require('./Table/Roll');
const Asignacion = require('./Table/Asignacion');
const relaciones = require('./relaciones');
const Prueba = require('./Table/Prueba');


init = function() {
    sequelize.authenticate().then(() => {
        console.log("Conexión establecida exitosamente con mysql.");
    }).catch(err => {
        console.error("conexión no establecida: ", err);

    });
    relaciones();

    // createTable(Prueba);
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

//POST

postUsuarios = function(request, callback) {
    Usuarios.create({
        Nombre: request.Nombre,
        Apellido: request.Apellido,
        Telefono: request.Telefono,
        Correo: request.Correo
    }).then(callback(true));

};

postPrueba = function(request, callback) {
    Prueba.create({
        user_name: request.user_name,
        user_email: request.user_email,
        user_password: request.user_password
    }).then(callback(true));
}



module.exports.getAsignacion = getAsignacion;
module.exports.init = init;
module.exports.getUsers = getUsers;
module.exports.postPrueba = postPrueba;
// const Roll = require('./Roll');