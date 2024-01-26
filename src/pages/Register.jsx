import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Context, server } from '../main';
import toast from 'react-hot-toast';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(name, email, password);

        try {
            const { data } = await axios.post(`${server}/users/new`, {
                name, password, email
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })

            toast.success(data.message);
            setIsAuthenticated(true);
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data.message);
            setIsAuthenticated(false);
            setLoading(false);

        }

        if (isAuthenticated) return <Navigate to={"/"} />

    }
    return (
        <div className="login">
            <section>
                <form onSubmit={submitHandler}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        type='name' placeholder='Name.' />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type='email' placeholder='Email.' />
                    <input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                        type='password' placeholder='Password..' />
                    <button type='submit'>Sign Up</button>
                    <h4>Or</h4>
                    <Link to={"/login"}>Login</Link>
                </form>
            </section>
        </div>
    );
};

export default Register