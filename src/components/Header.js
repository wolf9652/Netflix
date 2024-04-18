import React from 'react'
import image from "../utils/download.png"
import { useDispatch } from "react-redux"
import { PiSignOutBold } from "react-icons/pi";
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { logo } from '../utils/constants';
import { FaSearch } from "react-icons/fa";
import { searchToggle } from '../utils/gptSlice';
import { IoChevronBack } from "react-icons/io5";


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  function signOutHandler(){
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }

  function handleSearch(){
    dispatch(searchToggle())
  }

  function handleBack(){
    navigate("/browse")
  }
  return (
    <div className='absolute py-8 px-4 bg-gradient-to-b from-black w-screen z-20 flex flex-col md:flex-row justify-between'>
        <img src={logo} 
            alt='logo'
            className='w-44 mx-auto md:mx-0'
        />
        {
          window.location.pathname === "/browse" ? (
            <div className='-m-2 md:m-3 p-3 flex gap-3 items-center mx-auto md:mx-0 justify-between md:justify-normal'>
              <button className='text-white font-bold p-2 bg-gray-500 bg-opacity-50 rounded-3xl'
                onClick={handleSearch}
              >
                <FaSearch size={25} />
              </button>
              <img src={image} 
                alt='usericon'
                className='w-9 '
              />
              <button
                className='bg-gray-500 bg-opacity-50 text-black p-2 font-bold rounded-lg'
                onClick={signOutHandler}
              >
                <PiSignOutBold size={20} />
              </button>
            </div>
          ) : (
            window.location.pathname === "/search" ? (
              <div className='m-3 p-3 flex gap-3 items-center'>
                <button 
                className='text-white flex items-center text-lg hover:text-red-500 transition-all'
                onClick={handleBack}
                >
                  <IoChevronBack size={25}/>Back
                </button>
                <img src={image} 
                  alt='usericon'
                  className='w-9 '
                />
                <button
                  className='bg-gray-500 bg-opacity-50 text-white p-2 font-bold rounded-lg'
                  onClick={signOutHandler}
                >
                  <PiSignOutBold size={20} />
                </button>
              </div>
            ) : (<div></div>)
          )

        }
        
    </div>
  )
}

export default Header