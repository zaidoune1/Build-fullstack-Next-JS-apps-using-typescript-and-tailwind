    import Image from 'next/image'
    import React from 'react'

    const SingalProducts = ({idSingalProduct} : any) => {

    return (

        
            <div className="flex justify-center flex-col items-center phone:my-[2px] min-h-screen">
            <div className="flex flex-col justify-center items-center w-[30rem] shadow-2xl my-10 phone:w-[23rem] phone:h-[20rem] phone:my-[20px] phone:min-h-[30rem] rounded-md">
                        <img src={idSingalProduct.image} alt={idSingalProduct.name} className="w-full h-full object-cover p-3"/>
                        <div className="flex justify-between w-full h-full phone:h-[13rem] p-2">
                        <div className="flex flex-col w-full">
                        <h1 className="mt-2">Product name : {idSingalProduct.name}</h1>
                        <p className="mt-2"> Product description : {idSingalProduct.description}</p>
                        <p className="mt-2"> Product price : {idSingalProduct.price}$</p>
                    </div>
                        <img src={idSingalProduct.image} alt={idSingalProduct.name} className="w-[80px] h-[80px] object-cover mt-2 rounded-lg shadow-2xl shadow-lg"/>
                    </div>
                </div>
            </div>
    )

    }
    export default SingalProducts