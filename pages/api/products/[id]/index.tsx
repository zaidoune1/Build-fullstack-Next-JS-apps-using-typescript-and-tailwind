import Product from "@/models/Products";
import { dbConnect } from "@/util/mongo";
import { Query } from "mongoose";

export default async function endPoints(req : any, res : any) {
    
    dbConnect();

    const {method} = req
    const {id}=  req.query

    if(method === 'PUT') {
        try{
            const findProductUpdate = await Product.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true,
            });
            res.status(200).json(findProductUpdate);

        }catch(error) {
            res.status(500).json(error)
        }
    }

    if(method === 'DELETE') {
        try{
            const {id} = req.query
            await Product.findByIdAndDelete(id)
            res.status(200).json("The product has been deleted!")
        }catch(error){
            res.status(500).json(error)
        }
    }

}