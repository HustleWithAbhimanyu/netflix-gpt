import { useState } from "react";
import React from "react";
import Header from "./Header";

const Login =() => {
    
    const[isSignInForm, setIsSignInForm]=useState(true);

    const handleButtonClick=() =>{

    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
      };

    return (
        <div>
          <Header/>
            <div className="absolute">
                <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="Logo"
                />
            </div>
            <form className="w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-black text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && (
                <input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700"
                ></input>
                )}
                <input type="text" placeholder="Email or phone number" className="p-4 my-4 w-full bg-gray-700"/>
                <input type="text" placeholder="Passwrord" className="p-4 my-4 w-full bg-gray-700"/>
                
                <button className="p-4 my-6 bg-red-700 rounded-lg w-full" onClick={handleButtonClick}>{isSignInForm ?"Sign In":"Sign Up"}</button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm
                     ? "New to Netlfix? Sign Up Now."
                     : "Already registered ? Sign In Now."}
                 </p>
            </form>
        </div>
      )
}

export default Login