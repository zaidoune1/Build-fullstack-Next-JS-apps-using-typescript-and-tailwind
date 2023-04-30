import { PropsWithChildren } from "react"
import MainNvigation from "../MainNvigation"
import Fouter from "../Fouter"

    const Layout = ({children} : PropsWithChildren) => {
    return (
        <main className="relative">
            <MainNvigation/>
            {children}
            <Fouter/>
        </main>
    )
    }

    export default Layout