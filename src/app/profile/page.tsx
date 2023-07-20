"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function ProfilePage(){

    const router = useRouter();

    const logOut = async () => {
        try{
            const response = await axios.get("/api/users/logout");
            router.push("/login");
        }catch(e:any){
            console.log(e.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <button onClick={logOut} className="p-2 mt-2 bg-gray-800 text-gray-100 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Log Out</button>
        </div>  
    )
}