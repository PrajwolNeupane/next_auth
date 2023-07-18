"use client"
import Link from "next/link";
import React from 'react';
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUpPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    });

    const onSignUp = async () => {
        try {

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="h-[100vh] bg-gray-800 flex flex-col justify-center items-center">
            <div className="w-[35%] px-[3%] py-[20px] bg-gray-900 flex flex-col gap-[15px]">
                <h1 className="text-center text-white text-2xl">
                    SignUp
                </h1>
                <label className="text-sm text-gray-100">User Name*</label>
                <input className="p-2" placeholder="Joe Doe" onChange={(e)=>{
                    setUser({...user,username:e.target.value})
                }}/>
                 <label className="text-sm text-gray-100">User Email*</label>
                <input className="p-2" placeholder="joedoe@gmail.com" type="email" onChange={(e)=>{
                    setUser({...user,email:e.target.value})
                }}/>
                 <label className="text-sm text-gray-100">User Password*</label>
                <input className="p-2" placeholder="*******" type="password" onChange={(e)=>{
                    setUser({...user,password:e.target.value})
                }}/>
                <button onClick={onSignUp}
                className="p-2 bg-gray-800 text-gray-100 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}