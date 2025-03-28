import connectionDB from "@/app/libs/db"
import Topic from "@/app/models/topic";
import { NextResponse } from "next/server";


export const POST = async (request) => {
     const {title , description} = await request.json()
        await connectionDB();
        await Topic.create({title, description})
        return NextResponse.json({message:"created"},{status:200})
}


export const GET = async () => {
    await connectionDB();
    const topics = await Topic.find()
    return NextResponse.json({topics})
}
 

export const DELETE = async (request) =>{
    const id = request.nextUrl.searchParams.get("id")
    await connectionDB();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message:"deleted"}, {status:200})
}
