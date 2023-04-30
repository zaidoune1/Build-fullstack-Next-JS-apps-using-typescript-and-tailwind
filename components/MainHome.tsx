import { data } from "@/types/data-type";
import { useRouter } from "next/router"

type handelDeleted = {
    datas : data[],
    handelDelete : (id: string) => void;
}

    const MainHome = ({datas, handelDelete} : handelDeleted) => {

        const route = useRouter();

    return (
        

        <div className="flex justify-center flex-col items-center my-[30px] phone:my-[20px] phone:my[10px] bg-hero bg-no-repeat bg-center-bottom h-[100%] ">
            {
                datas.length > 0 ? datas.map((el: data) => {
                    return <div className="flex flex-col justify-center items-center w-[30rem] min-h-[35rem] rounded-md shadow-2xl my-2 phone:w-[20rem] phone:min-h-[20rem] p-2 bg-white" key={el.id}>
                            <img src={el.image} alt={el.name} className=" rounded-md w-full h-full object-containt"/>
                        <div className="flex justify-between w-full h-full phone:h-[13rem] p-2">
                            <div className="flex flex-col w-full">
                            <h1 className="mt-2">Product name : {el.name}</h1>
                            <p className="mt-2"> Product description : {el.description}</p>
                            <p className="mt-2"> Product price : {el.price}$</p>
                            </div>
                            <img src={el.image} alt={el.name} className="w-[80px] h-[80px] object-cover mt-2 rounded-lg shadow-lg"/>
                        </div>
                        <button onClick={() => {
                            route.push(`/get-product/${el.id}`)
                        }} className="text-md text-white transition bg-[#1a202d] py-3 mx-5 my-1 phone:mt-[1px] rounded-md font-bold w-[96%] hover:bg-[#0000ffaf] flex justify-center items-center">Shwo Details</button>
                        <button onClick={() => {
                            route.push(`/get-product/${el.id}/${el.name}`)
                        }} className="text-md text-white transition bg-[#1a202d] py-3 mx-5 my-1 phone:mt-[1px] rounded-md font-bold w-[96%] hover:bg-[#0000ffaf] flex justify-center items-center">Update</button>
                        <button onClick={() => {
                            handelDelete(el.id)
                        }} className="text-md text-white transition bg-[#1a202d] py-3 mx-5 my-1 phone:mt-[1px] rounded-md font-bold w-[96%] hover:bg-[#0000ffaf] flex justify-center items-center">Delete</button>
                    </div>
                }) : <h2 className="mt-[6rem] font-black text-5xl text-center">No Products in your store please add products</h2>
            }
        </div>
    )
    }

    export default MainHome;