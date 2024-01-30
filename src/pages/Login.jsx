import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Context, server } from '../main';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);


    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(email, password);
        try {
            const { data } = await axios.post(`${server}/users/login`, {
                email, password
            }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            toast.success(data.message);
            setIsAuthenticated(true);
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data.message);
            setIsAuthenticated(false);
            setLoading(false);
        }
    };

    if (isAuthenticated) return <Navigate to={"/"} />

    return (
        <div className="min-h-screen h-full flex items-center justify-center bg-gray-100">
            <section className="sticky top-0 bg-white p-8 rounded-md shadow-md w-full md:w-96">
                <h1 className=' text-center text-2xl font-bold mb-4'>Welcome Back!</h1>
                <h1 className=' text-center text-xl font-bold mb-4'>Sign in</h1>
                <form onSubmit={submitHandler} className="space-y-4">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Login
                    </button>
                    <h4 className="text-center text-gray-500">Or</h4>
                    <Link to="/register" className="block text-center text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </form>
            </section>
        </div>

    );
};

export default Login