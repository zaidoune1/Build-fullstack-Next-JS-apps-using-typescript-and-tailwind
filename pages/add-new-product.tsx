import AddNewProducts from '@/components/AddNewProducts'
import axios from 'axios'
import Head from 'next/head';
import { useRouter } from 'next/router'

const AddProduct = () => {

    const router = useRouter();

    const handelPost = async (enterProduct : string) => {

        const resData = await axios.post('/api/products' , enterProduct , {

            headers : {'Content-Type' : 'application/json'}
        });

        router.push('/')
    } 

return (

    <main className='w-[50%] border shadow-2xl my-[10px] mx-auto flex justify-center items-center'>
        <Head>
            <title>Add-new-product</title>
            <meta name="new-product" content="Add-new-product"/>
            <link rel="short-cut-icone" href="favicon.ico"/>
        </Head>
        <AddNewProducts onAddData = {handelPost} />
    </main>
)
}

export default AddProduct