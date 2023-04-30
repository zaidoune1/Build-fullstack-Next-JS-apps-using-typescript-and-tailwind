import AddNewProducts from '@/components/AddNewProducts'
import Product from '@/models/Products'
import { dbConnect } from '@/util/mongo'
import { error } from 'console'
import mongoose from 'mongoose'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

    const Update = ({productsProps, id} : any) => {

        const router = useRouter();

        const urlUpadate = `http://localhost:3000/api/products/${id}`

        const handelUpdate = async (oneProduct : any) => {

            await fetch(urlUpadate, {
                method : 'PUT',
                    headers: {
                        'Content-Type' : 'application/json',
                    },

                    body : JSON.stringify(oneProduct)

            }).then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
            }).catch((error) => {
                console.log(error)
            })

            router.push('/')
        }
    return (
            <main className='w-[50%] border shadow-2xl mt-[40px] mx-auto flex justify-center items-center'>
        <Head>
            <title>Add-new-product</title>
            <meta name="new-product" content="Add-new-product"/>
            <link rel="short-cut-icone" href="favicon.ico"/>
        </Head>
        <AddNewProducts productsProps={productsProps} handelUpdate={handelUpdate} />
    </main>
    )
    }

export default Update;

    export async function getStaticPaths() {
        dbConnect();
        const getIdProducts = await Product.find({}, {id : 1, name: 1} );

        const getOneId = getIdProducts.map((el) => {
            return {
                params : {
                    update: el.name,
                    productDetails: el.id,
                }
            }
        })

        return {
            paths : getOneId,
            fallback: false,
        }

    }

    export async function getStaticProps(context : any) {

        const id = context.params.productDetails;

        const findId = await Product.findById({
            _id : new mongoose.Types.ObjectId(id)
        });

        return {
            props: {
                id,
                productsProps : {
                    id : findId._id.toString(),
                    name: findId.name,
                    image : findId.image,
                    price: findId.price,
                    description: findId.description,
                }
            }
        }
    }