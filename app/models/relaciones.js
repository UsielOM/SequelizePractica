const User = require('./Table/User');
const Roll = require('./Table/Roll');
const Asignacion = require('./Table/Asignacion');

module.exports = function() {

    User.hasMany(Asignacion);
    Asignacion.belongsTo(User);
    Roll.hasMany(Asignacion);
    Asignacion.belongsTo(Roll);
}