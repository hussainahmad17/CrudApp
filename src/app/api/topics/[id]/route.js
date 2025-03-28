import connectionDB from "@/app/libs/db"
import Topic from "@/app/models/topic"
import { NextResponse } from "next/server"

export const PUT = async (request, { params }) => {
    const { id } =await params
    const { newTitle: title, newDescription: description } = await request.json()
    await connectionDB();
    await Topic.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({ message: "updated" }, { status: 200 })
}

export const GET = async (request, {params}) => {
    const { id } =await params;
    await connectionDB();
    const Indtopic = await Topic.findOne({_id:id})
    return  NextResponse.json({Indtopic})
}




