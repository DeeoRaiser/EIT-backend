const express = require('express')
const app = express()
const productsRoutes = require('./routes/product.routes')



app.get('/', (req, res) => {
    res.send({
        msg: `Bienvenido a mi servidor express`,
        ok: true
    })
})

app.use(productsRoutes)

module.exports = app