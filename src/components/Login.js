import React, { useRef, useState } from 'react'
import {validate} from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [isSignIn,setIsSignIn] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null)
  const password = useRef(null)
  const ConfirmPassword = useRef(null)
  const name = useRef(null)
  const navigate = useNavigate();

  function clickHandler(){
    setIsSignIn(!isSignIn);
  }

  function buttonHandler(event){
    event.preventDefault()
    console.log(email.current.value)
    console.log(password.current.value)
    let message = null;
    if(!isSignIn){
      message = validate(email.current.value,password.current.value,ConfirmPassword.current.value,name.current.value)
    }
    else{
      message = validate(email.current.value,password.current.value)
    }
    setErrorMessage(message)
    console.log(message)

    if(message) return

    // Sign Up/Sign In Logic
    if(!isSignIn){
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value,
        name.current.value
      )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });
    }
    else{
      // Sign In Logic
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });
    }
  }

  return (
    <div className='flex flex-row justify-center items-center h-screen'>
      
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg'
                alt='background'
                className='-z-1 fixed md:relative h-screen md:h-[150%] object-cover md:w-screen md:overflow-x-scroll'
      />
      
        <from className='w-[80%] mt-24 md:mt-64 md:w-1/2 px-[68px] py-[48px] bg-black bg-opacity-80 text-white z-10 absolute rounded-md'>
          <h1 className='font-bold text-3xl py-3'>
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input 
            type='text' 
            placeholder='Full Name' 
            className=' p-4 my-4 w-full bg-transparent border-[#4c4c4c] border rounded-md'    
            ref={name}          
            />
          )}
          <input 
            type='text' 
            placeholder='Email' 
            className=' p-4 my-4 w-full bg-transparent border-[#4c4c4c] border rounded-md'
            ref={email}
          />
          <input 
            type='password' 
            placeholder={isSignIn ? "Password" : "Create Password"} 
            className=' p-4 my-4 w-full bg-transparent border-[#4c4c4c] border rounded-md'
            ref={password}
          />
          {!isSignIn && (
            <input 
            type='password' 
            placeholder='Confirm Password' 
            className=' p-4 my-4 w-full bg-transparent border-[#4c4c4c] border rounded-md'
            ref={ConfirmPassword}
            />
          )}
          
          <p className='text-red-500'>{errorMessage}</p>

          <button 
            className='w-full bg-[#c11119] p-4 my-6 rounded-md text-xl font-bold' 
            onClick={buttonHandler}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className='py-4'>
            {isSignIn ? 
            (
              <p>New to Netflix? <span className='font-bold cursor-pointer' onClick={clickHandler}>Sign up now.</span></p>
            ) : 
            (
              <p>Already Registered! <span className='font-bold cursor-pointer' onClick={clickHandler}>Sign in now.</span></p>
            ) }
          </p>
        </from>
        
    </div>
  )
}

export default Login