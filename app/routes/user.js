module.exports = function(app, mySql) {

    app.get('/Users', (req, res) => {
        mySql.getUsers(function(result) {
            res.send(result);
        })
    })
}