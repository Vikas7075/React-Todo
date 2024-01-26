import React, { useContext } from 'react'
import { Context } from '../main';
import Loader from '../components/Loader';


function Profile() {

    const { isAuthenticated, user, loading, } = useContext(Context);
    console.log(user);

    return (
        loading ? <Loader /> : (
            <div style={{ background: 'orange', margin: '50px', padding: '20px' }}>
                <h1 style={{ fontFamily: 'monospace', borderBottom: '2px solid red' }}>{user?.name}</h1>
                <p style={{ fontFamily: 'cursive', marginLeft: '10px', borderBottom: '2px solid black' }}>{user.email}</p>
            </div>)
    )
}

export default Profile