import connectDB from "@/app/utils/connect";
import Category from "@/app/models/categories/categories";
import { NextResponse } from "next/server";

export async function POST(req) {
    connectDB();
    try{
         const data = await req.json();
         return NextResponse.json("Data : ", data)
    }
    catch(e){
        return NextResponse.json("Error : " , e)
    }
}