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
    <button className='flex gap-3 items-center justify-center bg-[#F2F2F2] cursor-pointer shadow-white shadow-sm p-5 rounded-lg w-[350px] z-1' onClick={() => {loginWithGoogle()}}>
        <img src={GoogleLogo} alt="" className='h-8 w-8 bg-blend-difference'/>
        <span className='text-black text-xl'>Sign in with Google</span> 
    </button>
  )
}

export default GoogleSignInButton
