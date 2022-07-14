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

getRolles = function(callback) {
    Roll.findAll().then(roll => callback(roll));
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

getMaximoUsers = function(callback) {
    User.findAll({
        attributes: [
            [sequelize.fn('MAX', sequelize.col('id_User')), 'id_User']

        ],
        raw: true
    }).then(result => callback(result));
}

//POST

postRegistros = function(request, callback) {
    User.create({
            FirstName: request.FirstName,
            LastName: request.LastName,
            Phone: request.Phone,
            Email: request.Email,
            Password: request.Password
        },

    ).then(callback(true));

};
postAsignacion = function(request, callback) {
    Asignacion.create({
        userIdUser: request.userIdUser,
        rollRollId: request.rollRollId
    }).then(callback(true));
}

postPrueba = function(request, callback) {
    Prueba.create({
        user_name: request.user_name,
        user_email: request.user_email,
        user_password: request.user_password
    }).then(callback());
}



module.exports.getAsignacion = getAsignacion;
module.exports.init = init;
module.exports.getUsers = getUsers;
module.exports.getRolles = getRolles;
module.exports.getMaximoUsers = getMaximoUsers;
module.exports.postPrueba = postPrueba;
module.exports.postRegistros = postRegistros;
module.exports.postAsignacion = postAsignacion;
// const Roll = require('./Roll');