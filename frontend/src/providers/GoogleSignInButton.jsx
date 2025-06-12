import React, { useContext, useEffect } from 'react'
import GoogleLogo from "../images/googleLogo.png"
import { UserContext } from '../contextProviders/UserContext';

const GoogleSignInButton = () => {
    const { user, loginWithGoogle } = useContext(UserContext);
    useEffect(() => {
        if (user) {
            console.log("User signed in:", user);
        }
    }, [user]);
  return (
    <button className='flex gap-3 items-center justify-center bg-white p-7 rounded-2xl w-[400px]' onClick={() => {loginWithGoogle()}}>
        <img src={GoogleLogo} alt="" className='h-8 w-8'/>
        <span className='text-black text-xl'>Sign in with Google</span> 
    </button>
  )
}

export default GoogleSignInButton
