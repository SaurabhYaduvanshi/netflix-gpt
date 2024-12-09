import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/")
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange=(e)=>{
   console.log(e.target.value)
   dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute  px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col  md:justify-between  md:flex-row  ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 justify-between">
          {/* <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-10-x-10-qo9h82134t9nv0j0.jpg' alt='user-icon' className='w-12 h-12'/> */}
         { showGptSearch && <select className="p-2 m-4 bg-gray-900 text-white rounded-lg " onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
            {/* <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option> */}
          </select>}

          <button
            className="bg-purple-800 text-white my-2 mx-4 p-2 rounded-lg"
            onClick={handleGptSearchClick}
          >
            { showGptSearch ? "Homepage" :"GPT Search"}
          </button>
          <img
            src={user.photoURL}
            alt="user-icon"
            className=" hidden md:block w-12 h-12 my-2 rounded-lg"
          />
          <button className="font-bold p-1 text-white" onClick={handleSignOut}>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
