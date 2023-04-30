import mongoose, {models} from "mongoose"

export const ParoductSchema = new mongoose.Schema (
    {

        name : {
            type : String,
            require: true,
            maxLength : 60,
        },

        image : {
            type : String,
            require: true,
        },

        price : {
            type : Number,
            require: true,
        },

        description : {
            type : String,
            require: true,
            maxLength : 100,
        },

    }, {timestamps: true}
);

const Product = models.Product || mongoose.model('Product', ParoductSchema)

export default Product;