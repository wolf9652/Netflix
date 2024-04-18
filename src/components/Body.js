import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import Header from './Header'
import Loading from './Loading'
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import GptSuggestions from './GptSuggestions'


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(store => store.toggle.loading);

  useEffect( () =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user.uid;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/") 
      }
    });
  },[])

  return (
    <div className='w-screen h-screen -z-1'>
        <Header/>
          
        

        {
          loading ? (<Loading/>) : (<Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/search' element={<GptSuggestions/>}/>
        </Routes>)
        }
        
        
    </div>
  )
}

export default Body