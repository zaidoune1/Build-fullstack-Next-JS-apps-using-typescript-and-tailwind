/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify:true,
  env:{
    MONGO_URI: "mongodb+srv://moezzaidoun:PQYzP5TDMIKyYiFQ@cluster0.shg93jp.mongodb.net/product_store?retryWrites=true&w=majority",
    APP_DEV : 'http://localhost:3000',
    APP_PRDO : ''
  } 
}

module.exports = nextConfig
