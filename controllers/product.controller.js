import Product from "../models/product.model.js"

export const getProducts = async(req,res)=>{
    try{
         const product = await Product.find()
         res.status(200).json(product)
    }catch (error){
        res.status(500).json({message:error.message})
    }
}
export const getProduct = async(req,res)=>{

    try {
        const {id} = req.params;
          const product= await Product.findById(id)
          res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}
export const createProduct = async(req,res)=>{
    try{
         const product= await Product.create(req.body)
         res.status(200).json(product)
    }catch (error){
         console.log(error.message)
         res.status(500).json({message: error.message})
    }
};

export const updateProduct =async (req,res) =>{
    const {id}=req.params
    try {
        const {_id=id,...body}=req.body
        const product = await Product.updateOne({_id},{$set:body})
         if(!product){
            res.status(404).json({message:`cannot find any product with Id ${_id} `})
         }
         const updateProduct = await Product.findById(_id);
         res.status(200).json(updateProduct)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}; 

export const deleteProduct = async (req,res) =>{
    try {
        const {id}=req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({message:`we cannot find this id ${id}`})
        }
        res.status(200).json(product)
        
    } catch (error) {
        res.status(200).json({message:error.message})
    }
      
}