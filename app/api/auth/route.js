import { NextResponse } from "next/server";

import { pipeline } from "stream";
import {promisify} from 'util';

let saveKaro = promisify(pipeline);

import fs from 'fs';

// fs.writeFileSync('hello-wali.txt', "teh asd akdjkl jalsdkj kadjkasdjkasd")

// fs = file-system

let users = [];

export async function DELETE(req) {

    let meraData = await req.json();

    users.splice(meraData.index, 1);
    
    return NextResponse.json({success:true});

}

export async function GET(req) {

    return NextResponse.json(users);

}


function getName(email){
    return email.split('@')[0];
}

export async function POST(req) {



    
    let meraData = await req.formData();
    
    let meriFile = meraData.get('picture');

    let userName = getName( meraData.get('email') );

    let folderKaPath = 'public/my-uploads/'+userName;

    // mkdir, yeh function folder bananta h 
     fs.mkdir(folderKaPath, ()=>{
        // cb, yeh hamesh async functoin kay chlne kay baad run hota h

        //      let user = {
        //     email:meraData.get('email'),
        //     password:meraData.get('password'),
        //     pic:meriFile.name,
        // }

        // users.push(user);

        saveKaro(meriFile.stream(), fs.createWriteStream(folderKaPath + '/' + meriFile.name) );


     });

    // console.log(meriFile.name);

    //     let user = {
    //         email:meraData.get('email'),
    //         password:meraData.get('password'),
    //         pic:meriFile.name,
    //     }

    //     users.push(user);
    
    // console.log(meraData.get('email'));
    // console.log(meraData.get('password'));
  



    return NextResponse.json({ abc: 100, });

}