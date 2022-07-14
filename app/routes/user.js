module.exports = function(app, mySql) {

    app.get('/Users', (req, res) => {
        mySql.getUsers(function(result) {
            res.send(result);
        })
    })

    app.post('/post/prueba', (req, res) => {
        mySql.postPrueba(req.body, function(result) {
            res.send(result);
        })
    })
    app.post("/post/registro", (req, res) => {
        mySql.postRegistros(req.body, function(result) {
            res.send(result);
        })
    })

    app.get('/Maximo', (req, res) => {
        mySql.getMaximoUsers(function(result) {
            res.send(result);
        });
    });
}