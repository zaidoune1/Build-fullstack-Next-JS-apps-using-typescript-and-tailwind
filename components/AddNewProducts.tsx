import { useRouter } from "next/router";
import { useState } from "react"

const AddNewProducts = ({onAddData, productsProps, handelUpdate} : any) => {

    const [name, setName] = useState<string>();
    const [image, setImage] = useState<string>();
    const [price, setPrice] = useState<number>();
    const [description, setDescription] = useState<string>();
    
    const handelSubmit = (ev :React.FormEvent) => {

        ev.preventDefault()

        const productsData  =  {
            name,
            image,
            price,
            description
        }

        !productsProps ? onAddData(productsData) : handelUpdate(productsData)
    }
    return (

        <form onSubmit={handelSubmit} className='flex flex-col p-5'>

                <label htmlFor='name'/>Name<label/>
                <input className='border w-[35rem] my-4 rounded-md bg-[#0000ff0f] phone:w-[20rem]' onChange={(e : any) => {
                    setName(e.target.value)
                }} type='text' maxLength={20} defaultValue={productsProps && productsProps.name} id='name' name='name' required/>

                <label htmlFor='name'/>image<label/>
                <input  className='border inpt w-[35rem] my-4 rounded-md bg-[#0000ff0f] phone:w-[20rem]' onChange={(e : any) => {
                    setImage(e.target.value)
                }} type='url' id='image' defaultValue={productsProps && productsProps.image} name='image' required/>

                <label htmlFor='name'/>Price<label/>
                <input  className='border w-[35rem] my-4 rounded-md bg-[#0000ff0f] phone:w-[20rem]' onChange={(e : any) => {
                    setPrice(e.target.value)
                }} type='text' defaultValue={productsProps && productsProps.price} maxLength={3} id='price' name='price' required/>

                <label className='' htmlFor='name'/>description<label/>
                <input className='border w-[35rem] my-4 py-4 rounded-md bg-[#0000ff0f] phone:w-[20rem]' onChange={(e : any) => {
                    setDescription(e.target.value)
                }} maxLength={60} type='text' defaultValue={productsProps && productsProps.description} id='description' name='description' required/>

                <div className='flex justify-end items-center'>
                    <button className='flex transition text-white justify-center rounded-md bg-[#1a202d] hover:bg-[blue]  items-center px-4 py-2 w-80 phone:w-[10rem] ' type='submit'>Add Product</button>
                </div>
        </form>
    )
    }

export default AddNewProducts