import React, { useContext } from 'react';
import { Context } from '../main';
import Loader from '../components/Loader';

function Profile() {
    const { isAuthenticated, user, loading } = useContext(Context);

    return (
        loading ? (
            <Loader />
        ) : (
            <div className="bg-orange-200 m-10 p-8">
                <h1 className="font-mono border-b-2 border-red-500">{user?.name}</h1>
                <p className="font-serif ml-2 border-b-2 border-black">{user.email}</p>
            </div>
        )
    );
}

export default Profile;
