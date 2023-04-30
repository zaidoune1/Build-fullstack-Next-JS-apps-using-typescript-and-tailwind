import mongoose from "mongoose";
import Error from "next/error";

const MONGO_URI = process.env.MONGO_URI

const errorMessage : any = "invalid uri"

if(!MONGO_URI) {

    throw new Error(errorMessage) 
}

export const  dbConnect = async () => {

    try{

        const {connection} : any = await mongoose.connect(MONGO_URI)
        if(connection.readyState) {
            return Promise.resolve(true)
        }

    }catch(error){
        Promise.reject(error)
    }

} 