import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context, server } from '../main';
import axios from 'axios';
import toast from 'react-hot-toast';

function Header() {

    const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);

    const logoutHandler = async () => {
        setLoading(true);
        try {
            await axios.get(`${server}/users/logout`, {
                withCredentials: true
            });

            toast.success("Logged Out Successfully...");
            setIsAuthenticated(false);
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data.message);
            setIsAuthenticated(true);
            setLoading(false);

        }
    }

    return (
        <nav className="flex sticky top-0 z-50 items-center justify-between px-6 md:px-[200px] py-4 bg-black">
            <div className="text-white">
                <h2 className="text-2xl font-extrabold">ToDo App.</h2>
            </div>
            <article className="flex items-center justify-end space-x-4">
                <Link to="/" className="text-white hover:text-gray-300 transition duration-300 text-xl font-semibold">HOME</Link>
                <Link to="/profile" className="text-white hover:text-gray-300 transition duration-300 text-xl font-semibold">PROFILE</Link>

                {isAuthenticated ? (
                    <button disabled={loading} onClick={logoutHandler} className="btn hover:text-gray-300 text-white transition duration-300 text-xl font-semibold">
                        LOGOUT
                    </button>
                ) : (
                    <Link to="/login" className="text-white hover:text-gray-300 transition duration-300 text-xl font-semibold">LOGIN</Link>
                )}
            </article>
        </nav>

    )
}

export default Header