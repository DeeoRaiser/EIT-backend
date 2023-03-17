const Product = require('./../schemas/products.schemas')


const getAllProduct = (req, res)=>{

    Product.find().then(function(productos){
        res.status(200).send({
            msg: 'Productos obtenidos correctamente',
            productos: productos
        })
    })
    
}


function deleteProduct(req, res){
    res.status(200).send('Productos borrado correctamente !!!!')
}



module.exports = {
    getAllProduct, deleteProduct
}