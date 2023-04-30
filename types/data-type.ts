import { ObjectId } from "mongoose"

    export type data = {
        id: string
        name: string
        image: string
        price: number
        description: string
    }

    export type dataArray = data & {
        _id :ObjectId
    };


