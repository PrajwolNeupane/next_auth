"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {

    const router = useRouter();
    const [data,setData] = useState({username:"",email:"",_id:""});

    const logOut = async () => {
        try {
            const response = await axios.get("/api/users/logout");
            router.push("/login");
        } catch (e: any) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const response = await axios.get('/api/users/me');
                setData(response.data.data);
                console.log(response);
            } catch (e: any) {
                console.log(e)
            }
        }
        getUserDetails();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            {
                data ? <>
                <h1>{data.username}</h1>
                <h1>{data.email}</h1>
                <Link href={`profile/${data._id}`}>View Profile</Link>
                </> : <></>
            }
            <button onClick={logOut} className="p-2 mt-2 bg-gray-800 text-gray-100 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Log Out</button>
        </div>
    )
}