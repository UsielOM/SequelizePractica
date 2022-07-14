module.exports = function(app, sql) {
    app.get('/Rolls', (req, res) => {
        sql.getRolles(function(result) {
            res.send(result);
        });
    });
}