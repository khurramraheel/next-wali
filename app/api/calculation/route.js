import { NextResponse } from "next/server"

export async function PUT(incomingWala){

}

export async function POST(incomingWala){

    let data = await incomingWala.json();

    let total = data.num1 + data.num2;

    console.log(data);

    console.log("API touch hui"

    )
    return NextResponse.json({
        success:true,
        total
    });
}