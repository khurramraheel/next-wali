"use client";
import { useEffect, useRef, useState } from "react";

// import { users } from "../data";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createUser, removeUser, updateUser } from "@/store/slices/user";
import { meraStore } from "@/store/store";
import axios from "axios";


export default()=>{

    return <Provider store={meraStore}>
            <Signup></Signup>
    </Provider>

}

function Signup(){
    
    const {register, handleSubmit} = useForm();

    const saveUser = (user)=>{

        let fom = new FormData();
        fom.append('email',  user.email);
        fom.append('password',  user.password);
        fom.append('picture',  user.pic[0]);
        
        axios.post('/api/auth', fom);

    }


    return <div>
        <form onSubmit={handleSubmit(saveUser)}>
            <input {...register('email')} placeholder="Email" /> <br/>
            <input {...register('password')}  placeholder="Password" /> <br/>
            <input {...register('pic')} type="file" id="some"  placeholder="Profile Pic" /> <br/>

            <button>Save User</button>
        </form>
    </div>

}