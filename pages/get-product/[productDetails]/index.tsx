import SingalProducts from "@/components/SingalProducts";
import Product from "@/models/Products";
import { data} from "@/types/data-type";
import { dbConnect } from "@/util/mongo";
import mongoose from "mongoose";
import Head from "next/head";

type singalProps = {
    idSingalProduct : data
}
    const SingalProductId = ({idSingalProduct} : singalProps) => {

    return (
        <div>
            <Head>
            <title>Product-details</title>
            <meta name="products-details" content="product-description"/>
            <link rel="short-cut-icone" href="favicon.ico"/>
            </Head>
            <SingalProducts idSingalProduct={idSingalProduct}/>
        </div>
    )

    }

    export default SingalProductId

    export async function getStaticPaths() {

        dbConnect();

        const findIdProducts = await Product.find({}, {_id : 1})
        console.log(findIdProducts);

            return {
                fallback : false,
                paths : findIdProducts.map((pro) => ({
                        params : {productDetails : pro._id.toString()}
                    }))
                
            }      
    }

    export async function getStaticProps(context : any) {

        const productDetails = context.params.productDetails

        const selectedProduct = await Product.findById({
            _id : new mongoose.Types.ObjectId(productDetails)
        })

        return {
            props : {
                idSingalProduct : {
                id : selectedProduct._id.toString(),
                name : selectedProduct.name,
                image : selectedProduct.image,
                price : selectedProduct.price,
                description : selectedProduct.description,
            }}
        }
    }


