"use client";

import { removeUser } from "@/store/slices/user";
import { meraStore } from "@/store/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
// import { users } from "../data"

export default function UserContainer(){

    return <Provider store={meraStore}>
        <Users></Users>
    </Provider>

}


function Users(){

    let [users, setUsers]  = useState([]);

    let dispatch = useDispatch();
    let router=  useRouter();

    useEffect(()=>{
        
        axios.get('/api/auth').then((resp)=>{
            setUsers(resp.data)
                console.log(resp)
        });

    }, [])


    return<div>
        {/* <h1>{data.city}</h1> */}
        <table border="1">
            {
        users.map(function(user, i){
                    return <tr key={i}>
                <td>{user.email}</td>
                        <td>{user.password}</td>

                        <td>
                            <button onClick={()=>{

                                dispatch( removeUser(i) );

                            }}>Delete</button>
                        </td>

                        <td>
                            <button onClick={()=>{
                                router.push('/signup?abc='+user.email)
                            }}>Edit</button>
                        </td>
                    </tr>
                })
            }
        </table>
    </div>


}