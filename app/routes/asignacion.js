module.exports = function(app, mySql) {
    app.get('/join', (req, res) => {
        mySql.getAsignacion(function(result) {
            res.send(result);
        })
    })
}