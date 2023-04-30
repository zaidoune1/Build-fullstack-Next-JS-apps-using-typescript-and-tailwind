import { Inter } from 'next/font/google'
import MainHome from '@/components/MainHome'
import Head from 'next/head';
import { dbConnect } from '@/util/mongo';
import Product from '@/models/Products';
import { useRouter } from 'next/router';
import { data, dataArray } from '@/types/data-type';

const inter = Inter({ subsets: ['latin'] })

type datasProps = {
  datas : data[]
}

export default function Home({datas} : datasProps) {

  const urlDelete = `http://localhost:3000/api/products`

  const route = useRouter();

  const handelDelete = async (id : string) => {
    await fetch(`${urlDelete}/${id}`, {
      method : 'DELETE',
      headers : {
        'Content-Type' : 'application/json'
      },
    })
    route.push('/')
  }

  return (
    <main>
      <Head>
          <title>Products</title>
          <meta name="products" content="products"/>
          <link rel="short-cut-icone" href="favicon.ico"/>
      </Head>
          <MainHome datas={datas} handelDelete={handelDelete}/>
    </main>
  )
}

export async function getServerSideProps() {

  dbConnect();

  const res = await Product.find();

    return {
        props : {
            datas : res.map((el : dataArray) => ({
              id : el._id.toString(),
              name : el.name,
              image : el.image,
              price : el.price,
              description : el.description
            }))
        }
    }
}
