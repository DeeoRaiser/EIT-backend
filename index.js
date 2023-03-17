const app = require("./app")

const port = 3000
const dbURL = 'mongodb+srv://admin:xeoGbG65sGQtpDMZ@cluster0.m236azf.mongodb.net/?retryWrites=true&w=majority'

const mongoose = require('mongoose')

mongoose.connect(dbURL).then(()=>{
    console.log('Coneccion correcta a')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })

})
    .catch((error)=> {
        console.log(error)
    })

