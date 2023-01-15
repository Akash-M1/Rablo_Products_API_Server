const products = require('../models/products');

//Controller for creating and pushing the product inside the database
exports.createProduct = (req,res)=>{
    products.create(req.body,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"Data Insertion Unsuccessful",
                err:err
            })
        }
        if(data){
            res.status(200).json({
                message:"Data Successfully Inserted",
                data:data
            })
        }
    })
}


//Controller for getting all the products listed in the Database
exports.getAllProducts = (req,res)=>{
    products.find().then((data)=>{
        res.status(200).json({
            message:"Successfull Fetch",
            data:data
        })
    })
}


//Controller for Updating the product with the given ID
exports.updateProductByProductId = (req,res)=>{
    const updateableValue = Object.keys(req.body).slice(1).reduce((result, key) => {
        result[key] = req.body[key];
        return result;
    }, {});
    products.updateOne({prod_id:req.body.prod_id},[{"$set":updateableValue}]).then((data)=>{
        res.status(200).json({
            message:"Successfully Updated",
            data:data
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"Updation Error",
            err:err
        })
    })
}

//Controller for Deleting the product with the given ID
exports.deleteProductByProductId = (req,res)=>{
    products.deleteOne(req.body).then((data)=>{
        res.status(200).json({
            message:"Product Deleted Successfully",
            data:data
        })
    })
    .catch((err)=>[
        res.status(500).json({
            message:"Deletion Error",
            err:err
        })
    ])
}

//Controller for Fetching all the Featured products
exports.getFeaturedProducts = (req,res)=>{
    products.find({"featured":true}).then((data)=>{
        res.status(200).json({
            message:"Successfully Fetched All Featured Products",
            data:data
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"Fetch Error",
            err:err
        })
    })
}

//Controller for fetching the products after applying the certain price filter in database
exports.getProductsAfterPriceFilter = (req,res)=>{
    products.find({"price":{"$lt":req.body.hcost}}).then((data)=>{
        res.status(200).json({
            message:"Found Products with price filters",
            data:data
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"Error in Fetch",
            err:err
        })
    })
}

//Controller for fetching the products after applying the certain rating filter in database
exports.getProductsAfterRatingFilter = (req,res)=>{
    products.find({"rating":{"$gt":req.body.lrating}}).then((data)=>{
        res.status(200).json({
            message:"Found Products with Rating filters",
            data:data
        })
    })
    .catch((err)=>{
        res.status(500).json({
            message:"Error in Fetch",
            err:err
        })
    })
}