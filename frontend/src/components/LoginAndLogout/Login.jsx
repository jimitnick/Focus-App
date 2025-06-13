import React, { useContext, useEffect } from 'react'
import GoogleSignInButton from '../../providers/GoogleSignInButton'
import { UserContext } from '../../contextProviders/UserContext'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';

const Login = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const addUser = async (user) => {
      await setDoc(doc(db, "TodoLists", user.uid), {
        TaskName:"",
        TaskDescription:""
      });
    }
    useEffect(() => {
      const handlelogin = async () => {
        if(user) {
            navigate("/homepage");
            await addUser(user);
            console.log(user);
        }
      }
       handlelogin() 
    },[user])
  return (
    !user && 
      <div className='w-screen h-screen flex items-center justify-center bg-black'>
          <GoogleSignInButton />
      </div>
  )
}

export default Login
