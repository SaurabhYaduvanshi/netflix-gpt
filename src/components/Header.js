import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store)=> store.user)


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // navigate("/")
    }).catch((error) => {
       navigate("/error")
    });
  }

  useEffect(()=>{
     const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName, photoURL}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
      } else {
         dispatch(removeUser());
         navigate("/")
      }
    });
    return ()=> unSubscribe();

  },[])



  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between  '>
      <img 
      className='w-44'
      src={LOGO} alt='logo'/>

      {user &&<div className='flex p-2'>
        {/* <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-10-x-10-qo9h82134t9nv0j0.jpg' alt='user-icon' className='w-12 h-12'/> */}
        <img src={user.photoURL} alt='user-icon' className='w-12 h-12'/>
        <button className='font-bold p-1 text-white' onClick={handleSignOut}>(Sign out)</button>
      </div>}

    </div>
  )
}

export default Header