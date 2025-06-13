import React, { useContext, useEffect } from 'react'
import GoogleSignInButton from '../../providers/GoogleSignInButton'
import { UserContext } from '../../contextProviders/UserContext'
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import background from "../../images/background.png"
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
      <div className={`relative w-screen h-screen flex items-center justify-end bg-black`}>
          <img src={background} alt="" className='absolute object-cover h-full w-full z-0'/>
          <div className='flex flex-col absolute right-30 items-center gap-5 p-3 h-[300px] justify-center w-[400px] rounded-lg shadow-white shadow-md bg-[#174375]'>
            <span className='text-white text-3xl'>Welcome back, </span>
            <span className='text-white text-xl'>Please login to continue</span>
            <GoogleSignInButton />
          </div>
          
      </div>
  )
}

export default Login
