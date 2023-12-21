
import { useState ,useRef} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
  import { auth } from "../utils/firebase";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { BG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

  //import { useNavigate } from "react-router-dom";

const Login =() => {
    
    
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
   // const navigate = useNavigate();
   const dispatch = useDispatch();

   
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);   

        const handleButtonClick=() =>{
            // validate thr form data 
            const message = isSignInForm
            ? checkValidData(email.current.value, password.current.value)
            : checkValidData(
            email.current.value,
            password.current.value,
            name.current.value
            );

        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current.value,
                  photoURL:USER_AVATAR,
                })
                  .then(() => {
                   // navigate("/browse");
                   const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
                  })
                  .catch((error) => {
                    setErrorMessage(error.message);
                  });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
              });
          } else {
            // Sign In Logic
            signInWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                
                
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
              });
          }
        
            
        };

        const toggleSignInForm = () => {
            setIsSignInForm(!isSignInForm);
        };
    

    return (
        <div>
          <Header/>
            <div className="absolute">
                <img 
                src={BG_URL}
                alt="Logo"
                />
            </div>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                  }}
                className="w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-black text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && (
                <input
                    ref={name}
                    type="text"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700"
                ></input>
                )}
                <input 
                ref={email}
                type="text" placeholder="Email or phone number" className="p-4 my-4 w-full bg-gray-700"/>

                <input 
                ref={password}
                type="text" placeholder="Passwrord" className="p-4 my-4 w-full bg-gray-700"/>

                <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
                
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