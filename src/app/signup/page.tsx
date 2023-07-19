"use client"
import Link from "next/link";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUpPage() {

    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    });
    const [buttonDiabsle, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignUp = async () => {
        alert("K cha")
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            router.push("/login");
        } catch (e: any) {
            toast.error(e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="h-[100vh] bg-gray-800 flex flex-col justify-center items-center">
            <div className="w-[35%] px-[3%] py-[20px] bg-gray-900 flex flex-col gap-[15px]">
                <h1 className="text-center text-white text-2xl">
                    {!loading ? "Sign Up" : "Processing"}
                </h1>
                <label className="text-sm text-gray-100">User Name*</label>
                <input className="p-2" placeholder="Joe Doe" onChange={(e) => {
                    setUser({ ...user, username: e.target.value })
                }} />
                <label className="text-sm text-gray-100">User Email*</label>
                <input className="p-2" placeholder="joedoe@gmail.com" type="email" onChange={(e) => {
                    setUser({ ...user, email: e.target.value })
                }} />
                <label className="text-sm text-gray-100">User Password*</label>
                <input className="p-2" placeholder="*******" type="password" onChange={(e) => {
                    setUser({ ...user, password: e.target.value })
                }} />
                <button onClick={onSignUp}
                    className="p-2 bg-gray-800 text-gray-100 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" disabled={buttonDiabsle}
                >
                    {buttonDiabsle ? "Cannot Sign Up" : " Sign Up"}
                </button>
                <Link href={'/login'} className="text-gray-100 text-center">Visit Login Page</Link>
            </div>
        </div>
    );
}