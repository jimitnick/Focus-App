import React, { useContext, useEffect } from 'react'
import GoogleSignInButton from '../../providers/GoogleSignInButton'
import { UserContext } from '../../contextProviders/UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    useEffect(() => {
        if(user) {
            navigate("/homepage");
            console.log(user);
        }
    },[user])
  return (
    !user && 
      <div className='w-screen h-screen flex items-center justify-center bg-black'>
          <GoogleSignInButton />
      </div>
  )
}

export default Login
