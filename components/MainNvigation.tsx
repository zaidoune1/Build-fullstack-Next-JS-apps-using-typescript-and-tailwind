import Link from "next/link"
import { useRouter } from "next/router"

    const MainNvigation = () => {
        const route = useRouter();
        const routeName = route.pathname
    return (

        <header className="h-[80px] px-10 p-4  shadow-lg sticky top-0 text-white bg-[#1a202de2] phone:pt-1">
            <div className="flex justify-between items-center phone:flex-col phone:justify-center phone:items-center">
                <div>
                <Link href="/" className="text-4xl font-black phone:text-[20px] hover:text-[#6085a8] transition">Products</Link>
                </div>
                <div className="phone:flex phone:justify-center phone:items-center">
                <Link className={`${routeName === '/about' ? 'border-indigo-500 border-b-4' : ""} text-2xl mr-10 phone:text-[15px] phone:font-bold hover:border-b-4 border-indigo-500`} href="/about">About</Link>
                    <Link className={`${routeName === '/add-new-product' ? 'border-indigo-500 border-b-4' : ""} text-2xl phone:text-[15px] phone:font-bold hover:border-b-4 border-indigo-500`} href="/add-new-product">Add New Products +</Link>
                </div>
            </div>
        </header>
    )
    }

    export default MainNvigation