const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send({
    msg:`Bienvenido a mi servidor express`,
    ok: true
})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
