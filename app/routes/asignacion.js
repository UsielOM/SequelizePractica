module.exports = function(app, mySql) {
    app.get('/join', (req, res) => {
        mySql.getAsignacion(function(result) {
            res.send(result);
        })
    })

    app.post("/post/asignacion", (req, res) => {
        mySql.postAsignacion(req.body, function(result) {
            res.send(result);
        })
    })


}